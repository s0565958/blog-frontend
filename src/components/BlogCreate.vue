<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#blog-create-offcanvas" aria-controls="#blog-create-offcanvas">Toggle bottom offcanvas</button>

  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="blog-create-offcanvas" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
      <h5 class="blog-create-offcanvas" id="offcanvasBottomLabel">New Blog</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small">
      <div class="mb-3">
        <label for="titel" class="form-label">Titel</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Another label</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCreate'
}
</script>

<style scoped>

</style>
