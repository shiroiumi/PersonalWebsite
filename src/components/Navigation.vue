<script setup lang="ts">
import NavigationLink from "./NavigationLink.vue";

const navToGithub = () => {
  window.location.href = "http://github.com/shiroiumi";
};
</script>

<template>
  <div class="nav-container">
    <div class="nav-profile">
      <img class="nav-profile-icon" src="../assets/profile.jpg" />
      <div class="nav-profile-name">
        <h3>Sophie Nguy</h3>
      </div>
      <hr />
      <div>
        <p class="nav-profile-title">Frontend Developer</p>
      </div>
      <div class="nav-socials">
        <img
          class="nav-socials-icon"
          src="../assets/github-mark.svg"
          v-on:click="navToGithub()"
        />
      </div>
    </div>
    <div class="nav-links">
      <NavigationLink to="/" label="About Me" />
      <NavigationLink to="/resume" label="Resume" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.nav-profile {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-profile-icon {
  width: 150px;
  height: 150px;
  margin-bottom: 8px;
  border-radius: 150px;
  border: 7px solid $primary;
}

.nav-profile-name {
  margin-bottom: 8px;
}

.nav-profile-title {
  margin: 0px;
  margin-top: 8px;
  color: $subtext;
}

.nav-socials {
  margin-top: 8px;
}

.nav-socials-icon {
  filter: invert(40%) sepia(20%) saturate(0%) hue-rotate(148deg) brightness(98%)
    contrast(86%);
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:hover {
    filter: brightness(0) saturate(100%) invert(26%) sepia(0%) saturate(1498%)
      hue-rotate(175deg) brightness(95%) contrast(82%);
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-grow: 1;
  width: calc(100% - 8px);
  margin: 8px;
  gap: 16px;
}
</style>
