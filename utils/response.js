const error = function(error, res, estado=400){
    res.status(estado).json({
        error : JSON.stringify(error),
        mensaje : error?.mensaje || 'Ocurrio un error inesperado'
    })
}



module.exports = error