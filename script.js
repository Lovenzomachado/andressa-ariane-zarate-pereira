// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#fff"
    header.style.backdropFilter = "none"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".service-card, .team-card, .review-card, .contact-method")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  navMenu.classList.toggle("active")
}

// Add click handlers for buttons
document.addEventListener("DOMContentLoaded", () => {
  const contactButtons = document.querySelectorAll(".btn-primary, .contact-btn")
  contactButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.textContent.includes("Contact")) {
        e.preventDefault()
        document.querySelector("#contact").scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  const serviceButton = document.querySelector(".btn-outline")
  if (serviceButton) {
    serviceButton.addEventListener("click", (e) => {
      e.preventDefault()
      document.querySelector("#services").scrollIntoView({
        behavior: "smooth",
      })
    })
  }
})

// Add hover effects for service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
  document.body.style.transition = "opacity 0.5s ease"
})

// Initialize
document.body.style.opacity = "0"
