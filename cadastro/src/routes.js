import Cadastro from './componentes/cadastro-usuario/Cadastro.vue';
import Login from './componentes/tela-login/TelaLogin.vue';
import Admin from './componentes/admin/Admin.vue';
import Home from './componentes/home/Home.vue';
import Esqueceu from './componentes/esqueceu/Esqueceu.vue';

export const routes = [
    {
        path: '',
        name: 'login',
        component: Login
    },

    {
        path: '/home',
        name: 'home',
        component: Home
    },

    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro
    },

    {
        path: '/esqueceu',
        name: 'esqueceu',
        component: Esqueceu
    },

    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },

    {
        path:'*',
        component: Login
    }
];