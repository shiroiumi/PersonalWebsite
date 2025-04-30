<script setup lang="ts">
import Tag from "./Tag.vue";
const proficientLanguages = ["TypeScript", "JavaScript", "CSS"];
const otherLanguages = ["Python", "C", "C++", "Java", "C#", "SQL"];

const proficientFrontendTech = ["React", "React-Query", "HTML", "Google Maps"];
const otherFrontendTech = [
  "Vue",
  "jQuery",
  "Bootstrap",
  "MobX",
  "Redux",
  "Handlebars",
  "Blazor",
];

const testTech = ["Jest", "React Testing Library", "Enzyme", "Storybook"];

const backendTech = [
  "Nodejs",
  "PostgreSQL",
  "Express.js",
  "Flask",
  "Primsa",
  "Docker",
  "AWS",
  "Azure",
];
</script>

<template>
  <div class="skills-container">
    <h3>Skills & Knowledge</h3>
    <hr />
    <div class="skills-list">
      <div>
        <h4>Programming Languages</h4>
        <div class="skills-content">
          <div class="subtitle">Most Proficient</div>
          <div class="tag-list">
            <Tag v-for="lang in proficientLanguages" :label="lang" />
          </div>
          <div class="subtitle">Others</div>
          <div class="tag-list">
            <Tag
              v-for="lang in otherLanguages"
              :label="lang"
              :secondary="true"
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Frontend Technology</h4>
        <div class="skills-content">
          <div class="subtitle">Most Proficient</div>
          <div class="tag-list">
            <Tag v-for="tech in proficientFrontendTech" :label="tech" />
          </div>
          <div class="subtitle">Others</div>
          <div class="tag-list">
            <Tag
              v-for="tech in otherFrontendTech"
              :label="tech"
              :secondary="true"
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Backend Technology</h4>
        <div class="skills-content">
          <div class="tag-list">
            <Tag v-for="tech in backendTech" :label="tech" />
          </div>
        </div>
      </div>
      <div>
        <h4>Testing Technology</h4>
        <div class="skills-content">
          <div class="tag-list">
            <Tag v-for="tech in testTech" :label="tech" />
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.skills-container {
  hr {
    width: 35px;
    margin-bottom: 16px;
  }
  h4 {
    margin-bottom: 8px;
  }
}

.skills-content {
  margin-left: 16px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.subtitle {
  font-size: 1.1em;
  color: $text;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
