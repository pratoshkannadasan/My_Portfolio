// home-peek.js (updated)

// small helper
const take = (arr, n = 5) => Array.from(arr).slice(0, n);

async function loadDoc(url) {
  const res = await fetch(url, { cache: "no-store" });
  const html = await res.text();
  return new DOMParser().parseFromString(html, "text/html");
}

/* ---------- Awards: still scrape awards.html ---------- */
async function renderAwards() {
  const ul = document.getElementById("awards-peek");
  if (!ul) return;
  try {
    const doc = await loadDoc("awards.html");
    const cards = doc.querySelectorAll("#awards-list .list-item, .list-grid .list-item");
    if (!cards.length) {
      ul.innerHTML = `<li class="meta">No awards found in awards.html.</li>`;
      return;
    }
    const items = take(cards).map((card) => {
      const h = card.querySelector("h3");
      const title = h ? (h.childNodes[0].textContent || h.textContent).trim() : "—";
      const year =
        h?.querySelector(".badge")?.textContent.trim() ||
        (h?.textContent.match(/\b(20\d{2}|19\d{2})\b/)?.[0] || "");
      return `<li><strong>${title}</strong> ${
        year ? `<span class="meta">${year}</span>` : ""
      }</li>`;
    });
    ul.innerHTML = items.join("");
  } catch {
    ul.innerHTML = `<li class="meta">Couldn’t load awards.html</li>`;
  }
}

/* ---------- Positions: use positions-data.js directly ---------- */
function renderPositions() {
  const ul = document.getElementById("positions-peek");
  if (!ul) return;

  const data = (window.POSITIONS || []);
  if (!data.length) {
    ul.innerHTML = `<li class="meta">No positions in positions-data.js.</li>`;
    return;
  }

  // prefer Higher Council + Excos for the home preview
  const preferred = data.filter((x) => ["higher", "excos"].includes(x.category));
  const list =
    preferred.length ? preferred : data; // fallback to anything if none preferred

  const top = list
    .slice()
    .sort(
      (a, b) =>
        (b.year || 0) - (a.year || 0) ||
        (b.date || "").localeCompare(a.date || "")
    )
    .slice(0, 5);

  const items = top.map(
    (p) =>
      `<li>
        <strong>${p.role_en || p.role_ms || "—"}</strong>
        <span class="meta">
          ${p.year || ""}${p.scope ? " · " + p.scope : ""}${
        p.org ? " · " + p.org : ""
      }
        </span>
      </li>`
  );
  ul.innerHTML = items.join("");
}

/* ---------- Projects: scrape projects.html cards ---------- */
async function renderProjects() {
  const ul = document.getElementById("projects-peek");
  if (!ul) return;
  try {
    const doc = await loadDoc("projects.html");
    // your projects use .project-card
    const cards = doc.querySelectorAll(".project-card");
    if (!cards.length) {
      ul.innerHTML = `<li class="meta">No projects found in projects.html.</li>`;
      return;
    }
    const items = take(cards).map((card) => {
      const h = card.querySelector(".title, h3");
      const title = h ? (h.childNodes[0].textContent || h.textContent).trim() : "—";
      const yr = h?.querySelector(".badge")?.textContent.trim() || "";
      return `<li><strong>${title}</strong> ${
        yr ? `<span class="meta">${yr}</span>` : ""
      }</li>`;
    });
    ul.innerHTML = items.join("");
  } catch {
    ul.innerHTML = `<li class="meta">Couldn’t load projects.html</li>`;
  }
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderAwards();
  renderPositions();
  renderProjects();
});
