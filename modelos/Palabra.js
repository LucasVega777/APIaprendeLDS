const mongoose = require('../mongodb/conexion');

const Palabra = {
    termino: {
        type: String,
        required : true,
    },
    url:{
        type: String,
        required : true,
    },
    plataforma: {
        type: String,
        required : true,
    },
    metadata : {
        type : String,
        required : false
    }
};

module.exports = mongoose.model('Palabra', Palabra);