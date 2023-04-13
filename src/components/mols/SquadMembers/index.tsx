import React from 'react';

import { Card, IconButton } from '@/components/atoms';
import { Typography } from '@/components/atoms/Typography';

import type { UserBarProps } from '../UserBar';
import UserBar from '../UserBar';

export type SquadMemberProps = {
  users: UserBarProps[];
};

const SquadMember: React.FC<SquadMemberProps> = ({ users }) => {
  return (
    <Card className="bg-dark-200">
      <div className="flex items-center justify-between">
        <Typography className=" pl-4 text-xl font-semibold">
          Squad members
        </Typography>
        <IconButton icon="MdMoreVert" />
      </div>
      {!users.length && (
        <Typography className=" text-sm italic">{`There's nothing here.`}</Typography>
      )}
      <div className="flex flex-wrap gap-6">
        {users.map((e, key) => (
          <div key={key} className="max-w-sm p-4">
            <UserBar
              userName={e.userName}
              avatar={e.avatar}
              medal={e.medal}
              joinedAt={e.joinedAt}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};
export default SquadMember;
