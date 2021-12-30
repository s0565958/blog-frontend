<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/1234.jpg">
    <router-link class="nav-link" href="#" to="/blog">andere Blogs entdecken und neuen erstellen</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  margin-middle: -0.1rem;
  padding: -0.5rem;
  color: #42b983;
  Background-color: #0B0C10;
}
</style>
