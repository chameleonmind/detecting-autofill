<template>
  <div id="app">
    <example-form/>
    <example-form check-autofill/>
  </div>
</template>

<script>

import ExampleForm from '@/components/exampleForm'

export default {
  name: 'App',
  components: { ExampleForm }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
