---
chapter: 5
title: "Motion with Manners"
word_count: 4340
status: draft
---

# Motion with Manners

![A kitchen drawer caught mid-close by its soft-close mechanism. Nearly shut, that last centimetre of gentle deceleration. Clean, modern kitchen, shallow depth of field.](images/chapters/05.png)

We replaced our kitchen in 2020. Before, we had normal drawers — you pushed them shut and they shut. Sometimes they banged. Sometimes you had to give them a second shove because they bounced back off the frame. They worked. They were fine.

The new kitchen has soft-close drawers on everything. You push a drawer shut and it catches itself at the last moment — decelerates, eases into position, and clicks quietly closed. There is something deeply satisfying about the mechanism. You don't have to think about how hard to push. You don't have to worry about the slam. Every closure is the same: smooth, gentle, done. It's a tiny thing, and it has completely ruined me for normal drawers.

That mechanism is doing exactly what good animation does in an interface. It's not showing off. It's not drawing attention to itself. It's taking a moment that could be abrupt and making it gentle — and in doing so, it tells you something about the care that went into the thing you're using.

Motion in interfaces works the same way. When it's good, you barely notice it. When it's bad — or when it's missing — you feel it immediately.

## What Motion Is For

There's a useful distinction that thirty years of research has made clear: the difference between functional animation and decorative animation. They look similar. They do very different things to your brain.

Functional animation serves the user. It orients ("this panel slid in from the right, so swiping right will take you back"), provides feedback ("your file is uploading — see the progress bar"), shows state change ("this toggle just moved from off to on"), and maintains continuity ("this card expanded into this full screen — they're the same thing").

Decorative animation serves the designer's portfolio. Parallax scrolling that adds no information. Entrance animations that delay content. Background effects that move for the sake of movement. Elements that bounce, spin, or pulse because someone thought it would look cool in a case study.

The research on this is unambiguous. Over thirty years of educational psychology and HCI studies have shown that decorative animations increase cognitive effort and reduce memory performance. They make it harder to read, comprehend, and remember information. They are, in the language of cognitive load theory, a source of *extraneous load* — mental effort that doesn't contribute to understanding. [1]

Functional animation does the opposite. It reduces cognitive load by making transitions predictable. When a panel slides in from the right, you don't have to wonder where it came from or how to get back. The motion told you. When a progress bar fills, you don't have to wonder whether something is happening. The motion showed you. Functional animation answers questions before the user asks them.

> **Figure 5.1 — Functional vs. Decorative Motion**

![Figure 5.1 — Functional vs. Decorative Motion](images/fig-5.1-functional-vs-decorative-motion.png)

*The line between functional and decorative motion is whether it answers a question the user has. Orientation, feedback, continuity, and personality all serve the user's understanding. Entrance effects, parallax, background animation, and looping effects serve the designer's vision. The first category reduces cognitive load. The second increases it.*

## The iOS Zoom

Apple's approach to motion in iOS is one of the clearest examples of functional animation at scale.

When you tap an app icon on the home screen, the app doesn't just appear. It expands outward from the icon's position — a zoom effect that tells you where the app "lives" spatially. Close the app and it shrinks back to the icon. The animation creates a mental model: every app has a location on a grid, and opening it means expanding that location into a full screen. [2]

This is orientation through motion. You don't have to remember where an app is conceptually, because the animation tells you physically. When you press the home button (or swipe up), the reverse animation confirms: you're going back to where you were. The spatial relationship is maintained through movement.

Apple's Human Interface Guidelines describe the principle directly: motion should help people "build a mental model of how the product works" by mimicking real-world spatial behaviour. The ideal duration for most UI animation sits between 100 and 500 milliseconds — fast enough to feel smooth, long enough to communicate change clearly. [3]

Under a second. That's the window. Motion that lasts longer than a second starts to feel like it's wasting your time. Motion under 100 milliseconds is too fast to register as movement — it might as well be instant. The sweet spot is a fraction of a second, and within that fraction, the animation has to orient, reassure, and get out of the way.

The soft-close drawer again. It doesn't take three seconds to shut. It takes less than one. But in that fraction of time, it communicates: this was intentional, this was considered, and you don't need to worry about a bang.

## When Motion Hurts

Everything I've described so far — the soft-close mechanism, the iOS zoom, the 100–500ms sweet spot — assumes that the user can tolerate motion at all. For a significant number of people, they can't.

A study published by the National Institutes of Health found that as many as 35% of adults aged 40 or older in the United States — roughly 69 million people — have experienced some form of vestibular dysfunction. [4] Vestibular disorders affect the inner ear's balance system, and their symptoms include dizziness, nausea, disorientation, and migraines. These symptoms can be triggered by visual motion — including motion on a screen.

Parallax scrolling. Zoom transitions. Auto-scrolling carousels. Animations that move large areas of the screen. For someone with a vestibular disorder, these aren't design flourishes. They're physical assaults. A study on web accessibility found that upward of 35% of participants with vestibular disorders had difficulty using websites that featured heavy motion. [5]

Let that number land. More than a third of people with vestibular conditions — and vestibular conditions affect up to a third of adults over 40 — had difficulty using websites because of animation choices. Not because the sites were broken. Because someone decided a parallax scroll looked cool.

This isn't an edge case. This is a significant portion of the population being made physically uncomfortable — sometimes to the point of nausea or migraine — by decorative animation choices.

