import { motion } from 'framer-motion';
import { useState } from 'react';

import Card from '@/components/atoms/Card';
import Icon from '@/components/atoms/Icon';

export type ActionBarProps = {
  actions?: ActionType[];
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
  label?: string;
  onClick: (idx: number) => void;
};

const ActionBar: React.FC<ActionBarProps> = ({ actions, color }) => {
  const [itemActive, setItemActive] = useState(0);

  if (!actions || !Array.isArray(actions) || actions.length === 0) {
    return null;
  }

  const childrenSelectorData: any = {};
  const gap = 24;
  const cardSize = 54;

  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  for (let i = 0; i < actions.length; i++) {
    const sizeContainer = i === 0 ? 0 : cardSize;

    childrenSelectorData[`variant${i}`] = {
      x: i * (sizeContainer + gap),
    };
  }

  return (
    <Card className="relative mx-auto flex min-h-[60px] w-fit min-w-[220px] justify-around gap-x-6 rounded-xl p-2">
      <motion.div
        animate={`variant${itemActive}`}
        className="absolute top-1 h-[calc(100%-.5rem)] w-14 rounded-lg bg-scrummyOrange-500"
        style={{ left: 4 }}
        transition={{ duration: 0.5 }}
        variants={childrenSelectorData}
      ></motion.div>

      {actions.map(({ icon, label, onClick }: ActionType, idx) => {
        return (
          <motion.div
            className="relative flex max-w-[70px] cursor-pointer flex-col items-center justify-center px-2"
            whileTap={{}}
            key={idx}
            onClick={() => {
              setItemActive(idx);
              onClick(idx);
            }}
          >
            <Icon iconName={icon} size="28" color={color} />
            {label && (
              <div>
                <span className="text-xs font-bold uppercase">{label}</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </Card>
  );
};
export default ActionBar;
