# Chapter 08 Research — Waiting, Loading, and Anxiety

## Psychology of Waiting and Uncertainty

### Perceived vs. Actual Wait Time
- Active waiting (engaged, informed) is perceived as shorter than passive waiting (uninformed, uncertain).
- People in passive wait mode overestimate their waiting time compared to those in active wait.
- Hick's Law: uncertainty about what is happening makes interactions feel longer than they are.
- Research confirms a link between cognitive workload and waiting time perception — giving users something to process during a wait can reduce perceived duration.

### Uncertainty and Anxiety
- Waiting times in HCI are "often sources of anxiety and irritation" — moments where interaction is temporarily interrupted.
- Uncertainty is the enemy: not knowing whether something is working, how long it will take, or whether the action succeeded creates disproportionate anxiety.
- Intolerance of uncertainty (IU) research: individual differences in how much uncertainty people can tolerate. High-IU individuals experience significantly more anxiety during ambiguous situations. Interfaces with poor loading feedback amplify this.

### Setting Expectations
- Clear expectations minimise the anxiety effect. A determinate progress bar (showing actual progress) outperforms an indeterminate spinner.
- Even incremental progress reassures users that something is happening.

Sources:
- [Chris Kiess — The UX of Waiting and the Perception of Time](https://chriskiess.medium.com/the-ux-of-waiting-and-the-perception-of-time-eab52c459ce3)
- [Dr Maria Panagiotidi — Psychological Time and UX](https://uxpsychology.substack.com/p/psychological-time-and-ux)
- [ACM — Enhancing UX During Waiting Time in HCI (2012)](https://dl.acm.org/doi/10.1145/2317956.2318069)
- [Prototypr — 7 Rules to Manage User Wait Times](https://blog.prototypr.io/7-rules-to-manage-user-wait-times-6dd44fec5b61)
- [Services Management textbook — The Psychology of Waiting](https://uen.pressbooks.pub/servicesmgt/chapter/chapter-12-the-psychology-of-waiting/)

---

## Optimistic UI and Skeleton Screens

### Optimistic Updates
- Show the expected result immediately, as if the operation already succeeded, then correct if needed.
- Makes the app feel instant. The key insight: most operations succeed, so showing success immediately and handling the rare failure is better than making everyone wait for confirmation.
- Immediate visual feedback reduces perceived wait time by up to 40%, even when actual processing time is identical.

### Skeleton Screens
- Visual placeholders that outline the structure of upcoming content.
- Research: skeleton screens feel 20% faster than spinners for identical wait times.
- The skeleton communicates "something is coming and it will look like this" — reducing uncertainty about both timing and outcome.
- Tim Kadlec's caution: skeleton screens can backfire if they persist too long or if the final content looks nothing like the skeleton. The promise must match the delivery.

### The Doherty Threshold
- Walter Doherty and Ahrvind Thadani (1982): system response times under 400ms keep users in a state of flow. Beyond 400ms, delays are perceptible and users lose focus.
- Below the threshold: the interface feels like an extension of thought. Above it: the interface becomes an obstacle.

Sources:
- [Simon Hearne — Optimistic UI Patterns](https://simonhearne.com/2021/optimistic-ui-patterns/)
- [UI Deploy — Skeleton Screens vs. Spinners](https://ui-deploy.com/blog/skeleton-screens-vs-spinners-optimizing-perceived-performance)
- [Tim Kadlec — Effective Skeleton Screens (2020)](https://timkadlec.com/remembers/2020-11-02-skeleton-screens/)
- [LogRocket — The Doherty Threshold in UX](https://blog.logrocket.com/ux-design/designing-instant-feedback-doherty-threshold/)
- [OpenReplay — How Optimistic Updates Make Apps Feel Faster](https://blog.openreplay.com/optimistic-updates-make-apps-faster/)

---

## The Waiting Room Analogy

- A GP's waiting room with a clock, a rough estimate, and a "Dr. Shah is running 10 minutes behind" update feels fundamentally different from one where you sit in silence with no information.
- The medical wait and the loading spinner are the same psychological experience: uncertainty about duration and outcome, managed (or not) by communication.

---

## Story Candidates
1. The airport departures board — no information vs. "Delayed 20 minutes" vs. "Now boarding." Each message manages a different anxiety. The worst state is the blank screen.
2. The three-dot typing indicator in messaging apps — it transforms "are they ignoring me?" into "they're writing back." A tiny animation that resolves enormous social anxiety.
3. A restaurant that brings bread and water immediately vs. one that leaves you sitting with menus for 15 minutes. Same food, different perceived wait.
