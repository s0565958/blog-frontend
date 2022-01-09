<template>
  <h1>Blog</h1>
  <div class="container-fluid">
    <bloglist :posts="this.posts"></bloglist>
    </div>
  <blog-create></blog-create>
</template>

<script>
import Bloglist from '@/components/Bloglist'
import BlogCreate from '@/components/BlogCreate'
export default {
  name: 'Post',
  components: { BlogCreate, Bloglist },
  data () {
    return {
      posts: []
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
