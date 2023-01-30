import { motion } from 'framer-motion';

import { IconButton } from '@/components/atoms';
import Card from '@/components/atoms/Card';

export type ActionBarProps = {
  icon1?: string;
  icon2?: string;
  icon3?: string;
  buttonSize?: number;
  iconSize?: string;
  color?: string;
};

const ActionBar: React.FC<ActionBarProps> = ({
  icon1 = 'MdShoppingBag',
  icon2 = 'MdPlayCircleOutline',
  icon3 = 'MdPersonOutline',
  buttonSize = 30,
  iconSize,
  color,
}) => {
  const x = 132;

  const child = {
    variantA: { x: 0 },
    variantB: { x: 132 },
    variantC: { x: 264 },
  };
  return (
    <Card className="relative flex h-[70px] w-80 justify-around">
      <motion.div
        className="absolute top-2 h-14 w-14 rounded-xl bg-scrummyOrange-500"
        style={{ right: x }}
        transition={{
          type: 'tween',
          duration: 4,
        }}
        variants={child}
      ></motion.div>
      <motion.div className="relative" whileTap={{}}>
        <IconButton
          icon={icon1}
          buttonSize={buttonSize}
          iconSize={iconSize}
          color={color}
        ></IconButton>
      </motion.div>
      <motion.div className="relative" whileTap={{}}>
        <IconButton
          icon={icon2}
          buttonSize={buttonSize}
          iconSize={iconSize}
          color={color}
        ></IconButton>
      </motion.div>
      <motion.div className="relative" whileTap={{}}>
        <IconButton
          icon={icon3}
          buttonSize={buttonSize}
          iconSize={iconSize}
          color={color}
        ></IconButton>
      </motion.div>
    </Card>
  );
};
export default ActionBar;
