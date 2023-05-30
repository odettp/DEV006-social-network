// Este es el punto de entrada de tu aplicacion
//import home from './home.js';
//import login from './login.js';
//import error from './error.js';

import { myFunction } from './lib/index.js';

myFunction();

import home from './home.js';
import login from './login.js';
import error from './error.js';

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/error', component: error },
];

const defaultRoute = '/';
const root = document.getElementById('root');


function navigateTo(hash) {
    const route = routes.find((routeFound) => routeFound.path === hash);

    if (route && route.component) {
        window.history.pushState(
            {},
            route.path,
            window.location.origin + route.path,
        );

        if (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        root.appendChild(route.component());
    } else {
        navigateTo('/error');
    }
}

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);


