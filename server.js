const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // Replace with your MySQL username
    password: '',        // Replace with your MySQL password
    database: 'medcare'  // The database to connect to
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Handle signup form submission
app.post('/signup', (req, res) => {
    const { fullName, mobile, password } = req.body;

    // Insert user data into the database
    const sql = 'INSERT INTO patientrecord (fullname, mobile, password) VALUES (?, ?, ?)';
    db.query(sql, [fullName, mobile, password], (err, result) => {
        if (err) {
            console.error('Error inserting record:', err);
            return res.status(500).send('Error inserting record');
        }
        res.send('Record added successfully');
    });
});

// Fetch all records from the database
app.get('/records', (req, res) => {
    const sql = 'SELECT * FROM patientrecord';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching records:', err);
            return res.status(500).send('Error fetching records');
        }
        res.json(results); // Send results as JSON
    });
});

// Serve the static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});