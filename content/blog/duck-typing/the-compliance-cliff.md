---
ref: DT-0001
title: "The Compliance Cliff"
author: "Mark Basford"
date: 2026-04-06
tags: [accessibility, wcag, eaa, ada, compliance, web-standards]
series: "Duck Typing"
part: 2
word_count: 1489
published: false
estimated_reading_time: "8 min"
---

![London's Great Smog of 1952 — pedestrians navigating through thick yellowish-grey fog that reduced visibility to near zero](/blog/london-smog.webp)

On the evening of 5 December 1952, a performance of La Traviata was cancelled at Sadler's Wells Theatre in London. Not because of illness. Not because of low ticket sales. Because the audience couldn't see the stage. A yellowish-grey smog had seeped into the auditorium, thickening until the performers were invisible from the stalls.

Outside, it was worse. Visibility dropped below one metre. Bus conductors walked ahead of their vehicles carrying flares. At the Smithfield Show, eleven prize heifers choked to death — breeders improvised gas masks from grain sacks soaked in whiskey. By the third day, undertakers had run out of coffins.

The Great Smog lasted five days. It killed around 12,000 people, though the government initially claimed 4,000, quietly reclassifying the rest as influenza deaths. The cause was no mystery: a cold snap had driven Londoners to burn more coal than usual, and a temperature inversion trapped the smoke at ground level. But here's the detail that sticks with me — Britain was exporting its clean anthracite coal abroad for revenue. Citizens were left burning cheap, dirty "nutty slack" because the good stuff was worth more as an export.

The government knew the air was bad. Everyone knew the air was bad. Harold Macmillan, then Minister of Housing, argued that remedies were unnecessary. It took three years, a public inquiry, and a backbench MP called Gerald Nabarro forcing the issue before the Clean Air Act received Royal Assent on 5 July 1956.

The Act didn't ban coal. It didn't shut down industry. It created smoke control areas and required cleaner fuels. It changed *how* you burned, not *whether* you burned. Black smoke emissions fell 75% within two decades.

---

## The smog on the web

Ninety-five percent of the top million websites have detectable accessibility failures. Not subtle, edge-case stuff — the basics. Low contrast text. Missing alt attributes on images. Form inputs without labels. Empty links and buttons. No language attribute on the HTML element.

The WebAIM Million report has been running these numbers since 2019, and the same six errors account for 96% of all detected failures. Year after year. The average homepage has 51 distinct accessibility errors. The smog has been visible for a long time.

And like London's air in the early 1950s, most people in the industry have known about it. WCAG 1.0 was published in 1999. Screen readers have existed for decades. The arguments for accessible interfaces are not new, not controversial, and not technically difficult to understand. The problem was never awareness. The problem was that nobody made you do it.

---

## What actually changed

Two pieces of legislation are converging right now, and they're about to make the web's accessibility smog impossible to ignore.

The European Accessibility Act came into force on 28 June 2025. It's not a suggestion. France's consumer protection agency issued formal legal notices to Auchan, Carrefour, E. Leclerc, and Picard in July 2025, citing websites and apps that were unusable with screen readers and checkout processes that excluded visually impaired users. When the retailers didn't fix things fast enough, emergency injunctions followed in November. The Netherlands can levy fines up to €900,000 or 10% of annual revenue. Germany, Italy, and Spain have their own enforcement mechanisms in motion.

In the US, the ADA Title II rule sets a compliance deadline of 24 April 2026 — less than a month from now — for public entities with populations over 50,000. Every state government website, every large city portal, every major school district and public university must meet WCAG 2.1 Level AA. The second tier, covering smaller entities and special districts, follows in April 2027. This is the first time the Department of Justice has formally adopted a specific WCAG version by reference into regulation.

Meanwhile, federal accessibility lawsuits hit 3,117 in 2025, a 27% increase from the year before. Illinois alone saw a 746% year-over-year jump in filings as plaintiff firms shifted jurisdictions. Forty percent of cases are now filed pro se — individuals using AI tools to identify violations and draft complaints without a solicitor.

The air quality inspectors have arrived.

---

## The overlay problem

Here's where the coal export parallel gets uncomfortable.

For years, a cottage industry of accessibility overlay widgets promised to fix websites automatically. Drop a JavaScript widget on your site, they said, and it'll handle compliance. Companies bought in because it was cheap, fast, and required zero changes to the underlying code.

In January 2025, the FTC charged accessiBe — the largest overlay provider — with making false claims that its AI product could make any website WCAG-compliant. The fine was $1 million. The consent order bars them from making those claims unless they can prove them with evidence.

Courts have been consistent: 456 lawsuits in the first half of 2025 alone targeted websites using overlay widgets. Twenty-five percent of all 2024 lawsuits explicitly cited the overlays themselves as barriers. Automated tools detect somewhere between 30% and 40% of WCAG violations. An overlay that only addresses what automation can find is, by definition, leaving the majority of issues untouched.

Selling overlays as a compliance solution while the underlying code stays broken is exporting the clean coal. It looks like you're doing something. The air stays dirty.

---

## The six things

Here's what I find genuinely frustrating about the accessibility compliance conversation: it's treated as though it's complicated. It isn't. The same WebAIM data that shows 95% of sites failing also shows that an absurdly high proportion of those failures come down to six things:

**Contrast.** Text needs to be readable. 4.5:1 ratio for normal text, 3:1 for large. Your design tool can check this. Your browser DevTools can check this. There's no reason to ship low-contrast text in 2026.

**Alt text.** Images that convey information need a text alternative. Decorative images need an empty `alt=""`. This has been a best practice since the 1990s.

**Form labels.** Every input needs a programmatically associated label. A `<label>` element with a `for` attribute, or `aria-labelledby`. Placeholder text is not a label.

**Links and buttons.** They need discernible text. An icon button without an accessible name is invisible to a screen reader. An empty link is a dead end.

**Document language.** Set `lang="en"` on your `<html>` element. One attribute. One line.

**Semantic HTML.** Use headings in order. Use landmarks. Use native HTML elements before reaching for ARIA — and this matters more than people think. The WebAIM data shows that pages using ARIA have more than twice as many errors as pages without it. The first rule of ARIA is don't use ARIA when native HTML will do the job.

None of this requires specialist knowledge. None of it requires expensive tooling. None of it slows down development in any meaningful way once it's part of how you work. The Clean Air Act didn't ask people to stop heating their homes. It asked them to burn cleaner fuel.

---

## The thing about clean air

The Clean Air Act was resisted for three years. Macmillan called it unnecessary. Industry lobbied against it. People argued about personal freedom and economic impact and whether the government should be telling people what to burn in their own fireplaces.

Nobody makes those arguments now. Clean air is just how things are. The legislation didn't change attitudes first and then change behaviour. It changed behaviour first, and attitudes followed. People didn't stop burning dirty coal because they had an epiphany about public health. They stopped because the rules changed, and then — gradually, undramatically — the air got better, and everyone agreed the air being better was good, actually.

I think accessibility is at that inflection point. The EAA, the ADA Title II rule, the lawsuits — they're the Smoke Control Areas. They're not asking developers to care about accessibility for moral reasons, though I'd argue those reasons are sufficient on their own. They're asking developers to meet a standard. A specific, testable, well-documented standard that's been publicly available for over a decade.

The technical bar is not high. The six errors that cause 96% of failures are all fixable by anyone who can write HTML. The tools to test for them are free and built into your browser. The specification that defines them has existed since 2018.

What's new is the consequence of ignoring them.

London's air didn't clear because people woke up one morning and decided to breathe better. It cleared because the rules changed and the rules were enforced. The web's accessibility problem will follow the same path — not because developers suddenly discover empathy, but because the legal and financial cost of inaccessibility has finally become higher than the cost of doing it properly.

Give it a decade. Nobody will argue against accessible websites, the same way nobody argues against clean air. The only question is whether you'd rather be the person who got ahead of it, or the one still burning nutty slack when the inspector knocks.
