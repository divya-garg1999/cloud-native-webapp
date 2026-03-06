const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API route
app.get('/api', (req, res) => {
  res.json({ message: "Hello World! Cloud Native Resume Project" });
});

// Start server
if (require.main === module) {
  app.listen(3000, '0.0.0.0', () => {
    console.log('App running on port 3000');
  });
}

module.exports = app;