> **Figure 5.2 — The Scale of Motion Sensitivity**

![Figure 5.2 — The Scale of Motion Sensitivity](images/fig-5.2-the-scale-of-motion-sensitivity.png)

*The scale of motion sensitivity is larger than most teams assume. Up to 35% of adults over 40 have experienced vestibular dysfunction, and more than a third of those individuals report difficulty using motion-heavy websites. Vestibular prevalence rises with age and is two to three times more common in women. Decorative animation isn't just unnecessary for these users — it can cause physical symptoms including dizziness, nausea, and migraines.*

## Prefers Reduced Motion

The good news is that there's a solution, and it's been supported by every major browser for years.

The CSS media query `prefers-reduced-motion` checks whether the user has enabled a reduced-motion setting at the operating system level. Every modern OS has this option — iOS, Android, macOS, Windows. When it's enabled, your code can respond by reducing or removing motion. [6]

The key word is *reducing*, not removing. Reduced motion doesn't mean no motion. It means shorter durations, less distance, no parallax or zoom effects. A fade in is generally safe. A slide across the full width of the screen is not. The goal is to keep the functional benefits of motion (feedback, orientation) while eliminating the physical triggers (large movements, vestibular-disrupting effects).

WCAG 2.1 Success Criterion 2.3.3 makes this a formal standard: motion triggered by user interaction should be disableable unless it's essential to the functionality. [7]

Here's the thing that should make every developer uncomfortable: not adding `prefers-reduced-motion` support is a choice. It's a choice to prioritise a transition effect over someone's physical comfort. It's choosing to make a portion of your users feel sick because you liked how the page entrance looked. That's not a design decision. That's a failure of care.

And that's what this chapter — and this book — is really about. Motion with manners means considering the person on the other side of the screen. Not just the person with perfect vision, perfect balance, and a high-end device. The person who gets dizzy when things move too fast. The person whose migraine starts behind their left eye when a carousel auto-scrolls. The person who just wants the page to load without the room spinning.

## The Held Door

Think about the physical-world version of mannered motion. Someone walks through a door ahead of you and holds it open. They've added a small delay to their own journey — half a second, maybe less — to make yours smoother. They didn't slam it in your face. They didn't prop it open with a grand gesture and wait for applause. They just... held it. Briefly. Enough.

That's what good animation does. The iOS zoom holds the door between the home screen and the app. A progress bar holds the door between clicking "submit" and seeing the result. A toast notification that slides in gently and fades out after a few seconds holds the door between an event and the user's awareness of it.

The person who lets the door slam isn't evil. They're just not thinking about anyone behind them. The parallax scroll isn't evil. The auto-playing carousel isn't evil. They're just not thinking about the person who might get hurt.

Motion with manners means thinking about that person.

## Try This

Go into your phone's accessibility settings and turn on "Reduce Motion" (iOS) or "Remove animations" (Android). Then use your phone normally for an hour.

Notice what changes. Most apps will strip out their transitions — zooms become fades, slides become cuts. Some apps won't change at all, which tells you something about whether they checked. Pay attention to how the experience feels. Is anything lost? Is anything actually better? You might find that the reduced version is cleaner, faster, and less distracting — which raises an uncomfortable question about whether the full-motion version was serving you in the first place.

## The Soft Close

Animation in interfaces has the same job as those soft-close drawers in my kitchen. It's not there to impress anyone. It's not there to demonstrate engineering prowess. It's there to take a moment that could be abrupt and make it gentle. To take a transition that could be disorienting and make it clear. To take an interaction that could feel mechanical and make it feel human.

But the soft-close only works because it's brief, purposeful, and considerate of the person using it. A drawer that took three seconds to close would be infuriating. A drawer that closed differently every time would be confusing. A drawer that slammed shut for some people and closed gently for others, based on nothing they could control, would be cruel.

Good motion is brief. Good motion is purposeful. Good motion works for everyone — or at the very least, it doesn't hurt anyone.

That's manners. The next chapter applies the same principle to the cheapest, most powerful microinteraction a product has: the words it uses.

## References

[1] Over 30 years of research on decorative vs. functional animation and cognitive load. [Trevor Calabro — Most UI Animations Shouldn't Exist](https://trevorcalabro.substack.com/p/most-ui-animations-shouldnt-exist).

[2] iOS app-opening zoom animation as spatial orientation pattern. [IxDF — Disney's 12 Principles of Animation in UI Design](https://ixdf.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design).

[3] Apple Human Interface Guidelines on motion: ideal duration 100–500ms, building mental models through spatial behaviour. [Apple Developer — Motion](https://developer.apple.com/design/human-interface-guidelines/motion).

[4] Vestibular dysfunction prevalence: ~35% of adults aged 40+ in the US (~69 million Americans). [PMC — Vestibular Dysfunction: Prevalence, Impact and Need for Targeted Treatment](https://pmc.ncbi.nlm.nih.gov/articles/PMC4069154/).

[5] 35%+ of participants with vestibular disorders had difficulty with motion-heavy websites. [A List Apart — Designing Safer Web Animation for Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/).

[6] `prefers-reduced-motion` media query — supported by all modern browsers. Best practice: reduce, don't remove. [Smashing Magazine — Designing With Reduced Motion for Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/).

[7] WCAG 2.1 Success Criterion 2.3.3: Animation from Interactions. [W3C — Understanding SC 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html).
