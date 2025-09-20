// 代码生成时间: 2025-09-20 17:56:12
const crypto = require('crypto');

/**
 * Calculate hash for a given input
 * @param {string} input - The input string to hash
 * @param {string} algorithm - The hashing algorithm to use (e.g., 'sha256')
 * @returns {string} The hash of the input string
 */
async function calculateHash(input, algorithm = 'sha256') {
  // Check if input is provided
  if (!input) {
    throw new Error('Input is required for hash calculation.');
  }
  
  // Check if algorithm is supported
  const supportedAlgorithms = ['sha256', 'sha512', 'md5'];
  if (!supportedAlgorithms.includes(algorithm)) {
    throw new Error(`Unsupported algorithm: ${algorithm}. Supported algorithms: ${supportedAlgorithms.join(', ')}`);
  }
  
  // Create hash
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(algorithm);
    hash.update(input);
    hash.digest((err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString('hex'));
      }
    });
  });
}

/**
 * Hash calculator component
 * @param {object} nuxtApp - The Nuxt.js application instance
 */
export default function nuxtModule(nuxtApp) {
  // Add calculateHash function to the Nuxt.js app
  nuxtApp.hook('app:created', async () => {
    nuxtApp.$hash = {
      calculateHash
    };
  });
}

// Export calculateHash function for direct use
export { calculateHash };


// Usage example:
/*
nuxtModule.$hash.calculateHash('Hello, world!', 'sha256').then(hash => {
  console.log(hash); // Outputs the SHA-256 hash of 'Hello, world!'
}).catch(err => {
  console.error(err.message);
});
*/