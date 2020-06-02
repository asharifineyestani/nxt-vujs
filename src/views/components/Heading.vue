<template>
  <header :class="computedClass">
    <h1 v-if="items.h1">{{items.h1 }}</h1>
    <p class="subtitle">{{items.subTitle}}</p>
    <h2>
      <span class="display-block fw-100">{{ items.label }}</span>
      {{items.title}}
    </h2>
    <p>{{ items.description}}</p>
  </header>
</template>


<script>
  export default {
    name: 'Heading',
    props: {
      items: Object,
    },
    computed: {
      computedClass() {
        return 'el-heading' + this.items.position + ' ' + this.items.className;
      }
    },
    data() {
      return {}
    },
  }
</script>


