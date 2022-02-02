const db = require('../config/db');

async function login(cadastro){
    const res = await db.query(`SELECT idCad, (CASE WHEN senha = ? THEN 'S' WHEN senha <> ? THEN 'N' END) AS Logado FROM cadastro WHERE cpfCnpj = ?;`, [ cadastro.senha,cadastro.senha, cadastro.cpfCnpj]);
    return res;
}

module.exports= {
login
}