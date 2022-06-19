require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
var app = express();

// Configuracion
const port = process.env.PORT || 8000;

// configuracion del cors.
const config = {
    "origin": '*',
    'Access-Control-Allow-Origin': '*',
    'allowedHeaders' : ['Content-Type', 'Authorization', 'token']
};
app.use(cors(config));
// Middlewares
app.use(morgan(process.env.NODE_ENV));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Definicion de rutas:

app.use('/api/v1/palabras', require('./rutas/palabras'));

// Instanciando Servidor.
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});
