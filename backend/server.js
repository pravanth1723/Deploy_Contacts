const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// CORS Configuration
const allowedOrigins = ['https://deploy-contacts-frontend.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors({
  origin: allowedOrigins,
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoutes"));

// Error Handler
app.use(errorHandler);

// Database Connection and Server Start
const port = process.env.PORT || 5500;
connectDb();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
