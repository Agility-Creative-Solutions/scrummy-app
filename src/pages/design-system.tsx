import * as FAIcons from 'react-icons/fa';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';

import Icon from '../components/atoms/Icon';

const DesignSystem = () => (
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
          <Button title="Full Width Button" fullWidth buttonType="primary" />
          <div className="flex gap-5">
            <Button icon="MdInput" buttonType="primary" />
            <Button icon="MdInput" buttonType="success" />
            <Button isLoading buttonType="success" />
            <Button isLoading buttonType="pink" />
            <Button isLoading buttonType="primary" />
          </div>
          <Button title="Pink Button" buttonType="pink" />
          <Button title="Success Button" icon="MdInput" buttonType="success" />
          <Button title="Warning Button" buttonType="warning" />
          <Button title="Error Button" icon="MdInput" buttonType="danger" />
          <Button title="Glass Button" icon="MdInput" buttonType="glass" />
        </div>
        <div>
          <h4>Icons</h4>
          <div className="flex gap-5">
            <Icon
              iconType="primary"
              size={50}
              icon={<FAIcons.FaRegCopy size={20} />}
            />
            <Icon iconType="pink" icon={<FAIcons.FaRegCopy size={20} />} />
            <Icon iconType="success" icon={<FAIcons.FaRegCopy size={20} />} />
            <Icon iconType="warning" icon={<FAIcons.FaRegCopy size={20} />} />
            <Icon iconType="danger" icon={<FAIcons.FaRegCopy size={20} />} />
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
    </div>
  </div>
);

export default DesignSystem;
