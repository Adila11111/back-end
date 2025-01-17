// api/index.js
const express = require('express');
const app = express();

// Sample route 1
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sample route 2 (Twitter route)
app.get('/twitter', (req, res) => {
  res.send('Adeela..!');
});

// Sample route 3 (Login route)
app.get('/login', (req, res) => {
  res.send('<h1>Please Login here</h1>');
});

// Sample route 4 (YouTube route)
app.get('/youtube', (req, res) => {
  res.send('<h2>Please Login here</h2>');
});

// Export the handler as a Vercel serverless function
module.exports = app;
