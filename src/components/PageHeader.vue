<template>
  <div class="Header">
    <h1>Header</h1>
    <p>Props: {{title}}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>

<style scoped>
.Header{
  border: 2px solid black;
}
</style>