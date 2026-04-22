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
        <a class="animated-button" href="#contact">
          <svg
            viewBox="0 0 24 24"
            class="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span class="text">{{ text(hero.primaryCta) }}</span>
          <span class="circle"></span>
          <svg
            viewBox="0 0 24 24"
            class="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </a>
        <a
          class="animated-button"
          :href="hero.cvUrl"
          target="_blank"
          rel="noreferrer"
        >
          <span class="text">{{ text(hero.secondaryCta) }}</span>
          <span class="circle"></span>
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
          <img
            :src="hero.image"
            :alt="text(hero.name)"
            class="portrait-card__image"
          />
          <div class="portrait-card__meta">
            <span>{{ text(hero.cardLabel) }}</span>
            <strong>{{ hero.cardValue }}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
