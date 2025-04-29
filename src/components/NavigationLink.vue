<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
const props = defineProps<{
  to: string;
  label: string;
}>();

const route = useRoute();

const isSelected = () => {
  return route.path === props.to;
};

let isHovered = ref(false);
</script>

<template>
  <div
    class="nav-link-container"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <hr class="nav-link-selected" v-if="isSelected()" />
    <router-link v-bind:to="props.to" class="nav-link">{{ label }}</router-link>
    <font-awesome-icon
      icon="chevron-right"
      class="nav-link-chevron"
      :class="{ 'nav-link-chevron-animation': isHovered }"
    />
  </div>
</template>

<style scoped lang="scss">
.nav-link {
  font-size: 1.4em;
  color: $text;
  font-weight: 700;
  text-decoration: none;
  margin-right: 8px;
}

.nav-link-container {
  display: flex;
  text-align: right;
  justify-content: right;
  align-items: center;
}

.nav-link-selected {
  width: 25px;
  margin-right: 8px;
  border: 2px solid $primary;
  border-radius: 4px;
}

.nav-link-chevron {
  color: $subtext;
  margin-right: 24px;
}

.nav-link-chevron-animation {
  animation: sway 1.5s infinite;
}

@keyframes sway {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translate(4px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
