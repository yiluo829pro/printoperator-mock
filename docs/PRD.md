# ICON live-job operator demo — specification-based PRD

Version 1.1 · Updated October 28, 2026 · **Current published prototype specification**

Implementation and publication have been authorized. This revision reconciles P0/P1, P2/moonshot concepts, help v1/v2, role separation, and the all-tab embedded-assistance change in published version 11. Requirements describe the prototype unless explicitly marked as a production target. No production readiness is implied.

## 1. Purpose and source

Build an interactive demonstration of how a BuildOS-inspired live-job task flow could help an operator understand a critical manual task, attest to the work, obtain contextual help, and resolve verification before the affected print area is covered.

The delivered prototype is a working browser demo with stateful interactions and simulated live job events. It is an interview prototype, not a connection to Titan, an official ICON product, or a validated inspection system.

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

**P0 and P1 are included as scripted prototype flows. P2 and moonshots are included in an isolated Future concepts workspace. Help v2 is an optional comparison with preserved v1.** Production sequencing remains task guidance and attestation first, validated automation later.

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
| F14 | Camera evidence and pump/flow readiness fixtures | P1 | S D; real inference/telemetry remain production dependencies |
| F15 | Recurring issue aggregation and feedback loop | P1 | S C; beyond core live-task demo |

Outside the connected implementation: onboarding, post-job reporting, billing, production authentication, dispatch services, real robot control, validated automatic material/weather advice, autonomous hardware, real multi-machine control, and production ML training. Multi-machine supervision and autonomous-site interactions are included only as separate exploratory concepts. In-job History is included because it explains the current task's evidence, not as a reporting product.

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
| Embedded help / issue | Get help and Flag issue render inside the current task/action card across tabs; no full-height right drawer, dimmed backdrop, or modal assistance overlay |
| Reviewer workspace | Pending cases, task standard, operator attestation, image, simulated result/confidence, freshness, decision and reason |
| In-job History | Ordered events, evidence links, revisions, model/policy identifiers, human decisions, current eligibility |
| Presenter controls | Blue first row: Workspace role, Reset walkthrough, and Live-job Help version v1/v2. Scenario selectors live in the relevant fixture cards. Second row: BuildOS / Field operations or Support operations, tabs, role badge, connection and Go offline/Reconnect |

Design direction: navy `#131720`, white primary text, legible blue-gray secondary text, cyan focus/progress, explicitly labeled orange exception and green successful states. Use the existing design research's task/phase/layer structure. Font choice depends on locally available, embeddable files; do not assume Lightspeed availability. A model may be an interactive schematic or lightweight 3D view; accurate task-position highlighting takes precedence over photorealism.

## 7. Functional requirements and acceptance criteria

### F01 — live job and actor queue

- Every queue item must show actor (`Operator`, `Titan`, `ICON team`), phase, current/upcoming status, and relevant layer or time context. Actor and assignment are separate fields.
- Machine/status entries must not show an operator completion action. Selecting an item must update its detail and relevant spatial highlight.
- Progress must be driven by one shared simulation state, not independent decorative counters. Blocking the cover action must stop its simulated advancement.
- **Acceptance:** switching between actor items preserves task inputs; the ten-position task highlights L5; a pending gate prevents entry into its dependent cover action.

### F02 — task standard

- The critical card must show required count, units, component illustration, position IDs, approved-content status/version, and task scope.
- Use direct operator guidance in the working cards. Put the simulation disclaimer at the end of every screen/assistance section; do not repeat marketing or “fictional/demo support” language in task instructions. References and weather/mix thresholds are illustrative, not ICON-approved procedures.
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
- Save evidence ID, job/task/layer/item, capture/import time, source, attestation revision, and sync status. A fixture must be disclosed by the screen/footer as simulated; an imported image is not proof of capture time or scene identity.
- When offline, save to a local queue where supported; display queued vs synced states explicitly. If storage fails, display failure and preserve the unresolved gate.
- **Prototype acceptance:** offline capture is queued within the current page session; reconnect makes it available without automatically verifying the task. Reload clears it. **Production target:** durable local storage, storage-failure handling, and idempotent sync across reloads.

### F05 — verification and cover gate

- The screen/footer must explicitly disclose that verification results are simulated. Arbitrary uploaded images must not receive a fabricated claim of actual visual analysis.
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

