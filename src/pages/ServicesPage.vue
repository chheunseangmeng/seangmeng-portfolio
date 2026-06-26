<script setup>
import SectionTitle from "../components/SectionTitle.vue";

const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
});

const text = (value) => value[props.locale] || value.en;

const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/1820/1820922.png",
    title: { en: "Graphic Design", km: "ការរចនាក្រដាស" },
    description: { 
      en: "Creating visually compelling graphics, logos, and brand identities that communicate your message effectively.", 
      km: "បង្កើតក្រដាសដែលឆ្លើយតបពីភាពក្រដាស ឡូហ្គូ និងអតិសអ្នកផលិតផលដែលឆ្លើយតបសាររបស់អ្នកដោយរលូន។" 
    },
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3529/3529271.png",
    title: { en: "Video Editing", km: "ការកែតម្រូវវីដេអូ" },
    description: { 
      en: "Professional editing for short-form content, social media clips, and promotional videos with engaging transitions.", 
      km: "ការកែតម្រូវមានឥឡូវសម្រាប់ខ្សែរឿងខ្លី ក្រុមសម្លៀកក្រេមសង្គម និងវីដេអូផ្សងសំណួរដោយការផ្លាស់ប្ដូរដែលឆ្លើយតប។" 
    },
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/10097/10097241.png",
    title: { en: "Website Design", km: "ការរចនាគេហទំព័រ" },
    description: { 
      en: "Responsive, modern websites with clean code, optimized performance, and intuitive user experiences.", 
      km: "គេហទំព័រឆ្លើយតប សម័យទំនើប ជាមួយកូដស្អាត ការធ្វើឲ្យប្រើប្រាស់បានល្បឿន និងបទពិសោធន៍អ្នកប្រើប្រាស់ដែលមានគំនិត។" 
    },
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/5253/5253455.png",
    title: { en: "REST API", km: "អឌ្ឍហ្វូបីដហ្វីយូ" },
    description: { 
      en: "Building scalable REST APIs with Node.js, Express, and proper documentation for seamless integration.", 
      km: "បង្កើតអឌ្ឍហ្វូបីដហ្វីយូដែលអាចរកបន្ថយបាន ជាមួយ Node.js និងការធ្វើឲ្យអាចប្រើប្រាស់បាន។" 
    },
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/4285/4285563.png",
    title: { en: "UX/UI Design", km: "ការរចនាអុប្បហ្បតិស៊ី" },
    description: { 
      en: "User-centered design with wireframes, prototypes, and polished interfaces that drive engagement.", 
      km: "ការរចនាបីអ្នកប្រើប្រាស់ជាមួយការគូរស្រជាល់ ការបង្កើតគំរូ និងអ៊ីនធឺហ្វេសដែលឆ្លើយតប។" 
    },
  },
];
</script>

<template>
  <div class="portfolio-shell">
    <div class="ambient ambient--one"></div>
    <div class="ambient ambient--two"></div>

    <main class="page-frame">
      <section class="panel section-block">
        <SectionTitle
          :eyebrow="text({ en: 'Services', km: 'សេវាកម្ម' }).en"
          :title="text({ en: 'What I Offer', km: 'អ្វីដែលខ្ញុំបង្កើត' }).en"
          :subtitle="text({ en: 'As a freelancer, I provide comprehensive digital solutions tailored to your needs.', km: 'ជាអ្នកឯករាជ្យ ខ្ញុំបង្កើតដំណោះស្រាយឌីជីថលដែលគ្រប់គ្រាន់តាមតម្រូវការរបស់អ្នក។' }).en"
          align="left"
        />

        <div class="services-grid">
          <article v-for="service in services" :key="service.title.en" class="service-card" data-reveal="up">
            <div class="service-card__icon">
              <img :src="service.icon" :alt="text(service.title)" />
            </div>
            <h3>{{ text(service.title) }}</h3>
            <p>{{ text(service.description) }}</p>
          </article>
        </div>

        <div class="back-link">
          <a href="/" class="animated-button">
            <span class="text">{{ text({ en: 'Back to Home', km: 'ត្រឡប់ទៅផ្ទះ' }).en }}</span>
            <span class="circle"></span>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 1.4rem;
  border-radius: 1.4rem;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  text-align: center;
  transition: all 300ms ease;
}

.service-card:hover {
  background: rgba(110, 231, 183, 0.08);
  transform: translateY(-5px);
}

:root[data-theme="light"] .service-card:hover {
  background: rgba(40, 209, 201, 0.185);
}

.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-strong), var(--accent));
  margin-bottom: 1rem;
}

.service-card__icon img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}

.service-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
  color: var(--accent);
}

.service-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.back-link {
  margin-top: 3rem;
  text-align: center;
}

@media (max-width: 720px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .service-card {
    padding: 1.4rem;
  }
}
</style>