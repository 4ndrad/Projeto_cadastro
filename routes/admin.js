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

module.exports = router;