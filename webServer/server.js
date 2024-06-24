const express = require('express');
const { toggleDeviceState } = require('./device');
const path = require('path');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:8081' ,// Allow requests from this origin
  credentials:true,
  allowedHeaders: ['X-Requested-With', 'Content-Type']
}));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle the toggle action
app.post('/toggle', async (req, res) => {
  await toggleDeviceState();
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
