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

    <div class="about-grid">
      <article class="info-card prose-card" data-reveal="left">
        <p>{{ text(about.story) }}</p>

        <dl class="detail-list">
          <div v-for="item in about.details" :key="item.label.en" class="detail-list__item">
            <dt>{{ text(item.label) }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </article>

      <div class="metrics-grid">
        <article v-for="metric in about.stats" :key="metric.label.en" class="metric-card" data-reveal="up">
          <strong>{{ metric.value }}</strong>
          <span>{{ text(metric.label) }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
