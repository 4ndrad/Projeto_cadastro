<template>
  <div>
    <form @submit.prevent="grava()" class="dados">
      <h1 class="titulo__dados">Cadastro</h1>

      <div class="cadastro__usuario">
        <div class="erro" v-show="errors.has('nome')">
          {{ errors.first("nome") }}
        </div>

        <div class="container__campo"> <!--passar para os outros cards-->
          <label for="nome">
            Nome
          </label>
          <div class="container__inputs"> 
            <input
              type="text"
              name="nome"
              v-validate
              data-vv-as="Nome"
              data-vv-rules="required|min:3|max:15"
              maxlength="15"
              id="nome"
              class="inputs"
              v-model="cadastro.nome"
              autocomplete="off"
            />
            </div>
          </div>


        <div class="erro" v-show="errors.has('sobrenome')">
          {{ errors.first("sobrenome") }}
        </div>

        <div class="container__campo">
          <label for="sobrenome">Sobrenome</label>
          <div class="container__inputs">
          <input
            type="text"
            name="sobrenome"
            v-validate
            data-vv-as="Sobrenome"
            data-vv-rules="required|min:3|max:15"
             maxlength="15"
            id="sobrenome"
            class="inputs"
            v-model="cadastro.sobreNome"
            autocomplete="off"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('dtNascFund')">
          {{ errors.first("dtNascFund") }}
        </div>

        <div class="container__campo">
          <label for="dtNascFund">Data de Nascimento</label>
            <div class="container__inputs">
          <input
            type="date"
            name="dtNascFund"
            v-validate
            data-vv-as="Data de Nascimento"
            data-vv-rules="required"
            id="dtNascFund"
            class="data"
            autocomplete="off"
            v-model="cadastro.dtNascFund"
            value="yyyy/mm/dd"
          />
        </div>
        </div>

        <div class="erro" v-show="errors.has('senha')">
          {{ errors.first("senha") }}
        </div>

        <div class="container__campo">
          <label for="senha">Senha</label>
          <div class="container__inputs">
          <input
            type="password"
            name="senha"
            v-validate
            data-vv-as="Senha"
            data-vv-rules="required|min:7|max:15"
            id="senha"
            class="inputs"
             maxlength="15"
            autocomplete="off"
            v-model="cadastro.senha"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('cpfCnpj')">
          {{ errors.first("cpfCnpj") }}
        </div>

        <div class="container__campo">
          <label for="cpfCnpj">CPF-CNPJ</label>
          <div class="container__inputs">
          <input
            type="text"
            name="cpfCnpj"
            v-validate
            data-vv-as="CPF-CNPJ"
            data-vv-rules="required|min:11|max:14"
            id="cpfCnpj"
             maxlength="14"
            class="inputs"
            autocomplete="off"
            v-model="cadastro.cpfCnpj"
            placeholder="xxx.xxx.xxx-xx"
          />
          </div>
        </div>

        <div class="container__campo">
          <label for="razao">Razão Social</label>
          <div class="container__inputs">
          <input
            type="text"
            name="razao"
            id="razao"
            class="inputs"
            autocomplete="off"
            v-model="cadastro.razaoSocial"
          />
          </div>
        </div>
      </div>

      <fieldset class="field">
        <legend>Qual o tipo do documento ?</legend>

        <label for="rg">
          <input
            type="radio"
            name="documento"
            v-validate
            v-model="documento.tipo"
            value="rg"
            id="1"
            class="radio"
          />RG
        </label>
        
        <label for="cnh">
          <input
            type="radio"
            name="documento"
            v-validate
            v-model="documento.tipo"
            value="cnh"
            id="2"
            class="radio"
          />CNH
        </label>
      </fieldset>

      <br />

      <div class="cadastro__documento">
        <div class="erro" v-show="errors.has('numeroDoc')">
          {{ errors.first("numeroDoc") }}
        </div>

        <div class="container__campo">
          <label for="numero">Número do Documento</label>
            <div class="container__inputs">
              <input
                type="text"
                name="numeroDoc"
                v-validate
                data-vv-as="Número do Documento"
                data-vv-rules="required|min:7|max:9"
                id="numero"
                maxlength="9"
                class="inputs"
                autocomplete="off"
                v-model="documento.numero"
              />
            </div>
        </div>

        <div class="erro" v-show="errors.has('digitoDoc')">
          {{ errors.first("digitoDoc") }}
        </div>

        <div class="container__campo">
          <label for="digito">Dígito</label>
            <div class="container__inputs">
              <input
                type="number"
                name="digitoDoc"
                v-validate
                data-vv-as="Número do Documento"
                data-vv-rules="required|min:0|max:2"
                id="digito"
              maxlength="2"
                class="digito"
                autocomplete="off"
                v-model="documento.digito"
              />
            </div>
        </div>

        <div class="erro" v-show="errors.has('dtExp')">
          {{ errors.first("dtExp") }}
        </div>

        
        <div class="container__campo">
        <label for="data">Data de Expedição</label>
        
        <div class="container__inputs">
        <input
          type="date"
          name="dtExp"
          v-validate
          data-vv-as="Data de Expedição"
          data-vv-rules="required"
          id="data"
          class="data"
          autocomplete="off"
          v-model="documento.dtExp"
          value="yyyy/mm/dd"
        />
        </div>
        </div>

        <div class="erro" v-show="errors.has('dtValidade')">
          {{ errors.first("dtValidade") }}
        </div>

        
        <div class="container__campo">
          <label for="validade"> Data de Validade</label>
            <div class="container__inputs">
          <input
            type="date"
            name="dtValidade"
            v-validate
            data-vv-as="Data de Validade"
            data-vv-rules="required"
            id="validade"
            class="data"
            autocomplete="off"
            v-model="documento.dtValidade"
            value="yyyy/mm/dd"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('emissor')">
          {{ errors.first("emissor") }}
        </div>

        <div class="container__campo">
        <label for="emissor">Emissor</label>
        <div class="container__inputs">
        <input
          type="text"
          name="emissor"
          v-validate
          data-vv-as="Emissor"
          data-vv-rules="required"
          id="emissor"
          class="inputs"
          autocomplete="off"
          v-model="documento.emissor"
        />
        </div>
        </div>
      </div>


      <fieldset class="field">
        <legend>Qual tipo do endereco? </legend>
        <label for="radio-r"
          ><input
            type="radio"
            v-model="endereco.tipo"
            id="A"
            class="radio"
            name="myGroup"
            value="r"
          />Residencial
          </label>

        <label for="radio-c"
          ><input
            type="radio"
            v-model="endereco.tipo"
            id="B"
            class="radio"
            name="myGroup"
            value="c"
          />Comercial
          </label>
      </fieldset>

      <br>

      <div class="cadastro__endereco">
        <div class="erro" v-show="errors.has('cep')">
          {{ errors.first("cep") }}
        </div>

        <div class="container__campo">
        <label for="cep">CEP</label>
        <div class="container__inputs">
        <input
          type="text"
          name="cep"
          v-validate
          data-vv-as="CEP"
          data-vv-rules="required|min:8|max:8"
          id="cep"
          class="inputs"
          maxlength="8"
          autocomplete="off"
          v-model="endereco.cep"
          placeholder="00000-000"
        />
        </div>
        </div>
 

        <div class="container__campo">
          <label for="logradouro">Logradouro</label>
          <div class="container__inputs">
          <input
            type="text"
            id="logradouro"
            class="inputs"
            autocomplete="off"
            v-model="endereco.logradouro"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('numero')">
          {{ errors.first("numero") }}
        </div>


        <div class="container__campo">
          <label for="numero">Número</label>
          <div class="container__inputs">
          <input
            type="number"
            name="numero"
            v-validate
            data-vv-as="Número"
            data-vv-rules="required"
            id="numero"
            maxlength="3"
            class="numero"
            autocomplete="off"
            v-model="endereco.numero"
          />
          </div>
        </div>

 
        <div class="container__campo">
          <label for="complemento">Completo</label>
          <div class="container__inputs">
          <input
            type="text"
            id="complemento"
            class="inputs"
            autocomplete="off"
            v-model="endereco.complemento"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('bairro')">
          {{ errors.first("bairro") }}
        </div>


        <div class="container__campo">
          <label for="bairro">Bairro</label>
          <div class="container__inputs">
          <input
            type="text"
            name="bairro"
            v-validate
            data-vv-as="Bairro"
            data-vv-rules="required"
            id="bairro"
            class="inputs"
            autocomplete="off"
            v-model="endereco.bairro"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('municipio')">
          {{ errors.first("municipio") }}
        </div>


        <div class="container__campo">
          <label for="municipio">Município</label>
          <div class="container__inputs">
          <input
            type="text"
            name="municipio"
            v-validate
            data-vv-as="Município"
            data-vv-rules="required"
            id="municipio"
            class="inputs"
            autocomplete="off"
            v-model="endereco.municipio"
          />
          </div>
        </div>

        <div class="erro" v-show="errors.has('uf')">
          {{ errors.first("uf") }}
        </div>

        
        <div class="container__campo">
        <label for="uf">UF</label>
        <div class="container__inputs">
        <input
          type="text"
          name="uf"
          v-validate
          data-vv-as="UF"
          data-vv-rules="required|min:2|max:2"
          id="uf"
          class="uf"
          maxlength="2"
          autocomplete="off"
          v-model="endereco.uf"
        />
        </div>
        </div>
      </div>

      <br />
      <div class="botoes">
        <meu-botao
          rotulo="Confirmar"
          tipo="button"
          type="submit"
          estilo="perigo"
          @click="confirmacao()"
        />
        <br />
         <router-link :to="{ name: 'login' }" estilo="perigo"
          ><meu-botao rotulo="Login" tipo="button" estilo="padrao" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Cadastro from "../../domain/dados/Cadastro";
