/* eslint-disable prettier/prettier */
import cx from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

export type IconProps = {
  size?: number;
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconType?: 'primary' | 'pink' | 'success' | 'warning' | 'danger';
};

const IconButton: React.FC<IconProps> = ({
  href,
  onClick,
  icon,
  iconType,
  size,
}) => {
  
  return (
    <a 
    className={cx(
      'cursor-pointer border-none rounded-xl my-auto ease-in duration-200  inline-flex items-center active:shadow-xl hover:shadow-md',{
        'bg-scrummyOrange-500 text-white': iconType === 'primary',
        'bg-scrummyPink-500 text-white': iconType === 'pink',
        'bg-scrummyGreen-500 text-white': iconType === 'success',
        'bg-scrummyYellow-500 text-white': iconType === 'warning',
        'bg-scrummyRed-500 text-white': iconType === 'danger',        
      }
    )}
    href={href} 
    onClick={onClick}
    >
      <div className='m-auto flex items-center justify-center' style={{
        height: size || 50,
        width: size || 53,
      }}>
        {/* Waiting for HOC Icons */}
        <>
          {icon}
        </>
      </div>
    </a>
  );
};

export default IconButton