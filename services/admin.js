const { init } = require('express/lib/application');
const db = require('../config/db');


async function getCadastro() {
    const rows = await db.query(`SELECT idCad, cpfCnpj, nome, sobreNome, razaoSocial, dtNascFund FROM cadastro ORDER BY Nome;`, []);
    return rows;
}

async function getDocumento() {
    const rows = await db.query(`SELECT  idCad, idDoc, tipo, numero, digito, dtExp, dtValidade, emissor FROM documento ORDER BY idDoc;`, []);
    return rows;
}

async function getEndereco() {
    const rows = await db.query(`SELECT idEnd, idCad, cep, logradouro, numero, complemento, bairro, municipio ,uf , tipo FROM endereco ORDER BY idEnd;`, []);
    return rows;
}

async function getAll() {
    let rows = [];
    const cadastros = await getCadastro();
    const documentos = await getDocumento();
    const enderecos = await getEndereco();
    cadastros.forEach(item => {
        //colocar a implementação de vcs aqui
        //exemplo:

      
        let cadItem = {
            idCad: item.idCad,
            cpfCnpj: item.cpfCnpj,
            nome: item.nome,
            sobreNome: item.sobreNome,
            razaoSocial: item.razaoSocial,
            dtNascFund: item.dtNascFund,
            documentos: documentos.filter(doc => doc.idCad == item.idCad),
            enderecos: enderecos.filter(end => end.idCad == item.idCad) 
        }
        
        //finalizar com
        rows.push(cadItem);
    });

    return rows;
}


module.exports = {
    getAll
}