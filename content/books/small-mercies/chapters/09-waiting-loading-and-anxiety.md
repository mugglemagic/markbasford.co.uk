---
chapter: 9
title: "Waiting, Loading, and Anxiety"
word_count: 4480
status: draft
---

# Waiting, Loading, and Anxiety

![An airport departures board with one row showing no status — blank where the other rows say On Time or Boarding. The anxiety of no information, warm terminal lighting.](images/chapters/09.png)

We booked flights to Mauritius last month — a friend's 50th birthday trip. They were not cheap. A significant amount of money for us, the kind of purchase where you check the total twice and take a breath before clicking. I'd found the fare, entered the details, double-checked the dates, and hit "Pay Now" — and then nothing. The screen went blank for about four seconds. No spinner. No progress bar. No message. Just a white screen and the growing certainty that something had gone wrong.

It hadn't. The payment went through fine. The confirmation loaded a few seconds later. But in those four seconds of silence, I'd already started composing the email to the airline, wondered whether my card had been charged twice, and considered whether I should refresh the page or whether refreshing would trigger a duplicate booking. On a purchase that size, four seconds of silence felt like an eternity.

Four seconds. That's all it took to go from "we're going to Mauritius" to "something is wrong and I might have just lost a lot of money." Not because anything was wrong. Because nobody told me anything was happening.

Waiting is an emotional event. The length of the wait matters far less than what happens during it.

## The Psychology of the Queue

There's a body of research on perceived wait time that dates back well before digital interfaces. Its central finding is consistent and counterintuitive: people don't experience time objectively. They experience it through the lens of uncertainty, engagement, and expectation. [1]

Active waiting — where the person is engaged, informed, or has something to process — is perceived as shorter than passive waiting, where the person sits in silence with no information. People in passive wait mode consistently overestimate how long they've been waiting compared to people in active wait mode, even when the actual duration is identical. [2]

Uncertainty is the amplifier. Not knowing whether something is working, how long it will take, or whether the action succeeded creates anxiety that stretches perceived time. Hick's Law formalises this: uncertainty about what is happening makes interactions feel longer than they are. [3]

This is why a GP's waiting room with a clock and a "Dr. Shah is running about ten minutes behind" update feels fundamentally different from one where you sit in silence with no information. Same wait. Same chairs. Completely different experience. The first waiting room has managed your uncertainty. The second has left you to manufacture your own.

The Mauritius booking was the second kind. Four seconds of blank screen, and my brain filled the silence with worst-case scenarios. A spinner would have helped. A message would have helped more. "Processing your payment — please don't close this page" would have turned an anxious void into a manageable pause.

## Four Hundred Milliseconds

In 1982, Walter Doherty and Ahrvind Thadani published a paper at IBM called "The Economic Value of Rapid Response Time." It established what's now known as the Doherty Threshold: when a system responds in under 400 milliseconds, users experience something close to flow — the interaction feels like an extension of their own thought. [4]

Above 400ms, the illusion breaks. The user becomes aware that they're waiting for a machine. Their mental buffer of planned actions starts to degrade. They have to think about where they were and what they were doing, rather than just doing it.

Doherty and Thadani found that keeping response times under 400ms didn't just feel better — it made people measurably more productive. The interaction became, in their word, "addicting." Not in the exploitative sense from the previous chapter, but in the sense that the tool disappeared and the work flowed.

> **Figure 9.1 — The Doherty Threshold**

![Figure 9.1 — The Doherty Threshold](images/fig-9.1-the-doherty-threshold.png)

*The Doherty Threshold: system responses under 400ms keep users in a state of flow — the interface feels like an extension of thought. Between 400ms and 1 second, the delay is perceptible but tolerable. Beyond 1 second, users start to lose context. Beyond 3 seconds, they start to wonder whether something has gone wrong. Beyond 5 seconds, many will abandon the task entirely. The threshold isn't about speed for speed's sake — it's about preserving the user's mental continuity.*

Four hundred milliseconds is a useful line, but most real-world operations take longer. File uploads. Payment processing. Search queries across large datasets. API calls to third-party services. These are the moments where the interface has to do something with the gap — because the gap is where the anxiety lives.

