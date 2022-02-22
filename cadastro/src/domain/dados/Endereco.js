export default class Endereco{
    constructor(idCad = '',cep='', logradouro='', numero='', complemento='', bairro='', municipio='', uf='', tipo=''){
        this.idCad = idCad;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.municipio = municipio;
        this.uf = uf;
        this.tipo = tipo;
    }
}