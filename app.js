// Set dotenv (environment variables)
require('dotenv').config();

// Initialize express
const express = require('express');
const app = express();

// Set method override module
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set parsing methods
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine, layouts and paths
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', path.join(__dirname, '/layouts/layout'));

// Set public folder
app.use(express.static(path.join(__dirname, '/public')));

// Set database
const mongoose = require('mongoose');
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error connecting to database', err));

// Set routes
const todoRoutes = require(path.join(__dirname, '/routes/todoRoutes'));
app.use('/', todoRoutes);

// Start server
app.listen(process.env.PORT, () => {
    console.log('Server started');
});
