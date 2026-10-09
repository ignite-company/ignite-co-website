(() => {
  const steps = [
    {
      "icon": "▦",
      "tag": "INQUIRIES ORGANIZED",
      "symbol": "▦",
      "title": "Every opportunity enters a clear system.",
      "description": "An AC service request comes in. Sarah's details land in one pipeline instead of getting buried in messages or missed calls.",
      "footer": "Inquiry captured and assigned",
      "mini": "Better systems start with visibility",
      "detail": "Know which opportunities need action.",
      "time": "Day 1",
      "context": "Homeowner reaches out"
    },
    {
      "icon": "☎",
      "tag": "FAST FIRST RESPONSE",
      "symbol": "☎",
      "title": "Respond while the opportunity is fresh.",
      "description": "The right first-contact workflow helps Sarah get a timely answer, without relying on an owner to remember every follow-up.",
      "footer": "Response workflow activated",
      "mini": "Less manual chasing for your team",
      "detail": "Speed and consistency help more conversations move.",
      "time": "Minutes later",
      "context": "Conversation started"
    },
    {
      "icon": "⌕",
      "tag": "QUALIFY AND QUOTE",
      "symbol": "⌕",
      "title": "Turn interest into a real sales opportunity.",
      "description": "Sarah's needs are recorded, the next step is clear, and an estimate is prepared. Your team can see exactly where the job stands.",
      "footer": "Estimate and next step tracked",
      "mini": "From inquiry to decision",
      "detail": "A reliable process replaces scattered notes.",
      "time": "After contact",
      "context": "Estimate prepared"
    },
    {
      "icon": "◷",
      "tag": "RECOVER STALLED WORK",
      "symbol": "◷",
      "title": "Not ready today? Don't lose the job.",
      "description": "Sarah needs time to decide and her quote stays open. Timely check-ins keep the estimate moving without pushing or being forgotten.",
      "footer": "Open estimate follow-up scheduled",
      "mini": "Revenue recovery stays active",
      "detail": "Delayed buyers get attention when the timing fits.",
      "time": "Days or weeks later",
      "context": "Pending estimate"
    },
    {
      "icon": "✓",
      "tag": "FIRST JOB BOOKED",
      "symbol": "✓",
      "title": "A stronger process turns into a booked job.",
      "description": "Sarah moves forward. Her service is scheduled and the pipeline updates so no handoff or next step falls through.",
      "footer": "First job booked and recorded",
      "mini": "Conversion is the first win",
      "detail": "The goal is booked work, not just more inquiries.",
      "time": "When ready",
      "context": "Job on the calendar"
    },
    {
      "icon": "★",
      "tag": "JOB COMPLETED",
      "symbol": "★",
      "title": "Deliver great work. Keep the relationship.",
      "description": "Once the job is complete, customer details and service history stay organized. A thoughtful thank-you or review request keeps the experience connected.",
      "footer": "Completed job enters customer care",
      "mini": "The customer is now an asset",
      "detail": "Work completed is not a relationship finished.",
      "time": "After service",
      "context": "Customer relationship"
    },
    {
      "icon": "↻",
      "tag": "PAST CUSTOMER FOLLOW-UP",
      "symbol": "↻",
      "title": "Two months later, stay top of mind.",
      "description": "A relevant follow-up checks in with Sarah. When another service need comes up, she already knows the business and who to call.",
      "footer": "Customer re-engagement scheduled",
      "mini": "Past jobs can create new opportunities",
      "detail": "Stay remembered without another manual task.",
      "time": "2 months later",
      "context": "Existing customer"
    },
    {
      "icon": "▣",
      "tag": "REPEAT JOB BOOKED",
      "symbol": "▣",
      "title": "The same customer books again.",
      "description": "Sarah schedules another service. The system tracks returning-customer work and makes it easy for the team to keep delivering.",
      "footer": "Returning customer's job booked",
      "mini": "One customer, more lifetime value",
      "detail": "The first booking becomes the start of growth.",
      "time": "Next service",
      "context": "Repeat booking"
    },
    {
      "icon": "∞",
      "tag": "GROWTH ENGINE CONTINUES",
      "symbol": "∞",
      "title": "Better first bookings. Stronger long-term growth.",
      "description": "New inquiries get handled, pending estimates stay visible, and past customers receive relevant follow-up. Reviews and referrals support the next wave of opportunities.",
      "footer": "Conversion and retention systems connected",
      "mini": "One engine for today and tomorrow",
      "detail": "Get the job, keep the customer, earn the next one.",
      "time": "Always on",
      "context": "Continuous growth"
    }
  ];

  let current=0;
  const els={next:document.getElementById('demo-next'),reset:document.getElementById('demo-reset'),icon:document.getElementById('activity-icon'),tag:document.getElementById('activity-tag'),symbol:document.getElementById('visual-symbol'),title:document.getElementById('activity-title'),description:document.getElementById('activity-description'),footer:document.getElementById('activity-footer'),mini:document.getElementById('mini-title'),detail:document.getElementById('mini-description'),progress:document.getElementById('progress-fill'),counter:document.getElementById('step-counter'),label:document.getElementById('progress-label'),time:document.getElementById('activity-time'),stage:document.getElementById('journey-created')};
  function render(){const d=steps[current];els.icon.textContent=d.icon;els.tag.textContent=d.tag;els.symbol.textContent=d.symbol;els.title.textContent=d.title;els.description.textContent=d.description;els.footer.textContent=d.footer;els.mini.textContent=d.mini;els.detail.textContent=d.detail;els.progress.style.width=(((current+1)/steps.length)*100)+'%';els.counter.textContent=String(current+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');els.label.textContent='Step '+(current+1)+' of '+steps.length; if(els.time)els.time.textContent=d.time;if(els.stage)els.stage.textContent=d.context;els.next.innerHTML=current===steps.length-1?'Loop again <span aria-hidden="true">↺</span>':'Next step <span aria-hidden="true">→</span>';document.querySelectorAll('.journey-step').forEach((item,i)=>{item.classList.toggle('active',i===current);item.classList.toggle('completed',i<current);let state=item.querySelector('.step-state');state.textContent=i<current?'✓':''})}
  els.next.addEventListener('click',()=>{current=current===steps.length-1?0:current+1;render()});els.reset.addEventListener('click',()=>{current=0;render()});document.querySelectorAll('.journey-step').forEach((item,i)=>{item.addEventListener('click',()=>{current=i;render()});item.style.cursor='pointer';item.setAttribute('role','button');item.tabIndex=0;item.setAttribute('aria-label','Preview step '+(i+1));item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();current=i;render()}})});render();
  const menu=document.getElementById('menu-toggle'),mobile=document.getElementById('mobile-menu');function closeMenu(){mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}menu.addEventListener('click',()=>{mobile.hidden=!mobile.hidden;menu.setAttribute('aria-expanded',String(!mobile.hidden));menu.setAttribute('aria-label',mobile.hidden?'Open navigation':'Close navigation')});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.getElementById('year').textContent=String(new Date().getFullYear());
  const observer=('IntersectionObserver'in window)?new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.09}):null;document.querySelectorAll('.problem-card,.section-head,.center-head,.process-item,.pillars-layout,.cta-card,.retention-stream,.retention-loop').forEach(el=>{if(observer){el.classList.add('reveal');observer.observe(el)}});
  // Simple email notifications via FormSubmit. No CRM and no paid email API key required.
  // The form recipient must confirm the one-time activation message sent by FormSubmit.
  const form = document.getElementById('lead-form');
  const button = document.getElementById('lead-submit');
  const message = document.getElementById('form-message');
  const endpoint = 'https://formsubmit.co/ajax/asher.igniteco@gmail.com';
  const thankYouPath = '/thank-you.html';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;
    message.textContent = '';
    message.classList.remove('error');

    const fields = new FormData(form);
    const data = {
      name: String(fields.get('name') || '').trim(),
      company: String(fields.get('company') || '').trim(),
      email: String(fields.get('email') || '').trim(),
      phone: String(fields.get('phone') || '').trim(),
      industry: String(fields.get('industry') || '').trim(),
      honeypot: String(fields.get('_honey') || '')
    };

    if (data.honeypot) return;
    if (!data.name || !data.company || !data.email || !data.phone || !data.industry ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      message.textContent = 'Please complete all fields with a valid email address.';
      message.classList.add('error');
      return;
    }

    button.disabled = true;
    button.textContent = 'Sending your request…';
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 18000);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          industry: data.industry,
          source: 'www.igniteco.org website contact form',
          _subject: 'New Ignite Co. website inquiry',
          _template: 'table',
          _captcha: 'false',
          _honey: '',
          _url: 'https://www.igniteco.org/'
        }),
        signal: controller.signal
      });
      let result;
      try { result = await response.json(); } catch { result = null; }
      const accepted = result && (result.success === true || result.success === 'true');
      if (!response.ok || !accepted) {
        throw new Error(result && typeof result.message === 'string' ? result.message : 'Submission not accepted');
      }
      form.reset();
      // Redirect only after the provider accepts the request, never after a network or validation error.
      window.location.assign(thankYouPath);
    } catch (error) {
      message.textContent = error.name === 'AbortError'
        ? 'The request took too long. Please try again.'
        : 'We couldn’t send your request right now. Please try again, or email asher.igniteco@gmail.com directly.';
      message.classList.add('error');
    } finally {
      window.clearTimeout(timeout);
      button.disabled = false;
      button.innerHTML = 'Request a conversation <span aria-hidden="true">↗</span>';
    }
  });

})();