/* BASHtr guidelines site: glyph grid, filters, examples, TOC highlighting */

const GLYPHS = [
  { g: "\u0643", cp: "U+0643", name: "K\u0101f (all languages)", tag: "general" },
  { g: "\u064A", cp: "U+064A", name: "Y\u0101\u02BE, dotted final / initial / medial", tag: "general" },
  { g: "\u0649", cp: "U+0649", name: "Y\u0101\u02BE, dotless final", tag: "general" },
  { g: "\u0647", cp: "U+0647", name: "H\u0101\u02BE (also undotted t\u0101\u02BE marb\u016B\u1E6Da)", tag: "general" },
  { g: "\u0629", cp: "U+0629", name: "T\u0101\u02BE marb\u016B\u1E6Da, dots visible", tag: "general" },
  { g: "\u0621", cp: "U+0621", name: "Hamza, no visible carrier", tag: "general" },
  { g: "\u067E", cp: "U+067E", name: "Peh", tag: "persian" },
  { g: "\u0686", cp: "U+0686", name: "Cheh", tag: "persian" },
  { g: "\u0698", cp: "U+0698", name: "Jeh", tag: "persian" },
  { g: "\u06AF", cp: "U+06AF", name: "Gaf", tag: "persian" },
  { g: "\u0679", cp: "U+0679", name: "\u1E6Ce", tag: "urdu" },
  { g: "\u0688", cp: "U+0688", name: "\u1E0Cal", tag: "urdu" },
  { g: "\u0691", cp: "U+0691", name: "\u1E5Ae", tag: "urdu" },
  { g: "\u06BA", cp: "U+06BA", name: "N\u016Bn-e \u0121unna", tag: "urdu" },
  { g: "\u06C1", cp: "U+06C1", name: "Gol he", tag: "urdu" },
  { g: "\u06D2", cp: "U+06D2", name: "Ba\u1E5B\u012B ye", tag: "urdu" },
  { g: "\u06A0", cp: "U+06A0", name: "Nga", tag: "jawi" },
  { g: "\u06BD", cp: "U+06BD", name: "Nya", tag: "jawi" },
  { g: "\u06A4", cp: "U+06A4", name: "Pa / Veh", tag: "jawi" },
  { g: "\u0762", cp: "U+0762", name: "Ga (Jawi k\u0101f with dot)", tag: "jawi" },
  { g: "\u06CF", cp: "U+06CF", name: "Va (waw with dot above)", tag: "jawi" },
  { g: "\u06A2", cp: "U+06A2", name: "Maghrib\u012B f\u0101\u02BE, dot below", tag: "maghribi" },
  { g: "\u06A7", cp: "U+06A7", name: "Maghrib\u012B q\u0101f, dot above", tag: "maghribi" },
  { g: "\u066E", cp: "U+066E", name: "Undotted b\u0101\u02BE / t\u0101\u02BE / th\u0101\u02BE / n\u016Bn / y\u0101\u02BE skeleton", tag: "undotted" },
  { g: "\u066F", cp: "U+066F", name: "Undotted f\u0101\u02BE / q\u0101f skeleton", tag: "undotted" },
  { g: "\u06BA", cp: "U+06BA", name: "Final undotted n\u016Bn (y\u0101\u02BE ruled out)", tag: "undotted" }
];

const TAG_LABELS = {
  general: "General",
  persian: "Persian",
  urdu: "Urdu",
  jawi: "Jawi / Malay",
  maghribi: "Maghrib\u012B",
  undotted: "Undotted rasm"
};

