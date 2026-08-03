<script setup>
import SectionTitle from "../components/SectionTitle.vue";
import ServiceIcon from "../components/ServiceIcon.vue";
import { useReveal } from "../composables/useReveal";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
});

useReveal();

const text = (value) => value[props.locale] || value.en;

// Interactive mouse-tracking: spotlight glow + subtle 3D tilt on each card
function handleCardMove(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  card.style.setProperty("--mx", `${x}px`);
  card.style.setProperty("--my", `${y}px`);

  const rotateY = ((x / rect.width) - 0.5) * 14;
  const rotateX = (0.5 - (y / rect.height)) * 14;
  card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
  card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
}

function handleCardLeave(event) {
  const card = event.currentTarget;
  card.style.setProperty("--rx", "0deg");
  card.style.setProperty("--ry", "0deg");
}

const services = [
  {
    category: { en: "Development", km: "ការអភិវឌ្ឍន៍" },
    icon: "code",
    title: { en: "Website Development", km: "ការអភិវឌ្ឍន៍គេហទំព័រ" },
    description: {
      en: "Responsive, modern websites with clean code, optimized performance, and intuitive user experiences.",
      km: "គេហទំព័រឆ្លើយតប សម័យទំនើប ជាមួយកូដស្អាត ការធ្វើឲ្យប្រើប្រាស់បានល្បឿន និងបទពិសោធន៍អ្នកប្រើប្រាស់ដែលមានគំនិត។",
    },
  },
  {
    category: { en: "Development", km: "ការអភិវឌ្ឍន៍" },
    icon: "api",
    title: { en: "REST API", km: "អឌ្ឍហ្វូបីដហ្វីយូ" },
    description: {
      en: "Building scalable REST APIs with Node.js, Express, and proper documentation for seamless integration.",
      km: "បង្កើតអឌ្ឍហ្វូបីដហ្វីយូដែលអាចរកបន្ថយបាន ជាមួយ Node.js និងការធ្វើឲ្យអាចប្រើប្រាស់បាន។",
    },
  },
  {
    category: { en: "Design", km: "ការរចនា" },
    icon: "palette",
    title: { en: "Graphic Design", km: "ការរចនាក្រដាស" },
    description: {
      en: "Creating visually compelling graphics, logos, and brand identities that communicate your message effectively.",
      km: "បង្កើតក្រដាសដែលឆ្លើយតបពីភាពក្រដាស ឡូហ្គូ និងអតិសអ្នកផលិតផលដែលឆ្លើយតបសាររបស់អ្នកដោយរលូន។",
    },
  },
  {
    category: { en: "Design", km: "ការរចនា" },
    icon: "video",
    title: { en: "Video Editing", km: "ការកែតម្រូវវីដេអូ" },
    description: {
      en: "Professional editing for short-form content, social media clips, and promotional videos with engaging transitions.",
      km: "ការកែតម្រូវមានឥឡូវសម្រាប់ខ្សែរឿងខ្លី ក្រុមសម្លៀកក្រេមសង្គម និងវីដេអូផ្សងសំណួរដោយការផ្លាស់ប្ដូរដែលឆ្លើយតប។",
    },
  },
  {
    category: { en: "Design", km: "ការរចនា" },
    icon: "ui",
    title: { en: "UX/UI Design", km: "ការរចនាអុប្បហ្បតិស៊ី" },
    description: {
      en: "User-centered design with wireframes, prototypes, and polished interfaces that drive engagement.",
      km: "ការរចនាបីអ្នកប្រើប្រាស់ជាមួយការគូរស្រជាល់ ការបង្កើតគំរូ និងអ៊ីនធឺហ្វេសដែលឆ្លើយតប។",
    },
  },
];
</script>