import Documento from "../../domain/dados/Documento";
import Endereco from "../../domain/dados/Endereco";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "meu-botao": Botao,
  },
  data() {
    return {
      cadastro: new Cadastro(),
      documento: new Documento(),
      endereco: new Endereco(),
    };
  },
  methods: {
    grava() {
      this.$http
        .post("http://localhost:3000/cadastro", this.cadastro)
        .then((res) => res.json())
        .then(
          (usuario) => {
            this.cadastro = usuario;
            this.documento.idCad = usuario[0].idCad;
            this.endereco.idCad = usuario[0].idCad;

            this.$http
              .post("http://localhost:3000/documento", this.documento)
              .then(
                () => (this.documento = new Documento()),
                (err) => console.log(err)
              );

            this.$http
              .post("http://localhost:3000/endereco", this.endereco)
              .then(
                () => (this.endereco = new Endereco()),
                (err) => console.log(err)
              );
          },
          (err) => console.log(err)
        );
    },
    confirmacao() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$router.push({ name: "login" });
          alert("cadastro concluido!");
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

.dados {
  box-sizing: border-box;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 36%;
  padding: 1em 3.5em;
  border-radius: 20px;
  border: solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  background-color: #f8f8ff;
}

.titulo__dados {
  margin: 0.5em;
  font-size: 40px;
  text-align: center;
  background-color: #e64a1a;
  color: white;
  border-radius: 50px;
}

.cadastro__usuario {
  display: flex;
  flex-direction: column; 
  
}

.cadastro__documento {
  display: flex;
  flex-direction: column;
}

.cadastro__endereco {
  display: flex;
  flex-direction: column;
}

* .erro {
  font-weight: bold;
  margin-bottom: 8px;
  color: red;
}
 
.container__campo{
  margin: 0.9em 0;
  display: flex;
  justify-content: space-between;
  
}

.container__inputs{
  margin: 0 5px;
  width: 55%;
  display: flex;
  justify-content: center;
}

.field{
  display: flex;
  justify-content: center;
}

.data{
    font-size: 15px;
    height: 100%;
    width: 70%;
    text-align: center;
}

.inputs {
  font-size: 15px;
  width: 100%;
  height: 100%;
  text-align: center;
}


.digito {
  font-size: 15px;

}

.numero {
  font-size: 15px;

}

.uf {
  font-size: 15px;

}

.field {
  text-align: center;
}

.radio {
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 20px;
}

.botoes {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
}

</style>
