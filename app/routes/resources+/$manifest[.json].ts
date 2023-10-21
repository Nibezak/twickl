import { json, type LoaderArgs } from '@remix-run/node';

import { i18next } from '~/services/i18n';
import { authenticate } from '~/services/supabase';

export const loader = async ({ request }: LoaderArgs) => {
  const [, locale] = await Promise.all([
    authenticate(request, undefined, true),
    i18next.getLocale(request),
  ]);
  return json(
    {
      short_name: 'twinkl',
      name: 'twinkl',
      theme_color: '#0072F5',
      background_color: '#000000',
      display: 'standalone',
      display_override: ['standalone', 'browser', 'fullscreen'],
      description: 'An app for watching movies, anime more',
      start_url: '/',
      dir: 'ltr',
      scope: '/',
      lang: locale,
      orientation: 'natural',
      categories: ['books', 'entertainment', 'music', 'news', 'personalization', 'photo'],
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': 'application/manifest+json',
      },
    },
  );
};
