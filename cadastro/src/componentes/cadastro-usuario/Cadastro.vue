<template>
  <div>
    <form @submit.prevent="grava()" class="dados">
      <h1 class="titulo__dados">Cadastro</h1>

      <div id="cadastro__usuario">
        <label for="nome">Nome</label>
        <input
          type="text"
          name="nome"
          v-validate
          id="nome"
          class="inputs"
          v-model="cadastro.nome"
          autocomplete="off"
          maxlength="15"
          required
        />

        <label for="sobrenome">Sobrenome</label>
        <input
          type="text"
          name="Sobrenome"
          v-validate
          id="sobrenome"
          class="inputs"
          autocomplete="off"
          v-model="cadastro.sobreNome"
          maxlength="15"
          required
        />
        <br />
        <label for="dtNascFund">Data de Nascimento</label>
        <input
          type="date"
          name="dtNascFund"
          v-validate
          id="dtNascFund"
          class="inputs"
          autocomplete="off"
          v-model="cadastro.dtNascFund"
          value="yyyy/mm/dd"
          required
        />

        <label for="senha">Senha</label>
        <input
          type="password"
          name="senha"
          v-validate
          id="senha"
          class="inputs"
          autocomplete="off"
          v-model="cadastro.senha"
          minlength="7"
          maxlength="15"
          required
        />
        <br />
        <label for="cpfCnpj">CPF-CNPJ</label>
        <input
          type="text"
          name="cpfCnpj"
          v-validate
          id="cpfCnpj"
          class="inputs"
          autocomplete="off"
          v-model="cadastro.cpfCnpj"
          placeholder="xxx.xxx.xxx-xx"
          minlength="11"
          maxlength="14"
          required
        />
        <label for="razao">Razão Social</label>
        <input
          type="text"
          id="razao"
          class="inputs"
          autocomplete="off"
          v-model="cadastro.razaoSocial"
        />
      </div>
      <div id="cadastro__documento">
        <fieldset class="field">
          <legend>Qual o tipo do documento ?</legend>

          <label for="rg"
            ><input
              type="radio"
              v-model="documento.tipo"
              value="rg"
              id="1"
              class="radio"
              name="Documento"
            />RG</label
          >
          <label for="cnh"
            ><input
              type="radio"
              v-model="documento.tipo"
              value="cnh"
              id="2"
              class="radio"
              name="Documento"
            />CNH</label
          >
        </fieldset>
        <br />
        <label for="numero">Número do Documento</label>
        <input
          type="text"
          name="numero"
          v-validate
          id="numeroDoc"
          class="inputs"
          autocomplete="off"
          v-model="documento.numero"
          minlength="7"
          maxlength="9"
          required
        />

        <label for="digito">Dígito</label>
        <input
          type="number"
          name="digito"
          v-validate
          id="digito"
          class="digito"
          autocomplete="off"
          v-model="documento.digito"
          min="1"
          max="9"
          required
        />
        <br />
        <label for="data">Data de Expedição</label>
        <input
          type="date"
          name="data"
          v-validate
          id="data"
          class="inputs"
          autocomplete="off"
          v-model="documento.dtExp"
          value="yyyy/mm/dd"
          required
        />
        <label for="validade">Validade</label>
        <input
          type="date"
          name="validade"
          v-validate
          id="validade"
          class="inputs"
          autocomplete="off"
          v-model="documento.dtValidade"
          value="yyyy/mm/dd"
          required
        />
        <br />
        <label for="emissor">Emissor</label>
        <input
          type="text"
          name="emissor"
          v-validate
          id="emissor"
          class="inputs"
          autocomplete="off"
          v-model="documento.emissor"
          required
        />
      </div>

      <div id="cadastro__endereco">
        <label for="cep">CEP</label>
        <input
          type="text"
          name="cep"
          v-validate
          id="cep"
          class="inputs"
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
          class="inputs"
          autocomplete="off"
          v-model="endereco.logradouro"
        />

        <label for="numero">Número</label>
        <input
          type="number"
          name="numero"
          v-validate
          id="numero"
          class="numero"
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
          class="inputs"
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
          class="inputs"
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
          class="inputs"
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
          class="uf"
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
      </div>
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
      this.$validator
      .validateAll()
      .then(success => {
        if(success){
           //let retorno = confirm("Deseja confirmar Cadastro ?");

           if (retorno == true) {
            this.$router.push({ name: "login" });
            alert("cadastro concluido!");
          }else {
            alert("Você cancelou o cadastro");
         }
        }
      })
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
}

.dados {
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  border: solid;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f8f8ff;
}

.titulo__dados {
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-align: center;
  background-color: #e64a1a;
  color: white;
  border: solid black;
}

.inputs {
  margin-bottom: 15px;
  width: 150px;
  text-align: center;
}

.digito {
  width: 30px;
}

.numero {
  width: 40px;
}

.uf {
  width: 40px;
  margin-bottom: 10px;
}

.field {
  text-align: center;
}

.radio {
  margin-top: 10px;
  margin-bottom: 10px;
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
