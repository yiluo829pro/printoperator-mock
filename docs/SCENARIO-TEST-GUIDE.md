# BuildOS prototype — scenario test guide

Version: role-separated P0 + P1 prototype. Test date: __________ Tester: __________

Live prototype: https://printoperator-mock.bronzegiant10.chatgpt.site

## Start here

This prototype has no real login. In a deployed product, signing in would select an authorized workspace. Here, use **Workspace role** in the blue Presentation row to preview that experience. The selector does not authenticate users or enforce security. No real print, support message, voice recording, AI inference or weather feed is connected. All outcomes and readings are fixtures.

For a clean test, open the page or reload it, then select Print operator. Reset walkthrough clears the current session's records. Do not reset between roles when testing a handoff: the task/help state must carry across. Reload also clears the session. The Go offline button changes the illustrated connection state; it does not disconnect your internet.

Use Pass / Fail / Not tested for each scenario. Record the step, actual result and screenshot for any failure.

## Workspace map

| User | Header color | Modules | Expected responsibility |
|---|---|---|---|
| Print operator | Dark navy with turquoise role badge | Live job, Site status, Equipment, History | Perform tasks, check local conditions, request help, record observations |
| Site lead | Warm brown with amber role badge | Review, Site status, Equipment, History | Review count/presence and release resolved site holds |
| ICON Support | Purple with lavender role badge | Support requests, Updates, History | Review/reroute help requests, own callbacks, publish issue updates |

The blue Presentation row and its Reset button belong to the presenter. Updates contains product/support issue records; it is not GitHub commit history. GitHub stores the prototype source and documentation separately.

## 01 — Arrive as a print operator

Precondition: reload the page.

1. Select **Print operator** in Workspace role. Expect a navy operator header and Live job selected.
2. Confirm the job is TexNext Ranch / Lot 23, layer 5, with the manual task waiting.
3. Read the layout from left to right: print visual, task queue, Your Action.
4. Check the navigation. Expect Live job, Site status, Equipment and History. Support requests and Updates must not appear as operator modules.
5. Click Material refill in the task queue. Expect an ICON-team-owned detail with its arrival estimate and no operator Complete button.
6. Click Return to your task. Expect reinforcement ties and the ten planned positions.
7. Open RT-01 · standard v1.2 in instruction item 4. Expect a reference drawer; close it to return without losing the task.

Result: ______ Notes: ______________________________________

## 02 — Complete the critical manual task

Precondition: operator workspace, fresh task.

1. Click Acknowledge task. Expect count-confirmation controls to appear.
2. Click Confirm 10 ties placed. Expect 10 / 10 placed and Evidence controls. Continuing must still be blocked.
3. Click Capture frame. Expect a task/layer-bound frame and a verification-outcome selector.
4. Keep Count matches and click Verify count and presence. Expect count/presence verified, 98% confidence and cover eligibility.
5. Click Continue to next layer. Expect the print to advance to layer 6 and the button to become disabled as Next layer started.
6. Open History. Expect separate acknowledgment, attestation, evidence, verification and continuation events.

Check: verification must never claim correct installation or structural acceptance.

Result: ______ Notes: ______________________________________

## 03 — Record a different count, then correct it

Precondition: reset, acknowledge task.

1. Click Edit placed count, enter 8 and add a reason such as two components missing.
2. Click Record count. Expect 8 / 10 placed. The standard remains 10; it must not silently become 8.
3. Capture a frame. Expect verification disabled while the attested count differs.
4. Click Confirm 10 ties placed after the conceptual correction. Expect a new attestation revision; previous evidence/check is invalidated.
5. Capture a new frame and verify Count matches. Expect eligibility only after the new check.
6. Open History. Expect the count amendment and new attempt to remain distinguishable.

Result: ______ Notes: ______________________________________

## 04 — Hand an uncertain result to the site lead

Precondition: operator has acknowledged, attested ten and captured a frame.

1. Select Human review needed in the verification selector and run the check.
2. Expect uncertainty at 72%, blocked cover and an Open reviewer workspace action.
3. Click Open reviewer workspace, or select Site lead in the Presentation role selector.
4. Expect an amber site-lead header and Review selected, with evidence on the left, queue in the middle, decision on the right.
5. Leave Decision reason empty and click Confirm 10 ties present. Expect a prompt to add a reason; no release.
6. Enter a reason and confirm ten ties present. Expect the human confirmation event and cover eligibility.
7. Select Print operator in the Presentation row. Expect the same task with the lead's result preserved.
8. Continue to the next layer. Expect layer 6 only after confirmation.

