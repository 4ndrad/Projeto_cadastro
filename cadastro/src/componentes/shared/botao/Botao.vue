<template>
  <button
    @click="disparaAcao"
    class="botao"
    :class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String,
    },
    rotulo: {
      type: String,
      required: true,
    },

    confirmacao: Boolean,
    estilo: String,
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operacao?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return " botao-perigo";
      if (this.estilo == "alterar") return " botao-alterar";
      if (this.estilo == "insert") return " botao-insert";
    },
  },
};
</script>
<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  width: auto;
  background: red;
  color: white;
  border: none;
}

.botao-perigo:hover {
  font-weight: bold;
}

.botao-padrao {
  width: auto;
  background-color: #1958ab;
  color: white;
  border: none;
}

.botao-padrao:hover {
  font-weight: bold;
}

.botao-insert {
  width: auto;
  background-color: #1958ab;
  color: white;
  border: none;
}

.botao-padrao:hover {
  font-weight: bold;
  background-color: #1958ab;
}

.botao-alterar {
  background: #f50000;
  color: #ffffff;
  border: none;
}

.botao-alterar:hover {
  font-weight: bold;
}
</style>