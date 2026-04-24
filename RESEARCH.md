# Site v5 Research — What's Possible in 2026

Scope: a standout marketing site for Hyde Tech Solutions (AI phone agents + managed tech, solo agency, small-biz buyers). Dark mode; purple `#7C3AED` + gold `#F59E0B`; neon cyan `#00F0FF`, red `#EF4444`, green `#10B981`. Vanilla HTML/CSS/JS.

---

## 1. Best-in-class references (and the one thing each does best)

**AI / voice sector**
- **Cartesia** (cartesia.ai, Framer build). Signature: a continuously-morphing blob/waveform that *feels* like a voice speaking — a GPU-rendered organic shape, not bars. Lesson: the hero *is* the product.
- **Vapi.ai**. Signature: a "Talk to Vapi" live WebRTC agent embedded in the hero. You actually call their demo agent from the page. Nothing sells a voice product like letting the visitor *hear* it in 2 seconds.
- **Retell.ai**. Signature: clean dashboard screenshots with cursor-reactive parallax; emphasis on numbers, latency, uptime. Utility over spectacle.
- **Bland.ai**. Signature: ruthless clarity — 1 goal (book demo), fast layout, almost no motion. A counter-reference worth taking seriously.
- **ElevenLabs**. Signature: "hear any voice in 3 clicks" — an interactive voice picker above the fold that's basically a toy you can't stop playing with.

**Dev-tools tier (aesthetic north stars)**
- **Linear**. Signature: the horizontal issue-card scroll in the hero with parallax + ultra-crisp screen recordings; plus their in-feature "micro-scenes" (e.g., the cursor flies through Linear the product). Unmatched "every frame is shippable" feel.
- **Vercel**. Signature: the blueprint/graph-paper background + precision engineered grid. Sets the dev-tools visual language everyone copies.
- **Resend**. Signature: a single animated gradient orb behind the hero that reacts to scroll + cursor; minimal text; huge breathing room. Proof that one well-tuned shader beats ten effects.
- **Ramp**. Signature: product screenshots rendered in 3D, tilted on scroll, with a data-vault "stacking cards" scene. Best at making B2B feel expensive.
- **v0.app**. Signature: the hero input is the product. You type a prompt and the homepage builds itself. Utility-as-hero, same pattern as ElevenLabs.
- **Anthropic** (anthropic.com, 2025/26 refresh). Signature: Tiempos serif + warm off-white, editorial typesetting on a marketing site. Brand-as-gravitas — not what HTS wants to copy but worth knowing the palette exists.
- **OpenAI**. Signature: muted, almost Apple-like hero video of the product in use, zero ornament.
- **Arc / The Browser Company**. Signature: product videos that feel like short films, with kinetic typography and mouse-triggered reveals.
- **Perplexity**. Signature: the search-box-as-hero pattern with answer "streaming" in for show.
- **Framer**. Signature: a live-editable hero that drags/resizes in real time while you scroll.

**Creative studio / personal sites (the ceiling)**
- **rauno.me** (Rauno Freiberg). Signature: *craft microdetails* — key-based navigation, hover states that feel like native OS chrome, cursor-aware everything. His "Web Interface Guidelines" is the de-facto manual.
- **basement.studio**. Signature: loud, case-study-forward hero with typographic collisions and WebGL post-processing. They ship at Awwwards-SOTD volume.
- **unseen.studio**. Signature: editorial-grade motion and type-driven layouts; brand design that feels printed.
- **lusion.co**. Signature: full-WebGL-scene homepages. The ceiling for "what a browser can render."

---

## 2. Modern techniques that actually stand out

### WebGL / three.js / shaders
- **Fluid simulation hero** (PavelDoGreat WebGL-Fluid style). Mouse drags paint color through a Navier-Stokes sim. Recolor to purple/gold/cyan. ~30-80KB shader, 60fps on M-series / modern Android, painful on old phones — gate behind a media query.
- **Metaball voice-blob**. Ray-marched SDF sphere whose surface is perturbed by 3-4 noise octaves; when audio is active, a single `uAmp` uniform driven from `AnalyserNode` RMS makes it pulse. This is the Cartesia signature. ~150 lines of GLSL.
- **Raymarched particle cloud / phone-line particle trail**. 10k-50k GPU particles along a bezier path = "the call routing across the country." Spec it via `gl_PointSize` or a single draw call with instancing.
- **Post-processing FBM grain + chromatic aberration** over an otherwise static hero — cheap, classy, gives the neon palette a real "CRT" edge.
- **WebGPU fallback to WebGL2**. Safari 26 shipped WebGPU (Sept 2025), so Three.js's `WebGPURenderer` now covers all major browsers with automatic WebGL2 fallback — one codepath.

