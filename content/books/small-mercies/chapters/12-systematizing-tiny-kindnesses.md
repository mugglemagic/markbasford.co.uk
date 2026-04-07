---
chapter: 12
title: "Systematizing Tiny Kindnesses"
word_count: 4350
status: draft
---

# Systematizing Tiny Kindnesses

![A professional kitchen prep list pinned to a wall — handwritten, checked off, slightly worn. Stainless steel surfaces in the background. The system that survives the individual.](images/chapters/12.png)

Everything in this book so far has been about individual moments. A loading state here. An error message there. A welcome-back screen, a progress indicator, a recovery path. Each one is a small mercy — a place where someone paid attention and the product was better for it.

But here's the problem: individual attention doesn't scale. One developer who cares deeply about loading states can improve one product. One content designer who writes humane error messages can fix one set of forms. One accessibility specialist who checks every component for `prefers-reduced-motion` support can audit one library. They do good work. Important work. And the moment they leave the team, move to another project, or go on holiday, the standard starts to drift.

I've seen this happen. A team ships a product with thoughtful loading states, careful microcopy, and accessible motion. Six months later, a new feature goes out with a generic spinner, an "Error: something went wrong" message, and no reduced-motion fallback. Nobody did anything wrong. Nobody decided to stop caring. The original developer just wasn't in the code review for that PR, and nobody else knew to check.

The question this chapter asks is: how do you stop the kindness depending on the individual?

## The Prep List

There's a concept in professional kitchens called the prep list. It's the document — written, posted on the wall, checked off during the shift — that records what needs to be done before service. Stocks made. Vegetables cut. Sauces reduced. Stations set.

In a kitchen where the head chef keeps everything in their head, the food is as good as the chef's memory. When the chef is off sick, the kitchen falls apart. Nobody knows what was prepped yesterday. Nobody knows what needs doing today. The knowledge lives in one person, and when that person isn't there, the knowledge isn't either.

In a kitchen with a prep list, the knowledge survives the individual. A new cook can walk in, read the list, and know exactly what's expected. The standard doesn't depend on who's working. It depends on the system.

Design systems are the prep list.

## What Design Systems Actually Do

A design system is usually described as a collection of reusable components, design tokens, documentation, and governance guidelines. Buttons, form fields, navigation patterns, colour scales, spacing units — packaged up so teams can install them and build consistently. [1]

That's accurate, but it misses the point. The real product of a design system isn't components. It's encoded decisions. Every token, every component default, every pattern carries a decision that was made once, carefully, and doesn't have to be remade by every developer on every feature.

A spacing token that enforces 8px increments is a decision about visual rhythm. A button component that includes focus styles by default is a decision about keyboard accessibility. A form component that surfaces inline validation with plain-language messages is a decision about how errors should feel. Each one is a small mercy baked into the infrastructure, available to every team that uses the system, regardless of whether anyone on that team personally remembers to check.

This is what it means to systematise kindness. The care isn't in the exception — the one developer who remembers. It's in the default — the system that provides it automatically.

## Accessibility as Default

WebAIM's 2026 analysis of the top one million websites found that 95.9% had at least one detectable WCAG failure — up from 94.8% the year before. The number went in the wrong direction. [2]

Ninety-five point nine percent. The web, in 2026, is almost universally inaccessible. And it's getting worse, not better.

This number doesn't shift because individual developers don't care. Many do. It shifts because accessibility, when treated as an individual responsibility, is the first thing lost to deadline pressure, scope creep, and the simple fact that most developers don't encounter the barriers their users do. You don't notice your buttons lack focus styles if you never use a keyboard to navigate. You don't notice your motion makes people dizzy if your vestibular system works fine.

Accessible design systems change this equation. When accessibility is encoded in the tokens, component patterns, and contribution guardrails, it stops being something individual developers remember to add and becomes something the system provides. [3]

The GOV.UK Design System updated all 44 of its components for WCAG 2.2 compliance in 2024. Every component specifies ARIA attributes, keyboard interactions, and applicable success criteria. When a team builds a service using the GOV.UK Design System, they get accessibility for free — not because they're accessibility experts, but because the system is. [4]

The result: pages built with the GOV.UK Design System download about twice as fast as those built without it, because they use about half as much code. During the start of the pandemic, 52 government services were built within weeks using the design system — not months — because the foundational decisions had already been made. [5]

That's the power of encoding care into infrastructure. It doesn't just improve quality. It improves speed. It improves consistency. And it removes the dependency on any one person remembering to do the right thing.

> **Figure 12.1 — Individual Care vs. Systematic Care**

![Figure 12.1 — Individual Care vs. Systematic Care](images/fig-12.1-individual-care-vs-systematic-care.png)

*The difference between individual care and systematic care. Individual care depends on who's in the room — it's as good as the team's memory and as fragile as their availability. Systematic care is encoded in the infrastructure — components, tokens, defaults, and guidelines that provide the right behaviour regardless of who's building with them. The first produces inconsistent quality. The second produces a floor that nobody falls below.*

## The Fogg Behavior Model (Again)

Chapter 8 introduced BJ Fogg's Behavior Model in the context of dark patterns — the same framework that builds healthy habits also builds exploitative engagement loops. This chapter uses it for its intended purpose: building a team culture where the right behaviour is the easy behaviour.

Fogg's model: behaviour happens when **Motivation**, **Ability**, and a **Prompt** converge simultaneously. If any element is missing, the behaviour doesn't occur. [6]

Applied to team practices:

