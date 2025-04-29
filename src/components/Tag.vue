<script setup lang="ts">
const props = defineProps<{
  label: string;
  secondary?: boolean;
}>();
</script>

<template>
  <span :class="secondary ? 'secondary-tag' : ''" class="tag">{{
    props.label
  }}</span>
</template>

<style lang="scss" scoped>
.tag {
  background-color: $primary;
  border-radius: 4px;
  padding: 4px 6px;
  color: white;
}

.secondary-tag {
  background-color: $secondary;
}
</style>
