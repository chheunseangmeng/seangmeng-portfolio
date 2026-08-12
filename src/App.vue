<script setup>
import { useStars } from "./composables/useStars";
import PortfolioPage from "./pages/PortfolioPage.vue";

useStars();
</script>

<template>
  <PortfolioPage />
</template>
