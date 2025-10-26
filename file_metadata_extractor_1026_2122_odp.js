// 代码生成时间: 2025-10-26 21:22:54
const fs = require('fs'); // Node.js内置模块用于文件系统操作
const path = require('path'); // Node.js内置模块用于路径操作

// 文件元数据提取器函数
function extractFileMetadata(filePath) {
  // 检查文件路径是否存在
  if (!fs.existsSync(filePath)) {
    throw new Error('File not found');
  }

  // 获取文件状态
  const stats = fs.statSync(filePath);

  // 构建元数据对象
  const metadata = {
    path: filePath,
    size: stats.size, // 文件大小，单位为字节
    isDirectory: stats.isDirectory(), // 是否为目录
    isFile: stats.isFile(), // 是否为文件
    birthTime: stats.birthtime, // 文件创建时间
    lastModifiedTime: stats.mtime // 文件最后修改时间
  };

  return metadata;
}

// 导出函数
module.exports = extractFileMetadata;

// 使用示例
/*
const filePath = '/path/to/your/file.txt';
try {
  const metadata = extractFileMetadata(filePath);
  console.log(metadata);
} catch (error) {
  console.error('Error:', error.message);
}
*/