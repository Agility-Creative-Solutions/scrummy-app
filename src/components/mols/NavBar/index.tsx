import React from 'react';

import Logo from '../../../../public/assets/images/scrummylogo.png';
import UserBar from '../UserBar';

export type NavBarProps = {
  onClick?: (e: any) => void;
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className=" my-5 flex w-full max-w-7xl flex-wrap items-center justify-around rounded-xl bg-dark-100">
      <img src={Logo.src} alt="Logo Image" className="ml-9 h-auto w-9" />
      <div className="w-auto flex-auto"></div>
      <div className="pr-9">
        <UserBar
          userName="Felipe Macedo"
          welcome={true}
          avatar="Felipe_avatar"
          medal="Bronze3"
        />
      </div>
    </div>
  );
};
export default NavBar;
