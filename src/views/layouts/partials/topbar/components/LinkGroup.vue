<template>
  <li class="menu-item-has-children">
    <a href="#" >
      {{title}}
    </a>
    <ul>
      <slot/>
    </ul>
  </li>
</template>

<script>


export default {
  name: 'link-group',
  props: {
    icon: [String, Array],
    title: String,
    minimized: Boolean,
    activeByDefault: Boolean,
    children: Array,
    color: {
      type: String,
      default: 'secondary',
    },
  },
  components: {

  },
  data () {
    return {
      isActive: this.activeByDefault,
      isHovered: false,
      expanded: this.expanded,
      dropdownOpened: false,
    }
  },
  mounted () {
    this.updateActiveState()
  },
  watch: {
    $route () {
      this.$nextTick(() => {
        this.updateActiveState()
      })
    },
    minimized (value) {
      if (!value) {
        this.isActive = false
      } else {
        this.updateActiveState()
      }
    },
  },
  methods: {
    toggleMenuItem () {
      this.expanded = !this.expanded
    },
    updateHoverState () {
      this.isHovered = !this.isHovered
    },
    updateActiveState () {
      const active = this.children.some(item => item.name === this.$route.name)

      this.isActive = this.minimized ? active : false
      this.expanded = active
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'va-sidebar-link': true,
        'va-sidebar-link--expanded': this.expanded,
        'va-sidebar-link--active': this.isActive,
      }
    },
    computedClass () {
      return {
        'menu-item-has-children': true,
      }
    },
    sidebarLinkStyles () {
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
      } else return {}
    },
    iconStyles () {
      return (this.isHovered || this.isActive)
        ? { color: this.$themes['primary'] }
        : { color: 'white' }
    },
  },
}

</script>

<style lang="scss">

</style>
