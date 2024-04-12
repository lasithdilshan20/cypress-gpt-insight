// cypress/plugins/index.js
// Load environment variables from .env file
require('dotenv').config();
const axios = require('axios');

module.exports = (on, config) => {
    on('task', {
        getGPTInsight: ({ prompt }) => {
            const apiKey = process.env.OPENAI_API_KEY;
            return axios.post('https://api.openai.com/v4/completions', {
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 100
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            })
                .then(response => response.data.choices[0].text.trim())
                .catch(error => {
                    console.error('Error from GPT API:', error.message);
                    throw error;
                });
        }
    });
    return config;
};
