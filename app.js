// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML/CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '127.0.0.1', () => {
  console.log(`🚀 Server is running at http://127.0.0.1:${port}`);
});
