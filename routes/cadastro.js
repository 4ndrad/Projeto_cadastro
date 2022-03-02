<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const cadastro = require('../services/cadastro');

/* GET cadastros. */


router.get('/', async function(req, res, next) {
    try {
        res.json(await cadastro.getAll());
    } catch (err) {
        console.error(`Error ao consultar cadastros`, err.message);
        next(err);
    }
});

/* GET cadastro por id. */

router.get('/:id', async function(req, res, next) {
    try {
        res.json(await cadastro.getById(req.params.id));
    } catch (err) {
        console.error(`Error ao consultar cadastro`, err.message);
        next(err);
    }
});

/* GET cadastro por cpf. */

router.get('/cpfCnpj/:cpfCnpj', async function(req, res, next) {
    try {
        res.json(await cadastro.getByCpfCnpj(req.params.cpfCnpj));
    } catch (err) {
        console.error(`Error ao consultar cadastro`, err.message);
        next(err);
    }
});

// POST cadastro por cpf.
router.post('/', async function(req, res, next) {
    try{
        res.json(await cadastro.createNew(req.body));
    }catch (err) {
        console.error('error ao adcionar cadastro', err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        res.json(await cadastro.update(req.body , req.params.id));
    } catch (err) {
        console.error(`Error ao atualizar cadastro`, err.message);
        next(err);
    }
});

router.delete("/:id", async function (req, res, next) {
    try {
        res.json(await cadastro.deleteCad(req.params.id));
    } catch (err) {
        console.error(`Error ao deletar cadastro`, err.message);
        next(err);
    }
})


module.exports = router;

=======
const express = require('express');
const router = express.Router();
const cadastro = require('../services/cadastro');

/* GET cadastros. */


router.get('/', async function(req, res, next) {
    try {
        res.json(await cadastro.getAll());
    } catch (err) {
        console.error(`Error ao consultar cadastros`, err.message);
        next(err);
    }
});

/* GET cadastro por id. */

router.get('/:id', async function(req, res, next) {
    try {
        res.json(await cadastro.getById(req.params.id));
    } catch (err) {
        console.error(`Error ao consultar cadastro`, err.message);
        next(err);
    }
});

/* GET cadastro por cpf. */

router.get('/cpfCnpj/:cpfCnpj', async function(req, res, next) {
    try {
        res.json(await cadastro.getByCpfCnpj(req.params.cpfCnpj));
    } catch (err) {
        console.error(`Error ao consultar cadastro`, err.message);
        next(err);
    }
});

// POST cadastro por cpf.
router.post('/', async function(req, res, next) {
    try{
        res.json(await cadastro.createNew(req.body));
    }catch (err) {
        console.error('error ao adcionar cadastro', err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        res.json(await cadastro.update(req.body , req.params.id));
    } catch (err) {
        console.error(`Error ao atualizar cadastro`, err.message);
        next(err);
    }
});

router.delete("/:id", async function (req, res, next) {
    try {
        res.json(await cadastro.deleteCad(req.params.id));
    } catch (err) {
        console.error(`Error ao deletar cadastro`, err.message);
        next(err);
    }
})


module.exports = router;

>>>>>>> 8fc890dbbc8bd7abdf8d09ad3805b169d7117974
