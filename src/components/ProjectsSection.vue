<script setup>
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  projects: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["notify"]);

const text = (value) => value[props.locale] || value.en;

function handleProjectAction(project) {
  if (project.url) {
    window.open(project.url, "_blank", "noopener,noreferrer");
    return;
  }

  emit("notify", text(props.projects.unavailableMessage));
}
</script>

<template>
  <section id="projects" class="panel section-block">
    <SectionTitle
      :eyebrow="text(projects.heading.eyebrow)"
      :title="text(projects.heading.title)"
      :subtitle="text(projects.heading.subtitle)"
    />

    <div class="project-grid">
      <article v-for="project in projects.items" :key="project.title.en" class="project-card" data-reveal="up">
        <div class="project-card__media">
          <img :src="project.image" :alt="text(project.title)" />
        <button class="animated-button project-card__action" type="button" @click="handleProjectAction(project)">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
  <span class="text">{{ text(project.cta) }}</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
</button>
        </div>

        <div class="project-card__body">
          <h3>{{ text(project.title) }}</h3>
          <p>{{ text(project.description) }}</p>
          <div class="tag-row">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