- Get help opens an inline region inside the current task/action card on every tab where it is available, including Live job, Site status (Weather and Mix readiness), and Equipment (camera, delivery, pressure/flow). Flag issue follows the same shared rule. If no action card exists, assistance uses an in-flow card in the main content. Never use a full-height right assistance panel, modal backdrop, or whole-software overlay.
- Back to task closes assistance without changing the current module or task gate. Existing form fields and action controls remain accessible. Navigation may retain open assistance; if retained, it must still render inline. Reference/count editors and authorized review dialogs are separate interactions and are not covered by this assistance-only rule.
- Current limitation: the shared human-help context remains the reinforcement task fixture even from site/equipment screens. Module-specific context snapshots are a production follow-up, not implemented context accuracy. Help v2 is selectable only on Print operator / Live job.
- Help states: draft, queued locally, submitted in simulation, acknowledged in simulation, assigned, resolved. Do not show real receipt, availability, or response-time promises.
- Two-tap issue capture means tap “Flag issue,” then one reason. Reasons include unclear instruction, count/position differs, component missing, equipment/material issue, and other. Optional text can follow; sending a report must not require a note.
- Urgent help is an explicit separate route, not dependent on classification. In this prototype it opens a labeled simulated escalation with acknowledgment controls; it places no call and sends no message.
- **Acceptance:** all exposed help/flag entry points remain inline; a flag can be recorded with two taps; the attached fixture context is visible; offline requests say queued and do not show acknowledged; a flag by itself neither pauses nor releases the cover gate. Help and cover eligibility remain separate.

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
- Presenter can switch workspace, select verification/condition/equipment fixtures, compare help versions, and reset to a known session. Continuous time playback and arbitrary event injection are not implemented.
- Reset clears only the in-memory walkthrough. Unsynced records are discarded; a discard-confirmation dialog is a future usability target, not currently implemented. No external systems are affected.
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

- Published at https://printoperator-mock.bronzegiant10.chatgpt.site/ with source/docs in https://github.com/yiluo829pro/printoperator-mock. Standalone prototype.html also runs locally without API integrations.
- Current state is in memory: role/tab changes preserve the session; reload and Reset walkthrough clear it. Durable offline storage/IndexedDB and cross-device synchronization remain unimplemented production targets.
- Target laptop presentation and landscape tablet layouts (approximately 1366×768 and 1024×768). Primary controls at least 48×48 CSS px, keyboard reachable, with visible focus and explicit labels. Test daylight/glove suitability later on actual hardware.
- Status must use text/icons in addition to color. Normal text target contrast at least 4.5:1; avoid copying the source's low-contrast tiny metadata.
- Local interactions should respond within 200 ms on the presentation device; simulated inference delays are intentional and labeled. Heavy graphics must not compromise the core workflow.
- A bounded verification failure/timeout routes to unresolved review rather than spinning forever or releasing the gate. Proposed demo timeout: ten seconds of simulation time.
- No real AI endpoint is required for P0. If AI is added later, document actual prompts/models, inputs, outputs, edits, and limitations. Never describe a scenario fixture as a real inference chain.

## 12. AI and production dependencies

Source D's intended chain is: task/layer/item → attestation → pre-cover image → detector outputs → confidence policy → scoped result/human review → in-job evidence record. A detector needs validated machine-readable outputs; a language prompt alone is not proof that ties are present or correctly installed. Count/presence checking does not certify installation quality or structural acceptance.

Source C's optional chain is: voice/text note → transcription → intent/urgency suggestion → human-reviewed routing. Explicit urgent help must function even when this chain fails. The prototype demonstrates this chain using scripted transcript/routing fixtures and discloses that no live services are executed.

Production blockers: validated task standards and accountable owners; compatible hardware/capture access; scene visibility and position alignment; supported pre-cover control integration; calibrated per-task thresholds and representative labeled evaluation data; reviewer authority/capacity; offline release policy; approved support availability/escalation; evidence governance. These block production, not a clearly labeled simulation.

## 13. Build completion checklist after approval

- All six required scenarios pass their acceptance criteria with reset/replay.
- No critical path reaches cover eligibility through missing evidence, low-confidence result, possible mismatch alone, wrong revision, or disconnected reviewer.
- New evidence/count revisions invalidate prior results; late events cannot restore invalid eligibility.
- Offline queued records are demonstrated only within the page session; reload clears them. Durable storage and failure recovery are tracked as production gaps.
- In-job History reconstructs a retake/rework path; no AI-only adverse record or installation certification appears.
- Laptop/tablet layouts remain legible; keyboard and primary target-size checks pass.
- Core demo runs with external network unavailable after setup and labels synthetic data/results consistently.
- Provide current run instructions and the scenario test guide. P0, P1, future concepts, AI comparison, and publication were approved during the discussion.

## 14. Current workspace and layout requirements

