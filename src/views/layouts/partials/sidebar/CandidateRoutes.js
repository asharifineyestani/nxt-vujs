export const candidateRoutes = {
  root: {
    name: '/',
    displayName: 'candidateRoutes.home',
  },
  routes: [
    {
      path: '/admin/candidate/profile',
      displayName: 'menu.myProfile',
      meta: {
        iconClass: 'la la-file-text',
      }
    },

    {
      path: '/admin/candidate/my-resume',
      displayName: 'menu.myResume',
      meta: {
        iconClass: 'la la-briefcase',
      }
    },

    {
      path: '/admin/candidate/shortlisted-jobs',
      displayName: 'menu.shortlistedJob',
      meta: {
        iconClass: 'la la-money',
      }
    },


    {
      path: '/admin/candidate/applied-jobs',
      displayName: 'menu.appliedJob',
      meta: {
        iconClass: 'la la-paper-plane',
      }
    },

    {
      path: '/admin/candidate/job-alerts',
      displayName: 'menu.jobAlerts',
      meta: {
        iconClass: 'la la-user',
      }
    },

    {
      path: '/admin/candidate/cover-letter',
      displayName: 'menu.cv',
      meta: {
        iconClass: 'la la-file-text',
      }
    },


    {
      path: '/admin/candidate/change-password',
      displayName: 'menu.changePassword',
      meta: {
        iconClass: 'la la-flash',
      }
    },



    {
      path: '/admin/candidate/shortlisted-jobs',
      displayName: 'menu.logout',
      meta: {
        iconClass: 'la la-unlink',
      }
    }
  ]
}
