// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all animations and interactions
  initScrollAnimations()
  initFAQToggle()
  initBeforeAfterSlider()
  initSmoothScrolling()
})

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")

        // Special handling for staggered animations
        if (entry.target.classList.contains("feature-box")) {
          const boxes = entry.target.parentElement.querySelectorAll(".feature-box")
          boxes.forEach((box, index) => {
            setTimeout(() => {
              box.style.opacity = "1"
              box.style.transform = "translateY(0)"
            }, index * 200)
          })
        }

        if (entry.target.classList.contains("service-item")) {
          const items = entry.target.parentElement.querySelectorAll(".service-item")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, index * 150)
          })
        }

        if (entry.target.classList.contains("team-member")) {
          const members = entry.target.parentElement.querySelectorAll(".team-member")
          members.forEach((member, index) => {
            setTimeout(() => {
              member.style.opacity = "1"
              member.style.transform = "translateY(0)"
            }, index * 200)
          })
        }

        if (entry.target.classList.contains("testimonial-content")) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, 300)
        }
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations
  const elementsToAnimate = [
    ".why-image",
    ".feature-box",
    ".service-item",
    ".faq-left",
    ".chat-interface",
    ".testimonial-content",
    ".team-member",
    ".footer-content",
  ]

  elementsToAnimate.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      el.classList.add("animate-on-scroll")
      observer.observe(el)
    })
  })
}

// FAQ Toggle Functionality
function initFAQToggle() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current item
      if (isActive) {
        item.classList.remove("active")
      } else {
        item.classList.add("active")
      }
    })
  })
}

// Before/After Slider Interaction
function initBeforeAfterSlider() {
  const beforeAfterOverlay = document.querySelector(".before-after-overlay")
  const sliderHandle = document.querySelector(".slider-handle")

  if (beforeAfterOverlay && sliderHandle) {
    let isSliding = false

    beforeAfterOverlay.addEventListener("mouseenter", () => {
      sliderHandle.style.background = "#ff6b9d"
    })

    beforeAfterOverlay.addEventListener("mouseleave", () => {
      if (!isSliding) {
        sliderHandle.style.background = "#4a90e2"
      }
    })

    beforeAfterOverlay.addEventListener("click", () => {
      isSliding = !isSliding

      if (isSliding) {
        sliderHandle.style.background = "#ff6b9d"
        sliderHandle.querySelector("::after") && (sliderHandle.querySelector("::after").style.left = "22px")
      } else {
        sliderHandle.style.background = "#4a90e2"
      }
    })
  }
}

// Smooth Scrolling for Internal Links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Add hover effects for buttons and interactive elements
document.addEventListener("DOMContentLoaded", () => {
  // Service buttons hover effect
  const serviceButtons = document.querySelectorAll(".service-btn")
  serviceButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(-5px) scale(1.05)"
    })

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)"
    })
  })

  // CTA button pulse effect
  const ctaButton = document.querySelector(".cta-button")
  if (ctaButton) {
    setInterval(() => {
      ctaButton.style.boxShadow = "0 0 20px rgba(255, 107, 157, 0.6)"
      setTimeout(() => {
        ctaButton.style.boxShadow = "0 5px 15px rgba(255, 107, 157, 0.4)"
      }, 1000)
    }, 3000)
  }

  // Sparkle animation for why choose us image
  const sparkleImage = document.querySelector(".sparkle-image")
  if (sparkleImage) {
    setInterval(() => {
      createSparkle(sparkleImage.parentElement)
    }, 2000)
  }
})

// Create sparkle effect
function createSparkle(container) {
  const sparkle = document.createElement("div")
  sparkle.innerHTML = "✨"
  sparkle.style.position = "absolute"
  sparkle.style.fontSize = "16px"
  sparkle.style.pointerEvents = "none"
  sparkle.style.left = Math.random() * 80 + 10 + "%"
  sparkle.style.top = Math.random() * 80 + 10 + "%"
  sparkle.style.opacity = "0"
  sparkle.style.transform = "scale(0)"
  sparkle.style.transition = "all 1s ease"

  container.appendChild(sparkle)

  setTimeout(() => {
    sparkle.style.opacity = "1"
    sparkle.style.transform = "scale(1)"
  }, 100)

  setTimeout(() => {
    sparkle.style.opacity = "0"
    sparkle.style.transform = "scale(0)"
  }, 1000)

  setTimeout(() => {
    container.removeChild(sparkle)
  }, 2000)
}

// Mobile menu toggle (if needed)
const menuToggle = document.querySelector(".menu-toggle")
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    // Add mobile menu functionality here if needed
    console.log("Mobile menu clicked")
  })
}

// Add scroll effect to header
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

// Chat bubbles typing animation
function animateChatBubbles() {
  const chatBubbles = document.querySelectorAll(".chat-bubble")
  chatBubbles.forEach((bubble, index) => {
    setTimeout(() => {
      bubble.style.opacity = "1"
      bubble.style.transform = "translateY(0)"

      // Add typing effect
      const text = bubble.textContent
      bubble.textContent = ""
      let i = 0
      const typeInterval = setInterval(() => {
        bubble.textContent += text[i]
        i++
        if (i >= text.length) {
          clearInterval(typeInterval)
        }
      }, 50)
    }, index * 1000)
  })
}

// Initialize chat animation when section comes into view
const chatInterface = document.querySelector(".chat-interface")
if (chatInterface) {
  const chatObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateChatBubbles()
        chatObserver.unobserve(entry.target)
      }
    })
  })

  chatObserver.observe(chatInterface)
}
