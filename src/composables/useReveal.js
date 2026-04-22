import { onBeforeUnmount, onMounted } from "vue";

export function useReveal(selector = "[data-reveal]") {
  let observer;

  onMounted(() => {
    const elements = document.querySelectorAll(selector);
    
    if (!elements.length) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}