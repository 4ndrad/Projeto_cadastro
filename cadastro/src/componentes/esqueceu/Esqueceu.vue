<template>
  <div>
    <form @submit.prevent="muda()" class="esqueceu">
      <div class="div__titulo">
        <h1 class="esqueceu__titulo">Alterar senha</h1>
      </div>

      <p class="invalide" v-if="mensagemErro">{{ mensagemErro }}</p>

      <div class="erro" v-show="errors.has('esqueceu-cpfCnpj')">
        {{ errors.first("esqueceu-cpfCnpj") }}
      </div>

      <div class="esqueceu-cpfCnpj">
        <label for="">CPF- CNPJ</label>
        <input
          type="text"
          name="esqueceu-cpfCnpj"
          v-validate
          data-vv-as="CPF- CNPJ"
          data-vv-rules="required|min:11|max:14"
          v-model="alterar.cpfCnpj"
          class="esqueceu__inputs"
          placeholder="xxx.xxx.xxx-xx"
        />
      </div>

      <div class="erro" v-show="errors.has('esqueceu-nome')">
        {{ errors.first("esqueceu-nome") }}
      </div>

      <div class="esqueceu-nome">
        <label for="">Nome</label>
        <input
          type="text"
          name="esqueceu-nome"
          v-validate
          data-vv-as="Nome"
          data-vv-rules="required|min:3|max:15"
          v-model="alterar.nome"
          class="esqueceu__nome"
          autocomplete="off"
        />
      </div>

      <div class="erro" v-show="errors.has('esqueceu-senha')">
        {{ errors.first("esqueceu-senha") }}
      </div>

      <div class="esqueceu-senha">
        <label for="">Nova senha</label>
        <input
          type="password"
          name="esqueceu-senha"
          v-validate
          data-vv-as="Nova Senha"
          data-vv-rules="required|min:7|max:15"
          v-model="alterar.senha"
          class="esqueceu__inputs"
          autocomplete="off"
        />
      </div>

      <div class="esqueceu__botoes">
        <input
          type="submit"
          class="esqueceu__confirma"
          value="Confirmar"
          @click="confirmacao()"
        />
        <br />
        <router-link
          :to="{ name: 'login' }"
          tag="button"
          class="esqueceu__login"
          >Login</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import Alterar from "../../domain/dados/Alterar";

export default {
  data() {
    return {
      alterar: new Alterar(),
      mensagemErro: "",
    };
  },

  methods: {
    muda() {
      this.$http.put("senha", this.alterar).then(
        (res) => res.json(),
        (this.alterar = new Alterar()),
        (err) => {
          if ( err, new Error){
             this.mensagemErro = 'CPF - CNPJ ou Senha inválidos'
           }
        }
      );
    },

    confirmacao() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$router.push({ name: "login" });
          alert("Senha alterada com sucesso");
        } else{
          alert("Senha não alterada");
        }
      });
    },
  },
};
</script>

<style>
.esqueceu {
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  border-radius: 20px;
  border: solid;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #1958ab75;
  color: white;
}

.erro {
  font-weight: bold;
  margin-bottom: 8px;
  color: red;
}

.div__titulo {
  margin-bottom: 50px;
}

.esqueceu__titulo {
  text-align: center;
  font-size: 35px;
  color: #ffffff;
}

.esqueceu__inputs {
  font-size: 17px;
  text-align: center;
  margin-bottom: 12px;
  border: none;
  border-radius: 15px;
}

.esqueceu__nome {
  width: 255px;
  font-size: 17px;
  text-align: center;
  margin-bottom: 12px;
  border: none;
  border-radius: 15px;
}

.esqueceu__botoes {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 20px;
}

.esqueceu__confirma {
  padding: 12px;
  width: 100px;
  border: none;
  border-radius: 10px;
  background-color: #e64a1a;
  color: white;
}

.esqueceu__confirma:hover {
  font-weight: bold;
  color: white;
  background-color: #e64a1a;
}

.esqueceu__login {
  padding: 12px;
  width: 100px;
  background-color: #1958ab75;
  border: none;
  border-radius: 10px;
  color: #ffffff;
}

button:hover {
  color: white;
  font-weight: bold;
  background-color: #1958ab75;
}
</style>