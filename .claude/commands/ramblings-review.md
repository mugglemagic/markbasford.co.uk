# /ramblings-review — Review a Ramblings of a Rambler blog post

Comprehensively review a blog post from the "Ramblings of a Rambler" series.

If an argument is provided (`$ARGUMENTS`), treat it as the slug of the post to review. Otherwise, review the most recently modified `.md` file in `content/blog/ramblings/`.

## Setup

1. Read the writing style guide at `content/blog/ramblings/STYLE.md`
2. Read the blog post to review

## Review Process

Spawn an Agent to conduct a thorough, independent review across all five dimensions below. The agent should treat this as a fresh read — no assumptions from prior context.

### 1. Fact Check

For **every factual claim** in the post (dates, names, events, statistics, technical assertions):

- Verify via web search
- Note the source used for verification
- Flag anything that cannot be confirmed or appears inaccurate
- Pay special attention to the analogy — every historical or factual detail must be correct

Rate: **Factual confidence** (High / Medium / Low) with specific items listed.

### 2. Style Compliance

Check the post against **every rule** in STYLE.md:

- [ ] First person singular throughout (no "we" for technical decisions)
- [ ] Egoless tone — no posturing, no false modesty
- [ ] Conversational, not lecturing
- [ ] Hook opening (not a thesis statement or preamble)
- [ ] Short paragraphs (4 sentences max as general rule)
- [ ] Natural section flow, headings used sparingly
- [ ] Thought ending (not a summary, no "in conclusion")
- [ ] Analogy is unrelated to software
- [ ] Analogy is historically/factually accurate
- [ ] Analogy is accessible without specialist knowledge
- [ ] Analogy connection feels natural and earned
- [ ] No references to: Tribepad, Eos, Themis, ATS, recruitment, hiring, applicant tracking, or any employer
- [ ] No corporate framing (business value, stakeholder alignment, ROI, etc.)
- [ ] No AI hype or breathless futurism
- [ ] No calls to action (follow, subscribe, share, comment)
- [ ] No self-promotion
- [ ] No preamble summary
- [ ] Word count within 1200–1800 range

Flag any violations with the specific text and the rule it breaks.

### 3. Technical Accuracy

For any technical claims, code examples, or references to specs/tools/libraries:

- Verify against official documentation
- Check code examples compile/run conceptually
- Flag outdated information or deprecated APIs

### 4. Frontmatter Validation

- [ ] `ref` follows `RR-XXXX` pattern
- [ ] `ref` is sequential and not a duplicate of existing posts
- [ ] `series` is exactly `"Ramblings of a Rambler"`
- [ ] `author` is `"Mark Basford"`
- [ ] `published` is `false`
- [ ] `word_count` is accurate (count actual words in the post body)
- [ ] `estimated_reading_time` is reasonable (~200 words per minute)
- [ ] `date` is a valid date
- [ ] `tags` array is non-empty and tags are specific
- [ ] `part` is sequential within the series

### 5. Readability

- Is the opening hook engaging?
- Does the analogy land — does it illuminate the point or just decorate it?
- Is the pacing right — does it earn the reader's attention throughout?
- Does the ending leave the reader with something to think about?
- Are there any sections that drag, repeat, or feel forced?

## Output Format

Present the review as a structured report:

```
## Ramblings Review: "{post title}"

### Fact Check
[Findings with sources]
**Factual confidence: High/Medium/Low**

### Style Compliance
[Checklist results — only list violations or notable passes]

### Technical Accuracy
[Findings]

### Frontmatter
[Checklist results — only list issues]

### Readability
[Assessment]

---

## Verdict: APPROVED / NEEDS REVISION

[If NEEDS REVISION: numbered list of specific changes required, ordered by severity]
```
