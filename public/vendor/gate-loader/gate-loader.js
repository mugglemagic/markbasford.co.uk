/**
 * <gate-loader> — a Stargate-style dialing loader.
 * Zero-dependency Web Component. Fan project; not affiliated with
 * MGM/Amazon. Glyph artwork: Wikimedia Commons, CC BY-SA 3.0
 * (see LICENSES-GLYPHS.md).
 */
import { GLYPHS } from './glyphs.js';

const SYMBOLS = 39;
const CHEVRON_COUNT = 7;
const SYM_STEP = 360 / SYMBOLS;
/** The gate carries nine chevron housings on a 40° lattice. Seven
 *  engage for a Milky Way address — down the right, up the left, master
 *  (0°) locking last — and array order is that engagement order. */
const CHEV_ANGLES = [40, 80, 120, -120, -80, -40, 0];
/** The remaining two housings, flanking the bottom. Present on the
 *  prop but dark on a seven-symbol address. */
const DECOR_ANGLES = [160, -160];
/**
 * The ring face carries continuous engraved bands rather than discrete
 * stamps, so they have to be drawn as one shape that closes on itself.
 * Emitted as a single SVG data URI used as a mask, in a 200×200 box
 * where 100 = the gate radius — so every radius below reads directly as
 * a percentage of that radius.
 */
