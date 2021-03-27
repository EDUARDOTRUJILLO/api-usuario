const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }else{
        console.log('Tu base de datos esta conectada');
    }
});

//const pool = mysql.createPool(mysqlConnection);

module.exports = mysqlConnection;
//module.exports = pool;