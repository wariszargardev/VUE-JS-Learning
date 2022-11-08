<template>
  <h1>Page Footer</h1>
  <slot></slot>

  <hr />
  <p>Navigation slot</p>
  <slot name="navigation"></slot>

</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>

</style>