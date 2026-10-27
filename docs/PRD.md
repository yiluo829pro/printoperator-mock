# ICON live-job operator demo — specification-based PRD

Version 0.1 · October 26, 2026 · **Draft for Yi's review; implementation not authorized**

## 1. Purpose and source

Build an interactive demonstration of how a BuildOS-inspired live-job task flow could help an operator understand a critical manual task, attest to the work, obtain contextual help, and resolve verification before the affected print area is covered.

The deliverable after approval is a working browser demo with stateful interactions and simulated live job events. It is an interview prototype, not a connection to Titan, an official ICON product, or a validated inspection system.

Primary source: [ICON PM Case Study](https://docs.google.com/document/d/119UT3-4QOche85NT768a-HUNtdzbwvwV7gJ75IGSVnQ/edit?usp=sharing), main narrative and appendix: segmentation, operator journey, A Task queue/cards, B Decision signals, C Help/capture, D Verification, E Moonshot. Full text reviewed on October 26, 2026. Design reference: [ICON design research](DESIGN-RESEARCH.md).

Source statements are proposals or case assumptions unless independently established. In this PRD, **S** means specified in the case study; **R** means recommended detail added to make the demo implementable; **V** means a production dependency requiring validation. Approving the demo does not validate production assumptions.

## 2. Readiness assessment

**Enough for a specification and simulated demo: yes. Enough for a production release: no.**

The source provides a target user, live-job scope, research plan, three hypotheses, solution dependencies, prioritization, success measures, and unusually useful appendix details. Missing implementation decisions can be proposed explicitly rather than blocking the draft.

| Area | Assessment / required treatment |
|---|---|
| Problem framing | Strong hypotheses. Revise the executive claim that the root cause *is* a context gap to a leading hypothesis until episode research confirms it. Narrow app use can also indicate efficient task completion. |
| P3 consistency | The initial problem concerns invisible difficulty; the proposed solution adds missed-work verification. These are related but distinct. Capture friction to test the former; validate count/presence risk separately before justifying a control gate. |
| Primary task | Recommended demo anchor: reinforcement ties, layer 5, ten planned positions. Ten is the source's illustrative example, not an engineering standard. |
| Camera verification | Camera coverage, tie visibility, localization, lighting, speed, and capture-before-cover sequence are unproven. Simulate outcomes; do not implement a pretend detector. |
| Completion semantics | Source distinguishes acknowledgment, evidence, verification. Add explicit state transitions and gate eligibility below. |
| Human review | Define reviewer authority, unavailability, disagreement, revision, and audit behavior. No production service levels assumed. |
| Offline behavior | Evidence may queue locally. Disconnection must not silently satisfy an unresolved gate or imply a help request was received. |
| Metrics | Source has appropriate outcome direction but no baseline. Add event definitions and denominators; do not invent improvement percentages. |
| Scope | Keep the interview build to one complete operator loop with review and recovery branches. Moonshot is future context. |

Additional fact checks before presenting operational details as established: task ownership for material loading, automatic damaged-bead detection, weather warning behavior, and restart/bonding-agent timing in the journey appendix. The demo will not encode those as approved procedures. Cross-industry feasibility statements in Appendix E remain unverified here.

## 3. User, problem, and intended outcome

**Primary user (S):** a newer print operator employed by an external residential builder; experienced in physical construction but less familiar with construction printing and tablet workflows. Gloves, noise, sunlight, and divided attention are relevant design conditions to test, not conditions the browser prototype can prove it has solved.

**Secondary users (S/R):** a site lead or ICON support reviewer who clarifies work and reviews uncertain evidence; experienced operators and internal field teams who validate task content.

| Hypothesis | User need | Proposed response |
|---|---|---|
| P1: generic guidance leaves job-specific judgment unsupported | Know what this task requires, where, and who acts | Layer-specific standard, positions, ownership, approved guidance |
| P2: asking for help costs too much effort | Get help without reconstructing the job | Task-bound help, explicit urgent route, issue flag and context |
| P3a: completion hides friction | Record difficulty without a separate reporting workflow | Count edits, issue reasons, assistance and rework events |
| P3b: completion does not establish count/presence | Distinguish attested work from checked evidence | Count/presence verification with human review and cover gate |

Primary outcome (S): reduce avoidable delay attributable to the selected task per eligible task occurrence, without degrading safety or quality or increasing overall job duration. Engagement, browsing, and ticket reduction are not goals.

## 4. Proposed scope and priorities

**P0 = required for the approved demo to be considered complete. P1 = later extension, not included by default.** Production sequencing remains task guidance and attestation first, validated automation later.

| ID | Feature | Priority | Basis |
|---|---|---|---|
| F01 | Live-job shell, actor-labeled queue, focused task | P0 | S Appendix A; R simulation |
| F02 | Component reference, layer positions, exact task standard | P0 | S A |
| F03 | Specific-count attestation and amendments | P0 | S A |
| F04 | Task-bound evidence and visible offline queue | P0 | S A/C |
| F05 | Simulated count/presence verification and cover eligibility | P0 | S D; R simulation |
| F06 | Reviewer workspace, retake/rework, append-only decisions | P0 | S D; R authority/flow |
| F07 | Contextual help and two-tap issue capture | P0 | S C |
| F08 | Connection/freshness states and recovery | P0 | S C |
| F09 | In-job history and local measurement events | P0 | S A/D/outcomes |
| F10 | Scenario controls, replay and reset | P0 | R interview reliability |
| F11 | Push-to-talk recording/transcription | P1 | S C; browser permission and service dependency |
| F12 | AI note classification, routing, proactive callback | P1 | S C; requires human operational model |
| F13 | Approved weather/mix decision cards | P1 | S B; validated thresholds and content owners required |
| F14 | Real camera inference / pump telemetry integration | P1 | S D; hardware/data feasibility unverified |
| F15 | Recurring issue aggregation and feedback loop | P1 | S C; beyond core live-task demo |

Out of this build: onboarding, post-job reporting, billing, production authentication, dispatch services, robot control, automated material/weather advice, autonomous-site hardware, multi-machine supervision, and production ML training. In-job History is included because it explains the current task's evidence, not as a reporting product.

## 5. End-to-end demo journey

1. Open an active synthetic residential print job. See the current layer, print state, connection freshness, and upcoming work by actor.
2. Open “Place Reinforcement Ties — L5.” See ten marked positions, a reference component, and clearly labeled illustrative instructions.
3. Acknowledge and perform the conceptual task. Confirm a count or edit it. An edited count does not silently become an accepted standard.
4. Record a fixture image or optionally select a local image. The app binds it to this job/task/layer and shows whether it is saved locally or synced in the simulation.
5. Submit a verification attempt. Simulated results produce one of four branches: matching count with sufficient confidence; uncertainty; unusable capture; possible mismatch.
6. The next affected cover action remains blocked until an eligible check/review completes. An uncertain result enters the reviewer queue; a possible mismatch is not a human-confirmed failure.
7. Switch to the reviewer workspace, inspect context and evidence, and confirm count/presence or request retake/rework. Resolve the task and observe the gate change.
8. During any step, flag an issue or open contextual help. Show acknowledgment/ownership without claiming real support received it.
9. Inspect the in-job history, including original attestation, revisions, evidence, check, review, and gate transitions.

## 6. Screens and information hierarchy

| Surface | Required information and actions |
|---|---|
| Live job / operator | Project, lot, print suite, phase, layer/item, simulated progress; spatial model; actor queue; selected task; help and connection status |
| Task detail | Standard/version, component reference, ten positions, owner, task state, count confirmation/edit, evidence, verification result and cover status |
| Help/issue drawer | Explicit help vs issue distinction, automatic context, reason choices, submission state and support availability |
| Reviewer workspace | Pending cases, task standard, operator attestation, image, simulated result/confidence, freshness, decision and reason |
| In-job History | Ordered events, evidence links, revisions, model/policy identifiers, human decisions, current eligibility |
| Presenter controls | Scenario selector, play/pause, event trigger, connection toggle, reviewer switch, restart/reset; visually separate from operator controls |

Design direction: navy `#131720`, white primary text, legible blue-gray secondary text, cyan focus/progress, explicitly labeled orange exception and green successful states. Use the existing design research's task/phase/layer structure. Font choice depends on locally available, embeddable files; do not assume Lightspeed availability. A model may be an interactive schematic or lightweight 3D view; accurate task-position highlighting takes precedence over photorealism.

## 7. Functional requirements and acceptance criteria

### F01 — live job and actor queue

- Every queue item must show actor (`Operator`, `Titan`, `ICON team`), phase, current/upcoming status, and relevant layer or time context. Actor and assignment are separate fields.
- Machine/status entries must not show an operator completion action. Selecting an item must update its detail and relevant spatial highlight.
- Progress must be driven by one shared simulation state, not independent decorative counters. Blocking the cover action must stop its simulated advancement.
- **Acceptance:** switching between actor items preserves task inputs; the ten-position task highlights L5; a pending gate prevents entry into its dependent cover action.

### F02 — task standard

- The critical card must show required count, units, component illustration, position IDs, approved-content status/version, and task scope.
- Prototype content must say “Illustrative demo procedure”; no unvalidated ratio, installation standard, or weather limit is presented as ICON-approved.
- Missing or changed standard must block verification eligibility and explain the next action. A changed standard invalidates prior eligibility until re-reviewed against the new version.
- **Acceptance:** all ten positions are distinguishable; the expected count agrees across model/card/check; an unavailable standard cannot yield a verified task.

### F03 — count attestation

- Operator acknowledgment, count attestation, evidence capture, and verification must be recorded separately.
- “Confirm 10 placed” records ten; “Edit count” accepts non-negative integers only and allows an optional reason. Empty, negative, decimal, or invalid input cannot submit.
- A nonmatching count stays visible and requires correction/review; it must not change the required count. Repeated submission cannot create duplicate attestations.
- Amendments preserve the prior record and invalidate verification based on that record.
- **Acceptance:** attesting eight when ten are required records `8 of 10`, preserves ten as the requirement, and keeps cover blocked; later attesting ten creates a new revision.

### F04 — evidence

- Provide a synthetic evidence image without requiring a camera or network. Optional local image selection must support JPEG/PNG/WebP up to a proposed 10 MB limit, with readable validation errors.
- Save evidence ID, job/task/layer/item, capture/import time, source, attestation revision, and sync status. A fixture must be labeled synthetic; an imported image is not proof of capture time or scene identity.
- When offline, save to a local queue where supported; display queued vs synced states explicitly. If storage fails, display failure and preserve the unresolved gate.
- **Acceptance:** offline capture survives reload on the same browser when local storage is available; reconnect processes a record once; failed save never shows success.

### F05 — verification and cover gate

- The demo must explicitly label all verification results as simulated. Arbitrary uploaded images must not receive a fabricated claim of actual visual analysis.
- Attempt inputs must reference the current standard, attestation, and evidence revisions. Outputs: candidate label, observed count/presence, capture quality, confidence, model version, and policy version.
- Demo-only policy: a matching count/presence result with usable evidence and confidence at or above 0.95 may produce `Count/presence verified — simulated`. This value is illustrative and is not a validated production threshold.
- Uncertain results route to review. Poor capture requests a retake. Possible mismatch routes to human review regardless of confidence; it never becomes an AI-only adverse finding.
- High confidence alone is insufficient: count, positions/scope, version, and evidence validity must also match. Here position matching is a synthetic fixture property, not an implemented vision capability.
- Cover eligibility requires current matching evidence and either an eligible simulated positive check or an authorized reviewer confirmation. It must display separately from attestation and from print motion.
- **Acceptance:** no attestation-only, missing-image, stale-input, uncertain, or mismatch attempt can release the cover action. A result for a previous revision cannot release it either.

### F06 — reviewer and recovery

- Reviewer sees the standard, evidence, attested count, proposed finding, confidence, and scope together. Choices: confirm count/presence; request retake; confirm discrepancy and request rework; escalate to site lead.
- Require a reason for reviewer decisions. Human confirmation of a discrepancy records a work observation, not blame or structural acceptance.
- A reviewer cannot approve a known count mismatch; require corrected work/new evidence or an authoritative standard revision. No unrestricted “bypass safety” button.
- Retake preserves prior evidence. Rework opens a new attestation/evidence/check cycle. Reviewer unavailable or disconnected leaves the gate unresolved with a clear owner and escalation status.
- **Acceptance:** an uncertain attempt can resolve via documented human confirmation; confirmed discrepancy remains blocked until a fresh accepted attempt; double-clicking a decision creates one decision.

### F07 — help and issue capture

- A single Help action opens the task-bound support drawer with job, layer/item, machine state, software/content version, connection state, and data age attached automatically.
- Help states: draft, queued locally, submitted in simulation, acknowledged in simulation, assigned, resolved. Do not show real receipt, availability, or response-time promises.
- Two-tap issue capture means tap “Flag issue,” then one reason. Reasons include unclear instruction, count/position differs, component missing, equipment/material issue, and other. Optional text can follow; sending a report must not require a note.
- Urgent help is an explicit separate route, not dependent on classification. In this prototype it opens a labeled simulated escalation with acknowledgment controls; it places no call and sends no message.
- **Acceptance:** a flag can be recorded with two taps; its context is correct; offline requests say queued and do not show acknowledged; a flag by itself neither pauses nor releases the cover gate. Help and cover eligibility remain separate.

### F08 — connection, stale state, and sync

- Display connected/offline, last received update, evidence sync, and help delivery states independently.
- Proposed demo freshness threshold: 30 seconds of simulation time without an update. Mark stale information; never let a late result overwrite a newer task revision.
- Offline authoritative review/release is disabled in the recommended demo. No auto-release is demonstrated offline. Production on-device checking and offline authority require a separate policy.
- **Acceptance:** disconnecting does not stop local capture, does prevent implied support delivery/reviewer authority, and cannot automatically release a pending gate; reconnect is idempotent.

### F09 — in-job history

- Append events; do not rewrite older attestation, evidence, or decisions. Filter by current task/layer and inspect evidence and version details.
- Records include captured/occurred time and received time where different, actor role, attempt ID, previous/new state, and reason.
- **Acceptance:** the history reconstructs the whole task after retake or rework and preserves queued events after reconnect. Reset is an explicit demo-only clearing action.

### F10 — reproducible scenarios

- Required scenarios: clean matching check; uncertain/human review; poor image/retake; possible mismatch/human-confirmed rework; offline capture/reconnect; context-rich help/issue flag.
- Presenter can pause simulated time, trigger the next event, switch actor workspace, and reset to a known fixture. Scenario result is deterministic.
- Reset clears this demo's state only; warn if it will discard unsynced demo records. No external systems are affected.
- **Acceptance:** each scenario can be replayed without developer tools, page errors, live APIs, or timing-dependent luck.

## 8. State and gate contract

Do not collapse the workflow into one `completed` Boolean. Maintain independent dimensions:

| Dimension | Values |
|---|---|
| Work | upcoming, ready, acknowledged, attested, rework required |
| Evidence | missing, recorded locally, queued, synced, invalid |
| Check | not requested, pending, verified count/presence, review required, retake required, discrepancy confirmed |
| Cover gate | blocked, eligible |
| Help | none, draft, queued, submitted, acknowledged, assigned, resolved |

Core transition: ready → acknowledged → attested → evidence recorded → check pending → positive scoped check OR human review → eligible. Retake/rework branches return to new evidence/attestation as appropriate. Changing the standard, count, task scope, or evidence invalidates eligibility. Help flags may occur throughout and do not stand in for a verification decision.

Production prerequisite (V): capture must occur before the dependent cover path starts, at a validated inspection position/pass. The source's “subsequent pass” cannot be assumed to precede concealment. If no usable pre-cover view exists, a dedicated capture or manual check is required. The simulator makes this dependency visible; it cannot establish robot feasibility.

## 9. Minimum data specification

| Entity | Required fields |
|---|---|
| Job | ID, lot, print suite, phase, layer/item, software version, simulated machine state, received-at |
| Task | ID, job ID, type, actor, assignee, layer/item, position IDs, standard ID/version, required count, critical flag, dependent cover action |
| Attestation | ID, task ID, revision, operator alias, count, reason, occurred-at, prior revision |
| Evidence | ID, task/attestation revision, synthetic/imported source, local asset key, capture/import time, received-at, sync state |
| Check attempt | ID, evidence ID, task/standard revision, candidate result, observed count, quality, confidence, model/policy version, simulated flag |
| Review | ID, attempt ID, reviewer role/alias, decision, reason, occurred-at, superseded decision if any |
| Help / issue | ID, task/context snapshot, reason/urgency, note, delivery state, owner, timestamps |
| Event | ID/idempotency key, type, entity revision, occurred-at, received-at, actor, payload |

Use synthetic names and site data. Keep files/events local by default. No real support transmission, model training, biometric capture, or external image upload is part of this demo. Production retention, deletion, access controls, consent, and training-data governance remain open requirements. A human override must not automatically become ground-truth training data without curation.

## 10. Measurement specification

Prototype event log demonstrates instrumentation; it does not demonstrate real operational improvement.

| Measure | Definition / interpretation |
|---|---|
| Avoidable delay per eligible occurrence | Total independently classified avoidable-delay minutes attributable to the target task / all eligible task occurrences, including zero-delay occurrences. Agree attribution and overlapping-delay rules before a pilot. |
| Specific attestation coverage | Eligible critical occurrences with a valid count attestation / all eligible critical occurrences |
| Verified before cover | Eligible occurrences with valid scoped check or authorized review timestamp preceding first dependent cover action / all eligible critical occurrences. Report machine and human confirmation separately. |
| Time to useful assistance | Useful-help timestamp minus request timestamp, with “useful” defined through operator/reviewer confirmation. Report first response separately and include unresolved/censored requests. |
| Friction and rework | Count edits, retakes, rework, repeated clarification and issue reports per eligible occurrence; investigate cause rather than equating a long task with poor performance. |
| Added burden | Active interaction time, false alerts, review demand/wait, abandoned captures and override/review frequency |

Required events: task shown/acknowledged, standard viewed, attestation created/amended, evidence saved/failed/queued/synced, check requested/result, review requested/decided, retake/rework requested, cover blocked/eligible/started, help requested/acknowledged/useful/resolved, issue flagged, connectivity/freshness changed.

Real evaluation (S/V): episode research and baseline → walkthrough → internal alpha → observed low-risk partner beta → limited rollout. Match or account for task type, operator experience, design/site conditions and support access. Set numerical operational targets only after baseline and stakeholder agreement. Guardrails include safety/quality, total print duration, operator burden, missed prompts, inappropriate continuation, support capacity, false acceptance and rejection. Suspend automation on unacceptable outcomes; do not interpret absence of reports as success.

## 11. Nonfunctional and demo delivery requirements

- Run locally after setup without external APIs or runtime network access. Hosting is a later decision; GitHub is optional.
- Recommended browser state persistence: IndexedDB for evidence and structured events. Reload restores the active scenario; reset is available. Production cross-device sync is excluded.
- Target laptop presentation and landscape tablet layouts (approximately 1366×768 and 1024×768). Primary controls at least 48×48 CSS px, keyboard reachable, with visible focus and explicit labels. Test daylight/glove suitability later on actual hardware.
- Status must use text/icons in addition to color. Normal text target contrast at least 4.5:1; avoid copying the source's low-contrast tiny metadata.
- Local interactions should respond within 200 ms on the presentation device; simulated inference delays are intentional and labeled. Heavy graphics must not compromise the core workflow.
- A bounded verification failure/timeout routes to unresolved review rather than spinning forever or releasing the gate. Proposed demo timeout: ten seconds of simulation time.
- No real AI endpoint is required for P0. If AI is added later, document actual prompts/models, inputs, outputs, edits, and limitations. Never describe a scenario fixture as a real inference chain.

## 12. AI and production dependencies

Source D's intended chain is: task/layer/item → attestation → pre-cover image → detector outputs → confidence policy → scoped result/human review → in-job evidence record. A detector needs validated machine-readable outputs; a language prompt alone is not proof that ties are present or correctly installed. Count/presence checking does not certify installation quality or structural acceptance.

Source C's optional chain is: voice/text note → transcription → intent/urgency suggestion → human-reviewed routing. Explicit urgent help must function even when this chain fails. The prototype may explain this future chain but must disclose if it is not executed.

Production blockers: validated task standards and accountable owners; compatible hardware/capture access; scene visibility and position alignment; supported pre-cover control integration; calibrated per-task thresholds and representative labeled evaluation data; reviewer authority/capacity; offline release policy; approved support availability/escalation; evidence governance. These block production, not a clearly labeled simulation.

## 13. Build completion checklist after approval

- All six required scenarios pass their acceptance criteria with reset/replay.
- No critical path reaches cover eligibility through missing evidence, low-confidence result, possible mismatch alone, wrong revision, or disconnected reviewer.
- New evidence/count revisions invalidate prior results; late events cannot restore invalid eligibility.
- Offline records survive reload and sync once; storage errors and failed requests remain visible.
- In-job History reconstructs a retake/rework path; no AI-only adverse record or installation certification appears.
- Laptop/tablet layouts remain legible; keyboard and primary target-size checks pass.
- Core demo runs with external network unavailable after setup and labels synthetic data/results consistently.
- Provide start instructions and a short presenter walkthrough; approval of this PRD precedes all implementation.

## 14. Decisions for Yi's review

Recommended defaults, not yet approved:

1. **Demo anchor:** reinforcement ties on L5, ten illustrative planned positions; other queue items provide context.
2. **Build scope:** all P0 features and six scenario branches above; P1 features remain future concepts.
3. **Live behavior:** stateful simulated events and verification, with deterministic presenter controls; no live Titan connection or claimed trained vision model.
4. **Reviewer surface:** a second workspace in the same app, switched by presenter; production identity/authorization is not simulated as real security.
5. **Delivery:** local browser demo first; decide hosting and repository when implementation is approved.

Approval wording can be simple: approve this scope, or identify feature/flow changes. Unresolved production feasibility is retained explicitly rather than treated as approval to ship.
