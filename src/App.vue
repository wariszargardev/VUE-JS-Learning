<template>
  <h1>App Component</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'BookListingView'}">Books</router-link>
  </nav>

  <button @click="home">Home</button>
  <button @click="gotoBook">Goto Book 1</button>
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>
  <router-view/>
</template>

<script>

import router from "@/router";

export default {
  name: 'App',
  methods:{
    back(){
      router.back()
    },
    forward(){
      router.forward()
    },
    home(){
      this.$router.push({
        name: 'home'
      })
    },
    gotoBook(){
      this.$router.push({
        name: "BookDetailView",
        params :{id: 1}
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
