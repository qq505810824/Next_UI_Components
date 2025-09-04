import { ImageViewer, ImageViewerProps } from '../dist/index.js';
import React from 'react';

// 测试类型是否正确
const testProps: ImageViewerProps = {
    images: ['test1.jpg', 'test2.jpg'],
    currentIndex: 0,
    title: 'Test Images'
};

// 测试组件是否可以正确导入和使用
const TestComponent: React.FC = () => {
    return React.createElement(ImageViewer, testProps);
};

console.log('ImageViewer component imported successfully');
console.log('ImageViewer type:', typeof ImageViewer);
console.log('ImageViewerProps type available:', !!testProps);

export default TestComponent;