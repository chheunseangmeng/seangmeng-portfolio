import { onBeforeUnmount, onMounted, watch } from "vue";

let observer = null;

function createStars() {
  if (document.documentElement.dataset.theme !== "dark") return;

  const existing = document.querySelector(".stars");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.className = "stars";
  document.body.appendChild(container);

  for (let i = 0; i < 250; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(star);
  }

  for (let i = 0; i < 8; i++) {
    const shooting = document.createElement("div");
    shooting.className = "shooting-star";
    shooting.style.top = `${Math.random() * 60}%`;
    shooting.style.left = `${Math.random() * 80 + 10}%`;
    shooting.style.animationDelay = `${Math.random() * 20}s`;
    shooting.style.animationDuration = `${Math.random() * 5 + 6}s`;
    document.body.appendChild(shooting);
  }
}

function removeStars() {
  document.querySelector(".stars")?.remove();
  document.querySelectorAll(".shooting-star").forEach((s) => s.remove());
}

export function useStars() {
  const apply = () => {
    if (document.documentElement.dataset.theme === "dark") createStars();
    else removeStars();
  };

  onMounted(() => {
    apply();
    observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    removeStars();
  });
}
