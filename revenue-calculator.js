/* Interactive revenue opportunity estimate for Ignite Co. */
(() => {
  'use strict';
  const root = document.getElementById('revenue-calculator');
  if (!root) return;
  const byId = id => root.querySelector('#' + id);
  const inputIds = ['rc-leads', 'rc-ticket', 'rc-close', 'rc-missed', 'rc-past', 'rc-hours'];
  const fields = Object.fromEntries(inputIds.map(id => [id, byId(id)]));
  const followup = byId('rc-followup');
  if (inputIds.some(id => !fields[id]) || !followup) return;

  const limits = {
    'rc-leads': [0, 100000],
    'rc-ticket': [0, 1000000],
    'rc-close': [0, 100],
    'rc-missed': [0, 100],
    'rc-past': [0, 100000],
    'rc-hours': [0, 168]
  };
  const fmtMoney = new Intl.NumberFormat('en-US', { style:'currency', currency:'USD', maximumFractionDigits:0 });
  const fmtOne = new Intl.NumberFormat('en-US', { maximumFractionDigits:1, minimumFractionDigits:1 });
  const followRates = {rarely:0.07, sometimes:0.045, consistently:0.015};
  function get(id) {
    const [min, max] = limits[id];
    const n = Number(fields[id].value);
    return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : 0;
  }
  function update() {
    const leads = get('rc-leads');
    const ticket = get('rc-ticket');
    const close = get('rc-close') / 100;
    const missedRate = get('rc-missed') / 100;
    const pastCustomers = get('rc-past');
    const hours = get('rc-hours');
    const missedInquiries = leads * missedRate;
    const reachedInquiries = leads - missedInquiries;

    // These are transparent illustrative assumptions, NOT verified historic averages.
    // Each segment uses a distinct pool to avoid counting the same lead twice.
    const missedBookings = missedInquiries * 0.45 * close;
    const followupBookings = reachedInquiries * (1 - close) * (followRates[followup.value] ?? followRates.sometimes);
    const repeatBookings = pastCustomers * 0.035;
    const totalBookings = missedBookings + followupBookings + repeatBookings;
    const missedRevenue = missedBookings * ticket;
    const followupRevenue = followupBookings * ticket;
    const repeatRevenue = repeatBookings * ticket;
    const totalRevenue = missedRevenue + followupRevenue + repeatRevenue;
    const savedHours = hours * 4.33 * 0.65;

    byId('rc-revenue').textContent = fmtMoney.format(Math.round(totalRevenue));
    byId('rc-yearly').textContent = fmtMoney.format(Math.round(totalRevenue * 12));
    byId('rc-jobs').textContent = fmtOne.format(totalBookings);
    byId('rc-time').textContent = fmtOne.format(savedHours) + 'h';
    const values = [
      ['missed', missedRevenue],
      ['follow', followupRevenue],
      ['repeat', repeatRevenue]
    ];
    values.forEach(([name, amount]) => {
      byId('rc-' + name + '-amount').textContent = fmtMoney.format(Math.round(amount));
      byId('rc-' + name + '-bar').style.width = (totalRevenue > 0 ? amount / totalRevenue * 100 : 0).toFixed(1) + '%';
    });
  }
  inputIds.forEach(id => {
    fields[id].addEventListener('input', update);
    fields[id].addEventListener('change', () => {
      if (fields[id].value !== '') fields[id].value = String(get(id));
      update();
    });
  });
  followup.addEventListener('change', update);
  update();
})();
