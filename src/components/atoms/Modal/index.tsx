import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

import Card from '../Card';
import Backdrop from './Backdrop';

export type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
  title: string;
  subtitle: string;
};

const modalStates = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 20,
  },
  exit: {
    y: ' 100vh',
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  title,
  subtitle,
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        variants={modalStates}
        className="w-1/3 pb-2"
      >
        <Card className="pb-7" title={title} subtitle={subtitle}>
          {children}
        </Card>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
