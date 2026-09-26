const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err);
        return;
    }

    console.log('MySQL connected successfully');
});

// Test route
app.get('/', (req, res) => {
    res.json({
        message: 'Hair Studio API is running'
    });
});

// Appointment route
app.post('/appointments', (req, res) => {
    const { name, phone, hairstyle, date } = req.body;

    if (!name || !phone || !hairstyle || !date) {
        return res.status(400).json({
            message: 'Please fill in all appointment fields'
        });
    }

    const sql = `
        INSERT INTO appointments
        (name, phone, hairstyle, appointment_date)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, phone, hairstyle, date],
        (err, result) => {
            if (err) {
                console.error('Database error:', err);

                return res.status(500).json({
                    message: 'Failed to book appointment'
                });
            }

            res.status(201).json({
                message: 'Appointment booked successfully!'
            });
        }
    );
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});