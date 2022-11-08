<template>
  npm run serve
  <PageHeader title="APP Component" :description="description"/>
  <h1>{{ message }}</h1>
  <input type="text" ref="name"/>
  <button @click="hitMe">Hit Me!</button>
  <PageFooter>
    <p>Coming from slot </p>
    <p>Author: Waris</p>
    <p><a href="mailto:waris@gmail.com">waris@gmail.com</a></p>

    <template v-slot:navigation>
      <a href="#">Login</a>
      <a href="#">Signin</a>
    </template>
  </PageFooter>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter
  },
  data() {
    return {
      message: "My First VUE App",
      description: "Props description"
    }
  },
  methods: {
    hitMe() {
      this.$refs.name.focus()
      this.$refs.name.classList.add("active")
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
a{
  margin: 10px;
  text-decoration: none;
  border: 3px solid lime; 
}
</style>
