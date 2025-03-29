const express = require('express');
const fetch = require('node-fetch'); // Import node-fetch (Install if needed)
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Loan Application Frontend');
});

// API endpoint to fetch loan applications from the backend
app.get('/api/loans', async (req, res) => {
    try {
        const response = await fetch('http://localhost:5000/api/loan');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching loan data:', error);
        res.status(500).json({ message: 'Failed to fetch loan applications' });
    }
});

app.listen(port, () => {
    console.log(`Frontend app running at http://localhost:${port}`);
});
