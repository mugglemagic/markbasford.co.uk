# Chapter 05 Research — Motion with Manners

## Animation and Cognitive Load

### Research Foundation
- Over 30 years of educational psychology and HCI research shows that decorative animations increase cognitive effort and reduce memory performance.
- Decorative animations impair recall and are a source of extraneous cognitive load — they make it harder for people to read, comprehend, or remember information.
- Functional animation (orienting, providing feedback, showing state change) reduces cognitive load by making transitions predictable.
- The distinction: animation that serves the user vs. animation that serves the designer's portfolio.

### UX Motion Best Practices
- Keep duration short: UX motion typically does not last more than 1 second.
- Movement should be reasonable — subtle enough to guide without demanding attention.
- Purpose categories: orientation (where am I?), feedback (what just happened?), continuity (how did I get here?), personality (what does this feel like?).

Sources:
- [Trevor Calabro — Most UI Animations Shouldn't Exist](https://trevorcalabro.substack.com/p/most-ui-animations-shouldnt-exist)
- [IBM Design — Accessible Motion](https://medium.com/design-ibm/accessible-motion-why-its-essential-and-how-to-do-it-right-ff38afcbc7a9)

---

## Vestibular Disorders and Motion Sensitivity

### The Scale of the Problem
- A peer-reviewed study found that upward of 35% of participants with vestibular disorders had difficulty using websites featuring heavy motion.
- Effects like parallax scrolling, zoom transitions, and auto-scrolling can cause dizziness, nausea, or migraines.
- Vestibular disorders affect a significant portion of the population — estimates range from 15-35% of adults experiencing some form of vestibular dysfunction at some point.

### `prefers-reduced-motion`
- The CSS media query `prefers-reduced-motion` checks whether the user has set an OS-level preference for reduced motion.
- Supported by all modern browsers. Allows two code paths: full motion and reduced motion.
- Best practice: reduced motion should not mean *no* motion. It means shorter durations, less distance, and no parallax or zoom effects. Fade in/out is generally safe.

### WCAG Standards
- WCAG 2.1 Success Criterion 2.3.3: "Animation from Interactions" — motion triggered by user interaction can be disabled unless it is essential to the functionality.
- This is about kindness — not adding a media query is choosing to make some people physically ill for the sake of a transition effect.

Sources:
- [W3C — Understanding SC 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
- [Smashing Magazine — Designing With Reduced Motion (2020)](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
- [A List Apart — Designing Safer Web Animation](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [TPGi — Impact of Motion Animation on Cognitive Disability](https://www.tpgi.com/the-impact-of-motion-animation-on-cognitive-disability/)
- [Think Company — Reduced Motion for Accessible Animation](https://www.thinkcompany.com/blog/leverage-reduced-motion-for-more-accessible-web-animation/)

---

## Motion as Manners

- Good motion is like good manners: you notice when it's absent, not when it's present.
- A door that opens smoothly is motion with manners. A door that slams shut is motion without.
- Animation should orient ("this panel slid in from the right, so the back button will slide it back right") and reassure ("your file is uploading — see the progress"), not perform ("look at this parallax scroll").

---

## Story Candidates
1. A hotel door that closes too fast — the pneumatic closer that slams vs. the one that eases shut. Both close the door. One makes you flinch.
2. iOS's zoom-in animation when opening an app — it tells you where the app "lives" spatially, and the reverse animation tells you where you're going back to. Functional motion that orients.
3. The person who holds the door open vs. the person who lets it close in your face — motion (or its absence) as a social signal.
