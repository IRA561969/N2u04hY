// 代码生成时间: 2025-10-29 23:07:08
// Import required modules and dependencies
const axios = require('axios');
const fs = require('fs');

// Define the API endpoint for firewall rules
const FIREWALL_API_ENDPOINT = 'http://api.example.com/firewall-rules';

// Function to fetch all firewall rules
async function fetchFirewallRules() {
  try {
    const response = await axios.get(FIREWALL_API_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error fetching firewall rules:', error);
    throw error;
  }
}

// Function to add a new firewall rule
async function addFirewallRule(rule) {
  try {
    const response = await axios.post(FIREWALL_API_ENDPOINT, rule);
    return response.data;
  } catch (error) {
    console.error('Error adding firewall rule:', error);
    throw error;
  }
}

// Function to update an existing firewall rule
async function updateFirewallRule(ruleId, updatedRule) {
  try {
    const response = await axios.put(`${FIREWALL_API_ENDPOINT}/${ruleId}`, updatedRule);
    return response.data;
  } catch (error) {
    console.error('Error updating firewall rule:', error);
    throw error;
  }
}

// Function to delete a firewall rule
async function deleteFirewallRule(ruleId) {
  try {
    const response = await axios.delete(`${FIREWALL_API_ENDPOINT}/${ruleId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting firewall rule:', error);
    throw error;
  }
}

// Export the functions for use in other modules
module.exports = {
  fetchFirewallRules,
  addFirewallRule,
  updateFirewallRule,
  deleteFirewallRule
};