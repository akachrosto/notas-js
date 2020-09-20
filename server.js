//requirements
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const crearNotaPost = require('./public/js/script.js');

const app = express();
//settings
app.set('port', 3000 || process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static('./public'));
// routes
app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('./public/index.html');
});
app.post('/', (req, res) => {
    let nota = req.body.nota;
    
});
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado correctamente en el puerto', app.get('port'));
});
