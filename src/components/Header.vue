<template>
  <div class="header">
    <router-link :to="{name:'frontpage'}" title="Forside">
      <img src="/the-news-app.svg" class="logo" alt="NHST logo"/>
    </router-link>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
}
.logo {
  height: 2em;
  padding: 1em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
