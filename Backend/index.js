const express = require('express');
const app = express();
const dotenv = require('dotenv');
const globalError = require('./middleWares/errorMiddleWar');
const dbContact = require('./config/Db');
const path = require('path');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const productsRoute = require('./routes/productRoute');
const uploaderRoute = require('./routes/uploaderRoute');
const orderRoute = require('./routes/orderRoute');
const ApiError = require('./utils/ApiError');
const fs = require('fs');
const cors = require('cors');

dotenv.config({ path: '.env' });

// Parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000', 'https://product-page-generator-frontend.vercel.app'],
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

dbContact();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use(express.static(path.join(__dirname, 'uploads')))

app.get("/test", (req, res) => res.send("Express on Vercel"));

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/Products', productsRoute);
app.use('/api/v1/Orders', orderRoute);
app.use('/api/v1/uploader', uploaderRoute);

// Handle 404 errors
app.all('*', (req, res, next) => {
    next(new ApiError(`Can't find this url ${req.originalUrl}`, 404));
});

// Global error handler
app.use(globalError);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server working on Port: ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error(`Shutting Down...`);
        process.exit(1);
    });
});

module.exports = app; // Export the app for testing or other uses