<template>
  <ul>
  </ul>
</template>


<script>
  import {employerRoutes} from './EmployerRoutes'
  import {candidateRoutes} from './CandidateRoutes'
  import Sh4SidebarLink from './components/Sh4SidebarLink'

  export default {
    name: 'admin-sidebar',
    components: {
      Sh4SidebarLink,
    },
    props: {
      minimized: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {}
    },

    created() {
      let current =  this.$route.path;
      let segments = current.split("/");
      console.log(segments[2])

      },

    computed: {
      // a computed getter
      items: function () {
        let current =  this.$route.path;
        let segments = current.split("/");
        if (segments[2] == 'candidate')
          return candidateRoutes.routes
         else
          return employerRoutes.routes
      }
    }
  }

</script>


<style lang="scss">

</style>
