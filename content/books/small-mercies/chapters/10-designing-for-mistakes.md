---
chapter: 10
title: "Designing for Mistakes and Bad Days"
word_count: 4440
status: draft
---

# Designing for Mistakes and Bad Days

![A pencil lying on paper with eraser shavings nearby — evidence of correction, of trying and adjusting. Warm natural light, overhead shot. The eraser is the subject.](images/chapters/10.png)

I sent an email to the wrong person once. Not a catastrophic one — no state secrets, no career-ending confession — but the kind where the moment you click send, your stomach drops and your eyes go straight to the "To" field. Wrong client. Right message, wrong recipient. The kind of mistake that takes half a second to make and a very uncomfortable phone call to fix.

Gmail gave me five seconds. A small yellow bar at the bottom of the screen: "Your message has been sent. Undo." I clicked it. The email came back. Nobody saw it. The phone call never happened.

That feature — Undo Send — launched as a Google Labs experiment in March 2009. It offered a five-second window to recall a sent message. It stayed in beta for six years. Six years of quiet, unassuming usefulness before Google made it an official feature in 2015 and extended the window to thirty seconds. [1]

Five seconds. That's all the safety net was. But in those five seconds, Gmail turned a mistake into a non-event. Not by preventing the mistake — I still clicked send with the wrong name in the field — but by making the mistake recoverable. By treating the error not as a permanent action but as a reversible one. By giving me a moment of grace between the click and the consequence.

That's what this chapter is about. Not preventing mistakes — people will always make them. But designing products that treat mistakes as expected, recoverable, and human.

## Losses Loom Larger Than Gains

In 1979, Daniel Kahneman and Amos Tversky published Prospect Theory, one of the most influential papers in behavioural economics. Its central finding: people evaluate outcomes relative to a reference point and weigh losses more heavily than equivalent gains. The pain of losing something is psychologically about twice as powerful as the pleasure of gaining the same thing. [2]

Kahneman offered an evolutionary explanation: "Organisms that treat threats as more urgent than opportunities have a better chance to survive and reproduce." The asymmetry is baked in. Losing £50 feels worse than finding £50 feels good, even though the objective value is identical.

In interface design, this means losing work — an unsaved draft, an accidental deletion, a failed submission — is experienced not as a neutral absence but as an active loss. The emotional response is disproportionate to the objective cost. Losing a paragraph you spent ten minutes writing feels worse than the ten minutes of writing felt good. The endowment effect compounds this: once someone has created something, they value it more than they objectively should. It's theirs. Losing it hurts.

This is why undo, auto-save, and recovery patterns aren't nice-to-haves. They're loss-prevention mechanisms addressing a deep cognitive bias. A product without undo isn't just missing a feature — it's exposing users to a form of pain that the product could have prevented.

> **Figure 10.1 — Loss Aversion in Interface Design**

![Figure 10.1 — Loss Aversion in Interface Design](images/fig-10.1-loss-aversion-in-interface-design.png)

*Loss aversion applied to interface design. Once a user creates something, the endowment effect means they value it disproportionately. If a mistake destroys it and there's no recovery path, the loss is felt at roughly twice the intensity of the original pleasure of creating it. Repeated unrecoverable losses lead to learned helplessness — the user stops trying. Recovery paths (undo, auto-save, soft delete) prevent the loss and build psychological safety — the user explores more confidently because they know the ground is soft.*

## Psychological Safety

In 1999, Amy Edmondson published a study of 51 work teams in a manufacturing company that introduced a concept she called psychological safety — a shared belief that the team is safe for interpersonal risk-taking. [3]

Her finding was counterintuitive. The best-performing teams didn't make fewer mistakes. They reported *more* mistakes. Not because they were worse at their jobs, but because they felt safe admitting when something went wrong. That safety enabled faster correction and deeper learning. Teams without psychological safety hid their errors, which meant the errors persisted and compounded.

Edmondson's earlier work with hospital teams showed the same pattern: the highest-performing units had the highest reported error rates. The nurses and doctors weren't making more mistakes — they were surfacing them, discussing them, and fixing them, because the culture allowed it. [4]

Products create the same dynamic. A product with no undo, no recovery path, and punitive error handling teaches users to be careful in the wrong way — careful not to explore, not to try things, not to make the small mistakes that lead to learning. A product with reliable undo, auto-save, and graceful recovery teaches the opposite: try things. If something goes wrong, we've got you.

