<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router';
import Cadastro from './componentes/cadastro-usuario/Cadastro.vue';
import Login from './componentes/tela-login/TelaLogin.vue';
import Admin from './componentes/admin/Admin.vue';
import Home from './componentes/home/Home.vue';
import Esqueceu from './componentes/esqueceu/Esqueceu.vue';
import provedor from './provedor';

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
        meta: {
            publica: true
        }
        //privado
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

=======
import Vue from 'vue'
import VueRouter from 'vue-router';
import Cadastro from './componentes/cadastro-usuario/Cadastro.vue';
import Login from './componentes/tela-login/TelaLogin.vue';
import Admin from './componentes/admin/Admin.vue';
import Home from './componentes/home/Home.vue';
import Esqueceu from './componentes/esqueceu/Esqueceu.vue';
import provedor from './provedor';

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
        meta: {
            publica: true
        }
        //privado
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

>>>>>>> 8fc890dbbc8bd7abdf8d09ad3805b169d7117974
