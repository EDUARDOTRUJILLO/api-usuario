const {Router} = require('express');
const router=Router();
const unders = require('underscore');
const mysqlConnection = require('../database');

//mostrar usuarios
router.get('/usuarios',(req,res)=>{
    mysqlConnection.query('SELECT * FROM usuario',(err, row, fields)=>{
        if(!err){
            res.json(row);
        }else{
            console.log(err);
        }
    });
});
//Insertar Usuario
router.post('/usuarios',(req,res)=>{
    mysqlConnection.query(`INSERT INTO usuario SET ?`,req.body,(err,row,fields)=>{
        if(!err){
            res.json(row);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;