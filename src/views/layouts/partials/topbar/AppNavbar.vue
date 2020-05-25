<template>
    <div> navbar</div>
</template>


<script>
    import {navigationRoutes} from './NavigationRoutes'
    import Sh4SidebarLink from './components/Sh4TopbarLink'
    import Sh4SidebarLinkGroup from './components/Sh4TopbarLinkGroup'

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
