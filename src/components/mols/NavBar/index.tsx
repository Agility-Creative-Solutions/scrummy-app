import React from 'react';

import Logo from '../../../../public/assets/images/scrummylogo.png';

export type NavBarProps = {
  onClick?: (e: any) => void;
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="flex flex-wrap justify-around rounded-xl bg-dark-100">
      <img src={Logo.src} alt="Logo Image" className="h-auto w-9 flex-none" />
      <div className="w-auto flex-auto"></div>
      <div className="flex-none">UserBar Component</div>
    </div>
  );
};
export default NavBar;
