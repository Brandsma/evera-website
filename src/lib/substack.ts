import { XMLParser } from 'fast-xml-parser';
import { SUBSTACK_FETCH_BASE, SUBSTACK_TAG } from '../config';
import TAGGED from '../data/tagged-slugs.json';

export interface Post {
  slug: string;
  title: string;
  /** Canonical URL of the post on Substack */
  link: string;
  /** ISO date, e.g. "2026-05-20" */
  iso: string;
  /** Formatted dates per locale, e.g. "20 May 2026" / "20 mei 2026" */
  dates: { en: string; nl: string };
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Cover image URL, if the post has one */
  cover?: string;
  /** Audio URL for podcast episodes */
  audio?: string;
  /** Plain-text summary for meta descriptions */
  description: string;
  /** Full post body as HTML */
  html: string;
}

let cache: Promise<Post[]> | null = null;

/**
 * Posts from the Substack RSS feed, fetched once per build.
 * Returns [] when the feed is unreachable or not live yet, so the
 * build never fails and the site falls back to its empty state.
 */
export function getPosts(): Promise<Post[]> {
  cache ??= fetchPosts();
  return cache;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${SUBSTACK_FETCH_BASE}/feed`, { redirect: 'follow', signal: AbortSignal.timeout(15_000) });
    if (!res.ok) {
      console.warn(`[substack] Feed at ${SUBSTACK_FETCH_BASE} returned ${res.status}; blog will be empty.`);
      return [];
    }
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const doc = parser.parse(xml);
    if (!doc?.rss) {
      // Publication not live yet: Substack redirects the feed to an HTML profile page.
      console.warn('[substack] Feed is not RSS (publication not live yet?); blog will be empty.');
      return [];
    }
    let items = doc?.rss?.channel?.item ?? [];
    if (!Array.isArray(items)) items = [items];
    let posts = items.map(toPost).filter((p): p is Post => p !== null);

    // Substack's RSS omits post tags, so curate from the snapshot instead.
    if (SUBSTACK_TAG) {
      const tagged = taggedSlugs();
      posts = posts.filter(p => tagged.has(p.slug));
    }

    posts.sort((a, b) => (a.iso < b.iso ? 1 : -1));
    console.log(`[substack] Loaded ${posts.length} post(s) from ${SUBSTACK_FETCH_BASE}, tags synced ${TAGGED.syncedAt}.`);
    return posts;
  } catch (err) {
    console.warn('[substack] Could not load feed; blog will be empty.', err);
    return [];
  }
}

/**
 * Slugs of posts carrying SUBSTACK_TAG, read from the committed snapshot.
 * Substack's RSS feed drops post tags, and every other Substack path that keeps
 * them (JSON API, tag page) answers the Worker proxy's shared Cloudflare IPs
 * with 429s — so the list is snapshotted by `npm run sync:tags` instead.
 */
function taggedSlugs(): Set<string> {
  const tag = SUBSTACK_TAG.toLowerCase();
  if (TAGGED.tag !== tag) {
    throw new Error(`snapshot holds tag "${TAGGED.tag}" but SUBSTACK_TAG is "${tag}"; run npm run sync:tags`);
  }
  return new Set(TAGGED.slugs);
}

function toPost(item: any): Post | null {
  const link = textOf(item.link);
  const slug = link.match(/\/p\/([^/?#]+)/)?.[1];
  const title = textOf(item.title);
  const html = textOf(item['content:encoded']);
  if (!slug || !title) return null;

  const date = new Date(textOf(item.pubDate) || Date.now());
  const words = stripTags(html).split(/\s+/).filter(Boolean).length;
  const description = textOf(item.description) || stripTags(html).slice(0, 200);

  return {
    slug,
    title,
    link,
    iso: date.toISOString().slice(0, 10),
    dates: {
      en: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      nl: date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }),
    },
    readingTime: Math.max(1, Math.round(words / 220)),
    cover: coverFrom(item, html),
    audio: audioFrom(item),
    description: description.slice(0, 200),
    html,
  };
}

function coverFrom(item: any, html: string): string | undefined {
  const enclosure = Array.isArray(item.enclosure) ? item.enclosure[0] : item.enclosure;
  const url: string | undefined = enclosure?.['@_url'];
  const type: string | undefined = enclosure?.['@_type'];
  if (!url) return undefined;
  const isImage = type ? type.startsWith('image/') : /\.(png|jpe?g|gif|webp|avif)(\?|$)/i.test(url);
  if (!isImage) return undefined;
  // Substack usually repeats the cover as the first image in the body; don't show it twice.
  const key = url.split(/%2F|\//).pop();
  if (key && html.includes(key)) return undefined;
  return url;
}

function audioFrom(item: any): string | undefined {
  const enclosure = Array.isArray(item.enclosure) ? item.enclosure[0] : item.enclosure;
  const url: string | undefined = enclosure?.['@_url'];
  const type: string | undefined = enclosure?.['@_type'];
  if (!url) return undefined;
  const isAudio = type ? type.startsWith('audio/') : /\.(mp3|m4a|ogg|opus|wav)(\?|$)/i.test(url);
  return isAudio ? url : undefined;
}

function textOf(v: unknown): string {
  if (v == null) return '';
  if (typeof v === 'string') return v.trim();
  if (typeof v === 'number') return String(v);
  if (typeof v === 'object' && '#text' in (v as Record<string, unknown>)) {
    return String((v as Record<string, unknown>)['#text']).trim();
  }
  return '';
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
