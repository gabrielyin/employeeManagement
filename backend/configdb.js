const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize("employeemanagement", "root", "Gabrielyin-323232", {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.db')
});

sequelize.authenticate()
.then(function() {
    console.log('Conexão realizada com successo');
}).catch(function() {
    console.log('Erro: Conexão não realizada com sucesso');
});

module.exports = sequelize;
