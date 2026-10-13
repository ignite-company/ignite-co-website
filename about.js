(() => {
  'use strict';
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (!toggle || !menu) return;
  function setOpen(open) {
    menu.hidden = !open;
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }
  setOpen(false);
  toggle.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) setOpen(false); });
})();