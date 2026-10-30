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

/* Add small legal links to existing footers without rewriting or moving site sections. */
(() => {
  const footer = document.querySelector('.footer-bottom');
  if (!footer || footer.querySelector('a[href$="privacy-policy.html"]')) return;
  const trailing = footer.lastElementChild;
  if (!trailing || trailing.tagName !== 'SPAN') return;
  const suffix = document.createElement('span');
  suffix.innerHTML = ' · <a href="./privacy-policy.html">Privacy Policy</a> · <a href="./terms-and-conditions.html">Terms &amp; Conditions</a>';
  suffix.querySelectorAll('a').forEach(link => {
    link.style.color = 'inherit';
    link.style.textDecoration = 'underline';
    link.style.textUnderlineOffset = '2px';
  });
  trailing.appendChild(suffix);
})();
