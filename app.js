require('dotenv').config();
const express = require('express');
const path = require('path');
const errorHandler = require('./backend/middleware/errorHandler'); // Import the error handler middleware from the backend

const app = express();

// Middleware
app.use(express.json());

// Set the views directory for EJS templates
app.set('views', path.join(__dirname, 'frontend', 'views'));
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Backend routes
// Define your backend routes here

// Frontend route
app.get('/', (req, res) => {
  res.render('index');
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
