// 代码生成时间: 2025-09-19 09:22:22
 * It includes error handling, comments, and follows best practices for maintainability and scalability.
 */

const os = require('os');
const process = require('process');

// Function to get CPU usage
function getCPUUsage() {
  const cpu = process.cpuUsage();
  return cpu;
}

// Function to get memory usage
function getMemoryUsage() {
  const memory = process.memoryUsage();
  return memory;
}

// Function to get system uptime
function getSystemUptime() {
  const uptime = os.uptime();
  return uptime;
}

// Function to get system information
function getSystemInfo() {
  const { type, release, platform } = os;
  return { type, release, platform };
}

// Function to monitor system performance
async function monitorSystemPerformance() {
  try {
    // Get CPU usage
    const cpuUsage = getCPUUsage();
    console.log('CPU Usage:', cpuUsage);

    // Get memory usage
    const memoryUsage = getMemoryUsage();
    console.log('Memory Usage:', memoryUsage);

    // Get system uptime
    const systemUptime = getSystemUptime();
    console.log('System Uptime:', systemUptime, 'seconds');

    // Get system information
    const systemInfo = getSystemInfo();
    console.log('System Info:', systemInfo);

    // Return performance data
    return {
      cpuUsage,
      memoryUsage,
      systemUptime,
      systemInfo
    };
  } catch (error) {
    // Handle errors
    console.error('Error monitoring system performance:', error);
  }
}

// Export the monitorSystemPerformance function
module.exports = {
  monitorSystemPerformance
};