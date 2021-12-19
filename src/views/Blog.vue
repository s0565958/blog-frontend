<template>
  <h1>blog</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-5 g-5">
     <div class="col" v-for="post in posts" :key="post.id">
      <div class="card h-100">
        <img :src="getAvatar(post)" class="card-img-top" alt="post.username">
        <div class="card-body">
          <h5 class="card-title">{{post.username}}</h5>
          <p class="card-text">Titel:{{post.title}} / Kategorie:{{post.content}}</p>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      posts: []
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
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/posts', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(post => {
        this.posts.push(post)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
