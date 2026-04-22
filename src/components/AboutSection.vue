<script setup>
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  about: {
    type: Object,
    required: true,
  },
});

const text = (value) => value[props.locale] || value.en;
</script>

<template>
  <section id="about" class="panel section-block">
    <SectionTitle
      :eyebrow="text(about.heading.eyebrow)"
      :title="text(about.heading.title)"
      :subtitle="text(about.heading.subtitle)"
      align="left"
    />
<div class="about-wrapper">
  <article class="info-card prose-card" data-reveal="left">
    <p>{{ text(about.story) }}</p>
  </article>

  <div class="stats-row" data-reveal="up">
    <div v-for="metric in about.stats" :key="metric.label.en" class="metric-card">
      <strong>{{ metric.value }}</strong>
      <span>{{ text(metric.label) }}</span>
    </div>
  </div>
</div>
  </section>
</template>
