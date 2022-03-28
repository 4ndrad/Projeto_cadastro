<template>
  <div>
    <form @submit.prevent="grava()" class="alteraEnd">
      <h1 class="titulo__alteraEnd">Alterar Endereço</h1>
      <div>
        <p class="invalide" v-if="mensagemErro">{{ mensagemErro }}</p>
      </div>

      <div id="cadastro__endereco" class="cadastro_endereco">
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

        <label for="logradouro">Logradouro</label>
        <input
          type="text"
          id="logradouro"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.logradouro"
        />
        
        <label for="complemento">Completo</label>
        <input
          type="text"
          id="complemento"
          class="inputs__alteraEnd"
          autocomplete="off"
          v-model="endereco.complemento"
        />
        
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

        <div>
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
        </div>
        <fieldset class="field">
          <legend>Qual o tipo do endereço</legend>
          <label for="radio-r" class="label__alteraEnd"
            ><input
              type="radio"
              v-model="endereco.tipo"
              id="A"
              class="radio__alteraEnd"
              name="myGroup"
              value="r"
            />Residencial</label
          >
          <label for="radio-c" class="label__alteraEnd"
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
        
      </div>

      <div class="botao__alteraDoc">
        <meu-botao
          rotulo="Alterar"
          tipo="button"
          @botaoAtivado="grava()"
          :confirmacao="true"
          estilo="alterarAdmin"
        />
        <router-link :to="{ name: 'admin' }" estilo="perigo"
          ><meu-botao rotulo="Admin" tipo="button" estilo="padrao" />
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
        .put(`endereco/${this.id}`, this.endereco)
        .then(() => {
          this.endereco.idEnd = this.id;
          alert("endereço alterado com sucesso");
          this.$router.push({ name: "admin" });
        })
        .catch((err) => {
          if ((err, new Error())) {
            this.mensagemErro = "Algum campo inválidos";
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

.cadastro_endereco{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #d85128f6;
  

}
.titulo__alteraEnd {
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-align: center;
}
.inputs__alteraEnd {
  margin-bottom: 15px;
  width: 65%;
  height: 2.5vh;
  text-align: center;
  border: none;
  border-radius: 35px;
  font-size: 11pt;

}
.digito__alteraEnd {
  width: 30px;
  
}
.numero__alteraEnd {
  width: 90px;
  margin-bottom: 15px;
  height: 2.5vh;
  font-size: 11pt;
  border: none;
  border-radius: 5px;
  text-align: center;
}
.uf__alteraEnd {
  width: 40px;
  margin-bottom: 10px;
  height: 2.5vh;
  font-size: 11pt;
  border: none;
  border-radius: 5px;
  text-align: center;
}
.field {
  padding: 0.5em;
  display: flex;
  text-align: center;
}

.label__alteraEnd {
  margin: 10px;
}

.radio__alteraEnd{
  margin: 0 5px;
}
.botao__alteraDoc {
  display: flex;
  justify-content: space-around;
}

.invalide {
  font: bold;
  text-decoration: none;
  color: red;
}
</style>