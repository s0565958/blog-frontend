<template>
    <div class="row row-cols-1 row-cols-md-5 g-5">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card h-100">
          <img :src="getAvatar(post)" class="card-img-top" alt="post.username">
          <div class="card-body">
            <h5 class="card-title">{{post.username}}</h5>
            <p class="card-text">Titel: {{post.title}}</p>
            <p class="card-text">Kategorie: {{post.content}}</p>
            <p class="card-text">Text: {{post.body}}</p>
            <button class="btn btn-danger deleteButton" type="delete" @click="deleteBlog(post)">Delete</button>
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
        return require('../assets/sport.png')
      } else if (post.content === 'Technology') {
        return require('../assets/technology.jpg')
      } else if (post.content === 'Travel') {
        return require('../assets/travel.jpg')
      } else if (post.content === 'Music') {
        return require('../assets/music.png')
      } else {
        return require('../assets/download.jpg')
      }
    },
    deleteBlog (post) {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/posts/' + post.id
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.deleteButton{
  border-radius: 30px;
}
</style>
