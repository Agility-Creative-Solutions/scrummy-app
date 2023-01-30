import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { IconButton } from '@/components/atoms';

export interface IActionItem {
  icon: string;
  text: string;
  href: string;
}

export type ActionBarProps = {
  actions: Array<IActionItem>;
};

const ActionBar: React.FC<ActionBarProps> = ({ actions }) => {
  const [position, setPosition] = useState(0);

  const handleActionBarClick = (e, newPos) => {
    e.preventDefault();
    setPosition(newPos);
    window.location.href = actions[newPos]?.href;
  };

  useEffect(() => {
    setPosition(actions.findIndex((a) => a.href === window.location.pathname));
  }, [actions]);

  return (
    <div className="relative">
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 shadow-lg">
        <div className="flex flex-row justify-between rounded-lg bg-black text-white">
          {actions.map((eachAction, idx) => (
            <div key={eachAction.href} className="z-20">
              <IconButton
                {...eachAction}
                size={65}
                onClick={(e) => handleActionBarClick(e, idx)}
              />
            </div>
          ))}
        </div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ x: position * 65, y: position ? -65 : 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div
            className={`absolute top-0 z-10 h-[65px] w-[65px] rounded-lg bg-scrummyOrange-500 `}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ActionBar;
