---
chapter: 8
title: "The Other Side of Craft"
word_count: 4700
status: draft
---

# The Other Side of Craft

![A screen showing a cancel button in small grey text next to a large, bright Keep My Subscription button. The visual hierarchy is clearly manipulative, lit only by the screen glow.](images/chapters/08.png)

I tried to cancel a subscription last year. I won't name the company, but the experience was instructive. Signing up had taken about thirty seconds — name, email, card number, done. Cancelling required me to navigate through four separate screens, each offering a different reason to stay, a different discount, a different "are you sure?" before finally presenting a button labelled "Complete Cancellation" in grey text on a white background, next to a much larger, much brighter button labelled "Keep My Subscription."

The craft was impeccable. The screens were well-designed. The copy was polished. The visual hierarchy was deliberate — every pixel was placed to make cancellation harder and continuation easier. This wasn't a neglected corner of the product. Someone had spent real time on it. Someone had thought carefully about the flow, the friction, the placement of every element.

And every bit of that craft was pointed against me.

This chapter is about the shadow side of everything this book has discussed so far. Every technique — microinteraction design, visual hierarchy, processing fluency, recognition, feedback, motivation — has a dark version. The same skills that make a product feel warm can make it manipulative. The same attention to detail that creates a moment of care can create a moment of coercion.

The difference isn't the technique. It's who it serves.

## The Iliad Flow

In September 2025, the FTC secured a $2.5 billion settlement against Amazon — the largest in the agency's history at the time — over its Prime subscription enrolment and cancellation practices. [1]

The complaint alleged that Amazon had enrolled millions of consumers in Prime without their clear consent, and then made it deliberately difficult to cancel. The cancellation process required a four-page, six-click, fifteen-option sequence that included repeated offers to downgrade, discount prompts, and reminders of benefits about to be lost. Each page was designed to delay, confuse, or discourage the user from completing the cancellation.

Internally, Amazon called this the "Iliad Flow" — named after Homer's epic. [2]

Let that name sink in. The team that built the cancellation process named it after one of the longest, most arduous journeys in Western literature. They knew what they were building. They knew it was a slog. They named it accordingly — and shipped it anyway.

An estimated 35 million consumers were affected. The settlement required Amazon to pay $1 billion in civil penalties and $1.5 billion in consumer refunds, and to redesign the process so that cancellation is as simple as enrolment.

The Iliad Flow wasn't bad design. It was excellent design, applied in the wrong direction. Every principle of microinteraction craft — visual hierarchy, progressive disclosure, feedback loops, clear calls to action — was present. They were just aimed at the company's interests instead of the user's.

## Ninety-Seven Percent

In 2022, the European Commission conducted a study of the most popular websites and apps used by EU consumers. They found that 97% deployed at least one deceptive pattern. [3]

Ninety-seven percent. Not a handful of bad actors. Nearly all of them.

A separate FTC study in 2024 examined 642 websites and apps and found that 76% employed at least one possible deceptive pattern. [4]

These numbers suggest that dark patterns aren't aberrations — they're the default. The industry has normalised a set of practices that, when you examine them individually, are clearly manipulative. But because they're everywhere, they feel normal. That's the most insidious thing about them: prevalence creates a false sense of acceptability.

> **Figure 8.1 — The Dark Mirror**

![Figure 8.1 — The Dark Mirror](images/fig-8.1-the-dark-mirror.png)

*Every technique in this book has a shadow version. Welcome-back messages become guilt trips. Respectful microcopy becomes confirmshaming. Progress celebration becomes manufactured urgency. Reduced friction becomes a roach motel. Clear feedback becomes misdirection. The craft is identical. The intent is opposite.*

## Confirmshaming

Chapter 6 was about language that respects people. Confirmshaming is its exact inverse.

Harry Brignull, the UX designer who coined the term "dark patterns" in 2010, defines confirmshaming as "the act of guilting the user into opting into something" where "the option to decline is worded in such a way as to shame the user into compliance." [5]

