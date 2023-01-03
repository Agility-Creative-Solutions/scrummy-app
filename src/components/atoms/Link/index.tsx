import cx from 'classnames';
import Link from 'next/link';
import React from 'react';

export type LinkProps = {
  href: string;
  title?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  bgColor?: 'none' | 'primary' | 'white' | 'gray';
  textSize?: 'small' | 'normal' | 'large';
  textColor?: 'primary' | 'white' | 'gray';
};

const LinkButton: React.FC<LinkProps> = ({
  href,
  title,
  textSize,
  target,
  textColor,
  bgColor = 'none',
}) => {
  return (
    <div>
      <Link href={href} passHref>
        <a
          target={target}
          className={cx('text-end hover:underline ', {
            ' text-scrummyOrange-500 decoration-scrummyOrange-500 ':
              textColor === 'primary',
            ' text-white decoration-white': textColor === 'white',
            ' text-gray-600 decoration-gray-600': textColor === 'gray',
            'text-xs': textSize === 'small',
            'text-base': textSize === 'normal',
            'text-lg': textSize === 'large',
            'bg-inherit': bgColor === 'none',
            ' bg-scrummyOrange-500 decoration-scrummyOrange-500 ':
              bgColor === 'primary',
            ' bg-white decoration-white': bgColor === 'white',
            ' bg-gray-600 decoration-gray-600': bgColor === 'gray',
          })}
        >
          {title}
        </a>
      </Link>
    </div>
  );
};

export default LinkButton;
