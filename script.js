const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const progress = document.querySelector("#progress");
const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

links.forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  navLinks?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
});

const updateScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  const marker = window.innerHeight * 0.35;
  let active = null;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= marker && rect.bottom > marker) active = section.id;
  });
  links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${active}`));
};

window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("resize", updateScroll, { passive: true });
updateScroll();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll('.post a[href^="#article-"]').forEach((link) => {
  link.addEventListener("click", () => {
    const article = document.querySelector(link.getAttribute("href"));
    if (article) article.open = true;
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
