---
chapter: 11
title: "The Invisible User"
word_count: 4580
status: draft
---

# The Invisible User

![An empty chair at a desk with a computer screen glowing in the background, slightly out of focus. Someone who should be here but is not. Quiet, still, the absent user.](images/chapters/11.png)

In December 2014, Eric Meyer — a web standards advocate, CSS expert, and one of the people who helped shape the early web — opened Facebook and was shown his Year in Review. A generated card appeared with his daughter Rebecca's photo in the centre, surrounded by dancing cartoon people and confetti. The caption read: "It's been a great year! See your year in review."

Rebecca had died of aggressive brain cancer that June. She was six years old. She died on her sixth birthday, less than ten months after diagnosis. [1]

Meyer wrote a blog post about it. He called it "Inadvertent Algorithmic Cruelty." The phrase has stayed with me since I first read it, because it captures something precise. The cruelty wasn't intentional. Nobody at Facebook decided to torment a grieving father. The algorithm did what it was designed to do: find the most-engaged-with photo of the year and present it in a celebratory frame. For the overwhelming majority of users, this worked exactly as intended — "reminding people of the awesomeness of their years, showing them selfies at a party or whale spouts from sailing boats," as Meyer put it. [2]

For those who had experienced death, divorce, illness, job loss, or any other crisis that year, the algorithm was devastating. Not because it was broken. Because it was working perfectly, and nobody had asked: what if this year wasn't great?

Facebook had an Empathy Team. They still shipped it.

## Edge Cases and Stress Cases

The traditional term in software development for the scenario Eric Meyer experienced is "edge case" — an unusual situation at the extreme end of expected use. Edge cases are, by definition, rare. They affect a small number of users. And the implication of the label is that they can be safely deprioritised, handled later, or accepted as known limitations.

Sara Wachter-Boettcher and Eric Meyer — the same Eric Meyer — published a book in 2016 called *Design for Real Life* that proposed a different frame. They argued that these situations should be called **stress cases**, not edge cases. [3]

The difference in language is the difference in attitude. An edge case says: *this scenario is unlikely and marginal.* A stress case says: *this scenario tests the strength of our design.* The first invites deprioritisation. The second demands resilience.

Their philosophy: "Start with the most vulnerable, distracted, and stressed-out users and work outward, because when we make things for people at their worst, they'll work that much better when people are at their best." [4]

This is the opposite of how most products are designed. Most products start with the happy path — the user who is calm, competent, connected, and having a normal day — and then handle exceptions as afterthoughts. The stress case approach starts with the person who is grieving, anxious, confused, or in crisis, and designs for them first. If the product works for the person having the worst day of their life, it will work beautifully for everyone else.

> **Figure 11.1 — Edge Case vs. Stress Case Thinking**

![Figure 11.1 — Edge Case vs. Stress Case Thinking](images/fig-11.1-edge-case-vs-stress-case-thinking.png)

*Two approaches to unusual scenarios. Edge case thinking starts with the happy path and treats difficult situations as marginal — unlikely, deprioritised, accepted. Stress case thinking starts with the most difficult scenario and uses it to test the design's strength — if the product holds up under stress, it works for everyone. The difference isn't technical. It's a question of who you choose to think about first.*

## The Pregnancy App

Some of the most distressing examples of happy-path design failures come from pregnancy-tracking apps.

About 20% of known pregnancies end in miscarriage. That's not an edge case — it's one in five. And yet, many pregnancy apps have historically had no way to record a loss. The app continues sending cheerful weekly updates about the baby's development. "Your baby is now the size of a lime!" "Week 14 — your baby can squint and frown!" The notifications arrive, week after week, for a pregnancy that no longer exists. [5]

Some apps did eventually add an option to report a loss. But the implementation sometimes made it worse. One app required users to sign up for a "personalised baby development newsletter" before they could access the option to report that the baby had died. Another, when a loss was reported, simply erased the pregnancy from the user's profile entirely — as if it had never happened — which was devastating for users who wanted to keep a record of those weeks. [6]

These aren't obscure apps with tiny teams. These are products used by millions of people, built by companies with substantial design and engineering resources. The failure isn't technical — there's nothing technically difficult about adding a "record a loss" option. The failure is imaginative. Nobody on the team asked: what's the worst thing that could be happening in someone's life when they open this app?

