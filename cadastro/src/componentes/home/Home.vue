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
      <h1 class="titulo-home">Seja bem-vindo</h1>
      <ul class="dados__usuario">
        <li>
          <ul > 
            <h1 class="titulo-dados">Dados Usuário</h1>
            <li>CPF-CNPJ:</li>
            <li>Nome:</li>
            <li>Sobrenome:</li>
            <li>Razão Social:</li>
            <li>Data de criação:</li>
          </ul>
        </li>

        <br />

        <li>
          <ul>
            <h1 class="titulo-dados">Dados do Documento</h1>
            <li>Tipo:</li>
            <li>Número:</li>
            <li>Dígito:</li>
            <li>Data Expedição:</li>
            <li>Validade:</li>
            <li>Emissor:</li>
          </ul>
        </li>

        <br />

        <li>
          <ul>
            <h1 class="titulo-dados">Dados do Endereço</h1>
            <li>CEP:</li>
            <li>Logradouro:</li>
            <li>Número:</li>
            <li>Complemento:</li>
            <li>Bairro:</li>
            <li>Município:</li>
            <li>UF:</li>
            <li>Típo:</li>
          </ul>
        </li>
      </ul>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dados: [],
    };
  },
  methods: {
    Logout() {
      this.$store.commit("DESLOGAR_USUARIO");
      this.$router.push({ name: "login" });
    },
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
  padding-bottom: 30px;
  color: aliceblue;
  width: 45%;
  background-color: blue;
}

.titulo-dados{
  text-align: center;
}

.envolve {
  font-family: Arial, Helvetica, sans-serif;
}

.titulo-home {
  color: red;
  text-align: center;
  margin-bottom: 10px;
}

.barra {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  padding-right: 20px;
}

.logout {
  font-size: 16px;

  color: white;
  background-color: #1958ab75;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  text-decoration: none;
  border: solid white;
  border-radius: 10px;
}

.logout:hover {
  font-weight: bold;
  background-color: #e64a1a;
}
</style>