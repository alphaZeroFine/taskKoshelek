<template>
  <div class="container">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Container',
  components: {
    Header
  }
}
</script>

<style lang="sass">
.container
  align-items: center
  display: flex
  flex-direction: column
  padding: 0 30px
</style>
