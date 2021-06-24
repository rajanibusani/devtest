<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {  
  components:{
    Header
  }
}
</script>

<style lang="scss" src="@/assets/scss/style.scss"></style>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>