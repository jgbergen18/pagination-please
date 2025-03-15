console.log("Toolbar-controlled Scroll Limiter active");

// Scroll limiter logic
let maxScrollY = window.innerHeight * 2;

function limitScroll() {
  if (window.scrollY > maxScrollY) {
    window.scrollTo(0, maxScrollY);
  }
}

window.addEventListener("scroll", limitScroll, { passive: false });

// Listen for extend-scroll messages from popup
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "extendScroll") {
    maxScrollY += window.innerHeight * 2;
    window.scrollBy({ top: 100, behavior: "smooth" }); // helps trigger dynamic load
  }
});
