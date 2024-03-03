// server.js
// Import required modules
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Create an Express application
const app = express();
const port = 3000; // Specify the port for your server

app.use(cors());
// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Zithara@123',
  port: 5432,
});

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Endpoint to fetch records from the database
app.get('/api/customers', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM customers');
      res.json(result.rows);
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});