<template>
  <b-nav-item href="#" class="menu-item">
    <router-link
      active-class="va-sidebar-link--active"
      :to="to"
      :target="target"
    >
      <slot name="title"/>
      {{title}}
    </router-link>
  </b-nav-item>
</template>

<script>

  export default {
    name: 'link',
    components: {  },
    props: {
      to: {
        type: [Object, String],
        default: '',
      },
      target: {
        type: String,
        default: '_self',
      },
      icon: {
        type: [String, Array],
      },
      title: {
        type: String,
      },
      activeByDefault: {
        type: Boolean,
      },
      minimized: {
        type: Boolean,
      },
    },
    data () {
      return {
        isHovered: false,
        isActive: this.activeByDefault,
      }
    },
    watch: {
      $route (route) {
        this.updateActiveState()
      },
    },
    computed: {
      computedLinkClass () {
        return {
          'va-sidebar-link': true,
          'va-sidebar-link--minimized': this.minimized,
        }
      },
      computedLinkStyles () {
        let getBackgroundColor = () => {
          let color = '#000'

          color.s -= 13
          color.l += 15

          if (color.s < 0) color.s = 0
          if (color.l > 100) color.l = 100

          return color.css
        }

        if (this.isHovered || this.isActive) {
          return {
            color: this.$themes['primary'],
            backgroundColor: getBackgroundColor(),
            borderColor: this.isActive ? this.$themes['primary'] : 'transparent',
          }
        } else {
          return {}
        }// else <- controlled by CSS (color in rgba)
      },
      computedIconStyles () {
        return (this.isHovered || this.isActive)
          ? { color: this.$themes['primary'] }
          : { color: 'white' }
      },
    },
    methods: {
      updateHoverState (isHovered) {
        this.isHovered = isHovered
      },
      updateActiveState () {
        this.$nextTick(() => {
          this.isActive = this.$route.name === this.to.name
        })
      },
    },
    mounted () {
      this.updateActiveState()
    },
  }
</script>

<style lang="scss">


</style>
