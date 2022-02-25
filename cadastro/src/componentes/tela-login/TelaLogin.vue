<template >
  <div>
    <form @submit.prevent="loga()" class="formulario">
      <div class="div__titulo">
        <h1 class="titulo">{{ titulo }}</h1>
      </div>
      <p class="invalide" v-if="mensagemErro">{{ mensagemErro }}</p>
      <input
        type="search"
        class="acesso"
        placeholder="CPF - CNPJ"
        v-model="usuario.cpfCnpj"
      />
      <br /><br />
      <input
        type="password"
        class="senha"
        placeholder="Senha"
        v-model="usuario.senha"
      />
      <br /><br />
      <input type="submit" value="Continuar" class="botao" />
      <div class="div__botoes">
        <router-link :to="{ name: 'esqueceu' }" tag="a" class="esqueceu__acesso"
          >Esqueceu a senha ?</router-link
        >
        <br />
        <router-link
          :to="{ name: 'cadastro' }"
          tag="button"
          class="botao__padrao"
          >Cadastre-se</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "LOGIN",
      usuario: {},
      mensagemErro: "",
    };
  },
  methods: {
    loga() {
      this.$http
        .post("login", this.usuario)
        .then((res) => {
          console.log(res);
          this.$store.commit("DEFINIR_USUARIO_LOGADO", {
            idCad: res.data[0].idCad,
          });
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
           if ( err, new Error){
             this.mensagemErro = 'CPF - CNPJ ou Senha inválidos'
           }
        });
    },
  },
};
</script>

<style>
.formulario {
  font-family: Arial, Helvetica, sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px;
  border-radius: 15px;
  background-color: #1958ab75;
  position: absolute;
  border: solid white;
}
.titulo {
  text-align: center;
  color: #e64a1a;
}
.acesso {
  padding: 12px;
  font-size: 15px;
  border: none;
  border-radius: 15px;
}
.senha {
  padding: 12px;
  font-size: 15px;
  border: none;
  border-radius: 15px;
}

.div__botoes {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 20px;
}

.botao {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  background-color: #e64a1a;
  border: none;
  border-radius: 15px;
  padding: 15px;
  color: white;
}

.botao:hover {
  font-weight: bold;
  background-color: #e64a1a;
  color: #ffffff;
}

.esqueceu__acesso:hover {
  font-weight: bold;
  color: #e64a1a;
}

.esqueceu__acesso {
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: white;
}

.botao__padrao {
  border: none;
  border-radius: 10px;
}

.botao__padrao:hover {
  font-weight: bold;
  text-decoration: none;
  color: white;
  background-color: #e64a1a;
}

.invalide {
  text-decoration: none;
  color: red;
}
</style>
