const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

//middeware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',require('./routes/operacionesUsuario'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto',process.env.PORT || 3000);
app.set('json spaces',2);
app.listen(app.get('puerto'),function(){
    console.log('Listening in port: '+ app.get('puerto'));
});

