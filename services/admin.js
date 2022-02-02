const db = require('../config/db');


async function getAll() {
    const rows = await db.query(`SELECT idEnd FROM endereco;`, []);
    return rows;
}


module.exports = {
    getAll
}