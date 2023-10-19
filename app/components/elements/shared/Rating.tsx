import { cnBase } from 'tailwind-variants';

import AnilistStatIcon from '~/assets/icons/AnilistStatIcon';

interface IRatingProps {
  rating: number | string | undefined;
  ratingType?: 'movie' | 'tv' | 'anime' | 'people';
  color?: string;
  className?: string;
}

const Rating = (props: IRatingProps) => {
  const { rating, ratingType, color, className } = props;
  if (ratingType === 'movie' || ratingType === 'tv') {
    return (
      <div className={cnBase('flex flex-row items-center gap-x-2', className)}>
        <p className="rounded-large  px-1 text-gray-200">Rating</p>
        <p style={color ? { color } : {}}>{rating}</p>
      </div>
    );
  }
  return (
    <div className={cnBase('flex flex-row items-center gap-x-2', className)}>
      {Number(rating) > 75 ? (
        <AnilistStatIcon stat="good" />
      ) : Number(rating) > 60 ? (
        <AnilistStatIcon stat="average" />
      ) : (
        <AnilistStatIcon stat="bad" />
      )}
      <p style={color ? { color } : {}}>{rating}%</p>
    </div>
  );
};

export default Rating;
