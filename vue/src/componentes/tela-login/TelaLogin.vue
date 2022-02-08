<template >
  <div>
    <div class="formulario">
      <h1 class="titulo">{{ titulo }}</h1>
      <input
        type="search"
        class="acesso"
        placeholder="cpfCnpj"
        v-model="form.cpfCnpj"
      />
      <br /><br />
      <input
        type="password"
        class="senha"
        placeholder="senha"
        v-model="form.password"
      />
      <br /><br />
      <button class="botao" @click="login">Continuar</button>
      <div class="preenche">
        <a href="#" class="esqueceu" @click="esqueceu">Esqueceu a senha ?</a>
        <br />
        <button hef="#" class="cadastre" @click="register">Cadastre-se</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "LOGIN",
      form: {
        cpfCnpj: "",
        password: "",
      },
    };
  },
  methods: {
    login() {},
    esqueceu() {},
    register() {}
  },
  created() {
    this.$http.get("http://localhost:3000/login")
    .then(res => res.json())
    .then( login => this.login = login, err => console.login(err));
  },
};
</script>

<style>
.formulario {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  position: absolute;
}
.titulo {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
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
.botao {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  background-color: orange;
  border: none;
  border-radius: 15px;
  padding: 15px;
  color: white;
}

button:hover{
  background-color:orange;
  color:#ffffff;
}

.preenche {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.esqueceu {
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: white;
}

a:hover {
  text-decoration: none;
  color: orange;
}

.cadastre {
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  border: none;
  border-radius: 10px;
}
</style>
