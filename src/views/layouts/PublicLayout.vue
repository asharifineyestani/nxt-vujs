<template>
  <va-page-layout
    @toggleSidebar="toggleSidebar"
    :mobileWidth="mobileWidth"
  >
    <app-topbar
      slot="topbar"
      :minimized.sync="minimized"
      :logo = "Next"
    />
    <main
      slot="content"
      id="content"
      role="main"
    >
      <router-view/>
    </main>

    <app-footer
      slot="footer"
    />
  </va-page-layout>
</template>

<script>
  import VaPageLayout from './VaPageLayout'
  import AppTopbar from './partials/topbar/AppTopbar'
  import AppFooter from './partials/footer/AppFooter'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app-layout',
    components: {
      VaPageLayout,
      AppTopbar,
      AppFooter

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