## What to Do with the Gap

There are three broad strategies for managing wait states, and they represent a spectrum from minimal to generous.

**The spinner.** The lowest bar. A spinning indicator says "something is happening" — which is better than nothing but not by much. It answers one question (is the system frozen?) while creating another (how long will this take?). A spinner is an indeterminate wait — the user has no information about duration or progress. It's the digital equivalent of a receptionist who says "someone will be with you" without saying when.

**The progress bar.** A determinate indicator that shows actual progress. This answers both questions: something is happening, and here's how far along it is. Research consistently shows that determinate progress indicators outperform indeterminate ones in user satisfaction, because they convert uncertainty into expectation. You know where you are. You can see where you're going. [5]

**The skeleton screen.** A visual placeholder that shows the structure of the content that's about to appear. Skeleton screens feel 20% faster than spinners for identical wait times. They reduce uncertainty about both timing *and* outcome — the user can see what shape the result will take before it arrives. [6]

> **Figure 9.2 — The Wait State Spectrum**

![Figure 9.2 — The Wait State Spectrum](images/fig-9.2-the-wait-state-spectrum.png)

*The wait state spectrum, from maximum anxiety to minimum perceived delay. A blank screen provides no information — the user doesn't know if the system is working, how long it will take, or what the result will look like. Each step rightward reduces uncertainty. A spinner confirms activity. A progress bar shows duration. A skeleton screen previews the outcome. Optimistic UI removes the wait entirely by showing the expected result immediately and correcting only if something goes wrong.*

## Optimistic UI

The most generous approach to waiting is to not make the user wait at all.

Optimistic UI shows the expected result immediately, as if the operation has already succeeded, and then corrects if something goes wrong. When you send a message in most modern chat apps, it appears in the conversation instantly — it doesn't wait for server confirmation. The message is shown optimistically, and in the vast majority of cases, the server confirms a moment later. On the rare occasion it fails, the message is marked with an error state.

This works because most operations succeed. If 99% of messages send successfully, making 100% of users wait for confirmation punishes the majority for the sake of the minority. Optimistic UI inverts that: show success immediately, handle the 1% failure gracefully.

Immediate visual feedback reduces perceived wait time by up to 40%, even when actual processing time is identical. [7] The user doesn't perceive the wait because the result is already on screen. The operation is still happening — it's just happening behind a result the user already trusts.

There's a caveat, and it connects back to Chapter 8. Optimistic UI only works if failures are handled honestly. If the optimistic result masks a failure — if the message appears to send but silently doesn't — that's deception, not design. The pattern depends on trust: show the result early, but if it fails, tell the user immediately and help them recover.

## The Three Dots

The typing indicator in messaging apps — the three animated dots that appear when someone is writing a reply — is one of the most psychologically complex microinteractions ever designed.

It solves one problem brilliantly. Before typing indicators, you sent a message and waited in silence. You didn't know if the other person had seen it, if they were thinking about a reply, or if they'd walked away from their phone. The silence was ambiguous, and ambiguity breeds anxiety. The typing indicator resolves that: they're there, they've seen it, they're responding. The three dots transform "are they ignoring me?" into "they're writing back."

But it creates a new problem. The dots appear and disappear. The person starts typing, stops, starts again. You watch the dots pulse and wonder what they're writing that requires that much editing. The indicator that was meant to reduce uncertainty becomes a source of it — a real-time broadcast of someone's hesitation. [8]

This is worth sitting with, because it illustrates something important about wait-state design. Providing information during a wait is almost always better than silence. But the *kind* of information matters. The typing indicator provides too much — it shows process, not progress. It turns a simple wait ("they'll reply when they're ready") into a performance ("they're writing... they stopped... they're writing again...").

A progress bar doesn't show you the cursor moving back and forth across the screen. It shows you a bar filling up. It abstracts the process into progress. That abstraction is a kindness — it gives you enough information to feel oriented without enough to feel anxious.

## The Airport Board

Airports understand this better than most software.

