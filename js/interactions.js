/* ============================================================
   Hyde Tech v5 — interactions
   All-gated behind prefers-reduced-motion and (hover: hover).
   No framework. Vanilla. Respects perf.
   ============================================================ */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Nav toggle (mobile) ---------- */
  const navBtn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------- Cursor follower orb (desktop + motion OK) ---------- */
  if (canHover && !reduce) {
    const orb = document.createElement('div');
    orb.className = 'cursor-orb';
    orb.setAttribute('aria-hidden', 'true');
    document.body.appendChild(orb);

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let rafId = null;
    const lerp = (a, b, t) => a + (b - a) * t;

    function tick() {
      cx = lerp(cx, tx, 0.18);
      cy = lerp(cy, ty, 0.18);
      orb.style.setProperty('--cx', cx + 'px');
      orb.style.setProperty('--cy', cy + 'px');
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(tick);
    }, { passive: true });

    // Grow on interactive elements
    const growSel = 'a, button, .svc-card, .review, .tile';
    document.querySelectorAll(growSel).forEach(el => {
      el.addEventListener('pointerenter', () => orb.classList.add('is-hover'));
      el.addEventListener('pointerleave', () => orb.classList.remove('is-hover'));
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) { cancelAnimationFrame(rafId); rafId = null; }
    });
  }

  /* ---------- Magnetic buttons (desktop only) ---------- */
  if (canHover && !reduce) {
    const mags = document.querySelectorAll('.btn-primary, .btn-outline, .btn-live');
    mags.forEach(el => {
      let raf = null;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
        });
      });
      el.addEventListener('pointerleave', () => {
        if (raf) cancelAnimationFrame(raf);
        el.style.transform = '';
      });
    });
  }

  /* ---------- Service card spotlight follower ---------- */
  if (canHover) {
    document.querySelectorAll('.svc-card').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  /* ---------- Canvas voice waveform halo around the orb ---------- */
  const canvas = document.getElementById('voice-canvas');
  if (canvas && !reduce) {
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w, h, cx, cy, raf;
    const bars = 96;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = canvas.width = rect.width * dpr;
      h = canvas.height = rect.height * dpr;
      cx = w / 2; cy = h / 2;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pseudo-random amplitude pattern (procedural "voice")
    const seed = Array.from({ length: bars }, (_, i) => ({
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 1.2,
      base: 0.15 + Math.random() * 0.25
    }));

    function frame(t) {
      t *= 0.001;
      ctx.clearRect(0, 0, w, h);
      const radius = Math.min(w, h) * 0.40;
      const maxExtra = Math.min(w, h) * 0.12;

      for (let i = 0; i < bars; i++) {
        const angle = (i / bars) * Math.PI * 2 - Math.PI / 2;
        const s = seed[i];
        // Amplitude driven by two sines + seeded noise
        const amp = s.base + 0.45 * Math.abs(Math.sin(t * s.speed + s.phase))
                           + 0.25 * Math.abs(Math.sin(t * 0.5 + i * 0.15));
        const barLen = amp * maxExtra * (1 + 0.3 * Math.sin(t * 0.3 + i * 0.1));

        const x1 = cx + Math.cos(angle) * radius;
        const y1 = cy + Math.sin(angle) * radius;
        const x2 = cx + Math.cos(angle) * (radius + barLen);
        const y2 = cy + Math.sin(angle) * (radius + barLen);

        // Gold→purple gradient per bar
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, 'rgba(245, 158, 11, 0.85)');
        grad.addColorStop(1, 'rgba(124, 58, 237, 0.15)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2 * dpr;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && raf) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) raf = requestAnimationFrame(frame);
    });
  }

  /* ---------- Live call-log rotator ---------- */
  const logRows = document.getElementById('call-log-rows');
  if (logRows) {
    const samples = [
      { caller: 'Can you do same-day camera install?',      agent: 'Yes — first availability is Thursday 11am.' },
      { caller: 'How much for a 4-cam setup?',              agent: 'Starts at $850 including NVR and remote view.' },
      { caller: 'Our WiFi drops in the back office.',       agent: 'Booking a site survey. Thursday 2pm work?' },
      { caller: 'Do you work on Saturdays?',                agent: 'On-site by appointment; remote anytime.' },
      { caller: 'I need to move my customer list off Excel.',agent: 'Jobber migration — typical scope is 1 day.' },
      { caller: 'What does the AI agent cost?',             agent: '$500 setup, $79 to $129 per month after.' },
      { caller: 'Can you port my existing number?',         agent: 'Yes — usually 3 to 5 business days.' },
      { caller: 'Is this actually an AI?',                  agent: 'It is. This call is the demo.' },
      { caller: 'Do you cover Mississauga?',                agent: 'Hamilton to Toronto West, yes.' },
      { caller: 'Does it text me the call summary?',        agent: 'After every call, straight to your cell.' },
      { caller: 'I manage 3 rental units.',                 agent: 'Multi-location routing — Pro plan handles it.' },
      { caller: 'Will it sound like a robot?',              agent: 'You tell me — you\'re talking to one now.' },
    ];
    function pad(n) { return String(n).padStart(2, '0'); }
    function timeFor(offsetMinutes) {
      const d = new Date(Date.now() - offsetMinutes * 60 * 1000);
      return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    // Initial render
    const initial = [3, 12, 27, 48];
    initial.forEach((off, i) => {
      const s = samples[(i * 3) % samples.length];
      const row = buildRow(timeFor(off), s);
      logRows.appendChild(row);
    });

    function buildRow(t, s, isNew) {
      const row = document.createElement('div');
      row.className = 'row' + (isNew ? ' is-new' : '');
      row.innerHTML = `<time>${t}</time><span class="caller">"${s.caller}"</span><span class="agent">→ ${s.agent}</span>`;
      return row;
    }

    // Rotate
    let cursor = initial.length;
    function tick() {
      const s = samples[cursor % samples.length];
      const row = buildRow(timeFor(0), s, true);
      logRows.prepend(row);
      if (logRows.children.length > 6) logRows.removeChild(logRows.lastChild);
      setTimeout(() => row.classList.remove('is-new'), 1200);
      cursor++;
    }
    if (!reduce) {
      setInterval(tick, 4200);
    }
  }

  /* ---------- Tilt on service cards (optional, desktop only) ---------- */
  // Minimal tilt, 1.5 degrees max, doesn't fight the spotlight
  if (canHover && !reduce) {
    document.querySelectorAll('.review').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-3px) rotateX(${-y * 1.5}deg) rotateY(${x * 1.5}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

})();
