<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const admin = require('../services/admin');

router.get('/', async function(req, res, next) {
    try {
        res.json(await admin.getAll());
    } catch (err) {
        console.error(`Error ao consultar admin cadastros`, err.message);
        next(err);
    }
});

=======
const express = require('express');
const router = express.Router();
const admin = require('../services/admin');

router.get('/', async function(req, res, next) {
    try {
        res.json(await admin.getAll());
    } catch (err) {
        console.error(`Error ao consultar admin cadastros`, err.message);
        next(err);
    }
});

>>>>>>> 8fc890dbbc8bd7abdf8d09ad3805b169d7117974
module.exports = router;