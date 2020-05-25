<template>
  <va-page-layout
    @toggleSidebar="toggleSidebar"
    :mobileWidth="mobileWidth"
  >
    <app-navbar
      :minimized.sync="minimized"
    />
    <main
      slot="content"
      id="content"
      role="main"
    >
      <router-view/>
    </main>
  </va-page-layout>
</template>

<script>
  import VaPageLayout from './VaPageLayout'
  import AppNavbar from './partials/topbar/AppNavbar'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app-layout',
    components: {
      VaPageLayout,
      AppNavbar,
    },
    data() {
      return {
        minimized: false,
        mobileWidth: 767,
      }
    },
    computed: {
      ...mapGetters([
        'isLoading',
      ]),
    },
    methods: {
      toggleSidebar(minimized) {
        this.minimized = minimized
      },
    },
  }
</script>

<style lang="scss">

</style>
