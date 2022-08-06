import { Button, Input } from '@/components';

const DesignSystem = () => (
  <div style={{ backgroundColor: '#e3e3e3', height: '100vh', padding: 20 }}>
    <div className="grid gap-y-5">
      <div>
        <Input type="text" onChange={() => console.log('Lorem')} />
        <Input type="text" onChange={() => console.log('Lorem')} />
        <Input type="text" onChange={() => console.log('Lorem')} />
      </div>
      <div>
        <Button title="Test Button" buttonType="primary" />
      </div>
    </div>
  </div>
);

export default DesignSystem;
