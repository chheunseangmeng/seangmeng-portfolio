<script setup>
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  gallery: {
    type: Object,
    required: true,
  },
});

const text = (value) => value[props.locale] || value.en;

function repeated(images) {
  return [...images, ...images];
}
</script>

<template>
  <section id="gallery" class="panel section-block gallery-block">
    <SectionTitle
      :eyebrow="text(gallery.heading.eyebrow)"
      :title="text(gallery.heading.title)"
      :subtitle="text(gallery.heading.subtitle)"
    />

    <div class="gallery-marquee" data-reveal="up">
      <div class="gallery-track">
        <figure v-for="(image, index) in repeated(gallery.rows[0])" :key="`${image.alt}-${index}`" class="gallery-card">
          <img :src="image.src" :alt="image.alt" />
        </figure>
      </div>
    </div>

    <div class="gallery-marquee gallery-marquee--reverse" data-reveal="up">
      <div class="gallery-track">
        <figure v-for="(image, index) in repeated(gallery.rows[1])" :key="`${image.alt}-${index}`" class="gallery-card">
          <img :src="image.src" :alt="image.alt" />
        </figure>
      </div>
    </div>
  </section>
</template>
