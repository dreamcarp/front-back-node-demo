<template>
  <div id="app">
    <div class="black_line"></div>
    <div id="main">
      <sidebar/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import sidebar from './components/Sidebar.vue'
  export default {
    name: 'app',
    components: {
      sidebar
    }
  }
</script>

<style>
@import '../src/assets/style/common.css';
@import '../src/assets/style/global.css'
</style>
