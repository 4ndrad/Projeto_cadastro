const db = require('../config/db');

async function senha (cadastro){
    const res = await db.query(`UPDATE cadastro  SET senha = ? WHERE senha = ? AND idCad = ? AND  cpfCnpj = ?`, [cadastro.senhaNova, cadastro.senhaAntiga, cadastro.idCad,  cadastro.cpfCnpj]);
    if(res.affectedRows) {
        return ("Senha alterada com sucesso");
    } else {
        return ("Senha não alterada");
    } 
}

module.exports= {
    senha
    }