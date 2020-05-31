<template>
  <div>
    after login
  </div>
</template>


<script>
  import {navigationRoutes} from './NavigationRoutes'
  import Sh4SidebarLink from './components/Link'
  import Sh4SidebarLinkGroup from './components/LinkGroup'

  export default {
    name: 'app-navbar',
    components: {
      Sh4SidebarLinkGroup, Sh4SidebarLink,
    },
    props: {
      minimized: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        items: navigationRoutes.routes,
      }
    },
  }

</script>


<style lang="scss">

</style>
