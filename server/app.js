const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const dbService = require('./dbConnection.js');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



app.listen(process.env.PORT, ()=> console.log('app is running on ${PORT}'));