Tradeoffs: every shader is a potential INP disaster on low-end Android. Rule: cap DPR at 1.5, pause rAF when tab hidden, kill rAF behind `prefers-reduced-motion`.

### Canvas 2D
- **Audio-reactive bar viz tied to a fake call**. A looping ElevenLabs WAV of your AI agent greeting a customer; `AnalyserNode.getByteFrequencyData()` → 48 vertical bars in gold on purple. Very cheap (<1ms/frame).
- **Procedural dot-grid / constellation**. Canvas dots near the cursor connect with lines (classic `particles.js` idea, but modernized with gold/cyan edges and trigonometric wobble). Cheap, still hits.
- **Paint-brush cursor trail**. `ctx.globalCompositeOperation = 'lighter'` + radial gradient stamps. With neon palette this looks luxury.
- **Blob stroke with perlin noise** for a "handwritten signature" feel on the dual-persona pivot.

### CSS-only creative (the biggest 2026 shift)
- **Scroll-driven animations via `animation-timeline: view(...)` and `scroll(...)`**. Chromium + Safari TP support. Replaces ~80% of GSAP ScrollTrigger use cases with zero JS.
  ```css
  @keyframes rise { from { opacity:0; transform: translateY(40px) } to { opacity:1; transform:none } }
  .reveal { animation: rise linear both; animation-timeline: view(); animation-range: entry 10% cover 40%; }
  ```
- **`@property` for animatable gradient stops**. Registers a CSS var as `<color>` or `<angle>` so the browser can interpolate it. Lets you animate a `conic-gradient` sweep without a shader.
  ```css
  @property --hue { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
  .hero::before { background: conic-gradient(from var(--hue), #7C3AED, #00F0FF, #F59E0B, #7C3AED); animation: spin 12s linear infinite; }
  @keyframes spin { to { --hue: 360deg; } }
  ```
  This is the Resend hero in ~8 lines. Firefox still lags but degrades to static.
- **View Transitions API** between routes/states. `document.startViewTransition(...)` gives you native cross-fade + morphing shared elements — use it when clicking "Phone agents" vs "Managed IT" to crossfade the hero.
- **CSS Houdini Paint API** (`paint(worklet)`). For procedural backgrounds (noise, dithered halftone gold-leaf). Still Chromium-only; use as a progressive enhancement.
- **`color-mix()`** + **OKLCH** everywhere — let the purple and gold blend through perceptual space, not sRGB mud.

### SVG motion
- **Path-draw intro** for your logo (`stroke-dasharray` + `stroke-dashoffset`, or the newer `pathLength` + scroll timeline).
- **Morphing service icons** via `<animate>` between two `d=` strings (phone → speech-bubble → shield → server rack). Lightweight, perfectly scalable.
- **Text-on-path** for the "AI picks up the phone at 2am so you don't have to" tagline — curved under a phone icon.
- **`feTurbulence` + `feDisplacementMap`** animated via JS for a "radio static" effect on a CTA. Cheap, very on-brand for voice.

### Pointer / cursor
- **Magnetic CTAs**. Button translates toward cursor with lerp; on `mouseout` eases back. 20 lines of JS.
- **Follower orb** (small gold blob with 100ms lag) that expands/hollows on hoverable elements (à la basement.studio). Gate behind `(hover: hover)`.
- **Tilt-on-move** product cards (vanilla-tilt / manual `transform: rotateX/Y` from cursor delta). Classic, still works.
- **Cursor = spotlight**. A radial-gradient mask follows the cursor, revealing a second layer underneath (e.g., a schematic diagram beneath the marketing hero). Very cheap with CSS `mask-image: radial-gradient(...)` and a `--x / --y` custom prop.

### Typography
- **Variable-font weight/width interpolation on scroll**. One font file, `font-variation-settings: "wght" var(--w)` animated via scroll timeline — `100→900` as the section enters. Try Recursive, Inter var, or a display face like Migra Variable.
- **Char-by-char text reveal** using `::first-letter`-free approaches: wrap each char in a span with a staggered scroll-timeline delay. Avoid SplitType runtime if you can — pre-split at build.
- **Kinetic headline that responds to cursor** (the O in "Hyde" squashes as cursor passes).
- **Gradient text with `background-clip: text`** + `@property`-animated gradient position. Gold-to-purple sweep that loops.

### 3D embeds (Spline / Rive)
- **Spline**: best for a signature "object" (3D phone, floating glass sphere with your logo inside). Downsides: 1-3MB runtime, mobile throttles hard, tough to theme to brand neon. Worth it for one hero object, not whole-site.
- **Rive**: much lighter (10s of KB), state-machine driven — ideal for an animated logo, a phone icon whose waveform pulses, or a service toggle. Cheap and respects mobile.

