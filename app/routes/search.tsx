import { Outlet } from '@remix-run/react';
import { mergeMeta } from '~/utils';

import type { Handle } from '~/types/handle';
import { searchPages } from '~/constants/tabLinks';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';

export const meta = mergeMeta(() => [
  { title: 'twinkl - Search' },
  { name: 'description', content: 'Search Movies, Tv Series and Anime on twinkl' },
  { property: 'og:url', content: 'https://twinkl.web.app/search' },
  { property: 'og:title', content: 'twinkl - Search' },
  { property: 'og:image', content: 'https://twinkl.web.app/api/ogimage?it=search' },
  { property: 'og:description', content: 'Search Movies, Tv Series and Anime on twinkl' },
  { name: 'twitter:title', content: 'twinkl - Search' },
  { name: 'twitter:image', content: 'https://twinkl.web.app/api/ogimage?it=search' },
  { name: 'twitter:description', content: 'Search Movies, Tv Series and Anime on twinkl' },
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
