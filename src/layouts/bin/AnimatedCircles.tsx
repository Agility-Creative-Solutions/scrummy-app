import { motion } from 'framer-motion';
import React from 'react';

const AnimatedCircles = () => {
  return (
    <>
      <motion.div
        className="absolute left-[-20px] top-[-80px]  h-[80vw] max-h-[1100px] min-h-[700px] w-[80vw] min-w-[700px] max-w-[1100px] rounded-full border-[2px] border-slate-50/50 object-cover"
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.6 }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>
      <motion.div
        className=" absolute left-[-100px] h-[60vw] max-h-[800px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[800px] rounded-full border-[2px] border-slate-50/50 object-cover"
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.6 }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>
    </>
  );
};

export default AnimatedCircles;
