<template>
  <h1>Book Listing</h1>
  <div>
    <h1 v-for="book in books" :key="book.id">
      {{ book.title }}
      |
      <router-link :to="{name: 'BookDetailView', params: {id: book.id}}" >
        With Params
      </router-link>
      |
      <router-link :to="{name: 'BookDetailPropsView', params: {id: book.id}}" >
        With Props
      </router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: "BookListingView",
  data(){
    return{
      books: [
        {id:1, title: "Book1", description:"Book 1"},
        {id:2, title: "Book2", description:"Book 2"},
        {id:3, title: "Book3", description:"Book 3"},
        {id:4, title: "Book4", description:"Book 4"},
        {id:5, title: "Book5", description:"Book 5"},
      ]
    }
  }
}
</script>

<style scoped>

</style>