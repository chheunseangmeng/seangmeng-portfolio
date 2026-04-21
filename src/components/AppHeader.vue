<script setup>
const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
  activeSection: {
    type: String,
    default: "home",
  },
  locale: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["toggle-theme", "toggle-locale", "toggle-menu", "close-menu"]);

const label = (item) => item[props.locale] || item.en;
</script>

<template>
  <header class="site-header">
    <a class="brand-mark" href="#home" @click="$emit('close-menu')">Seangmeng</a>

    <nav class="site-nav" :class="{ 'is-open': isMenuOpen }">
      <a
        v-for="item in navItems"
        :key="item.id"
        class="site-nav__link"
        :class="{ 'is-active': activeSection === item.id }"
        :href="`#${item.id}`"
        @click="$emit('close-menu')"
      >
        {{ label(item) }}
      </a>
    </nav>

    <div class="site-header__actions">
      <button class="toggle-chip" type="button" @click="$emit('toggle-locale')">
        {{ locale === "en" ? "KM" : "EN" }}
      </button>
      <button class="toggle-chip" type="button" @click="$emit('toggle-theme')">
        {{ isDark ? "Light" : "Dark" }}
      </button>
      <button
        class="menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="$emit('toggle-menu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>