<template>
  <div class="portfolio-shell">
    <div class="ambient ambient--one"></div>
    <div class="ambient ambient--two"></div>

    <main class="page-frame">
      <section class="panel section-block services-section">
        <div class="services-backdrop" aria-hidden="true">
          <span class="glass-orb glass-orb--teal"></span>
          <span class="glass-orb glass-orb--blue"></span>
          <span class="glass-orb glass-orb--violet"></span>
        </div>

        <SectionTitle
          :eyebrow="text({ en: 'Services', km: 'សេវាកម្ម' })"
          :title="text({ en: 'Development and Design', km: 'ការអភិវឌ្ឍន៍ និងរចនា' })"
          :subtitle="text({ en: 'As a freelancer, I provide comprehensive digital solutions tailored to your needs.', km: 'ជាអ្នកឯករាជ្យ ខ្ញុំផ្ដល់ដំណោះស្រាយឌីជីថលគ្រប់ជ្រុងជ្រោយ សម្របតាមតម្រូវការរបស់អ្នក។' })"
          align="left"
        />

        <div class="services-grid">
          <article
            v-for="service in services"
            :key="service.title.en"
            class="service-card"
            data-reveal="up"
            @mousemove="handleCardMove"
            @mouseleave="handleCardLeave"
          >
            <div class="service-card__inner">
              <span class="service-card__spotlight" aria-hidden="true"></span>
              <span class="service-card__glow" aria-hidden="true"></span>
              <div class="service-card__icon">
                <ServiceIcon :name="service.icon" :alt="text(service.title)" />
              </div>
              <div class="service-card__body">
                <span class="service-card__tag">{{ text(service.category) }}</span>
                <h3>{{ text(service.title) }}</h3>
                <p>{{ text(service.description) }}</p>
              </div>
            </div>
          </article>
        </div>

        <div class="back-link" data-reveal="up">
          <a href="/" class="animated-button">
            <span class="text">{{ text({ en: 'Back to Home', km: 'ត្រឡប់ទៅផ្ទះ' }) }}</span>
            <span class="circle"></span>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.services-section {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}

:root[data-theme="light"] .services-section {
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: transparent;
  box-shadow: 0 30px 80px rgba(70, 84, 108, 0.12);
}

.services-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.glass-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: orb-float 18s ease-in-out infinite;
}

.glass-orb--teal {
  top: 6%;
  left: 4%;
  width: 18rem;
  height: 18rem;
  background: radial-gradient(circle, rgba(45, 212, 191, 0.85), transparent 70%);
}

.glass-orb--blue {
  top: 26%;
  right: 2%;
  width: 20rem;
  height: 20rem;
  background: radial-gradient(circle, rgba(56, 132, 255, 0.8), transparent 70%);
  animation-delay: -6s;
}

.glass-orb--violet {
  bottom: 4%;
  left: 16%;
  width: 17rem;
  height: 17rem;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.7), transparent 70%);
  animation-delay: -11s;
}

@keyframes orb-float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(18px, -22px, 0) scale(1.08);
  }
}

.services-section > :not(.services-backdrop) {
  position: relative;
  z-index: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.1rem;
  margin-top: 2rem;
  perspective: 1200px;
}

.service-card {
  border-radius: 1.4rem;
}

.service-card__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.3rem 1.2rem;
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  overflow: hidden;
  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transform-style: preserve-3d;
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 300ms ease,
    background 300ms ease,
    box-shadow 300ms ease;
}

:root[data-theme="light"] .service-card__inner {
  border-color: rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.66);
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.service-card__glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--accent) 60%, transparent),
    transparent 45%
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 0;
}

.service-card__inner::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 42%,
    transparent 72%
  );
  pointer-events: none;
  z-index: 1;
}

.service-card__spotlight {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 300ms ease;
  background: radial-gradient(
    20rem 20rem at var(--mx, 50%) var(--my, 50%),
    color-mix(in srgb, var(--accent) 32%, transparent),
    color-mix(in srgb, var(--accent-strong) 18%, transparent) 32%,
    transparent 60%
  );
}

.service-card__icon,
.service-card__body {
  position: relative;
  z-index: 3;
}

.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 1.2rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  box-shadow: 0 10px 26px color-mix(in srgb, var(--accent) 42%, transparent);
  transform: translateZ(44px);
  margin-bottom: 1.2rem;
}

.service-card__body {
  transform: translateZ(24px);
  flex: 1;
}

.service-card__tag {
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
}

.service-card__body h3 {
  margin: 0 0 0.5rem;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text);
}

.service-card__body p {
  margin: 0;
  color: color-mix(in srgb, var(--text) 70%, transparent);
  font-size: 0.85rem;
  line-height: 1.55;
}

.service-card:hover .service-card__glow,
.service-card:hover .service-card__spotlight {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .service-card__inner {
    transform: none !important;
  }
}

.back-link {
  margin-top: 3.5rem;
  text-align: center;
}

@media (max-width: 720px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }

  .service-group__header {
    gap: 0.8rem;
  }

  .service-group__index {
    width: 2.6rem;
    height: 2.6rem;
    font-size: 1rem;
  }
}
</style>
