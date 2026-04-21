<script setup>
import { reactive } from "vue";
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
  contact: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["notify"]);

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const text = (value) => value[props.locale] || value.en;

function submitForm() {
  const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  );

  window.location.href = `mailto:${props.contact.email}?subject=${subject}&body=${body}`;
  emit("notify", text(props.contact.form.successMessage));
}
</script>

<template>
  <section id="contact" class="panel section-block contact-block">
    <SectionTitle
      :eyebrow="text(contact.heading.eyebrow)"
      :title="text(contact.heading.title)"
      :subtitle="text(contact.heading.subtitle)"
      align="left"
    />

    <div class="contact-layout">
      <article class="contact-card" data-reveal="left">
        <h3>{{ text(contact.invite.title) }}</h3>
        <p>{{ text(contact.invite.description) }}</p>

        <div class="contact-list">
          <a class="contact-list__item" :href="`mailto:${contact.email}`">
            <span>EM</span>
            <div>
              <strong>{{ text(contact.labels.email) }}</strong>
              <small>{{ contact.email }}</small>
            </div>
          </a>
          <a class="contact-list__item" :href="`tel:${contact.phoneLink}`">
            <span>PH</span>
            <div>
              <strong>{{ text(contact.labels.phone) }}</strong>
              <small>{{ contact.phone }}</small>
            </div>
          </a>
          <div class="contact-list__item">
            <span>KH</span>
            <div>
              <strong>{{ text(contact.labels.location) }}</strong>
              <small>{{ contact.location }}</small>
            </div>
          </div>
        </div>

        <div class="social-row">
          <a v-for="social in contact.socials" :key="social.label" class="social-chip" :href="social.url" target="_blank" rel="noreferrer">
            {{ social.label }}
          </a>
        </div>
      </article>

      <form class="contact-form" data-reveal="right" @submit.prevent="submitForm">
        <label>
          <span>{{ text(contact.form.nameLabel) }}</span>
          <input v-model="form.name" type="text" required />
        </label>
        <label>
          <span>{{ text(contact.form.emailLabel) }}</span>
          <input v-model="form.email" type="email" required />
        </label>
        <label>
          <span>{{ text(contact.form.messageLabel) }}</span>
          <textarea v-model="form.message" rows="6" required></textarea>
        </label>
        <button class="button button--primary" type="submit">{{ text(contact.form.button) }}</button>
      </form>
    </div>
  </section>
</template>
