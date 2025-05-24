const { PlaywrightTestConfig } = require('@playwright/test');

const config = {
    retries: 1,
    timeout: 60000,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        video: "off",
        screenshot: "off"
    },

    projects: [
        {
            name: 'chrome',
            use: { browserName: 'chromium' }
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' }
        }
    ]
};

module.exports = config;
