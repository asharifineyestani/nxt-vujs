import Vue from 'vue'
import Router from 'vue-router'
import PublicLayout from '../views/layouts/PublicLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: "<router-view></router-view>",
}

const demoRoutes = []


export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    ...demoRoutes,
    {
      path: '/',
      redirect: {path: '/welcome'},
    },
    {
      path: '*',
      redirect: {path: '/welcome'},
    },
    {
      name: 'public',
      path: '/',
      component: PublicLayout,
      children: [
        {
          name: 'pages',
          path: 'pages',
          component: EmptyParentComponent,
          children: [
            {
              name: 'welcome',
              path: '/welcome',
              component: () => import('../views/scenes/Welcome'),
            },
            {
              name: 'about',
              path: '/about-us',
              component: () => import('../views/scenes/About'),
            },
            {
              name: 'service',
              path: '/service',
              component: () => import('../views/scenes/Service'),
            },
            {
              name: 'blog',
              path: '/blog',
              component: () => import('../views/scenes/Blog'),
            },
            {
              name: 'contact',
              path: '/contact',
              component: () => import('../views/scenes/Contact'),
            },
          ],
        },
      ],
    },
  ],
})


