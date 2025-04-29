<script setup lang="ts">
import { ResumeInsert } from "../types/resume";
import ResumeExperience from "./ResumeExperience.vue";

const props = defineProps<{
  title: string;
  info: ResumeInsert[];
}>();
</script>

<template>
  <div>
    <div class="resume-section-title">
      <h3>{{ props.title }}</h3>
      <hr />
    </div>
    <div class="resume-section-content">
      <ResumeExperience
        v-for="resumeInsert in props.info"
        :info="resumeInsert"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-section-title {
  hr {
    width: 45px;
    margin-bottom: 16px;
    margin-top: 4px;
  }
}

.resume-section-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