A departures board manages uncertainty at scale. It shows hundreds of passengers the status of their flight in a single glance: on time, delayed, boarding, departed. Each status is a different anxiety level, and the board manages all of them simultaneously. "Delayed 20 minutes" is frustrating but manageable — you know what's happening and roughly when it will end. "Boarding at Gate 14" is a clear action. Even "Cancelled" is better than a blank row, because at least you know.

The worst state on a departures board is no information at all. A flight with no status listed creates more anxiety than one that says "Delayed" — because "Delayed" is a known quantity and blank is an unknown one.

Loading states work the same way. A blank screen after clicking "Pay Now" is the digital equivalent of a departures board with no information. Something is presumably happening, but the user has no way to know what, how long, or whether it's going to work. They fill the gap with their own worst-case thinking — just as I did with those Mauritius flights.

## Try This

Next time you're waiting for something to load — a payment, a file upload, a search result — time it. Not with a stopwatch. Just count in your head. One-Mississippi, two-Mississippi.

Now ask yourself: at what point did you start to feel uncertain? At what point did you wonder whether something had gone wrong? For most people, it's somewhere around three seconds. That's the threshold where passive waiting starts to feel like abandonment.

Then look at what the interface gave you during that wait. A spinner? A progress bar? A skeleton? A message? Nothing? Whatever it gave you, that's the product's answer to the question: do we care what you're feeling right now?

## The Blank Screen

The Mauritius flights worked. The payment went through. The confirmation appeared. But for four seconds, I didn't know any of that, and in those four seconds, the product lost something it never got back — not my money, but my confidence. Every subsequent interaction with that airline's website carried a faint residue of that moment. Will it work this time? Will it tell me if it doesn't?

The affect heuristic from Chapter 2 explains why: a negative emotional moment colours everything that follows. Four seconds of anxiety during a payment flow is a negative peak. And Kahneman's peak-end rule means it's the kind of moment that gets remembered disproportionately.

A progress message would have cost nothing. Eight words: "Processing your payment — please don't close this page." Eight words and the anxiety dissolves. Eight words and the user waits patiently instead of catastrophising. Eight words and the product keeps its trust.

It's the same lesson as Chapter 6's password field. A handful of words, plainly written, at the moment they're needed most. The cheapest fix. The most neglected one.

The next chapter is about what happens when the wait ends badly — when something genuinely goes wrong, and the product has to help someone recover.

## References

[1] Perceived wait time research — active vs passive waiting. [Chris Kiess — The UX of Waiting and the Perception of Time](https://chriskiess.medium.com/the-ux-of-waiting-and-the-perception-of-time-eab52c459ce3).

[2] People in passive wait mode overestimate duration compared to active wait. [ACM — Enhancing UX During Waiting Time in HCI (2012)](https://dl.acm.org/doi/10.1145/2317956.2318069).

[3] Hick's Law and uncertainty amplifying perceived wait time. [Dr Maria Panagiotidi — Psychological Time and UX](https://uxpsychology.substack.com/p/psychological-time-and-ux).

[4] Doherty, W. J. & Thadani, A. J. "The Economic Value of Rapid Response Time." *IBM Systems Journal*, 21(3), 1982. [Laws of UX — Doherty Threshold](https://lawsofux.com/doherty-threshold/).

[5] Determinate progress indicators outperform indeterminate ones in user satisfaction. [Prototypr — 7 Rules to Manage User Wait Times](https://blog.prototypr.io/7-rules-to-manage-user-wait-times-6dd44fec5b61).

[6] Skeleton screens feel 20% faster than spinners for identical wait times. [UI Deploy — Skeleton Screens vs. Spinners](https://ui-deploy.com/blog/skeleton-screens-vs-spinners-optimizing-perceived-performance).

[7] Immediate visual feedback reduces perceived wait time by up to 40%. [Simon Hearne — Optimistic UI Patterns](https://simonhearne.com/2021/optimistic-ui-patterns/).

[8] Typing indicator as a source of anxiety — resolves one uncertainty, creates another. [Pamela Pavliscak — Three-Dot Anxiety](https://medium.com/feels-guide/three-dot-anxiety-b1c9318ed27b). [Saratoga Falcon — Typing Awareness Indicator More Stressful Than Helpful](https://saratogafalcon.org/5988/features/typing-awareness-indicator-more-stressful-helpful/).
