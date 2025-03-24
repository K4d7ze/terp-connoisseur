const body = document.body;

// 🌞/🌙 Darkmode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});

// Suche & Anzeige
const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("results");
const progress = document.getElementById("progress");

const formatTerpenes = (terps) =>
  terps.map(t => `
    <p>🌸 <strong>${t.name}</strong><br>
    🔥 Siedepunkt: ${t.boiling}°C<br>
    🍋 Geschmack: ${t.flavor}<br>
    💫 Wirkung: ${t.effect}</p>
  `).join("<hr>");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  resultContainer.innerHTML = "";

  if (!query || !window.strainData) return;

  const hits = window.strainData.filter(d =>
    d.strain.toLowerCase().includes(query) ||
    d.product.toLowerCase().includes(query)
  );

  if (hits.length === 0) {
    resultContainer.innerHTML = "<p>❌ Kein Eintrag gefunden.</p>";
    return;
  }

  // Duplikate vermeiden
  const uniqueStrains = new Map();
  hits.forEach(d => {
    if (!uniqueStrains.has(d.strain + d.product)) {
      uniqueStrains.set(d.strain + d.product, d);
    }
  });

  uniqueStrains.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";

    const nameLine = d.product !== d.strain
      ? `<p><strong>${d.strain}</strong> (${d.product})</p>`
      : `<p><strong>${d.strain}</strong></p>`;

    card.innerHTML = `
      ${nameLine}
      ${formatTerpenes(d.terpene)}
    `;
    resultContainer.appendChild(card);
  });
});

// Fortschritt anzeigen (falls definiert)
if (window.progressStatus) {
  progress.innerHTML = `
    <p>📊 Fortschritt:</p>
    <p>Produkte: ${window.progressStatus.productsMapped} / ${window.progressStatus.productsTotal}</p>
    <p>Terpenprofile: ${window.progressStatus.terpeneProfilesLeafly}</p>
  `;
}
