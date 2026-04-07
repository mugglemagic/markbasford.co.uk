# Chapter 09 Research — Designing for Mistakes and Bad Days

## Loss Aversion — Kahneman & Tversky

### Prospect Theory
- Daniel Kahneman and Amos Tversky (1979): Prospect Theory — people evaluate outcomes relative to a reference point and weigh losses more heavily than equivalent gains.
- "Losses loom larger than gains" — the pain of losing is psychologically about twice as powerful as the pleasure of gaining.
- Kahneman's evolutionary explanation: "Organisms that treat threats as more urgent than opportunities have a better chance to survive and reproduce."

### Application to Interface Design
- Losing work (unsaved draft, accidental deletion, failed submission) is experienced as a loss, not just an absence. The emotional response is disproportionate to the objective cost.
- Undo, auto-save, and recovery patterns aren't conveniences — they're loss-prevention mechanisms addressing a deep cognitive bias.
- The endowment effect: once someone has created something (a message, a document, a configuration), they value it more than they objectively should. Losing it hurts more than not having created it.

Sources:
- [Kahneman & Tversky (1979) — Prospect Theory (MIT PDF)](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf)
- [Wikipedia — Prospect Theory](https://en.wikipedia.org/wiki/Prospect_theory)
- [The Decision Lab — Loss Aversion](https://thedecisionlab.com/biases/loss-aversion)
- [Columbia — Global Study Confirms Loss Aversion](https://www.publichealth.columbia.edu/news/global-study-confirms-influential-theory-behind-loss-aversion)

---

## Psychological Safety — Amy Edmondson

### The 1999 Study
- Amy Edmondson studied 51 work teams in a manufacturing company, introducing the construct of "team psychological safety" — a shared belief that the team is safe for interpersonal risk-taking.
- Key finding: the best teams didn't make fewer mistakes — they *reported* more. They felt safe admitting errors and learning from them.
- Psychological safety is associated with learning behaviour; team efficacy alone is not (when controlling for psychological safety).

### The Hospital Study
- Edmondson's earlier work with hospital teams: the highest-performing units had higher reported error rates. Not because they were worse, but because they had cultures where admitting mistakes was safe, enabling faster correction and learning.

### Application to Products
- Products can create or destroy psychological safety. A destructive action with no undo creates fear. A clear recovery path creates safety.
- "Are you sure you want to delete this?" is a safety mechanism — but a lazy one. Better: soft-delete with easy recovery. Let the user make mistakes without permanent consequence.
- The parallel: a team where mistakes are punished vs. one where they're surfaced and learned from. Products either punish mistakes (permanent deletion, lost work, error dead-ends) or treat them as recoverable events.

Sources:
- [Edmondson (1999) — Psychological Safety and Learning Behavior in Work Teams](https://journals.sagepub.com/doi/10.2307/2666999)
- [MIT — Full Paper PDF](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Performance/Edmondson%20Psychological%20safety.pdf)
- [Leda — Psychological Safety: The Complete Guide](https://getleda.com/psychological-safety)
- [PsychSafety.com — About Psychological Safety](https://psychsafety.com/about-psychological-safety/)

---

## Learned Helplessness — Seligman (Early Work)

- Martin Seligman's learned helplessness research (1967): when organisms repeatedly experience uncontrollable negative outcomes, they stop trying to avoid them — even when avoidance becomes possible.
- In interfaces: repeated lost work, unrecoverable errors, or confusing failure states teach users to disengage. They stop trying because experience has taught them that trying doesn't help.
- The antidote: consistent, reliable recovery. If every mistake is recoverable, users learn to trust the system and explore more confidently.

---

## Design Patterns for Recovery

### Undo
- Gmail's "Undo send" (5-30 second window) — possibly the most consequential undo in consumer software.
- Undo is cheaper than confirmation dialogs and less disruptive to flow.

### Auto-save
- Google Docs' continuous auto-save changed the relationship between users and document loss. The anxiety of "did I save?" evaporated.

### Soft Delete
- Trash/recycle bin patterns — deletion isn't permanent, it's staged. Recovery is the default; permanent deletion requires deliberate additional action.

### Graceful Degradation
- When a system partially fails, preserve what you can. Losing a network connection shouldn't lose the draft.

---

## Story Candidates
1. The pencil with an eraser — the physical-world design decision that mistakes are expected and recovery should be built in, not bolted on.
2. Gmail's "Undo send" — the story of how a 5-second window prevented millions of regrets.
3. The toddler learning to walk — they fall constantly. What matters isn't the falling; it's that the ground is soft. Products should be soft ground.