The examples read like satire, but they're all real. A popup offering a discount where the decline button reads "No thanks, I hate saving money." A coffee retailer whose sale dismissal link read "No, I'm OK with missing out on awesome deals." MyMedic, a company that sells first-aid kits, whose push notification opt-out genuinely read "No, I prefer to bleed to death." [6]

That last one sounds made up. It isn't. A first-aid company decided that the best way to get people to accept push notifications was to make the alternative sound like choosing to die. Someone wrote that copy. Someone approved it. Someone shipped it.

These are face-threatening acts — the same concept from Chapter 6's Brown and Levinson framework — deployed deliberately. The decline option threatens positive face: by clicking it, you're forced to identify with a statement that makes you sound foolish, reckless, or cheap. The goal is to make saying "no" feel worse than saying "yes," regardless of what the user actually wants.

It's the linguistic equivalent of the Iliad Flow. Make the exit uncomfortable enough and people won't use it.

The coffee retailer's net promoter score dropped more than 20% after implementing confirmshaming. [7] The short-term click-through went up. The long-term trust went down. The pattern worked as a mechanism and failed as a relationship.

## The Attention Economy

In 2013, a Google employee named Tristan Harris wrote an internal presentation titled "A Call to Minimize Distraction & Respect Users' Attention." It went viral inside the company. Two years later he left, and in 2018 he co-founded the Center for Humane Technology with Aza Raskin and Randima Fernando. [8]

Harris's argument is simple and uncomfortable: the business model of most technology companies is attention extraction. The product's success is measured by time spent, sessions per day, notifications opened. Every additional second of engagement is revenue. And the most effective way to extract seconds is to exploit the same psychological mechanisms that, in a different context, would be called good design.

Variable ratio reinforcement — the mechanism from Chapter 7 that makes slot machines addictive — is the mechanism behind infinite scroll. You don't know what's next, so you keep scrolling. The next post might be interesting. The next refresh might have something new. The unpredictability is the hook.

Intermittent social validation — likes, reactions, comments that arrive at unpredictable intervals — exploits the relatedness need from Self-Determination Theory. You check because someone might have responded. The "might" is the operative word. If you knew for certain there was nothing there, you wouldn't check. The uncertainty keeps you coming back.

These aren't failures of design. They're successes of design aimed at the wrong target. The craft is real. The intention is extraction.

## The Same Lab

Here's the detail that ties this chapter together and makes it uncomfortable in a way that can't be resolved with better intentions.

BJ Fogg founded the Stanford Persuasive Technology Lab. His Behavior Model — Motivation + Ability + Prompt — is the foundation of modern behaviour design. It's morally neutral. It describes how behaviour happens, not whether the behaviour is good. [9]

Tristan Harris studied at that lab. So did many of the designers who went on to build the engagement loops at Facebook, Instagram, and Google. The same research that Chapter 12 will use to discuss building healthy habits is the research that built infinite scroll and notification anxiety.

The model doesn't change depending on who uses it. Make the desired behaviour easy (high ability), increase motivation (social proof, fear of missing out, variable rewards), and trigger it at the right moment (push notification at 10pm). Whether this produces a meditation habit or a doom-scrolling addiction depends entirely on what the designer chooses to optimise for.

This means the techniques in this book are not inherently good. Microinteraction craft, visual hierarchy, processing fluency, recognition, feedback, motivation systems — all of them can be pointed in either direction. The knowledge that makes a product feel warm is the same knowledge that makes a dark pattern effective. The difference is a decision, not a skill.

## The Test (Revisited)

Chapter 7 proposed a test: if you removed the gamification, would the user still want to use the product? This chapter broadens it.

**Does this interaction serve the user, or the business at the user's expense?**

If the user had full information and zero pressure — if they could see exactly what was happening and choose freely — would they make the same decision? If yes, the design is honest. If no, the design is deceptive. The degree of deception varies, but the principle doesn't.

A progress bar that shows genuine progress: honest. A countdown timer that resets when you revisit the page: deceptive. A "Welcome back" message that shows what changed: honest. A "We miss you" notification designed to trigger guilt: deceptive. A cancel button that works in one click: honest. A four-page, six-click, fifteen-option Iliad Flow: deceptive.

