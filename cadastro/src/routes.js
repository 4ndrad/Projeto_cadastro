import Vue from 'vue'
import VueRouter from 'vue-router';
import Cadastro from './componentes/cadastro-usuario/Cadastro.vue';
import Login from './componentes/tela-login/TelaLogin.vue';
import Admin from './componentes/admin/Admin.vue';
import Home from './componentes/home/Home.vue';
import Esqueceu from './componentes/esqueceu/Esqueceu.vue';
import provedor from './provedor';
import AlterarDocumento from './componentes/shared/alterar-documento/AlterarDocumento.vue';
import AlterarEndereco from './componentes/shared/alterar-endereco/AlterarEndereco.vue';
import UsuarioAlterarDocumento from './componentes/shared/usuario-alterar-documento/UsuarioAlterarDocumento.vue';
import UsuarioAlterarEndereco from './componentes/shared/usuario-alterar-endereco/UsuarioAlterarEndereco.vue';
import InserirDocumento from './componentes/shared/inserir-documento/InserirDocumento.vue';
import InserirEndereco from './componentes/shared/inserir-endereco/InserirEndereco.vue';


Vue.use(VueRouter);

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            publica: true
        }
    },

    {
        path: '/home',
        name: 'home',
        component: Home
        //privado
    },

    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
        meta: {
            publica: true
        }
    },

    {
        path: '/esqueceu',
        name: 'esqueceu',
        component: Esqueceu,
        meta: {
            publica: true
        }
    },

    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        //privado
    },

    {
        path:'/alterarDocumento/:id',
        name:'alterarDocumento',
        component: AlterarDocumento,
        meta: {
            publica: true
        }
    },

    {
        path:'/alterarEndereco/:id',
        name:'alterarEndereco',
        component: AlterarEndereco,
        meta: {
            publica: true
        }
    },
    {
        path:'/alteracaoDocumento/:id',
        name:'usuarioAlterarDocumento',
        component: UsuarioAlterarDocumento,
        meta: {
            publica: true
        }
    },

    {
        path:'/alteracaoEndereco/:id',
        name:'usuarioAlterarEndereco',
        component: UsuarioAlterarEndereco,
        meta: {
            publica: true
        }
    },
    {
        path:'/inserirDocumento/:id',
        name:'inserirDocumento',
        component: InserirDocumento,
        meta: {
            publica: true
        }
    },

    {
        path:'/inserirEndereco/:id',
        name:'inserirEndereco',
        component: InserirEndereco,
        meta: {
            publica: true
        }
    },
  
    {
        path: '*',
        component: Login
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
  })

router.beforeEach((routeTo, routeFrom, next) => {
    if (!routeTo.meta.publica && !provedor.state.idCad) {
        return next({
            path: '/login'
        })
    }
    next();
})


export default router

