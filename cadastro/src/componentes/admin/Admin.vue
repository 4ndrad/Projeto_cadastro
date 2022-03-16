<template>
  <div class="tudo">
    <nav>
      <ul class="barra">
        <li class="item">
          <button class="logout" @click.prevent="Logout">Sair</button>
        </li>
      </ul>
    </nav>
    <body>
      <h1 class="titulo">{{ titulo }}</h1>
      <div>
        <usuario></usuario>
      </div>
    </body>
  </div>
</template>

<script>
import Usuario from "../shared/usuario/Usuario.vue";
export default {
  components: { usuario: Usuario },

  data() {
    return {
      titulo: "Empresa Visualização",
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

<style>
.titulo {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: rgb(255, 115, 0);
  font-size: 60px;
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
