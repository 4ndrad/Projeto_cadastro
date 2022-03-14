<template>
  <div>
    <form @submit.prevent="grava()" class="dados">
      <h1 class="titulo__dados">Cadastro</h1>

      <div class="cadastro__usuario">
        <div class="erro" v-show="errors.has('nome')">
          {{ errors.first("nome") }}
        </div>

        <div class="campo__nome">
          <label for="nome">Nome</label>
          <input
            type="text"
            name="nome"
            v-validate
            data-vv-as="Nome"
            data-vv-rules="required|min:3|max:15"
            id="nome"
            class="inputs"
            v-model="cadastro.nome"
            autocomplete="off"
          />
        </div>

        <div class="erro" v-show="errors.has('sobrenome')">
          {{ errors.first("sobrenome") }}
        </div>

        <div class="campo__nome">
          <label for="sobrenome">Sobrenome</label>
          <input
            type="text"
            name="sobrenome"
            v-validate
            data-vv-as="Sobrenome"
            data-vv-rules="required|min:3|max:15"
            id="sobrenome"
            class="inputs"
            v-model="cadastro.sobreNome"
            autocomplete="off"
          />
        </div>

        <div class="erro" v-show="errors.has('dtNascFund')">
          {{ errors.first("dtNascFund") }}
        </div>

        <div class="campo__dtNascFund">
          <label for="dtNascFund">Data de Nascimento</label>
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

        <div class="erro" v-show="errors.has('senha')">
          {{ errors.first("senha") }}
        </div>

        <div class="campo__senha">
          <label for="senha">Senha</label>
          <input
            type="password"
            name="senha"
            v-validate
            data-vv-as="Senha"
            data-vv-rules="required|min:7|max:15"
            id="senha"
            class="inputs"
            autocomplete="off"
            v-model="cadastro.senha"
          />
        </div>

        <div class="erro" v-show="errors.has('cpfCnpj')">
          {{ errors.first("cpfCnpj") }}
        </div>

        <div class="campo__cpfCnpj">
          <label for="cpfCnpj">CPF-CNPJ</label>
          <input
            type="text"
            name="cpfCnpj"
            v-validate
            data-vv-as="CPF-CNPJ"
            data-vv-rules="required|min:11|max:14"
            id="cpfCnpj"
            class="inputs"
            autocomplete="off"
            v-model="cadastro.cpfCnpj"
            placeholder="xxx.xxx.xxx-xx"
          />
        </div>

        <div class="campo__razao">
          <label for="razao">Razão Social</label>
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

      <fieldset class="field">
        <legend>Qual o tipo do documento ?</legend>

        <label for="rg"
          ><input
            type="radio"
            name="documento"
            v-validate
            v-model="documento.tipo"
            value="rg"
            id="1"
            class="radio"
          />RG</label
        >
        <label for="cnh"
          ><input
            type="radio"
            name="documento"
            v-validate
            v-model="documento.tipo"
            value="cnh"
            id="2"
            class="radio"
          />CNH</label
        >
      </fieldset>

      <br />

      <div class="cadastro__documento">
        <div class="erro" v-show="errors.has('numeroDoc')">
          {{ errors.first("numeroDoc") }}
        </div>

        <div class="documento-campo__numero">
          <label for="numero">Número do Documento</label>
          <input
            type="text"
            name="numeroDoc"
            v-validate
            data-vv-as="Número do Documento"
            data-vv-rules="required|min:7|max:9"
            id="numero"
            class="inputs"
            autocomplete="off"
            v-model="documento.numero"
          />
        </div>

        <div class="erro" v-show="errors.has('digitoDoc')">
          {{ errors.first("digitoDoc") }}
        </div>

        <div class="documento-campo__digito">
          <label for="digito">Dígito</label>
          <input
            type="number"
            name="digitoDoc"
            v-validate
            data-vv-as="Número do Documento"
            data-vv-rules="required|min:1|max:9"
            id="digito"
            class="digito"
            autocomplete="off"
            v-model="documento.digito"
          />
        </div>

        <div class="erro" v-show="errors.has('dtExp')">
          {{ errors.first("dtExp") }}
        </div>

        <label for="data">Data de Expedição</label>
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

        <div class="erro" v-show="errors.has('dtValidade')">
          {{ errors.first("dtValidade") }}
        </div>

        <div class="campo__validade">
          <label for="validade"> Data de Validade</label>
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

        <div class="erro" v-show="errors.has('emissor')">
          {{ errors.first("emissor") }}
        </div>

        <label for="emissor">Emissor</label>
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

      <fieldset class="field">
        <label for="radio-r"
          ><input
            type="radio"
            v-model="endereco.tipo"
            id="A"
            class="radio"
            name="myGroup"
            value="r"
          />Residencial</label
        >
        <label for="radio-c"
          ><input
            type="radio"
            v-model="endereco.tipo"
            id="B"
            class="radio"
            name="myGroup"
            value="c"
          />Comercial</label
        >
      </fieldset>

      <br />

      <div class="cadastro__endereco">
        <div class="erro" v-show="errors.has('cep')">
          {{ errors.first("cep") }}
        </div>

        <label for="cep">CEP</label>
        <input
          type="text"
          name="cep"
          v-validate
          data-vv-as="CEP"
          data-vv-rules="required|min:8|max:8"
          id="cep"
          class="inputs"
          autocomplete="off"
          v-model="endereco.cep"
          placeholder="00000-000"
        />

        <div class="campo__logradouro">
          <label for="logradouro">Logradouro</label>
          <input
            type="text"
            id="logradouro"
            class="inputs"
            autocomplete="off"
            v-model="endereco.logradouro"
          />
        </div>

        <div class="erro" v-show="errors.has('numero')">
          {{ errors.first("numero") }}
        </div>

        <div class="campo__numero">
          <label for="numero">Número</label>
          <input
            type="number"
            name="numero"
            v-validate
            data-vv-as="Número"
            data-vv-rules="required"
            id="numero"
            class="numero"
            autocomplete="off"
            v-model="endereco.numero"
          />
        </div>

        <div class="campo__complemento">
          <label for="complemento">Completo</label>
          <input
            type="text"
            id="complemento"
            class="inputs"
            autocomplete="off"
            v-model="endereco.complemento"
          />
        </div>

        <div class="erro" v-show="errors.has('bairro')">
          {{ errors.first("bairro") }}
        </div>

        <div class="campo__bairro">
          <label for="bairro">Bairro</label>
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

        <div class="erro" v-show="errors.has('municipio')">
          {{ errors.first("municipio") }}
        </div>

        <div class="campo__municipio">
          <label for="municipio">Município</label>
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

        <div class="erro" v-show="errors.has('uf')">
          {{ errors.first("uf") }}
        </div>

        <label for="uf">UF</label>
        <input
          type="text"
          name="uf"
          v-validate
          data-vv-as="UF"
          data-vv-rules="required|min:2|max:2"
          id="uf"
          class="uf"
          autocomplete="off"
          v-model="endereco.uf"
        />
      </div>

      <br />
      <div class="botoes">
        <input
          type="submit"
          value="Confirmar"
          class="botao__cadastro"
          @click="confirmacao()"
        />
        <br />
        <router-link :to="{ name: 'login' }" tag="button" class="botao__login"
          >Login</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import Cadastro from "../../domain/dados/Cadastro";
