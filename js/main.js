/* Desk & cabinet portfolio: rendering, drawers, dialogs. Content is in content.js */
(function () {
  "use strict";
  var S = window.SITE;
  var root = document.documentElement;

  // always land on the desk: no restored scroll position, no #section in the address
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash && history.replaceState) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);

  var params = new URLSearchParams(location.search);
  var MODE = params.get("drawers") || S.drawerMode || "stack";
  if (MODE !== "scroll") MODE = "stack";
  root.classList.add("js", "mode-" + MODE);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = function () { return window.matchMedia("(hover: hover) and (pointer: fine)").matches; };
  var NAV_H = 60;

  /* ---------- Papers: pencil interests ---------- */
  (function () {
    var ul = $("#interests");
    var rots = [-1.5, 1.2, -0.8, 1.6, -1.1, 0.9, -1.4];
    var shifts = ["0", "10px", "-4px", "14px", "2px", "8px", "0"];
    var lines = [
      "M2 6 C 30 1, 60 9, 100 4 S 160 8, 198 3",
      "M2 5 C 40 9, 70 1, 110 6 S 170 3, 198 7",
      "M2 7 C 25 2, 55 8, 95 3 S 150 9, 198 4"
    ];
    ul.innerHTML = (S.interests || []).map(function (t, i) {
      return '<li style="--r:' + rots[i % rots.length] + "deg;--x:" + shifts[i % shifts.length] + ";--d:" + (1.0 + i * 0.28).toFixed(2) + 's">' +
        esc(t) +
        '<svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="' + lines[i % lines.length] + '" fill="none" stroke="#4b4350" stroke-width="1.8" stroke-linecap="round" opacity=".6"/></svg>' +
        "</li>";
    }).join("");
  })();

  /* ---------- Placeholder thumbnail art (flat shapes) ---------- */
  var PAL = [
    ["#5f9c93", "#2f625d", "#f0dca0"],
    ["#cf8566", "#8a3f2c", "#f2d5ac"],
    ["#7a80c4", "#3a3a86", "#f0e3b8"],
    ["#a7b265", "#5a6630", "#efe3b8"],
    ["#d7a65e", "#9c5a28", "#f3e7cc"]
  ];
  var ART = [
    function (p) { return '<rect width="320" height="200" fill="' + p[0] + '"/><circle cx="240" cy="60" r="30" fill="' + p[2] + '"/><path d="M0 200V140l60-48 50 40 70-70 80 78 60-30v90z" fill="' + p[1] + '"/><path d="M0 200v-36l70-30 80 34 90-40 80 36v36z" fill="rgba(0,0,0,.22)"/>'; },
    function (p) { return '<rect width="320" height="200" fill="' + p[1] + '"/><g fill="' + p[0] + '"><rect x="24" y="24" width="90" height="62" rx="5"/><rect x="150" y="24" width="146" height="40" rx="5"/><rect x="24" y="116" width="120" height="60" rx="5"/><rect x="190" y="96" width="106" height="80" rx="5"/></g><g fill="' + p[2] + '"><circle cx="70" cy="56" r="8"/><circle cx="240" cy="136" r="8"/></g><path d="M114 56h36M84 86v30M144 146h46" stroke="' + p[0] + '" stroke-width="8"/>'; },
    function (p) { return '<rect width="320" height="200" fill="' + p[1] + '"/><g fill="#fff" opacity=".85"><circle cx="40" cy="30" r="2"/><circle cx="120" cy="170" r="2"/><circle cx="270" cy="40" r="2"/><circle cx="210" cy="150" r="2"/><circle cx="80" cy="90" r="1.6"/></g><circle cx="160" cy="100" r="46" fill="' + p[0] + '"/><circle cx="160" cy="100" r="74" fill="none" stroke="' + p[2] + '" stroke-width="2.5" opacity=".8"/><circle cx="234" cy="100" r="11" fill="' + p[2] + '"/><path d="M118 82c20-10 54-10 84 6" stroke="rgba(0,0,0,.18)" stroke-width="10" fill="none"/>'; },
    function (p) { return '<rect width="320" height="200" fill="' + p[0] + '"/><g fill="' + p[1] + '"><rect x="0" y="160" width="130" height="40"/><rect x="170" y="120" width="150" height="80"/><rect x="100" y="96" width="70" height="14" rx="3"/><rect x="214" y="62" width="64" height="14" rx="3"/></g><rect x="40" y="126" width="26" height="34" rx="6" fill="' + p[2] + '"/><circle cx="238" cy="42" r="8" fill="' + p[2] + '"/>'; }
  ];
  function artSvg(i) {
    return '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + ART[i % ART.length](PAL[i % PAL.length]) + "</svg>";
  }
  function thumbHtml(proj, i) {
    if (proj.thumb) { return '<img src="' + esc(proj.thumb) + '" alt="" loading="lazy" data-art="' + i + '">'; }
    return artSvg(i);
  }
  function wireImgFallback(scope) {
    $$("img[data-art]", scope).forEach(function (img) {
      img.addEventListener("error", function () { img.parentNode.innerHTML = artSvg(+img.getAttribute("data-art")); }, { once: true });
    });
  }

  /* ---------- Work cards ---------- */
  var cardsEl = $("#cards");
  var tilts = [-1.8, 1.4, -1, 1.9, -1.5, 1.1, -0.8];
  cardsEl.innerHTML = S.projects.map(function (p, i) {
    return '<button class="card" type="button" data-i="' + i + '" style="--r:' + tilts[i % tilts.length] + "deg;--i:" + i + '" aria-haspopup="dialog">' +
      '<span class="card-thumb">' + thumbHtml(p, i) + "</span>" +
      '<span class="card-title">' + esc(p.title) + "</span>" +
      '<span class="card-meta">' + esc([p.role, p.year, p.duration].filter(Boolean).join(" · ")) + "</span>" +
      "</button>";
  }).join("");
  wireImgFallback(cardsEl);

  /* ---------- Skills: chips around the pen (kept clear of the pen itself) ---------- */
  (function () {
    var n = S.skills.length, penDeg = -26, margin = 30;
    var nA = Math.ceil(n / 2), nB = n - nA;
    var arcs = [
      { from: penDeg + margin, span: 180 - 2 * margin, count: nA },
      { from: penDeg + 180 + margin, span: 180 - 2 * margin, count: nB }
    ];
    var pts = [];
    arcs.forEach(function (arc) {
      for (var k = 0; k < arc.count; k++) {
        var a = (arc.from + ((k + 0.5) / arc.count) * arc.span) * Math.PI / 180;
        pts.push({ ux: Math.cos(a), uy: Math.sin(a) });
      }
    });
    $("#orbit").innerHTML = S.skills.map(function (s, i) {
      var p = pts[i], tilt = ((i * 37) % 9) - 4;
      return '<li style="--n:' + i + ";--ux:" + p.ux.toFixed(3) + ";--uy:" + p.uy.toFixed(3) + ";--tilt:" + tilt + 'deg">' + esc(s.name) + "</li>";
    }).join("");
  })();

  /* ---------- Contact buttons ---------- */
  $("#pills").innerHTML = S.contact.filter(function (c) { return c.href; }).map(function (c) {
    var ext = /^https?:/.test(c.href);
    var extra = c.download ? ' download="' + esc(c.download) + '"' : (ext ? ' target="_blank" rel="noopener"' : "");
    return '<li><a class="pill' + (c.download ? " pill-main" : "") + '" href="' + esc(c.href) + '"' + extra + ">" +
      esc(c.label) + (ext ? ' <span aria-hidden="true">&nbsp;&#8599;</span><span class="sr">(opens in a new tab)</span>' : "") + "</a></li>";
  }).join("");
  (function () {
    var e = S.contact.filter(function (c) { return c.id === "email"; })[0];
    if (e) { $("#email-line").innerHTML = '<a href="' + esc(e.href) + '">' + esc(e.display || e.href.replace("mailto:", "")) + "</a>"; }
  })();
  $("#year").textContent = new Date().getFullYear();

  /* ==========================================================
     Drawers
     "stack" mode works like a real cabinet: every part sits at a fixed spot, an open
     drawer slides out OVER the ones below it, and closing it just uncovers them again.
     The stage's height follows whatever is showing.
     ========================================================== */
  var slots = $$(".slot");
  var stage = $("#stage");
  var GAP = 16;
  var yPos = [];
  var drawers = $$("[data-drawer]").map(function (el) {
    return {
      el: el, open: false, opened: false,
      slot: el.closest(".slot"),
      pull: $(".pull", el), front: $(".drawer-front", el), tray: $(".tray-inner", el),
      cue: $(".cue-text", el), name: el.getAttribute("data-name") || "", next: el.getAttribute("data-next") || ""
    };
  });

  function noAnim() {
    root.classList.add("no-anim");
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.remove("no-anim"); }); });
  }
  function cueText(d) {
    if (d.open) { return MODE === "stack" ? "push in to see " + d.next.toLowerCase() : "push in to close"; }
    return MODE === "stack" ? "pull out to see " + d.name.toLowerCase() : "pull out to open";
  }
  function updateCover() {
    if (MODE !== "stack") return;
    var anyOpen = false;
    slots.forEach(function (s, i) {
      var covered = anyOpen;
      s.classList.toggle("is-covered", covered);
      if (covered) { s.setAttribute("inert", ""); s.setAttribute("aria-hidden", "true"); }
      else { s.removeAttribute("inert"); s.removeAttribute("aria-hidden"); }
      if (drawers[i] && drawers[i].open) anyOpen = true;
    });
  }
  function layoutStage(animate) {
    if (MODE !== "stack") return;
    var closedH = [], ext = [], acc = 0, i, d;
    for (i = 0; i < slots.length; i++) {
      d = drawers[i];
      if (d) {
        closedH[i] = d.front.offsetHeight;
        ext[i] = closedH[i] + d.tray.firstElementChild.offsetHeight;
      } else {
        closedH[i] = $(".base", slots[i]).offsetHeight;
        ext[i] = closedH[i];
      }
      yPos[i] = acc;
      acc += closedH[i] + GAP;
      slots[i].style.setProperty("--y", yPos[i] + "px");
      slots[i].style.setProperty("--z", String(slots.length - i));
    }
    var last = slots.length - 1, floor = yPos[last] + closedH[last], H;
    if (drawers[0] && drawers[0].open) H = yPos[0] + ext[0];
    else if (drawers[1] && drawers[1].open) H = yPos[1] + ext[1];
    else H = floor;
    H = Math.max(H, floor);
    if (animate) {
      stage.style.transitionDelay = H < stage.offsetHeight ? ".3s" : "0s";
    } else {
      stage.style.transition = "none";
    }
    stage.style.height = H + "px";
    if (!animate) { void stage.offsetHeight; stage.style.transition = ""; }
  }
  function setOpen(d, open, instant) {
    if (instant) noAnim();
    d.open = open;
    if (open) d.opened = true;
    d.el.classList.toggle("is-open", open);
    d.pull.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) d.tray.removeAttribute("inert"); else d.tray.setAttribute("inert", "");
    d.cue.textContent = cueText(d);
    updateCover();
    layoutStage(!instant);
    setTimeout(updateTabs, instant ? 30 : 950);
  }
  function toggle(d) {
    var willOpen = !d.open, i = drawers.indexOf(d);
    d.pull.classList.remove("nudge");
    setOpen(d, willOpen);
    if (MODE === "stack") {
      // bring the drawer's front to the top of the screen so you see what slid out / got uncovered
      var top = stage.getBoundingClientRect().top + window.pageYOffset + yPos[i] - NAV_H - 14;
      if (willOpen || window.pageYOffset > top) {
        window.scrollTo({ top: Math.max(0, top), behavior: reduced ? "auto" : "smooth" });
      }
    }
  }
  drawers.forEach(function (d) {
    d.pull.addEventListener("click", function (e) { e.stopPropagation(); toggle(d); });
    d.front.addEventListener("click", function (e) { if (!e.target.closest(".pull")) toggle(d); });
  });

  // starting state
  if (MODE === "stack") {
    drawers.forEach(function (d) { setOpen(d, true, true); });
    layoutStage(false);
    var relayout = function () { layoutStage(true); };
    if ("ResizeObserver" in window) {
      var ro = new ResizeObserver(relayout);
      $$(".tray-bed, .drawer-front, .base").forEach(function (el) { ro.observe(el); });
    }
    window.addEventListener("resize", relayout);
    window.addEventListener("load", relayout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
    // cards drop in the first time the drawer scrolls into view
    if (!reduced && "IntersectionObserver" in window) {
      cardsEl.classList.add("reveal-pending");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { cardsEl.classList.remove("reveal-pending"); io.disconnect(); }
        });
      }, { threshold: 0.12 });
      io.observe(cardsEl);
    }
  } else {
    drawers.forEach(function (d) { setOpen(d, false, true); });
  }

  // scroll mode: drawers open one after another as you scroll down
  var ticking = false;
  function checkDrawers() {
    ticking = false;
    for (var i = 0; i < drawers.length; i++) {
      var d = drawers[i];
      if (d.opened) continue;
      if (i > 0 && !drawers[i - 1].opened) break;
      if (d.el.getBoundingClientRect().top < window.innerHeight * 0.78) setOpen(d, true);
      break;
    }
  }
  function requestCheck() { if (!ticking) { ticking = true; requestAnimationFrame(checkDrawers); } }
  if (MODE === "scroll") {
    window.addEventListener("scroll", requestCheck, { passive: true });
    window.addEventListener("resize", requestCheck);
    drawers.forEach(function (d) {
      d.el.addEventListener("transitionend", function (e) { if (e.target.classList.contains("tray")) requestCheck(); });
    });
    if (reduced) { drawers.forEach(function (d) { setOpen(d, true, true); }); } else { requestCheck(); }
  }

  /* ---------- Navigation (tabs, sticky note, home) ---------- */
  function goTo(id) {
    var d0 = drawers[0], d1 = drawers[1];
    if (MODE === "stack") {
      if (id === "work") { if (!d0.open) setOpen(d0, true); }
      else if (id === "about") { if (d0.open) setOpen(d0, false, true); if (!d1.open) setOpen(d1, true); }
      else if (id === "contact") { if (d0.open) setOpen(d0, false, true); if (d1.open) setOpen(d1, false, true); }
    } else {
      var idx = { work: 0, about: 1, contact: drawers.length };
      if (id in idx) {
        drawers.forEach(function (d, i) { if (i < idx[id] && !d.opened) setOpen(d, true, true); });
        if (id !== "contact" && !drawers[idx[id]].open) setOpen(drawers[idx[id]], true);
      }
    }
    var target = id === "top" ? null : document.getElementById(id);
    var y = target ? target.getBoundingClientRect().top + window.pageYOffset - NAV_H - 10 : 0;
    window.scrollTo({ top: Math.max(0, y), behavior: reduced ? "auto" : "smooth" });
  }
  $$("[data-goto]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); goTo(a.getAttribute("data-goto")); });
  });
  $(".skip").addEventListener("click", function (e) { e.preventDefault(); goTo("work"); });

  /* current tab highlight (only counts sections you can actually see) */
  var tabLinks = {};
  $$(".topnav a").forEach(function (a) { tabLinks[a.getAttribute("data-goto")] = a; });
  function updateTabs() {
    var mid = window.innerHeight * 0.45, cur = null;
    ["work", "about", "contact"].forEach(function (id, i) {
      if (slots[i].classList.contains("is-covered")) return;
      var r = document.getElementById(id).getBoundingClientRect();
      if (r.height > 0 && r.top < mid) cur = id;
    });
    Object.keys(tabLinks).forEach(function (k) { tabLinks[k].setAttribute("aria-current", k === cur ? "true" : "false"); });
  }
  window.addEventListener("scroll", updateTabs, { passive: true });
  updateTabs();

  /* ==========================================================
     Dialogs
     ========================================================== */
  function openDialog(dlg) { if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", ""); }
  $$("dialog").forEach(function (dlg) {
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    $$("[data-close]", dlg).forEach(function (b) { b.addEventListener("click", function () { dlg.close(); }); });
  });

  /* project dialog: section list on the left, write-up on the right */
  var pd = $("#project-dialog"), pdMain = $("#pd-main"), pdNav = $("#pd-nav"), secEls = [];
  function fill(t, p) {
    return String(t).replace(/\{blurb\}/g, p.blurb || "").replace(/\{role\}/g, (p.role || "designer").toLowerCase()).replace(/\{tools\}/g, (p.tools || []).join(", ") || "my usual tools");
  }
  function spy() {
    var st = pdMain.scrollTop + 90, cur = 0;
    secEls.forEach(function (el, k) { if (el.offsetTop <= st) cur = k; });
    if (secEls.length && pdMain.scrollTop + pdMain.clientHeight >= pdMain.scrollHeight - 4) cur = secEls.length - 1;
    $$("button", pdNav).forEach(function (b, k) {
      var on = k === cur;
      b.setAttribute("aria-current", on ? "true" : "false");
      if (on && pdNav.scrollWidth > pdNav.clientWidth) { pdNav.scrollLeft = b.offsetLeft - pdNav.clientWidth / 2 + b.offsetWidth / 2; }
    });
  }
  pdMain.addEventListener("scroll", spy, { passive: true });
  pdNav.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var el = document.getElementById(b.getAttribute("data-target"));
    if (el) pdMain.scrollTo({ top: Math.max(0, el.offsetTop - 12), behavior: reduced ? "auto" : "smooth" });
  });
  /* one block of a project section: optional heading, buttons, paragraphs, bullets, facts, steps,
     loop diagram, video, YouTube, pictures */
  function figHtml(f, layout) {
    var cap = f.caption ? "<figcaption>" + esc(f.caption) + "</figcaption>" : "";
    return '<figure class="pd-shot"><img src="' + esc(f.src) + '" alt="' + esc(f.alt || f.caption || "") + '" loading="lazy" data-zoom="1">' + cap + "</figure>";
  }
  /* a loop of up to 6 steps drawn as a ring: 1 2 3 across the top, 4 5 6 back along the bottom */
  function loopHtml(lp) {
    var h = '<div class="pd-loop" role="img" aria-label="' + esc(lp.steps.map(function (st, n) { return (n + 1) + ". " + st.title; }).join(", ") + ", then " + (lp.center || "repeat")) + '">';
    lp.steps.forEach(function (st, n) {
      h += '<div class="pd-loop-node pd-loop-n' + (n + 1) + '" aria-hidden="true"><span class="pd-loop-num">' + (n + 1) + "</span><b>" + esc(st.title) + "</b><span>" + esc(st.text) + "</span></div>";
    });
    h += '<div class="pd-loop-down" aria-hidden="true"></div><div class="pd-loop-up" aria-hidden="true"></div>';
    if (lp.center) h += '<div class="pd-loop-center" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>' + esc(lp.center) + "</span></div>";
    return h + "</div>";
  }
  function blockHtml(b, p, i, k, sub) {
    var h = "";
    if (sub && b.heading) h += '<h5 class="pd-sub">' + esc(b.heading) + "</h5>";
    /* buttons without a url yet stay hidden until one is filled in */
    var btns = (b.links || []).filter(function (l) { return l.url; });
    if (btns.length) h += '<div class="pd-links pd-links-inline">' + btns.map(function (l, n) {
      return '<a class="btn' + (n ? " btn-ghost" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " &#8599;</a>";
    }).join("") + "</div>";
    (b.text || []).forEach(function (t) { h += "<p>" + esc(fill(t, p)) + "</p>"; });
    if (b.bullets && b.bullets.length) h += '<ul class="pd-list">' + b.bullets.map(function (x) { return "<li>" + esc(fill(x, p)) + "</li>"; }).join("") + "</ul>";
    if (b.facts && b.facts.length) h += '<dl class="pd-facts">' + b.facts.map(function (f) { return "<div><dt>" + esc(f.k) + "</dt><dd>" + esc(f.v) + "</dd></div>"; }).join("") + "</dl>";
    if (b.steps && b.steps.length) h += '<ol class="pd-steps">' + b.steps.map(function (st) { return "<li><b>" + esc(st.title) + "</b><span>" + esc(st.text) + "</span></li>"; }).join("") + "</ol>";
    if (b.loop && b.loop.steps) h += loopHtml(b.loop);
    if (b.video) {
      h += '<figure class="pd-shot pd-video"><video src="' + esc(b.video.src) + '" poster="' + esc(b.video.poster || "") + '" ' + (reduced ? "" : "autoplay ") + 'loop muted playsinline controls preload="metadata" aria-label="' + esc(b.video.alt || "") + '"></video></figure>';
    }
    if (b.youtube) {
      /* accepts a youtu.be / youtube.com link or the bare video id */
      var yt = (b.youtube.url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/) || [])[1] || b.youtube.url;
      /* opened by double-clicking index.html there is no web address to send, and YouTube
         refuses to play embeds without one (Error 153), so link out to YouTube instead */
      if (location.protocol === "file:") h += '<figure class="pd-shot pd-video pd-yt"><a class="pd-yt-link" href="https://www.youtube.com/watch?v=' + esc(yt) + '" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/' + esc(yt) + '/hqdefault.jpg" alt="' + esc(b.youtube.title || "Video") + '"><span>Watch on YouTube &#8599;</span></a></figure>';
      else h += '<figure class="pd-shot pd-video pd-yt"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(yt) + '?rel=0" title="' + esc(b.youtube.title || "Video") + '" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></figure>';
    }
    if (b.image) h += '<figure class="pd-fig"><img src="' + esc(b.image) + '" alt="" loading="lazy" data-art="' + (i + k + 1) + '"></figure>';
    else if (b.art) h += '<figure class="pd-fig">' + artSvg(i + k + 1) + "</figure>";
    if (b.figures && b.figures.length) {
      var lay = b.figLayout || (b.figures.length > 2 ? "masonry" : "stack");
      h += '<div class="pd-gal pd-gal-' + lay + '">' + b.figures.map(figHtml).join("") + "</div>";
    }
    return h;
  }
  /* click a picture to see it large */
  var lb = $("#lightbox");
  $("#pd-sections").addEventListener("click", function (e) {
    var img = e.target.closest("img[data-zoom]");
    if (!img) return;
    $("#lb-img").src = img.currentSrc || img.src;
    $("#lb-img").alt = img.alt;
    var cap = img.parentNode.querySelector("figcaption");
    $("#lb-cap").textContent = cap ? cap.textContent : img.alt;
    openDialog(lb);
  });

  cardsEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".card");
    if (!btn) return;
    var i = +btn.getAttribute("data-i"), p = S.projects[i];
    $("#pd-thumb").innerHTML = thumbHtml(p, i);
    /* thumbPos moves the header picture inside its frame, e.g. "50% 5%" shows more of the top */
    var headImg = $("#pd-thumb img");
    if (headImg && p.thumbPos) headImg.style.objectPosition = p.thumbPos;
    wireImgFallback($("#pd-thumb"));
    $("#pd-title").textContent = p.title;
    $("#pd-meta").textContent = [p.role, p.year, p.duration].filter(Boolean).join(" \u00b7 ");
    $("#pd-tools").innerHTML = (p.tools || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    var links = (p.links || []).map(function (l, k) {
      return '<a class="btn' + (k ? " btn-ghost" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " &#8599;</a>";
    }).join("");
    $("#pd-links").innerHTML = links;
    $("#pd-links-end").innerHTML = links;
    var secs = p.sections || S.projectSections || [];
    pdNav.innerHTML = secs.map(function (sc, k) {
      return '<li><button type="button" data-target="pd-s-' + k + '"><span class="n">' + (k < 9 ? "0" : "") + (k + 1) + "</span><span>" + esc(sc.title) + "</span></button></li>";
    }).join("");
    $("#pd-sections").innerHTML = secs.map(function (sc, k) {
      var h = '<section class="pd-sec" id="pd-s-' + k + '" aria-labelledby="pd-s-' + k + '-h"><h4 id="pd-s-' + k + '-h">' + esc(sc.title) + "</h4>";
      h += blockHtml(sc, p, i, k, false);
      (sc.blocks || []).forEach(function (b) { h += blockHtml(b, p, i, k, true); });
      return h + "</section>";
    }).join("");
    wireImgFallback($("#pd-sections"));
    /* "row" galleries: each picture gets width in proportion to its shape, so all end up the same height */
    $$(".pd-gal-row img", pdMain).forEach(function (img) {
      function size() { if (img.naturalWidth) img.parentNode.style.flexGrow = img.naturalWidth / img.naturalHeight; }
      if (img.complete) size(); else img.addEventListener("load", size);
    });
    secEls = $$(".pd-sec", pdMain);
    openDialog(pd);
    pdMain.scrollTop = 0;
    spy();
  });

  /* skills: hovering the pen (mouse) previews the chips, clicking opens the details */
  $("#sk-intro").textContent = S.skillsIntro || "";
  $("#skill-list").innerHTML = S.skills.map(function (s) {
    var dots = "";
    for (var k = 1; k <= 5; k++) dots += '<i class="' + (k <= s.level ? "on" : "") + '"></i>';
    return '<li><div class="sk-top"><span class="sk-name">' + esc(s.name) + '</span><span class="sk-cat">' + esc(s.cat) + "</span></div>" +
      '<div class="sk-dots" role="img" aria-label="' + s.level + ' out of 5">' + dots + '</div><p class="sk-note">' + esc(s.note) + "</p></li>";
  }).join("");
  // one click (or tap) opens the details; the pen wiggles by itself so people know to try it
  $("#open-skills").addEventListener("click", function (e) {
    e.stopPropagation();
    openDialog($("#skills-dialog"));
  });

  /* sketchbook dialog */
  var A = S.about;
  $("#page-l").innerHTML = "<h3>" + esc(A.greeting) + "</h3>" + A.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
  $("#page-r").innerHTML =
    '<h3>at a glance</h3><ul class="glance">' +
    A.glance.map(function (g) { return "<li><b>" + esc(g.k) + "</b><span>" + esc(g.v) + "</span></li>"; }).join("") +
    '</ul><a class="btn" href="' + esc(A.resume) + '" download="' + esc(A.resumeFileName || "resume.pdf") + '">Download resume &#8595;</a>' +
    '<br><span class="page-note">thanks for stopping by!</span>';

  var book = $("#book-dialog"), spread = $("#spread"), flipTimer;
  $("#open-book").addEventListener("click", function () {
    spread.classList.remove("is-open");
    openDialog(book);
    clearTimeout(flipTimer);
    flipTimer = setTimeout(function () { spread.classList.add("is-open"); }, reduced ? 0 : 300);
  });
  book.addEventListener("close", function () { clearTimeout(flipTimer); spread.classList.remove("is-open"); });
})();
