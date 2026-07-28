// Cloudflare Worker that proxies the two Substack endpoints the site build reads.
//
// Substack (behind Cloudflare) answers GitHub Actions' datacenter IPs with a 403,
// so a CI build fetching the feed directly always produced an empty blog. Requests
// leaving a Worker come from Cloudflare's network instead, which is not blocked.
//
// Only the exact paths the build needs are forwarded, so this cannot be used as a
// general-purpose open proxy.

const UPSTREAM = 'https://bravelittleheart.substack.com';
const ALLOWED_PATHS = new Set(['/feed', '/api/v1/posts']);

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (!ALLOWED_PATHS.has(url.pathname)) {
      return new Response('Not found', { status: 404 });
    }

    const upstream = await fetch(`${UPSTREAM}${url.pathname}${url.search}`, {
      headers: { accept: request.headers.get('accept') ?? '*/*' },
      // Builds run at most a few times a day; a short edge cache keeps repeat
      // builds cheap without serving stale posts for long.
      cf: { cacheTtl: 900, cacheEverything: true },
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') ?? 'text/plain',
        'cache-control': 'public, max-age=900',
      },
    });
  },
};
