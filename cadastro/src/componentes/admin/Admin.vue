<template>
  <div class="tudo">
    <h1 class="titulo">{{ titulo }}</h1>
    <div>
      <usuario></usuario>
    </div>
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
};
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    color:  rgb(255, 115, 0);;
    font-size: 60px;
}


</style>
