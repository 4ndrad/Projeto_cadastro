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
      if (this.estilo == "alterarAdmin") return " botao-alterarAdmin";
      if (this.estilo == "adicionar") return " botao-adicionar";
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
  outline: none;
  text-decoration: none;
}

.botao-perigo {
  width: auto;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
}

.botao-perigo:hover {
  transition-delay: 0.2s;
  font-weight: bold;
}

.botao-padrao {
  width: auto;
  background-color: #1958ab;
  color: white;
  border: none;
  border-radius: 5px;
}

.botao-padrao:hover {
  transition-delay: 0.2s;
  font-weight: bold;
}

.botao-insert {
  width: auto;
  background-color: #ffffff;
  color: rgb(36, 43, 85);
  border: none;
}

.botao-alterarAdmin {
  width: auto;
  background: rgb(243, 233, 233);
  color: rgb(0, 0, 0);
  border: none;
}

.botao-alterar {
  background: #f50000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
}

.botao-alterar:hover {
  transition-delay: 0.2s;
  font-weight: bold;
}

.botao-adicionar {
  background: #ffffff;
  border: none;
}

.botao-adicionar:hover{
  transition-delay: 0.2s;
  background: #1958ab;
  color: #ffffff;
}

</style>