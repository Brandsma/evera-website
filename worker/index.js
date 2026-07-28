// Cloudflare Worker that proxies the two Substack endpoints the site build reads.
//
// Substack (behind Cloudflare) answers GitHub Actions' datacenter IPs with a 403,
// so a CI build fetching the feed directly always produced an empty blog. Requests
// leaving a Worker come from Cloudflare's network instead, which is not blocked.
//
// Only the exact paths the build needs are forwarded, so this cannot be used as a
// general-purpose open proxy.

const UPSTREAM = 'https://bravelittleheart.substack.com';
const ALLOWED_PATHS = new Set(['/feed']);
// Tag pages, e.g. /t/evera — the build reads post tags from these because
// Substack's JSON API rate-limits Cloudflare's shared egress IPs.
const ALLOWED_PATTERN = /^\/t\/[a-z0-9-]+$/;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (!ALLOWED_PATHS.has(url.pathname) && !ALLOWED_PATTERN.test(url.pathname)) {
      return new Response('Not found', { status: 404 });
    }

    const upstream = await fetch(`${UPSTREAM}${url.pathname}${url.search}`, {
      headers: { accept: request.headers.get('accept') ?? '*/*' },
      // Cache successes briefly so repeat builds are cheap, but never cache a
      // failure: Substack rate-limits its JSON API from Cloudflare's shared IPs
      // intermittently, and a cached 429 would block builds for the whole TTL.
      cf: { cacheTtlByStatus: { '200-299': 900, '300-599': 0 } },
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') ?? 'text/plain',
        'cache-control': upstream.ok ? 'public, max-age=900' : 'no-store',
      },
    });
  },
};