import Documento from "../../domain/dados/Documento";
import Endereco from "../../domain/dados/Endereco";

export default {
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

.cadastro__usuario {
  margin-left: 10%;
  margin-bottom: 15px;
}

.cadastro__documento {
  margin-left: 10%;
  margin-bottom: 15px;
}

.cadastro__endereco {
  margin-left: 10%;
}
* .erro {
  font-weight: bold;
  margin-bottom: 8px;
  color: red;
}

.dados {
  box-sizing: border-box;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 40%;
  padding: 40px;
  border-radius: 20px;
  border: solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  background-color: #f8f8ff;
}

.titulo__dados {
  margin-bottom: 40px;
  font-size: 40px;
  text-align: center;
  background-color: #e64a1a;
  color: white;
  border: solid black;
}

.inputs {
  margin-bottom: 15px;
  font-size: 15px;
  width: 200px;
  text-align: center;
}

.data {
  margin-bottom: 15px;
  font-size: 15px;
  width: 150px;
  text-align: center;
}

.digito {
  font-size: 15px;
  width: 30px;
  margin-bottom: 10px;
}

.numero {
  font-size: 15px;
  width: 40px;
  margin-bottom: 10px;
}

.uf {
  font-size: 15px;
  width: 40px;
  margin-bottom: 10px;
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
}

.botao__cadastro {
  padding: 12px;
  width: 100px;
  background-color: #e64a1a;
  color: white;
  border: none;
  border-radius: 10px;
}

input[type="submit"]:hover {
  font-weight: bold;
  color: white;
  background-color: #e64a1a;
}

.botao__login {
  padding: 12px;
  width: 100px;
  background-color: #1958ab;
  border: none;
  border-radius: 10px;
  color: #ffffff;
}

button:hover {
  font-weight: bold;
  color: white;
  background-color: #1958ab;
}
</style>
