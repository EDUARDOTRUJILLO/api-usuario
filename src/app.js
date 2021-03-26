const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//middeware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('Punto de inicio');
})

app.use('/api/lista',require('./routes/usuario'));

/* const history = require('connect-history-api-fallback');
app.use(history());*/
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'),function(){
    console.log('Esuchando el puerto: '+app.get('puerto'));
});

