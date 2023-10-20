import { Outlet } from '@remix-run/react';
import { mergeMeta } from '~/utils';

import type { Handle } from '~/types/handle';
import { searchPages } from '~/constants/tabLinks';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';

export const meta = mergeMeta(() => [
  { title: 'watchparty - Search' },
  { name: 'description', content: 'Search Movies, Tv Series and Anime on watchparty' },
  { property: 'og:url', content: 'https://watchpartychill.vercel.app/search' },
  { property: 'og:title', content: 'watchparty - Search' },
  { property: 'og:image', content: 'https://watchpartychill.vercel.app/api/ogimage?it=search' },
  { property: 'og:description', content: 'Search Movies, Tv Series and Anime on watchparty' },
  { name: 'twitter:title', content: 'watchparty - Search' },
  { name: 'twitter:image', content: 'https://watchpartychill.vercel.app/api/ogimage?it=search' },
  { name: 'twitter:description', content: 'Search Movies, Tv Series and Anime on watchparty' },
]);

export const handle: Handle = {
  breadcrumb: ({ t }) => (
    <BreadcrumbItem to="/search" key="search">
      {t('search.action')}
    </BreadcrumbItem>
  ),
  showTabLink: true,
  tabLinkPages: searchPages,
  tabLinkTo: () => '/search/',
  miniTitle: ({ t }) => ({
    title: t('search.action'),
    showImage: false,
  }),
};

const SearchPage = () => <Outlet />;

export default SearchPage;
