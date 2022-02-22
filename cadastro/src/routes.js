import Cadastro from './componentes/cadastro-usuario/Cadastro.vue';
import Login from './componentes/tela-login/TelaLogin.vue';
import Admin from './componentes/admin/Admin.vue';
import Pagina from './componentes/pagina-inicial/PaginaInicial.vue';
import Esqueceu from './componentes/esqueceu/Esqueceu.vue';

export const routes = [
    {
        path: '',
        name: 'login',
        component: Login
    },

    {
        path: '/pagina',
        name: 'pagina',
        component: Pagina
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