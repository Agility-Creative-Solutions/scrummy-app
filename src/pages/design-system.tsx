import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

const DesignSystem = () => (
  <div style={{ backgroundColor: '#e3e3e3', height: '100vh', padding: 20 }}>
    <div className="grid gap-y-5">
      <div>
        <Input type="text" />
        <Input type="text" />
        <Input type="text" />
      </div>
      <div>
        <Button title="Test Button" buttonType="primary" />
      </div>
    </div>
  </div>
);

export default DesignSystem;
