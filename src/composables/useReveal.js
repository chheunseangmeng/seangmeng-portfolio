import { onBeforeUnmount, onMounted } from "vue";

export function useReveal(selector = "[data-reveal]") {
  let observer;

  onMounted(() => {
    const elements = document.querySelectorAll(selector);
    console.log("Reveal found", elements.length, "elements");

    // Always force visible immediately as fallback
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    if (!("IntersectionObserver" in window)) {
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Reveal triggered for", entry.target);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
      },
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-pending");
      element.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`);
      observer.observe(element);
    });
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}
