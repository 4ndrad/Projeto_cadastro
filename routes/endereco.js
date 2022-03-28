const express = require('express');
const router = express.Router();
const endereco = require('../services/endereco');

router.get('/', async function(req, res, next) {
    try {
        res.json(await endereco.getAll());
    } catch (err) {
        console.error(`Error ao consultar cadastros`, err.message);
        next(err);
    }
});


/* GET cadastro por id. */
router.get('/:id', async function(req, res, next) {
    try {
        res.json(await endereco.getById(req.params.id));
    } catch (err) {
        console.error(`Error ao consultar endereco`, err.message);
        next(err);
    }
});

//Criar endereco
router.post('/', async function(req, res, next) {
    try{
        res.json(await endereco.createNew(req.body));
    }catch (err) {
        console.error('error ao criar endereço', err.message);
        next(err);
    }
});

// criando endereço atravez do id
router.post('/:id', async function(req, res, next) {
    try{
        res.json(await endereco.createNewById(req.body ,req.params.id));
    }catch (err) {
        console.error('error ao criar endereço', err.message);
        next(err);
    }
});

//PUT
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await endereco.update(req.body, req.params.id));
    } catch (err) {
        console.error(`Error ao atualizar endereço`, err.message);
        next(err);
    }
});

router.delete("/:id", async function (req, res, next) {
    try {
        res.json(await endereco.deleteEnd(req.params.id));
    } catch (err) {
        console.error(`Error ao deletar endereço`, err.message);
        next(err);
    }
});

router.delete("/idCad/:id", async function (req, res, next) {
    try {
        res.json(await endereco.deleteEndCad(req.params.id));
    } catch (err) {
        console.error(`Error ao deletar endereço`, err.message);
        next(err);
    }
});


module.exports = router;
    