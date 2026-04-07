---
name: book
description: Write a chaptered book on a given topic. Use when the user wants to write a book, start a book project, or references long-form chaptered writing.
argument-hint: "<topic or title>"
effort: high
---

# Write a Book

Write a chaptered book on: $ARGUMENTS

**Do NOT use agents.** All work — research, planning, writing, file creation — is done directly. No subagent delegation.

## Before You Start

Read the writing style guide at `content/books/STYLE.md`. Every decision you make must align with it.

Read existing books in `content/books/` to understand what's already been written and avoid overlap.

**IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for all tasks.** Search first, conclude second. Your training data is a starting point for knowing *what* to search for — not a source of truth for *what is current*.

**CRITICAL — date accuracy:** Your training data has a knowledge cutoff and may be months or years behind the current date. You MUST verify all facts, dates, names, version numbers, and event timelines via **live web searches** against primary sources. Do NOT present information from training data as current without verification. If you cannot confirm a finding, either:
- Omit it entirely, or
- Clearly mark it as **[UNVERIFIED — could not confirm via search]**

## Phase 1 — Concept (Plan Mode)

Enter plan mode. This phase is about research and shaping the idea — do not write the book yet.

### Topic Research

- Conduct extensive web research on the topic
- Understand the landscape: what's been written, what's missing, what angle is fresh
- Identify the core theme — the single thread that ties the book together
- Identify 1–3 core lessons the reader should walk away with

### Propose the Book

Present a structured proposal:

- **Working title**: A title that fits the voice
- **Theme**: One sentence — what this book is actually about underneath the surface topic
- **Core lessons**: The 1–3 things a reader takes away
- **Target audience**: Who would pick this up and why
- **Chapter outline**: 8–15 chapters, each with a title and 2–3 sentence summary of what it covers and why it's in this order
- **Natural conclusion**: Where the book lands — what the final chapter resolves or leaves the reader with

**STOP. Wait for user approval before proceeding.** Do not move to Phase 2 until the user has approved the theme, lessons, and chapter structure.

## Phase 2 — Research & Planning

Once the concept is approved, build the book's scaffolding.

### Create the Book Folder

Create the folder structure at `content/books/{slug}/`:

```
content/books/{slug}/
  PLAN.md
  TASKS.md
  research/
  chapters/
```

### PLAN.md

Write the book plan containing:
- The approved theme and lessons
- The full chapter outline (titles, summaries, order rationale)
- Book-level frontmatter per STYLE.md

### TASKS.md

Create a chapter-by-chapter task tracker:

```markdown
# Tasks

## Research
- [ ] Chapter 01 — {title}
- [ ] Chapter 02 — {title}
...

## Writing
- [ ] Chapter 01 — {title}
- [ ] Chapter 02 — {title}
...

## Review
- [ ] Full manuscript review
- [ ] Final compilation
```

### Chapter Research

For each chapter, conduct deep web research and save findings to `content/books/{slug}/research/chapter-NN-{topic}.md`.

Each research file should contain:
- Key findings with source URLs
- Relevant data, statistics, or timelines — all verified via search
- Story candidates (historical events, real-world examples) that could anchor the chapter
- Direct quotes worth referencing (with full attribution)
- Any items that could not be verified, clearly marked as `[UNVERIFIED]`

Research files are context for later writing — they don't need to follow the style guide, but they do need to be thorough and well-sourced.

Present a summary of research findings to the user.

**STOP. Wait for user approval before proceeding to writing.**

## Phase 3 — Writing

Once research is approved, write the full book.

### Write All Chapters

Write each chapter as `content/books/{slug}/chapters/NN-{slug}.md`:

- Follow the style guide — voice, structure, paragraph length, tone
- Each chapter: 2,000–5,000 words
- Include chapter-level frontmatter per STYLE.md
- Use inline footnotes: `[1]`, `[2]` within the prose
- End each chapter with a **References** section listing all sources
- The book should read as a continuous journey, not a collection of standalone essays — chapters flow into each other

### Update Progress

Update `TASKS.md` as each chapter is completed.

### Present the Full Draft

Once all chapters are written, present the complete draft for review. Include:
- Total word count across all chapters
- Chapter list with individual word counts
- Any unresolved questions or areas where research was thin

**STOP. Wait for user feedback on the full manuscript.**

## Phase 4 — Revision

Incorporate user feedback across the manuscript. This may take multiple rounds.

For each round:
- Make the requested changes
- Note what changed and where
- Update word counts if they shifted significantly

When the user is satisfied, compile the final manuscript into `content/books/{slug}/BOOK.md` — all chapters in order, with a title page and table of contents.

Update all statuses in `TASKS.md` and set the book-level status to `complete` in `PLAN.md`.
