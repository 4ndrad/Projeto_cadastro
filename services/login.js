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
}