export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'public.scenes.welcome',
      path: '/welcome',
      displayName: 'menu.home',
      meta: {
        iconClass: 'afra-iconset-dashboard',
      },
    },
    {
      name: 'public.scenes.employers',
      path: '/pages/blog',
      displayName: 'menu.employers',
      meta: {
        iconClass: 'afra-iconset-statistics',
      },
      disabled: true,

    },
    {
      name: 'public.scenes.candidates',
      path: '/scenes/contact-us',
      displayName: 'menu.candidates',
      meta: {
        iconClass: 'afra-iconset-forms',
      },
      disabled: true,

    },
    {
      name: 'public.scenes.blogs',
      path: '/scenes/about-us',
      displayName: 'menu.blog',
      meta: {
        iconClass: 'afra-iconset-tables',
      },

    },
    {
      name: 'public.scenes.jobs',
      path: '/scenes/jobs',
      displayName: 'menu.job',
      meta: {
        iconClass: 'afra-iconset-ui-elements',
      },
      disabled: true,

    },
  ],
}
