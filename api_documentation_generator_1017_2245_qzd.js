// 代码生成时间: 2025-10-17 22:45:32
const fs = require('fs');
const path = require('path');

// 定义一个函数生成API文档
function generateApiDocumentation(routes, outputPath) {
  // 检查输出路径是否存在
  if (!fs.existsSync(outputPath)) {
    console.error(`Output path does not exist: ${outputPath}`);
    return;
  }

  try {
    // 定义API文档模板
    const template = `# API Documentation

${routes.map(route => {
      return `## ${route.method} ${route.path}

- Description: ${route.description}
- Parameters:
${Object.entries(route.params).map(([key, value]) => `- ${key}: ${value}`).join('
')}
- Response:
  - Success: ${route.response.success}
  - Error: ${route.response.error}
`;
    }).join('

')}
`;

    // 将API文档写入指定输出路径
    fs.writeFileSync(path.join(outputPath, 'API_Documentation.md'), template);

    console.log('API documentation generated successfully.');
  } catch (error) {
    console.error('Error generating API documentation:', error);
  }
}

// 示例使用的路由数据
const apiRoutes = [
  {
    method: 'GET',
    path: '/api/users',
    description: 'Get a list of users',
    params: {
      limit: 'Number of users to return',
      offset: 'Offset from which to start returning users'
    },
    response: {
      success: 'List of users',
      error: 'Error message'
    }
  },
  // 可以添加更多的路由信息
];

// 指定输出文档的位置
const outputDirectory = path.join(__dirname, 'docs');

// 调用函数生成API文档
generateApiDocumentation(apiRoutes, outputDirectory);