### Audio visualization — what actually works for a "call this AI" site
Ranked by impact for HTS's pitch:
1. **Live WebRTC demo** (Vapi/Retell/LiveKit widget in a corner or modal). Huge conversion signal. Costs per-call but you control exposure. This is the single highest-ROI thing on the list.
2. **Pre-recorded WAV + Canvas bars** running on loop in the hero with a play button. Near-zero ongoing cost, 95% of the perceived impact. Pair with a captioned transcript that highlights the current word.
3. **Procedural "fake" waveform** driven by Perlin noise. Use as *ambient* background behind the section header; switch to real audio when the user hits play.
4. **Metaball voice blob** (see shaders above) fed either by real `AnalyserNode` data or a pre-baked amplitude track.

Rule: never autoplay audio. Visual-first, sound-on-click. Caption everything for a11y.

---

## 3. Signature concepts for a dual-persona site (steal these)

- **"The phone rings" scroll-landing**. Page loads silent. As you scroll 200px, a muted phone-ring SVG blooms bottom-right and a soft vibration transforms the hero text. Click to "answer" → the voice agent talks through a Canvas waveform and the page transitions (View Transitions API) into the phone-agents story. Don't answer → keep scrolling and the ring fades, revealing the managed-IT narrative. One site, two doors.
- **Persona toggle that warps the brand**. A pill toggle at top: `[ Voice AI ] [ Managed Tech ]`. Flip it and the accent color morphs purple↔gold via `@property`, the typeface axis shifts (wght 600 display → wght 400 techy mono), the cursor orb changes shape. Same layout, different skin. Use View Transitions for the morph.
- **Hero that morphs based on pointer position**. Left half of viewport = voice (blob + waveform). Right half = managed IT (wire diagram / server grid). Cursor `x` interpolates between them via a single uniform. One hero, dual-persona without a toggle.
- **Live-demo hero**. Big "Call our AI" button in the fold. Clicking starts a real WebRTC session with a Vapi/Retell agent trained on HTS's own FAQ. The visitor literally asks "what do you charge?" and hears it. This is the single most memorable thing a 1-person agency can ship in 2026, and almost nobody does it.
- **"Day in the life" scrollytelling**. Pin the hero, scroll = time of day. 9am: owner too busy to answer. 2am: AI answers. 6am: ticket auto-created in your PSA. Each chapter a scroll-timeline-driven Canvas scene. Heavier to build but award-bait.
- **Cursor-spotlight "we see what you see"**. A schematic of a small-biz tech stack underlays the hero. The cursor reveals it through a mask, implying "I already know what your shop looks like." On-brand for managed-IT persona.
- **Receipt / call-log easter egg**. Footer renders a live (faked) call log: `02:14 AM — Caller: 'Do you do same-day?' — AI: 'Yes, we do.'` — rotates every 4s. Procedural but feels authentic.

---

## 4. Claude Code — current ceiling (April 2026)

What people are shipping with Claude Code right now:
- **Full Framer-tier marketing sites from a single prompt + brand doc**. With Claude Design (Apr 2026 release) it reads a Figma or a logo and produces a themed landing site in one pass. The public showcase has Tom's Guide, Mercury, Brilliant, Datadog examples.
- **Complete WordPress / Astro / Next builds** driven by a brief + a Nano Banana Pro or Google Stitch image reference (see AIRankingSKool, Leon Furze, Mejba Ahmed writeups).
- **Shader-heavy hero sections** — people are pasting Shadertoy GLSL into Claude Code and asking it to wire up a Canvas with uniforms and rAF loop; quality is genuinely good.
- **WebGL fluid sims, Three.js particle scenes, Canvas voice visualizers** — all being shipped end-to-end, including prefers-reduced-motion fallbacks and mobile gates.
- **Rohit Ghumare's `awesome-claude-design`** repo catalogs prompts by aesthetic family (editorial, brutalist, dev-tools, etc.) — useful as a prompt starter.

What this means for HTS: the *labor* ceiling is no longer a reason to skip ambitious work. A shader hero, custom cursor, scroll-driven reveals, WebRTC demo, and View Transitions are all 1-2 hour sessions, not weeks.

---

## 5. Performance & accessibility guardrails

| Technique | LCP risk | INP risk | Bundle | Mobile | Reduced-motion |
|---|---|---|---|---|---|
| CSS scroll-driven + `@property` gradient | negligible | low | 0 KB | great | trivial: media query kills animation |
| Canvas 2D viz (bars, dots) | low | low | <2 KB | great | pause rAF |
| SVG morph / path-draw | negligible | low | <5 KB | great | easy |
| Custom cursor + magnetic buttons | low | medium (pointermove) | ~1 KB | disable via `(hover:hover)` | disable |
| WebGL gradient shader (single fragment) | low | low–med | ~5-15 KB | ok if DPR capped | hide canvas, show CSS fallback |
| WebGL fluid / metaball | medium | high on low-end | 30-80 KB | risky | must disable |
| three.js particle scene | high | high | 150+ KB (tree-shake!) | risky | must disable |
| Spline embed | high (1-3 MB) | high | huge | throttles | disable / static image |
| Rive embed | low | low | ~50 KB + runtime | good | pause |
| Live WebRTC demo widget | low (lazy mount) | medium during call | ~100 KB lazy | good | n/a |
| View Transitions API | none | low | 0 KB | Chromium+Safari | respects prefers-reduced-motion automatically |

