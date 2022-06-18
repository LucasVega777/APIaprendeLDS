// Endpoints for external data
const { Router } = require('express');
const router = new Router();
const mongoDS = require('../mongodb/MongoDS');
const DataSource = new mongoDS();
const response = require('../utils/response');

router.get('/', async (req, res) => {
    try {
        const response = await DataSource.getAll();
        res.json(response);
    } catch (error){
        response(error, res);
    }
       
});

router.get('/busqueda', async (req, res) => {
    try {
        console.log(req.query)
        const response = await DataSource.getPalabrasByTermino(req?.query?.termino);
        res.json(response);
    } catch (error){
        response(error, res);
    }
});

router.get('/inicial', async (req, res) => {
    try {
        const response = await DataSource.getPalabrasByInicial(req?.query?.filtro);
        res.json(response);
    } catch (error){
        response(error, res);
    }
});

module.exports = router