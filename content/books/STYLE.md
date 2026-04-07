# Books — Writing Style

## Voice

First person singular. Always "I", never "we". This is personal writing — one person thinking out loud about things they find interesting.

Egoless. No posturing, no false modesty, no humble-bragging. State what you know, admit what you don't. If you changed your mind about something, say so without drama.

Easy going. The tone is a conversation, not a lecture. Think explaining something to a mate who's genuinely curious — not presenting at a conference, not writing documentation, not trying to impress anyone.

To the point, for the most part. Get there without unnecessary detours. But a well-earned tangent that adds colour is fine — the key word is *earned*. If it doesn't serve the piece, cut it.

## Structure

### Chapters

**Opening**: Drop the reader into something — a story, an observation, a question. Never open a chapter with a thesis statement or "In this chapter we'll cover...". Let the reader discover where it's going.

**Pacing**: Alternate between research, narrative, and reflection. A chapter that's wall-to-wall facts reads like a textbook. A chapter that's all opinion reads like a blog post. Mix them. The facts earn the opinions.

**Transitions**: Chapters should flow into each other. The end of one chapter should plant a seed — a question, a loose thread — that the next chapter picks up. This isn't a collection of essays. It's a journey with a destination.

**Ending**: Close each chapter with a thought that lingers, not a summary. No "in this chapter we learned..." recaps. Leave something unresolved that pulls the reader forward.

### Paragraphs

Short. Four sentences maximum as a general rule. White space is your friend. Dense blocks of text signal that you haven't thought hard enough about what you're actually saying.

### Sections Within Chapters

Use headings sparingly — when the topic genuinely shifts, not every few paragraphs for the sake of it. Sections should feel like natural turns in a conversation, not numbered steps in a process.

## References & Citations

Inline footnotes. Number them sequentially within each chapter: `[1]`, `[2]`, `[3]`.

At the end of each chapter, include a **References** section listing every source:

```
## References

[1] Author or Organisation. "Title." Source/Publication, Date. URL
[2] Author or Organisation. "Title." Source/Publication, Date. URL
```

Every factual claim that isn't common knowledge needs a reference. If you can't cite it, either verify it via search or mark it as unverified. No hand-waving, no "studies show" without saying which studies.

## Hard Restrictions

- **NO references to**: Tribepad, Eos, Themis, ATS, recruitment, hiring, applicant tracking, or any employer past or present
- **NO "we"** for decisions or opinions — this is personal writing, use "I" or passive voice
- **NO corporate framing** — no "business value", "stakeholder alignment", "ROI", "velocity metrics"
- **NO AI hype** — if discussing AI, be measured and specific, not breathless
- **NO calls to action** — no "follow me", "subscribe", "share this", "let me know in the comments"
- **NO self-promotion** — no plugging products, services, or side projects
- **NO preamble summaries** — don't tell the reader what you're about to tell them
- **NO chapter recaps** — don't summarise what you just said at the end of a chapter
- **NO performative curiosity** — don't narrate your own thought process like a TED talk. No "I'd always assumed..." or "It took me three weeks to realise..." unless it actually happened. Say the thing, don't dramatise arriving at the thing.

## Tone Markers

### Do This

> The standard answer is wrong, or at least incomplete. Three separate papers from the last decade contradict each other on the mechanism, and none of them acknowledge the other two exist.

> In 1969, the Apollo 11 guidance computer threw a 1202 alarm during descent. Margaret Hamilton's team had built the software to prioritise — it dropped the low-priority tasks and kept the ones that mattered running. The landing continued.

### Not This

> In this chapter, we'll explore the fascinating history of error handling and discover how lessons from the space programme can transform our approach to software resilience.

> As engineers, we need to remember that failure is not an option. Let's dive in!

> I'd always assumed the answer was straightforward. It took me three weeks of reading contradictory papers to realise that nobody actually agrees on this, and the disagreement itself is the interesting part.

## Book-Level Frontmatter

```yaml
---
title: "Book Title"
author: "Mark Basford"
started: YYYY-MM-DD
status: draft          # draft | review | complete
theme: "One-sentence theme"
lessons:
  - "Core lesson 1"
  - "Core lesson 2"
tags: [relevant, specific, tags]
---
```

## Chapter Quality Checklist

Every chapter must hit all of these. The book should practice what it preaches.

- [ ] **Personal voice** — at least one "I" moment, one real experience
- [ ] **Recognition before science** — the reader feels the concept before they learn what it's called. Paint the experience, then name it.
- [ ] **One "try this"** — an active invitation for the reader to do something (not a formal exercise)
- [ ] **Breathing room** — a short paragraph after the chapter's biggest idea to let it land
- [ ] **At least one Mermaid diagram** — where a concept benefits from visual explanation, with an italic description beneath for accessibility/clarity
- [ ] **Stats where they exist** — data woven into the argument, not dumped in a block
- [ ] **An ending that pulls forward** — not a recap, not a summary. A question, image, or loose thread that leads into the next chapter

### Notes on Diagrams

Diagram descriptions (the italic text beneath each figure) are a **separate reference layer** for accessibility and clarity. They are not part of the chapter's reading flow. Repetition between the description and the surrounding prose is fine and expected — the description serves readers who need the visual explained; the prose serves the narrative.

## Chapter-Level Frontmatter

```yaml
---
chapter: N
title: "Chapter Title"
word_count: NNNN
status: draft          # draft | review | complete
---
```
