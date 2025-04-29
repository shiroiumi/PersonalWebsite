<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="main-site">
    <div class="nav">
      <Navigation />
    </div>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-site {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  background-color: $body-background;
}

.nav {
  display: flex;
  background-color: $paper;
  margin: 16px;
  margin-right: 8px;
  border-radius: 8px;
  max-width: 300px;
  min-width: 300px;
}

.page {
  flex-grow: 1;
  background-color: $paper;
  margin: 16px;
  margin-left: 0;
  border-radius: 8px;
  overflow: hidden;
  max-width: calc(100vw - 300px - 40px);
  max-height: calc(100vh - 32px);
}
</style>
