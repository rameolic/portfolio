(function () {
  "use strict";

  var PROFILE = (window.PORTFOLIO && window.PORTFOLIO.profile) || {};
  var RESUME_LOCAL = PROFILE.resumeLocal || "./assets/pdf/resume.pdf";
  var RESUME_FALLBACK = PROFILE.resumeFallback || "#";

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function assetBase() {
    // Case study pages live one level deeper
    var inCaseStudy = /\/case-studies\//.test(window.location.pathname);
    return inCaseStudy ? "../assets/" : "./assets/";
  }

  function resolveResumePath(path) {
    if (!path) return path;
    if (/^https?:/i.test(path)) return path;
    if (path.indexOf("./assets/") === 0) {
      return assetBase() + path.replace("./assets/", "");
    }
    if (path.indexOf("../assets/") === 0) return path;
    return path;
  }

  function initTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem("rk-theme");
    } catch (e) {}
    var prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    $all("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
          localStorage.setItem("rk-theme", next);
        } catch (e) {}
        btn.setAttribute(
          "aria-label",
          next === "dark" ? "Switch to light theme" : "Switch to dark theme"
        );
      });
    });
  }

  function initNav() {
    var toggle = $("[data-menu-toggle]");
    var drawer = $("[data-nav-drawer]");
    if (toggle && drawer) {
      toggle.addEventListener("click", function () {
        var open = drawer.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      $all("a", drawer).forEach(function (a) {
        a.addEventListener("click", function () {
          drawer.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    var links = $all(".nav-links a[href^='#'], [data-nav-drawer] a[href^='#']");
    var sections = links
      .map(function (a) {
        var id = a.getAttribute("href");
        return id && id.charAt(0) === "#" ? $(id) : null;
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;
          links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );
    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }

  function initExpandables() {
    $all("[data-expand]").forEach(function (btn) {
      var target = btn.closest("[data-expandable]");
      if (!target) return;
      btn.setAttribute("aria-expanded", target.classList.contains("open") ? "true" : "false");
      btn.addEventListener("click", function () {
        var open = target.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  function probeResume(url) {
    return fetch(url, { method: "HEAD", cache: "no-store" })
      .then(function (res) {
        return res.ok;
      })
      .catch(function () {
        return false;
      });
  }

  function initResumeLinks() {
    var local = resolveResumePath(RESUME_LOCAL);
    var fallback = RESUME_FALLBACK;
    var links = $all("[data-resume-link]");
    if (!links.length) return;

    links.forEach(function (a) {
      a.setAttribute("href", fallback);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    });

    probeResume(local).then(function (ok) {
      if (!ok) return;
      links.forEach(function (a) {
        a.setAttribute("href", local);
        a.setAttribute("download", "Ramkumar_Koppula_Resume.pdf");
        a.removeAttribute("target");
      });
    });
  }

  function initReveal() {
    var nodes = $all(".reveal");
    if (!nodes.length) return;
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  function initLightbox() {
    var triggers = $all("[data-lightbox]");
    if (!triggers.length) return;

    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image preview");
    overlay.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close image preview">&times;</button>' +
      '<div><img alt="" /><p class="lightbox-caption"></p></div>';
    document.body.appendChild(overlay);

    var img = $("img", overlay);
    var caption = $(".lightbox-caption", overlay);
    var closeBtn = $(".lightbox-close", overlay);

    function close() {
      overlay.classList.remove("open");
      img.removeAttribute("src");
    }

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var src = btn.getAttribute("data-full") || btn.getAttribute("data-lightbox");
        var alt = btn.getAttribute("data-alt") || "";
        var cap = btn.getAttribute("data-caption") || "";
        img.src = src;
        img.alt = alt;
        caption.textContent = cap;
        overlay.classList.add("open");
        closeBtn.focus();
      });
    });
  }

  function imageSrc(name, ext) {
    return assetBase() + "img/" + name + "." + ext;
  }

  function initDynamicBits() {
    // Optional: hydrate gallery from PORTFOLIO if placeholder exists
    var galleryRoot = $("[data-gallery-root]");
    if (!galleryRoot || !window.PORTFOLIO || !window.PORTFOLIO.gallery) return;
    if (galleryRoot.getAttribute("data-hydrated") === "true") return;

    var html = window.PORTFOLIO.gallery
      .map(function (item) {
        var webp = imageSrc(item.src, "webp");
        var png = imageSrc(item.src, "png");
        return (
          '<button type="button" class="gallery-item" role="listitem" data-lightbox="' +
          png +
          '" data-full="' +
          png +
          '" data-alt="' +
          item.alt.replace(/"/g, "&quot;") +
          '" data-caption="' +
          item.caption.replace(/"/g, "&quot;") +
          '" aria-label="Enlarge: ' +
          item.caption.replace(/"/g, "&quot;") +
          '">' +
          "<figure>" +
          "<picture>" +
          '<source type="image/webp" srcset="' +
          webp +
          '" />' +
          '<img loading="lazy" width="640" height="400" src="' +
          png +
          '" alt="' +
          item.alt.replace(/"/g, "&quot;") +
          '" />' +
          "</picture>" +
          "<figcaption>" +
          item.caption +
          "</figcaption>" +
          "</figure>" +
          "</button>"
        );
      })
      .join("");
    galleryRoot.innerHTML = html;
    galleryRoot.setAttribute("data-hydrated", "true");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initExpandables();
    initResumeLinks();
    initReveal();
    initDynamicBits();
    initLightbox();
  });
})();
