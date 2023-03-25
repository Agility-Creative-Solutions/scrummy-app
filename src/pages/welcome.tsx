import { motion } from 'framer-motion';
import React from 'react';

import { Button, Card, Input } from '@/components';
import RadioButton from '@/components/atoms/RadioButton';
import { Typography } from '@/components/atoms/Typography';
import DashboardLayout from '@/layouts/DashboardLayout';

const CARDS_TYPE = {
  create: 'CREATE',
  join: 'JOIN',
};

const TRANSITION_STATES = {
  CREATE: {
    hidden: {
      x: '-100vh',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      x: ' -100vh',
      opacity: 0,
    },
  },
  JOIN: {
    hidden: {
      x: '100vh',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      x: ' 100vh',
      opacity: 0,
    },
  },
};

const WelcomePage = () => {
  const [cardChosen, setCardChosen] = React.useState(CARDS_TYPE.create);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardChosen(event.target.value as typeof CARDS_TYPE.create);
  };

  return (
    <DashboardLayout>
      {/* backdrop */}
      <div className="absolute inset-0 z-10 bg-dark-100 opacity-80"></div>

      <div className="absolute bottom-0 z-20  mx-auto flex w-full flex-col items-center justify-end sm:relative sm:min-h-screen sm:w-[400px] sm:justify-center">
        <div className="flex w-full flex-row justify-between px-10 pb-5">
          <div className="absolute left-[50%] top-0 h-[50px] w-[1px] border-r-2 border-gray-900" />
          <div className="flex flex-col items-center">
            <RadioButton
              name="squad"
              onChange={handleChange}
              checked={cardChosen === CARDS_TYPE.create}
              value={CARDS_TYPE.create}
            />
            <Typography className="text-sm text-white">
              Create a squad
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <RadioButton
              name="squad"
              onChange={handleChange}
              checked={cardChosen === CARDS_TYPE.join}
              value={CARDS_TYPE.join}
            />
            <Typography className="text-sm text-white">Join squad</Typography>
          </div>
        </div>
        <div className="top-2 flex min-h-[250px] w-full flex-row md:min-h-[500px]">
          <motion.div
            animate={cardChosen === CARDS_TYPE.create ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
            variants={TRANSITION_STATES.CREATE}
            style={{ position: 'absolute' }}
          >
            <div className="flex">
              <Card
                subtitle="A squad is a group of people who work together and  will be using Scrummy together"
                title="Create a squad"
              >
                <div className="flex flex-col gap-3 pb-3">
                  <Input
                    type="text"
                    icon="MdPeople"
                    placeholder="Choose squad name..."
                    onChange={() => console.log('Lorem')}
                  />
                  <Button buttonType="success" title="Create squad" fullWidth />
                </div>
              </Card>
            </div>
          </motion.div>
          <motion.div
            animate={cardChosen === CARDS_TYPE.join ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
            variants={TRANSITION_STATES.JOIN}
            style={{ position: 'absolute', x: '100vh', opacity: 0 }}
          >
            <div className="flex">
              <Card
                subtitle="If you were invited to join a squad probably they have the lobby invitation code. Paste it there and join the squad"
                title="Join existing squad"
              >
                <div className="flex flex-col gap-3 pb-3">
                  <Input
                    type="text"
                    icon="MdPeople"
                    placeholder="Squad invitation code..."
                    onChange={() => console.log('Lorem')}
                  />
                  <Button buttonType="success" title="Join squad" fullWidth />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WelcomePage;
