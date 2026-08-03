<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
});

const definitions = {
  code: "fa-globe",
  api: "fa-code",
  palette: "fa-pen-nib",
  video: "fa-clapperboard",
  ui: "fa-figma",
};

const iconClass = definitions[props.name] || "";
const isBrand = props.name === "ui";
</script>

<template>
  <i
    v-if="iconClass"
    :class="[isBrand ? 'fa-brands' : 'fa-solid', iconClass]"
    :aria-label="alt || name"
  ></i>
</template>

<style scoped>
i {
  font-size: 2.1rem;
  color: #ffffff;
}
</style>
