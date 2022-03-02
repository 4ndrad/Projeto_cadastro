<<<<<<< HEAD
const db = require('../config/db');

/*async function senha(cadastro) {
    const res = await db.query(`UPDATE cadastro  SET senha = ? WHERE senha = ? AND idCad = ? AND  cpfCnpj = ?`, [cadastro.senhaNova, cadastro.senhaAntiga, cadastro.idCad, cadastro.cpfCnpj]);
    if (res.affectedRows) {
        return ("Senha alterada com sucesso");
    } else {
        return ("Senha não alterada");
    }
}
*/

async function trocarSenha(cadastro) {
    const res = await db.query(`UPDATE cadastro  SET senha = ? WHERE nome = ? AND  cpfCnpj = ?`, [cadastro.senha, cadastro.nome, cadastro.cpfCnpj]);
    if (res.affectedRows) {

        return ("Senha alterada com sucesso");
    } else{
        throw new Error ("Senha não alterada ")
    }

}

module.exports = {
    /*senha*/trocarSenha
=======
const db = require('../config/db');

/*async function senha(cadastro) {
    const res = await db.query(`UPDATE cadastro  SET senha = ? WHERE senha = ? AND idCad = ? AND  cpfCnpj = ?`, [cadastro.senhaNova, cadastro.senhaAntiga, cadastro.idCad, cadastro.cpfCnpj]);
    if (res.affectedRows) {
        return ("Senha alterada com sucesso");
    } else {
        return ("Senha não alterada");
    }
}
*/

async function trocarSenha(cadastro) {
    const res = await db.query(`UPDATE cadastro  SET senha = ? WHERE nome = ? AND  cpfCnpj = ?`, [cadastro.senha, cadastro.nome, cadastro.cpfCnpj]);
    if (res.affectedRows) {

        return ("Senha alterada com sucesso");
    } else {
        return ("Senha não alterada");
    }

}

module.exports = {
    /*senha*/trocarSenha
>>>>>>> 8fc890dbbc8bd7abdf8d09ad3805b169d7117974
}