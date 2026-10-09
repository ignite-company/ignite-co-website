/* Ignite Co. conversion modal: move the existing form, never duplicate it. */
(() => {
  'use strict';
  const modal = document.getElementById('lead-modal');
  const panel = document.querySelector('#contact .contact-panel');
  const slot = document.getElementById('lead-modal-form-slot');
  const closeButton = document.getElementById('lead-modal-close');
  if (!modal || !panel || !slot || !closeButton) return;

  const originalParent = panel.parentNode;
  const originalNextSibling = panel.nextSibling;
  const pageContainers = [...document.querySelectorAll('header,main,footer')];
  let lastTrigger = null;
  let lockedScrollY = 0;

  function focusables() {
    return Array.from(modal.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'))
      .filter(el => el.getClientRects().length > 0 && !el.closest('[hidden]'));
  }

  function openModal(trigger) {
    if (!modal.hidden) return;
    lastTrigger = trigger || document.activeElement;
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    // Move the very same contact panel so all input IDs and form handlers remain unique.
    slot.appendChild(panel);
    modal.hidden = false;
    document.documentElement.classList.add('lead-modal-open');
    document.body.classList.add('lead-modal-open');
    document.body.style.top = '-' + lockedScrollY + 'px';
    for (const el of pageContainers) el.inert = true;
    const scroll = modal.querySelector('.lead-modal-scroll');
    if (scroll) scroll.scrollTop = 0;
    closeButton.focus({preventScroll:true});
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.documentElement.classList.remove('lead-modal-open');
    document.body.classList.remove('lead-modal-open');
    document.body.style.top = '';
    if (originalNextSibling && originalNextSibling.parentNode === originalParent) {
      originalParent.insertBefore(panel,originalNextSibling);
    } else {
      originalParent.appendChild(panel);
    }
    for (const el of pageContainers) el.inert = false;
    window.scrollTo({top: lockedScrollY, left:0,behavior:'instant'});
    if (lastTrigger && typeof lastTrigger.focus==='function') lastTrigger.focus({preventScroll:true});
  }

  // Every conversion CTA points to #contact as a progressive enhancement fallback.
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest('a[href]');
    if (!anchor || anchor.getAttribute('href') !== '#contact') return;
    event.preventDefault();
    openModal(anchor);
  });

  closeButton.addEventListener('click',closeModal);
  modal.addEventListener('click',(event) => {
    if (event.target.closest('[data-lead-modal-close]')) closeModal();
  });
  document.addEventListener('keydown',(event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const nodes = focusables();
    if (!nodes.length) { event.preventDefault(); closeButton.focus(); return; }
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();first.focus();
    }
  });

  // If an old bookmarked #contact URL is opened, keep native scrolling behavior;
  // only clicks on conversion links use the new modal.
})();
