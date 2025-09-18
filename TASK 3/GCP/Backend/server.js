const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

// Enable CORS for all origins
app.use(cors());

// Define a simple API endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Hello from the GCP backend!",
    service: "Backend API",
    provider: "Google Cloud Platform"
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});