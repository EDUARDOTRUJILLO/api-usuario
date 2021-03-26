const {Router} = require('express');
const router=Router();
const unders = require('underscore');

router.get('/ejemplo',(req,res)=>{
    res.send('Ejemplo');
});
//mostrar usuarios
router.get('/usuarios',(req,res)=>{
    res.send('Prueba');
});
//Insertar Usuario
router.post('/usuarios',(req,res)=>{
    res.json();
});

module.exports = router;