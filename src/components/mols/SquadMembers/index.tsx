import type { ReactNode } from 'react';
import React from 'react';

import { Card, IconButton } from '@/components/atoms';
import { Typography } from '@/components/atoms/Typography';

export type SquadMemberProps = {
  children?: ReactNode;
};

const SquadMember: React.FC<SquadMemberProps> = ({ children }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Typography className="text-base">Squad members</Typography>
        <IconButton icon="MdMoreVert" />
      </div>
      {!children && (
        <Typography className=" text-sm italic">{`There's nothing here.`}</Typography>
      )}
      <div className="flex flex-wrap gap-2 p-2 ">{children}</div>
    </Card>
  );
};
export default SquadMember;
