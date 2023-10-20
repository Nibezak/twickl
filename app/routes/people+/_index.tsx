import { json, type LoaderArgs } from '@remix-run/node';
import { useLoaderData, useLocation } from '@remix-run/react';
import { mergeMeta } from '~/utils';
import { useTranslation } from 'react-i18next';

import type { Handle } from '~/types/handle';
import { i18next } from '~/services/i18n';
import { authenticate } from '~/services/supabase';
import { getListPeople } from '~/services/tmdb/tmdb.server';
import { CACHE_CONTROL } from '~/utils/server/http';

export const meta = mergeMeta(() => [
  { title: 'watchparty - Popular People' },
  { name: 'description', content: 'Discover the most popular celebrities on watchparty.' },
  {
    name: 'keywords',
    content:
      'popular celebrities, popular celebrity, top celebrities, top celebrity, people celebrity, celebrity people, best celebrity, best celebrities, famous celebrity, famous people, celebrity movies, movies by celebrity, celebrity tv shows, tv show celebrities, celebrity television shows, celebrity tv series',
  },
  { property: 'og:url', content: 'https://watchparty.web.app/people' },
  { property: 'og:title', content: 'watchparty - Popular People' },
  { property: 'og:image', content: 'https://watchparty.web.app/api/ogimage?it=people' },
  { property: 'og:description', content: 'Discover the most popular celebrities on watchparty.' },
  { name: 'twitter:title', content: 'watchparty - Popular People' },
  { name: 'twitter:description', content: 'Discover the most popular celebrities on watchparty.' },
  { name: 'twitter:image', content: 'https://watchparty.web.app/api/ogimage?it=people' },
]);

export const loader = async ({ request }: LoaderArgs) => {
  const [, locale] = await Promise.all([
    authenticate(request, undefined, true),
    i18next.getLocale(request),
  ]);

  const url = new URL(request.url);
  let page = Number(url.searchParams.get('page')) || undefined;
  if (page && (page < 1 || page > 1000)) page = 1;

  return json(
    {
      people: await getListPeople('popular', locale, page),
    },
    {
      headers: { 'Cache-Control': CACHE_CONTROL.trending },
    },
  );
};

export const handle: Handle = {};

const ListPeoplePopular = () => {
  const { people } = useLoaderData<typeof loader>();
  const location = useLocation();
  const { t } = useTranslation();
};

export default ListPeoplePopular;
