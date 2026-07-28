// Refreshes src/data/tagged-slugs.json — the list of Substack posts carrying the
// site's tag.
//
// The build can't look this up itself: Substack answers CI's datacenter IPs with
// 403s, and the Cloudflare Worker proxy that solves that for the RSS feed gets
// 429s on every other Substack path, including the tag page. Post *content* still
// comes from the live feed at build time; only tag membership is snapshotted here.
//
// Run from a normal network connection after tagging a new post, then commit:
//   npm run sync:tags

import { mkdir, writeFile } from 'node:fs/promises';

// Mirrors SUBSTACK_URL / SUBSTACK_TAG in src/config.ts.
const SUBSTACK_URL = 'https://bravelittleheart.substack.com';
const SUBSTACK_TAG = 'evera';

const OUT = new URL('../src/data/tagged-slugs.json', import.meta.url);

const tag = SUBSTACK_TAG.toLowerCase();
const res = await fetch(`${SUBSTACK_URL}/t/${tag}`, { redirect: 'follow' });
if (!res.ok) throw new Error(`Tag page returned ${res.status}`);

const html = await res.text();
// Only post-preview links, so recommendations elsewhere on the page can't pull
// untagged posts in. Substack paginates past ~12 posts per tag.
const links = html.matchAll(/<a[^>]+href="[^"]*\/p\/([a-z0-9-]+)"[^>]*data-testid="post-preview-title"/g);
const slugs = [...new Set([...links].map(m => m[1]))].sort();
if (slugs.length === 0) throw new Error(`No posts found for tag "${tag}"`);

const snapshot = { tag, syncedAt: new Date().toISOString().slice(0, 10), slugs };
await mkdir(new URL('.', OUT), { recursive: true });
await writeFile(OUT, `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(`Wrote ${slugs.length} slug(s) for "${tag}": ${slugs.join(', ')}`);