| Role | Style | Navigation |
|---|---|---|
| Print operator | Navy / turquoise | Live job, Site status, Equipment, History |
| Site lead | Amber | Review, Site status, Equipment, History |
| ICON Support | Purple | Support requests, Updates, History, AI evaluation |
| Future concepts | Teal / explicit concept banner | Six P2/moonshot views |

- Live job uses Print visual → Task queue → Your Action. Review uses evidence → Review queue → Human decision.
- Brand text is BuildOS / Field operations; support uses / Support operations.
- First row is the distinct blue Presentation row; Reset belongs to the presenter. Connectivity and Go offline are in the operational header below it.
- Task instructions live in Your Action. Do not restore the duplicate “Now - Layer 5” guidance card. RT-01 is a link in instruction item 4.
- Use operator-facing Get help wording. Do not restore marketing headings or duplicate Site conditions / Camera & pump checks tab shortcuts.
- Role selection is a presentation mechanism, not authentication. Updates is support/product issue handling, not GitHub commit history.

## 15. P1 implemented interaction requirements

- F11: scripted record/stop, predefined transcript, editable text, Use this note; no microphone or transcription service. Offline voice unavailable.
- F12: suggested routing with human confirmation, explicit urgent priority retained, callback ownership/completion recorded by support; no real message/call.
- F13: weather and mix fixtures, reason-required decisions, warning holds, resolution and site-lead release; a site hold blocks continuation independently of task verification.
- F14: camera evidence opens the task without granting eligibility; delivery/pressure/flow fixtures support check or review and hold; no inferred diagnosis.
- F15: recurring issue group selection, owner-review note, publish-to-crews fixture state and History event; no real notification.

## 16. P2 and moonshot requirements — F16–F21

| ID | Priority | Feature | Required interaction |
|---|---|---|---|
| F16 | P2 first | Exception coordination | Assign owner before confirming supply; missing-ties/refill scenarios; no task auto-completion |
| F17 | P2 second | Pause and restart | Four ordered note-required stages; final site-lead authorization |
| F18 | P2 third | Multi-machine supervision | Independent machine selection/assignment; no inherited clearance |
| F19 | Moonshot | Autonomous supply | Staged progress, failed-delivery branch, supervisor confirmation before ready |
| F20 | Moonshot | Robotic placement | Work-zone confirmation, blocked-zone branch, human inspection requirement |
| F21 | Moonshot | Wall-system redesign | Separate alternatives and recorded design-review dependency; no certification claim |

These flows use separate session state from P0/P1. Three machines are fixtures, not a validated staffing ratio. See [Future concepts](FUTURE-CONCEPTS.md) for prerequisites and acceptance rules.

## 17. Help v2 and AI evaluation — F22–F23

- F22: Preserve v1 at codex/help-v1 and versions/help-v1/prototype.html. V1 remains default. On operator Live job, Help version switches Get help to an in-card AI conversation. Flag issue stays unchanged.
- Scripted questions/replies and inline versioned citations; unavailable/unknown source abstention; offline answer/escalation disabled; human handoff carries the transcript. Replies never operate equipment, release holds, or certify work.
- F23: ICON Support-only AI evaluation. Groundedness checks source support; Helpfulness checks usefulness for the specific problem; Harmlessness checks negative live-job/human impact.
- Eight fixed traces plus current-session scripted traces; explicit pass denominators and illustrative-data disclosure. Human review needs a reason and is logged separately without silently changing scores.
- No real model, internal wiki retrieval, benchmark, microphone, printer or support service is connected. See [AI support v2](AI-SUPPORT-V2.md).

## 18. Traceability and verification status

[Scenario guide](SCENARIO-TEST-GUIDE.md): 01–05 core workflow/review; 06–08 help/offline; 09–12 P1; 13–18 future concepts; 19–22 AI; 23–25 all-tab embedded assistance and layout regression.

The guide is a manual acceptance plan, not proof every case has been executed. Record Pass/Fail/Not tested for each run. Earlier local browser checks verified inline Site status help, Equipment help, and Live-job Flag issue. Do not infer all role/subtab combinations passed from those checks.

Known specification targets not fully implemented include durable evidence storage, arbitrary local-image import/validation, complete production event schema, standard-version mutation, fine-grained freshness timing, production identity/authorization, and real integrations. Data and measurement schemas in sections 9–10 remain target contracts, not evidence of backend implementation. Accessibility/latency targets require measured verification.

## 19. Revision history

- October 26: original planning baseline.
- October 27: P0/P1 and role workflows; future concepts; help v1 preservation and v2/evaluation; full-page screenshots; all-tab assistance fix published as version 11.
- October 28: specification and test guide reconciled with current source and published scope; stale approval/hosting/scope statements removed; implementation gaps and all-tab regressions made explicit.
