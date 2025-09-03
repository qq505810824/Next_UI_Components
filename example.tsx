import React from 'react';
import { Button, ButtonProps } from 'docai-react';

// 基本使用示例
export function BasicExample() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="space-y-4">
      <h2>Basic Button Examples</h2>
      
      {/* 不同变体 */}
      <div className="space-x-2">
        <Button variant="primary" onClick={handleClick}>
          Primary Button
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          Secondary Button
        </Button>
        <Button variant="outline" onClick={handleClick}>
          Outline Button
        </Button>
      </div>
      
      {/* 不同尺寸 */}
      <div className="space-x-2">
        <Button size="sm" onClick={handleClick}>
          Small
        </Button>
        <Button size="md" onClick={handleClick}>
          Medium
        </Button>
        <Button size="lg" onClick={handleClick}>
          Large
        </Button>
      </div>
      
      {/* 禁用状态 */}
      <div className="space-x-2">
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      </div>
      
      {/* 自定义样式 */}
      <div className="space-x-2">
        <Button 
          className="bg-green-500 hover:bg-green-600" 
          onClick={handleClick}
        >
          Custom Style
        </Button>
      </div>
    </div>
  );
}

// TypeScript 类型示例
interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  icon, 
  children, 
  ...props 
}) => {
  return (
    <Button {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
};

// 使用示例
export function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">DocAI React Components Demo</h1>
      
      <BasicExample />
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Custom Button Example</h2>
        <CustomButton 
          variant="primary" 
          icon={<span>🚀</span>}
          onClick={() => console.log('Custom button clicked!')}
        >
          Custom Button with Icon
        </CustomButton>
      </div>
    </div>
  );
}

export default App;