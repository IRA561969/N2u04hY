// 代码生成时间: 2025-09-21 08:13:58
// Import required modules
const axios = require('axios');
const { createError } = require('http-errors');

// Define the HTTP request handler function
async function handleHttpRequest(url, method, data = null) {
  // Check if the URL is provided
  if (!url) {
    throw createError(400, 'URL is required');
  }

  try {
    // Perform the HTTP request based on the provided method
    const response = await axios({
      method: method,
      url: url,
      data: data
    });

    // Return the data from the response
    return {
      status: response.status,
      data: response.data
    };

  } catch (error) {
    // Handle any errors that occur during the request
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw createError(error.response.status, error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      throw createError(504, 'No response received from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw createError(500, 'Error setting up the request');
    }
  }
}

// Export the function for use in other parts of the application
module.exports = { handleHttpRequest };