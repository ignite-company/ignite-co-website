/* Close service menus when focus leaves or Escape is pressed. */
(() => {
  const menus = [...document.querySelectorAll(".nav-services, .mobile-services")];
  if (!menus.length) return;
  document.addEventListener("click", e => {
    for (const menu of menus) if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    for (const menu of menus) {
      if (menu.open) {
        menu.open = false;
        const summary = menu.querySelector("summary");
        if (summary) summary.focus();
      }
    }
  });
})();
