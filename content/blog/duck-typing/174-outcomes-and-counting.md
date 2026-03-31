---
ref: DT-0002
title: "174 Outcomes and Counting"
author: "Mark Basford"
date: 2026-04-10
tags: [accessibility, wcag, wcag-3, web-standards, conformance]
series: "Duck Typing"
part: 3
word_count: 1668
published: false
estimated_reading_time: "8 min"
---

![A ship navigating under a starry night sky — celestial navigation guided sailors for centuries before GPS changed everything](/blog/174-outcomes-and-counting.webp)

In 1761, a Yorkshire carpenter's son named John Harrison sent his fourth marine chronometer on an 81-day voyage to Jamaica. It lost five seconds. Five seconds over nearly three months at sea — a precision that made reliable longitude calculation possible for the first time in history. Before Harrison, sailors navigated by the stars. They measured the angle between celestial bodies and the horizon with a sextant, cross-referenced almanac tables, and hoped the sky was clear. It worked, if you had the expertise. If you didn't, or the weather was poor, you were guessing.

The Scilly Naval Disaster of 22 October 1707 killed between 1,400 and 2,000 sailors because an entire fleet miscalculated its position. That disaster catalysed the Longitude Act of 1714, which offered up to £20,000 for a practical solution. Harrison spent decades building one. The establishment resisted — astronomers preferred the lunar distance method, which was elegant and free. Harrison's clocks were mechanical, expensive, and unromantic. But they worked.

GPS satellites first launched in 1978. The system went civilian in 1983, reached its full 24-satellite constellation in 1993, and got ten times more accurate overnight on 1 May 2000 when the US military removed Selective Availability. Navigation was transformed — not because the stars stopped working, but because a more precise instrument arrived that didn't require you to be an expert to use it.

The US Navy dropped celestial navigation from its curriculum in 2006. Then, in 2015, they reinstated it — as a three-hour module, not a full course — because GPS can be jammed, spoofed, or switched off.

The stars didn't stop being useful. They just stopped being the only way.

---

## The sextant we have

WCAG 2.0 was published in 2008. Version 2.1 followed in 2018, and 2.2 in October 2023. For nearly two decades, these guidelines have been the primary instrument for measuring web accessibility. They work. They're well-documented, widely understood by specialists, and referenced by law in the EU, the US, and dozens of other jurisdictions.

They're also binary. Each success criterion either passes or fails. You're either Level A, AA, or AAA — with AA being the practical target because almost nobody achieves AAA across an entire site. The system doesn't distinguish between a form that's mildly awkward for keyboard users and one that's completely inoperable. Both fail the same criterion the same way.

And like celestial navigation, WCAG 2.x only measures what it was designed to measure. Cognitive accessibility gets light treatment. Dark patterns aren't addressed. Task completion — whether someone can actually finish what they came to do — isn't directly tested. The instrument is precise within its scope, but the scope has limits.

---

## What WCAG 3.0 actually is

On 16 May 2024, timed with Global Accessibility Awareness Day, the W3C published a working draft of WCAG 3.0 that introduced 174 new outcomes. That number got attention — and it should have, because it signalled a structural overhaul rather than an incremental update. By the ninth working draft, published 3 March 2026, the terminology had evolved: "outcomes" are now called "requirements", and they come in two tiers — core requirements (mandatory for baseline conformance) and supplemental requirements (selectively applied).

The changes run deeper than vocabulary.

**Graduated scoring replaces binary pass/fail.** Instead of pass or fail, each requirement is scored from 0 to 4 — Poor, Fair, Good, Excellent. Scores aggregate across functional categories. Bronze conformance requires an average of at least 3.5, with the same minimum in every category. Critical errors — failures that block task completion — override positive scores elsewhere. The system still has teeth. But it distinguishes between "imperfect" and "broken" in a way that WCAG 2.x can't.

**Twelve functional categories replace the four POUR principles** as the primary structure. Perceivable, Operable, Understandable, Robust — the framework that every accessibility practitioner has memorised — becomes a tagging system for sorting rather than the top-level organisation. The new categories include areas WCAG 2.x barely touches: Process and Task Completion, Policy and Protection (covering dark patterns and algorithmic fairness), and expanded treatment of Help and Feedback.

**Bronze, Silver, and Gold replace A, AA, and AAA.** Bronze is roughly equivalent to current AA. Silver adds supplemental requirements. Gold demands inclusive design processes, user involvement, and innovation — not just technical conformance.

**The name itself changes.** "Web Content Accessibility Guidelines" becomes "W3C Accessibility Guidelines." The scope now covers native apps, tools, publishing, AR/VR, digital documents, and emerging technologies. The web was always too narrow.

**Methods become normative.** In WCAG 2.x, techniques were informative — suggestions, not requirements. In WCAG 3.0, methods are mandatory test procedures. This reduces the interpretive ambiguity that has plagued audits for years.

