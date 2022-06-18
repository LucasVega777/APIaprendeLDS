const trim = require("trim");

class MongoDS {
    constructor(){
        this.Palabra = require('../modelos/Palabra');
    }

    /**
     * Obtiene todas las palanras de la BDD.
     * @author Lucas Vega
     * @returns Array
     */
    async getAll(){
        try {
            let resultados = await this.Palabra.find();
            let respuesta = await this.parseo(resultados)
            console.log(respuesta)
            return respuesta;
        } catch (error){
            return []
        }

    }
    
     /**
     * Obtiene una palabra de acuerdo a su termino.
     * @author Lucas Vega
     * @param {String} termino 
     * @returns Object
     */
      async getPalabrasByTermino(termino){
        try {
            console.log('Iniciando busqueda por termino')
            let filtro = `${termino}`
            const resultados = await this.Palabra.find({
                metadata : {$regex : filtro, $options: 'i'}
            })
            let respuesta = await this.parseo(resultados);
            console.log(respuesta);
            return respuesta
        } catch (error){
            console.log(error);
            return [];
        }
    }

    
    /**
     * Obtiene una palabra de acuerdo a su inicial.
     * @author Lucas Vega
     * @param {String} inicial 
     * @returns Object
     */
     async getPalabrasByInicial(inicial){
        try {
            let filtro = `^${inicial}`
            const resultados = await this.Palabra.find({
                termino : {$regex : filtro, $options : 'i'}
            })
            let respuesta = await this.parseo(resultados);
            console.log(respuesta)
            return respuesta;
        } catch (error){
            return [];
        }
    }

    /**
     * Parsea los datos obtenidos por mongoose
     * @author Lucas Vega
     * @param {Array} resultados 
     * @returns Array
     */
    async parseo(resultados){
        try {
            let palabras = [];
            for (let palabra of resultados){
                palabras.push({
                    termino: palabra.termino,
                    url: palabra.url,
                    plataforma: palabra.plataforma
                });
            }
            return palabras;
        } catch (error){
            return [];
        }
    }

}


module.exports = MongoDS;


