// This file exports utility functions for API calls.

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

/**
 * Fetch data from the API.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {object} options - Fetch options (method, headers, body, etc.).
 * @returns {Promise<object>} - The response data as a JSON object.
 */
export const fetchData = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};

/**
 * Post data to the API.
 * @param {string} endpoint - The API endpoint to post data to.
 * @param {object} data - The data to be sent in the request body.
 * @returns {Promise<object>} - The response data as a JSON object.
 */
export const postData = async (endpoint, data) => {
    return fetchData(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

/**
 * Put data to the API.
 * @param {string} endpoint - The API endpoint to put data to.
 * @param {object} data - The data to be sent in the request body.
 * @returns {Promise<object>} - The response data as a JSON object.
 */
export const putData = async (endpoint, data) => {
    return fetchData(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

/**
 * Delete data from the API.
 * @param {string} endpoint - The API endpoint to delete data from.
 * @returns {Promise<object>} - The response data as a JSON object.
 */
export const deleteData = async (endpoint) => {
    return fetchData(endpoint, {
        method: 'DELETE',
    });
};