The EU's Digital Services Act, Article 25, now makes this distinction legally binding. It explicitly prohibits designing interfaces that "deceive, manipulate, or materially impair users' ability to make free, informed decisions." [10] The FTC's $2.5 billion Amazon settlement signals the same direction in the US. What was once "aggressive UX" is becoming illegal.

The regulatory trend is clear: the only sustainable craft is honest craft. The techniques in this book aren't just ethically better than dark patterns — they're becoming the only legal option.

## Try This

Go to cancel something. Pick a subscription you don't use much — a streaming service, a newsletter, a free trial. Don't actually cancel it if you want to keep it. Just start the process and count the steps.

How many pages do you navigate? How many times are you asked to reconsider? Is the cancel button the same size and prominence as the "keep" button? Is there a countdown, a discount offer, a warning about what you'll lose? And does the flow match the design system used everywhere else on the site — the same button styles, the same layout patterns, the same visual language — or has it been quietly redesigned to work against you?

Now compare that to how many steps it took to sign up. The ratio tells you everything about whose interests the design is serving.

## The Choice

Every technique in this book is a tool. A soft-close drawer mechanism can ease a closing. It can also be used to make an exit so smooth you don't realise you've been led through it. A welcoming message can make someone feel recognised. It can also guilt them into returning. A progress bar can celebrate achievement. It can also manufacture urgency.

The craft doesn't change. The choice does.

This book is an argument for using these tools generously — to make products that feel warm, that respect people's time and attention, that treat small moments as opportunities for care rather than extraction. But it would be dishonest to pretend the same tools can't do the opposite. They can. Ninety-seven percent of popular websites prove it.

The next chapter moves from how products communicate to how they wait — and what happens in the anxious silence between an action and its result.

## References

[1] FTC secures $2.5 billion settlement against Amazon over Prime subscription practices, September 2025. [FTC Press Release](https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon).

[2] Amazon's "Iliad Flow" — four pages, six clicks, fifteen options to cancel Prime. [FairPatterns.ai — Amazon's $2.5B Dark Patterns Settlement](https://www.fairpatterns.ai/post/amazons-2-5b-dark-patterns-settlement-what-all-e-retailers-must-change-now). [Time — Amazon Reaches $2.5 Billion Settlement](https://time.com/7320708/amazon-prime-ftc-lawsuit-settlement-membership-subscription-cancel-dark-patterns/).

[3] EU Commission study (2022): 97% of most popular websites and apps deployed at least one deceptive pattern. [FairPatterns.ai — Dark Patterns Targeted by EU (2024)](https://www.fairpatterns.ai/post/dark-patterns-targeted-by-eu-institutions-a-new-era-of-digital-fairness).

[4] FTC study (July 2024): 76% of 642 websites and apps examined employed at least one deceptive pattern. [Built In — Regulating Dark Patterns](https://builtin.com/articles/dark-patterns-regulation).

[5] Harry Brignull coined "dark patterns" on 28 July 2010. Confirmshaming definition. [Deceptive.design — Confirmshaming](https://www.deceptive.design/types/confirmshaming).

[6] MyMedic push notification confirmshaming: "No, I prefer to bleed to death." [Built In — Confirmshaming](https://builtin.com/design-ux/confirmshaming).

[7] Majesty Coffee's NPS dropped more than 20% after implementing confirmshaming. [Built In — Confirmshaming](https://builtin.com/design-ux/confirmshaming).

[8] Tristan Harris — Google Design Ethicist, 2013 internal presentation, co-founded Center for Humane Technology in 2018. [Wikipedia — Tristan Harris](https://en.wikipedia.org/wiki/Tristan_Harris). [Center for Humane Technology](https://www.humanetech.com/).

[9] BJ Fogg's Behavior Model (Motivation + Ability + Prompt) and the Stanford Persuasive Technology Lab. [Fogg Behavior Model](https://www.behaviormodel.org/).

[10] EU Digital Services Act, Article 25 — prohibits designing interfaces that deceive, manipulate, or materially impair users' ability to make free, informed decisions. [IAPP — How US, EU Approach Regulating Dark Patterns](https://iapp.org/news/a/ongoing-dark-pattern-regulation).
