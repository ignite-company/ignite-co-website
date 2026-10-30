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

/* Display consistent business contact information on all other website pages. */
(() => {
  const footer = document.querySelector('.footer-bottom');
  if (!footer || footer.querySelector('[data-ignite-business-contact]')) return;
  const contact = document.createElement('span');
  contact.setAttribute('data-ignite-business-contact', '');
  contact.style.cssText = 'flex-basis:100%;text-align:center;line-height:1.7;';
  contact.innerHTML = 'Ignite Company LLC · 131 Main St., Hackensack, NJ · <a href="tel:+12019739748">(201) 973-9748</a> · <a href="mailto:asher.igniteco@gmail.com">asher.igniteco@gmail.com</a>';
  contact.querySelectorAll('a').forEach(a => { a.style.color = 'inherit'; a.style.textDecoration = 'underline'; a.style.textUnderlineOffset = '2px'; });
  footer.appendChild(contact);
})();
