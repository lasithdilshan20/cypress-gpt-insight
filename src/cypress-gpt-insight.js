const axios = require('axios');

// Create an axios instance for GPT API integration
const openAI = axios.create({
    baseURL: 'https://api.openai.com/v4',
    headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

async function getGPTInsight(text) {
    try {
        const response = await openAI.post('/completions', {
            model: 'text-davinci-003',
            prompt: text,
            max_tokens: 100
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching insights from GPT:', error);
        return 'Error fetching insight';
    }
}

module.exports = {
    addCustomCommands: function() {
        Cypress.Commands.add('analyzeTest', function(description) {
            const prompt = `Analyze and suggest optimizations for test scenario: ${description}`;
            return getGPTInsight(prompt).then(insight => {
                console.log(`Insight for '${description}': ${insight}`);
            });
        });
    },
    initPlugin: function(on, config) {
        on('task', {
            analyzeTestPerformance(data) {
                return getGPTInsight(`Analyze performance for the following data: ${data}`).then(insight => {
                    console.log(`Performance analysis result: ${insight}`);
                    return insight;
                });
            }
        });
    }
};