**Motivation**: the team needs to understand *why* the small moments matter. This is where the science from the rest of the book comes in — the peak-end rule, the affect heuristic, the mere-exposure effect, processing fluency, loss aversion. These aren't abstract theories. They're the mechanism by which every microinteraction either builds or erodes trust. Showing the team user research clips, error analytics, and real examples (the password field that cost a charity a month of funding, the pregnancy app that couldn't record a loss) provides the emotional fuel.

**Ability**: make the right thing easy. A component library where every element is already accessible, where loading states are built in, where error messages follow the plain-language standard from the style guide. If adding a loading state requires three minutes of work, it'll get done. If it requires an hour of custom development, it'll get cut when the deadline hits.

**Prompt**: reliable triggers at the moment of decision. A PR template that asks "Did you check the loading state? The error state? The empty state?" A linting rule that flags missing `aria-label` attributes. A design review checklist that includes "How does this feel when it goes wrong?" alongside "How does this look when it goes right?"

> **Figure 12.2 — The Fogg Model Applied to Team Culture**

![Figure 12.2 — The Fogg Model Applied to Team Culture](images/fig-12.2-the-fogg-model-applied-to-team-culture.png)

*BJ Fogg's Behavior Model applied to team culture. Motivation comes from understanding why the small moments matter (research, data, real stories). Ability comes from making the right thing easy (design system components with care built in). Prompts come from reliable triggers at the moment of decision (PR templates, linting rules, review checklists). When all three converge, the team consistently ships thoughtful microinteractions — not because of individual heroism, but because the system supports the behaviour.*

## Review Rituals

The design system provides the defaults. Review rituals provide the checkpoints.

Code review is the most obvious one, and the most underused for this purpose. Most code reviews check whether the code works, whether it's clean, and whether it follows architectural conventions. Very few ask: what does the loading state look like? What happens if this API call fails? What does the empty state say? Is there a success confirmation?

Adding these questions to the review process doesn't require a new tool or a new meeting. It requires a checklist — a literal list of questions that someone runs through before approving a PR. Does this feature handle the error state? Does it have a loading indicator? Does it work with `prefers-reduced-motion`? What does the microcopy say when things go wrong?

Design critique can serve the same function. Most design reviews ask "how does this look?" The stress case question from Chapter 11 — "what's the worst thing that could be happening in someone's life when they encounter this?" — belongs in every design review, right next to "does the visual hierarchy work?"

These rituals compound. One review catches one missing loading state. A hundred reviews, each catching one thing, produce a product where the small moments are consistently handled. The rituals don't replace the design system — they complement it. The system provides the materials. The reviews check that they're being used.

## The Aspiration and the System

There's a difference between a team that says "we care about accessibility" and one that ships a component library where every element is already accessible. The first is an aspiration. The second is a system. Aspirations are lovely. Systems ship.

The same applies to every principle in this book. A team can aspire to write humane error messages, but if the default error component ships with "Error: something went wrong" and nobody changes it, the aspiration is irrelevant. A team can aspire to respect motion preferences, but if the animation library doesn't check `prefers-reduced-motion`, the aspiration is invisible to the user who gets a migraine.

Systems encode values. Every default is a value statement. A component that ships with focus styles says "keyboard users matter here." A form that ships with inline validation and plain-language messages says "we expect mistakes and we'll help you recover." A motion token that respects `prefers-reduced-motion` says "your comfort is more important than our animation."

The system you build is the culture you ship. And the culture you ship is what the user feels.

## Try This

Look at the last five PRs your team merged. For each one, ask:

Was there a loading state? Was there an error state? Was there an empty state? Was there a success confirmation? Did anyone in the review ask about any of these?

If the answer to all five is yes, your system is working. If the answer to any of them is no, you've found a gap — not in any individual's care, but in the system's coverage. Fill the gap with a default, a checklist item, or a component. Make the next PR easier to get right.

## The Prep List

This book started with a film about paying attention. Chapter 1 argued that the craft of noticing — of treating ordinary moments as worth caring about — is what separates a product that works from one that feels good.

Twelve chapters later, the question is no longer whether to notice. It's how to make noticing survive the individual. How to build a kitchen where the prep list is on the wall, where the standards are in the system, where the care is in the default — so that every developer, every designer, every content writer who touches the product has the materials and the prompts to do it right, regardless of whether the person who originally cared is still in the room.

The soft-close drawers from Chapter 5 close gently every time, for every person, because the mechanism is in the hinge — not in the hand that pushes them shut. That's what a design system does. It puts the mechanism in the hinge.

The final chapter returns to where we started — to the film, the philosophy, and the question of what it means to live in the present tense.

## References

[1] Design systems: reusable components, design tokens, documentation, and governance. [IxDF — What Are Design Systems? (2026)](https://ixdf.org/literature/topics/design-systems).

[2] WebAIM 2026 Million analysis: 95.9% of top million websites had at least one detectable WCAG failure, up from 94.8% in 2025. [WebAIM — The WebAIM Million 2026](https://webaim.org/projects/million/).

[3] Accessible design systems transform accessibility from per-feature effort to organizational default. [TestParty — Accessibility as Design System Policy](https://testparty.ai/blog/accessibility-as-design-system-policy).

[4] GOV.UK Design System updated all 44 components for WCAG 2.2 in 2024. [GOV.UK Design System — Live Reassessment](https://www.gov.uk/service-standard-reports/gov-uk-design-system-live-reassessment).

[5] GOV.UK Design System: pages download ~2x faster, 52 services built in weeks during pandemic. [GDS Blog — The GOV.UK Design System Is Now Live](https://gds.blog.gov.uk/2022/03/31/the-gov-uk-design-system-is-now-live/).

[6] Fogg, B. J. Behavior Model: Motivation + Ability + Prompt. [behaviormodel.org](https://www.behaviormodel.org/). Over 1,900 academic publications reference the model.