**Hard rules for this site**:
1. Everything above "CSS + Canvas 2D" tier is gated behind `@media (prefers-reduced-motion: no-preference)` *and* `(hover: hover) and (pointer: fine)`.
2. `requestIdleCallback` for non-critical JS. `loading="lazy"` + `fetchpriority="low"` on below-fold assets.
3. DPR cap at 1.5 for any canvas. Pause rAF on `document.hidden`. `IntersectionObserver` to kill off-screen loops.
4. LCP element = an H1 with a web-safe fallback stack; variable font swaps in via `font-display: optional`.
5. Never ship autoplay audio. Captions on every voice sample.
6. Color contrast: gold `#F59E0B` on dark passes AA for large text only — use sparingly on small type, pair with white body text.
7. Keyboard: every custom cursor / magnetic button must work with `:focus-visible` styling.

---

## Top 10 ideas to steal for site-v5 (ranked)

1. **Live "call our AI" demo in the hero** (WebRTC via Vapi/Retell widget with an HTS-trained agent). Highest ROI item on this entire document. Nothing else on a small-biz site will convert like *hearing* the product.
2. **Persona toggle that morphs the brand** (Voice ↔ Managed IT). Single-page dual-persona with View Transitions + `@property` color interpolation between purple-dominant and gold-dominant palettes.
3. **Voice-blob hero**. Single fragment-shader metaball on a 320×320 canvas, pulsing to the demo audio's `AnalyserNode` RMS. Cartesia-class signature in ~200 lines.
4. **Resend-style `@property` conic gradient orb** as the CSS-only fallback + decorative layer behind the voice blob. Near-zero cost.
5. **Scroll-driven reveals via `animation-timeline: view()`**. Zero-JS replacement for AOS/GSAP for 80% of cases.
6. **Canvas audio-bar viz** tied to a 10-second looping ElevenLabs WAV of your AI answering a plumber's phone. Gold bars on purple. With a "call it yourself" CTA next to it.
7. **Cursor-spotlight reveal** on the Managed-IT section — schematic of a small-biz stack is hidden; cursor is a radial-gradient mask that exposes it. Feels diagnostic and trust-building.
8. **Magnetic CTAs + gold follower orb** (desktop only) — cheap, signals craft, 30 lines of JS total.
9. **Variable-font headline** (Recursive or Inter Var) that animates its `wght` axis on scroll via `font-variation-settings` + scroll timeline. Letters "inhale" as the section enters view.
10. **Fake live call-log footer** — a 3-line rotating transcript of "answered calls today" with timestamps. Procedural but feels proof-of-life.

### What NOT to ship
- Spline scene (too heavy for a solo-agency small-biz site, mobile hurts conversion).
- Full three.js particle scene (overkill, draws the eye from the CTA).
- Autoplay audio of any kind.
- Glassmorphism. Gradient mesh blobs with no meaning. Generic Lottie spinners. Parallax on every section.

### Suggested build order (so you see value fast)
1. Base layout + dark theme + variable font + `@property` gradient hero (day 1).
2. Canvas voice-bar viz wired to a pre-recorded WAV + play button (day 1-2).
3. Persona toggle with View Transitions (day 2).
4. Scroll-driven section reveals + magnetic CTAs (day 2-3).
5. Voice-blob shader replaces the bar viz as the signature (day 3-4).
6. Cursor-spotlight Managed-IT section (day 4).
7. Live WebRTC demo behind a "Call our AI" button (day 5+, needs Vapi/Retell account).

---

## Sources / reading list
- Codrops — WebGL for Designers (Mar 2026), Interactive Storytelling (Apr 2026), 3D Audio Visualizer with Three.js + Web Audio (Jun 2025)
- Chrome for Developers — Scroll-driven animations, View Transitions, WebGPU in Safari 26
- MDN — `animation-timeline`, `@property`, View Transition API, Web Audio Visualizations
- Framer Gallery — Cartesia, Arc for Windows (live Framer case studies)
- rauno.me — Web Interface Guidelines (canonical micro-interaction spec)
- Vercel Design Guidelines — the dev-tools visual grammar
- `awesome-claude-design` (Rohit Ghumare) — prompt families
- Utsubo — 100 Three.js performance tips (2026)
- Vapi / Retell / LiveKit docs — WebRTC voice-agent embed patterns
