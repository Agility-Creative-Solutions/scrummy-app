import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import LogoImg from '../../public/assets/images/scrummylogo.png';
import LogoTitle from '../../public/assets/images/scrummytitle.png';

export type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-[100vh] w-[100vw] flex-col justify-center overflow-hidden bg-scrummyOrange-500">
      <motion.div
        className="absolute left-[-20px] top-[-80px]  h-[80vw] max-h-[1100px] min-h-[700px] w-[80vw] min-w-[700px] max-w-[1100px] rounded-full border-[2px] border-slate-50/50 object-cover"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.05 }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>
      <motion.div
        className=" absolute left-[-100px] h-[60vw] max-h-[800px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[800px] rounded-full border-[2px] border-slate-50/50 object-cover"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.05 }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>

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
