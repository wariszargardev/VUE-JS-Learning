<template>
  <h1>Book Details</h1>
  <h1>Params  {{ $route.params.id }}</h1>
  <h1>Params using data  {{ id }}</h1>
</template>

<script>
export default {
  name: "BookDetailView",
  data(){
    return{
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>