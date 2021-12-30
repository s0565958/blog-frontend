<template>
  <h1>Blog</h1>
  <div class="container-fluid">
    <bloglist :posts="this.posts"></bloglist>
    </div>
</template>

<script>
import Bloglist from '@/components/Bloglist'
export default {
  name: 'Post',
  components: { Bloglist },
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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/posts'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(post => {
        this.posts.push(post)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
