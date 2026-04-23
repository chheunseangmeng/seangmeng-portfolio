<script setup>
import { ref, onMounted } from "vue";

// Use public folder path
const backgroundMusic = "/audio/champey.mp3";

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

const emit = defineEmits(["toggle-theme", "toggle-locale", "toggle-menu", "close-menu"]);

const label = (item) => item[props.locale] || item.en;

// Music/Audio state
const isMuted = ref(false); // false = playing, true = paused
let audio = null;

function toggleMusic() {
  if (!audio) return;
  
  if (isMuted.value) {
    // Unmute = Resume playing
    audio.play()
      .then(() => {
        isMuted.value = false;
        console.log('Music resumed');
      })
      .catch(error => {
        console.log("Failed to resume:", error);
      });
  } else {
    // Mute = Pause
    audio.pause();
    isMuted.value = true;
    console.log('Music paused');
  }
}

// Auto-play music when page loads
onMounted(() => {
  // Create audio element
  audio = new Audio(backgroundMusic);
  audio.loop = true;
  audio.volume = 0.5;
  
  // Try to play automatically
  audio.play()
    .then(() => {
      console.log("Auto-play started successfully");
      isMuted.value = false;
    })
    .catch(error => {
      console.log("Auto-play blocked by browser:", error);
      isMuted.value = true;
      
      // Try to play on first user click anywhere
      const startMusic = () => {
        audio.play()
          .then(() => {
            console.log("Music started after user click");
            isMuted.value = false;
            document.removeEventListener('click', startMusic);
            document.removeEventListener('touchstart', startMusic);
          })
          .catch(e => console.log('Still blocked:', e));
      };
      document.addEventListener('click', startMusic);
      document.addEventListener('touchstart', startMusic);
    });
});
</script>

<template>
  <header class="site-header">
    <a class="brand-mark" href="#home" @click="$emit('close-menu')"></a>

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
      <!-- Language Toggle with Flag Icons -->
      <button class="toggle-chip flag-button" type="button" @click="$emit('toggle-locale')">
        <img 
          v-if="locale === 'en'" 
          src="https://flagicons.lipis.dev/flags/4x3/kh.svg" 
          alt="Khmer"
          width="20"
          height="15"
        />
        <img 
          v-else 
          src="https://flagicons.lipis.dev/flags/4x3/us.svg" 
          alt="English"
          width="20"
          height="15"
        />
      </button>
      

            <input type="checkbox" id="checkboxInput" :checked="isMuted" @change="toggleMusic">
          <label for="checkboxInput" class="toggleSwitch">
            <div class="speaker">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
                <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" stroke="currentColor" stroke-width="5" stroke-linejoin="round" fill="currentColor"></path>
                <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"></path>
              </svg>
            </div>
            <div class="mute-speaker">
              <svg version="1.0" viewBox="0 0 75 75" stroke="currentColor" stroke-width="5">
                <path d="m39,14-17,15H6V48H22l17,15z" fill="currentColor" stroke-linejoin="round"></path>
                <path d="m49,26 20,24m0-24-20,24" fill="currentColor" stroke-linecap="round"></path>
              </svg>
            </div>
          </label>

      <!-- Plane Switch for Theme Toggle -->
      <label class="plane-switch">
        <input type="checkbox" :checked="!isDark" @change="$emit('toggle-theme')">
        <div>
          <div>
            <svg viewBox="0 0 13 13">
              <path d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z" fill="currentColor"></path>
            </svg>
          </div>
          <span class="street-middle"></span>
          <span class="cloud"></span>
          <span class="cloud two"></span>
        </div>
      </label>

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