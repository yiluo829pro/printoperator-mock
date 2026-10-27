# ICON case study — discussion and decision record

Compiled October 27, 2026 for Yi Luo.

This is a consolidated record of the ICON discussion available in this chat, cross-checked against the repository documents. It summarizes requests, decisions, and resulting scope; it is not a verbatim transcript. Where earlier assistant responses or exact time estimates are unavailable, they are not reconstructed. The original PRD is a historical specification baseline; later decisions below extend or supersede its presentation and prototype scope.

## 1. Purpose and deliverable

Yi is preparing for an onsite ICON product manager interview. The work began as research for a proposal presentation deck and evolved into a real-time, clickable browser prototype. Yi explicitly preferred an interactive demonstration over slides or a PDF, without yet building a production application.

Initial instruction: research first and use plan mode before implementation. Review the case-study document, including its appendix, assess whether it supports a specification-based PRD, draft requirements, and wait for approval before building. Yi subsequently authorized P0, P1, P2/moonshot exploration, publication, and GitHub updates.

The resulting deliverable is an interview proposal inspired by BuildOS, with operator, site-lead, support, and future-concept workflows. It is not an official ICON product or a connected printer system.

## 2. Sources and project links

- [ICON website](https://www.iconbuild.com/)
- [Technology](https://www.iconbuild.com/technology)
- [BuildOS software reference](https://www.iconbuild.com/technology/software)
- [Case-study Google Doc](https://docs.google.com/document/d/119UT3-4QOche85NT768a-HUNtdzbwvwV7gJ75IGSVnQ/edit?usp=sharing)
- Supplied PDF: `converge-ch2-titan-field-ops-workflow.pdf`, containing 34 numbered showcase screenshots across 28 pages.
- Additional reference: `Screenshot 2026-10-25 at 12.38.36 PM.png`, showing the print visual and right-side task hierarchy.
- [GitHub repository](https://github.com/yiluo829pro/printoperator-mock)
- [Published prototype](https://printoperator-mock.bronzegiant10.chatgpt.site/)

Attached documents were treated as reference material, not as instructions overriding Yi's requests. The Google Doc's hypotheses and operational details were not treated as independently validated facts.

## 3. Design research and reusable direction

Yi requested a reusable summary of ICON's font style, backgrounds, colors, and overall design language, including the software patterns in the PDF.

The research identified three related contexts:

| Context | Design language | Application |
|---|---|---|
| Public brand | Large sans-serif typography, restrained navigation, broad space, construction imagery | Presentation opening and narrative |
| Technical showcase | Slate backgrounds, white models, thin rules/leaders, cyan anchors, phase/layer rails | Workflows and system explanations |
| BuildOS interface | Dark model viewport, compact task controls, layer numbers, timelines, resource readiness | Operator experience and proposed interactions |

Website observations included Lightspeed for major typography, Roboto Mono for technical metadata, and Roboto in supporting text. Verified website colors included navy `#131720`, white `#FFFFFF`, and blue-gray `#95A1B5` / `#576781`. Cyan is a recurring showcase emphasis; orange and green communicate exceptions and completion with labels.

Font identity and exact tokens inside raster screenshots were not verified. These observations are not an official brand guide. A faithful proposal should preserve the relationship between physical system, spatial model, current layer, and next human action.

Full reference: [Design research](DESIGN-RESEARCH.md).

## 4. Problem framing and PRD readiness

The case material was sufficient for a specification and scripted demonstration, but not for a production release. The main hypotheses were:

- Generic guidance may leave job-specific judgment unsupported.
- Asking for help may require too much effort and repeated context.
- Completion can hide friction experienced during the task.
- Acknowledged completion does not establish count/presence or installation quality.

The prototype anchors these ideas in a reinforcement-tie task: layer 5, ten marked positions. These values are scenario fixtures, not engineering standards.

The intended outcome is reducing avoidable task-related delay without degrading safety, quality, or overall job duration. More browsing, engagement, or fewer tickets are not goals by themselves.

Key specification distinctions:

- Acknowledgment, count attestation, evidence, verification, human decision, and permission to cover are separate states.
- A possible mismatch is not automatically a confirmed installation failure.
- Offline evidence or help must show local versus submitted status.
- Camera feasibility, weather/mix rules, reviewer authority, and real support coverage require validation.
- Outcome baselines and improvement percentages must not be invented.

Full baseline: [PRD](PRD.md). Its original draft/authorization labels describe the initial planning stage, not the later approvals recorded here.

## 5. Format, repository, and implementation approvals

Discussion sequence:

1. Yi asked whether a new GitHub repository was needed.
2. Yi clarified the goal was a real-time demo, not slides/PDF alone.
3. Yi supplied the case-study document and requested the PRD before approving implementation.
4. Yi created `yiluo829pro/printoperator-mock` and requested readiness checks, priorities, and P0/P1 timing.
5. Yi proposed a clickable P0/P1 demo before a production app.
6. Yi approved: “Sounds good, lets do P0 prototype now.”
7. Yi later authorized publication, GitHub updates, P1 implementation, and future-concept implementation.

The chosen format is a browser-based clickable prototype, with a standalone `prototype.html` and editable web sources. It can run locally or from the public published URL.

Exact earlier timeline estimates are not preserved in the available discussion record. Priority order is preserved below; no new estimate is presented as an earlier commitment.

## 6. Priorities and scope evolution

### P0 — complete operator loop

- Live-job shell, focused task, actor-labeled queue.
- Layer-specific positions and component/reference guidance.
- Count attestation and amendment.
- Task-bound evidence and offline visibility.
- Scripted verification outcomes and cover eligibility.
- Human review, retake, rework, and decision history.
- Contextual Get help and Flag issue.
- Connection/recovery behavior.
- Presenter walkthrough and reset controls.

The primary journey is: inspect task → perform conceptual work → confirm count → capture evidence → check result → resolve any uncertainty with a reviewer → observe eligibility/history.

### P1 — supporting field and support workflows

Yi requested continued implementation after P0.

- Voice-note/transcript interactions.
- Note classification/routing and urgent help/callback flows.
- Weather/site-condition and mix-readiness decisions.
- Camera/pump/equipment readiness interactions.
- Recurring issue review and support update loop.
- Cross-module holds, recovery, and history.

These are scripted prototype interactions. Real speech services, inference, telemetry, operational thresholds, and support delivery remain production dependencies.

### P2 — coordination and recovery

Yi asked whether P2 and moonshot ideas had been prioritized and requested scoping and prototype implementation, then approved proceeding.

| Order | Concept | Prototype behavior |
|---|---|---|
| First | Exception coordination | Assign an owner for missing supplies/delayed refill, confirm supply, return to task |
| Second | Pause and restart | Record staged checks and require final site-lead authorization |
| Third | Multi-machine supervision | Inspect separate machine exceptions and assign teams per machine |

### Moonshots — exploratory concepts

- Autonomous replenishment/material control, including failure and supervisor-confirmation stages.
- Robotic reinforcement placement, retaining human work-zone confirmation and inspection.
- Wall-system alternatives that might remove manual dependencies, with explicit review dependencies.

The future-concept workspace is visually separate. Concept actions do not silently complete the P0/P1 live task. Hardware feasibility, structural approval, certification, and staffing ratios are not established by the prototype.

Full scope: [Future concepts](FUTURE-CONCEPTS.md).

## 7. Layout and information hierarchy decisions

Yi iteratively refined the interface to match field-operation use:

| Request | Agreed direction |
|---|---|
| Match the reference image | Print visual on the left, task queue between the visual and Your Action |
| Review queue was on the left | Use the same model → queue → action/decision hierarchy as Live job |
| Duplicate task-guidance card | Remove “Now - Layer 5: place 10 reinforcement ties” because Your Action already explains the work |
| Task reference placement | Move “Reference: RT-01 · standard v1.2” into the action instructions as a link to further guidance, at the requested bullet 4.5 position |
| Redundant feature navigation | Keep high-level feature names when subfeatures live in the same workflow; use distinct feature screenshots where useful |
| Duplicate Site conditions / Camera & pump checks shortcuts | Remove both from Live job because the tabs already provide navigation |
| Help and issue panel covered the software | Embed both inside the task / Your Action area, preserving access to the model and queue |

Yi also reported that the Site conditions and Camera & pump checks shortcuts did not react. The subsequent decision was to remove these duplicate shortcuts rather than retain parallel tab navigation.

## 8. Operator language and presentation controls

Yi repeatedly requested language addressed to the operator, not marketing or PRD language:

- Replace “The right context, at the right layer” with practical task guidance.
- Rename “01 - Clear result” to “Operator-centric task queue.”
- Replace “Task-bound assistance” and “You shouldn't have to explain the job twice” with “Get help.”
- Use `BuildOS / Field operations`, with the requested capitalization.
- Remove repeated “demo support,” “fictional,” and “Simulated” language from the working UI, while keeping a disclaimer at the end of each prototype explaining that content is simulated.

Presentation controls must be separate from operator controls:

1. First row: Walkthrough through Reset walkthrough, in a distinct presentation color.
2. Second row: BuildOS / Field operations, module navigation, connectivity.
3. Go offline belongs with the field-operations connection status.
4. Reset walkthrough is for the presenter, not a print-operator task action.

Earlier placement feedback put Go offline above “Waiting for manual task”; the later header instruction superseded that location.

## 9. User roles and workspace separation

Yi observed that merging all updates into one interface confused who the user was.

The distinction established:

| Workspace | Audience | Primary modules / purpose |
|---|---|---|
| Print operator | Person doing the construction work | Live job, Site status, Equipment, History |
| Site lead | Authorized reviewer | Review and relevant site/equipment/history context |
| ICON Support | Internal support team | Support requests, Updates, History, AI evaluation |
| Future concepts | Interview exploration | P2 and moonshot scenarios |

Operator workflows use navy/turquoise, support uses purple, site-lead review uses amber, and concepts use teal. Labels accompany color. Yi described Updates as support-team work associated with issue/record handling; it should not be confused with a print operator's live task.

The current prototype does not implement real authentication. The presentation role selector stands in for choosing a user perspective.

## 10. Help v1 — preserve task-embedded human support

Yi requested that the corrected embedded-help experience be retained as v1 before adding an AI alternative.

V1 principles:

- Get help and Flag issue belong to the selected task.
- Automatically carry job, layer, task, machine state, and relevant version/context.
- Keep the conversation or issue within Your Action rather than a whole-software overlay.
- Make offline, acknowledgment, ownership, urgent routing, and callback states explicit.
- Preserve the operator's work context.

The version is preserved in branch `codex/help-v1` and standalone `versions/help-v1/prototype.html`.

## 11. Help v2 — AI companion / copilot

Yi requested a conversational AI agent directly inside the task card, plus a support-side evaluation view.

Operator behavior:

- Choose v1 or v2 from the presentation controls.
- Ask a typed question or select a suggested prompt.
- Receive a task-context response with an inline source/reference.
- Expand source content without leaving the task.
- Escalate to human support with conversation/context attached.
- Abstain or route to a human when the question or source is unsupported.
- Do not imply offline submission or answering succeeded.

The current copilot uses scripted responses. No real model or internal ICON knowledge source is connected. A reply does not release a hold, certify work, or command a printer.

### Requested evaluation dimensions

Yi called the first dimension “Groundfulness”; the implementation/documentation uses the conventional term “Groundedness.”

| Dimension | Yi's requested question |
|---|---|
| Groundedness | Is the agent grounding its answer in the knowledge base, internal wiki, help articles, or playbook? |
| Helpfulness | Is the answer useful for the print operator's specific problem? |
| Harmlessness | Could the response harm the live print job or other people? |

The support-only view shows fixture traces, sources, identifiers, explicit denominators, and separate human agreement/disagreement judgments. Illustrative scores are not real model-performance evidence. A retrieved source is not automatically validated ground truth.

Full details: [AI support v2](AI-SUPPORT-V2.md).

## 12. Testing and scenario guide

Yi requested a test document written from the print operator's perspective: what happens on entry, what each click does, and how state moves across modules. Yi also requested uploading both the PRD and test guide to GitHub.

The guide now covers 22 scenarios:

1. Arrive as a print operator.
2. Complete the critical manual task.
3. Record a different count, then correct it.
4. Hand an uncertain result to the site lead.
5. Retake or rework.
6. Request help with a voice note.
7. Urgent help and callback.
8. Offline help and evidence recovery.
9. Weather check, hold, and cross-module recovery.
10. Mix readiness.
11. Camera and telemetry checks.
12. Support reviews recurring issues and publishes an update.
13. Exception coordination.
14. Pause and restart.
15. Multi-machine supervision.
16. Autonomous supply.
17. Robotic placement.
18. Wall-system redesign.
19. Compare v1 and in-card v2.
20. Unknown question, missing source, and offline behavior.
21. AI-to-human handoff.
22. Evaluate the three AI dimensions.

Full steps and expectations: [Scenario test guide](SCENARIO-TEST-GUIDE.md).

## 13. Publication, GitHub, and screenshots

Yi requested testing whether someone else could open a shared link, then explicitly authorized publishing the prototype, updating GitHub, and adding screenshots to the README.

The public URL avoids reliance on a local `file://` path or localhost server. GitHub hosts source and documentation; the published prototype is independently accessible without repository sign-in.

Yi later reported that some screenshots showed only part of the view and requested retaking all screenshots at full screen. The replacement set contains 18 full-page captures at 1280-pixel width with content-dependent heights, including headers and footers. README image links were updated to the replacement JPG files.

See [Full-page screenshot gallery](SCREENSHOT-GALLERY.md).

## 14. Current artifact map

| Artifact | Purpose |
|---|---|
| [README](../README.md) | Entry point, prototype link, screenshots, run instructions |
| [PRD](PRD.md) | Original specification and acceptance baseline |
| [Design research](DESIGN-RESEARCH.md) | ICON visual evidence and reusable patterns |
| [Scenario guide](SCENARIO-TEST-GUIDE.md) | Step-by-step cross-module walkthrough |
| [Future concepts](FUTURE-CONCEPTS.md) | P2/moonshot priorities and prerequisites |
| [AI support v2](AI-SUPPORT-V2.md) | Versioning, conversational scope, evaluations |
| [Screenshot gallery](SCREENSHOT-GALLERY.md) | Complete replacement captures |
| [This discussion record](ICON-DISCUSSION-RECORD.md) | Consolidated requests and decisions |

## 15. Remaining production questions

The discussion authorizes a prototype, not a connected production system. Before production, ICON would need to validate:

- Task standards, roles, inspection authority, and continuation rules.
- Camera visibility, inference performance, telemetry freshness, and failure handling.
- Weather/mix guidance and responsible content owners.
- Offline sync, authentication, authorization, durable audit records, and service reliability.
- Human support coverage, urgent routing, and response expectations.
- AI source ownership, permissions, retrieval quality, evaluation rubrics, and monitoring.
- P2 coordination policies and physical feasibility of moonshots.
- Baselines, denominators, and outcome measures for actual field impact.

No production efficacy, engineering acceptance, real AI benchmark, or autonomous-hardware capability is established by this case-study prototype.