function bandsUri() {
  const C = 100;
  const pt = (deg, r) => {
    const a = deg * Math.PI / 180;
    return `${(C + r * Math.sin(a)).toFixed(2)} ${(C - r * Math.cos(a)).toFixed(2)}`;
  };

  // Dense band of narrow lancets near the rim, points facing outward.
  const arches = [];
  const AN = 104, aIn = 91.2, aOut = 96.8, aW = (360 / AN) * 0.34;
  for (let i = 0; i < AN; i++) {
    const a = i * (360 / AN);
    arches.push(
      `M${pt(a - aW, aIn)}L${pt(a - aW, aOut - 1.5)}` +
      `Q${pt(a, aOut)} ${pt(a + aW, aOut - 1.5)}L${pt(a + aW, aIn)}Z`
    );
  }

  // Row of beads. Two arcs per circle keeps each one a closed subpath.
  const beads = [];
  const BN = 68, bR = 88.6, bRad = 1.2;
  for (let i = 0; i < BN; i++) {
    const [x, y] = pt(i * (360 / BN), bR).split(' ').map(Number);
    beads.push(
      `M${(x - bRad).toFixed(2)} ${y.toFixed(2)}` +
      `a${bRad} ${bRad} 0 1 0 ${bRad * 2} 0` +
      `a${bRad} ${bRad} 0 1 0 ${-bRad * 2} 0Z`
    );
  }

  // One continuous zigzag, alternating between two radii.
  const ZN = 96, zIn = 83.4, zOut = 85.4;
  let zig = '';
  for (let i = 0; i <= ZN; i++) {
    zig += (i ? 'L' : 'M') + pt(i * (360 / ZN), i % 2 ? zOut : zIn);
  }

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">` +
    `<path fill="#fff" d="${arches.join('')}${beads.join('')}"/>` +
    `<path fill="none" stroke="#fff" stroke-width="1.1" d="${zig}Z"/>` +
    `</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
/** Earth's address per "Solitudes", ending on the point of origin. */
const EARTH_ADDRESS = [28, 26, 5, 36, 11, 29, 1];
const ORDINALS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const GLYPH_FALLBACK_BASE =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Stargate_SG%C2%B71_symbol_';
let warnedFallback = false;

const glyphUrl = (n) => {
  if (GLYPHS) return `url("${GLYPHS[n - 1]}")`;
  if (!warnedFallback) {
    console.warn(
      '[gate-loader] Inlined glyphs not built; hotlinking Wikimedia ' +
      'Commons (dev fallback). Run `npm run build:glyphs`.'
    );
    warnedFallback = true;
  }
  return `url("${GLYPH_FALLBACK_BASE}${String(n).padStart(2, '0')}.svg")`;
};

const template = document.createElement('template');
template.innerHTML = /* html */ `
<style>
  /* Makes the chevron slat glow animatable: a plain custom property
     can't be transitioned, so registering it as <color> is what lets
     the louvre gaps fade up with the rest of the chevron. Degrades to
     an instant switch where @property is unsupported. */
  @property --_slat {
    syntax: '<color>';
    inherits: true;
    initial-value: #14100a;
  }

  :host {
    /* Themeable custom properties */
    --size: 320px;
    --metal-hi: #4a545f;
    --metal-mid: #333c48;
    --metal-lo: #171c23;
    --glyph: #8b93a3;
    --amber: #ffb347;
    --amber-hot: #ffd9a0;
    --horizon: #7ec8ff;

    display: inline-grid;
    justify-items: center;
    gap: calc(var(--size) * 0.06);
    font-family: ui-monospace, "SF Mono", "Cascadia Code", Menlo, monospace;
    color: var(--amber);

    /* Internal (not public API): tiling greyscale grain, blended over
     * the metal to break up flat gradients. feTurbulence keeps these
     * data URIs — no image asset, no build step. */
    --_grain:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23g)' opacity='.55'/%3E%3C/svg%3E");
    /* Anisotropic base frequency streaks the noise into veins, for the
     * marbled cast look of the prop rather than even sandblasting. */
    --_marble:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.014 .04' numOctaves='4' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23m)' opacity='.55'/%3E%3C/svg%3E");

    /* Continuous engraved bands for the ring face (see bandsUri). */
    --_bands: ${bandsUri()};
  }
  :host([no-status]) .status { display: none; }
  * { box-sizing: border-box; }

  /* Only the outer annulus of .gate is ever visible — .track covers
   * everything inside 82% of the radius — so both the relief and the
   * metal ramp are mapped across that band rather than the full disc. */
  .gate {
    position: relative;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background:
      /* Machined cross-section: inner chamfer, lit lip, a concentric
       * groove across the face, then the outer rim rolling away.
       * Centred, because this is the ring's *form* — an off-axis ramp
       * here is what made the body read as a lit sphere. */
      radial-gradient(circle closest-side,
        transparent 80%,
        rgba(0,0,0,.34) 83%,
        rgba(255,255,255,.038) 84.8%,
        rgba(255,255,255,.012) 87.5%,
        rgba(255,255,255,.012) 90.5%,
        rgba(0,0,0,.28) 92.3%,
        rgba(255,255,255,.013) 93.8%,
        rgba(0,0,0,.10) 96.8%,
        rgba(0,0,0,.62) 100%),
      /* Key light and opposing occlusion. Baking these in is fine
       * here: unlike .track, .gate never rotates. */
      radial-gradient(circle at 34% 24%,
        rgba(255,255,255,.05) 0%, rgba(255,255,255,0) 56%),
      radial-gradient(circle at 74% 84%,
        rgba(0,0,0,.32) 0%, rgba(0,0,0,0) 50%),
      /* Coarse tile: broad casting mottle rather than fine speckle,
       * which reads as digital noise at this scale. */
      var(--_grain),
      var(--_marble),
      /* Metal ramp across the visible band, so --metal-hi lands on the
       * crest instead of under the hidden centre. */
      radial-gradient(circle closest-side,
        var(--metal-mid) 79.5%,
        var(--metal-hi) 85%,
        var(--metal-mid) 89%,
        var(--metal-mid) 93%,
        var(--metal-lo) 100%);
    background-size:
      auto, auto, auto,
      calc(var(--size) * 0.62), calc(var(--size) * 1.15), auto;
    background-blend-mode:
      normal, normal, normal, soft-light, soft-light, normal;
    box-shadow:
      0 0 calc(var(--size) * 0.09) rgba(0,0,0,.8),
      inset 0 0 0 1px rgba(255,255,255,.016);
  }

  /* Continuous engraved bands on the ring face: a dense lancet course
   * near the rim, a bead row, and a fine zigzag. All pure relief in the
   * body's own colour — no tint — and unbroken all the way round, so no
   * radial seams cut across them. Sits above the body's material but
   * below the chevrons. */
  .engrave {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
  }
  /* One stencil, drawn twice: the recess, then the same shape nudged
   * outward as a light lip. That offset pair is what reads as cut into
   * the surface rather than printed on it. */
  .engrave::before,
  .engrave::after {
    content: "";
    position: absolute;
    inset: 0;
    -webkit-mask: var(--_bands) center / 100% 100% no-repeat;
    mask: var(--_bands) center / 100% 100% no-repeat;
  }
  .engrave::before { background: rgba(0,0,0,.24); }
  .engrave::after {
    background: rgba(255,255,255,.05);
    transform: scale(1.004);
  }

  /* The ring carries only *material* — segment relief and grain. The
   * key light lives on .sheen, which does not rotate: baking a
   * highlight in here would spin it around with the ring. Groove
   * centres stay on the 9.2307deg symbol lattice, so each glyph still
   * sits dead centre of its segment face (period offset 5.04deg). */
  .track {
    position: absolute;
    inset: 8.98%;
    border-radius: 50%;
    background:
      /* Divider grooves, with the chamfered lip of each neighbouring
       * segment catching a little light either side. */
      repeating-conic-gradient(from 4.19deg,
        rgba(0,0,0,.78) 0deg 0.85deg,
        rgba(255,255,255,.034) 1.34deg,
        rgba(255,255,255,0) 2.64deg,
        rgba(255,255,255,0) 7.44deg,
        rgba(255,255,255,.034) 8.74deg,
        rgba(0,0,0,.78) 9.2307deg),
      /* Domed cross-section: both rims fall into shadow, crest runs
       * under the glyphs at 84% of the track radius. */
      radial-gradient(circle closest-side,
        transparent 74%,
        rgba(0,0,0,.38) 80%,
        rgba(255,255,255,.016) 89%,
        rgba(0,0,0,.5) 100%),
      var(--_grain),
      radial-gradient(circle closest-side, #333a45 0%, #1d222b 70%);
    background-size: auto, auto, calc(var(--size) * 0.4), auto;
    background-blend-mode: normal, normal, soft-light, normal;
    box-shadow:
      inset 0 0 calc(var(--size) * 0.02) rgba(0,0,0,.85),
      0 0 calc(var(--size) * 0.012) rgba(0,0,0,.95);
    transition: transform 0ms cubic-bezier(.25,.1,.25,1);
    will-change: transform;
  }

  /* Fixed studio light over the ring: sits above .track and its
   * glyphs, below the horizon and chevrons, and never rotates. */
  .sheen {
    position: absolute;
    inset: 8.98%;
    border-radius: 50%;
    pointer-events: none;
    background:
      /* Occlusion from the outer ring's inner wall overhanging the
       * symbol ring. Must live here rather than on .gate: .track and
       * its glyphs paint above .gate's background, so only this layer
       * can shade them. */
      radial-gradient(circle closest-side,
        transparent 86%, rgba(0,0,0,.5) 100%),
      radial-gradient(circle at 34% 26%,
        rgba(255,255,255,.045) 0%,
        rgba(255,255,255,.014) 26%,
        rgba(255,255,255,0) 54%),
      radial-gradient(circle at 72% 82%,
        rgba(0,0,0,.36) 0%,
        rgba(0,0,0,0) 48%);
  }

  .symbol {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(var(--size) * 0.052);
    height: calc(var(--size) * 0.048);
    transform:
      translate(-50%, -50%)
      rotate(var(--a))
      translateY(calc(var(--size) * -0.3650));
  }
  .symbol .g {
    position: absolute;
    inset: 0;
    /* Raised-metal shading across each glyph. The gradient angle
     * subtracts the symbol's own placement rotation, so highlights
     * stay world-fixed instead of pinwheeling around the ring. */
    background-color: var(--glyph);
    background-image: linear-gradient(calc(155deg - var(--a)),
      rgba(255,255,255,.10) 0%,
      rgba(255,255,255,0) 46%,
      rgba(0,0,0,.16) 100%);
    opacity: .85;
    -webkit-mask: var(--u) center / contain no-repeat;
    mask: var(--u) center / contain no-repeat;
    transition: background-color 300ms ease, filter 300ms ease, opacity 300ms ease;
  }
  .symbol.lit .g {
    background-color: var(--amber);
    opacity: 1;
    filter: drop-shadow(0 0 4px var(--amber));
  }

  .horizon {
    position: absolute;
    inset: 18.01%;
    border-radius: 50%;
    /* Clips the caustic lobes to the pool. The kawoosh therefore can't
     * live in here — see .burst. */
    overflow: hidden;
    background: radial-gradient(circle at 50% 45%, #0a0e15 0%, #04050a 80%);
    box-shadow: inset 0 0 calc(var(--size) * 0.05) #000;
    transition: background 900ms ease, box-shadow 900ms ease;
  }
  .gate.open .horizon {
    background: radial-gradient(circle at 45% 40%,
      #dff2ff 0%, var(--horizon) 22%, #2b6ca8 55%, #10263f 100%);
    box-shadow:
      inset 0 0 calc(var(--size) * 0.06) rgba(126,200,255,.7),
      0 0 calc(var(--size) * 0.12) rgba(126,200,255,.35);
    /* Delayed past the burst so the surface settles before it breathes. */
    animation: shimmer 3.4s ease-in-out 1000ms infinite;
  }

  /* Caustic lobes: soft pools of light drifting over the surface at
   * different rates, which is what makes the membrane read as liquid
   * rather than a lit disc. Also held back until the burst has passed. */
  .horizon .lobe {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    mix-blend-mode: screen;
    transition: opacity 900ms ease;
  }
  /* Typed by tag, not position, so lobes and ripples can be interleaved
   * in the markup without the selectors shifting. */
  .horizon i.lobe:nth-of-type(1) {
    inset: -20% 6% 24% -16%;
    background: radial-gradient(circle closest-side,
      rgba(223,242,255,.5), rgba(223,242,255,0) 72%);
  }
  .horizon i.lobe:nth-of-type(2) {
    inset: 18% -18% -22% 12%;
    background: radial-gradient(circle closest-side,
      rgba(126,200,255,.45), rgba(126,200,255,0) 74%);
  }
  .horizon i.lobe:nth-of-type(3) {
    inset: 26% 24% -10% -8%;
    background: radial-gradient(circle closest-side,
      rgba(255,255,255,.3), rgba(255,255,255,0) 68%);
  }
  .gate.open .horizon .lobe { opacity: 1; }
  .gate.open .horizon i.lobe:nth-of-type(1) { animation: drift-a 7s   ease-in-out 1000ms infinite; }
  .gate.open .horizon i.lobe:nth-of-type(2) { animation: drift-b 8.5s ease-in-out 1000ms infinite; }
  .gate.open .horizon i.lobe:nth-of-type(3) { animation: drift-c 6s   ease-in-out 1000ms infinite; }
  /* Slight scaleY differences keep the lobes from reading as rigid
   * circles sliding about — a surface under tension, not discs. */
  @keyframes drift-a {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%      { transform: translate(9%, 7%) scale(1.12, 1.02); }
    66%      { transform: translate(-6%, 11%) scale(.94, 1.06); }
  }
  @keyframes drift-b {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40%      { transform: translate(-11%, -6%) scale(1.09, .96); }
    75%      { transform: translate(7%, -10%) scale(.92, 1.08); }
  }
  @keyframes drift-c {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50%      { transform: translate(5%, -9%) scale(1.15, 1.04); }
  }

  /* Travelling wavefronts. Each ring is an independent element on its
   * own delay, so the sequence loops seamlessly — a scaled repeating
   * gradient can't, because scaling multiplies ring spacing as well as
   * radius and the pattern never lines back up. Rings die at the rim,
   * where .horizon's overflow clip cuts them. */
  .horizon .ripple {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    opacity: 0;
    mix-blend-mode: screen;
    /* Narrow crest with a short trailing skirt: a broad falloff reads as
     * a glow rather than a wavefront. */
    background: radial-gradient(circle closest-side,
      rgba(255,255,255,0) 67%,
      rgba(223,242,255,.2) 79%,
      rgba(255,255,255,.5) 87%,
      rgba(200,232,255,.16) 94%,
      rgba(223,242,255,0) 100%);
  }
  .gate.open .horizon .ripple {
    animation: ripple 5.6s cubic-bezier(.32,.5,.5,1) var(--d) infinite;
  }
  /* Crests slow and flatten as they spread, as surface waves do. */
  @keyframes ripple {
    0%   { transform: scale(.1) scaleY(1.04);  opacity: 0; }
    14%  { opacity: .9; }
    62%  { opacity: .34; }
    100% { transform: scale(1.06) scaleY(.99); opacity: 0; }
  }

  /* The kawoosh. A sibling of .horizon, not a child, because .horizon
   * clips its contents and the vortex has to erupt out past the ring.
   * Sized to the whole gate so scale 1 reaches the rim exactly and
   * scale .5 is the pool — it never exceeds the component's own box,
   * so it can't add scrollable overflow to a consumer's layout. */
  .burst {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
  }
  .burst::before,
  .burst::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    opacity: 0;
    mix-blend-mode: screen;
  }
  /* Billowing core: surges out, then falls back into the pool. */
  .burst::before {
    background: radial-gradient(circle closest-side,
      #fff 0%, #e6f5ff 16%, var(--horizon) 42%,
      rgba(43,108,168,.4) 70%, rgba(16,38,63,0) 100%);
  }
  /* Shock front running ahead of the core. */
  .burst::after {
    background: radial-gradient(circle closest-side,
      rgba(255,255,255,0) 56%, rgba(223,242,255,.8) 74%,
      rgba(126,200,255,.3) 87%, rgba(126,200,255,0) 100%);
  }
  .gate.open .burst::before {
    animation: kawoosh 1000ms cubic-bezier(.16,.84,.3,1) forwards;
  }
  .gate.open .burst::after {
    animation: kawoosh-wave 1150ms cubic-bezier(.12,.78,.28,1) forwards;
  }
  @keyframes kawoosh {
    0%   { transform: scale(.08); opacity: 0; }
    9%   { opacity: 1; }
    34%  { transform: scale(1);   opacity: .95; }
    58%  { transform: scale(.66); opacity: .6; }
    100% { transform: scale(.64);  opacity: 0; }
  }
  @keyframes kawoosh-wave {
    0%   { transform: scale(.28); opacity: 0; }
    14%  { opacity: .8; }
    100% { transform: scale(1);   opacity: 0; }
  }
  @keyframes shimmer {
    0%, 100% { filter: brightness(1); }
    50%      { filter: brightness(1.14); }
  }

  .chevron-slot {
    position: absolute;
    inset: 0;
    transform: rotate(var(--a));
    pointer-events: none;
  }
  /* Seated inside the outer rim, not overhanging it: a housing that
   * breaks the circle makes the whole gate read as a cog. The point
   * reaches just past the track edge, as it does on the prop. */
  .chevron {
    position: absolute;
    top: calc(var(--size) * 0.007);
    left: 50%;
    width: calc(var(--size) * 0.119);
    height: calc(var(--size) * 0.0878);
    transform: translateX(-50%);
    transition: transform 140ms ease;
    --_slat: #14100a;
  }
  .chevron.clunk {
    transform: translateX(-50%) translateY(calc(var(--size) * 0.010));
  }

  /* Outer housing: a notched, stepped arrowhead rather than a plain
   * pentagon — on the prop the shoulders stand proud of the ring. */
  .chevron .housing {
    position: absolute;
    inset: 0;
    clip-path: polygon(
      50% 0, 66% 7%, 87% 7%, 100% 25%, 100% 39%,
      50% 100%, 0 39%, 0 25%, 13% 7%, 34% 7%);
    background:
      linear-gradient(168deg,
        rgba(255,255,255,.06) 0%, rgba(255,255,255,0) 30%),
      linear-gradient(168deg,
        var(--metal-hi) 0%, var(--metal-mid) 48%, var(--metal-lo) 100%);
    filter: drop-shadow(0 calc(var(--size) * 0.004)
                          calc(var(--size) * 0.006) rgba(0,0,0,.6));
  }
  /* Inner terrace, stepped down from the housing face. */
  .chevron .plate {
    position: absolute;
    inset: 15% 15% 9% 15%;
    clip-path: polygon(50% 0, 100% 19%, 100% 34%, 50% 100%, 0 34%, 0 19%);
    background: linear-gradient(168deg, var(--metal-mid), var(--metal-lo) 80%);
  }
  /* The glowing eye: a broad trapezoid filling most of the terrace,
   * not a hairline triangle. */
  .chevron .light {
    position: absolute;
    inset: 27% 27% 24% 27%;
    clip-path: polygon(4% 0, 96% 0, 66% 100%, 34% 100%);
    background: #1a1108;
    transition: background 250ms ease, filter 250ms ease;
  }
  .chevron.lit .light {
    background: linear-gradient(#fff4e0 0%, var(--amber-hot) 32%, var(--amber) 100%);
    filter:
      drop-shadow(0 0 calc(var(--size) * 0.015) var(--amber))
      drop-shadow(0 0 calc(var(--size) * 0.04) rgba(255,140,0,.6));
  }
  .chevron.flash .light {
    background: var(--amber-hot);
    filter: drop-shadow(0 0 calc(var(--size) * 0.05) var(--amber-hot));
  }

  /* The master is distinguished by width only. Height is deliberately
   * left at the shared value so all nine tips sit on one circle just
   * clear of the glyph band — a taller master reaches further inward
   * and covers the symbols under it. */
  .chevron.master {
    width: calc(var(--size) * 0.153);
  }

  /* Slatted louvres flanking every chevron, light escaping between the
   * fins. Drawn as a gradient so the fin count costs no DOM; the gap
   * colour animates through the registered --_slat property. */
  /* Flanking the light window, not above it: the window spans y 27-76%,
   * so the louvres run y 28-54% — the band where there is still clear
   * space outboard of it (27% of the box at the top, 15% by the
   * bottom; below y 60% the arm has closed to under 10%). The clip
   * follows the arm's inner edge, which crosses the block from x 0 at
   * the top to x 12.3% at the bottom. */
  .wing {
    position: absolute;
    top: 28%;
    width: 21%;
    height: 26%;
    pointer-events: none;
    opacity: .9;
    /* Rungs run tangentially and stack radially, i.e. horizontal in the
     * chevron's own (rotated) frame. The gradient axis is therefore
     * near-vertical — an axis near 90deg would lay the fins out
     * radially, at right angles to the prop. */
    background: repeating-linear-gradient(178deg,
      transparent 0 14%,
      var(--metal-lo) 14% 28%,
      var(--_slat) 28% 60%,
      var(--metal-lo) 60% 74%,
      transparent 74% 100%);
    /* Tile height sets the pitch: ~6 rungs down each shoulder. */
    background-size: 100% 17%;
    transition: --_slat 260ms ease, filter 260ms ease;
  }
  .wing.l { left: 4%;  clip-path: polygon(0 0, 100% 0, 100% 100%, 42% 100%); }
  .wing.r { right: 4%; clip-path: polygon(0 0, 100% 0, 58% 100%, 0 100%); }
  .chevron.lit .wing {
    --_slat: var(--amber);
    filter: drop-shadow(0 0 calc(var(--size) * 0.012) rgba(255,150,30,.75));
  }
  .chevron.lit .wing.l { transition-delay: 90ms; }
  .chevron.lit .wing.r { transition-delay: 170ms; }

  /* The two housings that never light on a seven-symbol address. */
  .chevron.decor .light { background: #14171c; }

  .status {
    font-size: clamp(10px, calc(var(--size) * 0.042), 16px);
    letter-spacing: .18em;
    text-transform: uppercase;
    min-height: 1.4em;
    text-shadow: 0 0 12px rgba(255,179,71,.45);
  }
  .status .dim { opacity: .45; }

  @media (prefers-reduced-motion: reduce) {
    .track, .chevron, .horizon, .horizon .lobe { transition: none !important; }
    .gate.open .horizon,
    .gate.open .horizon .lobe,
    .gate.open .horizon .ripple,
    .gate.open .burst::before,
    .gate.open .burst::after { animation: none !important; }
    /* Ripples default to opacity 0, so stopping them leaves nothing —
     * a still pool rather than four frozen rings. */
    /* Suppress the eruption entirely rather than leaving a static bright
     * disc parked over the gate. The lobes stay, unanimated, as fixed
     * highlights on the pool. */
    .burst { display: none; }
  }
</style>
<div class="gate" part="gate">
  <div class="engrave"></div>
  <div class="track"></div>
  <div class="sheen"></div>
  <div class="horizon" part="horizon"><i class="lobe"></i><i class="lobe"></i><i class="lobe"></i><b class="ripple" style="--d:1000ms"></b><b class="ripple" style="--d:1930ms"></b><b class="ripple" style="--d:2870ms"></b><b class="ripple" style="--d:3800ms"></b><b class="ripple" style="--d:4730ms"></b><b class="ripple" style="--d:5670ms"></b></div>
  <div class="burst"></div>
  <div class="chevrons"></div>
</div>
<p class="status" part="status" aria-live="polite"><span class="dim">standby</span></p>
`;

export class GateLoader extends HTMLElement {
  static observedAttributes = ['size', 'mode', 'canon', 'address'];

  #gate; #track; #statusEl;
  #chevrons = []; #symbols = [];
  #angle = 0;
  #engaged = 0;
  #targetEngaged = 0;
  #pumping = false;
  #gen = 0;
  #reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
    this.#gate = root.querySelector('.gate');
    this.#track = root.querySelector('.track');
    this.#statusEl = root.querySelector('.status');
    this.#buildSymbols();
    this.#buildChevrons(root.querySelector('.chevrons'));
  }

  /* ── Public API ─────────────────────────────────────── */

  /** 'loop' (default): dials continuously. 'manual': driven by
   *  `progress` / `engageNext()` / `complete()`. */
  get mode() { return this.getAttribute('mode') === 'manual' ? 'manual' : 'loop'; }
  set mode(v) { this.setAttribute('mode', v); }

  /** 'series' (default): the top chevron clunks for every symbol.
   *  'movie': each engaging chevron clunks itself. */
  get canon() { return this.getAttribute('canon') === 'movie' ? 'movie' : 'series'; }
  set canon(v) { this.setAttribute('canon', v); }

  /** Seven 1-based glyph numbers. Defaults to Earth's address. */
  get address() {
    const raw = this.getAttribute('address');
    if (!raw) return [...EARTH_ADDRESS];
    const parsed = raw.split(',').map(Number);
    return parsed.length === CHEVRON_COUNT &&
      parsed.every(n => Number.isInteger(n) && n >= 1 && n <= SYMBOLS)
      ? parsed : [...EARTH_ADDRESS];
  }
  set address(arr) { this.setAttribute('address', arr.join(',')); }

  /** Manual mode: 0–1. Engages floor(progress × 7) chevrons,
   *  sequentially, however fast progress jumps. 1 opens the gate. */
  get progress() { return this.#engaged / CHEVRON_COUNT; }
  set progress(p) {
    const clamped = Math.min(1, Math.max(0, Number(p) || 0));
    this.#targetEngaged = Math.max(
      this.#targetEngaged,
      Math.floor(clamped * CHEVRON_COUNT + 1e-9)
    );
    this.#pump();
  }

  /** Manual mode: engage the next chevron in the address. */
  engageNext() {
    this.#targetEngaged = Math.min(CHEVRON_COUNT, this.#targetEngaged + 1);
    return this.#pump();
  }

  /** Manual mode: engage any remaining chevrons and open the gate. */
  complete() {
    this.#targetEngaged = CHEVRON_COUNT;
    return this.#pump();
  }

  /** Shut down the wormhole and reset all chevrons. */
  reset() {
    this.#gen++;
    this.#pumping = false;
    this.#engaged = 0;
    this.#targetEngaged = 0;
    this.#gate.classList.remove('open');
    this.#chevrons.forEach(c => c.classList.remove('lit', 'clunk', 'flash'));
    this.#symbols.forEach(s => s.classList.remove('lit'));
    this.#setStatus('<span class="dim">standby</span>');
    this.dispatchEvent(new CustomEvent('reset'));
    if (this.isConnected && this.mode === 'loop') this.#loop();
  }

  /* ── Lifecycle ──────────────────────────────────────── */

  connectedCallback() {
    if (this.mode === 'loop') this.#loop();
  }

  disconnectedCallback() {
    this.#gen++; // cancels any in-flight sequence
    this.#pumping = false;
  }

  attributeChangedCallback(name, oldV, newV) {
    if (oldV === newV) return;
    if (name === 'size' && newV) this.style.setProperty('--size', /^\d+$/.test(newV) ? `${newV}px` : newV);
    if (name === 'mode' && this.isConnected) this.reset();
  }

  /* ── Internals ──────────────────────────────────────── */

  #buildSymbols() {
    for (let i = 0; i < SYMBOLS; i++) {
      const el = document.createElement('div');
      el.className = 'symbol';
      el.style.setProperty('--a', `${SYM_STEP * i}deg`);
      const g = document.createElement('div');
      g.className = 'g';
      g.setAttribute('aria-hidden', 'true');
      // Set --u programmatically: glyphUrl() is a double-quoted url(),
      // and inlining it into a style="" attribute would collide with
      // the attribute's own quotes and truncate the property.
      g.style.setProperty('--u', glyphUrl(i + 1));
      el.appendChild(g);
      this.#track.appendChild(el);
      this.#symbols.push(el);
    }
  }

  /** Nine housings. Only the seven engaging ones are collected into
   *  #chevrons, so indices there stay 1:1 with the address and the
   *  `chevron` event's 1–7 numbering. */
  #buildChevrons(container) {
    const housing = (a, { decor = false } = {}) => {
      const slot = document.createElement('div');
      slot.className = 'chevron-slot';
      slot.style.setProperty('--a', `${a}deg`);
      const cls = ['chevron'];
      if (a === 0) cls.push('master');
      if (decor) cls.push('decor');
      // Wings come after the housing: the louvres are cut into the
      // chevron's arms, so they must paint on top of it.
      slot.innerHTML =
        `<div class="${cls.join(' ')}">` +
        '<div class="housing"></div><div class="plate"></div>' +
        '<div class="wing l"></div><div class="wing r"></div>' +
        '<div class="light"></div></div>';
      container.appendChild(slot);
      return slot.firstElementChild;
    };
    DECOR_ANGLES.forEach(a => housing(a, { decor: true }));
    CHEV_ANGLES.forEach(a => this.#chevrons.push(housing(a)));
  }


  get #master() { return this.#chevrons[this.#chevrons.length - 1]; }

  #setStatus(html) { this.#statusEl.innerHTML = html; }

  #wait(ms) { return new Promise(r => setTimeout(r, ms)); }

  #spinTo(delta, ms) {
    return new Promise(resolve => {
      if (this.#reduced || ms === 0) { resolve(); return; }
      this.#angle += delta;
      this.#track.style.transitionDuration = `${ms}ms`;
      this.#track.style.transform = `rotate(${this.#angle}deg)`;
      const done = () => { clearTimeout(t); resolve(); };
      const t = setTimeout(done, ms + 120);
      this.#track.addEventListener('transitionend', done, { once: true });
    });
  }

  /** Signed rotation putting symbol index s under the top chevron. */
  #deltaToSymbol(s, dir) {
    const target = ((-s * SYM_STEP) % 360 + 360) % 360;
    const cur = ((this.#angle % 360) + 360) % 360;
    let d = target - cur;
    if (dir > 0 && d <= 0) d += 360;
    if (dir < 0 && d >= 0) d -= 360;
    return d;
  }

  async #engage(i, gen) {
    const glyph = this.address[i];
    const dir = i % 2 ? -1 : 1;
    const sweep = this.#deltaToSymbol(glyph - 1, dir);
    this.#setStatus(`chevron ${ORDINALS[i]} <span class="dim">encoding\u2026</span>`);
    await this.#spinTo(sweep, this.#reduced ? 0 : 380 + Math.abs(sweep) * 3);
    if (gen !== this.#gen) return;

    const clunker = this.canon === 'movie' ? this.#chevrons[i] : this.#master;
    clunker.classList.add('clunk', 'flash');
    await this.#wait(this.#reduced ? 250 : 160);
    if (gen !== this.#gen) { clunker.classList.remove('clunk', 'flash'); return; }
    clunker.classList.remove('clunk', 'flash');

    this.#chevrons[i].classList.add('lit');
    const last = i === CHEVRON_COUNT - 1;
    if (last) this.#symbols[glyph - 1].classList.add('lit');
    this.#setStatus(`chevron ${ORDINALS[i]} ${last ? 'locked' : 'encoded'}`);
    this.#engaged = i + 1;
    this.dispatchEvent(new CustomEvent('chevron', {
      detail: { chevron: i + 1, glyph, locked: last }
    }));
    await this.#wait(this.#reduced ? 400 : 300);
  }

  #open() {
    this.#gate.classList.add('open');
    this.#setStatus('wormhole established');
    this.dispatchEvent(new CustomEvent('wormhole'));
  }

  /** Manual-mode sequencer: engages toward #targetEngaged. */
  async #pump() {
    if (this.#pumping) return;
    this.#pumping = true;
    const gen = this.#gen;
    try {
      while (gen === this.#gen && this.#engaged < this.#targetEngaged) {
        await this.#engage(this.#engaged, gen);
      }
      if (gen === this.#gen && this.#engaged >= CHEVRON_COUNT &&
          !this.#gate.classList.contains('open')) {
        this.#open();
      }
    } finally {
      if (gen === this.#gen) this.#pumping = false;
    }
  }

  async #loop() {
    const gen = ++this.#gen;
    await this.#wait(600);
    while (gen === this.#gen && this.isConnected && this.mode === 'loop') {
      for (let i = 0; i < CHEVRON_COUNT && gen === this.#gen; i++) {
        await this.#engage(i, gen);
      }
      if (gen !== this.#gen) return;
      this.#open();
      await this.#wait(4500);
      if (gen !== this.#gen) return;
      this.#engaged = 0;
      this.#gate.classList.remove('open');
      this.#chevrons.forEach(c => c.classList.remove('lit'));
      this.#symbols.forEach(s => s.classList.remove('lit'));
      this.dispatchEvent(new CustomEvent('cycle'));
      await this.#wait(600);
    }
  }
}

if (!customElements.get('gate-loader')) {
  customElements.define('gate-loader', GateLoader);
}
