(function () {
  "use strict";

  var button = document.getElementById("back-to-top");
  if (!button) {
    return;
  }

  function updateButton() {
    var visible = window.scrollY > 500;
    button.classList.toggle("is-visible", visible);
    button.setAttribute("aria-hidden", visible ? "false" : "true");
    button.setAttribute("tabindex", visible ? "0" : "-1");
  }

  button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth"
    });
  });

  window.addEventListener("scroll", updateButton, { passive: true });
  updateButton();
})();
