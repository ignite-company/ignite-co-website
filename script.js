(() => {
  const steps = [
      {
          "icon": "↗",
          "tag": "OPPORTUNITY IDENTIFIED",
          "symbol": "✳",
          "title": "An opportunity enters the system.",
          "description": "Sarah reaches out about AC service. Her request is captured, organized and ready for a fast reply.",
          "footer": "Inquiry added to a visible pipeline",
          "mini": "Every opportunity has a next step",
          "detail": "Nothing sits in an inbox waiting to be remembered.",
          "time": "Day 1",
          "context": "New homeowner request"
      },
      {
          "icon": "☎",
          "tag": "QUICK FIRST CONTACT",
          "symbol": "☎",
          "title": "A timely response starts the conversation.",
          "description": "A first-contact workflow helps Sarah get the information she needs while her request is still top of mind.",
          "footer": "Initial outreach initiated",
          "mini": "Response handled, team stays focused",
          "detail": "The system supports the team without another manual task.",
          "time": "Minutes later",
          "context": "Initial conversation"
      },
      {
          "icon": "◷",
          "tag": "NOT READY YET",
          "symbol": "◷",
          "title": "Not buying today doesn't mean lost forever.",
          "description": "Sarah isn't ready to schedule yet. Helpful, spaced-out follow-up keeps the relationship warm until the timing is right.",
          "footer": "Long-term nurture continues",
          "mini": "Follow-up without daily chasing",
          "detail": "An interested homeowner is not forgotten after one try.",
          "time": "Weeks later",
          "context": "Still considering"
      },
      {
          "icon": "▤",
          "tag": "OPEN ESTIMATE",
          "symbol": "▤",
          "title": "A quote goes out. Follow-up stays on.",
          "description": "An estimate is still open. A thoughtful check-in gives Sarah an easy path to ask questions and move forward.",
          "footer": "Pending estimate surfaced for follow-up",
          "mini": "Open quotes stay visible",
          "detail": "Your team knows what's pending instead of guessing.",
          "time": "Estimate pending",
          "context": "Decision still open"
      },
      {
          "icon": "✓",
          "tag": "FIRST JOB SCHEDULED",
          "symbol": "✓",
          "title": "The opportunity becomes a booked job.",
          "description": "Sarah decides to move ahead. The job is scheduled, and the pipeline updates so the next handoff is clear.",
          "footer": "Opportunity marked as booked",
          "mini": "A booked job, not just a lead",
          "detail": "The system tracks real progress toward revenue.",
          "time": "When ready",
          "context": "Job scheduled"
      },
      {
          "icon": "★",
          "tag": "SERVICE COMPLETE",
          "symbol": "★",
          "title": "The job ends. The relationship doesn't.",
          "description": "After service, Sarah can receive a thoughtful thank-you and a review invitation while her history stays organized.",
          "footer": "Customer moved into post-service care",
          "mini": "Your customer history becomes an asset",
          "detail": "The next opportunity can start with someone who knows you.",
          "time": "After service",
          "context": "Past customer"
      },
      {
          "icon": "↻",
          "tag": "CUSTOMER REACTIVATION",
          "symbol": "↻",
          "title": "Two months later, Ignite reconnects.",
          "description": "A relevant follow-up reaches Sarah again. She remembers the work you did and has another service need.",
          "footer": "Past customer re-engagement initiated",
          "mini": "New work from an existing relationship",
          "detail": "Stay top of mind without your team chasing manually.",
          "time": "2 months later",
          "context": "Existing customer"
      },
      {
          "icon": "▦",
          "tag": "REPEAT JOB BOOKED",
          "symbol": "▦",
          "title": "A second job, without starting over.",
          "description": "Sarah schedules another visit with a company she already trusts. The returning-customer job is tracked.",
          "footer": "Repeat booking moved into the calendar",
          "mini": "Consistency compounds across customers",
          "detail": "One good experience can lead to the next opportunity.",
          "time": "Next service",
          "context": "Returning customer"
      },
      {
          "icon": "∞",
          "tag": "GROWTH CONTINUES",
          "symbol": "∞",
          "title": "The engine keeps running.",
          "description": "Existing relationships, open estimates, future-ready homeowners, reviews and referrals all create new paths to booked work.",
          "footer": "Ongoing follow-up and customer care",
          "mini": "Not a one-and-done funnel",
          "detail": "Capture, recover, rebook and stay remembered.",
          "time": "Always active",
          "context": "Ongoing growth cycle"
      }
  ];

  let current=0;
  const els={next:document.getElementById('demo-next'),reset:document.getElementById('demo-reset'),icon:document.getElementById('activity-icon'),tag:document.getElementById('activity-tag'),symbol:document.getElementById('visual-symbol'),title:document.getElementById('activity-title'),description:document.getElementById('activity-description'),footer:document.getElementById('activity-footer'),mini:document.getElementById('mini-title'),detail:document.getElementById('mini-description'),progress:document.getElementById('progress-fill'),counter:document.getElementById('step-counter'),label:document.getElementById('progress-label'),time:document.getElementById('activity-time'),stage:document.getElementById('journey-created')};
  function render(){const d=steps[current];els.icon.textContent=d.icon;els.tag.textContent=d.tag;els.symbol.textContent=d.symbol;els.title.textContent=d.title;els.description.textContent=d.description;els.footer.textContent=d.footer;els.mini.textContent=d.mini;els.detail.textContent=d.detail;els.progress.style.width=(((current+1)/steps.length)*100)+'%';els.counter.textContent=String(current+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');els.label.textContent='Step '+(current+1)+' of '+steps.length; if(els.time)els.time.textContent=d.time;if(els.stage)els.stage.textContent=d.context;els.next.innerHTML=current===steps.length-1?'Loop again <span aria-hidden="true">↺</span>':'Next step <span aria-hidden="true">→</span>';document.querySelectorAll('.journey-step').forEach((item,i)=>{item.classList.toggle('active',i===current);item.classList.toggle('completed',i<current);let state=item.querySelector('.step-state');state.textContent=i<current?'✓':''})}
  els.next.addEventListener('click',()=>{current=current===steps.length-1?0:current+1;render()});els.reset.addEventListener('click',()=>{current=0;render()});document.querySelectorAll('.journey-step').forEach((item,i)=>{item.addEventListener('click',()=>{current=i;render()});item.style.cursor='pointer';item.setAttribute('role','button');item.tabIndex=0;item.setAttribute('aria-label','Preview step '+(i+1));item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();current=i;render()}})});render();
  const menu=document.getElementById('menu-toggle'),mobile=document.getElementById('mobile-menu');function closeMenu(){mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}menu.addEventListener('click',()=>{mobile.hidden=!mobile.hidden;menu.setAttribute('aria-expanded',String(!mobile.hidden));menu.setAttribute('aria-label',mobile.hidden?'Open navigation':'Close navigation')});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.getElementById('year').textContent=String(new Date().getFullYear());
  const observer=('IntersectionObserver'in window)?new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.09}):null;document.querySelectorAll('.problem-card,.section-head,.center-head,.process-item,.pillars-layout,.cta-card,.retention-stream,.retention-loop').forEach(el=>{if(observer){el.classList.add('reveal');observer.observe(el)}});
  const form=document.getElementById('lead-form'),button=document.getElementById('lead-submit'),message=document.getElementById('form-message');
  function fallbackMailto(payload){const subject=encodeURIComponent('Ignite Co. website inquiry: '+payload.company);const body=encodeURIComponent('Hi Ignite Co.,\n\nI would like to discuss a growth system for my company.\n\nName: '+payload.name+'\nCompany: '+payload.company+'\nEmail: '+payload.email+'\nPhone: '+payload.phone+'\nIndustry: '+payload.industry+'\n');window.location.href='mailto:asher.igniteco@gmail.com?subject='+subject+'&body='+body}
  form.addEventListener('submit',async e=>{e.preventDefault();message.textContent='';message.classList.remove('error');const fd=new FormData(form);const data={name:String(fd.get('name')||'').trim(),company:String(fd.get('company')||'').trim(),email:String(fd.get('email')||'').trim(),phone:String(fd.get('phone')||'').trim(),industry:String(fd.get('industry')||'').trim(),website:String(fd.get('website')||'')};if(!data.name||!data.company||!data.email||!data.phone||!data.industry||!/^\S+@\S+\.\S+$/.test(data.email)){message.textContent='Please complete all fields with a valid email.';message.classList.add('error');return}button.disabled=true;button.textContent='Sending your request…';try{const response=await fetch('/api/lead',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)});let result={};try{result=await response.json()}catch{}if(response.ok&&result.ok){form.reset();message.textContent='Thanks! Your request is in. We’ll reach out soon.'}else if(response.status===503){message.textContent='Your email app will open with the details ready to send.';fallbackMailto(data)}else{throw new Error(result.error||'Unable to submit right now.')}}catch(error){message.textContent='The form could not send automatically. Your email app will open with your details ready to send.';fallbackMailto(data)}finally{button.disabled=false;button.innerHTML='Request a conversation <span aria-hidden="true">↗</span>'}});
})();