// app.js — renders the repeating card collections from DATA, builds the
// auto-scroll marquees, and wires the interactive controls (theme toggle,
// mobile nav). No framework; plain DOM. The unique sections (hero, celeb,
// community, marketplace, discovery, footer) are authored directly in HTML.

(function () {
  "use strict";
  const { IMG } = DATA;

  // ---- small markup helpers (mirror the prototype's UI primitives) ----
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // inline sprite icon
  const ic = (name, size) =>
    `<svg class="ic" width="${size}" height="${size}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

  const handle = (user, cc, cls = "") =>
    `<span class="handle ${cls}">@${esc(user)} <span class="dot">•</span> ${esc(cc)}</span>`;

  const flag = (cc) =>
    `<img class="flag" src="https://flagcdn.com/h40/${String(cc).toLowerCase()}.png" width="22" height="16" alt="${esc(cc)}" title="${esc(cc)}" loading="lazy">`;

  const stat = (icon, value) => `<span class="stat">${ic(icon, 13)}${esc(value)}</span>`;

  // ---- cards ----
  const productCard = (p) => `
    <a class="card prod" href="#">
      <div class="card-img-wrap">
        <img class="card-img" src="${IMG(p.img)}" alt="${esc(p.title)}" loading="lazy">
        ${p.cat ? `<span class="card-tag">${esc(p.cat)}</span>` : ""}
      </div>
      <div class="card-body">
        <div class="card-title">${esc(p.title)}</div>
        ${handle(p.user, p.cc)}
        <div class="card-foot">
          <span class="price">${esc(p.price)}</span>
          <span class="stats">${stat("heart", p.likes)}${stat("comment", p.comments)}</span>
        </div>
      </div>
    </a>`;

  const postCard = (p) => `
    <a class="card post" href="#">
      <div class="card-img-wrap">
        <img class="card-img" src="${IMG(p.img)}" alt="${esc(p.title)}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-title">${esc(p.title)}</div>
        ${handle(p.user, p.cc)}
        <div class="card-foot">
          <span class="stats">${stat("heart", p.likes)}${stat("comment", p.comments)}</span>
        </div>
      </div>
    </a>`;

  const feedItem = (it) => (it.kind === "product" ? productCard(it.data) : postCard(it.data));

  const featCard = (c) => `
    <a class="feat-card" href="#">
      <span class="feat-card-top">
        <span class="feat-card-img"><img src="${IMG(c.img, 400)}" alt="" loading="lazy"></span>
        ${flag(c.cc)}
      </span>
      <span class="feat-card-name">${esc(c.name)}</span>
      <span class="feat-card-user">@${esc(c.user)}</span>
      <span class="feat-card-loc">${ic("pin", 12)} ${esc(c.city)}</span>
      <span class="feat-card-spec">${esc(c.specialty)}</span>
      <span class="feat-card-stats">
        <span><b>${esc(c.followers)}</b> followers</span>
        <span class="feat-card-dot">•</span>
        <span><b>${esc(c.pieces)}</b> pieces</span>
      </span>
    </a>`;

  const hofRow = (h, i) => `
    <a class="hof-plaque-row" href="#">
      <span class="hof-plaque-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="hof-thumb"><img src="${IMG(h.img, 200)}" alt="" loading="lazy"></span>
      <span class="hof-info"><b>${esc(h.title)}</b>${handle(h.user, h.cc)}</span>
      <span class="hof-award">${ic("crown", 13)} ${esc(h.award)}</span>
    </a>`;

  // ---- finalists podium ----
  const renderPodium = () => {
    const fs = DATA.finalists;
    const first = fs[0];
    const firstEl = document.getElementById("podium-first");
    if (firstEl) {
      firstEl.innerHTML = `
        <div class="card-img-wrap">
          <img class="card-img" src="${IMG(first.img, 900)}" alt="" loading="lazy">
          <span class="rank-badge big">1</span>
        </div>
        <div class="card-body">
          <div class="card-title lg">${esc(first.title)}</div>
          ${handle(first.user, first.cc)}
          <div class="card-foot">
            <span class="vote-pill">${ic("heart", 13)} ${esc(first.votes)} votes</span>
          </div>
        </div>`;
    }
    const restEl = document.getElementById("podium-rest");
    if (restEl) {
      restEl.innerHTML = fs.slice(1).map((f) => `
        <a class="podium-row" href="#">
          <span class="rank-num">${f.rank}</span>
          <span class="podium-thumb"><img src="${IMG(f.img, 200)}" alt="" loading="lazy"></span>
          <span class="podium-info">
            <span class="card-title sm">${esc(f.title)}</span>
            ${handle(f.user, f.cc)}
          </span>
          <span class="vote-pill sm">${ic("heart", 12)} ${esc(f.votes)}</span>
        </a>`).join("");
    }
  };

  // ---- content feed ----
  const buildFeed = () => {
    const a = DATA.products, b = DATA.posts, out = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i]) out.push({ kind: "product", data: a[i] });
      if (b[i]) out.push({ kind: "post", data: b[i] });
    }
    return out;
  };

  const renderFeed = () => {
    const feed = buildFeed();
    const newSet = document.getElementById("feed-new");
    if (newSet) newSet.innerHTML = feed.map(feedItem).join("");
    const loved = document.getElementById("feed-loved");
    if (loved) loved.innerHTML = [...feed].reverse().map(feedItem).join("");
  };

  const renderFeatured = () => {
    const set = document.getElementById("featured-cards");
    if (set) set.innerHTML = DATA.creators.slice(0, 8).map(featCard).join("");
  };

  const renderHof = () => {
    const el = document.getElementById("hof-rows");
    if (el) el.innerHTML = DATA.hallOfFame.map(hofRow).join("");
  };

  // ---- auto-scroll marquee: duplicate each flow-set for a seamless loop ----
  const buildMarquees = () => {
    document.querySelectorAll(".flow-wrap.is-auto .flow-track").forEach((track) => {
      const set = track.querySelector(".flow-set");
      if (!set || track.dataset.cloned) return;
      const dup = set.cloneNode(true);
      dup.setAttribute("aria-hidden", "true");
      track.appendChild(dup);
      track.dataset.cloned = "1";
    });
  };

  // ---- theme toggle (default dark; monochrome accent lifts to off-white on dark) ----
  const root = document.getElementById("app");
  const ACCENT = { dark: { a: "#efe9dd", on: "#141210" }, light: { a: "#141414", on: "#ffffff" } };

  const applyTheme = (mode) => {
    root.classList.toggle("theme-dark", mode === "dark");
    root.classList.toggle("theme-light", mode === "light");
    root.style.setProperty("--accent", ACCENT[mode].a);
    root.style.setProperty("--on-accent", ACCENT[mode].on);
    document.body.style.background = mode === "dark" ? "#131210" : "#ffffff";
    document.querySelectorAll(".theme-btn use").forEach((u) =>
      u.setAttribute("href", mode === "dark" ? "#i-sun" : "#i-moon"));
    document.querySelectorAll(".theme-btn").forEach((b) =>
      b.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode"));
    try { localStorage.setItem("upc-theme", mode); } catch (e) {}
  };

  const wireTheme = () => {
    let mode = "dark";
    try { mode = localStorage.getItem("upc-theme") || "dark"; } catch (e) {}
    applyTheme(mode);
    document.querySelectorAll(".theme-btn").forEach((btn) =>
      btn.addEventListener("click", () =>
        applyTheme(root.classList.contains("theme-dark") ? "light" : "dark")));
  };

  // ---- mobile nav ----
  const wireMobileNav = () => {
    const btn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".nav-mobile");
    if (!btn || !menu) return;
    btn.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderPodium();
    renderFeed();
    renderFeatured();
    renderHof();
    buildMarquees();
    wireTheme();
    wireMobileNav();
  });
})();
