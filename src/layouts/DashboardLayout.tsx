import type { ReactNode } from 'react';

import ActionBar from '@/components/mols/ActionBar';
import NavBar from '@/components/mols/NavBar';

export type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-[100vh] w-[100vw] flex-col justify-center overflow-hidden bg-dark-300">
      <div className="absolute left-[-20px] top-[-80px]  h-[80vw] max-h-[1100px] min-h-[700px] w-[80vw] min-w-[700px] max-w-[1100px] rounded-full border-[2px] border-slate-50/50 object-cover"></div>
      <div className=" absolute left-[-100px] h-[60vw] max-h-[800px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[800px] rounded-full border-[2px] border-slate-50/50 object-cover"></div>
      <div className="flex flex-row items-center align-middle">
        <div className="my-5 mx-9 grid grid-cols-1 grid-rows-3">
          <NavBar />
        </div>
        <div className="">{children}</div>
        <div className=" my-12">
          <ActionBar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
