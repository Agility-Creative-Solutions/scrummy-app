import cx from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

export type StyledCardProps = {
  children: ReactNode;
};

const StyledCard: React.FC<StyledCardProps> = ({ children }) => {
  return (
    <div className={cx('p-3 bg-dark-100 text-light-100 rounded-lg w-full')}>
      {children}
    </div>
  );
};

export default StyledCard;
