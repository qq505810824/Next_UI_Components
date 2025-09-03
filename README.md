# DocAI React UI Components

一个现代化的 React UI 组件库，提供高质量、可复用的 React 组件。

## 安装

```bash
npm install docai-react
# 或
yarn add docai-react
```

## 使用

### 基本用法

```tsx
import { Button } from 'docai-react';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Clicked!')}>
        点击我
      </Button>
    </div>
  );
}
```

### Button 组件

Button 组件支持多种变体、尺寸和状态。

#### Props

| Prop | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| children | React.ReactNode | - | 按钮内容 |
| onClick | () => void | - | 点击事件处理函数 |
| disabled | boolean | false | 是否禁用 |
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | 按钮变体 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 按钮尺寸 |
| className | string | '' | 自定义CSS类名 |

#### 示例

```tsx
import { Button, ButtonProps } from 'docai-react';

// 不同变体
<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">边框按钮</Button>

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="md">中等按钮</Button>
<Button size="lg">大按钮</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>

// 自定义样式
<Button className="my-custom-class">自定义按钮</Button>
```

## TypeScript 支持

本组件库完全支持 TypeScript，提供完整的类型定义。

```tsx
import { Button, ButtonProps } from 'docai-react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 样式

组件使用 Tailwind CSS 类进行样式设计。确保你的项目中已经配置了 Tailwind CSS。

### Tailwind CSS 配置

如果你还没有配置 Tailwind CSS，请按照以下步骤设置：

1. 安装 Tailwind CSS:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. 在你的 CSS 文件中导入 Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 开发

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/qq505810824/Next_UI_Components.git
cd Next_UI_Components

# 安装依赖
yarn install

# 构建
yarn build
```

### 构建

```bash
yarn build
```

这将生成以下文件：
- `dist/index.js` - CommonJS 格式
- `dist/index.esm.js` - ES 模块格式
- `dist/index.d.ts` - TypeScript 类型定义

## 许可证

MIT
