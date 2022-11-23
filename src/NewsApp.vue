<template>
  <Header/>
  <router-view/>
</template>
<script>
import Header from './components/Header.vue'

export default {
  components: {Header},
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}

.logo {
  height: 1em;
  padding-right: 0.3em;
  padding-left: 0.3em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