Result: ______ Notes: ______________________________________

## 05 — Retake or rework

Precondition: reset; prepare the task through evidence capture.

A. Retake:
1. Select Capture needs retake and run verification. Expect a retake request, not a failed-work verdict.
2. Click Retake clear frame, then verify again. Expect the new attempt to succeed and prior retake event in History.

B. Rework:
1. Reset and prepare the task again. Select Possible discrepancy and verify.
2. Open reviewer workspace. Expect matching-count approval disabled; the machine result alone does not confirm a discrepancy.
3. Enter a reason and click Confirm discrepancy · rework. Expect a human-confirmed rework request and blocked cover.
4. Return to the operator workspace if necessary. Click Work corrected · start new attempt.
5. Confirm the count, capture new evidence, and verify. Expect eligibility only after this new accepted attempt.

Result A: ______ Result B: ______ Notes: ______________________

## 06 — Request help with a voice note

Precondition: Print operator, Live job, connected.

1. Click Get help. Expect an inline section within Your Action, with task/layer/job and machine context attached automatically. The model and queue stay visible; no global overlay appears. Use Back to task to close it.
2. Click Record voice note. Expect a recording indicator and Stop recording. No browser microphone is actually used.
3. Click Stop recording. Expect a predefined transcript.
4. Edit the transcript, then click Use this note. Expect the edited text in the help note.
5. Click Request help. Expect submission status and a suggested request type/summary awaiting support review.
6. Operator view must not show the support coordinator's editing controls.
7. Select ICON Support in the Presentation row. Expect a purple header, Support requests selected and the request visible with its context.
8. Click Review routing and callback. Expect request type and priority controls.
9. Confirm routing · assign Alex. Expect assigned ownership and a routing event in History.
10. Switch back to Print operator and open Get help. Expect the request and routing state preserved.

Result: ______ Notes: ______________________________________

## 07 — Explicit urgent help and callback

Precondition: connected operator in Get help.

1. Click Urgent help. Expect an urgent assistance request independently of voice interpretation.
2. Switch to ICON Support, open routing review and check priority. Expect Urgent.
3. Try selecting Standard and confirming routing. Expect the explicit operator urgency to remain urgent.
4. Click Acknowledge callback. Expect Alex to own the callback and Record completed callback to become available.
5. Record completion. Expect callback completion in History.
6. Switch to operator and reopen Get help. Expect the request/callback state to remain visible.

No actual call or message is sent.

Result: ______ Notes: ______________________________________

## 08 — Offline help and evidence recovery

Precondition: fresh operator task.

1. Click Go offline beside Connected. Expect Offline and stale data labeling.
2. Acknowledge the task, attest ten and capture a frame. Expect locally queued evidence; verification and continuation are disabled.
3. Open Get help. Expect voice transcription unavailable and text entry available.
4. Type a note and request help. Expect queued locally, not acknowledged or delivered.
5. Switch to ICON Support. Expect no enabled routing action while offline.
6. Reconnect. Expect queued help submitted and evidence available for verification. Reconnect must not itself verify or release the cover gate.
7. Return to the operator task and run the check to proceed.

Limitation: this is an in-memory walkthrough. Reload does not preserve offline evidence.

Result: ______ Notes: ______________________________________

## 09 — Weather check, site hold and recovery across modules

Precondition: operator, Site status, Weather selected.

1. Read weather conditions and the referenced procedure. All limits in this prototype are illustrative.
2. Enter an observation and click Conditions checked · within limits. Expect a recorded decision.
3. Change Presenter: condition to Wind warning. Expect the prior current decision to clear, wind above the fixture limit, site hold and disabled within-limits confirmation.
4. Open Live job. Expect the site hold to remain and continuation blocked even if the task was verified.
5. Return to Site status. Open Site lead: review hold. Expect site-lead responsibility, reason entry and review context.
6. Attempt release while Wind warning is active. Expect refusal; the hold remains.
7. Close the drawer, set condition back to Within limits, then reopen hold review.
8. Enter the lead's reason and release. Expect the site hold cleared, with the decision in History. This does not satisfy an unresolved task verification.

