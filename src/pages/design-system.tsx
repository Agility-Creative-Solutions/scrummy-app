import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';
import Modal from '@/components/atoms/Modal';
import UserBar from '@/components/mols/UserBar';
import type { TostifyType } from '@/hooks/useTostify';
import { UseTostify } from '@/hooks/useTostify';

import CheckBox from '../components/atoms/CheckBox';
import IconButton from '../components/atoms/IconButton';
import LinkButton from '../components/atoms/LinkButton';
import ProgressBar from '../components/atoms/ProgressBar';
import RadioButton from '../components/atoms/RadioButton';
import ActionBar from '../components/mols/ActionBar';

const DesignSystem = () => {
  const [checkboxOne, setCheckboxOne] = useState(false);
  const [checkboxTwo, setCheckboxTwo] = useState(true);
  const handleToast = (label: string, type: TostifyType) => {
    UseTostify({ label, type });
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((currentValue) => !currentValue);
  return (
    <div style={{ backgroundColor: '#e3e3e3', padding: 20 }}>
      <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-3">
        <div>
          <h4>Toast Button</h4>
          <div>
            <button
              type="button"
              className="rounded bg-info py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={() => handleToast('Hello world', 'info')}
            >
              Show Toast Info
            </button>
          </div>
          <div>
            <br />
            <button
              type="button"
              className="rounded bg-scrummyGreen-500 py-2 px-4 font-bold text-white hover:bg-scrummyGreen-700"
              onClick={() => handleToast('Hello world', 'success')}
            >
              Show Toast Info
            </button>
          </div>
          <div>
            <br />
            <button
              type="button"
              className="rounded bg-scrummyYellow-500 py-2 px-4 font-bold text-white hover:bg-scrummyYellow-700"
              onClick={() => handleToast('Hello world', 'warning')}
            >
              Show Toast Info
            </button>
          </div>
          <div>
            <br />
            <button
              type="button"
              className="rounded bg-scrummyRed-500 py-2 px-4 font-bold text-white hover:bg-scrummyRed-700"
              onClick={() => handleToast('Hello world', 'error')}
            >
              Show Toast Info
            </button>
          </div>
        </div>
        <div>
          <h4>Inputs</h4>
          <Input
            type="text"
            icon="MdEmail"
            placeholder="Email"
            onChange={() => console.log('Lorem')}
          />
          <Input
            type="text"
            onChange={() => console.log('Lorem')}
            icon="MdEmail"
            value={'femacedogomes'}
            errorIcon={false}
          />
          <Input
            type="text"
            icon="MdEmail"
            onChange={() => console.log('Lorem')}
            placeholder={'Email'}
            errorIcon={false}
          />
          <h4>Progress Bar</h4>
          <ProgressBar totalSteps="8" stepsReady="7" label="PLAYERS READY: " />
          <ProgressBar totalSteps="8" stepsReady="4" label="PLAYERS READY: " />
          <ProgressBar totalSteps="8" stepsReady="2" label="PLAYERS READY: " />
          <LinkButton
            href="/"
            title="Clique Aqui"
            textSize="large"
            textColor="primary"
          ></LinkButton>
          <LinkButton
            href="/design-system"
            textColor="white"
            textSize="small"
            title="Clique Aqui"
          />
          <LinkButton
            href="/design-system"
            textColor="gray"
            textSize="normal"
            title="Clique Aqui"
          />
          <div>
            <ActionBar
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
                  onClick: () => console.log('icon1'),
                },
                {
                  id: 'test3',
                  icon: 'MdPersonOutline',
                  label: 'Users',
                  onClick: () => console.log('icon1'),
                },
              ]}
            />
            <hr style={{ marginTop: 20, opacity: 0 }} />
            <ActionBar
              actions={[
                {
                  id: 'test1',
                  icon: 'MdShoppingBag',
                  onClick: () => console.log('icon1'),
                },
                {
                  id: 'test3',
                  icon: 'MdPersonOutline',
                  onClick: () => console.log('icon1'),
                },
                {
                  id: 'test2',
                  icon: 'MdPlayCircleOutline',
                  onClick: () => console.log('icon1'),
                },
              ]}
            />
          </div>
        </div>
        <div>
          <h4>Buttons</h4>
          <div className="flex flex-col gap-5">
            <Button title="Full Width Button" fullWidth buttonType="primary" />
            <div className="flex flex-wrap gap-5">
              <Button icon="MdInput" buttonType="primary" />
              <Button icon="MdInput" buttonType="success" />
              <Button isLoading buttonType="success" />
              <Button isLoading buttonType="pink" />
              <Button isLoading buttonType="primary" />
            </div>
            <Button title="Pink Button" buttonType="pink" />
            <Button
              title="Success Button"
              icon="MdInput"
              buttonType="success"
            />
            <Button title="Warning Button" buttonType="warning" />
            <Button title="Error Button" icon="MdInput" buttonType="danger" />
            <Button title="Glass Button" icon="MdInput" buttonType="glass" />
          </div>
          <div>
            <h4>Icons</h4>
            <div className="flex flex-wrap  gap-5">
              <IconButton iconType="primary" icon="MdInput" />
              <IconButton iconType="pink" icon="MdInput" />
              <IconButton iconType="success" icon="MdInput" />
              <IconButton iconType="warning" icon="MdInput" />
              <IconButton iconType="danger" icon="MdInput" />
            </div>
            <div className="mt-6">
              <h4>Checkbox</h4>
              <div>
                <CheckBox
                  label="Checkbox-1"
                  checked={checkboxOne}
                  onChange={(e: any) => setCheckboxOne(e.target.checked)}
                />
                <CheckBox
                  label="Checkbox-2"
                  checked={checkboxTwo}
                  onChange={(e: any) => setCheckboxTwo(e.target.checked)}
                />
              </div>
            </div>
            <div>
              <h4>Radio Button</h4>
              <div>
                <RadioButton id="1" value="1" name="test" label="Radio-1" />
                <RadioButton id="2" value="2" name="test" label="Radio-2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>Cards</h4>
          <div className="mb-5">
            <Card title="Card Title" subtitle="This is a subtitle example">
              <div
                style={{ width: '100%', height: 200, backgroundColor: '#000' }}
              />
            </Card>
          </div>
          <div className="mb-5">
            <Card title="Card Title">
              <div
                style={{ width: '100%', height: 100, backgroundColor: '#000' }}
              />
            </Card>
          </div>
          <div className="mb-5">
            <Card>
              <div
                style={{ width: '100%', height: 100, backgroundColor: '#000' }}
              />
            </Card>
          </div>
        </div>
        <div>
          <UserBar
            userName="Fernando A"
            avatar="test1"
            medal="Silver2"
            joinedAt="2 days"
            welcome={true}
          />
        </div>

        <div>
          <Button title="Open Modal" onClick={toggleModal} />

          <AnimatePresence mode="wait">
            {modal && (
              <Modal
                handleClose={toggleModal}
                subtitle="Sample subtitle for the modal"
                title="This is a Sample Modal"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                officiis molestias perferendis eos eveniet.
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
