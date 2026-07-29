---
title: Stargate Loader
tagline: A Stargate-style dialing sequence as a zero-dependency loading animation.
date: 2026-07-28
tags:
  - Web Components
  - Animation
  - Accessibility
  - Zero Dependencies
status: Alpha
repo: https://github.com/mugglemagic/stargate-loader
npm_package: gate-loader
demo: stargate-loader
order: 1
---

## What it is

`gate-loader` is a custom element that turns waiting into a dialing sequence. The
inner ring spins, seven of the gate's nine chevrons encode Earth's canonical
address — `28, 26, 5, 36, 11, 29, 1` — and when the seventh locks, the wormhole
opens.

It is a single Web Component with no dependencies and no framework. Drop the
module on a page and `<gate-loader>` works, in React, in Vue, in a Rails view,
in plain HTML.

## Why build it

Most loading spinners are a shrug. They tell you the page is busy and nothing
else, so the wait feels like dead time. A dialing sequence does something a
spinner cannot: it has *stages*. Seven chevrons is seven pieces of visible
progress, and each one that locks is a small promise kept.

That maps onto real work rather well. Seven boot steps, seven files to upload,
or a plain 0–1 progress figure — the component takes any of them and turns
abstract percentages into something you can watch resolve.

## Using it

Once it is published, install and import:

```bash
npm install gate-loader
```

```js
import 'gate-loader'
```

Or pull it straight off a CDN:

```html
<script type="module" src="https://unpkg.com/gate-loader"></script>
```

Then use it like any other element:

```html
<gate-loader size="320"></gate-loader>
```

### Driving it from real progress

In `manual` mode the gate stops dialing on its own and follows you instead. Set
`progress` to a number between 0 and 1 and it engages `floor(progress × 7)`
chevrons — sequentially, however far the number jumps, so a fetch that leaps
from 10% to 80% still plays every chevron in between rather than snapping.

```js
const gate = document.querySelector('gate-loader')
gate.mode = 'manual'

const res = await fetch('/api/big-thing')
const total = Number(res.headers.get('content-length'))
let loaded = 0

for await (const chunk of res.body) {
  loaded += chunk.length
  gate.progress = loaded / total   // 1 opens the wormhole
}
```

For discrete work — a boot sequence, a multi-step wizard — call `engageNext()`
per stage and `complete()` at the end:

```js
for (const step of bootSteps) {
  await step()
  await gate.engageNext()
}
await gate.complete()
```

### API

| Attribute   | Property   | Values                            | Default             |
| ----------- | ---------- | --------------------------------- | ------------------- |
| `size`      | —          | px or any CSS length              | `320px`             |
| `mode`      | `mode`     | `loop` \| `manual`                | `loop`              |
| `canon`     | `canon`    | `series` \| `movie`               | `series`            |
| `address`   | `address`  | seven glyph numbers, 1–39         | `28,26,5,36,11,29,1` |
| `no-status` | —          | boolean attribute                 | absent              |
| —           | `progress` | `0`–`1`                           | `0`                 |

**Methods** — `engageNext()`, `complete()` and `reset()`, the first two
returning a promise that resolves when the engagement queue drains.

**Events** — `chevron` (with `{ chevron, glyph, locked }`), `wormhole`, `cycle`
and `reset`.

`canon` is the pedantic one. In the series, the top chevron clunks for every
symbol; in the 1994 film, each engaging chevron clunks itself. Both are
correct, depending on which you grew up with.

### Styling

The gate is themed through custom properties, so it can be dressed to match a
site rather than always arriving in Cheyenne Mountain amber:

```css
gate-loader {
  --amber: #7dd3fc;
  --amber-hot: #e0f2fe;
  --horizon: #0ea5e9;
}
```

`--size`, `--glyph`, `--metal-hi`, `--metal-mid` and `--metal-lo` are exposed
too, along with the `::part(gate)`, `::part(horizon)` and `::part(status)`
shadow parts for anything the properties do not reach.

## The accessibility bit

A loading animation is exactly the kind of component that quietly excludes
people, so this one takes three things seriously.

**Motion.** Under `prefers-reduced-motion: reduce` the ring does not spin.
Symbols light in sequence instead, the wormhole's ripple and burst effects are
dropped, and the timings stretch slightly so the sequence still reads as
progress. Nothing rotates, nothing pulses, and the information survives.

**Announcement.** Every engagement updates a polite live region — *chevron
three encoded*, and finally *wormhole established* — so a screen reader user
gets the same staged progress a sighted user watches. The wait stops being
silent. When that is the wrong call, `no-status` turns it off; the looping
gate on this page uses it, because an animation that never finishes would
announce forever.

**Not relying on colour.** Chevron state is carried by brightness and a lit
glyph as well as hue, and the status line says in words what the ring shows in
light.

## Caveats

It is a fan work. The glyph artwork comes from Wikimedia Commons under
CC BY-SA 3.0, and the designs themselves belong to the Stargate franchise —
MGM and Amazon — who have not endorsed any of this. The code is MIT. Use it
for something non-commercial and delightful.
