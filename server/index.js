const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/getAll', (req, res)=> {
    res.console.log('é isso ai')
})


app.listen(process.env.PORT, ()=> console.log('app is running on &{PORT}'));