const EXAMPLES = [
  { ar: "\u064A\u0648\u062C\u062F \u0639\u0646\u0647 \u0648\u0628\u0639\u062F\u0647 \u062E \u0641\u0635\u0644 \u0641\u064A \u0637\u0631\u064A\u0642 \u0627\u0623\u062E\u0631 \u0641\u064A \u0627\u0644\u0628\u064A\u0627\u0646 \u062E", tags: ["sigla transcribed as text", "ta\u1E6Dw\u012Bl omitted"] },
  { ar: "\u0627\u0622\u062E\u0631 \u0634\u0626 \u0623\u0646\u062A \u0641\u064A \u0643\u0644 \u0647\u062C\u0639\u0629 \u0648\u0623\u0648\u0644 \u0634\u0649 \u0639\u0646\u062F \u0643\u0644 \u0647\u0628\u0648\u0628", tags: ["hamza only when visible", "dotless final y\u0101\u02BE \u2192 \u0649"] },
  { ar: "\u0627\u0630 \u0642\u062F \u062A\u0631\u0627\u0622\u0649 \u0645\u0646 \u0622\u0641\u0627\u0642 \u0627\u062D\u0648\u0627\u0644\u0647 \u062A\u0628\u0627\u0634\u064A\u0631 \u0627\u0646\u0648\u0627\u0631", tags: ["madda as written", "orthography preserved"] },
  { ar: "\u0627\u062D\u062F\u062A \u0649\u0633\u0649\u0641\u0649\u062F \u0627\u0644\u062D\u0649\u0648\u0629 \u0641\u0627\u0648\u0644 \u0645\u0627 \u0649\u0633\u0649\u0641\u0649\u062F \u062D\u0649\u0648\u0647 \u0627\u0644\u062A\u0639\u062F\u0649", tags: ["eccentric dotting kept", "no restoration"] },
  { ar: "\u0641\u0627\u0630\u0627 \u0643\u0627\u0646 \u0647\u0643\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0633\u0628\u066E \u0645\u062E\u0627\u0644\u066F\u0629 \u0627\u0644\u063A\u0631\u0636 \u0641\u0627\u0630\u06BA \u0644\u0627 \u0645\u0627\u0646\u0639 \u0645\u0646 \u062C\u0647\u0629", tags: ["undotted skeleton \u066E \u066F \u06BA"] },
  { ar: "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645 \u0645\u0633\u0626\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649 \u0644\u062B\u0627\u0628\u062A \u0628\u0646 \u0642\u0631\u0647", tags: ["no sacred-phrase ligature", "ta\u1E6Dw\u012Bl omitted"] },
  { ar: "\u0627\u062B\u0631 \u0627\u0644\u062D\u064A\u0648\u0629 \u0641\u064A\u0647 \u062D\u062A\u0649 \u0627\u0646 \u0627\u0644\u0645\u0623\u0643\u0648\u0644 \u0641\u064A \u0628\u0637\u0646 \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u064A\u062D\u064A\u0649 \u0648\u064A\u0633\u0626\u0644", tags: ["orthography preserved"] },
  { ar: "\u0627\u0644\u0627\u0637\u0644\u0627\u0642 \u0628\u0644 \u0644\u0627 \u0634\u064A\u0647 \u0634\u0649 \u0645\u0627 \u0641\u0649 \u0634\u0649 \u0645\u0627 \u0645\u0639\u064A\u0646 \u0628\u062D\u0627\u0644 \u0645\u0627 \u0645\u0639\u0649\u0646\u0647 \u0648\u0647\u0648 \u0643\u0648\u0646\u0647 \u0628\u0627\u0644\u066F\u0648\u0647", tags: ["undotted skeleton \u066F", "vocalization omitted"] },
  { ar: "\u0627\u0644\u0639\u0644\u0629 \u0627\u0644\u063A\u0627\u064A\u064A\u0647 \u0643\u0627\u0646 \u0627\u0644\u0641\u0627\u0639\u0644 \u0645\u062A\u0627\u062E\u0631\u0627 \u0641\u0649 \u0627\u0644\u0634\u064A\u0626\u064A\u0629", tags: ["t\u0101\u02BE marb\u016B\u1E6Da without dots \u2192 \u0647"] },
  { ar: "\u0627\u0628\u0639\u062F \u0627\u0644\u0645\u0648\u0627\u0636\u0639 \u0639\u0646 \u0627\u0644\u0641\u0644\u0643 \u0648\u0630\u0627\u0643 \u0647\u0648 \u0627\u0644\u0648\u0633\u0637 \u0648\u0627\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0645\u0627 \u064A\u062A\u0644\u0648\u0627 \u0627\u0644\u0623\u0631\u0636 \u0641\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0639\u0646\u0649", tags: ["dotless final y\u0101\u02BE \u2192 \u0649"] },
  { ar: "\u0641\u0627\u062F \u0643\u0646\u0627 \u0642\u062F \u0648\u0635\u0639\u0646\u0627 \u0648\u0636\u0639 \u0627\u0644\u0627\u0634\u064A\u0627 \u0627\u0644\u062A\u0649 \u0630\u0643\u0631\u0646\u0627 \u0641\u0649 \u0643\u0648\u0643\u0628 \u0632\u062D\u0644 \u0641\u0649\u0649\u0649\u063A\u0649", tags: ["scribal spelling kept", "eccentric dotting kept"] },
  { ar: "\u0627\u0643\u0649\u0631 \u0636\u0648\u0627 \u0648\u0644\u0647\u0630\u0627 \u064A\u0631\u0649 \u0627\u0644\u0627\u0646\u0633\u0627\u0646 \u0648\u062C\u0647\u0647 \u0641\u064A\u0645\u0627 \u0647\u0648 \u0627\u0643\u0649\u0631 \u0635\u0642\u0627\u0644\u0629 \u0643\u0627\u0644\u0645\u0631\u0627\u0629 \u0648\u0627\u0644\u0645\u0627 \u062F\u0648\u0646 \u0645\u0627 \u0644\u064A\u0633", tags: ["reduced dotting kept"] },
  { ar: "\u0627\u0644\u062D\u064A\u0648\u0627\u0646 \u0628\u0627\u0644\u0646\u0627\u0631 \u0648\u0627\u0645\u062A\u0646\u0627\u0639 \u0627\u0644\u0645\u0631\u0627\u0629 \u0645\u0646 \u0627\u0644\u0632\u0648\u062C \u0628\u0644\u0627 \u0633\u0628\u0628 \u0648\u0627\u0644\u064A\u0627\u0633", tags: ["hamza absent on page, none supplied"] }
];