Or, worse: someone did ask, and the answer was deprioritised as an edge case.

## The Form That Excludes

My brother-in-law's story from Chapter 6 — the password field that refused to explain its own rules — is one version of the invisible user. Here's another that I think about often.

Government benefit applications that require a home address. You can't complete the form without one. The field is mandatory. The validation won't let you proceed with an empty address field.

An estimated 382,000 people in England alone are experiencing homelessness. Not the whole of the UK — just England. That's roughly 0.65% of the population. [7] It's not the majority of benefit applicants, but it's not a small number either. It's hundreds of thousands of real people. And among them are some of the people who most need the benefits the form is gatekeeping. The system built to help them has a mandatory field that excludes them.

This isn't a technology problem. The database can store a null address. The form can accept an alternative input — a shelter address, a support worker's contact, a PO box. The fix is trivial. But the fix requires someone on the team to have thought: who is the most vulnerable person likely to use this form, and does it work for them?

## The Science of Invisibility

Every chapter in this book has drawn on psychological research that applies to all users. This chapter draws on the same research but applies it to users under maximum stress — and in doing so, reveals how much harder the same principles hit when the person is already in pain.

**Loss aversion** from Chapter 10: when someone has already experienced a real-world loss — a death, a diagnosis, a relationship ending — a product that compounds it with a digital loss (insensitive messaging, deleted records, celebratory assumptions) isn't just a bad experience. It's a wound on top of a wound. The 2x pain multiplier from Kahneman's research applies to someone who is already in pain.

**Processing fluency** from Chapter 6: under stress, cognitive load is already maxed. Dense copy, ambiguous options, and multi-step flows that are merely annoying to a calm user become impassable barriers to a stressed one. The `.aspx` password form was frustrating for me. For my brother-in-law, it would have been a wall.

**Psychological safety** from Chapter 10: Edmondson's finding was that the best teams report more errors because they feel safe doing so. The invisible user doesn't report bugs. They don't file support tickets. They don't leave reviews. They silently leave — or worse, they silently endure. The product never learns what went wrong, because the people who experienced the worst of it don't have the energy or the confidence to tell anyone.

> **Figure 11.2 — The Silence of the Invisible User**

![Figure 11.2 — The Silence of the Invisible User](images/fig-11.2-the-silence-of-the-invisible-user.png)

*The invisible user cycle. Products designed for the happy path create failures that disproportionately affect the most vulnerable users — who are the least likely to report them. The product never learns, because the feedback loop is broken at the point of most pain. The only way to break this cycle is to design for the stress case before shipping, not to wait for the bug report that will never come.*

## The Question to Ask

Meyer and Wachter-Boettcher's framework is practical. It starts with a single question that can be applied to any feature, any screen, any piece of copy:

**What's the worst thing that could be happening in someone's life when they encounter this?**

A "Year in Review" feature: the worst thing is that the year involved a death. A pregnancy app: the worst thing is that the pregnancy ended. A congratulatory notification: the worst thing is that the achievement was involuntary or associated with suffering. A benefits form: the worst thing is that the applicant has nowhere to live.

Asking this question doesn't mean designing for despair. It means designing with awareness. It means building the opt-out before the feature. It means testing the screen with a stressed persona, not just a happy one. It means checking whether the form works for the person who needs it most, not just the person the team imagined.

Libby Bawcombe at NPR compiled a list of 50 stress cases for news product design. They included: "A user who is reading about a mass shooting that happened in their community." "A user who sees a photo of their abuser in a news story." "A user who is news-literate but seeing coverage of their own trauma." [8]

Fifty scenarios. None of them are edge cases. All of them are things that happen to real people, regularly, while they're using a product that hasn't thought about them.

## Allow Silence

Not every return needs a cheerful greeting. Chapter 3 argued for recognition — acknowledging that a user has come back, remembering their context, showing them what changed. That's right for most situations. But there are moments where the kindest thing a product can do is say nothing and let the user lead.

A pregnancy app that has been told about a loss should not greet the user with "Welcome back! Here's what's new with your baby." It should greet them with silence — or with a gentle, neutral acknowledgement that doesn't assume they're in a celebratory mood.

A fitness app opened for the first time in two months should not lead with "Where have you been?!" It has no idea where they've been. They might have been ill. They might have been caring for someone. They might have been grieving. The absence might be the most loaded part of their story, and the product should approach it gently, not with manufactured enthusiasm.

