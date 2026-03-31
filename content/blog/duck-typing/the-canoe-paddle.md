---
ref: DT-0003
title: "The Canoe Paddle"
author: "Mark Basford"
date: 2026-04-17
tags: [javascript, rust, go, tooling, vite, typescript]
series: "Duck Typing"
part: 4
word_count: 1487
published: false
estimated_reading_time: "8 min"
---

![Leo Fender's Telecaster — the canoe paddle that changed music](/blog/the-canoe-paddle.webp)

In 1950, a radio repairman from Fullerton, California took a solid-body electric guitar to a music trade show. The reaction was not kind.

"Do you paddle your canoe with that thing? Swat flies?"

The man holding the guitar — Leo Fender — couldn't play a note on it. He'd never learned. Couldn't even tune one, by some accounts. He was an electronics tinkerer who'd lost his accounting job during the Depression and opened a radio repair shop in 1938. His understanding of guitars came not from playing them but from fixing the amplifiers that powered them.

Traditional luthiers — craftspeople who'd spent lifetimes shaping hollow-body instruments from carefully selected tonewoods — looked at Fender's slab of solid ash with a bolt-on neck and saw a toy. A plank with strings. A canoe paddle.

Within a decade, the Telecaster and its younger sibling the Stratocaster had changed popular music permanently.

---

The JavaScript ecosystem is in the middle of something that feels strangely similar.

In the span of a few weeks this March, three things happened. TypeScript 6.0 shipped — the last version of the TypeScript compiler written in TypeScript, clearing the path for a complete rewrite in Go. Vite 8 released with Rolldown, a Rust-based bundler replacing both esbuild and Rollup in a single tool. And Oxfmt hit beta — a Rust-powered code formatter that's thirty times faster than Prettier.

The tools we use to write JavaScript are being rebuilt. And they're not being rebuilt in JavaScript.

---

## What's on the workbench

**TypeScript 7 (Project Corsa)** — Microsoft is rewriting the TypeScript compiler in Go. The current JS-based `tsc` takes 89 seconds to type-check the VS Code codebase. The Go version does it in 8.74 seconds. That's a 10x speedup with roughly half the memory. TypeScript 6, which shipped on March 23, is explicitly positioned as the migration bridge: get your codebase to 6.0, and the jump to 7.0 should be smooth.

**Vite 8 and Rolldown** — Evan You's team shipped Vite 8 with Rolldown as its single bundler, replacing both esbuild (which handled dev transforms) and Rollup (which handled production builds) with one Rust-based tool. The numbers vary by project — 10x to 30x faster depending on complexity — but the architecture change matters more than the benchmarks. One bundler instead of two. One set of behaviours to reason about.

**Oxc** — The Rust-based compiler infrastructure project shipped Oxfmt (formatter, 30x faster than Prettier, 3x faster than Biome) and Oxlint (linter, 50-100x faster than ESLint). Type-aware linting is in alpha, already 8-12x faster than typescript-eslint. Turborepo, Hugging Face, and Lichess have all migrated.

All of this landed in the first quarter of 2026. The rewrites aren't coming. They've arrived.

---

## The material limit

The question worth asking isn't what but why. Nobody rewrites a working compiler in a different language for fun. Something forced the issue.

JavaScript has a ceiling. It's single-threaded by nature. It's garbage-collected, which means unpredictable pauses. It can't do the kind of brute-force parallel computation that parsing, type-checking, and bundling thousands of files demands — at least not without fighting the language every step of the way.

For years, this didn't matter much. Projects were smaller. Machines kept getting faster. The tools were good enough. But codebases grew. Monorepos appeared. TypeScript adoption exploded. The workload increased faster than the hardware improved, and the tools started to groan.

Wooden ships had the same problem. They worked brilliantly for centuries. But there's a physical limit — around 300 feet — after which the hull flexes too much under wave pressure to stay seaworthy. When Isambard Kingdom Brunel was designing the SS Great Britain in the late 1830s, he originally planned a wooden paddle steamer. Then the iron-hulled *Rainbow* visited Bristol harbour. Brunel sent colleagues aboard. They came back converts. He scrapped the wooden design entirely. Iron removed the material constraint.

JavaScript's single-threaded runtime is the wooden hull. The projects got bigger than the material can handle. Rust and Go are iron.

---

## The outsider advantage

Here's the thing about Leo Fender. His inability to play guitar wasn't a handicap. It was arguably his greatest advantage.

Traditional luthiers built guitars the way guitars had always been built. Glued-in necks, hand-shaped from select tonewoods, each one a minor work of art. Beautiful, but impossible to mass-produce consistently. If a neck warped, the repair was major surgery.

Fender came at the problem as an engineer. Bolt-on necks — four screws, swap it in ten minutes. Standardised parts from the same production line. Assembly-line manufacturing borrowed from the auto industry. He earned the nickname "The Henry Ford of Guitars." Not because the instruments were cheap. Because they were consistent, repairable, and built to scale.

He had to bring in musicians to test his prototypes. He'd hand them a guitar, watch their fingers, listen to their feedback, and go back to his workbench. The builder and the user had different expertise. The instruments got better because of it.

The parallel writes itself. Rust brings fearless concurrency, zero-cost abstractions, and no garbage collector. Go brings goroutines, fast compilation, and a runtime designed for the kind of parallel workload that type-checking demands. These aren't JavaScript concerns. They're systems-language concerns, applied to a JavaScript problem. Different discipline, better instrument.

---

## What stays the same

Fender didn't change music. He changed the instrument.

This is the part that's easy to miss in the rewrite discourse. Your TypeScript code is still TypeScript. Your Vite config still works — Rolldown maintains Rollup API compatibility so thoroughly that major plugin ecosystems work without modification. Your ESLint rules translate to Oxlint. Your Prettier formatting translates to Oxfmt.

The output is identical. The experience of writing code doesn't change. What changes is how long you wait for the build, how much memory your toolchain eats, and how many files you can process before the tools start to struggle.

A musician doesn't care what the guitar is made of. They care how it sounds and how it feels. The audience cares even less. But the engineer who builds the instrument cares about materials, because materials determine what's possible.

---

## The mixed-fleet period

We're in the transition right now, and transitions are always uncomfortable. Your TypeScript is checked by a JavaScript-based compiler (for now). Your code is bundled by Rust (if you're on Vite 8). Your formatting might be Prettier (JavaScript), Biome (Rust), or Oxfmt (Rust). Your linting could be ESLint, Oxlint, or both running side by side.

Evan You's VoidZero is building the clearest vision of what comes next: Vite as the entry point, Rolldown as the bundler, Oxc as the compiler infrastructure — one integrated, Rust-based toolchain with closely collaborating teams. Microsoft has its own path: the TypeScript compiler in Go, with the language service and emit pipeline eventually following the type checker.

The destination is visible even if the route is still being negotiated. Within a couple of years, it's entirely plausible that every tool between your editor and your production build will be written in a language other than JavaScript.

And every line of your code will still be JavaScript.

---

The Telecaster was mocked at a trade show in 1950. Fred Gretsch, whose company made some of the finest guitars in the world, took one look and said "that thing will never sell." Traditional luthiers laughed. A radio repairman who couldn't play a note — what could he possibly know about building instruments?

Turns out, quite a lot. Just not the things they expected.

The canoe paddles always look ridiculous before they win.
