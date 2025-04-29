<script setup lang="ts">
import { defineProps } from "vue";
import { ResumeInsert } from "../types/resume";
import Tag from "./Tag.vue";

const props = defineProps<{
  info: ResumeInsert;
}>();
</script>

<template>
  <div>
    <div class="resume-experience-header-box">
      <span class="resume-date">{{ props.info.year }}</span>
      <span class="resume-title">{{ props.info.location }}</span>
    </div>
    <div class="resume-experience-content">
      <h4>
        {{ props.info.title }}
      </h4>
      <dl class="resume-description-list">
        <li v-for="description in props.info.description">
          {{ description }}
        </li>
      </dl>
      <div>
        <h5 class="resume-tech-header">Tech List</h5>
        <div v-if="props.info.techStack.length > 0" class="resume-tag-list">
          <Tag v-for="tech in props.info.techStack" :label="tech" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-experience-header-box {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
}

.resume-date {
  border-radius: 4px;
  border: 1px solid $subtext;
  padding: 6px;
  font-weight: 700;
  color: $subtext;
}

.resume-title {
  font-size: 1.1em;
  color: $text;
  font-weight: 600;
}

.resume-experience-content {
  margin-left: 64px;
}

.resume-description-list {
  margin-left: 16px;
}

.resume-tag-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.resume-tech-header {
  margin-bottom: 4px;
}
</style>
