<script setup lang="ts">
import ResumeSection from "../components/ResumeSection.vue";
import ResumeSkills from "../components/ResumeSkills.vue";
import resumejson from "../data/resume.json";
import { ResumeInsert } from "../types/resume";

const experienceList: ResumeInsert[] = resumejson.experience;
const educationList: ResumeInsert[] = resumejson.education;
const projectList: ResumeInsert[] = resumejson.project;
</script>

<template>
  <div class="resume-container">
    <div class="resume-title-box">
      <h1>Resume</h1>
      <hr />
      <div class="resume-title-subtext">
        3+ Years of Profressional Development
      </div>
    </div>

    <div class="resume-main-container">
      <div class="resume-content">
        <ResumeSection title="Education" :info="educationList" />
        <ResumeSection title="Experience" :info="experienceList" />
        <ResumeSection title="Projects" :info="projectList" />
      </div>
      <div class="resume-skills">
        <ResumeSkills />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-container {
  overflow-y: scroll;
  height: calc(100% - 64px);
  padding: 32px;
}

.resume-skills {
  flex: 1 1;
}

.resume-main-container {
  display: flex;
}

.resume-title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  hr {
    width: 100px;
  }
}

.resume-title-subtext {
  color: $subtext;
}

.resume-content {
  display: flex;
  flex: 2 1;
  flex-direction: column;
  gap: 48px;
  margin-right: 32px;
}
</style>
