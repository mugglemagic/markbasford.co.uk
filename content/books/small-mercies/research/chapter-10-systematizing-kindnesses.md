# Chapter 10 Research — Systematizing Tiny Kindnesses

## Habit Formation — BJ Fogg and Tiny Habits

### The Fogg Behavior Model
- BJ Fogg (Stanford Behavior Design Lab): behaviour happens when three elements converge simultaneously: **Motivation**, **Ability**, and a **Prompt**.
- If any element is missing, the behaviour doesn't occur. The model explains why good intentions alone don't produce change — you also need low friction (ability) and a reliable trigger (prompt).

### Tiny Habits Method
- Implementation intention format: "After I [Anchor Moment], I will [Tiny Behavior]."
- The anchor is a reliable existing behaviour; the tiny behaviour takes less than 30 seconds.
- Key insight: start absurdly small. Scale after the habit is established.
- Over 1,900 academic publications reference the Fogg Behavior Model.

### Application to Team Culture
- Embedding quality into a design system follows the same logic as habit formation:
  - **Prompt**: code review checklist, linting rules, PR templates that ask "did you check loading states?"
  - **Ability**: make the right thing easy — components that are accessible by default, tokens that enforce spacing.
  - **Motivation**: show the team why it matters — user research clips, error analytics, the colonoscopy study.
- The system reduces the need for individual heroism. The kindness is in the default, not in the exception.

Sources:
- [BJ Fogg — Behavior Model](https://www.behaviormodel.org/)
- [Tiny Habits](https://tinyhabits.com/)
- [BJ Fogg — Learn the Fogg Behavior Model](https://www.bjfogg.com/learn)
- [PMC — Tiny Habits for Gratitude in Healthcare Education (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9149079/)

---

## Design Systems as Cultural Infrastructure

### What Design Systems Actually Do
- A design system is "a collection of reusable components, design tokens, documentation, and governance guidelines that teams use to build consistent digital products."
- Design tokens: atomic values (colours, spacing, typography, shadows) stored in platform-agnostic formats (JSON/YAML). They sit below the component layer.
- Components: reusable, coded UI elements that ship as packages product teams install.
- But the real product of a design system isn't components — it's shared standards. The system encodes decisions so they don't have to be remade.

### Accessibility as Default
- "Accessible design systems transform accessibility from a per-feature effort into an organizational default."
- When accessibility is encoded in tokens, component patterns, and contribution guardrails, it stops being something individual developers remember to add and becomes something the system provides.
- Every component entry should specify ARIA attributes, keyboard interactions, and applicable WCAG criteria.

### Governance and Ownership
- "One of the most common reasons design systems stall is ownership ambiguity — when no one is accountable for evolution, standards drift and adoption slows."
- "If it's everyone's responsibility, it ends up being no one's."
- Documentation should be on a review cadence tied to the release cycle.
- 89% of leaders say improving collaboration is critical — a well-governed design system is one of the most direct mechanisms.

Sources:
- [IxDF — What Are Design Systems? (2026)](https://ixdf.org/literature/topics/design-systems)
- [Miro — Design System Governance](https://miro.com/research-and-design/design-system-governance/)
- [TestParty — Accessibility as Design System Policy](https://testparty.ai/blog/accessibility-as-design-system-policy)
- [Nathan Curtis / EightShapes — Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [Contentful — Design Tokens Explained](https://www.contentful.com/blog/design-token-system/)

---

## From Individual Care to Team Culture

### The Scaling Problem
- One developer who cares deeply about loading states, error messages, and reduced-motion support can improve one product. But they can't scale themselves.
- The answer isn't hiring more caring developers. It's encoding the care into the system: accessible components, humane default microcopy, motion tokens that respect `prefers-reduced-motion`, review checklists that ask about the micro-moments.

### Review Rituals
- Code review as a kindness checkpoint: does this PR handle the error state? What does the empty state say? Is there a loading indicator?
- Design critique that asks "how does this feel when it goes wrong?" alongside "how does this look when it goes right?"
- Quarterly audits of the micro-moments: loading states, error messages, empty states, success confirmations.

---

## Story Candidates
1. The restaurant kitchen that writes prep lists vs. the one where the head chef keeps everything in their head. When the chef is off sick, the second kitchen falls apart. Systems encode knowledge so it survives the individual.
2. GOV.UK's design system — the most public example of systematised kindness at scale. Plain language, accessible components, and consistent patterns across hundreds of services.
3. The difference between a team that says "we care about accessibility" and one that ships a component library where every element is already accessible. The first is an aspiration; the second is a system.
