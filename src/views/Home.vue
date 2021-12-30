
<template>
  <div class="home">
    <HelloWorld msg="Willkomen"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
a {
  Background-color: #1F2833;
}
</style>
