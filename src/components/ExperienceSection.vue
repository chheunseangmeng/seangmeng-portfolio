<script setup>
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  experience: {
    type: Object,
    required: true,
  },
  projects: {
    type: Object,
    default: null,
  },
});

const text = (value) => value[props.locale] || value.en;

function handleProjectAction(project) {
  if (project.url) {
    window.open(project.url, "_blank", "noopener,noreferrer");
  }
}
</script>

<template>
  <section id="experience" class="panel section-block">
    <SectionTitle
      :title="text(experience.heading.title)"
      :subtitle="text(experience.heading.subtitle)"
    />

    <div class="timeline">
      <article 
        v-for="(item, index) in experience.items" 
        :key="item.date" 
        class="timeline-card" 
        :data-reveal="index % 2 === 0 ? 'right' : 'left'"
      >
        <span class="timeline-card__date">{{ item.date }}</span>
        <h3>{{ text(item.role) }}</h3>
        <p class="timeline-card__company">{{ item.company }}</p>
        <p class="timeline-card__description">{{ text(item.description) }}</p>
      </article>
    </div>

    <div v-if="projects && projects.items" class="projects-merge">
      <h3 class="projects-merge__title" data-reveal="up">{{ text(projects.heading.title) }}</h3>
      <p class="projects-merge__subtitle" data-reveal="up">{{ text(projects.heading.subtitle) }}</p>

      <div class="project-grid">
        <article v-for="project in projects.items" :key="project.title.en" class="project-card" data-reveal="up">
          <div class="project-card__media">
            <img :src="project.image" :alt="text(project.title)" />
            <button 
              class="animated-button project-card__action" 
              type="button" 
              @click="handleProjectAction(project)"
              v-if="project.url"
            >
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
    </div>
  </section>
</template>

<style scoped>
.projects-merge {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--line);
}

.projects-merge__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  color: var(--accent);
}

.projects-merge__subtitle {
  margin: 0 0 1.5rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.45rem;
  height: 100%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
}

.project-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
}

.project-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 380ms ease;
}

.project-card:hover .project-card__media img {
  transform: scale(1.06);
}

.project-card__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.project-card:hover .project-card__media::after {
  opacity: 1;
}

.project-card__action {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: auto;
  min-width: 140px;
  background: rgba(255, 255, 255, 0.427);
  color: #000;
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-card:hover .project-card__action {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: var(--accent);
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
  opacity: 0;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: var(--accent);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #ffffff;
  border-radius: 12px;
}

.animated-button:hover .text {
  transform: scale(1.05);
}

.animated-button:hover svg {
  fill: #ffffff;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px var(--accent);
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}

.animated-button:hover .arr-1 {
  right: -25%;
  opacity: 0;
}

.animated-button:hover .arr-2 {
  left: 16px;
  opacity: 1;
}

.project-card .animated-button {
  padding: 0.5rem 1rem !important;
  font-size: 0.8rem !important;
  gap: 6px !important;
}

.project-card .animated-button svg {
  width: 18px !important;
}

.project-card .animated-button .text {
  transform: translateX(-6px);
  font-size: 0.8rem;
}

.project-card .animated-button:hover .text {
  transform: translateX(8px);
}

.project-card__body {
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card__body h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.project-card__body p {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  flex: 1;
  color: var(--muted);
  line-height: 1.6;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  font-size: 0.7rem;
}

@media (max-width: 720px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-card__action {
    min-width: 100px;
    padding: 0.4rem 0.8rem !important;
    font-size: 0.7rem !important;
  }

  .project-card__action .text {
    font-size: 0.7rem !important;
  }

  .project-card__action svg {
    width: 14px !important;
  }
}
</style>