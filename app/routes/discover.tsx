import { Outlet } from '@remix-run/react';
import { mergeMeta } from '~/utils';

import type { Handle } from '~/types/handle';
import { discoverPages } from '~/constants/tabLinks';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';

export const meta = mergeMeta(() => [
  { title: 'watchparty - Discover' },
  { name: 'description', content: 'Discover Movies, TV Shows, Anime, People and More' },
  { property: 'og:url', content: 'https://watchpartychill.vercel.app/discover' },
  { property: 'og:title', content: 'watchparty - Discover' },
  { property: 'og:image', content: 'https://watchpartychill.vercel.app/api/ogimage?it=discover' },
  { property: 'og:description', content: 'Discover Movies, TV Shows, Anime, People and More' },
  { name: 'twitter:title', content: 'watchparty - Discover' },
  { name: 'twitter:description', content: 'Discover Movies, TV Shows, Anime, People and More' },
  { name: 'twitter:image', content: 'https://watchpartychill.vercel.app/api/ogimage?it=discover' },
]);

export const handle: Handle = {
  breadcrumb: ({ t }) => (
    <BreadcrumbItem to="/discover" key="discover">
      {t('discover')}
    </BreadcrumbItem>
  ),
  showTabLink: true,
  tabLinkPages: discoverPages,
  tabLinkTo: () => '/discover',
  hideTabLinkWithLocation: (locationPathname: string) => {
    if (locationPathname === '/discover') {
      return true;
    }
    return false;
  },
  miniTitle: ({ t }) => ({
    title: t('discover'),
    showImage: false,
  }),
};

const DiscoverPage = () => <Outlet />;

export default DiscoverPage;
