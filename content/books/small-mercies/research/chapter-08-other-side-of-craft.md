# Chapter 08 Research — The Other Side of Craft

## Dark Patterns — Harry Brignull

### Origin and Taxonomy
- Harry Brignull, UX designer, coined "dark pattern" on 28 July 2010 with the registration of darkpatterns.org — "a pattern library with the specific goal of naming and shaming deceptive user interfaces."
- Published *Deceptive Patterns* in 2023, the definitive book on the subject.
- Key dark pattern types: trick questions, sneak into basket, roach motel (easy to get in, hard to get out), privacy zuckering, price comparison prevention, misdirection, hidden costs, bait and switch, confirmshaming, disguised ads, forced continuity, friend spam.

### Prevalence
- EU Commission study (2022): **97% of the most popular websites and apps** used by EU consumers deployed at least one deceptive pattern.
- FTC study (July 2024): of 642 websites and apps examined, **76% employed at least one possible deceptive pattern**.
- These aren't edge cases. They're the norm.

Sources:
- [Wikipedia — Dark Pattern](https://en.wikipedia.org/wiki/Dark_pattern)
- [FairPatterns.ai — Dark Patterns Targeted by EU (2024)](https://www.fairpatterns.ai/post/dark-patterns-targeted-by-eu-institutions-a-new-era-of-digital-fairness)
- [Built In — Regulating Dark Patterns](https://builtin.com/articles/dark-patterns-regulation)

---

## Persuasive Technology — Tristan Harris & The Attention Economy

### Stanford Persuasive Technology Lab
- BJ Fogg (same researcher from Ch 12 on habit formation) founded the Stanford Persuasive Technology Lab, where Tristan Harris studied.
- The lab's research on motivation, ability, and triggers underpins both ethical and exploitative design. The same Fogg Behavior Model that helps build healthy habits also powers engagement-maximising dark patterns.

### Tristan Harris and the Center for Humane Technology
- Harris worked as Design Ethicist at Google. His 2013 internal presentation "A Call to Minimize Distraction & Respect Users' Attention" went viral internally.
- Co-founded the Center for Humane Technology in 2018 with Aza Raskin and Randima Fernando.
- Core argument: technology companies use intermittent variable rewards (Ch 07's variable ratio reinforcement), fear of missing out, social approval needs, and interruption to maximise engagement at the expense of user wellbeing.
- The same mechanisms that make a satisfying toggle feel good (feedback, reward) can be weaponised to make an infinite scroll addictive.

Sources:
- [Tristan Harris — Wikipedia](https://en.wikipedia.org/wiki/Tristan_Harris)
- [Center for Humane Technology](https://www.humanetech.com/)
- [CHT — Impact and Story](https://www.humanetech.com/impact-and-story)
- [Thought Economics — Tristan Harris Interview](https://thoughteconomics.com/tristan-harris/)

---

## Regulation Catching Up

### EU — Digital Services Act (DSA)
- Article 25 of the DSA **explicitly prohibits** designing, organising, or operating online interfaces to deceive, manipulate, or materially impair users' ability to make free, informed decisions.
- The EU's existing GDPR and consumer protection laws already considered dark patterns illicit; the DMA, DSA, and AI Act now name them explicitly.
- The European Commission is expected to launch a public consultation in 2025 for a "Digital Fairness Act" targeting deceptive patterns specifically.

### US — FTC Enforcement
- The FTC secured a **$2.5 billion settlement against Amazon** over dark pattern Prime sign-ups and cancellation friction (September 2025).
- October 2021: FTC enforcement policy statement announcing a crackdown on businesses using dark patterns to "trick or trap consumers into subscription services."

### The Implication for Craft
- The regulatory direction is clear: what was once "aggressive UX" is becoming illegal. The techniques in this book aren't just ethically better — they're becoming the only legal option.

Sources:
- [IAPP — How US, EU Approach Regulating Dark Patterns](https://iapp.org/news/a/ongoing-dark-pattern-regulation)
- [Berkeley Tech Law Journal — Left in the Dark: FTC Limitations (2025)](https://btlj.org/wp-content/uploads/2025/02/0007_39-4_Lalsinghani.pdf)
- [Arthur Cox — EU Digital Fairness Fitness Check](https://www.arthurcox.com/knowledge/eu-digital-fairness-fitness-check-shines-light-on-deceptive-patterns/)
- [Berkeley Tech Law Journal — Trapped by Design (2025)](https://btlj.org/2025/11/trapped-by-design-how-dark-patterns-manipulate-your-choices-and-the-regulators-fighting-back/)

---

## The Mirror Image of Each Chapter

This chapter works by holding a mirror up to the book's own toolkit:

| Good Craft (this book) | Dark Version |
|---|---|
| Welcome back message (Ch 03) | Guilt-trip re-engagement ("We miss you! Your streak is dying!") |
| Respectful microcopy (Ch 06) | Confirmshaming ("No thanks, I don't like saving money") |
| Progress celebration (Ch 07) | Manufactured urgency ("Only 2 left!") |
| Reduced friction (passim) | Roach motel (easy sign-up, impossible cancellation) |
| Clear feedback (Ch 05) | Misdirection (visual emphasis on the option the company wants) |

The test: **does this interaction serve the user or the business at the user's expense?** If the user would choose differently with full information and zero pressure, the pattern is deceptive.

---

## The Connection to BJ Fogg

- Fogg's Behavior Model (Motivation + Ability + Prompt) is morally neutral. It describes how behaviour happens, not whether the behaviour is good.
- Ethical application: make it easy (high ability) for motivated users to accomplish their goals. Prompt at natural moments.
- Exploitative application: artificially inflate motivation (fear, social pressure), reduce ability to leave (hidden cancellation), prompt at vulnerable moments (late at night, during emotional states).
- This chapter makes explicit what Ch 12 (Systematizing) will assume: the system you build encodes values, and those values can be generous or extractive.

---

## Story Candidates
1. The gym membership cancellation — easy to sign up online, but you have to call during business hours, wait on hold, and speak to a "retention specialist" to cancel. The digital version: Amazon Prime's pre-2025 cancellation flow.
2. Confirmshaming examples — "No thanks, I prefer to pay full price" / "I don't want to grow my business" / "No, I enjoy being uninformed." The linguistic inverse of Ch 06's respectful language.
3. The slot machine and the progress bar — same variable reinforcement mechanism, completely different ethical framing. One takes your money; the other celebrates your learning. The craft is identical; the intent is opposite.
