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
      <h1 class="titulo-home">Bem Vindo</h1>
    </body>
  </div>
</template>

<script>
export default {
  methods: {
    Logout() {
      this.$store.commit('DESLOGAR_USUARIO')
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.envolve {
  font-family: Arial, Helvetica, sans-serif;
}

.titulo-home {
  color: red;
  text-align: center;
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