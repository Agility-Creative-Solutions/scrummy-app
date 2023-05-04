import type { ReactNode } from 'react';

import ActionBar from '@/components/mols/ActionBar';

export type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-[100vh] w-full flex-col justify-center overflow-x-hidden bg-dark-300">
      {/* header */}
      <div className="flex flex-row items-center justify-between">header</div>

      {/* content */}
      <div>{children}</div>

      {/* actionbar */}
      <div className="fixed inset-x-0 bottom-5">
        <ActionBar
          actions={[
            {
              id: '1',
              icon: 'MdShoppingBag',
              label: 'Home',
              onClick: () => {},
            },
            {
              id: '2',
              icon: 'MdShoppingBag',
              label: 'Home',
              onClick: () => {},
            },
            {
              id: '3',
              icon: 'MdShoppingBag',
              label: 'Home',
              onClick: () => {},
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;
