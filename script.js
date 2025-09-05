// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }else {
  entry.target.classList.remove("visible"); // 👈 re-trigger when hidden again
}
    });
  }, { threshold: 0.2 });

  fadeElems.forEach(el => {
    appearOnScroll.observe(el);
  });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile nav toggle (optional if you want responsive menu)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault(); // stop instant jump
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" }); // smooth scroll
  });
});
// Active nav highlight (ScrollSpy)
const sections = document.querySelectorAll("section, .section-glass");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // offset for header
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

