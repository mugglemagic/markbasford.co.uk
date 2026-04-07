# Chapter 06 Research — Language That Respects People

## Brown & Levinson's Politeness Theory

### Core Framework
- Penelope Brown and Stephen Levinson (1987) proposed a universal theory of linguistic politeness built on Erving Goffman's concept of "face."
- **Positive face**: the desire to be liked, approved of, and appreciated. ("I want you to want what I want.")
- **Negative face**: the desire for autonomy and freedom from imposition. ("Don't tell me what to do.")
- A **face-threatening act (FTA)** damages either positive or negative face. Telling someone they made an error threatens positive face. Forcing them to re-enter a form threatens negative face.

### Politeness Strategies
- Four strategies for managing FTAs: bald on-record (direct), positive politeness (affirm the person), negative politeness (minimise the imposition), and off-record (indirect/hinting).
- 15 positive politeness strategies (e.g., show interest, seek agreement, include the hearer) and 10 negative politeness strategies (e.g., be indirect, apologise, minimise imposition).

### Application to Microcopy
- Error messages are face-threatening acts. "Invalid input" threatens positive face (you got it wrong) and negative face (now you have to redo it).
- Positive politeness in microcopy: "Almost there — just needs a valid email address" (affirms progress, minimises threat).
- Negative politeness in microcopy: "You can change this later if you'd prefer" (preserves autonomy).

Sources:
- [Wikipedia — Politeness Theory](https://en.wikipedia.org/wiki/Politeness_theory)
- [EBSCO — Politeness Theory](https://www.ebsco.com/research-starters/social-sciences-and-humanities/politeness-theory)
- [Brown & Levinson (1987) — Google Books](https://books.google.com/books/about/Politeness.html?id=OG7W8yA2XjcC)
- [EU Open Science — Revisiting Brown and Levinson's Theory (2024)](https://eu-opensci.org/index.php/ejlang/article/view/4137)

---

## Cognitive Fluency and Plain Language

### Processing Fluency
- Processing fluency: the easier something is to mentally process, the more true, trustworthy, and pleasant it feels.
- High fluency → higher trust, lower anxiety, better comprehension.
- Error states are critical fluency moments: if the user is already stressed (something went wrong), cognitive load is already elevated. Dense or technical copy at this moment compounds the problem.

### Plain Language Principles
- Error messages should: identify the problem precisely, use plain language, and offer an actionable solution.
- Reduces cognitive load and fosters trust.
- The goal is recovery, not explanation. "Your password needs at least 8 characters" beats "Error 422: Password validation failed — minimum length constraint not met."

Sources:
- [UX Bulletin — Processing Fluency in UX](https://www.ux-bulletin.com/processing-fluency-in-ux/)
- [CXL — Error Messages: Examples, Best Practices](https://cxl.com/blog/error-messages/)
- [UX Content Collective — How to Write Error Messages](https://uxcontent.com/how-to-write-error-messages/)

---

## Shame, Blame, and Vulnerable Moments

### Error Messages and Emotional Impact
- UX researcher Jennifer Aldrich observed: a poorly designed error message (giant red X, "ERROR" in caps) caused a user to gasp and physically recoil, closing the browser immediately.
- A friendlier message ("Something weird just happened on our end, sorry about that. Please refresh your screen and try that again") produced a completely different response.
- Negative words make users feel their mistake is worse than it is. Shifting from accusation to assistance changes the emotional trajectory.

### Forms and Vulnerable Contexts
- Forms that ask for personal, financial, or health information place users in vulnerable states. Microcopy here carries outsized emotional weight.
- "We need this to..." (explains why) vs. "Required field" (demands without context).
- Empty states ("You haven't added anything yet — here's how to get started") vs. blank screens that suggest failure.

Sources:
- [UX Writing Hub — Best 10 Error Message Examples](https://uxwritinghub.com/error-message-examples/)
- [Yellowball — Microcopy Tips: Words That Build Confidence](https://weareyellowball.com/guides/micro-copy-ux-words/)
- [Justinmind — Microcopy Examples and Best Practices](https://www.justinmind.com/ux-design/microcopy)

---

## Story Candidates
1. The GP's waiting room — the difference between "Take a seat, we'll call you when we're ready" and "Have a seat, Dr. Shah is running about ten minutes behind, but she'll be with you soon." Same wait, different emotional register.
2. Government forms vs. GOV.UK forms — the plain language revolution in UK government digital services as a case study in respectful language at scale.
3. The ATM that says "Insufficient funds" vs. the one that says "Your balance is £12.40 — would you like to withdraw a smaller amount?"
