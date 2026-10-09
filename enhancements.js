
(() => {
  'use strict';
  // Loop the five-stage hero preview without any user input.
  const demoNext = document.getElementById('demo-next');
  if (demoNext) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    window.setInterval(() => {
      if (!document.hidden && !prefersReducedMotion.matches) demoNext.click();
    }, 3700);
  }

  const urls = [
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a3da1bb355a0e846b4dcd98.jpg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a3da1bbe4daecfbb48dc348.jpg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ac2de84c478ac5535cbb5c8.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ab1d29d825a8484f2e4fd10.jpeg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ab1d2b1ff484614db8c2449.jpeg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ab1d2c130b0f957cccf3e62.jpeg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ab1d2d1825a8484f2e4ffa8.jpeg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ac5206617216aa3b2a9f59f.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6ac5205817216aa3b2a9f3a8.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a9c7797e29b3baf97d6ef7c.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a9c777be29b3baf97d6ed01.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a3d6f4df8473fa2ae02f142.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a3d6f4ddb2129be18384944.png',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a2f517ab9af5312bc2f2c37.jpg',
    'https://assets.cdn.filesafe.space/bF1dT8IAVuvat84LkAVe/media/6a2f517ab9af5312bc2f2c3d.jpg'
  ];
  const track = document.getElementById('proof-track');
  const scroller = document.getElementById('proof-scroller');
  const toggle = document.getElementById('proof-toggle');
  const dialog = document.getElementById('proof-dialog');
  const largeImage = document.getElementById('proof-full-image');
  const close = document.getElementById('proof-dialog-close');
  if (!track || !scroller || !dialog || !largeImage || !close || !toggle) return;

  function buildGroup(duplicate) {
    const group = document.createElement('div');
    group.className = 'proof-group';
    if (duplicate) group.setAttribute('aria-hidden','true');
    urls.forEach((url,i)=>{
      const slide = document.createElement('button');
      slide.className = 'proof-slide';
      slide.type = 'button';
      slide.dataset.proofIndex = String(i);
      slide.tabIndex = duplicate ? -1 : 0;
      if (!duplicate) slide.setAttribute('aria-label','View Ignite Co. proof image '+(i+1)+' of '+urls.length);
      const img = document.createElement('img');
      img.src = url;
      img.loading = i < 3 ? 'eager' : 'lazy';
      img.decoding = 'async';
      img.alt = duplicate ? '' : 'Ignite Co. project proof screenshot '+(i+1);
      img.onerror = () => { slide.style.display='none'; };
      const zoom = document.createElement('span');
      zoom.className = 'proof-zoom';
      zoom.textContent = 'Click to enlarge ↗';
      slide.append(img,zoom);
      group.appendChild(slide);
    });
    return group;
  }
  track.append(buildGroup(false),buildGroup(true));

  const setPaused = (paused) => {
    scroller.classList.toggle('is-paused',paused);
    toggle.textContent = paused ? '▶ Resume gallery' : 'Ⅱ Pause gallery';
    toggle.setAttribute('aria-pressed',String(paused));
  };
  toggle.addEventListener('click',()=>setPaused(!scroller.classList.contains('is-paused')));

  let lastFocus = null;
  track.addEventListener('click',event=>{
    const slide = event.target.closest('.proof-slide');
    if(!slide) return;
    const index = Number(slide.dataset.proofIndex);
    if (!Number.isInteger(index) || !urls[index]) return;
    lastFocus = document.activeElement;
    largeImage.src=urls[index];
    largeImage.alt='Full-size Ignite Co. proof image '+(index+1);
    dialog.hidden=false;
    document.body.classList.add('proof-dialog-open');
    scroller.classList.add('is-paused');
    close.focus();
  });
  const closeDialog=()=>{
    dialog.hidden=true;
    document.body.classList.remove('proof-dialog-open');
    if(toggle.getAttribute('aria-pressed')!=='true')scroller.classList.remove('is-paused');
    if (lastFocus && typeof lastFocus.focus==='function') lastFocus.focus();
  };
  close.addEventListener('click',closeDialog);
  dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.hidden)closeDialog()});
})();
