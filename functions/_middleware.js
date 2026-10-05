const APEX = 'shawilliams.com';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  const duplicate = host === `www.${APEX}` || host.endsWith('.pages.dev');

  if (!duplicate) return context.next();

  url.protocol = 'https:';
  url.hostname = APEX;
  url.port = '';
  return Response.redirect(url.toString(), 301);
}
