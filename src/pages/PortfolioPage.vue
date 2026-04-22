<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import AppHeader from "../components/AppHeader.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import GallerySection from "../components/GallerySection.vue";
import ContactSection from "../components/ContactSection.vue";
import AppToast from "../components/AppToast.vue";
import { portfolioData } from "../data/portfolio";
import { useReveal } from "../composables/useReveal";

const locale = ref(localStorage.getItem("portfolio-locale") || "en");
const theme = ref("dark"); // Dark mode by default
const isMenuOpen = ref(false);
const activeSection = ref("home");
const toastMessage = ref("");

let sectionObserver;
let toastTimer;

useReveal();

const navItems = computed(() => portfolioData.nav);
const isDark = computed(() => theme.value === "dark");

function toggleTheme() {
  theme.value = isDark.value ? "light" : "dark";
}

function toggleLocale() {
  locale.value = locale.value === "en" ? "km" : "en";
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function notify(message) {
  toastMessage.value = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastMessage.value = "";
  }, 2800);
}

function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-15% 0px -35% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

watch(theme, (value) => {
  document.documentElement.dataset.theme = value;
  localStorage.setItem("portfolio-theme", value);
});

watch(locale, (value) => {
  document.documentElement.lang = value;
  localStorage.setItem("portfolio-locale", value);
});

onMounted(() => {
  document.documentElement.dataset.theme = theme.value;
  document.documentElement.lang = locale.value;
  setupScrollSpy();
});

onBeforeUnmount(() => {
  if (sectionObserver) {
    sectionObserver.disconnect();
  }
  clearTimeout(toastTimer);
});
</script>

<template>
  <div class="portfolio-shell">
    <div class="ambient ambient--one"></div>
    <div class="ambient ambient--two"></div>

    <AppHeader
      :nav-items="navItems"
      :active-section="activeSection"
      :locale="locale"
      :is-dark="isDark"
      :is-menu-open="isMenuOpen"
      @toggle-theme="toggleTheme"
      @toggle-locale="toggleLocale"
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
    />

    <main class="page-frame" @click="closeMenu">
      <HeroSection :locale="locale" :hero="portfolioData.hero" />
      <AboutSection :locale="locale" :about="portfolioData.about" />
      <SkillsSection :locale="locale" :skills="portfolioData.skills" />
      <ExperienceSection :locale="locale" :experience="portfolioData.experience" />
      <ProjectsSection :locale="locale" :projects="portfolioData.projects" @notify="notify" />
      <GallerySection :locale="locale" :gallery="portfolioData.gallery" />
      <ContactSection :locale="locale" :contact="portfolioData.contact" @notify="notify" />
    </main>
    
    <AppToast :message="toastMessage" />
  </div>
</template>
