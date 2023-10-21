import * as React from 'react';
import { Spacer } from '@nextui-org/spacer';
import { json, type LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { mergeMeta } from '~/utils';
import { useTranslation } from 'react-i18next';
import { Gallery, Item, type GalleryProps } from 'react-photoswipe-gallery';
import { MimeType } from 'remix-image';

import type { Handle } from '~/types/handle';
import type { loader as tvIdLoader } from '~/routes/tv-shows+/$tvId';
import { i18next } from '~/services/i18n';
import { authenticate } from '~/services/supabase';
import { getImages } from '~/services/tmdb/tmdb.server';
import TMDB from '~/utils/media';
import { CACHE_CONTROL } from '~/utils/server/http';
import { useTypedRouteLoaderData } from '~/hooks/useTypedRouteLoaderData';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';
import Image from '~/components/elements/Image';

export const loader = async ({ request, params }: LoaderArgs) => {
  const [, locale] = await Promise.all([
    authenticate(request, undefined, true),
    i18next.getLocale(request),
  ]);

  const { tvId } = params;
  const mid = Number(tvId);
  if (!mid) throw new Response('Not Found', { status: 404 });

  const images = await getImages('tv', mid, locale);
  if (!images) throw new Response('Not Found', { status: 404 });

  return json(
    { images },
    {
      headers: { 'Cache-Control': CACHE_CONTROL.detail },
    },
  );
};

export const meta = mergeMeta<typeof loader, { 'routes/tv-shows+/$tvId': typeof tvIdLoader }>(
  ({ matches, params }) => {
    const tvData = matches.find((match) => match.id === 'routes/tv-shows+/$tvId')?.data;
    if (!tvData) {
      return [
        { title: 'Missing Tv show' },
        { name: 'description', content: `There is no tv show with ID: ${params.tvId}` },
      ];
    }
    const { detail } = tvData;
    const { name } = detail || {};
    return [
      { title: `twinkl - ${name} - Photos` },
      { property: 'og:title', content: `twinkl - ${name} - Photos` },
      {
        property: 'og:url',
        content: `https://twinkl.web.app/tv-shows/${params.tvId}/photos`,
      },
      { property: 'twitter:title', content: `twinkl - ${name} - Photos` },
    ];
  },
);

export const handle: Handle = {
  breadcrumb: ({ match, t }) => (
    <BreadcrumbItem
      to={`/tv-shows/${match.params.tvId}/photos`}
      key={`tv-shows-${match.params.tvId}-photos`}
    >
      {t('photos')}
    </BreadcrumbItem>
  ),
  miniTitle: ({ parentMatch, t }) => ({
    title: parentMatch?.data?.detail?.name,
    subtitle: t('photos'),
    showImage: parentMatch?.data?.detail?.poster_path !== undefined,
    imageUrl: TMDB?.posterUrl(parentMatch?.data?.detail?.poster_path || '', 'w92'),
  }),
};

const uiElements: GalleryProps['uiElements'] = [
  {
    name: 'custom-rotate-button',
    ariaLabel: 'Rotate',
    order: 9,
    isButton: true,
    html: {
      isCustomSVG: true,
      inner:
        '<path d="M13.887 6.078C14.258 6.234 14.5 6.598 14.5 7V8.517C18.332 8.657 21.258 10.055 23.15 12.367 24.519 14.041 25.289 16.13 25.496 18.409A1 1 0 0123.504 18.591C23.327 16.645 22.68 14.952 21.601 13.633 20.156 11.867 17.831 10.653 14.5 10.517V12A1.002 1.002 0 0112.779 12.693L10.304 10.121A1.002 1.002 0 0110.324 8.713L12.8 6.286A1 1 0 0113.887 6.078ZM7.5 16A1.5 1.5 0 006 17.5V24.5A1.5 1.5 0 007.5 26H17.5A1.5 1.5 0 0019 24.5V17.5A1.5 1.5 0 0017.5 16H7.5Z" id="pswp__icn-rotate"/>',
      outlineID: 'pswp__icn-rotate',
    },
    appendTo: 'bar',
    onClick: (_, __, pswpInstance) => {
      const item = pswpInstance.currSlide?.content.element;

      const prevRotateAngle = Number(item?.dataset.rotateAngel) || 0;
      const rotateAngle = prevRotateAngle === 270 ? 0 : prevRotateAngle + 90;

      // add slide rotation
      if (item) {
        item.style.transform = `${item.style.transform?.replace(
          `rotate(-${prevRotateAngle}deg)`,
          '',
        )} rotate(-${rotateAngle}deg)`;
        item.dataset.rotateAngel = String(rotateAngle);
      }
    },
    onInit: (_, pswpInstance) => {
      // remove applied rotation on slide change
      // https://photoswipe.com/events/#slide-content-events
      pswpInstance.on('contentRemove', () => {
        const item = pswpInstance.currSlide?.content.element;
        if (item) {
          item.style.transform = `${item.style.transform?.replace(
            `rotate(-${item.dataset.rotateAngel || 0}deg)`,
            '',
          )}`;
          delete item.dataset.rotateAngel;
        }
      });
    },
  },
];

const TvPhotosPage = () => {
  const { images } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  const tvData = useTypedRouteLoaderData('routes/tv-shows+/$tvId');

  return (
    // returning null
    null
  );
};

export default TvPhotosPage;
