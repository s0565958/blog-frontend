<template>
  <button class="btn btn-success create-button1" data-bs-toggle="offcanvas" data-bs-target="#blog-create-offcanvas" aria-controls="#blog-create-offcanvas">Create new Blog</button>

  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="blog-create-offcanvas" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
      <h5 class="blog-create-offcanvas" id="offcanvasBottomLabel">New Blog</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small">
      <form class="text-start">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="" v-model="username">
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" placeholder="" v-model="title">
      </div>
      <div class="mb-3">
        <label for="kategorie" class="form-label">Kategorie</label>
        <input type="text" class="form-control" id="kategorie" placeholder="" v-model="content">
      </div>
      <div class="mb-3">
        <label for="blog" class="form-label">Blog</label>
        <input type="text" class="form-control" id="blog" placeholder="" v-model="body">
      </div>
      <div class="mt-xl-5">
        <button class="btn btn-success create-button2" type="submit" @click="createBlog">Create</button>
        <button class="btn btn-danger reset-button" type="reset">Reset</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCreate',
  data () {
    return {
      username: '',
      title: '',
      content: '',
      body: ''
    }
  },
  methods: {
    createBlog () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/posts'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        username: this.username,
        title: this.title,
        content: this.content,
        body: this.body
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.create-button1 {
  position: fixed;
  buttom: 20px;
  right: 30px;
  padding : 10px 15px;
  border-radius: 30px;
}
</style>
