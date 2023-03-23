import { motion } from 'framer-motion';
import { useState } from 'react';

import { IconButton } from '@/components/atoms';
import Card from '@/components/atoms/Card';

export type ActionBarProps = {
  actions?: [];
  icon1?: string;
  icon2?: string;
  icon3?: string;
  buttonSize?: number;
  iconSize?: string;
  color?: string;
};

type ActionType = {
  id: string;
  icon: string;
  onClick: (idx: number) => void;
};

const ActionBar: React.FC<ActionBarProps> = ({
  actions = [
    {
      id: 'test1',
      icon: 'MdShoppingBag',
      onClick: () => console.log('icon1'),
    },
    {
      id: 'test2',
      icon: 'MdPlayCircleOutline',
      onClick: () => console.log('icon1'),
    },
    {
      id: 'test3',
      icon: 'MdPersonOutline',
      onClick: () => console.log('icon1'),
    },
  ],
  buttonSize = 30,
  iconSize,
  color,
}) => {
  const [itemActive, setItemActive] = useState(0);

  const childrenSelectorData: any = {};
  const padding = 8;
  const gap = 24;
  const cardSize = 54;

  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  for (let i = 0; i < actions.length; i++) {
    const sizeContainer = i === 0 ? 0 : cardSize;

    childrenSelectorData[`variant${i}`] = {
      x: i * (sizeContainer + gap),
    };
  }

  if (!actions || !Array.isArray(actions) || actions.length === 0) {
    return null;
  }

  return (
    <Card className="relative flex w-fit min-w-[220px] justify-around gap-x-6 rounded-xl p-2">
      <motion.div
        animate={`variant${itemActive}`}
        className="absolute top-2 h-14 w-14 rounded-lg bg-scrummyOrange-500"
        style={{ left: padding }}
        transition={{ duration: 0.5 }}
        variants={childrenSelectorData}
      ></motion.div>

      {actions.map(({ icon, onClick }: ActionType, idx) => {
        return (
          <motion.div className="relative flex" whileTap={{}} key={idx}>
            <IconButton
              icon={icon}
              buttonSize={buttonSize}
              iconSize={iconSize}
              color={color}
              onClick={() => {
                setItemActive(idx);
                onClick(idx);
              }}
            />
          </motion.div>
        );
      })}
    </Card>
  );
};
export default ActionBar;
