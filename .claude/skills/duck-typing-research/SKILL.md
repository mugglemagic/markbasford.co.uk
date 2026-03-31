---
name: duck-typing-research
description: Research potential blog topics for the Duck Typing series. Scans recent and upcoming frontend, TypeScript, CSS, WCAG, and web platform developments plus non-software events for analogy inspiration. Use when looking for blog ideas or checking what's happening in the frontend world.
argument-hint: "[YYYY-MM-DD]"
effort: high
---

# Research Duck Typing blog topics

Research potential blog topics for the "Duck Typing" series based on what's happening in the frontend world and beyond.

## Date Window

Use `$ARGUMENTS` as the centre date if provided, otherwise use today's date. Define a research window of **~1 month back** and **~1 month forward** from that date.

## Step 1 — Gather Recent & Upcoming Developments

Search the web thoroughly across each category. For every finding, note: **what** it is, **why** it matters, and a **source URL**.

### Frontend & TypeScript
- TypeScript releases, RFCs, proposals, Go rewrite (Corsa) progress
- New CSS features landing in browsers — check Chrome, Firefox, Safari release notes and changelogs
- CSS spec updates, working drafts, new proposals from W3C
- React, Next.js, Svelte, Vue, Angular — major releases or announcements
- Vite, Biome, oxc, esbuild, Turbopack, and build tooling updates
- Notable new libraries or tools gaining traction

### Accessibility & Standards
- WCAG updates (2.2 errata, 3.0 working drafts)
- ARIA spec changes or new patterns
- Accessibility tooling releases (axe, Lighthouse, browser devtools)
- Legal developments (lawsuits, regulations, compliance deadlines)

### Web Platform & Browsers
- Chrome, Firefox, Safari release highlights and intent-to-ship signals
- New web platform APIs (View Transitions, Navigation API, Speculation Rules, etc.)
- Notable deprecations, removals, or origin trials
- Baseline status changes for existing features

### Non-Software (analogy inspiration)
- Notable historical anniversaries falling within the research window
- Major world events, science discoveries, cultural milestones
- Interesting, unusual, or thought-provoking things that happened recently
- Seasonal or calendar-relevant events

## Step 2 — Generate Blog Topic Ideas

From the findings, propose **5–8 blog topic ideas** that would work for the Duck Typing series. For each:

| Field | Detail |
|-------|--------|
| **Working title** | A title that fits the series tone |
| **Technical angle** | 1–2 sentences on what the post would argue or explore |
| **Why now** | What makes this timely |
| **Analogy candidates** | 2–3 non-software events from the research (or general knowledge) that could serve as the analogy, with a brief note on the connection |
| **Heat** | Hot (timely, broad interest), Warm (interesting niche), Cool (evergreen) |

Read `content/blog/duck-typing/STYLE.md` to ensure all suggestions align with the series voice and constraints.

Read existing posts in `content/blog/duck-typing/` to avoid duplicating topics already covered.

## Step 3 — Present Findings

Structure the output as:

### Recent & Upcoming Developments
Group findings by category with bullet points. Keep each entry to 1–2 lines — scannable, not exhaustive.

### Blog Topic Ideas
Present the ideas table sorted by heat (hottest first).

### Wrap Up

Remind the user:

> Pick a topic and run `/duck-typing <topic>` to start writing.
