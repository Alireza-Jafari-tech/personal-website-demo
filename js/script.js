// hamburgur menu

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  console.log("clicked");
});

// Optional: Close menu when a link is clicked
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 400, // Add smooth transition speed
  resistance: true,
  resistanceRatio: 0.5,
  preventInteractionOnTransition: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Add observer to watch for DOM changes
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

//-----------------------------
