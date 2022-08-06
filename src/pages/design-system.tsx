import { Button, Input } from '@/components';

const DesignSystem = () => (
  <div style={{ backgroundColor: '#e3e3e3', height: '100vh', padding: 20 }}>
    <div className="grid gap-y-5">
      <div>
        <Input
          type="text"
          icon="MdInput"
          onChange={() => console.log('Lorem')}
        />
        <Input type="text" onChange={() => console.log('Lorem')} />
        <Input type="text" onChange={() => console.log('Lorem')} />
      </div>
      <div className="flex-column flex items-center justify-center gap-5">
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
  </div>
);

export default DesignSystem;
