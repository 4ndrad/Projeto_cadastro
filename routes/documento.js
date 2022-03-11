const express = require('express');
const router = express.Router();
const documento = require('../services/documento');


router.get('/', async function(req, res, next) {
    try {
        res.json(await documento.getAll(req.params.idCad));
    } catch (err) {
        console.error(`Error ao consultar cadastros`, err.message);
        next(err);
    }
});


router.get('/:id', async function(req, res, next) {
    try {
        res.json(await documento.getById(req.params.id));
    } catch (err) {
        console.error(`Error ao consultar documento`, err.message);
        next(err);
    }
});

router.post('/', async function(req, res) {
    try{
        res.json(await documento.createNew(req.body));
    }catch (err) {
        console.error('error ao consultar documento', err.message);       
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        res.json(await documento.update(req.body , req.params.id));
    } catch (err) {
        console.error(`Error ao consultar documento`, err.message);
        next(err);
    }
}); 

router.delete('/', async function(req, res, next) {
    try {
        res.json(await documento.deleteDoc(req.body));
    } catch (err) {
        console.error(`Error ao deletar o documento`, err.message);
        next(err);
    }
});

module.exports = router; 
