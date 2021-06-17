import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import Index from '../views/front/index.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/front/index.vue'),
    children: [
      {
        path: 'products',
        name: 'all-product',
        component: () => import('../components/front/all-products.vue'),
      },
      {
        path: 'products/:id',
        name: 'detail',
        component: () => import('../components/front/product-detail.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../components/front/cart.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../components/front/order.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/dashboard/admin.vue'),
    children: [
      {
        path: 'product-list',
        name: 'product-list',
        component: () => import('../components/dashboard/product-list.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../components/dashboard/order.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
