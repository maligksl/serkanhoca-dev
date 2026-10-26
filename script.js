const searchInput = document.querySelector("#search");
const clearButton = document.querySelector("#clear-search");
const eventCards = document.querySelectorAll(".event-card");
const eventCount = document.querySelector("#event-count");
const noResults = document.querySelector("#no-results");

function filterEvents() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const isMatch = title.includes(query);

    card.hidden = !isMatch;
    if (isMatch) {
      visibleCount += 1;
    }
  });

  eventCount.textContent = `Gösterilen Etkinlik Sayısı: ${visibleCount}`;
  noResults.hidden = visibleCount !== 0;
  clearButton.disabled = query.length === 0;
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
  searchInput.focus();
});

filterEvents();
