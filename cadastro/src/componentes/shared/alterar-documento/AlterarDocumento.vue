<template>
  <div>
    <form @submit.prevent="grava()" class="alteraDoc">
      <h1 class="titulo__alteraDoc">Alterar documento</h1>
      <div>
        <p class="invalide" v-if="mensagemErro">{{ mensagemErro }}</p>
      </div>

      <div id="cadastro__documento" class="cadastro__documento" >
        <fieldset class="field">
          <legend>Qual o tipo do documento ?</legend>

          <label for="rg"
            ><input
              type="radio"
              name="documento"
              v-model="documento.tipo"
              value="rg"
              id="1"
              class="radio__alteraDoc"
            />RG</label
          >
          <label for="cnh"
            ><input
              type="radio"
              name="documento"
              v-model="documento.tipo"
              value="cnh"
              id="2"
              class="radio__alteraDoc"
            />CNH</label
          >
        </fieldset>
        <br />

        <div class="erro" v-show="errors.has('numeroDoc')">
          {{ errors.first("numeroDoc") }}
        </div>
          
          <label for="numero">Número do Documento</label>
          <input
            type="text"
            name="numeroDoc"
            data-vv-as="Número do Documento"
            data-vv-rules="required|min:7|max:9"
            id="numero"
            max="11"
            class="inputs___alteraDoc"
            autocomplete="off"
            v-model="documento.numero"
          />
        

        <div class="erro" v-show="errors.has('digitoDoc')">
          {{ errors.first("digitoDoc") }}
        </div>

        
          <label for="digito">Dígito</label>
          <input
            type="number"
            name="digitoDoc"
            data-vv-as="Número do Documento"
            data-vv-rules="required|min:1|max:9"
            id="digito"
            class="inputs___alteraDoc"
            autocomplete="off"
            v-model="documento.digito"
          />
       

        <div class="erro" v-show="errors.has('dtExp')">
          {{ errors.first("dtExp") }}
        </div>

        <label for="data">Data de Expedição</label>
        <input
          type="date"
          name="dtExp"
          data-vv-as="Data de Expedição"
          data-vv-rules="required"
          id="data"
          class="inputs___alteraDoc"
          autocomplete="off"
          v-model="documento.dtExp"
          value="yyyy/mm/dd"
        />

        <div class="erro" v-show="errors.has('dtValidade')">
          {{ errors.first("dtValidade") }}
        </div>


          <label for="validade"> Data de Validade</label>
          <input
            type="date"
            name="dtValidade"
            data-vv-as="Data de Validade"
            data-vv-rules="required"
            id="validade"
            class="inputs___alteraDoc"
            autocomplete="off"
            v-model="documento.dtValidade"
            value="yyyy/mm/dd"
          />
      

        <div class="erro" v-show="errors.has('emissor')">
          {{ errors.first("emissor") }}
        </div>

        
        <label for="emissor">Emissor</label>
        <input
          type="text"
          name="emissor"
          data-vv-as="Emissor"
          data-vv-rules="required"
          id="emissor"
          class="inputs___alteraDoc"
          autocomplete="off"
          v-model="documento.emissor"
        />
      </div>

      <div class="botao__alteraDoc">
        <meu-botao
          rotulo="Alterar"
          tipo="button"
          @botaoAtivado="grava(documento)"
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
import Documento from "../../../domain/dados/Documento";
import Botao from "../botao/Botao.vue";
export default {
  components: {
    "meu-botao": Botao,
  },
  data() {
    return {
      documento: new Documento(),
      id: this.$route.params.id,
    };
  },

  methods: {
    grava() {
      this.$http
        .put(`documento/${this.id}`, this.documento)
        .then(() => {
          this.documento.idCad = this.id;
          alert("documento alterado com sucesso");
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

.cadastro__documento{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alteraDoc {
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  border: solid;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  background-color: #d85128f6;
}
.titulo__alteraDoc {
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-align: center;
}

.inputs___alteraDoc {
  margin-bottom: 15px;
  width: 80%;
  height: 2.6vh;
  text-align: center;
  border:none;
  border-radius: 30px;
  font-size: 11pt;
}

.field {
  text-align: center;
}

.radio__alteraDoc {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
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