/* eslint-disable prettier/prettier */
import cx from 'classnames';
import React from 'react';

import Icon  from "../Icon";

export type IconButtonProps = {
  buttonSize?: number;
  color?: string;
  href?: string;
  onClick?: () => void;
  icon: string
  iconSize?: string;
  iconType?: 'primary' | 'pink' | 'success' | 'warning' | 'danger';
};

const IconButton: React.FC<IconButtonProps> = ({
  href,
  onClick,
  color,
  icon,
  iconType,
  iconSize = '30',
  buttonSize = 50,
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
        height: buttonSize,
        width: buttonSize,
      }}>
        <>
          <Icon
            iconName={icon}
            size={iconSize}
            color={color}
          />
        </>
      </div>
    </a>
  );
};

export default IconButton