Result: ______ Notes: ______________________________________

## 10 — Mix-readiness decision

Precondition: operator, Site status.

1. Select Mix readiness. Expect the test bead reference and material-team status.
2. Enter an observation and click Test bead matches reference. Expect a material-check event.
3. Change Presenter: condition to Bead differs. Expect the acceptance action disabled and a site hold.
4. Click Ask material team to review with a reason. Expect a review request in History.
5. Get help must remain available. The screen must not tell the operator to invent or adjust a material ratio.
6. Restore Ready for check and have the site lead review/release the hold with a reason.

Result: ______ Notes: ______________________________________

## 11 — Camera and telemetry checks

Precondition: operator, Equipment.

1. Select Print-head camera. Expect pre-cover capture context, ten expected ties, model/policy identifiers and a count/presence scope.
2. Click Open reinforcement task. Expect the operator task with evidence attached, not automatic eligibility.
3. Return to Equipment and select Material delivery. Expect pressure/flow trend and delivery status.
4. Record equipment check in the expected-signal state. Expect a History event.
5. Select Pressure and flow and change Presenter: signal to Needs review. Expect rising pressure, falling flow, possible restriction, disabled normal-check action and a site hold.
6. Request equipment review. Expect the review event, not a confirmed diagnosis.
7. Return to Live job. Expect the hold to persist across modules.
8. Restore Expected signal, then have the site lead review/release the hold. Task verification remains separate.

Result: ______ Notes: ______________________________________

## 12 — Support reviews recurring issues and publishes an update

Precondition: operator has optionally flagged an issue; do not reset before switching roles.

1. Select ICON Support in the Presentation row. Expect purple support header, Support requests, Updates and History; no operator-only Live job navigation.
2. Open Updates. Expect issue groups on the middle queue and the proposed crew-facing update on the left.
3. Select Tie reference clarified, Refill updates or Voice notes in Get help. Expect the detail to change immediately.
4. Review the category, report counts, owner and proposed update. This is support/product issue information, not GitHub activity.
5. Click Publish operator update with an empty review note. Expect a required-note prompt.
6. Add the owner's review note and publish. Expect Published to affected crews and an event in History.
7. Open Support requests to return to active assistance work.

Limitation: publication is a local prototype state. No notification is delivered to a real crew.

Result: ______ Notes: ______________________________________

## Final checks

- Presentation controls remain visually separate from the three user workspaces.
- Every screen and drawer ends with the simulation disclaimer.
- No machine check is described as structural acceptance.
- A disconnected support request never appears acknowledged before reconnect.
- State transfers across role switches; Reset/reload intentionally clears the walkthrough.
- Role switching is for demonstration only. Production login, access control, audit integrity, data persistence and integrations remain future work.

## Defect log

| Scenario / step | Expected | Actual | Severity | Screenshot / notes |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Future concepts — scenarios 13–18

Select **Future concepts** in Workspace role. These are isolated exploratory flows; they do not operate the P0/P1 live job or real hardware. Each has an Assumptions and open questions section. See [scope addendum](FUTURE-CONCEPTS.md).

### 13 — Exception coordination

1. Open Exception coordination. Expect delayed-refill details and an unassigned owner.
2. Confirm supply available and Open held task must be disabled initially.
3. Assign responsible team. Expect Maya / ICON Logistics and supply-confirmation enabled.
4. Confirm supply. Expect the exception resolved; construction task verification is still required.
5. Change Exception to Missing ties. Expect the ownership/resolution reset and a ten-required/eight-available scenario.
6. Assign and confirm supply, then Open held task. Expect the normal operator task, not an automatically completed task.

Result: ______ Notes: ______________________________________

### 14 — Pause and restart

1. Open Pause and restart. Expect restart blocked and four ordered checks.
2. Click Record check without a note. Expect a required-note prompt and no progress.
3. Enter a note for each of the first three checks and record it. Expect one step to advance per confirmation.
4. Enter the site lead's reason and Authorize restart. Expect restart authorized, not automatic task verification.
5. Restart checklist from beginning. Expect all checks cleared and restart blocked again.

Result: ______ Notes: ______________________________________

### 15 — Multi-machine supervision

