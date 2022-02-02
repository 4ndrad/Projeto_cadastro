const db = require('../config/db');


//GET cadastro.

async function getAll() {
    const rows = await db.query(`SELECT idCad, cpfCnpj, nome, sobreNome, razaoSocial, DtNascFund FROM cadastro ORDER BY Nome;`, []);
    return rows;
}

// GET cadastro por id.
async function getById(idCad) {
    const result = await db.query(`SELECT idCad, cpfCnpj, nome, sobreNome, razaoSocial, DtNascFund FROM cadastro WHERE idCad = ?;`, [idCad]);
    return result;

}

// GET cadastro por cpf.
async function getByCpfCnpj(cpfCnpj) {
    const result = await db.query(`SELECT idCad, cpfCnpj, nome, sobreNome, razaoSocial, DtNascFund FROM cadastro WHERE cpfCnpj= ?;`, [cpfCnpj]);
    return result;
}

// POST cadastro por cpf        
async function createNew(cadastro) {
    const res = await db.query(`insert into cadastro (cpfCnpj,senha,nome,sobreNome,razaoSocial,dtNascFund,dtCriacao) value(?,?,?,?,?,?,?);`, [cadastro.cpfCnpj, cadastro.senha, cadastro.nome, cadastro.sobreNome, cadastro.razaoSocial, cadastro.dtNascFund, cadastro.dtCriacao]);
    if (res.affectedRows) {
        const result = await db.query(`SELECT idCad, cpfCnpj, nome, sobreNome, razaoSocial, DtNascFund FROM cadastro WHERE cpfCnpj= ?;`, [cadastro.cpfCnpj]);      
        return result;
    } else {
        return null;
    } 
}

async function update(cadastro , idCad){
    const res = await db.query(`UPDATE cadastro SET nome=? , sobreNome=?, razaoSocial=?, dtNascFund=? WHERE idCad=?;`, [cadastro.nome, cadastro.sobreNome, cadastro.razaoSocial, cadastro.dtNascFund, idCad]);
    if (res.affectedRows) {
        const result = await db.query(`SELECT idCad, cpfCnpj, nome, sobreNome, razaoSocial, dtNascFund FROM cadastro WHERE idCad= ?;`, [idCad]);
        return result;
    } else {
        return null;
    }
}

async function deleteCad(idCad) {
    const res = await db.query(`DELETE FROM cadastro WHERE idCad = ?;`,[idCad]);
    if (res.affectedRows) {
        const result = await db.query(`SELECT * FROM cadastro WHERE idCad= ?;`,[idCad]);
        console.log("deletado")
        return result;
    } else {
        return null;
    }
} 

module.exports = {
    getAll, getById, getByCpfCnpj, createNew, update, deleteCad
}

