export const SITE_URL = (import.meta.env.SITE ?? 'https://shawilliams.com').replace(
  /\/$/,
  '',
);

/** Absolute page URL using the site's trailing-slash canonical form. */
export function absoluteUrl(path = '/'): string {
  const raw = path.trim() || '/';
  const suffixIndex = raw.search(/[?#]/);
  const pathname = suffixIndex === -1 ? raw : raw.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : raw.slice(suffixIndex);
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const slashed =
    normalized === '/' || normalized.endsWith('/') ? normalized : `${normalized}/`;

  return new URL(`${slashed}${suffix}`, SITE_URL).href;
}

export const SITE_NAME = 'Sharon Williams Psychologist';

export const DEFAULT_TITLE =
  'Sharon Williams | Psychologist & Trusted Advisor for CEOs and C-Suite Executives';

export const DEFAULT_DESCRIPTION =
  "Registered psychologist and executive coach with over 20 years' experience working with CEOs and C-suite leaders to overcome self-sabotage, build resilience and drive lasting performance.";

export const EMAIL = 'sharon@shawilliams.com';

export const PHONE = '+61 409 377 653';

export const PHONE_HREF = 'tel:+610409377653';
