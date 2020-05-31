<template>
  <div>
    <header :class="computedClass">
        <b-container>
          <div class="header-wrap">
            <div class="header-left">
              <div class="header-logo">
                <a href="/">
                  Afranext
                </a>
              </div>
              <div class="header-menu">
                <ul>


                  <template v-for="(item, key) in items">
                    <link-group
                      :key="key"
                      v-if="item.children"
                      :title="$t(item.displayName)"
                      :children="item.children"
                    >
                      <top-bar-link
                        v-for="(subMenuItem, key) in item.children"
                        :key="key"
                        :to="{ path: subMenuItem.path }"
                        :title="$t(subMenuItem.displayName)"
                      />
                    </link-group>
                    <top-bar-link
                      v-else
                      :key="key"
                      :to="{ path: item.path }">
                      <span slot="title">{{ $t(item.displayName) }}</span>
                    </top-bar-link>
                  </template>


                </ul>
              </div>
            </div>
            <div class="header-right">
              <a href="/login">
                <button class="button button-md button-line-dark button-radius button-login">
                  Login
                </button>
              </a>
              <button class="button-menu button-open-sidenav">
                <span>Login</span>
              </button>
            </div>
          </div>
        </b-container>
    </header>


  </div>
</template>

<script>
  import {navigationRoutes} from './NavigationRoutes'
  import TopBarLink from './components/Link'
  import LinkGroup from './components/LinkGroup'

  export default {
    name: 'app-topbar',
    components: {
      LinkGroup, TopBarLink,
    },
    props: {
      className: '',
      minimized: {
        type: Boolean,
        required: true,
      },
    },


    computed: {
      computedClass() {
        return 'app-header app-header-1 ' + this.className
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
