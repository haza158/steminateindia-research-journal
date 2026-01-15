const searchInput = document.getElementById("searchInput");
const fieldFilter = document.getElementById("fieldFilter");

const sections = document.querySelectorAll("section");
const paperCards = document.querySelectorAll(".paper-card");

function filterPapers() {
  const searchText = searchInput.value.toLowerCase();
  const selectedField = fieldFilter.value;

  sections.forEach(section => {
    let sectionHasVisiblePaper = false;

    const cards = section.querySelectorAll(".paper-card");

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const field = card.dataset.field;

      const matchesSearch = title.includes(searchText);
      const matchesField =
        selectedField === "all" || field === selectedField;

      if (matchesSearch && matchesField) {
        card.style.display = "block";
        sectionHasVisiblePaper = true;
      } else {
        card.style.display = "none";
      }
    });

    // Hide or show the entire section including heading
    section.style.display = sectionHasVisiblePaper ? "block" : "none";
  });
}

// Event listeners
searchInput.addEventListener("input", filterPapers);
fieldFilter.addEventListener("change", filterPapers);