The parallel is direct. A team where mistakes are punished produces people who hide their errors. A product where mistakes are permanent produces users who avoid taking risks. Both are less effective than the alternative — not because they have more errors, but because they have less learning.

## The Pencil and the Pen

A pencil usually comes with an eraser on the end. It's built into the tool — not as an afterthought but as part of the design. The people who put erasers on pencils understood something fundamental: writing is a process of trying, adjusting, and revising. The tool should support that process, not punish it.

A pen, traditionally, doesn't have an eraser. Writing with a pen is a commitment — every mark is permanent. That's fine for signing a contract, but it changes how you write everything else. You slow down. You plan more. You're less willing to try something that might not work, because the cost of failure is visible and indelible.

And here's the thing: even pen manufacturers eventually came around. Pilot's Frixion range uses thermosensitive ink that can be erased with friction — a pen with a built-in eraser, because the demand for recovery was so universal that an entire ink technology was invented to meet it. The pen industry literally reinvented ink so that pens could have what pencils always had. That's how fundamental the need for undo is. Even the tool that was defined by permanence found a way to offer recovery.

Most products are still traditional pens. Deletion is permanent. Submission is final. Navigation is a one-way door. The user is expected to get it right the first time, and when they don't, the product shrugs.

The best products are pencils — or at least Frixion pens. They build recovery into the tool, not because they expect failure, but because they understand that the freedom to fail safely is what makes confident, productive use possible.

## Four Recovery Patterns

There are four broad approaches to designing for mistakes, and they form a progression from minimal to generous.

**Confirmation dialogs.** "Are you sure you want to delete this?" The most common and the laziest. Confirmation dialogs interrupt flow, train users to click "Yes" without reading (because they appear so often), and place the burden of prevention on the user rather than the system. They're better than nothing, but only just. [5]

**Undo.** Gmail's approach. Let the action happen, then offer a window to reverse it. Undo is less disruptive than confirmation because it doesn't interrupt the flow — the user acts, sees the result, and decides whether to reverse. It places the burden on the system (which has to support reversal) rather than the user (who has to predict the future). Five seconds of undo is worth more than any number of confirmation dialogs.

**Auto-save.** Google Docs' approach. Don't ask the user to remember to save. Save continuously, automatically, invisibly. The anxiety of "did I save?" evaporates entirely. The user can close the tab, lose their connection, or shut the laptop, and their work is safe. Auto-save doesn't prevent mistakes — it prevents the catastrophic version of the most common mistake (forgetting to save).

**Soft delete.** The recycle bin. Deletion isn't permanent — it's staged. The item moves to a holding area where it can be recovered. Permanent deletion requires a second, deliberate action. This inverts the default: recovery is easy, destruction is hard. The user has to actively choose permanence rather than accidentally stumbling into it.

> **Figure 10.2 — Recovery Patterns: From Lazy to Generous**

![Figure 10.2 — Recovery Patterns: From Lazy to Generous](images/fig-10.2-recovery-patterns-from-lazy-to-generous.png)

*Four recovery patterns, from lazy to generous. Confirmation dialogs interrupt the user and ask them to predict the future. Undo lets the action happen and offers reversal — less disruptive, more respectful. Auto-save removes the most common catastrophic failure (forgetting to save) entirely. Soft delete inverts the default: recovery is easy, permanent destruction requires deliberate intent. Each step rightward shifts the burden from the user to the system.*

## Learned Helplessness

Martin Seligman — the same researcher whose positive psychology work appears in Chapter 13 — began his career studying the opposite of flourishing. In 1967, he identified a phenomenon called learned helplessness: when organisms repeatedly experience uncontrollable negative outcomes, they eventually stop trying to avoid them — even when avoidance becomes possible. [6]

The principle translates directly to interfaces. When users repeatedly lose work, encounter unrecoverable errors, or hit dead ends with no guidance, they learn a specific lesson: trying doesn't help. The system will punish you regardless. So you stop trying.

This manifests as caution that looks like disengagement. The user doesn't explore features because they've learned that unexpected things happen and can't be undone. They save obsessively — Ctrl+S every thirty seconds — because they've learned that the system won't do it for them. They avoid destructive actions entirely, working around deletion rather than using it, because they've learned that deletion is permanent and recovery is impossible.

