<script setup>
const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  hero: {
    type: Object,
    required: true,
  },
});

const text = (value) => value[props.locale] || value.en;
</script>

<template>
  <section id="home" class="hero-panel panel">
    <div class="hero-panel__copy" data-reveal="left">
      <span class="eyebrow">{{ text(hero.eyebrow) }}</span>
      <h1 class="hero-title">{{ text(hero.name) }}</h1>
      <p class="hero-role">{{ text(hero.role) }}</p>
      <p class="hero-summary">{{ text(hero.description) }}</p>

      <div class="hero-actions">
        <a class="button button--primary" href="#contact">{{ text(hero.primaryCta) }}</a>
        <a class="button button--ghost" :href="hero.cvUrl" target="_blank" rel="noreferrer">
          {{ text(hero.secondaryCta) }}
        </a>
      </div>
    </div>

    <div class="hero-panel__visual" data-reveal="right">
      <div class="hero-orbit">
        <span
          v-for="badge in hero.floatingSkills"
          :key="badge.label"
          class="hero-orbit__badge"
          :style="badge.style"
        >
          <img :src="badge.icon" :alt="badge.label" />
          <span>{{ badge.label }}</span>
        </span>

        <div class="portrait-card">
          <img :src="hero.image" :alt="text(hero.name)" class="portrait-card__image" />
          <div class="portrait-card__meta">
            <span>{{ text(hero.cardLabel) }}</span>
            <strong>{{ hero.cardValue }}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
