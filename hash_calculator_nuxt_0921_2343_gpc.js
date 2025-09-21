// 代码生成时间: 2025-09-21 23:43:43
// hash_calculator_nuxt.js
// 这是一个使用JS和NUXT框架实现的哈希值计算工具

// 导入必要的模块
const crypto = require('crypto');

// 定义一个函数来计算字符串的哈希值
function calculateHash(value, algorithm = 'sha256') {
  // 检查输入是否为字符串
  if (typeof value !== 'string') {
    throw new Error('Input must be a string');
  }

  // 使用crypto模块计算哈希值
  return crypto.createHash(algorithm).update(value).digest('hex');
}

// 定义一个函数来处理哈希值计算请求
async function processHashRequest(req, res) {
  // 从请求中获取参数
  const { value, algorithm } = req.query;

  // 检查参数是否存在
  if (!value) {
    return res.status(400).json({ error: 'Value parameter is required' });
  }
  if (!algorithm) {
    algorithm = 'sha256'; // 默认使用sha256算法
  }

  try {
    // 调用calculateHash函数计算哈希值
    const hash = calculateHash(value, algorithm);
    // 返回结果
    res.status(200).json({ hash });
  } catch (error) {
    // 错误处理
    res.status(500).json({ error: error.message });
  }
}

// 导出函数以供NUXT框架使用
module.exports = {
  calculateHash,
  processHashRequest
};