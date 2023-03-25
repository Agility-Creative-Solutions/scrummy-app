import type { ReactNode } from 'react';

import LogoImg from '../../public/assets/images/scrummylogo.png';
import LogoTitle from '../../public/assets/images/scrummytitle.png';
import AnimatedCircles from './bin/AnimatedCircles';

export type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-[100vh] w-[100vw] flex-col justify-center overflow-hidden bg-scrummyOrange-500">
      <AnimatedCircles />

      <div>
        <div>
          <div className="mx-auto h-[72px] w-[72px] rounded-xl bg-white">
            <img src={LogoImg.src} alt="Logo-Image" className="m-auto pt-3" />
          </div>
          <div className="m-auto flex items-center justify-center pt-10 ">
            <img src={LogoTitle.src} alt="Logo-Title" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
