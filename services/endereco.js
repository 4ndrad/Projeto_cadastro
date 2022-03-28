const db = require('../config/db');

//GET endereco
async function getAll() {
    const rows = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo from endereco ORDER BY idEnd;`, []);
    return rows;

}

//GET endereco por idCad
async function getById(idCad) {
    const result = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo from endereco WHERE idCad = ?;`, [idCad]);
    return result;
}


//POST endereco por idCad

async function createNew(endereco) {
    const res = await db.query(`INSERT INTO endereco (idCad,cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?);`, [endereco.idCad, endereco.cep, endereco.logradouro, endereco.numero, endereco.complemento, endereco.bairro, endereco.municipio, endereco.uf, endereco.tipo]);

    if (res.affectedRows) {
        const result = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo FROM endereco WHERE idCad = ?;`, [endereco.idCad]);
        return result;
    } else {
        return null;
    }
}

async function createNewById(endereco, idCad) {
    const res = await db.query(`INSERT INTO endereco (idCad,cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?);`, [idCad, endereco.cep, endereco.logradouro, endereco.numero, endereco.complemento, endereco.bairro, endereco.municipio, endereco.uf, endereco.tipo]);

    if (res.affectedRows) {
        const result = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo FROM endereco WHERE idCad = ?;`, [idCad]);
        return result;
    } else {
        return null;
    }
}

async function update(endereco, idEnd) {
    const res = await db.query(`UPDATE endereco SET cep=? , logradouro=?, numero=?, complemento=?, bairro=?, municipio =?,uf=? , tipo=? WHERE idEnd=?;`, [endereco.cep, endereco.logradouro, endereco.numero, endereco.complemento, endereco.bairro, endereco.municipio, endereco.uf, endereco.tipo, idEnd]);

    if (res.affectedRows) {
        const result = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo FROM endereco WHERE idEnd= ?;`, [idEnd]);
        console.log("Dados Atualizados")
        return result;
    } else {
        throw new Error("Não foi possível alterar ")
    }
}

async function deleteEnd(idEnd) {
    const res = await db.query(`DELETE FROM endereco WHERE idEnd = ?;`, [idEnd]);

    if (res.affectedRows) {
        const result = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo FROM endereco WHERE idEnd = ?;`, [idEnd]);
        return result;
    } else {
        return null;
    }
}

async function deleteEndCad(idCad) {
    const res = await db.query(`DELETE FROM endereco WHERE idCad = ?;`, [idCad]);

    if (res.affectedRows) {
        const result = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo FROM endereco WHERE idCad = ?;`, [idCad]);
        return result;
    } else {
        return null;
    }
}



module.exports = {
    getAll, getById, createNew,createNewById ,update, deleteEnd, deleteEndCad
}