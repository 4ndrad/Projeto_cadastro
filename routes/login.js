const express = require('express');
const router = express.Router();
const login = require('../services/login');

/*LOGIN*/ 
router.post('/', async function (req, res, next) {
    try {
        res.json(await login.login(req.body));
    } catch (err) {
        console.error('error ao consultar cadastro', err.message);
        next(err);
    }
});

module.exports = router;