These aren't rational responses to current risks. They're conditioned responses to past experiences. A user who was burned by a product that lost their work carries that anxiety into every subsequent product — even ones that auto-save perfectly. The damage from poor recovery design outlasts the product that caused it.

The antidote is consistent, reliable recovery. If every mistake is recoverable, users learn the opposite lesson: this system has my back. They explore more. They try things. They make productive mistakes — the kind that lead to discovering features, understanding capabilities, and building confidence.

## Graceful Degradation

There's one more pattern that doesn't fit neatly into the four above, but matters enormously: what happens when the system itself fails partway through.

A network connection drops while you're writing an email. A server error occurs during a file upload. A payment processor times out mid-transaction. These aren't user mistakes — they're system failures. But the user experiences them as losses, because the work they were doing is now in an uncertain state.

Graceful degradation means preserving what you can. If the network drops, the draft should survive locally. If the upload fails, the file should be queued for retry, not lost. If the payment times out, the system should check whether the charge went through before showing an error — not leave the user wondering whether they've been charged twice.

The Mauritius booking from the last chapter is a graceful degradation failure. The system didn't fail — it just didn't communicate. But a system that fails *and* communicates ("We lost the connection, but your draft is saved — you can try again when you're back online") is doing something generous: it's separating the system failure from the user's work. The thing broke, but your stuff is safe.

## Try This

Think about the last time you lost work in a product. Not a hypothetical — a real memory. Something you wrote, configured, or created that disappeared because of a crash, a timeout, a misclick, or a missing save.

How did it feel? And — more importantly — how did it change the way you used that product afterwards? Did you start saving more often? Did you avoid certain actions? Did you copy text to your clipboard before submitting it, just in case?

Those defensive behaviours are learned helplessness in miniature. They're the scar tissue from a product that didn't have an eraser.

## Soft Ground

My email to the wrong client would have been a bad afternoon. Gmail turned it into a non-event. Five seconds of undo, a small yellow bar, and the mistake evaporated. I didn't have to be more careful next time. I didn't have to develop a defensive habit. I just had to click "Undo" within five seconds, and the product handled the rest.

That's what good recovery design does. It makes the ground soft. Not so soft that actions have no consequences — you can't undo a payment, and you shouldn't be able to. But soft enough that the normal, human, everyday mistakes that everyone makes don't leave permanent marks.

Even pen manufacturers figured this out. If the demand for recovery is strong enough to reinvent ink, it's strong enough to justify an undo button.

The next chapter is about the users who never report their mistakes — who never file a bug, never call support, never leave feedback — because the product wasn't built with their reality in mind.

## References

[1] Gmail Undo Send: launched in Google Labs March 2009, graduated to official feature June 2015, window extended from 5 to 30 seconds. [Google Blog — New in Labs: Undo Send (2009)](https://gmail.googleblog.com/2009/03/new-in-labs-undo-send.html). [The Next Web — Gmail's Undo Send Finally Graduates (2015)](https://thenextweb.com/google/2015/06/23/gmails-undo-send-feature-finally-graduates-out-of-labs-after-six-years/).

[2] Kahneman, D. & Tversky, A. "Prospect Theory: An Analysis of Decision under Risk." *Econometrica*, 47(2), 263–291, 1979. [Wikipedia — Prospect Theory](https://en.wikipedia.org/wiki/Prospect_theory). [The Decision Lab — Loss Aversion](https://thedecisionlab.com/biases/loss-aversion).

[3] Edmondson, A. C. "Psychological Safety and Learning Behavior in Work Teams." *Administrative Science Quarterly*, 44(2), 350–383, 1999. [SAGE Journals](https://journals.sagepub.com/doi/10.2307/2666999).

[4] Edmondson's hospital study — highest-performing units had highest reported error rates. [MIT — Full Paper PDF](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Performance/Edmondson%20Psychological%20safety.pdf).

[5] Confirmation dialogs train users to click "Yes" without reading — effectiveness degrades with frequency.

[6] Seligman, M. E. P. Learned helplessness research (1967). Overview at [Leda — Psychological Safety: The Complete Guide](https://getleda.com/psychological-safety).
