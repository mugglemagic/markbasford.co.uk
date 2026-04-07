---
chapter: 6
title: "Language That Respects People"
word_count: 4620
status: draft
---

# Language That Respects People

![A close-up of a screen showing a form field with a red error highlight but no explanation — just the red outline and a blinking cursor. Frustration implied by the emptiness of the feedback.](images/chapters/06.png)

My brother-in-law is autistic, and until recently didn't handle any of his own finances. He has a bank account set up by the council where he receives money for activities — a small charity runs the programme — and I'm the one who handles the payments each month.

One month, my login stopped working. I went to reset my password. The form let me change my username fine, but the password reset kept failing. No explanation. No hint. No error message beyond the fact that it didn't work. I tried different passwords — longer ones, shorter ones, with symbols, without. Nothing. The site still has `.aspx` in the URL. It's the kind of system that was built once, a long time ago, and never meaningfully touched since.

I spent the best part of a week trying to resolve it. I rang the company repeatedly until someone finally answered, and it turned out the password had to be a specific combination of uppercase letters, lowercase letters, and numbers in a format that was never communicated anywhere — not on the form, not in the error, not in the help text. The form knew exactly what it wanted. It just refused to say so.

That's a frustrating experience for me, and I build interfaces for a living. I knew it was probably a validation issue. I knew to try different formats. I knew to ring the company. But the form didn't know any of that about me, and it wouldn't have mattered if it did — because it told me nothing either way.

I'll come back to what happened next. But first, I want to talk about why a password field that can't explain its own rules isn't just bad design — it's a specific, well-understood failure that linguists have been studying since the 1980s.

Words are the cheapest, most powerful microinteraction a product has. They cost nothing to change. They require no engineering sprint, no design system update, no performance budget. And they carry more emotional weight than almost any other element on the screen.

## Face-Threatening Acts

In 1987, linguists Penelope Brown and Stephen Levinson published a theory of politeness that explains exactly what happened with that form. It's built on a concept from sociologist Erving Goffman: *face*. [1]

Every person, in every social interaction, maintains two kinds of face. **Positive face** is the desire to be liked, approved of, and respected — the need to feel competent. **Negative face** is the desire for autonomy and freedom from imposition — the need to feel in control of your own actions.

A **face-threatening act** is anything that damages either one. Telling someone they made an error threatens their positive face — it implies they're not competent. Forcing them to redo a task threatens their negative face — it imposes on their autonomy and time.

"ERROR: INVALID INPUT IN FIELD 3" is a double face-threatening act. It tells the user they got something wrong (positive face damaged: you failed) and forces them to figure out what, where, and why (negative face damaged: now do it again, with no help).

Brown and Levinson identified four strategies for managing face-threatening acts. You can be direct and blunt (bald on-record), which is what "INVALID INPUT" does. You can use positive politeness — affirm the person while delivering the correction ("Almost there — just needs a phone number without spaces"). You can use negative politeness — minimise the imposition ("You can fix this whenever you're ready"). Or you can go off-record — be indirect enough that the person can choose whether to engage. [2]

Most error messages in most products use the blunt strategy. They state the error in technical terms, offer no comfort, and leave the user to sort it out. They're face-threatening acts with no politeness strategy applied.

> **Figure 6.1 — Error Messages as Face-Threatening Acts**

![Figure 6.1 — Error Messages as Face-Threatening Acts](images/fig-6.1-error-messages-as-face-threatening-acts.png)

*Brown and Levinson's politeness theory applied to error messages. Every error is a face-threatening act — it damages the user's sense of competence (positive face) and imposes on their time (negative face). The blunt approach ("INVALID INPUT", "Required field") doubles the threat. Positive and negative politeness strategies reduce it — affirming the user's progress while minimising the imposition of correction.*

## Processing Fluency — Why Simple Words Build Trust

There's a cognitive mechanism that makes this even more important than social politeness.

Processing fluency is the observation that the easier something is to mentally process, the more true, trustworthy, and pleasant it feels. High fluency produces higher trust, lower anxiety, and better comprehension. Low fluency — dense text, technical jargon, unfamiliar terms — produces suspicion, stress, and disengagement. [3]

This matters most when things go wrong. In an error state, the user is already frustrated. Cognitive load is already elevated. Something didn't work and they don't know why. At this exact moment — when they are least equipped to parse complex information — many products serve them their most complex copy.

