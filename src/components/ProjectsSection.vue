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
          <button class="button button--primary project-card__action" type="button" @click="handleProjectAction(project)">
            {{ text(project.cta) }}
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
