/* ============================================================
   Hyde Tech v6 — "The Call" transcript driver.
   Streams a realistic AI phone-agent call in the hero.
   Loops through multiple scripts. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Nav toggle --- */
  const navBtn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', String(open));
    });
  }

  /* --- Call timer (mm:ss) --- */
  const timerEl = document.getElementById('call-timer');
  function fmtTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  /* --- Scripts: real conversations people have with the demo line --- */
  const scripts = [
    [
      { who: 'agent',  t: "Hyde Tech, how can I help?" },
      { who: 'caller', t: "I need cameras at my shop." },
      { who: 'agent',  t: "Happy to help. How many, and where are you?" },
      { who: 'caller', t: "Four. Front, back, till area, parking lot. Hamilton on King." },
      { who: 'agent',  t: "A 4-camera install starts at $850 with the NVR and remote viewing. I can get Shawn out Thursday at 2 or Friday at 10." },
      { who: 'caller', t: "Thursday at 2." },
      { who: 'agent',  t: "Booked. You'll get a text to confirm in 30 seconds." },
      { who: 'system', t: "Booked. Thursday 2pm. Site walk. Hamilton." },
    ],
    [
      { who: 'agent',  t: "Hyde Tech, what's going on?" },
      { who: 'caller', t: "Our WiFi keeps dropping in the back office." },
      { who: 'agent',  t: "How many devices, and how big is the space?" },
      { who: 'caller', t: "About ten devices. Maybe 2,000 square feet." },
      { who: 'agent',  t: "Sounds like a coverage issue. A site survey is $350 and I map every dead zone. Tuesday at 11 or Wednesday at 3?" },
      { who: 'caller', t: "Wednesday." },
      { who: 'agent',  t: "Wednesday at 3. Confirmation coming to this number." },
      { who: 'system', t: "Booked. Wednesday 3pm. WiFi survey." },
    ],
    [
      { who: 'agent',  t: "Hi, Hyde Tech. What do you need?" },
      { who: 'caller', t: "How much is the AI phone agent?" },
      { who: 'agent',  t: "$500 for setup. Then $79 to $129 a month, depending on call volume." },
      { who: 'caller', t: "Can I try it first?" },
      { who: 'agent',  t: "You're talking to it. I'm the same system Shawn sets up for clients. Want me to book you a 15-minute call with him?" },
      { who: 'caller', t: "Sure. Tomorrow morning?" },
      { who: 'agent',  t: "10am tomorrow. I'll text you the confirmation." },
      { who: 'system', t: "Booked. Tomorrow 10am. Consult." },
    ],
  ];

  const body = document.getElementById('call-body');
  const theCall = document.querySelector('.the-call');
  if (!body || !theCall) return;

  // If reduced motion, render the first script complete and stop
  if (reduce) {
    const s = scripts[0];
    body.innerHTML = '';
    s.forEach(line => {
      const row = document.createElement('div');
      row.className = `the-call__line ${line.who} show`;
      row.innerHTML = `<span class="who">${line.who === 'system' ? '✓ Booked' : line.who}</span><span class="msg">${line.t}</span>`;
      body.appendChild(row);
    });
    if (timerEl) timerEl.textContent = '00:42';
    return;
  }

  let scriptIndex = 0;
  let callStart = 0;
  let timerRaf = null;

  function tickTimer(now) {
    if (!callStart) callStart = now;
    if (timerEl) timerEl.textContent = fmtTime((now - callStart) / 1000);
    timerRaf = requestAnimationFrame(tickTimer);
  }

  function setTalking(who) {
    theCall.classList.remove('is-caller', 'is-agent');
    if (who === 'caller') theCall.classList.add('is-caller');
    if (who === 'agent')  theCall.classList.add('is-agent');
  }

  function typeInto(el, text, speedMs, done) {
    let i = 0;
    const caret = document.createElement('span');
    caret.className = 'caret';
    el.textContent = '';
    el.appendChild(caret);
    const iv = setInterval(() => {
      if (i >= text.length) { clearInterval(iv); caret.remove(); done && done(); return; }
      el.insertBefore(document.createTextNode(text.charAt(i)), caret);
      i++;
    }, speedMs);
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function playScript(script) {
    // Clear body
    body.innerHTML = '';
    callStart = 0;
    cancelAnimationFrame(timerRaf);
    timerRaf = requestAnimationFrame(tickTimer);

    for (let i = 0; i < script.length; i++) {
      const line = script[i];
      setTalking(line.who);

      const row = document.createElement('div');
      row.className = `the-call__line ${line.who}`;
      const who = document.createElement('span');
      who.className = 'who';
      who.textContent = line.who === 'system' ? '✓ Booked' : line.who;
      const msg = document.createElement('span');
      msg.className = 'msg';
      row.appendChild(who);
      row.appendChild(msg);
      body.appendChild(row);
      await sleep(50);
      row.classList.add('show');

      // Speed depends on who's speaking (agent talks faster/clearer)
      const speed = line.who === 'caller' ? 32 : line.who === 'agent' ? 22 : 16;
      await new Promise(done => typeInto(msg, line.t, speed, done));
      await sleep(line.who === 'system' ? 2200 : 450);

      // If body is getting tall, scroll to keep the latest line visible
      body.scrollTop = body.scrollHeight;
    }
    setTalking(null);
    await sleep(3500);
    cancelAnimationFrame(timerRaf);
  }

  async function loop() {
    while (true) {
      await playScript(scripts[scriptIndex]);
      // Fade transition between scripts
      body.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 400, fill: 'forwards', easing: 'ease-out' }
      );
      await sleep(400);
      scriptIndex = (scriptIndex + 1) % scripts.length;
      body.style.opacity = '1';
    }
  }

  // Start when hero is visible
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { loop(); io.disconnect(); } });
  }, { threshold: 0.2 });
  io.observe(theCall);

})();
