<template>
  <div id="app">
    <h2>Without autofill detection</h2>
    <example-form/>
    <h2>With autofill detection</h2>
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

  h2 {
    text-align: center;
  }
}
</style>
