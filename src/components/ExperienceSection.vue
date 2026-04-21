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
});

const text = (value) => value[props.locale] || value.en;
</script>

<template>
  <section id="experience" class="panel section-block">
    <SectionTitle
      :eyebrow="text(experience.heading.eyebrow)"
      :title="text(experience.heading.title)"
      :subtitle="text(experience.heading.subtitle)"
    />

    <div class="timeline">
      <article v-for="item in experience.items" :key="item.date" class="timeline-card" data-reveal="right">
        <span class="timeline-card__date">{{ item.date }}</span>
        <h3>{{ text(item.role) }}</h3>
        <p class="timeline-card__company">{{ item.company }}</p>
        <p class="timeline-card__description">{{ text(item.description) }}</p>
      </article>
    </div>
  </section>
</template>
