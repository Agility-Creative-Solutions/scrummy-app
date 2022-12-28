import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

export type BackdropProps = {
  children: ReactNode;
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed top-0 left-0 flex h-full w-full items-end justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
