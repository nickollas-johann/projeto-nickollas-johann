const mysql2 = require ('mysql2');
const dotenv = require ('dotenv');
const Sequelize = require('sequelize');
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect:'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Connection is working!')
}).catch( (err) => {
    console.log(err)
})

module.exports = sequelize;