<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const login = require('../services/login');

/*LOGIN*/ 
router.post('/', async function (req, res, next) {
    try {
        res.json(await login.login (req.body));
    } catch (err) {
        console.error('error ao consultar cadastro', err.message);
        next(err);
    }
});

=======
const express = require('express');
const router = express.Router();
const login = require('../services/login');

/*LOGIN*/ 
router.post('/', async function (req, res, next) {
    try {
        res.json(await login.login (req.body));
    } catch (err) {
        console.error('error ao consultar cadastro', err.message);
        next(err);
    }
});

>>>>>>> 8fc890dbbc8bd7abdf8d09ad3805b169d7117974
module.exports = router;