# Chapter 11 Research — The Invisible User

## Eric Meyer's Facebook Year in Review

### The Story
- December 2014. Eric Meyer — web standards advocate, CSS expert, co-author of *Design for Real Life* — lost his six-year-old daughter Rebecca to aggressive brain cancer in June of that year. She died on her sixth birthday, less than ten months after diagnosis.
- That December, Facebook's Year in Review algorithm served him a generated card with Rebecca's photo surrounded by dancing cartoon people and confetti. "It's been a great year! See your year in review."
- Meyer wrote a blog post titled "Inadvertent Algorithmic Cruelty." His description: "Algorithms are essentially thoughtless. They model certain decision flows, but once you run them, no more thought occurs."
- The code worked for the overwhelming majority — "reminding people of the awesomeness of their years, showing them selfies at a party or whale spouts from sailing boats." For those who experienced death, divorce, illness, job loss, or any other crisis, it was devastating.

### Facebook's Response
- Jonathan Gheller, Year in Review product manager, apologised to Meyer, acknowledging the app "was awesome for many people, but brought grief rather than joy" to him.
- Facebook had an "Empathy Team" — and still shipped this.

### The Lesson
- Happy-path design assumes the user's life matches the product's assumptions. When it doesn't, the product becomes cruel — not through malice, but through thoughtlessness.
- The fix isn't better algorithms. It's asking the question before shipping: "What's the worst thing that could be happening in someone's life when they see this?"

Sources:
- [Eric Meyer — Inadvertent Algorithmic Cruelty (2014)](https://meyerweb.com/eric/thoughts/2014/12/24/inadvertent-algorithmic-cruelty/)
- [Slate — Facebook Year in Review: My Tragic Year](https://slate.com/technology/2014/12/facebook-year-in-review-my-tragic-year-was-the-wrong-fodder-for-facebook-s-latest-app.html)
- [CNN — Facebook's Year in Review Brings Up Tragic Events](https://www.cnn.com/2014/12/29/living/feat-facebook-year-in-review-tragedy-death/index.html)

---

## Stress Cases — Meyer & Wachter-Boettcher

### *Design for Real Life* (2016)
- Sara Wachter-Boettcher and Eric Meyer's book reframes the concept of "edge cases" as **stress cases**.
- Edge case says: *this scenario is unlikely and marginal — we can deprioritise it.*
- Stress case says: *this scenario tests the strength of our design — if we can handle this, we can handle anything.*
- The philosophy: "Start with the most vulnerable, distracted, and stressed-out users and work outward, because when we make things for people at their worst, they'll work that much better when people are at their best."

### Practical Framework
- Build stress cases into personas and user journey maps. "More realistic personas make it much easier to imagine moments of crisis and to test scenarios that might trigger a user's stressors."
- Crisis doesn't mean natural disaster — it can be a wrong order, a rush to the airport, a bad diagnosis, a financial shock.
- The question to ask: "When we label a usage an 'edge case,' we marginalize that user and choose not to care."

Sources:
- [A List Apart — Design for Real Life: Interview with Sara Wachter-Boettcher](https://alistapart.com/article/design-for-real-life-interview-with-sara-wachter-boettcher/)
- [A List Apart — Design for Real Life Excerpt](https://alistapart.com/article/design-for-real-life-excerpt/)
- [Zeldman — Identify Stress Cases and Design with Compassion](https://zeldman.com/2016/11/04/identify-stress-cases-design-compassion-eric-meyer/)
- [Merlin Rebrovic — Edge vs. Stress Cases](https://merlin.rebrovic.net/blog/edge-stress-cases/)

---

## Real-World Stress Case Examples

### Pregnancy and Loss
- Pregnancy-tracking apps that have no way to record a miscarriage or stillbirth. The app continues sending cheerful updates about the baby's development.
- After recording a loss, some apps continued sending targeted ads for baby products for months.

### Homelessness and Forms
- Address forms that require a "home address" with no alternative for people who don't have one.
- Government benefit applications that can't be completed without a fixed address — the people who most need the benefit can't access it.

### Congratulatory Algorithms
- "You've been active 365 days!" sent to someone using a chronic illness management app.
- "Great news — you've lost 5kg this month!" sent to someone with an eating disorder.
- Spotify Wrapped celebrating "your most-played song" when it was played on loop during a depressive episode.

### NPR's Stress Cases
- Libby Bawcombe at NPR compiled a list of 50 stress cases for news product design, including: "A user who is reading about a mass shooting that happened in their community," "A user who sees a photo of their abuser in a news story," and "A user who is news-literate but seeing coverage of their own trauma."

Sources:
- [NPR Design — 50 Stress Cases to Consider](https://npr.design/designing-news-products-with-empathy-50-stress-cases-to-consider-61f068a939eb)
- [Medium / RE: Write — Designing for the Stressed, Distracted and Vulnerable](https://medium.com/re-write/designing-for-the-stressed-distracted-and-vulnerable-6ebd1ea97736)

---

## Connecting the Science

This chapter draws on research from earlier chapters and applies it to the hardest cases:

- **Loss aversion (Ch 10)**: When someone has already experienced a real-world loss, products that compound it with digital loss (lost work, lost progress, insensitive messaging) hit exponentially harder.
- **Psychological safety (Ch 10)**: Edmondson's finding that the best teams report more errors because they feel safe doing so. The invisible user doesn't report bugs — they silently leave. The product never learns.
- **Processing fluency (Ch 06)**: Under stress, cognitive load is already maxed. Dense copy, ambiguous options, and multi-step flows that are merely annoying to a calm user become impassable barriers to a stressed one.
- **Face-threatening acts (Ch 06)**: For a grieving, ill, or struggling user, almost any assumption the product makes about their state is a potential face-threatening act.

---

## Trauma-Informed Design Principles

- **Assume nothing about the user's current state.** Don't project celebration, achievement, or normalcy.
- **Offer exits.** Every flow should have a graceful way out — especially celebratory or reflective features.
- **Allow silence.** Not every return needs a cheerful greeting. Sometimes the kindest thing is to say nothing and let the user lead.
- **Design the opt-out first.** If a feature could cause harm (year in review, streak notifications, congratulatory messages), design the opt-out before you design the feature.

---

## Story Candidates
1. Eric Meyer's Facebook Year in Review — the defining story of this chapter. The dancing cartoon people, the confetti, the dead child's photo.
2. The pregnancy app that keeps sending updates — the interface that doesn't know, and has no way to learn, that the pregnancy ended.
3. The government benefits form that requires a home address — the system that excludes the people it was built to help.
4. The neighbour who doesn't ask "how are you?" but instead says "I brought you this" — sometimes the kindest interaction isn't a greeting, it's a quiet act of service with no expectation of a cheerful response.
