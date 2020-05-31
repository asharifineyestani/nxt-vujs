<template>
  <div class="theme-layout" id="scrollup">
    <slot name="topbar"></slot>
    <div class="content-wrap" id="content-wrap">
      <slot name="content"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: 'va-page-layout',
    data() {
      return {
        prevMatchLg: true,
        sidebar: null,
      }
    },
    props: {
      mobileWidth: {
        type: Number,
        default: 767,
      },
    },
    mounted() {
      this.sidebar = this.$el.querySelector('.va-sidebar')

      window.addEventListener('resize', function () {
        this.updateSidebarState()
      }.bind(this))
      this.updateSidebarState()
    },
    methods: {
      checkIsDesktop() {
        return window.matchMedia(`(min-width: ${this.mobileWidth}px)`).matches
      },
      updateSidebarState() {
        if (this.checkIsDesktop() && !this.prevMatchLg) {
          this.$emit('toggleSidebar', false)
        } else if (!this.checkIsDesktop() && this.prevMatchLg) {
          this.$emit('toggleSidebar', true)
        }
        this.prevMatchLg = this.checkIsDesktop()
      },
    },
  }
</script>

<style lang="scss">
  @import "../../sass/main";

</style>
