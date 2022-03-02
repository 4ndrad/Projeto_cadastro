<<<<<<< HEAD
const db = require('../config/db');

async function login(cadastro){
    const res = await db.query(`SELECT idCad  FROM cadastro WHERE cpfCnpj = ? AND senha=? ;`, [  cadastro.cpfCnpj, cadastro.senha]);
    if(res.length == 0){
        throw new Error('Erro')
    }
    return res;
}

module.exports= {
login
=======
const db = require('../config/db');

async function login(cadastro){
    const res = await db.query(`SELECT idCad FROM cadastro WHERE cpfCnpj = ? AND senha=? ;`, [  cadastro.cpfCnpj, cadastro.senha]);
    if(res.length == 0){
        throw new Error('Erro')
    }
    return res;
}

module.exports= {
login
>>>>>>> 8fc890dbbc8bd7abdf8d09ad3805b169d7117974
}