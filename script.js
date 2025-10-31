// Mobile menu toggle (if needed later)
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.classList.toggle('open');
}

// Year footer auto-update (if you have #year span)
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Language switch (uses elements with data-lang-en / data-lang-ur)
const langEn = document.getElementById('langEn');
const langUr = document.getElementById('langUr');
const els = document.querySelectorAll('[data-lang-en]');
function setLang(l) {
  els.forEach(el => {
    const text = el.getAttribute('data-lang-' + l);
    if (text) el.innerText = text;
  });
  if (langEn) langEn.classList.toggle('active', l === 'en');
  if (langUr) langUr.classList.toggle('active', l === 'ur');
  document.documentElement.dir = (l === 'ur') ? 'rtl' : 'ltr';
}
if (langEn) langEn.addEventListener('click', () => setLang('en'));
if (langUr) langUr.addEventListener('click', () => setLang('ur'));
setLang('en');

// basic ticker auto-scroll
(function ticker() {
  const container = document.getElementById('tickerInner') || document.querySelector('.ticker-inner');
  if (!container) return;
  let pos = 0;
  function step() {
    pos += 1;
    if (pos >= container.scrollWidth / 2) pos = 0;
    container.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});