---

## The direction you can test today

Here's what I find interesting: while WCAG 3.0 is years from completion, several of its confirmed directions are already testable with existing tools. Not the spec itself — but the thinking behind it.

**Clear language.** The "Clear Language" guideline has reached "Developing" maturity in the March 2026 draft, with requirements including abbreviations explained, no nested clauses, and no unnecessary words. You can test for this today. Sa11y — an open-source accessibility checker from Toronto Metropolitan University — includes readability scoring alongside its 80+ accessibility checks. Hemingway Editor grades your content for readability and flags complex sentences. These aren't accessibility tools pretending to be language tools. They're testing exactly what WCAG 3.0 will require.

**Task flow testing.** WCAG 3.0 defines four testing scopes: items, views, task flows, and products. That "task flow" scope is new — WCAG 2.x tests individual elements on individual pages. If you're already running Playwright tests, adding `@axe-core/playwright` lets you run accessibility checks at each step of a multi-step user journey. Register, fill a form, complete a checkout, check your results. That's WCAG 3.0's task flow scope, available in your CI pipeline right now.

**Assertions.** This is the most genuinely novel concept in WCAG 3.0 and has no WCAG 2.x equivalent. Assertions are documented organisational commitments — training records, usability testing reports, accessibility process documentation. They can't substitute for technical requirements, but they're part of Silver and Gold conformance. The W3C's Accessibility Maturity Model, updated September 2025, maps almost directly to what assertions will demand. If you start documenting your training, your testing practices, and your remediation processes now, you're building the evidence base that WCAG 3.0 will formalise.

---

## The timeline reality

The March 2026 draft is the ninth working draft since the first in January 2021. The W3C's AG Working Group charter runs through April 2026 and is being renewed. The proposed new charter targets a Candidate Recommendation Snapshot by Q4 2027. The AG Working Group co-chair, Rachael Bradley Montgomery, has mentioned late 2029 as a target for the final recommendation — with the caveat that it's a draft schedule subject to revision.

The W3C's own language is unambiguous: the current spec is an "incomplete draft" where "many aspects are in an exploratory or developing phase and will change substantially." Guidelines and requirements "will be edited, added, combined, and removed."

No accessibility testing tool supports WCAG 3.0 conformance checking. No law references it. WCAG 2.1 Level AA is what the European Accessibility Act requires (via EN 301 549), what the ADA Title II rule mandates, and what courts evaluate against. That won't change for years after 3.0 is finalised — WCAG 2.0 was published in 2008 and the US didn't formally adopt it into Section 508 until 2017.

This is not imminent.

---

## What to actually do

Keep building to WCAG 2.2 — and aim for AAA wherever possible. AA is the legal baseline, and it's what courts enforce. But treating AA as the ceiling rather than the floor is how the industry ended up with 95% of websites failing basic checks. AAA isn't always achievable across every page and every criterion — but the exceptions should be exactly that: exceptions you've considered and documented, not a blanket excuse to stop at "good enough." Sites pushing toward AAA will be comfortably beyond Bronze-level conformance under WCAG 3.0. Sites that treated AA as the finish line will find themselves closer to the edge than they expected.

Start absorbing the philosophical shift now:

**Outcomes over checkboxes.** Think about whether people can complete tasks, not just whether individual elements pass isolated criteria. A form with perfect contrast and proper labels that requires seventeen steps to submit is technically accessible and practically hostile.

**Continuous measurement over one-off audits.** The graduated scoring model implies ongoing tracking — scores improving over time, not a single audit producing a single verdict.

**Severity matters.** The critical error concept in WCAG 3.0 codifies something practitioners have always known: not all failures are equal. A missing skip-to-content link is not the same as a checkout process that traps keyboard users.

And test beyond the element level. Run Sa11y on your content for readability. Wire `@axe-core/playwright` into your user journey tests. Start documenting your accessibility training and usability testing — not because a law requires it yet, but because the evidence you build now is the evidence WCAG 3.0 will formalise.

---

## The stars are still there

GPS didn't replace celestial navigation overnight. The transition took decades. The Navy reinstated star navigation not out of nostalgia but because resilient systems use multiple instruments. The best navigators understand both.

WCAG 3.0 won't deprecate 2.x. The W3C is explicit about this — both will coexist, and a mapping document between the two is a planned deliverable. The goal isn't to abandon what you know. It's to understand what the new instrument measures, so when it arrives, you're not starting from zero.

Harrison spent decades building a better way to measure position. He never got the official Longitude Prize — the astronomical establishment saw to that — but his chronometer changed navigation permanently. The W3C is doing something similar, and at a similar pace. The working drafts will keep coming. The terminology will keep shifting. The scope will keep expanding.

The chronometer didn't make the stars wrong. It made the measurement more precise.
