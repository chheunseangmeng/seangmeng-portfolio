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
  isSending: false,
});

const text = (value) => value[props.locale] || value.en;

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = "7559810524:AAHEU3Lu-ynrJ7it5WX7oh2hrOwE_dZjzgE";
const TELEGRAM_CHAT_ID = "-1002887359185";

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function submitForm() {
  // Validation
  if (!form.name || !form.email || !form.message) {
    emit("notify", "Please fill in all fields");
    return;
  }

  if (!validateEmail(form.email)) {
    emit("notify", "Please enter a valid email address");
    return;
  }

  form.isSending = true;

  const message = `
📥 *New Portfolio Contact* 📥

👤 *Name:* ${form.name}
📧 *Email:* ${form.email}
💬 *Message:* 
${form.message}

📅 *Sent:* ${new Date().toLocaleString()}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (response.ok) {
      emit("notify", text(props.contact.form.successMessage));
      // Reset form
      form.name = "";
      form.email = "";
      form.message = "";
    } else {
      emit("notify", "Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    emit("notify", "Network error. Please try again.");
  } finally {
    form.isSending = false;
  }
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
            <span>
              <img 
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png" 
                alt="Email"
                width="20"
                height="20"
              />
            </span>
            <div>
              <strong>{{ text(contact.labels.email) }}</strong>
              <small>{{ contact.email }}</small>
            </div>
          </a>

          <div class="contact-list__item">
            <span>
              <img 
                src="https://cdn-icons-png.flaticon.com/128/684/684908.png" 
                alt="Location"
                width="20"
                height="20"
              />
            </span>
            <div>
              <strong>{{ text(contact.labels.location) }}</strong>
              <small>{{ contact.location }}</small>
            </div>
          </div>
        </div>

        <div class="social-row">
          <a v-for="social in contact.socials" :key="social.label" class="social-chip" :href="social.url" target="_blank" rel="noreferrer">
            <img 
              v-if="social.label === 'GitHub'" 
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png" 
              :alt="social.label"
              width="18"
              height="18"
            />
            <img 
              v-else-if="social.label === 'LinkedIn'" 
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png" 
              :alt="social.label"
              width="18"
              height="18"
            />
            <img 
              v-else-if="social.label === 'Telegram'" 
              src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" 
              :alt="social.label"
              width="18"
              height="18"
            />
            <span v-else>{{ social.label }}</span>
          </a>
        </div>
      </article>

      <form
        class="contact-form"
        data-reveal="right"
        @submit.prevent="submitForm"
      >
        <label>
          <span>{{ text(contact.form.nameLabel) }}</span>
          <input
            v-model="form.name"
            type="text"
            required
            :disabled="form.isSending"
            placeholder="Your name"
          />
        </label>
        <label>
          <span>{{ text(contact.form.emailLabel) }}</span>
          <input
            v-model="form.email"
            type="email"
            required
            :disabled="form.isSending"
            placeholder="your@email.com"
          />
        </label>
        <label>
          <span>{{ text(contact.form.messageLabel) }}</span>
          <textarea
            v-model="form.message"
            rows="6"
            required
            :disabled="form.isSending"
            placeholder="Your message..."
          ></textarea>
        </label>
        <button
          class="animated-button"
          type="submit"
          :disabled="form.isSending"
        >
          <span class="text">{{
            form.isSending ? "Sending..." : text(contact.form.button)
          }} <i class="fa-brands fa-telegram"></i> </span> 
          <span class="circle"></span> 
        </button>
      </form>
    </div>
  </section>
</template>