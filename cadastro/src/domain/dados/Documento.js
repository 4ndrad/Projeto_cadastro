export default class Documento{
    constructor(idCad='', tipo='', numero='', digito='', dtExp='', dtValidade='', emissor=''){
        this.idCad = idCad;
        this.tipo = tipo;
        this.numero = numero;
        this.digito = digito;
        this.dtExp = dtExp;
        this.dtValidade = dtValidade;
        this.emissor = emissor;
    }
}