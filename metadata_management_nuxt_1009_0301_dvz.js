// 代码生成时间: 2025-10-09 03:01:19
 * This file serves as the main entry point for the application.
 */

// Importing necessary modules and plugins
const axios = require('axios');
const { defineNuxtPlugin } = require('@nuxtjs/axios');

// Define the metadata manager plugin
export default defineNuxtPlugin((nuxtApp) => {
  // Axios instance for API requests
  nuxtApp.$axios = axios.create({
    baseURL: process.env.API_BASE_URL,
  });

  // Metadata management module
  const metadataManager = {
    // Function to fetch metadata
    async fetchMetadata() {
      try {
        const response = await nuxtApp.$axios.get('/metadata');
        return response.data;
      } catch (error) {
        console.error('Error fetching metadata:', error);
        throw error;
      }
    },

    // Function to add metadata
    async addMetadata(metadata) {
      try {
        const response = await nuxtApp.$axios.post('/metadata', metadata);
        return response.data;
      } catch (error) {
        console.error('Error adding metadata:', error);
        throw error;
      }
    },

    // Function to update metadata
    async updateMetadata(id, updatedMetadata) {
      try {
        const response = await nuxtApp.$axios.put(`/metadata/${id}`, updatedMetadata);
        return response.data;
      } catch (error) {
        console.error('Error updating metadata:', error);
        throw error;
      }
    },

    // Function to delete metadata
    async deleteMetadata(id) {
      try {
        const response = await nuxtApp.$axios.delete(`/metadata/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error deleting metadata:', error);
        throw error;
      }
    },
  };

  // Attach metadata manager to the nuxtApp for global access
  nuxtApp.$metadataManager = metadataManager;
});
