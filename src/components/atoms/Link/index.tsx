import cx from 'classnames';
import Link from 'next/link';
import React from 'react';

export type LinkProps = {
  href: string;
  title?: string;
  style?: 'primary' | 'white' | 'gray';
};

const LinkButton: React.FC<LinkProps> = ({ href, title, style }) => {
  return (
    <div>
      <Link href={href} passHref>
        <a
          className={cx('text-end text-xs hover:underline ', {
            ' text-scrummyOrange-500 decoration-scrummyOrange-500 ':
              style === 'primary',
            ' text-white decoration-white': style === 'white',
            ' text-gray-600 decoration-gray-600': style === 'gray',
          })}
        >
          {title}
        </a>
      </Link>
    </div>
  );
};

export default LinkButton;
