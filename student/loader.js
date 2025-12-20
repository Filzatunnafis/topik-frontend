let loaded = 0;
const total = 4;

function loadSection(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(id);
      if (!container) return;

      container.innerHTML = html;
      loaded++;

      if (loaded === total) {
        document.dispatchEvent(new Event("sectionsLoaded"));
      }
    })
    .catch(err => console.error("Load error:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadSection("top-part", "sections/top-part.html");
  loadSection("personal-details", "sections/personal-details.html");
  loadSection("motive-purpose", "sections/motive-purpose.html");
  loadSection("guidelines", "sections/guidelines.html");
});
