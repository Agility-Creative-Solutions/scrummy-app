import cx from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

export type CardProps = {
  className?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  title,
  subtitle,
  children,
}) => {
  return (
    <div
      className={cx(
        'p-5 bg-dark-100 text-light-100 rounded-3xl w-full',
        className
      )}
    >
      {(!!title || !!subtitle) && (
        <div className="pb-5">
          {title && <h4>{title}</h4>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
