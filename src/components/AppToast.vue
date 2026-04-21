<script setup>
defineProps({
  message: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <transition name="toast">
    <div v-if="message" class="app-toast">{{ message }}</div>
  </transition>
</template>
