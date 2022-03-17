<template>
  <div>
    <form @submit.prevent="grava()" class="alteraEnd">
      <h1 class="titulo__alteraEnd">Inserir Endereço</h1>
      <div class="invalide">
        <p  v-if="mensagemErro">{{ mensagemErro }}</p>
      </div>

      <div id="cadastro__endereco">
        <label for="cep">CEP</label>
        <input
          type="text"
          name="cep"
          v-validate
          id="cep"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.cep"
          placeholder="00000-000"
          minlength="8"
          maxlength="8"
        />
        <br />
        <label for="logradouro">Logradouro</label>
        <input
          type="text"
          id="logradouro"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.logradouro"
        />
        <label for="numero">Número</label>
        <input
          type="number"
          name="numero"
          v-validate
          id="numero"
          class="numero__alteraEnd"
          autocomplete="off"
          v-model="endereco.numero"
          min="1"
          maxlength="999"
          required
        />
        <br />
        <label for="complemento">Completo</label>
        <input
          type="text"
          id="complemento"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.complemento"
        />
        <br />
        <label for="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          v-validate
          id="bairro"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.bairro"
          required
        />
        <br />
        <label for="municipio">Município</label>
        <input
          type="text"
          name="municipio"
          v-validate
          id="municipio"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.municipio"
          required
        />

        <label for="uf">UF</label>
        <input
          type="text"
          name="uf"
          v-validate
          id="uf"
          class="uf__alteraEnd"
          autocomplete="off"
          v-model="endereco.uf"
          minlength="2"
          maxlength="2"
        />
        <br />
        <fieldset class="field">
          <label for="radio-r"
            ><input
              type="radio"
              v-model="endereco.tipo"
              id="A"
              class="radio__alteraEnd"
              name="myGroup"
              value="r"
            />Residencial</label
          >
          <label for="radio-c"
            ><input
              type="radio"
              v-model="endereco.tipo"
              id="B"
              class="radio__alteraEnd"
              name="myGroup"
              value="c"
            />Comercial</label
          >
        </fieldset>
        <br />
      </div>

      <div class="botao__alteraDoc">
        <meu-botao
          rotulo="Inserir"
          tipo="button"
          @botaoAtivado="grava()"
          :confirmacao="true"
          estilo="alterar"
        />
        <router-link :to="{ name: 'home' }" estilo="perigo"
          ><meu-botao rotulo="Home" tipo="button" estilo="padrao" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Endereco from "../../../domain/dados/Endereco";
import Botao from "../botao/Botao.vue";
export default {
  components: {
    "meu-botao": Botao,
  },
  data() {
    return {
      endereco: new Endereco(),
      id: this.$route.params.id,
    };
  },

  methods: {
    grava() {
      this.$http
        .post(`endereco/${this.id}`, this.endereco)
        .then(() => {
          this.endereco.idEnd = this.id;
          alert("endereço inserido com sucesso");
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          if ((err, new Error())) {
            this.mensagemErro = "Algum campo inválido";
          }
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.alteraEnd {
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  border: solid;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  background-color: #1958ab96;
}
.titulo__alteraEnd {
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-align: center;
}
.inputs__alteraEnd {
  margin-bottom: 15px;
  width: 150px;
  text-align: center;
}
.digito__alteraEnd {
  width: 30px;
}
.numero__alteraEnd {
  width: 40px;
}
.uf__alteraEnd {
  width: 40px;
  margin-bottom: 10px;
}
.field {
  text-align: center;
}
.radio__alteraEnd {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.botao__alteraDoc {
  display: flex;
  justify-content: space-around;
}

.invalide {
  text-align: center;
  font: bold;
  text-decoration: none;
  color: red;
}
</style>