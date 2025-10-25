let currentLang = 'en';

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    createStars();
  } else {
    removeStars();
  }
}

function createStars() {
  const starsContainer = document.querySelector('.stars-container');
  starsContainer.innerHTML = '';

  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
    star.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    starsContainer.appendChild(star);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
  `;
  if (!document.querySelector('#twinkle-animation')) {
    style.id = 'twinkle-animation';
    document.head.appendChild(style);
  }
}

function removeStars() {
  const starsContainer = document.querySelector('.stars-container');
  starsContainer.innerHTML = '';
}

function initLanguage() {
  const savedLang = localStorage.getItem('language') || 'en';
  currentLang = savedLang;
  updateLanguage();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'km' : 'en';
  localStorage.setItem('language', currentLang);
  updateLanguage();
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-en][data-km]');
  
  elements.forEach(element => {
    const text = currentLang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-km');
    element.textContent = text;

    // Add khmer font only if language is Khmer
    if (currentLang === 'km') {
      element.classList.add('khmer-font');
    } else {
      element.classList.remove('khmer-font');
    }
  });

  const langToggle = document.querySelector('.lang-text');
  if (langToggle) {
    langToggle.textContent = currentLang === 'en' ? 'KM' : 'EN';
  }
}


function initMobileMenu() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

function initContactForm() {
  const botToken = '7559810524:AAHEU3Lu-ynrJ7it5WX7oh2hrOwE_dZjzgE';
  const chatId = '-1002887359185';

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert(currentLang === 'en' ? 'Please fill in all fields.' : 'សូមបំពេញព័ត៌មានទាំងអស់។');
        return;
      }

      const text = `
📥 <b>New Portfolio Contact</b>\n
👤 <b>Name:</b> ${name}\n
📧 <b>Email:</b> ${email}\n
💬 <b>Message:</b>\n${message}
      `;

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = currentLang === 'en' ? 'Sending...' : 'កំពុងផ្ញើ...';

      try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'HTML'
          })
        });

        const data = await response.json();

        if (data.ok) {
          alert(currentLang === 'en' ? 'Message sent successfully!' : 'សារបានផ្ញើដោយជោគជ័យ!');
          contactForm.reset();
        } else {
          alert(currentLang === 'en' ? 'Failed to send message. Please try again.' : 'មិនអាចផ្ញើសារបានទេ។ សូមព្យាយាមម្តងទៀត។');
          console.error('Telegram error:', data);
        }
      } catch (error) {
        alert(currentLang === 'en' ? 'Error sending message. Please try again.' : 'មានបញ្ហាក្នុងការផ្ញើសារ។ សូមព្យាយាមម្តងទៀត។');
        console.error('Fetch error:', error);
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.skill-card, .stat-card, .timeline-item, .project-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

function initActiveNavLink() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = 'var(--text-primary)';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--primary-color)';
      }
    });
  });
}

function init() {
  initTheme();
  initLanguage();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initScrollAnimations();
  initActiveNavLink();

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    createStars();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

document.querySelectorAll('.project-link').forEach(btn => {
  btn.addEventListener('click', () => {
    Swal.fire({
      title: "This project hasn't been hosted yet!",
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#6a11cb',
      showClass: {
        popup: 'swal2-show' // default smooth fade in
      },
      hideClass: {
        popup: 'swal2-hide' // default smooth fade out
      }
    });
  });
});

function setupSlider(trackSelector, prevBtnSelector, nextBtnSelector, reverse = false) {
    const track = document.querySelector(trackSelector);
    const slides = track.querySelectorAll("img");
    const nextBtn = document.querySelector(nextBtnSelector);
    const prevBtn = document.querySelector(prevBtnSelector);

    let index = 0;
    const visibleSlides = 3;
    const totalSlides = slides.length;

    function updateSlide() {
      const slideWidth = slides[0].clientWidth + 20; // +margin
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (index < totalSlides - visibleSlides) {
        index++;
      } else {
        index = 0;
      }
      updateSlide();
    });

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
      } else {
        index = totalSlides - visibleSlides;
      }
      updateSlide();
    });

    // Auto-slide every 4 seconds
    setInterval(() => {
      if (!reverse) {
        if (index < totalSlides - visibleSlides) {
          index++;
        } else {
          index = 0;
        }
      } else {
        if (index > 0) {
          index--;
        } else {
          index = totalSlides - visibleSlides;
        }
      }
      updateSlide();
    }, 4000);
  }

  // Initialize both sliders
  setupSlider(".track-1", ".prev-btn-1", ".next-btn-1");
  setupSlider(".track-2", ".prev-btn-2", ".next-btn-2", true);
