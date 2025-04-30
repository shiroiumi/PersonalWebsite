<script setup lang="ts">
import { onMounted, ref } from "vue";
const urlPrefix = "/carousel/";
const selectedIndex = ref<number>(0);
const images = ["corvus.jpg", "lookover.JPG", "duck.jpg"];

const isSelected = (image: string) => {
  if (image === images[selectedIndex.value]) return true;
  return false;
};

onMounted(() => {
  setInterval(() => {
    if (selectedIndex.value + 1 === images.length) {
      selectedIndex.value = 0;
    } else {
      selectedIndex.value++;
    }
  }, 5000);
});
</script>

<template>
  <div class="about-me-container">
    <div class="about-me-information">
      <h4 class="subtext about-me-greeting">Salutations! Nice to meet you!</h4>
      <h1 class="about-me-name">
        <span class="about-me-prefix">I'm,</span> Sophie Nguy.
      </h1>
      <p>
        I'm mainly a frontend developer (with a bit of fullstack experience too)
        who loves making digital experiences come to life. I'm a bit of a
        computer nerd at heart — passionate about development, cybersecurity,
        reverse engineering, and anything techy. When I'm not coding, I'm
        probably out photographing wildlife, working on my car, or picking up a
        new hobby just for the fun of it. Thanks for stopping by!
      </p>
      <div>
        <button />
      </div>
    </div>
    <div class="about-me-image-carousel">
      <img
        v-for="image in images"
        :src="urlPrefix + image"
        class="about-me-image"
        :class="isSelected(image) ? 'about-me-image-visible' : ''"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-me-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  max-width: fit-content;
}

.about-me-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  min-width: 450px;
  background-color: $paper;
  flex: 1 1;
}

.about-me-greeting {
  font-weight: 400;
  font-size: 1.5em;
}

.about-me-prefix {
  font-weight: 500;
}

.about-me-image-carousel {
  display: grid;
}

.about-me-image {
  object-fit: none;
  object-position: center;
  height: 100%;
  width: 100%;
  flex-grow: 2;
  opacity: 0;
  grid-column: 1;
  grid-row: 1;
  transition-delay: 0ms;
  transition-property: opacity;
  transition-duration: 1.5s;
  background-color: $shadow;
}

.about-me-image-visible {
  opacity: 1;
}
</style>
