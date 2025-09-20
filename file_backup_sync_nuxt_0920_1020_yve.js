// 代码生成时间: 2025-09-20 10:20:43
// file_backup_sync_nuxt.js
// 一个使用Nuxt框架的文件备份和同步工具

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 定义备份和同步工具类
class FileBackupSyncTool {
  // 构造函数，传入源文件夹和目标文件夹路径
  constructor(sourceDir, targetDir) {
    this.sourceDir = sourceDir;
    this.targetDir = targetDir;
  }

  // 检查目录是否存在，如果不存在则创建
  ensureDirectoriesExist() {
    const createDir = (dirPath) => {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    };

    createDir(this.sourceDir);
    createDir(this.targetDir);
  }

  // 同步文件，将源目录的文件复制到目标目录
  syncFiles() {
    const files = fs.readdirSync(this.sourceDir);
    files.forEach((file) => {
      const sourceFilePath = path.join(this.sourceDir, file);
      const targetFilePath = path.join(this.targetDir, file);
      const stats = fs.statSync(sourceFilePath);

      if (stats.isDirectory()) {
        // 如果是文件夹，递归同步
        new FileBackupSyncTool(sourceFilePath, targetFilePath).syncFiles();
      } else {
        // 如果是文件，复制文件
        try {
          fs.copyFileSync(sourceFilePath, targetFilePath);
        } catch (error) {
          console.error(`Failed to copy file: ${sourceFilePath}, error: ${error}`);
        }
      }
    });
  }

  // 执行备份操作
  backup() {
    this.ensureDirectoriesExist();
    this.syncFiles();
    console.log('Backup completed successfully.');
  }
}

// 使用示例
// 创建FileBackupSyncTool实例，备份当前目录到目标目录
const backupTool = new FileBackupSyncTool('./source', './backup');
backupTool.backup();