1. Open Multi-machine supervision. Expect T-001 awaiting task review, T-002 printing normally, T-003 awaiting logistics.
2. Select T-001 and assign the on-call team. Expect assignment for T-001 only.
3. Select T-002. Expect no assignment action required; it remains printing normally.
4. Select T-003. Expect independent logistics context and no inherited clearance/assignment.
5. Return to T-001. Expect its assignment preserved.
6. Open machine context. Expect the selected machine's contextual status. This is a concept summary, not a separate control connection.

Result: ______ Notes: ______________________________________

### 16 — Autonomous supply

1. Open Autonomous site. Advance the first three supply stages.
2. Expect a stop at Supervisor confirmation; Print sequence ready must still be pending.
3. Click Supervisor confirms readiness. Expect sequence-ready; no real equipment moves.
4. Reset the walkthrough, re-enter Future concepts and Autonomous site.
5. Advance a stage, then Show failed delivery. Expect a held/retry message and return to the initial supply stage.
6. Open assumptions. Expect hardware, sensing and material-validation dependencies.

Result: ______ Notes: ______________________________________

### 17 — Robotic placement

1. Open Robotic placement. Expect initial human component presentation.
2. Advance through path proposal to work-zone confirmation.
3. Show blocked work zone. Expect stage 3 and a hold message.
4. Explicitly Confirm work zone clear to advance; do not interpret the button as proof that a real zone was inspected.
5. Advance placement. Expect final Human checks count and presence stage.
6. Record inspection requirement. Expect a reminder that human inspection remains required, not automatic certification.

Result: ______ Notes: ______________________________________

### 18 — Wall-system redesign

1. Open Wall system redesign. Expect current electrical sleeves versus a proposed integrated channel.
2. Read the design/certification warning. It must not claim that components can safely be removed.
3. Record design-review dependency. Expect a recorded dependency, not construction approval.
4. Select Vertical core detail. Expect a different comparison and a fresh review-dependency action.
5. Return to Print operator via the Presentation selector. Expect current operator navigation with no future-concept controls added to the job.

Result: ______ Notes: ______________________________________

## AI help v2 — scenarios 19–22

### 19 — Compare preserved v1 and in-card v2

1. Print operator → Live job → Help version v1. Open Get help. Expect the existing voice/text human-support flow inside Your Action.
2. Select v2 · AI copilot. Expect a conversation inside the same card, not a full-screen overlay. Flag issue remains unchanged.
3. Ask Where do the ties go? Expect layer/count guidance and an RT-01 citation.
4. Open the citation. Expect the versioned source passage inside the card.
5. Compare the task count, eligibility and any site hold before/after. The reply must not change them.

Result: ______ Notes: ______________________________________

### 20 — Unknown question, missing source and offline behavior

1. In v2, type an unrelated question. Expect no invented procedure and an offer to contact ICON Support.
2. Expand Presenter: knowledge availability and select Source unavailable. Ask a task question. Expect abstention and human support, not a reference-backed answer.
3. Go offline. Expect Send question and Ask ICON Support disabled. No receipt or response should be fabricated.
4. Reconnect and restore source availability. Expect the operator can ask again; no task gate is automatically released.

Result: ______ Notes: ______________________________________

### 21 — Copilot handoff to human support

1. Ask a task question in v2, then Ask ICON Support.
2. Expect conversation/context attached and acknowledgment still pending.
3. Switch to ICON Support. Open Support requests. Expect operator and copilot transcript content with task/layer context.
4. Route the request using the existing support-coordinator flow.
5. Return to Print operator, keep v2 selected, and confirm the conversation remains available during the session.

Result: ______ Notes: ______________________________________

### 22 — Evaluate groundedness, helpfulness and harmlessness

1. ICON Support → AI evaluation. Expect illustrative-data disclosure, three metrics and pass-count denominators.
2. Select E-106. Expect Groundedness Pass, Helpfulness Fail, Harmlessness Pass: a reference alone is insufficient.
3. Select E-107. Expect an unsupported draft held for review, not an invented verified source.
4. Select E-108. Expect a failed harmlessness test and a blocked-before-delivery disposition, not unsafe instructions.
5. Select a current-session S trace if present. Expect the operator question, scripted reply and source, plus fixture-derived judgments.
6. Try recording a review without a reason. Expect a prompt and no saved review.
7. Add a reason and agree/disagree. Expect a saved human review and History event; metric percentages must not silently change.
8. Switch to Print operator. AI evaluation must not appear in operator navigation.

Result: ______ Notes: ______________________________________
