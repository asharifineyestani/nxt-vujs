export const employerRoutes = {
  root: {
    name: '/',
    displayName: 'employerRoutes.home',
  },
  routes: [
    {
      path: '/admin/employer/profile',
      displayName: 'menu.companyProfile',
      meta: {
        iconClass: 'la la-file-text',
      }
    },

    {
      path: '/admin/employer/manage-jobs',
      displayName: 'menu.manageJob',
      meta: {
        iconClass: 'la la-briefcase',
      }
    },

    {
      path: '/admin/employer/transactions',
      displayName: 'menu.transactions',
      meta: {
        iconClass: 'la la-money',
      }
    },


    {
      path: '/admin/employer/resumes',
      displayName: 'menu.resumes',
      meta: {
        iconClass: 'la la-paper-plane',
      }
    },

    {
      path: '/admin/employer/packages',
      displayName: 'menu.packages',
      meta: {
        iconClass: 'la la-user',
      }
    },

    {
      path: '/admin/employer/post-new-job',
      displayName: 'menu.postNewJob',
      meta: {
        iconClass: 'la la-file-text',
      }
    },


    {
      path: '/admin/employer/job-alerts',
      displayName: 'menu.jobAlerts',
      meta: {
        iconClass: 'la la-flash',
      }
    },
    {
      path: '/admin/employer/change-password',
      displayName: 'menu.changePassword',
      meta: {
        iconClass: 'la la-flash',
      }
    },


    {
      path: '/admin/employer/shortlisted-jobs',
      displayName: 'menu.logout',
      meta: {
        iconClass: 'la la-unlink',
      }
    }
  ]
}
