<template>
    <div class="row row-cols-1 row-cols-md-5 g-5">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card h-100">
          <img :src="getAvatar(post)" class="card-img-top" alt="post.username">
          <div class="card-body">
            <h5 class="card-title">{{post.username}}</h5>
            <p class="card-text">Titel:{{post.title}} / Kategorie:{{post.content}} / Blog:{{post.body}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Bloglist',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    getAvatar (post) {
      if (post.content === 'Sport') {
        return require('../assets/download.png')
      } else if (post.content === 'Technology') {
        return require('../assets/download.jpg')
      }
    }
  }
}

</script>

<style scoped>

</style>
