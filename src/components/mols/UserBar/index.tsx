import React, { useState } from 'react';

import { Typography } from '@/components/atoms/Typography';

import IconCards from '../../../../public/assets/icons/icon_cards.png';
import IconSprints from '../../../../public/assets/icons/icon_sprints.png';
import Icon from '../../atoms/Icon';
import MedalsIcons from '../../atoms/Medals';

type BadgeProps = {
  value?: string;
  icon: string;
};

export type UserBarProps = {
  userName: string;
  avatar: string;
  joinedAt?: string;
  welcome?: boolean;
  medal:
    | 'Bronze1'
    | 'Bronze2'
    | 'Bronze3'
    | 'Silver1'
    | 'Silver2'
    | 'Silver3'
    | 'Gold1'
    | 'Gold2'
    | 'Gold3';
};

const BarBadge = ({ value, icon }: BadgeProps) => {
  return (
    <div className="flex flex-row items-center gap-2  ">
      <img src={icon} alt={value} width="22px" height="10px" />
      {value && <Typography>{value}</Typography>}
    </div>
  );
};
const UserBar: React.FC<UserBarProps> = ({
  userName,
  avatar,
  welcome = false,
  joinedAt,
  medal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardsChosenOpen, setCardsChosenOpen] = useState(false);
  const [sprintsPlanned, setSprintsPlanned] = useState(false);
  const [medalRank, setMedalRank] = useState(false);
  return (
    <div
      className="relative flex w-full max-w-sm flex-row items-center gap-2 rounded-xl p-2 text-black"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen && (
        <div className="absolute top-0 right-0 flex h-auto w-auto flex-col gap-2.5 rounded-xl bg-white p-2">
          <div className="flex items-center gap-3">
            <Icon iconName="MdPersonRemove" />
            <Typography className="text-base font-bold">
              Remove player
            </Typography>
          </div>

          <div className="flex items-center gap-3">
            <Icon iconName="MdAdminPanelSettings" />
            <Typography className="text-base font-bold">Make admin</Typography>
          </div>
        </div>
      )}
      <div>
        <img src={avatar} alt="User Photo" className="h-9 w-9 rounded-lg" />
      </div>
      <div className="flex flex-col">
        {welcome && (
          <Typography className="text-xs italic">Welcome!</Typography>
        )}
        <Typography variant="h5" className="text-xl text-white">
          {userName}
        </Typography>
        {joinedAt && (
          <Typography className="pb-2 text-xs italic text-white">{`Joined ${joinedAt} ago `}</Typography>
        )}
        <div className="flex flex-row items-center gap-4">
          <div
            onMouseEnter={() => setMedalRank(true)}
            onMouseLeave={() => setMedalRank(false)}
          >
            <MedalsIcons medal={medal}>
              {medalRank && (
                <div className="absolute bottom-5 flex gap-2 rounded-xl bg-white p-4 text-scrummyOrange-500">
                  {medal}
                  <div className="absolute bottom-[-1px] left-2 h-5 w-5 rotate-45 rounded-tl-lg bg-white"></div>
                </div>
              )}
            </MedalsIcons>
          </div>
          {welcome && (
            <>
              <div
                onMouseEnter={() => setCardsChosenOpen(true)}
                onMouseLeave={() => setCardsChosenOpen(false)}
              >
                <BarBadge value="392" icon={IconCards.src} />
                {cardsChosenOpen && (
                  <div className="absolute bottom-5 flex gap-2 rounded-xl bg-white p-4 text-scrummyOrange-500">
                    <BarBadge value="Cards chosen" icon={IconCards.src} />
                    <div className="absolute bottom-[-1px] left-2 h-5 w-5 rotate-45 rounded-tl-lg bg-white"></div>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setSprintsPlanned(true)}
                onMouseLeave={() => setSprintsPlanned(false)}
              >
                <BarBadge value="29" icon={IconSprints.src} />
                {sprintsPlanned && (
                  <div className="absolute bottom-5 flex gap-2 rounded-xl bg-white p-4 text-scrummyOrange-500">
                    <BarBadge value="Sprints planned" icon={IconSprints.src} />
                    <div className="absolute bottom-[-1px] left-2 h-5 w-5 rotate-45 rounded-tl-lg bg-white"></div>
                  </div>
                )}
              </div>
            </>
          )}
          {!welcome && (
            <>
              <div className="text-white">
                <BarBadge value="392" icon={IconCards.src} />
                {cardsChosenOpen && (
                  <div className="absolute bottom-5 flex gap-2 rounded-xl bg-white p-4 text-scrummyOrange-500">
                    <BarBadge value="Cards chosen" icon={IconCards.src} />
                    <div className="absolute bottom-[-1px] left-2 h-5 w-5 rotate-45 rounded-tl-lg bg-white"></div>
                  </div>
                )}
              </div>
              <div className="text-white">
                <BarBadge value="29" icon={IconSprints.src} />
                {sprintsPlanned && (
                  <div className="absolute bottom-5 flex gap-2 rounded-xl bg-white p-4 text-scrummyOrange-500">
                    <BarBadge value="Sprints planned" icon={IconSprints.src} />
                    <div className="absolute bottom-[-1px] left-2 h-5 w-5 rotate-45 rounded-tl-lg bg-white"></div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBar;
