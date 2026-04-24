/* ============================================================
   Hyde Tech v7 — scroll-locked "The Call" transcript.
   Sticky card inside a tall .call-section. Lines reveal as the
   user scrolls through. One signature motion, Apple-style.
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

  /* --- Build the transcript once --- */
  const body = document.getElementById('call-body');
  const section = document.querySelector('.call-section');
  const timerEl = document.getElementById('call-timer');
  if (!body || !section) return;

  const script = [
    { who: 'agent',  t: "Hyde Tech, how can I help?" },
    { who: 'caller', t: "I need cameras at my shop." },
    { who: 'agent',  t: "Happy to help. How many, and where are you?" },
    { who: 'caller', t: "Four. Front, back, till area, parking lot. Hamilton on King." },
    { who: 'agent',  t: "A 4-camera install starts at $850 with the NVR and remote viewing. I can get Shawn out Thursday at 2 or Friday at 10." },
    { who: 'caller', t: "Thursday at 2." },
    { who: 'agent',  t: "Booked. You'll get a text to confirm in 30 seconds." },
    { who: 'system', t: "Booked. Thursday 2pm. Site walk." },
  ];

  body.innerHTML = '';
  script.forEach(line => {
    const row = document.createElement('div');
    row.className = `the-call__line ${line.who}`;
    const who = document.createElement('span');
    who.className = 'who';
    who.textContent = line.who === 'system' ? '✓ Booked' : line.who;
    const msg = document.createElement('span');
    msg.className = 'msg';
    msg.textContent = line.t;
    row.appendChild(who);
    row.appendChild(msg);
    body.appendChild(row);
  });

  const lineEls = body.querySelectorAll('.the-call__line');

  // If reduced motion, just show all lines and stop
  if (reduce) {
    lineEls.forEach(el => el.classList.add('revealed'));
    if (timerEl) timerEl.textContent = '00:42';
    return;
  }

  /* --- Scroll-driven line reveal ---
     As the section scrolls past, reveal lines in sequence. Map scroll
     progress through the section (0→1) to the line index. Last 15% of
     scroll holds all lines visible so the user has time to read. */
  function update() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    // progress: 0 when section top hits viewport top, 1 when section bottom hits viewport bottom
    const total = section.offsetHeight - vh;
    const scrolled = -rect.top;
    let p = total > 0 ? (scrolled / total) : 0;
    p = Math.max(0, Math.min(1, p));

    // Reveal lines over the middle ~70% of the scroll range. First 10% builds anticipation,
    // last 20% lets all lines breathe.
    const usable = Math.max(0, Math.min(1, (p - 0.1) / 0.7));
    const n = lineEls.length;
    const revealCount = Math.floor(usable * (n + 1));

    lineEls.forEach((el, i) => {
      if (i < revealCount) el.classList.add('revealed');
      else el.classList.remove('revealed');
    });

    // Fake the timer based on progress
    if (timerEl) {
      const sec = Math.floor(p * 47);
      const mm = String(Math.floor(sec / 60)).padStart(2, '0');
      const ss = String(sec % 60).padStart(2, '0');
      timerEl.textContent = `${mm}:${ss}`;
    }
  }

  let raf = null;
  function onScroll() {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      update();
      raf = null;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();

  /* --- Counter-up stats: numbers tick from 0 when they scroll into view --- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        if (reduce) { el.textContent = target; io.unobserve(el); return; }
        const duration = 1400;
        const start = performance.now();
        function step(now) {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.floor(eased * target);
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  }

  /* --- Magnetic primary CTAs on desktop --- */
  const canHoverMag = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHoverMag && !reduce) {
    document.querySelectorAll('.btn-primary.btn-xl, .btn-primary.btn-lg').forEach(btn => {
      let rafM = null;
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        if (rafM) cancelAnimationFrame(rafM);
        rafM = requestAnimationFrame(() => {
          btn.style.transform = `translate(${x * 0.2}px, ${y * 0.28}px)`;
        });
      });
      btn.addEventListener('pointerleave', () => {
        if (rafM) cancelAnimationFrame(rafM);
        btn.style.transform = '';
      });
    });
  }

  /* --- Subtle 3deg mouse-parallax tilt on the card --- */
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover) {
    const card = section.querySelector('.the-call');
    const stickyWrap = section.querySelector('.call-sticky');
    if (card && stickyWrap) {
      let raf2 = null;
      stickyWrap.addEventListener('pointermove', (e) => {
        const r = stickyWrap.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        if (raf2) cancelAnimationFrame(raf2);
        raf2 = requestAnimationFrame(() => {
          card.style.setProperty('--ty', (x * 4).toFixed(2) + 'deg');
          card.style.setProperty('--tx', (-y * 2.5).toFixed(2) + 'deg');
        });
      });
      stickyWrap.addEventListener('pointerleave', () => {
        card.style.setProperty('--tx', '0deg');
        card.style.setProperty('--ty', '0deg');
      });
    }
  }

})();
