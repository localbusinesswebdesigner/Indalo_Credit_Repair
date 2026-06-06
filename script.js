// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => {
    appearOnScroll.observe(el);
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

// Only run mobile menu code if the toggle button exists
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  });
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }
    
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "") return;
    
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Active nav highlight (ScrollSpy) - Updated to match your section IDs
const sections = document.querySelectorAll("#services, #contact, #testimonials");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  const headerHeight = document.querySelector("header").offsetHeight;

  sections.forEach(section => {
    if (!section) return;
    const sectionTop = section.offsetTop - headerHeight - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    }
  });
});

