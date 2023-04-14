import type { ReactNode } from 'react';

import ActionBar from '@/components/mols/ActionBar';
import NavBar from '@/components/mols/NavBar';

export type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-[100vh] w-[100vw] overflow-hidden bg-dark-300">
      <div className="absolute left-[-20px] top-[-60px] h-[80vw] max-h-[1100px] min-h-[700px] w-[80vw] min-w-[700px] max-w-[1100px] rounded-full border-[2px] border-slate-50/50 object-cover"></div>
      <div className=" absolute left-[-100px] top-16 h-[60vw] max-h-[800px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[800px] rounded-full border-[2px] border-slate-50/50 object-cover"></div>
      <div className="relative mx-9 flex h-[100vh] w-auto flex-col items-center justify-between">
        <NavBar />
        <div className="w-full max-w-7xl">{children}</div>

        <div className="my-8">
          <ActionBar
            buttonSize={20}
            actions={[
              {
                id: 'test1',
                icon: 'MdShoppingBag',
                label: 'Home',
                onClick: () => console.log('icon1'),
              },
              {
                id: 'test2',
                icon: 'MdPlayCircleOutline',
                label: 'Lobby',
                onClick: () => console.log('icon2'),
              },
              {
                id: 'test3',
                icon: 'MdPersonOutline',
                label: 'Users',
                onClick: () => console.log('icon3'),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
