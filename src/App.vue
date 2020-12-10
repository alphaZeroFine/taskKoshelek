<template>
  <div id="app">
    <Container />
  </div>
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style lang="sass">
*
  box-sizing: border-box
body
  margin: 0
  padding: 0
</style>
