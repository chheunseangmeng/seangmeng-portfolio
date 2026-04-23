<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch, nextTick } from "vue";
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
const theme = ref("dark");
const isMenuOpen = ref(false);
const activeSection = ref("home");
const toastMessage = ref("");
const isClick = ref(false);

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
  nextTick(() => {
    const sections = document.querySelectorAll("section[id]");
    
    console.log("Sections found:", sections.length);
    sections.forEach(section => {
      console.log("Section ID:", section.id);
    });

    if (sectionObserver) {
      sectionObserver.disconnect();
    }

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log("Active section:", sectionId);
            activeSection.value = sectionId;
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -30% 0px",
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  });
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Show/hide button based on scroll position
function handleScroll() {
  if (window.scrollY > 300) {
    isClick.value = true;
  } else {
    isClick.value = false;
  }
}

// Handle header scroll
function handleHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

// Starry night functions
function createStars() {
  if (document.documentElement.dataset.theme !== "dark") return;
  
  const existingStars = document.querySelector(".stars");
  if (existingStars) existingStars.remove();
  
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars";
  document.body.appendChild(starsContainer);
  
  for (let i = 0; i < 250; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
  
  for (let i = 0; i < 8; i++) {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.top = `${Math.random() * 60}%`;
    shootingStar.style.left = `${Math.random() * 80 + 10}%`;
    shootingStar.style.animationDelay = `${Math.random() * 20}s`;
    shootingStar.style.animationDuration = `${Math.random() * 5 + 6}s`;
    document.body.appendChild(shootingStar);
  }
}

function removeStarsAndMoon() {
  const stars = document.querySelector(".stars");
  const shootingStars = document.querySelectorAll(".shooting-star");
  if (stars) stars.remove();
  shootingStars.forEach(star => star.remove());
}

watch(theme, (value) => {
  document.documentElement.dataset.theme = value;
  localStorage.setItem("portfolio-theme", value);
  
  if (value === "dark") {
    setTimeout(() => {
      createStars();
    }, 100);
  } else {
    removeStarsAndMoon();
  }
});

watch(locale, (value) => {
  document.documentElement.lang = value;
  localStorage.setItem("portfolio-locale", value);
});

onMounted(() => {
  document.documentElement.dataset.theme = theme.value;
  document.documentElement.lang = locale.value;
  setupScrollSpy();
  
  if (theme.value === "dark") {
    createStars();
  }
  
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleHeaderScroll);
});

onBeforeUnmount(() => {
  if (sectionObserver) {
    sectionObserver.disconnect();
  }
  clearTimeout(toastTimer);
  removeStarsAndMoon();
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("scroll", handleHeaderScroll);
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

    <button v-if="isClick" class="scroll-to-top" @click="scrollToTop">
      <i class="fa-solid fa-angles-up"></i>
    </button>
  </div>
</template>