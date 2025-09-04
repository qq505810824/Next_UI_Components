// 测试组件导入
const fileSystem = require('fs');
const pathModule = require('path');

try {
    // 测试 CommonJS 导入
    const { TagInput, Button, ImageViewer } = require('./dist/index.js');

    console.log('✅ 组件导入测试结果：');
    console.log('TagInput:', typeof TagInput);
    console.log('Button:', typeof Button);
    console.log('ImageViewer:', typeof ImageViewer);

    console.log('\n✅ 组件定义检查：');
    console.log('TagInput is function:', typeof TagInput === 'function');
    console.log('TagInput displayName:', TagInput?.displayName);

    // 检查类型定义文件是否存在
    const typesFile = pathModule.join(__dirname, 'dist', 'index.d.ts');
    console.log('\n✅ 类型定义文件存在:', fileSystem.existsSync(typesFile));

    if (TagInput && typeof TagInput === 'function') {
        console.log('\n🎉 TagInput 组件导出成功！');
    } else {
        console.log('\n❌ TagInput 组件导出失败');
    }

} catch (error) {
    console.error('❌ 导入测试失败:', error.message);
}