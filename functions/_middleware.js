const APEX = 'shawilliams.com';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  const duplicate = host === `www.${APEX}` || host.endsWith('.pages.dev');

  if (!duplicate) return context.next();

  // Keep staging project and non-production branch preview URLs accessible
  if (
    host.endsWith('.astro-shawilliams-staging.pages.dev') ||
    host === 'astro-shawilliams-staging.pages.dev' ||
    (host.endsWith('.astro-shawilliams.pages.dev') &&
      !/^[0-9a-f]{8}\.astro-shawilliams\.pages\.dev$/.test(host))
  ) {
    return context.next();
  }

  url.protocol = 'https:';
  url.hostname = APEX;
  url.port = '';
  return Response.redirect(url.toString(), 301);
}