"Error 422: Unprocessable Entity." "Password validation failed: minimum length constraint not met." "Your session has expired due to inactivity. Please re-authenticate to continue."

Each of these is a fluency disaster. The user needs to know what happened and what to do. Instead, they get a technical explanation that requires them to translate from developer to human at the worst possible moment.

The fix is almost embarrassingly simple:

- "Error 422: Unprocessable Entity" → "Something went wrong. Please try again."
- "Password validation failed: minimum length constraint not met" → "Your password needs at least 8 characters."
- "Your session has expired due to inactivity. Please re-authenticate to continue" → "You've been signed out. Sign back in to pick up where you left off."

Same information. Half the cognitive load. The user recovers faster, feels less frustrated, and maintains trust in the product. Processing fluency isn't about dumbing things down — it's about respecting the mental state of the person reading.

## The GOV.UK Standard

The UK Government Digital Service has done more to demonstrate the power of respectful language at scale than any private company I'm aware of.

GOV.UK writes all public-facing content to a reading age of 9. Not because they think their users are children, but because research shows that 1 in 7 adults in England have literacy levels at or below Entry Level 3 — equivalent to the reading skills expected of a nine to eleven-year-old. That's millions of people who struggle with complex sentences, technical vocabulary, and dense paragraphs. [4]

The reading-age target is often misunderstood. Writing at reading age 9 doesn't mean writing for children. It means writing without unnecessary complexity. It means choosing "use" over "utilise," "about" over "approximately," "buy" over "purchase." It means short sentences. Active voice. No jargon unless it's genuinely unavoidable, and if it is, explain it.

Research conducted for GOV.UK found that 80% of people preferred sentences written in clear English — and the more complex the issue, the greater the preference. When tested with specialist legal language, 97% of people preferred "among other things" over the Latin "inter alia." [5]

That last number is worth pausing on. Ninety-seven percent. For a legal term that many professionals consider standard. The people reading it — including highly literate people — overwhelmingly preferred the plain version. Not because they couldn't understand the Latin. Because the plain version was faster to process, and that fluency felt better.

This is processing fluency at national scale. The UK government decided that every form, every guidance page, every piece of official communication would respect the person reading it enough to be clear. Not clever. Not comprehensive. Clear.

Not every system has caught up. Remember the password form from the start of this chapter — the `.aspx` site that wouldn't tell me what it wanted?

The consequence of that silent form was that the small charity running my brother-in-law's activity programme didn't receive their payment for an entire month. A real organisation, doing real work, didn't get paid — because a password field couldn't be bothered to list its own requirements.

And here's the part that stays with me. I resolved it. I rang repeatedly, got through eventually, figured out the format, reset the password, made the payment. But imagine my brother-in-law trying to do that without help. A form that won't explain what it wants. A phone line that doesn't answer. A system that assumes its users can tolerate an indefinite amount of frustration and have the confidence to keep trying.

That's not an edge case. That's a real person, trying to access money that's meant for them, blocked by a password field that refused to say "your password needs one uppercase letter, one lowercase letter, and one number."

Fourteen words. That's all it would have taken. Fourteen words and the charity gets paid on time.

GOV.UK shows what's possible when you decide to care about language. The `.aspx` form shows what happens when you don't.

> **Figure 6.2 — The Language Spectrum**

![Figure 6.2 — The Language Spectrum](images/fig-6.2-the-language-spectrum.png)

*The language spectrum from technical to human. Most error messages sit at the left — written in the language of the system rather than the language of the person using it. Moving rightward increases processing fluency, reduces face-threat, and makes recovery faster. You don't have to be casual or funny — plain and clear is enough. The goal is recovery, not personality.*

## Vulnerable Moments

Some forms ask for your name and email address. Others ask for your income, your medical history, your immigration status, or whether you have a criminal record. The emotional weight of microcopy scales with the vulnerability of the context.

A form that asks "Why are you applying for this benefit?" with a blank text area and no guidance is placing someone in a vulnerable position and offering no support. A form that says "Tell us briefly about your situation — for example, a change in employment or health. This helps us understand what you need" is asking the same question but doing it with care.

UX researcher Jennifer Aldrich documented a striking example: during a usability test, a user encountered an error message displayed as a giant red X with "ERROR" in capital letters. The user gasped, physically recoiled, and closed the browser immediately. A different version of the same message — "Something weird just happened on our end, sorry about that. Please refresh your screen and try that again" — produced a completely different response. [6]

Same error. Same user. Different words. The first version triggered a fight-or-flight response. The second produced a shrug and a refresh.

