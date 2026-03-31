# Duck Typing — Writing Style

## Voice

First person singular. Always "I", never "we". This is personal writing — one person thinking out loud about things they find interesting.

Egoless. No posturing, no false modesty, no humble-bragging. State what you know, admit what you don't. If you changed your mind about something, say so without drama.

Easy going. The tone is a conversation, not a lecture. Think explaining something to a mate who's genuinely curious — not presenting at a conference, not writing documentation, not trying to impress anyone.

To the point, for the most part. Get there without unnecessary detours. But a well-earned tangent that adds colour is fine — the key word is *earned*. If it doesn't serve the piece, cut it.

## Structure

**Opening**: Start with a hook — the analogy, a question, an observation. Never open with a thesis statement or "In this post I will discuss...". Drop the reader into something interesting and let them figure out where it's going.

**Paragraphs**: Short. Four sentences maximum as a general rule. White space is your friend. Dense blocks of text signal that you haven't thought hard enough about what you're actually saying.

**Flow**: Sections should feel like natural turns in a conversation, not numbered steps in a process. Use headings sparingly — when the topic genuinely shifts, not every three paragraphs for the sake of it.

**Ending**: Close with a thought, not a summary. No "in conclusion" or "to wrap up". No call to action. Leave the reader with something to chew on — a question, a connection, a quiet observation that lands.

## Analogies — The Core Differentiator

Every post should feature at least one substantial analogy. These are the backbone of the series and must meet all of the following criteria:

1. **Unrelated to software**. Draw from history, nature, sport, cooking, civil engineering, exploration, music, art, everyday life. The further from tech the better — that's what makes the connection land.

2. **Historical or factually accurate**. Every claim must be verifiable. Dates, names, events — all correct. No embellishment, no "roughly speaking", no artistic licence with facts. If you're not sure, research until you are or pick a different analogy.

3. **Genuinely relatable**. The reader shouldn't need specialist knowledge to follow the analogy. A story about the construction of the Panama Canal works. A deep cut about 14th-century Venetian glassblowing guild politics probably doesn't — unless you make it accessible.

4. **Earned**. The connection between the analogy and the technical point must feel natural, not forced. If you have to explain why the analogy is relevant with more than a sentence, it's the wrong analogy.

## Hard Restrictions

- **NO references to**: Tribepad, Eos, Themis, ATS, recruitment, hiring, applicant tracking, or any employer past or present
- **NO "we"** for technical decisions — this is personal writing, use "I" or passive voice
- **NO corporate framing** — no "business value", "stakeholder alignment", "ROI", "velocity metrics"
- **NO AI hype** — if discussing AI, be measured and specific, not breathless
- **NO calls to action** — no "follow me", "subscribe", "share this", "let me know in the comments"
- **NO self-promotion** — no plugging products, services, or side projects
- **NO preamble summaries** — don't tell the reader what you're about to tell them

## Tone Markers

### Do This

> I spent a weekend trying to make CSS container queries do something they clearly didn't want to do. Turns out the problem wasn't the spec — it was my mental model.

> In 1854, John Snow removed the handle from the Broad Street water pump. He didn't cure cholera. He didn't even fully understand the mechanism. But he stopped people drinking contaminated water, and the outbreak ended. Sometimes you don't need to understand the entire system to fix the thing that's actually killing people.

### Not This

> In this article, we'll explore the fascinating world of CSS container queries and how they can revolutionise your responsive design workflow.

> As developers, we need to remember that sometimes the simplest solution is the best one. Let's dive in!

> This approach delivers significant business value by reducing development overhead and improving time-to-market.

## Frontmatter Convention

```yaml
---
ref: DT-XXXX          # Sequential, starting at DT-0000
title: "Title Here"
author: "Mark Basford"
date: YYYY-MM-DD
tags: [relevant, specific, tags]
series: "Duck Typing"
part: N                # Sequential within the series
word_count: NNNN
published: false       # Always false on creation
estimated_reading_time: "N min"
---
```

## Content Guidelines

- **Length**: 1200–1800 words. Long enough to say something, short enough to respect the reader's time.
- **Code**: Use code blocks when they clarify. Keep them short and focused. No boilerplate — show the interesting bit.
- **Links**: Link to sources, specs, and docs where relevant. Don't over-link.
- **Images**: Use only when they genuinely add value. No stock photos. No decorative headers.
- **Tags**: Specific and useful for filtering. Avoid meta-tags like "programming" or "technology".
