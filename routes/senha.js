const express = require('express');
const router = express.Router();
const login = require('../services/senha');

router.put('/', async function (req, res, next) {
    try {
        res.json(await login.senha(req.body));
    } catch (err) {
        console.error('error ao consultar cadastro', err.message);
        next(err);
    }
});

module.exports = router;