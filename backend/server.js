const express = require('express');
// const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const app = express();

// Apply CORS middleware first
app.use(cors({
  origin: ['https://deploy-contacts-frontend.vercel.app/*'],
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}));

// Apply CSP headers next
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://deploy-contacts-frontend.vercel.app/*;");
  
  next();
});

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

const port = 5500;
connectDb();
console.log("This is express");
console.log('hi');

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
