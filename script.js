// ----------------------------
// ✅ MOBILE NAVIGATION TOGGLE
// ----------------------------
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close menu when click any nav link (Mobile UX best)
document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});


// ----------------------------
// ✅ YEAR AUTO-UPDATE FOOTER
// ----------------------------
document.getElementById("year").textContent = new Date().getFullYear();


// ----------------------------
// ✅ LANGUAGE SWITCH SYSTEM
// ----------------------------
const langEn = document.getElementById("langEn");
const langUr = document.getElementById("langUr");
const elementsWithLang = document.querySelectorAll("[data-lang-en]");

function setLanguage(lang) {
  elementsWithLang.forEach((el) => {
    el.innerText = el.getAttribute(`data-lang-${lang}`) || el.innerText;
  });

  // Update active button UI
  langEn.classList.toggle("active", lang === "en");
  langUr.classList.toggle("active", lang === "ur");

  // Urdu RTL support
  document.body.style.direction = lang === "ur" ? "rtl" : "ltr";
}

langEn.addEventListener("click", () => setLanguage("en"));
langUr.addEventListener("click", () => setLanguage("ur"));


// Default
setLanguage("en");


// ----------------------------
// ✅ NEWS TICKER AUTO SCROLL
// ----------------------------
const ticker = document.getElementById("tickerInner");
let tickerPosition = 0;

function autoScrollTicker() {
  tickerPosition += 1;
  if (tickerPosition >= ticker.scrollWidth / 2) {
    tickerPosition = 0;
  }
  ticker.style.transform = `translateX(-${tickerPosition}px)`;
  requestAnimationFrame(autoScrollTicker);
}
autoScrollTicker();


// ----------------------------
// ✅ SEARCH BAR (Simple Example)
// ----------------------------
const searchInput = document.getElementById("searchInput");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    alert("Searching: " + query); // Later: real results page
  }
});
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
}
function toggleMenu() {
  document.getElementById("mainNav").classList.toggle("show");
}


