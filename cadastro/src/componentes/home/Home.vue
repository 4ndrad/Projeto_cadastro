<template>
  <div class="envolve">
    <nav>
      <ul class="barra">
        <li class="item">
          <button class="logout" @click.prevent="Logout">Sair</button>
        </li>
      </ul>
    </nav>
    <body>
      <h1 class="titulo-home">Seja bem-vindo {{ cadastros[0].nome }} ;)</h1>
      <ul class="dados">
        <div class="dados__usuario">
          <li>
            <h1 class="titulo-dados">Dados Usuário</h1>
            <ul v-for="cadastro of cadastros" class="central-usuario">
              <li>CPF-CNPJ: {{ cadastro.cpfCnpj }}</li>
              <li>Nome: {{ cadastro.nome }}</li>
              <li>Sobrenome: {{ cadastro.sobreNome }}</li>
              <li>Razão Social: {{ cadastro.razaoSocial }}</li>
            </ul>
          </li>
        </div>

        <div class="dados__usuario">
          <li>
            <h1 class="titulo-dados">Dados do Documento</h1>
              <router-link :to="{ name: 'inserirDocumento', params: { id: token }}"  class="botao-adicionar-user">
                  <div class="container-botao">
                  <meu-botao rotulo="Adicionar novo documento "  tipo="button"  :confirmacao="true"  estilo="insert" /> 
                  </div>
                  </router-link>
        
            <ul v-for="documento of documentos" >
              <div class="central-documento">
                <li>Tipo: {{ documento.tipo }}</li>
                <li>Número: {{ documento.numero }}</li>
                <li>Dígito: {{ documento.digito }}</li>
                <li>Data Expedição: {{ documento.dtExp }}</li>
                <li>Validade: {{ documento.dtValidade }}</li>
                <li>Emissor: {{ documento.emissor }}</li>
              </div>

              <div class="botao__usuario">
                <router-link
                  :to="{
                    name: 'usuarioAlterarDocumento',
                    params: { id: documento.idCad },
                  }"
                >
                  <meu-botao
                    rotulo="Alterar "
                    tipo="button"
                    :confirmacao="true"
                    estilo="perigo"
                  />
                </router-link>
                   <meu-botao
            rotulo="Remover "
            tipo="button"
            @botaoAtivado="removeDocumento()"
            :confirmacao="true"
            estilo="perigo"
          />
              </div>
            </ul>
          </li>
        </div>

        <div class="dados__usuario">
          <li>
            <h1 class="titulo-dados">Dados do Endereço</h1>
            <router-link :to="{ name: 'inserirEndereco', params: { id: token }}" >
                  <div class="container-botao">
                  <meu-botao rotulo="Adicionar novo endereços "  tipo="button"  :confirmacao="true"  estilo="insert" /> 
                  </div>
                  </router-link>
                  
            <ul v-for="endereco of enderecos">
              <div class="central-endereco">
                <li>CEP: {{ endereco.cep }}</li>
                <li>Logradouro: {{ endereco.logradouro }}</li>
                <li>Número: {{ endereco.numero }}</li>
                <li>Complemento: {{ endereco.complemento }}</li>
                <li>Bairro: {{ endereco.bairro }}</li>
                <li>Município: {{ endereco.municipio }}</li>
                <li>UF: {{ endereco.uf }}</li>
                <li>Típo: {{ endereco.tipo }}</li>
              </div>

              <div class="botao__usuario">
                <router-link
                  :to="{
                    name: 'usuarioAlterarEndereco',
                    params: { id: endereco.idEnd },
                  }"
                >
                  <meu-botao
                    rotulo="Alterar "
                    tipo="button"
                    :confirmacao="true"
                    estilo="perigo"
                  />
                </router-link>
                
                 <meu-botao
            rotulo="Remover "
            tipo="button"
            @botaoAtivado="removeEndereco()"
            :confirmacao="true"
            estilo="perigo"
          />

                
              </div>
            </ul>
          </li>
        </div>
      </ul>
    </body>
  </div>
</template>

<script>
import Botao from "../shared/botao/Botao.vue";
export default {
  components: {
    "meu-botao": Botao,
  },
  data() {
    return {
      cadastros: [],
      documentos: [],
      enderecos: [],
      token: this.$store.state.idCad
      
      
    };
  },
  methods: {
    Logout() {
      this.$store.commit("DESLOGAR_USUARIO");
      this.$router.push({ name: "login" });
    },
    removeEndereco() {
      this.$http
        .delete(`endereco/${this.enderecos[0].idEnd}`)
        .then(
          () => {
            alert("Endereço removido com sucesso, logue novamente.");
          },
          (err) => {
            alert("Não foi possível remover o usuario");
            console.log(err);
          }
        );
        
    },
        removeDocumento() {
      this.$http
        .delete(`documento/${this.documentos[0].idDoc}`)
        .then(
          () => {
            alert("Documento removido com sucesso, logue novamente.");
          },
          (err) => {
            alert("Não foi possível remover o usuario");
            console.log(err);
          }
        );
        
    },
  },
  created() {
    this.$http
      .get(`cadastro/${this.token}`)
      .then((res) => res.json())
      .then(
        (cadastros) => {
          this.cadastros = cadastros;

          this.$http
            .get(`documento/${this.token}`)
            .then((res) => res.json())
            .then((documentos) => {
              this.documentos = documentos;
            });

          this.$http
            .get(`endereco/${this.token}`)
            .then((res) => res.json())
            .then((enderecos) => {
              this.enderecos = enderecos;
            });
        },
        (err) => console.log(err)
      );
  },

  
};
</script>

<style scoped>
li {
  list-style-type: none;
}

.dados__usuario {
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 18px;
  color: aliceblue;
  background-color: rgba(0, 38, 255, 0.329);
  border-radius: 15px;
  width: 40%;
  border: solid #fff;
}

.central-usuario {
  margin-left: 20%;
}

.central-documento{
  margin-left: 10%;
}

.central-endereco{
  margin-left: 13%;
}

.titulo-dados {
  text-align: center;
  color: #f8f8ff;
}

.envolve {
  font-family: Arial, Helvetica, sans-serif;
}

.titulo-home {
  color: #f8f8ff;
  margin-left: 40%;
  margin-bottom: 10px;
}

.barra {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  padding-right: 20px;
}

.container-botao{
  position: relative;
  left: 30%;
}

.botao__usuario {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 12px;
}

.logout {
  font-size: 16px;
  color: white;
  background-color: #1958ab75;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none;
  border: solid 1px white;
  border-radius: 5px;
}

.logout:hover {
  font-weight: bold;
  background-color: #e64a1a;
}
</style>