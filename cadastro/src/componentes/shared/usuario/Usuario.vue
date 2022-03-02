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
       <meu-botao rotulo="Deletar usuario" tipo="button" @botaoAtivado="removeCadastro(cadastro)" :confirmacao="true" estilo="perigo" />  
       
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
          
          <meu-botao rotulo="Remover" tipo="button" @botaoAtivado="removeDocumento(cadastro)" :confirmacao="true" estilo="perigo" /> 
          <router-link :to="{ name: 'alterarDocumento' }"> <meu-botao rotulo="Alterar " tipo="button" :confirmacao="true" estilo="perigo" /></router-link>
         
        </ul>
      </li>

      <li>
        <h1 class="admin__titulo">Endereços</h1>
        <ul v-for="endereco of cadastro.enderecos" class="admin__usuario">
          <li>ID Endereço: {{ endereco.idEnd }}</li>
          <li>CEP: {{ endereco.cep }}</li>
          <li>Logradouro: {{ endereco.logradouro }}</li>
          <li>Número: {{ endereco.numero }}</li>
          <li>Complemento: {{ endereco.complemento }}</li>
          <li>Bairro: {{ endereco.bairro }}</li>
          <li>Município: {{ endereco.municipio }}</li>
          <li>UF: {{ endereco.uf }}</li>
          <li>Típo:{{ endereco.tipo }}</li>
           <meu-botao rotulo="Remover " tipo="button" @botaoAtivado="removeEndereco(cadastro)" :confirmacao="true" estilo="perigo" />  
           
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Botao from '../botao/Botao.vue'

export default {
  components: { 
       'meu-botao': Botao
  },
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
        return this.cadastros.filter((cadastro) => exp.test(cadastro.idCad))
        
      } else {
        return this.cadastros;
      }
    },
  },
  methods:{
    removeCadastro(cadastro){
      
         this.$http 
        .delete(`documento/${cadastro.idCad}`)
         .then(
          () => {
            console.log('cadastro removido com sucesso') 
          })
          
          this.$http
        .delete(`endereco/${cadastro.idCad}`)
         .then(
          () => {
            
        this.$http
        .delete(`cadastro/${cadastro.idCad}`)
        .then(
          () => {
            let indice = this.cadastros.indexOf(cadastro); // acha a posição da foto na lista
            this.cadastros.splice(indice, 1); // a instrução altera o array
            alert ('usuario removido com sucesso') 
          }, 
          err => {
            alert('Não foi possível remover o usuario, recarregue a pagina e tente mais uma vez!') ;
            console.log(err);
          }
        )
            console.log('cadastro removido com sucesso') 
          })

        
        
    },
    removeDocumento(cadastro){
       this.$http
      .delete(`http://localhost:3000/documento/${cadastro.idCad}`)
        .then(
          () => {
          
            alert ('Documento removido com sucesso, recarregue a página.') 
          }, 
          err => {
            alert('Não foi possível remover o usuario') ;
            console.log(err);
          }
        )
    }, 
    removeEndereco(cadastro){
        this.$http
      .delete(`http://localhost:3000/endereco/${cadastro.idCad}`)
        .then(
          () => {
          
            alert ('Endereço removido com sucesso, recarregue a página.') 
          }, 
          err => {
            alert('Não foi possível remover o usuario') ;
            console.log(err);
          }
        )
    }
  }
}
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