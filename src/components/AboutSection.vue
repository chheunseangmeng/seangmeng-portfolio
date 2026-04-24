<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

// Counter animation
let observer = null;

function animateNumber(element, start, end, duration = 1500) {
  let startTimestamp = null;
  const hasPlus = element.getAttribute("data-has-plus") === "true";
  
  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    
    if (hasPlus) {
      element.innerText = currentValue + "+";
    } else {
      element.innerText = currentValue;
    }
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      if (hasPlus) {
        element.innerText = end + "+";
      } else {
        element.innerText = end;
      }
    }
  }
  
  requestAnimationFrame(step);
}

function setupCounters() {
  const counterElements = document.querySelectorAll(".stat-number");
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        animateNumber(el, 0, target, 1500);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  
  counterElements.forEach(el => observer.observe(el));
}

onMounted(() => {
  setupCounters();
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
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
          <strong class="stat-number" :data-target="parseInt(metric.value)" data-has-plus="true">0+</strong>
          <span>{{ text(metric.label) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>