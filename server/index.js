const express = require('express');
const dbConfig = require('./src/database/mongodbConfig');
const router = require('./src/routes');
const cors = require('cors');
const app = express();

// Port
const port = 3001;

app.use(express.json());
app.use(cors());

// Database configuration
dbConfig();

// Router
app.use(router);

// Simple GET request to check server status
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Listeners
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
