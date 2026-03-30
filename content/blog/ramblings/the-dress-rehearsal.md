---
ref: RR-0000
title: "The Dress Rehearsal"
author: "Mark Basford"
date: 2026-03-30
tags: [typescript, typescript-6, migration, compilers, go]
series: "Ramblings of a Rambler"
part: 1
word_count: 1487
published: true
estimated_reading_time: "7 min"
---

![Apollo 10's lunar module "Snoopy" above the moon's surface, with Earth rising in the background](/blog/apollo-10-dress-rehearsal.webp)

On May 18, 1969, NASA launched Apollo 10. Three astronauts — Tom Stafford, John Young, and Gene Cernan — flew to the moon, entered lunar orbit, and descended the lunar module "Snoopy" to within 14.4 kilometres of the surface. Close enough to see boulders in the Sea of Tranquillity. Close enough to land.

But they didn't land. They were never going to. NASA had deliberately short-fuelled the ascent stage so the crew physically couldn't attempt it, even if the moment got the better of them. Apollo 10 was the dress rehearsal. Every system tested, every procedure validated, every risk surfaced — except the final one. Fifty-nine days later, Apollo 11 made it look easy.

TypeScript 6.0 shipped on March 23, 2026. If you haven't paid much attention to it yet, I'd understand. Version bumps come and go. But this one is different, and it's worth understanding why.

## The last of its kind

TypeScript 6 is the final release of the TypeScript compiler built on JavaScript. The one after it — TypeScript 7, internally called Project Corsa — is a complete rewrite in Go. Not a port, not a gradual migration. A ground-up rewrite of the compiler in a different language.

The TypeScript team's own announcement puts it plainly: "TypeScript 6.0 acts as the bridge between TypeScript 5.9 and 7.0." That's not third-party speculation. That's Microsoft telling you this release exists to get you ready for what's next.

And what's next is significant. The Go-based compiler compiles VS Code's 1.5 million lines of TypeScript in about 8.7 seconds. The current JavaScript-based compiler takes 89 seconds for the same job. That's a 10x improvement, and it's not a benchmark cherry-picked for a blog post — it's the kind of real-world gain that changes how you work. Editor responsiveness, CI pipelines, the feedback loop between writing code and knowing whether it's correct. All of it gets faster.

TypeScript 7 has no confirmed release date, but the official line is "within a few months." The preview compiler is already available via `@typescript/native-preview`, and it's passing 99.6% of the existing test suite. This isn't vapourware. It's close.

## What TS6 actually changes

So if TypeScript 7 is the moon landing, what does the dress rehearsal look like in practice?

Three categories of change matter.

**New defaults.** Strict mode is now on by default. Module resolution defaults to ES modules. The target aligns with ES2025. If your `tsconfig.json` was relying on lenient defaults and implicit resolution, those assumptions just broke. This is intentional — TypeScript 6 is pushing you toward the configuration that TypeScript 7 will require.

**Deprecations.** A list of features that still work in TypeScript 6 but will be hard-removed in TypeScript 7:

- `target: es5` — the minimum becomes ES2015
- `--baseUrl` — use `paths` instead
- `--outFile` bundling
- `--moduleResolution node` and `--moduleResolution classic`
- AMD, UMD, and SystemJS module targets
- `--downlevelIteration`

You can suppress these warnings with `"ignoreDeprecations": "6.0"` in your tsconfig. But that escape hatch won't exist in TypeScript 7. It's a snooze button, not a solution.

**A preview of TypeScript 7's behaviour.** The `--stableTypeOrdering` flag lets you opt into TypeScript 7's union member ordering right now. If you have tests that are sensitive to the order types appear in error messages or hover tooltips, this flag will tell you before the compiler switch does.

## The migration isn't as bad as it sounds

The TypeScript team built a tool called `ts5to6` that handles the two most disruptive changes automatically — `baseUrl` removal and `rootDir` inference. For most projects, the upgrade path is:

1. Run `ts5to6`
2. Update your tsconfig to set `moduleResolution` explicitly
3. Fix any remaining deprecation warnings
4. Run your test suite

If you've been keeping reasonably up to date with TypeScript releases, this is likely a few hours of work. Maybe a day for a large monorepo. The breaking changes are real but they're configuration changes, not language changes. Your actual TypeScript code probably doesn't need to change at all.

The harder question is what happens to the tools around the compiler. TypeScript 7's Go-based compiler won't expose the same JavaScript API that tools like ESLint, custom transformers, and IDE plugins currently depend on. Microsoft's recommended approach during the transition is to keep TypeScript 6 installed for API-dependent tooling while using the native preview for type-checking and builds. It's not elegant, but it works, and it gives the ecosystem time to catch up.

## Why not just wait?

Here's where Apollo 10 earns its place as more than a nice story.

NASA could have skipped the dress rehearsal. They could have saved the fuel, saved the mission, saved the eight days, and just gone straight to landing with Apollo 11. The hardware was ready. The software was ready. The crew was ready.

But they didn't, because they understood something about complex systems: you don't discover problems by thinking about them. You discover them by running the full sequence. Apollo 10's lunar module had a terrifying moment during ascent staging when a navigation mode error sent it into eight uncontrolled cartwheels above the lunar surface. Cernan swore live on the radio. Stafford took manual control and recovered in fifteen seconds. That error was found, understood, and fixed — because they flew the rehearsal.

If you skip TypeScript 6 and wait for TypeScript 7, you're stacking two sets of changes on top of each other. Every deprecated option, every shifted default, every configuration assumption — all hitting at the same time as a fundamentally new compiler runtime. You won't know which problem is a TS6 configuration issue and which is a TS7 compatibility issue. You'll be debugging in two dimensions at once.

Upgrade to TypeScript 6 now, and you separate the concerns. Fix your configuration. Clear out the legacy options. Get your tsconfig into the shape TypeScript 7 expects. Then, when the Go compiler drops, it's a swap. One variable changes, not twenty.

## The thing about rehearsals

There's a detail about Apollo 10 that I find quietly brilliant. The short-fuelling wasn't just a safety measure — it was a statement of intent. By making it impossible for the crew to land, NASA ensured that the mission stayed focused on what it was actually for: validating everything else. No temptation to skip ahead. No scope creep. The constraint made the rehearsal better.

TypeScript 6 has a similar quality. It can't be the Go compiler. It's still JavaScript under the hood. But that constraint is precisely what makes it useful as a transition. You get to test your project against TypeScript 7's expectations while still running on the familiar runtime. If something breaks, you know it's a configuration issue, not a compiler issue. The diagnosis is clean.

The `--stableTypeOrdering` flag is the most Apollo 10 thing about the whole release. It literally lets you preview how the new compiler will order your types, so you can fix your tests before the switch. It's a dress rehearsal for your dress rehearsal.

Apollo 11 launched fifty-nine days after Apollo 10. We don't know exactly when TypeScript 7 will land, but "a few months" is the official word, and the preview is already passing nearly every test in the suite.

The rehearsal window is open. It won't be open forever.
