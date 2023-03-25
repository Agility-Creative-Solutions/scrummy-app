import React from 'react';

import { Typography } from '@/components/atoms/Typography';

import IconCards from '../../../../public/assets/icons/icon_cards.png';
import IconSprints from '../../../../public/assets/icons/icon_sprints.png';

type BadgeProps = {
  value?: string;
  icon: string;
};

const BarBadge = ({ value, icon }: BadgeProps) => {
  return (
    <div className="flex flex-row items-center gap-2  ">
      <img src={icon} alt={value} width="22px" height="10px" />
      {value && <Typography>{value}</Typography>}
    </div>
  );
};

const UserBar = () => {
  return (
    <div className="flex w-full flex-row items-center gap-2 text-white">
      <div>
        <img src={IconSprints.src} alt="User Photo" />
      </div>
      <div className="flex flex-col">
        <Typography className="text-xs italic">Welcome!</Typography>
        <Typography variant="h5" className="text-xl">
          Fernando A.
        </Typography>
        <div className="flex flex-row items-center gap-3">
          <BarBadge icon="icon" />
          <BarBadge value="392" icon={IconCards.src} />
          <BarBadge value="29" icon={IconSprints.src} />
        </div>
      </div>
    </div>
  );
};

export default UserBar;
