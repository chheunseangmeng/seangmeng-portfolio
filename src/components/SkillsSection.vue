<script setup>
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  skills: {
    type: Object,
    required: true,
  },
});

const text = (value) => value[props.locale] || value.en;
</script>

<template>
  <section id="skills" class="panel section-block">
    <SectionTitle
      :eyebrow="text(skills.heading.eyebrow)"
      :title="text(skills.heading.title)"
      :subtitle="text(skills.heading.subtitle)"
    />

    <div class="skill-groups">
      <div v-for="group in skills.groups" :key="group.title.en" class="group">
        <h3 class="group-title" data-reveal="right">{{ text(group.title) }}</h3>
        <div class="skill-grid">
          <div
            v-for="skill in group.items"
            :key="skill.name"
            class="skill-card"
            data-reveal="left"
          >
            <div class="skill-card__header">
              <div class="skill-card__icons">
                <img
                  v-for="icon in skill.icons"
                  :key="icon"
                  :src="icon"
                  :alt="skill.name"
                />
              </div>
            </div>
            <h4>{{ skill.name }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="tool-cloud" data-reveal="up">
      <span v-for="tool in skills.tools" :key="tool" class="tool-pill">{{
        tool
      }}</span>
    </div>
  </section>
</template>