Words do this. Ten words, maybe twenty, can be the difference between a user who recovers and continues and a user who closes the tab and never comes back. In vulnerable contexts — health, finance, legal, employment — those ten words carry even more weight, because the person reading them is already under stress.

"Required field" tells the user nothing about why the information is needed or what happens to it. "We need this to process your application — it won't be shared" tells them both. The second version takes five extra seconds to write and removes an anxiety that the first version creates.

## The Words You Don't Write

Empty states are a special case. They're the screens a user sees when there's nothing to show — no results, no messages, no activity. Most products handle them by showing nothing, or by displaying a generic placeholder: "No results found." "You have no messages." "Nothing here yet."

These are small moments of failure, and they're opportunities. An empty search result that says "No results found" is accurate but unhelpful. One that says "No results for 'accessbility' — did you mean 'accessibility'?" is doing work. It's acknowledging the gap, suggesting a next step, and doing it without blame.

An empty inbox that says "You have no messages" states a fact. One that says "All caught up — nothing new since Tuesday" reframes the emptiness as an achievement. The user didn't fail to receive messages. They succeeded in reading them all.

These aren't major engineering challenges. They're copywriting decisions. They take minutes to implement. And they turn moments of blankness into moments of care.

## Try This

Open the product you work on — or any product you use regularly — and deliberately trigger an error. Enter an invalid email. Leave a required field blank. Submit a form with a mistake. Then read the error message out loud, slowly, as if you were hearing it for the first time.

Does it tell you what went wrong? Does it tell you how to fix it? Does it blame you? Does it use words you'd use in conversation, or words that belong in a server log?

Now rewrite it. Out loud, in the way you'd explain the problem to someone sitting next to you. "That email doesn't look quite right — it needs an @ in the middle." "This field needs filling in so we can send you a confirmation." "That didn't work — try a password with at least 8 characters."

The rewrite will almost always be better. Not because you're a writer, but because speaking to a person is naturally more respectful than writing for a system.

## Saying It Right

Language in a product is the closest thing to a human voice that an interface has. It's the moment where the machine stops being a machine and becomes, briefly, a person. And like any conversation, the way things are said matters at least as much as what's said.

"Invalid input" and "Almost there — just needs a valid phone number" communicate the same fact. One makes you feel like the form is fighting you. The other makes you feel like it's helping you.

"Required field" and "We need this to match your records" impose the same requirement. One demands without explanation. The other explains without demanding.

"No results found" and "Nothing matched — try fewer filters?" report the same outcome. One is a dead end. The other is a door.

Words cost nothing to change. They require no migration, no refactor, no sprint planning. They are the single most underinvested microinteraction in most products, and they have more power to make someone feel respected — or dismissed — than any animation, layout, or colour choice.

The soft-close drawer from the last chapter takes a physical moment and makes it gentle. Language does the same thing to an emotional moment. The next chapter looks at what happens when products try to make those emotional moments feel like wins.

## References

[1] Brown, P. & Levinson, S. C. *Politeness: Some Universals in Language Usage*. Cambridge University Press, 1987. [Wikipedia — Politeness Theory](https://en.wikipedia.org/wiki/Politeness_theory).

[2] Brown & Levinson's four politeness strategies: bald on-record, positive politeness, negative politeness, and off-record. [EBSCO — Politeness Theory](https://www.ebsco.com/research-starters/social-sciences-and-humanities/politeness-theory).

[3] Processing fluency: ease of mental processing produces feelings of trust, truthfulness, and pleasantness. [UX Bulletin — Processing Fluency in UX](https://www.ux-bulletin.com/processing-fluency-in-ux/).

[4] GOV.UK reading age 9 standard; 1 in 7 adults in England at Entry Level 3 literacy or below. [GOV.UK — Writing for GOV.UK](https://www.gov.uk/guidance/content-design/writing-for-gov-uk). [Storm ID — Content Accessibility: Speak Plainly](https://stormid.com/blog/content-accessibility-part-1-speak-plainly/).

[5] 80% preferred plain English; 97% preferred "among other things" over "inter alia." [GOV.UK — Writing for GOV.UK](https://www.gov.uk/guidance/content-design/writing-for-gov-uk).

[6] Jennifer Aldrich's usability testing observation — user physically recoiled from error message with red X and "ERROR" in caps. [UX Writing Hub — Best 10 Error Message Examples](https://uxwritinghub.com/error-message-examples/).
