import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';
import Modal from '@/components/atoms/Modal';

const DesignSystem = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((currentValue) => !currentValue);

  return (
    <div style={{ backgroundColor: '#e3e3e3', height: '100vh', padding: 20 }}>
      <div className="grid grid-cols-3 gap-10 px-10">
        <div>
          <h4>Inputs</h4>
          <Input
            type="text"
            icon="MdInput"
            onChange={() => console.log('Lorem')}
          />
          <Input type="text" onChange={() => console.log('Lorem')} />
          <Input type="text" onChange={() => console.log('Lorem')} />
        </div>
        <div>
          <h4>Buttons</h4>

          <div className="flex flex-col gap-5">
            <Button title="Test Button" buttonType="primary" />
            <Button icon="MdInput" buttonType="primary" />
            <Button title="Test Button" buttonType="secondary" />
            <Button
              title="Test Button"
              icon="MdInput"
              buttonType="tertiary"
              fullWidth
            />
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
