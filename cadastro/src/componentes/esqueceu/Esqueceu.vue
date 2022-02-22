<template>
  <div>
    <form @submit.prevent="muda()" class="esqueceu">
      <div class="div__titulo">
         <h1 class="esqueceu__titulo">Alterar senha </h1>
      </div>
     
      <label for="">CPF- CNPJ</label>
      <input
        type="text"
        v-model="alterar.cpfCnpj"
        class="esqueceu__inputs"
        placeholder="xxx.xxx.xxx-xx"
        minlength="11"
        maxlength="14"
        required
      />
      <br />

      <label for="">Nome</label>
      <input
        type="text"
        v-model="alterar.nome"
        class="esqueceu__nome"
        autocomplete="off"
        required
      />
      <br />
      <label for="">Nova senha</label>
      <input
        type="password"
        v-model="alterar.senha"
        class="esqueceu__inputs"
        autocomplete="off"
        minlength="7"
        maxlength="15"
        required
      />
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
import Alterar from '../../domain/dados/Alterar';

export default {
  data(){
    return{
      alterar: new Alterar()
    }
  },

  methods: {
    muda(){
      this.$http
      .put("senha",this.alterar)
      .then((res) => res.json(), this.alterar = new Alterar()),
      alert("Senha alterada com sucesso")
    },
   
    
    confirmacao() {
      confirm("Deseja alterar senha ?");
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

.div__titulo{
  margin-bottom: 50px;
}

.esqueceu__titulo {
  text-align: center;
  font-size: 35px;
  color:#ffffff;
 
}

.esqueceu__inputs {
  font-size: 17px;
  text-align: center;
  margin-bottom: 12px;
  border: none;
  border-radius: 15px;
}

.esqueceu__nome{
  width: 255px;
  font-size: 17px;
  text-align: center;
  margin-bottom: 12px;
  border: none;
  border-radius: 15px;
}

.esqueceu__confirma {
  padding: 12px;
  width: 100px;
  border: none;
  border-radius: 10px;
  background-color: #1958ab75;
  color: white;
}

.esqueceu__botoes{
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 20px;
}

.esqueceu__confirma:hover {
  font-weight: bold;
  color: white;
   background-color: #1958ab75;
}

.esqueceu__login {
  padding: 12px;
  width: 100px;
  background-color: #E64A1A;
  border: none;
  border-radius: 10px;
  color: #ffffff;
}

button:hover {
  color: white;
  font-weight: bold;
  background-color: #E64A1A;
}
</style>