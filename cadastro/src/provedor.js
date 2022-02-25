import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

const estado = {
    idCad: null,
}

const mutations = {
        DEFINIR_USUARIO_LOGADO(state, {idCad}){
            state.idCad= idCad
        },
        DESLOGAR_USUARIO(state){
            state.idCad= null
        }
}

export default new Vuex.Store({
    state: estado,
    mutations,
})