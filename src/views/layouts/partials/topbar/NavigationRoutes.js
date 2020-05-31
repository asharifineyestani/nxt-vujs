export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'public.welcome',
      path: '/welcome',
      displayName: 'menu.home',
      meta: {
        iconClass: 'afra-iconset-dashboard',
      },
    },
    {
      name: 'public.about',
      path: '/about-us',
      displayName: 'menu.about',
      meta: {
        iconClass: 'afra-iconset-tables',
      },
    },

    {
      name: 'public.service',
      path: '/service',
      displayName: 'menu.service',
      meta: {
        iconClass: 'afra-iconset-ui-elements',
      },
      disabled: true,

      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],

    },

    {
      name: 'public.blog',
      path: '/blog',
      displayName: 'menu.blog',
      meta: {
        iconClass: 'afra-iconset-statistics',
      },
      disabled: true,

    },
    {
      name: 'public.contact',
      path: '/contact-us',
      displayName: 'menu.contact',
      meta: {
        iconClass: 'afra-iconset-forms',
      },
      disabled: true,
    },
  ],
}