/* glyph grid */
const grid = document.getElementById("glyphGrid");
GLYPHS.forEach(function (item) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "glyph-card";
  card.dataset.tag = item.tag;
  card.setAttribute("aria-label", "Copy " + item.cp + " " + item.name);
  card.innerHTML =
    '<span class="glyph">' + item.g + "</span>" +
    '<span class="cp">' + item.cp + "</span>" +
    '<span class="gname">' + item.name + "</span>" +
    '<span class="gtag">' + TAG_LABELS[item.tag] + "</span>" +
    '<span class="copied-msg">copied</span>';
  card.addEventListener("click", function () {
    const done = function () {
      card.classList.add("copied");
      setTimeout(function () { card.classList.remove("copied"); }, 900);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(item.g).then(done, done);
    } else {
      done();
    }
  });
  grid.appendChild(card);
});

/* filters */
document.querySelectorAll(".filterbar button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".filterbar button").forEach(function (b) { b.classList.remove("on"); });
    btn.classList.add("on");
    const f = btn.dataset.filter;
    document.querySelectorAll(".glyph-card").forEach(function (card) {
      card.style.display = f === "all" || card.dataset.tag === f ? "" : "none";
    });
  });
});

/* examples */
const exList = document.getElementById("exampleList");
EXAMPLES.forEach(function (ex) {
  const row = document.createElement("div");
  row.className = "exline";
  row.innerHTML =
    '<span class="ar" lang="ar" dir="rtl">' + ex.ar + "</span>" +
    '<div class="tags">' + ex.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>";
  exList.appendChild(row);
});

/* TOC highlighting on scroll */
const tocLinks = Array.from(document.querySelectorAll(".toc a"));
const sections = tocLinks
  .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const byId = {};
  tocLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLinks.forEach(function (a) { a.classList.remove("active"); });
        const link = byId[entry.target.id];
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  sections.forEach(function (s) { obs.observe(s); });
}
