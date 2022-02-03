const db = require('../config/db');

//GET Documento
async function getAll(){
    const rows = await db.query(`SELECT * FROM documento ORDER BY idDoc;`, []);
    console.log("Dados resgatados")
    return rows;
}

async function getById(idCad){
   const result = await db.query(`SELECT idCad, idDoc, tipo, numero, digito, dtExp, dtValidade, emissor FROM documento WHERE idCad = ?`, [idCad]);
   console.log("Dado resgatado")
   return result;
}


async function createNew(documento){
   const res = await db.query(`INSERT INTO documento (idCad, tipo, numero, digito, dtExp, dtValidade, emissor) VALUES (?, ?, ?, ?, ?, ?, ?);`, [documento.idCad, documento.tipoDoc, documento.numeroDoc, documento.digito, documento.dtExp, documento.dtValidade, documento.emissor]);

   if (res.affectedRows) {
      const result = await db.query(`SELECT * FROM documento WHERE idCad= ?;`, [documento.idCad]);
      console.log("Dados Criados")
      return result;
   }else{
      return null;
   }
}

async function update(documento, idCad){
   const res = await db.query(`UPDATE documento SET tipoDoc = ?, numeroDoc = ?, digito = ?, dtExp = ?, dtValidade = ? WHERE idCad = ?;`, [documento.tipoDoc, documento.numeroDoc, documento.digito , documento.dtExp, documento.dtValidade, documento.emissor, idCad]);

   if (res.affectedRows) {
   
      const result = await db.query(`SELECT * FROM documento WHERE idCad= ?;`, [idCad]);
      console.log("Dados Atualizados")
   
      return result;
   

   }else{
      return null;
   }
};

async function deleteDoc(documento){

   const res = await db.query(`DELETE from documento where idCad = ?;`, [documento.idCad]);

   if (res.affectedRows) {
      const result = await db.query(`SELECT idCad, idDoc, tipoDoc, numeroDoc, digito, dtExp, dtValidade, emissor FROM documento WHERE idCad= ?;`, [documento.idCad]);
      return result;
   } else {
      return null;
   }
};

async function update(documento, idCad){

   const res = await db.query(`UPDATE documento SET tipoDoc = ?, numeroDoc = ? , digito = ?, dtExp = ?, dtValidade = ?, emissor = ? WHERE idCad = ?;`, [documento.tipo, documento.numero, documento.digito, documento.dtExp, documento.dtValidade, documento.emissor, idCad])

   if (res.affectedRows) {
      const result = await db.query(`SELECT idCad, idDoc, tipo, numero, digito, dtExp, dtValidade, emissor FROM documento WHERE idCad= ?;`, [idCad]);
      console.log('Dado Deletado')
      return result;
   } else {
      return null;
   }
};


module.exports = {
    getAll, getById, createNew, update, deleteDoc 
}
