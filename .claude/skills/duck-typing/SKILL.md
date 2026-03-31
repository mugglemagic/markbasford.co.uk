---
name: duck-typing
description: Write a blog post for the "Duck Typing" series. Use when the user wants to write a new blog post, provides a topic for a Duck Typing post, or references the series by name.
argument-hint: "<topic>"
effort: high
---

# Write a Duck Typing blog post

Write a blog post for the "Duck Typing" series. The topic is: $ARGUMENTS

## Before You Start

Read the writing style guide at `content/blog/duck-typing/STYLE.md`. Every decision you make must align with it.

Read all existing posts in `content/blog/duck-typing/` to understand the series context, determine the next `DT-XXXX` ref number, and the next part number.

## Phase 1 — Research (Plan Mode)

Enter plan mode. This phase is about research and options — do not write the post yet.

### Topic Research
- Conduct comprehensive research on the topic using web search and codebase exploration as appropriate
- Understand the topic deeply enough to write about it with authority and specificity
- Identify the core insight or argument — what is this post actually saying?

### Analogy Research
Research **4–6 analogy candidates** from diverse domains (history, nature, sport, engineering, exploration, cooking, art, everyday life). For each candidate:

1. **The story**: A brief factual account (2-3 sentences)
2. **Source verification**: Confirm dates, names, and events are accurate via web search. Cite sources.
3. **Connection**: How it maps to the technical point
4. **Accessibility**: Whether a general reader would follow it without specialist knowledge
5. **Confidence rating**: High / Medium / Low — based on source quality and verifiability

Discard any analogy you cannot verify to High confidence.

### Present Options to User

Present a structured summary:

- **Topic angle**: What specific perspective or argument the post will take
- **2–3 title options**: Following the style guide tone
- **Analogy shortlist**: The verified candidates with their stories, connections, and confidence ratings. Recommend your top pick and explain why.
- **Proposed tags**: Specific, useful tags
- **Structure outline**: Rough section breakdown showing where the analogy fits

**STOP. Wait for user approval before proceeding.** Do not write the post until the user has approved the topic angle, chosen an analogy, and confirmed the structure.

## Phase 2 — Writing

Once approved, write the full blog post.

- Create the file at `content/blog/duck-typing/{slug}.md`
- Follow the YAML frontmatter convention from STYLE.md exactly
- Set `published: false`
- Calculate and set accurate `word_count` and `estimated_reading_time` (assume ~200 words per minute)
- Target 1200–1800 words
- Follow every rule in the style guide — voice, structure, analogies, restrictions, tone

After writing, display the word count and reading time.

**STOP. Present the draft for user review.** Wait for feedback.

## Phase 3 — Revision

Incorporate user feedback. This may take multiple rounds. For each round:

- Make the requested changes
- Highlight what changed
- Update word count and reading time if they shifted

When the user is satisfied with the draft, remind them:

> Ready for final review? Run `/duck-typing-review` to fact-check and verify style compliance.
