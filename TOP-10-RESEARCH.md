# Top 10 Sites That Matter for v6 — April 2026 Research

**Purpose.** v6 is "getting there" but thin on ambition. This is a reference scan of the sites a designer would actually steal from right now, cut into concrete observations you can port into the Hyde Tech build. Dark-first, purple (#7C3AED) + gold (#F59E0B), Inter body + Instrument Serif italic + JetBrains Mono transcript.

The ten: Anthropic, Vercel, Linear, Stripe, Mercury, Ramp, Vapi, Retell, Cursor, Basement Studio. Plus rauno.me as an 11th reference point because his craft-level detail is the single best signal for what "premium" means in 2026. OpenAI and Perplexity were blocked from automated fetch; I've noted what I could corroborate from public design commentary.

Each site gets the same six columns: hero, type, motion, color, the one move, micro-interactions. Then the meta-pattern synthesis.

---

## 1. Anthropic — claude.com / anthropic.com

### 1. Hero
H1 reads roughly *"AI research and products that put safety at the frontier."* Set in Anthropic's own sans (the house sans sometimes called **Anthropic Sans**, formerly Styrene) at a substantial weight — looks like 500–600, ~56–72px desktop. Subhead beneath in lighter weight Tiempos-style serif at body size. No hero imagery or 3D in the fold — it is literally text on a cream field. One primary CTA — **Try Claude** — plus a research link. No scroll indicator. The restraint is the whole point.

### 2. Typography
The pairing everyone is copying: **Anthropic Serif** (Tiempos-lineage proprietary serif) as the editorial voice, **Anthropic Sans** (Styrene-lineage) for UI and body. Serif carries the warm "we are a humanist lab" register; sans does the work. Italic serif is used as a voice device on section eyebrows and accent words inside longer sans paragraphs — the "serif italic as quotation mark" move.

### 3. Motion budget
**1/5.** Effectively static. Fade-in-on-scroll at most. Zero ambient motion, no shaders, no parallax. The hero is allowed to just sit there.

### 4. Color palette
Light-first, warm. Cream/off-white paper (#F5F1EC-ish), deep ink black text (#141413), terracotta/rust accent (#CC785C-ish), occasional faded sage. The palette is laundered-linen expensive, not neon. Dark mode exists but the public brand lives in light.

### 5. THE ONE signature
**Serif-italic-as-voice.** An italic Tiempos phrase inside a sans paragraph reads like a thought spoken aloud mid-sentence — it turns marketing copy into something that feels authored. This is the move the rest of this list is now chasing.

### 6. Micro-interactions
Understated link underlines, small text-block hover tints, the Claude chat affordance with a loading shimmer. Nothing showy.

> Anthropic's signature is the *absence* of motion. They earn attention by refusing to ask for it.

---

## 2. Vercel — vercel.com

### 1. Hero
H1 pattern: *"Build and deploy on the AI Cloud."* Very large geometric sans, tight tracking, 700+ weight, sits center-left. Subhead one line of low-contrast gray. Two CTAs: **Start Deploying** (solid white pill, black text) and **Get a Demo** (ghost). The background is the signature: a deep black field with a subtle shader-driven gradient wash, slow mesh, very low-frequency. COBE globe with softly pulsing arc markers appears lower in the first scroll as the "network is alive" signifier.

### 2. Typography
**Geist Sans** (their in-house geometric sans) and **Geist Mono** for code-adjacent UI. No serif. Weights are earned — they typically use two weights on the entire page: 400 body, 600–700 for headings. Variable-weight animation is rare on Vercel but the monospace appears in ticker-style stat counters.

### 3. Motion budget
**2/5.** Restrained. The globe is the only ambient motion in the fold; the rest is scroll-triggered fade/translate reveals. No scroll-jacking. The deploy log demo animates on scroll with staggered line appends — that's the signature scroll moment.

### 4. Color palette
Pure dark. **#000000** field, **#FAFAFA** type, accent blues (#0070F3 heritage, #00DFD8 cyan) plus the signature gradient — cyan → magenta → amber sweep they use on brand words.

### 5. THE ONE signature
The **deploy log kinetic text** — a fake terminal that types out build/deploy steps on scroll into view, with a success check at the end. It performs the product in three seconds.

### 6. Micro-interactions
- Gradient hover on logo and brand words.
- Mono-font ticker counters.
- Pill buttons with an inner highlight stroke that brightens on hover.
- "Framework" section where logos illuminate on mouse proximity.

---

## 3. Linear — linear.app

### 1. Hero
H1: *"The product development system for teams and agents"* (noting the "and agents" is new for 2026 — they've redrafted the value prop around AI integration). Large geometric sans, 56–72px, tight leading. Subhead: *"Purpose-built for planning and building products. Designed for the AI era."* Primary CTAs: **Sign up** + **Open Linear**. Beneath the H1 sits the signature product screenshot — their issue view, floated on a dark canvas with a soft purple-to-black radial glow behind it.

### 2. Typography
**Inter var** (their staple). A single family doing all work — weights 400 / 500 / 600 / 700. No serif pairing. The elegance comes from tracking and leading discipline, not typeface variety.

### 3. Motion budget
**3/5.** Purposeful, not ambient. Scroll triggers stacked "feature pane" reveals where each pane has its own little contained animation — a cursor drags, a status changes from Todo → In Progress, an issue card snaps into a cycle. Sticky section scrubbing is the defining rhythm.

### 4. Color palette
Dark-first in 2026; recent redesign dialed back color dramatically. Field is near-black (#08090A), type near-white (#F7F8F8), and the famous Linear purple (#5E6AD2) still appears as a directed accent rather than a background wash. Monochrome black/white doing 80% of the work.

### 5. THE ONE signature
**Scroll-scrubbed product theater.** Each feature section is a sticky viewport that scrubs through a sequence as you scroll — you don't just read about Cycles, you *watch Cycles happen* in a miniature UI as the scrollbar moves. It's a linear (ha) storyboard of the product. This is the move every SaaS site is trying and most get wrong; Linear gets the timing.

### 6. Micro-interactions
- 85% opacity header bar that frosts as you scroll past the hero.
- Mouse-parallax tilt on product screenshots — subtle 2–4° on mouse move.
- Keyboard shortcut badges (e.g., `G` `I`) inline in copy.
- Team section with randomized member order on each load.
- Cursor shadows on sample UI that follow a canned path.

---

## 4. Stripe — stripe.com

### 1. Hero
H1: *"Financial infrastructure to grow your revenue."* Large sans, tight tracking. Subhead: *"Accept payments, offer financial services and implement custom revenue models…"* Two CTAs: **Start now** and **Contact sales**. The hero is the legend — Stripe's **animated aurora gradient** fills the header as a full-bleed canvas: real-time WebGL mesh, cyan → violet → pink → tangerine, with a fine noise/grain layer overlaid to kill banding. A curved clip-path dips the gradient into the content area like a wave.

### 2. Typography
**Sohne** (Klim Type) — geometric grotesk with just-enough character (slightly curved leg on the `R`, distinct `a`). Weights 400 / 500 / 700. Occasional serif only on press/about pages, not the home.

### 3. Motion budget
**4/5.** Continuous ambient motion in the hero gradient; sectioned-off choreographed reveals below. Product demo cards animate payment flows on scroll.

### 4. Color palette
Light-first with a dark aurora at the top. Background ivory-white (#FAFAFA), type near-black (#0A2540), link blue (#635BFF), and the gradient: cyan #00D4FF → violet #7A73FF → pink #FF80C8 → amber #FFB75E. The gradient is *the* brand.

### 5. THE ONE signature
**The aurora gradient header with grain.** Twelve years old and still the thing every developer tool site tries and fails to match. The secret isn't the colors; it's the noise overlay and the slow ease. Banding is what ruins knockoffs.

### 6. Micro-interactions
- Clip-path wave that the hero gradient pours into.
- Code sample tabs that switch language with a real cursor-highlight animation.
- Customer logo carousel with a mask-fade at edges.
- Card hover: soft shadow lifts + border brightens + inner glow.

---

## 5. Mercury — mercury.com

### 1. Hero
H1: *"Radically different banking."* Set in their serif pairing — historically they ran **Söhne Breit** or a custom condensed sans for the H1 with italic pull-quotes. Current hero on mercury.com pairs a clean sans H1 with a serif accent line and a short subhead: *"Apply online in 10 minutes to experience banking unlike anything that's come before."* Hero imagery is a framed product UI mockup (their actual dashboard, lit clean) rather than photography. Two entry points: email input + **Open account** button, and **Launch demo** secondary.

### 2. Typography
**GT Walsheim** (sans, from Grilli Type) as the primary, paired with a **Tiempos-like** serif for editorial moments (section eyebrows, pull quotes, the occasional italic word). The vibe is "small magazine about money" not "fintech app."

### 3. Motion budget
**2/5.** Restrained. Testimonial carousel with portrait rotations, gentle UI reveals on scroll, no parallax, no shader. Feels deliberately adult.

### 4. Color palette
Light-first. Cream/warm-white field (#F5F4F0-ish), deep navy-black ink (#0A0A0A), signature Mercury orange (#E85D26-ish) used sparingly as a brand accent, occasional sage and terracotta supports. No neon. Dark mode exists on the app but marketing is cream.

### 5. THE ONE signature
**Editorial section headers in serif italic** over the product UI mockups. The combination of "magazine voice" copy above "clean bank app screenshot" is the Mercury tell — it positions banking as a considered thing, not a fintech stack.

### 6. Micro-interactions
- Subtle lift on card hover.
- Animated ledger lines in a few product demos (money moving from one row to another).
- Customer testimonial portrait carousel with soft cross-fade.

---

## 6. Ramp — ramp.com

### 1. Hero
H1 pattern: *"Time is money. Save both."* Massive condensed display type, very tight leading, sometimes set in two colors in the same word (the Ramp "yellow-on-black split word" move). Subhead short and declarative. Hero is split — left half type, right half product UI lit with a subtle 3D tilt. Two CTAs: **Get started** and a secondary pricing link.

### 2. Typography
**TWK Lausanne** as the primary sans (Swiss-rationalist feel, tight apertures) with **Burgess** as a serif accent — the Burgess italic is where the editorial charge lives. The H1 often sets at 120–160px, which on a marketing page reads like a magazine cover.

### 3. Motion budget
**3/5.** Meaningful. Large section transitions use a sticky canvas where big numbers count up (saving $N for customer X). Product UI mocks animate tiny approval/card-issuance moments.

### 4. Color palette
Dark-first (their 2024+ redesign flipped from light to dark). Background near-black (#0A0A0A) with the Ramp yellow/amber accent (#FFCF02-ish) doing heavy lifting. Occasional cream cards against the black to create card-stock texture. One accent color doing everything.

### 5. THE ONE signature
**Oversized display H1 with animated counter stats.** The "save X hours / save $Y" numbers tick up from zero on scroll, set in the same giant display face as the headline — the stats *are* headlines. This is the move to steal if you want "big, confident, numbers speak for themselves."

### 6. Micro-interactions
- Word-level type hover that swaps weight or color.
- Sticky scroll sections where UI screenshots morph through states.
- Mono-font numeric tickers.
- Heavy mouse-aware tilt on product cards.

---

## 7. Vapi — vapi.ai

### 1. Hero
H1: *"Voice AI agents for developers."* Clean sans, large but not enormous (48–56px), center. Subhead positions for developers. Background dark with a very subtle ambient gradient. Two CTAs: **Sign up** and **Request a demo**. Below-fold it leans on a numbered flow (001 / 002 / 003 pattern) walking through the pipeline.

### 2. Typography
Geometric sans, uses numbered section labels (001 / 002) in a mono-ish voice. Tight, utilitarian. No serif.

### 3. Motion budget
**2/5.** Light. No ambient hero animation, mostly scroll reveals. Notably absent: they *don't* show a waveform in the hero despite being a voice product. The decision is to look like a developer tool, not a voice gimmick.

### 4. Color palette
Dark mode. Near-black background, light text, restrained cool accent (faded blue/green). No neon.

### 5. THE ONE signature
**Numbered step cards (001 / 002 / 003) as the visual rhythm.** It converts "how it works" into an editorial spread. Developer-tool dignity without feeling cold.

### 6. Micro-interactions
- Expandable FAQ with smooth accordion.
- Tabbed use-case card (inbound vs outbound) with shared container morph.
- Large client logo row — trust-signal move.

---

## 8. Retell — retellai.com

### 1. Hero
H1: *"#1 AI Voice Agent Platform for Automating Calls."* Subhead: *"Meet your AI call center from the future."* Large sans, dark mode. Background is dark charcoal with gradient overlays. Rotating client logo carousel sits immediately under the H1 — the trust-signal-at-fold move. Two CTAs: **Try Our Live Demo** (primary) and **See Pricing** (secondary).

### 2. Typography
Geometric sans, multiple weights. Nothing proprietary or daring — standard modern-sans reading.

### 3. Motion budget
**3/5.** Logo carousel auto-rotates, section reveals on scroll, smooth fades. No waveform, no shader, no 3D.

### 4. Color palette
Dark charcoal field, near-white text, cyan/teal accents on interactive elements. Fairly standard "AI dashboard" palette.

### 5. THE ONE signature
**The "3rd Gen Voice AI" comparison matrix** — a structured table comparing Retell against IVR and older IVAs. Not a visual move, a positioning move, but worth noting: at this tier, a comparison grid *is* the money shot for a voice AI product because prospects are shopping vs. legacy incumbents. Hyde Tech can steal the structure, not the aesthetic.

### 6. Micro-interactions
- Form confirmation state ("Thank you…").
- Chevron-indicator nav expanders.
- Play buttons on case study video cards.

> Retell and Vapi are interesting as competitive references — they are *not* visually ambitious. Hyde Tech can out-design both by a mile and still feel category-appropriate.

---

## 9. Cursor — cursor.com

### 1. Hero
H1: *"Built to make you extraordinarily productive, Cursor is the best way to code with AI."* Large geometric display sans, generous tracking, weight 600–700. Subhead paired with download CTAs. Dark surface with an interactive demo frame showing the Cursor Desktop and CLI side-by-side, lit as the hero visual. Two CTAs: **Download for macOS ⤓** and **Try mobile agent →**.

### 2. Typography
Oversized geometric display for the H1 (their house sans), clean modern sans for nav/body. Weight contrast is the story — body at 400, H1 at 700+.

### 3. Motion budget
**3/5.** Spring-based animations on the interactive demo, staggered fade-ins on scroll, smooth state transitions in the embedded UI mockups. Not ambient — tied to scroll.

### 4. Color palette
Full dark mode. Charcoal/near-black field, white-to-light-gray type, bright cyan/electric-blue for interactive highlights and cursor indicators. Subtle gradient overlays on demo sections.

### 5. THE ONE signature
**Embedded functioning demos.** Not mockups — real-feel Cursor UI panels that animate task completions, show progress bars, stream code. They perform the product mid-page instead of describing it. The homepage *is* a demo reel.

### 6. Micro-interactions
- Hover states on testimonial cards with subtle shadow lift.
- Animated task progress bars inside sidebar demos.
- Scroll-triggered reveal on changelog.
- Smooth dropdown nav transitions.

---

## 10. Basement Studio — basement.studio

### 1. Hero
H1: *"A digital studio & branding powerhouse making cool shit that performs."* Set in a large expressive display sans, probably bespoke. Their 2k25 website is a full WebGL experience — the hero has a live 3D scene (they are famous for experimentation like pouring wine on surfaces to capture real texture for shaders). CTAs secondary — the navigation is **Contact Us** and a newsletter signup labeled *"Roll Me In."*

### 2. Typography
Expressive custom display for hero, cleaner sans for UI. Typography is treated as a graphic element — rotated, masked, scaled aggressively.

### 3. Motion budget
**5/5.** Full WebGL. Real-time shader backgrounds, 3D scenes, physics. Cursor-interactive elements throughout.

### 4. Color palette
Varies by scroll section — often a neutral base (black or cream) with a single loud accent that shifts between scenes. Their signature is *changing palette mid-page*.

### 5. THE ONE signature
**A live WebGL hero scene with real-surface textures** (photographed wine, metal, fabric turned into shader maps). It says "we are a studio that ships real craft" in three seconds. Impossible to template.

### 6. Micro-interactions
- Custom cursor throughout.
- Magnetic hover on every interactive element.
- Text kinetics on section headers (letters splay, rotate, spring).
- Trusted-by logo grid that doubles as a physics playground on hover.
- Scroll-tied scene transitions (camera moves through 3D space).

---

## 11. rauno.me — reference point for "craft"

Not a marketing site but the single best reference for what "premium" means in pixel terms. Rauno is staff design engineer at Vercel.

- Hero is a list. Literally a list, set in a restrained sans on near-black, reading *"Make it fast. Make it beautiful. Make it consistent. Make it carefully. Make it timeless. Make it soulful. Make it."* That's the whole hero.
- Motion: **1/5.** The whole site is static-with-polish. The animation budget is spent on *one* thing at a time — a copy-to-clipboard with a perfect spring "Copied" pill, a page transition that feels like a real app, a scroll-linked highlight that moves at just the right curve.
- Signature: **animation discipline.** Everything that moves has a reason, a perfect curve, and a correct duration (150–280ms for most things, 400–600ms only for meaningful transitions).
- What to steal: **one exquisite micro-interaction beats ten mediocre ones.** Pick your hill.

---

# Meta-analysis

## 7. Patterns that repeat across ≥5 of 10 — the 2026 consensus

1. **Dark-first or cream-first, never gray-default.** 7/10 (Vercel, Linear, Cursor, Ramp, Retell, Vapi, Basement) are committed dark. 3/10 (Anthropic, Mercury, Stripe) are committed warm light. *Nobody* is using neutral gray backgrounds anymore. Pick a side.
2. **One signature motion moment, not ambient noise.** Linear's scroll theater, Stripe's aurora, Vercel's globe pulses, Cursor's live demos, Ramp's counter tick. Sites at this tier budget motion to one hero device and let the rest breathe.
3. **Single accent color doing heavy lifting.** Ramp's amber, Linear's purple, Mercury's orange, Vercel's cyan, Stripe's violet. Not palette-of-six. *One* bright that owns the brand.
4. **Oversized H1, tight tracking, 500–700 weight.** 8/10 run the hero H1 at 56–120px with tight leading and tighter-than-default tracking. The oversized-type-with-minimal-copy hero is the 2026 default.
5. **Product theater in the fold, not below it.** 6/10 (Linear, Cursor, Mercury, Ramp, Retell, Stripe) show the actual product UI inside or immediately under the hero. "Hero = headline + framed product screenshot" is so normalized it's almost table-stakes. Not showing your product in the fold is now the bold move (Anthropic, Vapi).
6. **Trust logos at fold or immediately below.** 7/10 plant a customer/investor logo row in the first scroll. Retell does it *inside* the hero.
7. **Sticky scroll-scrubbed feature sections.** 5/10 (Linear, Ramp, Cursor, Stripe, Vercel) use sticky containers where content morphs as you scroll through. The storyboard-scroll is the consensus way to show features.
8. **Grain/noise overlay on backgrounds.** Stripe, Vercel, Basement, and current Anthropic all apply a subtle grain to kill gradient banding and add a "film" quality. 2026 does not have clean mathematical gradients — every gradient has 3% noise on it.

## 8. Outliers worth attention — differentiation candidates

- **Anthropic's serif italic inside sans paragraphs.** Almost nobody else does this on a tech marketing site. It reads as "authored" instead of "written by committee." You already have Instrument Serif italic — this is the move that unlocks its value.
- **Vapi's numbered-step (001 / 002 / 003) editorial rhythm.** Very few sites structure "how it works" as a numbered magazine spread. Developer-tool-dignity move.
- **Ramp's counter-tick stats in display type.** Stats set in the H1 typeface, counting up on scroll, treated as headlines not footnotes. High-signal for an ROI-driven pitch like "never miss a call."
- **Basement's live WebGL hero scene.** Uncopyable without budget. But a *cheap version* — a shader gradient with real grain that responds to mouse — is within reach and almost nobody in the IT-services / AI-phone-agent space has one.
- **Linear's mouse-parallax tilt on the product screenshot.** Subtle 2–4° CSS transform on mousemove. Technically trivial. Visually expensive.
- **Rauno's "one perfect micro-interaction" discipline.** The antidote to over-animating a small site.

## 9. What separates "premium" from "template"

This is the part worth dog-earing. The difference between the top 10 and the typical AI-startup landing page isn't *more* — it's *different decisions*:

1. **One font family well, not three families awkwardly.** Template sites use Inter + a Google serif + sometimes a mono. Premium sites either (a) use one family with serious weight discipline (Linear, Vercel), or (b) pair a proprietary-feeling serif with a sans and use them for *different voices* (Anthropic, Mercury, Ramp). The second case only works if the serif has real italic presence and is used sparingly.
2. **Type size that embarrasses you.** Premium H1s are 20–40% larger than you think they should be. 72px on a desktop H1 is *small* on a premium site in 2026. Go 96–120px.
3. **Grain on every gradient.** A flat gradient reads 2014. A gradient + 3–5% film grain reads 2026. This single change upgrades a site instantly.
4. **Motion that is earned, not ambient.** Floating-blob backgrounds and non-stop parallax scream template. Premium sites use motion to perform a specific thing (a deploy log, a counter, a product state change) and leave the rest still.
5. **Numbers set in the display face.** Template sites put stats in small caps or a secondary UI font. Premium sites treat numbers as typography — "95%" at 180px is a visual hero element, not a footnote.
6. **Dark that is actually dark.** #111 is a template dark. #08090A or pure black with warm-shifted text (not pure white) is premium dark. Same with cream — #F7F7F7 is a template cream; #F5F1EC with a slight warm cast is premium cream.
7. **Corner radius discipline.** Template sites use 8px everywhere. Premium sites use *varying* radii (e.g., 4px on inputs, 12px on cards, 24px on hero containers) to signal hierarchy.
8. **Specific proof, not generic claims.** Template: "Grow your business." Premium: "Answer 87% of calls that currently go to voicemail." Real numbers, real verbs.
9. **One beautiful micro-interaction.** A copy-to-clipboard that springs. A phone-number CTA that pulses. A button that has a real magnetic pull. Rauno-level craft on *one* thing beats mediocre craft on ten.
10. **Willingness to leave whitespace.** Template sites pack every pixel. Premium sites let entire viewports contain only a headline.

## 10. Ten concrete moves to incorporate into v6, ranked

Each tied to a specific observation above.

1. **Steal Anthropic's serif-italic-as-voice treatment (obs. §1 signature + §8 outlier).** You already loaded Instrument Serif italic and it's wasted. Use it on: the hero eyebrow (*"Hamilton, Ontario. On-site across the GTA."* — set that in italic serif), the one-word accent inside paragraphs (*"every call. **Answered**."* with "Answered" in italic serif purple), section H2 accents. Not for paragraphs. Not for navigation. Three places, consistent rule.
2. **Go oversized on the hero H1 (obs. §7.4 + §9.2).** Current v6 hero is three stacked lines. Push "Your phone. / Answered. / Always." to 96–120px desktop, 56–72px mobile, tracking at -0.02em, leading 0.95. Let it break the grid. If it feels too big, it's finally right.
3. **Add grain to every surface with a gradient (obs. §7.8 + §9.3).** A tileable 256×256 noise PNG at 3% opacity, `mix-blend-mode: overlay`, applied to the hero background, the transcript card, and any purple-to-black wash. This single CSS change is the biggest "looks expensive" win per line of code on the whole site.
4. **One signature motion, not ambient noise (obs. §7.2 + §9.4 + rauno §11).** Pick ONE animated thing in the hero. Candidate: a JetBrains Mono "LIVE CALL / 00:00" timer that actually counts up from 00:00, paired with a three-dot waveform that pulses on each transcript line append. Kill any other ambient animation in the hero. The phone-demo being the only thing moving is the move.
5. **Product theater inside the hero (obs. §7.5 + Linear §3 + Cursor §9).** The call-transcript card is your product screenshot. Treat it that way. Move it into the hero fold (not below), give it a subtle 3° mouse-parallax tilt on mousemove, and let lines stream in as if a real call is happening on page load. This is the single biggest "this is real, not a landing page" signal.
6. **Purple does heavy lifting; gold is the rare accent (obs. §7.3 + §9.5).** Revisit the palette rule: #7C3AED owns 90% of accent usage (buttons, links, brand highlights). #F59E0B appears only on: the LIVE pulse dot, one numeric stat, the phone number. This is Ramp's yellow-discipline move applied to gold.
7. **Big stats set in display weight (obs. §8 Ramp outlier + §9.5).** If you have any proof points — "answers calls in under 2 seconds," "books a job in 90 seconds," "$X in missed calls recovered" — set the number at 120–160px in Inter 800 (or Instrument Serif if you want the Mercury register), with the label tiny underneath. One stats row, three numbers, scroll-triggered count-up on the number itself.
8. **Numbered editorial rhythm for "How it works" (obs. §8 Vapi outlier).** Your services / how-it-works section: set **001 / 002 / 003** in JetBrains Mono at the top of each step block, in gold, with a hairline rule beneath. Turns a generic feature list into a magazine spread and uses your existing mono font for a second purpose.
9. **85% opacity frosted header on scroll (obs. Linear §3).** Header currently looks like a static bar. On scroll past the hero, `backdrop-filter: blur(16px)` + `background: rgba(15, 15, 26, 0.85)` + hairline bottom border. Takes 30 seconds of CSS, reads instantly premium.
10. **Kill any third typeface or weight that isn't pulling its weight (obs. §9.1 + §9.4).** Audit v6. Inter needs exactly 3 weights (400 body, 600 UI, 800 display). Instrument Serif needs only italic (not roman). JetBrains Mono needs only 500 (not 400/500/600/700). Drop the unused weights from the Google Fonts request — faster load *and* forces discipline.

---

## Notes on OpenAI, Perplexity, Apple, Arc

Blocked from automated fetch. From public design commentary: OpenAI's homepage in 2026 is still recognizably restrained sans-on-white, with the signature move being **large product tiles (ChatGPT, Sora, API, etc.) as the hero** rather than a headline — essentially turning the hero into an app grid. Perplexity leans hard into **FK Display Pro** (a serif with enormous personality) for headlines, paired with Inter body — closest public analogue to the Anthropic pattern. Apple's marketing sites remain the masters of scroll-scrubbed product theater (obs. §7.7). Arc's site (before the wind-down) was the best recent example of **manifesto-copy hero** — giant italic serif sentences as the entire hero, no product screenshot, zero doubt. If you want the most ambitious version of v6, the Arc/Anthropic/Perplexity axis is where to aim.

---

## Source links

- Linear design review: https://onepagelove.com/linear
- 2026 design trends: https://lovable.dev/guides/website-design-trends-2026 / https://uxpilot.ai/blogs/web-design-trends-2026
- Anthropic typography: https://type.today/en/journal/anthropic / https://fontofweb.com/pin/5066
- Mercury typography: https://fontsinuse.com/typefaces/7534/mercury / https://www.typewolf.com/mercury
- Ramp typography: https://fontsinuse.com/uses/38468/ramp-identity
- Rauno writing on interaction: https://rauno.me/craft/interaction-design
- Basement website-2k25 repo: https://github.com/basementstudio/website-2k25
- Vercel design guidelines: https://vercel.com/design/guidelines
