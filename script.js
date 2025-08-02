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

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el)
})

document.addEventListener("DOMContentLoaded", () => {
  const imageWrappers = document.querySelectorAll(".fi-image-wrapper")

  imageWrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    wrapper.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const mayaButton = document.querySelector(".maya-button")

  if (mayaButton) {
    mayaButton.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const outcomeCards = document.querySelectorAll(".outcome-card")

  outcomeCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})