This is the hardest version of the recognition principle from Chapter 3. Recognition means knowing when to speak and when to be quiet. The pub staff who know when to chat and when to just pour the drink without saying much — that's the same skill, applied to the same moment.

## Try This

Pick a feature you've built or are building. Now write down three stress cases for it — three scenarios where the user is under genuine pressure, distress, or constraint when they encounter it.

Don't reach for the dramatic. The stress case doesn't have to be a bereavement or a crisis. It could be: a user who is filling in this form on a bus, with one hand, on a cracked screen. A user who doesn't speak the language the interface is written in fluently. A user who has been staring at screens for eleven hours and can barely focus.

Now look at the feature through those eyes. Does it still work? Is the text still readable? Is the flow still completable? Is the tone still appropriate?

If the answer is no, you've found something that matters. Not an edge case — a stress case. And fixing it will make the feature better for everyone.

## The Neighbour

There's a version of kindness that doesn't ask "how are you?" — because sometimes that question is a burden. The honest answer is too heavy for the conversation, and the dishonest answer costs energy the person doesn't have.

The neighbour who comes round and says "I brought you this" — a meal, a bag of shopping, a plant for the garden — is practising a different kind of care. They're not asking the person to perform being okay. They're offering something useful without requiring a response. The gesture is the communication. No cheerful greeting. No expectation of reciprocity. Just: here. This is for you.

Products can do this. A pregnancy app that, after a reported loss, quietly removes the weekly update notifications without fanfare and replaces them with a single link to support resources — that's "I brought you this." A benefits form that offers an alternative to a home address — a shelter, a support worker's address, a PO box — without requiring the applicant to explain why they don't have one. That's "I brought you this."

Eric Meyer's daughter Rebecca would have turned twelve in 2020. The algorithm that showed her photo surrounded by confetti didn't know that. It couldn't know that. But someone could have asked — before the feature shipped, before the code was written, before the celebratory frame was designed — what if this year wasn't great?

That question. Before the code. Before the design. Before the celebration.

That's where the invisible user becomes visible.

## References

[1] Eric Meyer — "Inadvertent Algorithmic Cruelty." Blog post, 24 December 2014. [meyerweb.com](https://meyerweb.com/eric/thoughts/2014/12/24/inadvertent-algorithmic-cruelty/).

[2] Meyer's description of the Year in Review: "reminding people of the awesomeness of their years." Facebook product manager Jonathan Gheller apologised. [Slate — Facebook Year in Review: My Tragic Year](https://slate.com/technology/2014/12/facebook-year-in-review-my-tragic-year-was-the-wrong-fodder-for-facebook-s-latest-app.html).

[3] Wachter-Boettcher, S. & Meyer, E. *Design for Real Life*. A Book Apart, 2016. [A List Apart — Design for Real Life Interview](https://alistapart.com/article/design-for-real-life-interview-with-sara-wachter-boettcher/).

[4] "Start with the most vulnerable, distracted, and stressed-out users and work outward." [A List Apart — Design for Real Life Excerpt](https://alistapart.com/article/design-for-real-life-excerpt/).

[5] Approximately 20% of known pregnancies end in miscarriage. Pregnancy apps continuing to send development updates after a loss. [Clare Rose Foster — Why Do Pregnancy Apps Regularly Fail to Offer Support for Baby Loss?](https://www.clarerosefoster.co.uk/2022/09/apps-for-pregnancy-after-loss/).

[6] One app required newsletter sign-up to report a loss; another erased the pregnancy entirely from the user's profile. [Clare Rose Foster](https://www.clarerosefoster.co.uk/2022/09/apps-for-pregnancy-after-loss/). [MobiHealthNews — Glow's Pregnancy App Now Helps Women Who Have Had Miscarriages](https://www.mobihealthnews.com/40557/glows-pregnancy-app-now-helps-women-who-have-had-miscarriages).

[7] Estimated 382,000 people experiencing homelessness in England. Homelessness statistics vary by source and methodology; this figure represents people in temporary accommodation, rough sleeping, and other forms of homelessness.

[8] Bawcombe, L. "Designing News Products With Empathy: 50 Stress Cases to Consider." NPR Design, 2018. [NPR Design](https://npr.design/designing-news-products-with-empathy-50-stress-cases-to-consider-61f068a939eb).
