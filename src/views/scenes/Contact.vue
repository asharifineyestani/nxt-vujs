<template>
  <div>
    <h1>Contact</h1>
  </div>
</template>

<script>

  import Section1 from '../sections/Section1'
  import Section2 from '../sections/Section2'

  export default {
    name: 'welcome',
    data () {
      return {
        items: [
          {
            imageUrl: 'https://i.imgur.com/GzUR0Wz.png',
            label: 'Advanced layout',
            buttonTo: 'not-found-advanced',
          },
          {
            imageUrl: 'https://i.imgur.com/HttcXPi.png',
            label: 'Simple',
            buttonTo: 'not-found-simple',
          },
          {
            imageUrl: 'https://i.imgur.com/dlcZMiG.png',
            label: 'Custom image',
            buttonTo: 'not-found-custom',
          },
          {
            imageUrl: 'https://i.imgur.com/qcOlDz7.png',
            label: 'Large text heading',
            buttonTo: 'not-found-large-text',
          },
        ],
      }
    },

    components: {
      Section1,
      Section2
    },
  }
</script>
