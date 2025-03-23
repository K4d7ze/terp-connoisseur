document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("results");
const progress = document.getElementById("progress");

const formatTerpenes = (terps) =>
  terps.map(t => `
    <p>🌸 <strong>${t.name}</strong><br>
    🔥 Siedepunkt: ${t.boiling}°C<br>
    🌡️ Empf. Temp (S&B): ${t.boiling + 2}°C<br>
    🍋 Geschmack: ${t.flavor}<br>
    💫 Wirkung: ${t.effect}</p>
  `).join("<hr>");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultContainer.innerHTML = "";

  if (!query) return;

  const hits = window.strainData.filter(d =>
    d.strain.toLowerCase().includes(query) ||
    d.product.toLowerCase().includes(query)
  );

  if (hits.length === 0) {
    resultContainer.innerHTML = "<p>❌ Kein Eintrag gefunden.</p>";
    return;
  }

  hits.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>${d.strain}</strong> (${d.product})</p>
      ${formatTerpenes(d.terpene)}
    `;
    resultContainer.appendChild(card);
  });
});

// Fortschritt anzeigen
progress.innerHTML = `
  <p>📊 Fortschritt:</p>
  <p>Produkte: ${window.progressStatus.productsMapped} / ${window.progressStatus.productsTotal}</p>
  <p>Terpenprofile: ${window.progressStatus.terpeneProfilesLeafly}</p>
`;