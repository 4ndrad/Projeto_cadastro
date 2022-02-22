<template>
  <div class="admin">
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Pesquise"
    />
    <ul v-for="cadastro of filtroCad" class="admin__usuario">
      <h1 class="admin__titulo">Usuário</h1>
      <li>ID Cadastro: {{ cadastro.idCad }}</li>
      <li>CPF-CNPJ: {{ cadastro.cpfCnpj }}</li>
      <li>Nome: {{ cadastro.nome }}</li>
      <li>Sobrenome: {{ cadastro.sobreNome }}</li>
      <li>Razão Social: {{ cadastro.razaoSocial }}</li>
      <li>Data de criação: {{ cadastro.dtNascFund }}</li>
      <br />
      <li>
        <h1 class="admin__titulo">Documentos</h1>
        <ul v-for="documento of cadastro.documentos" class="admin__usuario">
          <li>ID Documento: {{ documento.idDoc }}</li>
          <li>Tipo: {{ documento.tipo }}</li>
          <li>Número: {{ documento.numero }}</li>
          <li>Dígito: {{ documento.digito }}</li>
          <li>Data Expedição: {{ documento.dtExp }}</li>
          <li>Validade: {{ documento.dtValidade }}</li>
          <li>Emissor: {{ documento.emissor }}</li>
        </ul>
      </li>

      <li>
        <h1 class="admin__titulo">Endereços</h1>
        <ul v-for="endereco of cadastro.enderecos" class="admin__usuario">
          <li>ID Endereço: {{ endereco.idEnd }}</li>
          <li>Cep: {{ endereco.cep }}</li>
          <li>Logradouro: {{ endereco.logradouro }}</li>
          <li>Número: {{ endereco.numero }}</li>
          <li>Complemento: {{ endereco.complemento }}</li>
          <li>Bairro: {{ endereco.bairro }}</li>
          <li>Município: {{ endereco.municipio }}</li>
          <li>UF: {{ endereco.uf }}</li>
          <li>Típo:{{ endereco.tipo }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cadastros: [],
      filtro: "",
    };
  },
  created() {
    this.$http
      .get("admin")
      .then((res) => res.json())
      .then(
        (cadastros) => {
          this.cadastros = cadastros;
        },
        (err) => console.log(err)
      );
  },
  computed: {
    filtroCad() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.cadastros.filter((cadastro, documento, endereco) => exp.test(cadastro.idCad));
      } else {
        return this.cadastros;
      }
    },
  }
};
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.admin {
  margin: auto;
  text-align: center;
  width: 50%;
}

.admin__usuario {
  list-style: none;
  margin-top: 15px;
  padding: 60px;
  border-radius: 15px;
  background-color: rgba(24, 39, 102, 0.8);
  color: white;
}

.admin__titulo {
  color: rgb(255, 115, 0);
}

.filtro {
  height: 35px;
  width: 50%;
  border-radius: 7px;
}

li {
  font-size: 20px;
  margin-bottom: 7px;
}
</style>
