"use strict";
(window.isRtl = window.Helpers.isRtl()),
  (window.isDarkStyle = window.Helpers.isDarkStyle()),
  (function () {
    const e = document.getElementById("navbarSupportedContent"),
      a = document.querySelector(".layout-navbar"),
      t = document.querySelectorAll(".navbar-nav .nav-link");
    setTimeout(function () {
      window.Helpers.initCustomOptionCheck();
    }, 1e3),
      "undefined" != typeof Waves &&
        (Waves.init(),
        Waves.attach(
          ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
          ["waves-light"]
        ),
        Waves.attach("[class*='btn-outline-']"),
        Waves.attach("[class*='btn-label-']"),
        Waves.attach(".pagination .page-item .page-link")),
      [].slice
        .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(function (t) {
          return new bootstrap.Tooltip(t);
        });
    function o(t) {
      "show.bs.collapse" == t.type || "show.bs.collapse" == t.type
        ? t.target.closest(".accordion-item").classList.add("active")
        : t.target.closest(".accordion-item").classList.remove("active");
    }
    [].slice.call(document.querySelectorAll(".accordion")).map(function (t) {
      t.addEventListener("show.bs.collapse", o),
        t.addEventListener("hide.bs.collapse", o);
    });
    function s() {
      e.classList.remove("show");
    }
    isRtl &&
      Helpers._addClass(
        "dropdown-menu-end",
        document.querySelectorAll("#layout-navbar .dropdown-menu")
      ),
      window.addEventListener("scroll", (t) => {
        10 < window.scrollY
          ? a.classList.add("navbar-active")
          : a.classList.remove("navbar-active");
      }),
      window.addEventListener("load", (t) => {
        10 < window.scrollY
          ? a.classList.add("navbar-active")
          : a.classList.remove("navbar-active");
      }),
      document.addEventListener("click", function (t) {
        e.contains(t.target) || s();
      }),
      t.forEach((e) => {
        e.addEventListener("click", (t) => {
          e.classList.contains("dropdown-toggle") ? t.preventDefault() : s();
        });
      }),
      isRtl &&
        Helpers._addClass(
          "dropdown-menu-end",
          document.querySelectorAll(".dropdown-menu")
        );
    var l = document.querySelectorAll(".nav-link.mega-dropdown"),
      l =
        (l &&
          l.forEach((t) => {
            new MegaDropdown(t);
          }),
        document.querySelector(".dropdown-style-switcher"));
    const n = document.documentElement.getAttribute("data-style");
    var i,
      c =
        localStorage.getItem(
          "templateCustomizer-" + templateName + "--Style"
        ) ||
        (window.templateCustomizer?.settings?.defaultStyle ?? "light");
    window.templateCustomizer &&
      l &&
      ([].slice
        .call(l.children[1].querySelectorAll(".dropdown-item"))
        .forEach(function (t) {
          t.classList.remove("active"),
            t.addEventListener("click", function () {
              var t = this.getAttribute("data-theme");
              "light" === t
                ? window.templateCustomizer.setStyle("light")
                : "dark" === t
                ? window.templateCustomizer.setStyle("dark")
                : window.templateCustomizer.setStyle("system");
            }),
            setTimeout(() => {
              t.getAttribute("data-theme") === n && t.classList.add("active");
            }, 1e3);
        }),
      (l = l.querySelector("i")),
      "light" === c
        ? (l.classList.add("ti-sun"),
          new bootstrap.Tooltip(l, {
            title: "Light Mode",
            fallbackPlacements: ["bottom"],
          }))
        : "dark" === c
        ? (l.classList.add("ti-moon-stars"),
          new bootstrap.Tooltip(l, {
            title: "Dark Mode",
            fallbackPlacements: ["bottom"],
          }))
        : (l.classList.add("ti-device-desktop-analytics"),
          new bootstrap.Tooltip(l, {
            title: "System Mode",
            fallbackPlacements: ["bottom"],
          }))),
      "system" === (i = c) &&
        (i = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"),
      [].slice
        .call(document.querySelectorAll("[data-app-" + i + "-img]"))
        .map(function (t) {
          var e = t.getAttribute("data-app-" + i + "-img");
          t.src = assetsPath + "img/" + e;
        });
  })();
