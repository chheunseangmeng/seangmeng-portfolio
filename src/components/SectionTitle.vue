<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "center",
  },
});
</script>

<template>
  <header class="section-heading" :class="`is-${align}`" data-reveal="up">
    <span v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</span>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="subtitle" class="section-heading__subtitle">{{ subtitle }}</p>
  </header>
</template>
