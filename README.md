# Print Operator — Interactive Prototype

[Open the live prototype](https://printoperator-mock.bronzegiant10.chatgpt.site)

A clickable proposal for a BuildOS-inspired live-job operator experience. The published link is public; no GitHub access, installation or sign-in is required.

## Documentation

- [ICON discussion and decision record](docs/ICON-DISCUSSION-RECORD.md)

- [Product requirements document (original specification baseline)](docs/PRD.md)
- [Scenario test guide](docs/SCENARIO-TEST-GUIDE.md)
- [Design research](docs/DESIGN-RESEARCH.md)

The PRD describes the functional target. The current release demonstrates P0/P1 through scripted clickable flows; it does not satisfy every production requirement.

## Operator-centric task queue

Print visual → task queue → Your Action. Each action names its owner; the critical manual task includes layer-specific positions, component reference and count attestation.

![Live job and operator task](docs/screenshots/live-job.jpg)

## Verify before cover-up

Acknowledge the task, confirm the placed count, capture a frame and select a verification outcome in the evidence step. Count matches, human review, retake and discrepancy/rework are branches of the same workflow.

![Human review and decision](docs/screenshots/human-review.jpg)

## Help in context

Get help attaches the job, task, layer, machine state and version. Flag issue records a reason in two clicks. Offline/reconnect states are available above the job status; Reset walkthrough is a presenter-only control.

![Contextual help](docs/screenshots/contextual-help.jpg)

## Run locally

Open `prototype.html` directly, or run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173. No dependencies or build step are needed. `index.html`, `style.css`, `app.js`, and `p1.js` are the editable source; `prototype.html` is the standalone copy.

## Scope

All content, job data, images, verification results, support responses and connectivity states are simulated. No machine or support service is connected and no real messages are sent. State exists for the current page session and resets on reload. This prototype does not certify installation quality or structural acceptance. P1 flows are included as scripted interactions; hardware, AI and support integrations are not connected.

## P1 feature walkthroughs

- **Get help:** record/stop a voice note, edit its transcript, send the note, review suggested routing, and follow an urgent callback. No microphone or transcription API is used.
- **Site status:** weather/mix checks, decision reasons, holds and site-lead release. All readings, limits and procedures are illustrative.
- **Equipment:** camera-frame handoff, refill confirmation and pressure/flow alerts. Signals are scenario fixtures, not hardware feeds.
- **Updates:** related issues, changes made, acknowledgment and a still-having-this-issue route.

Choose a feature in the walkthrough bar or use the top navigation. Each opens directly to its own view. Presenter condition/signal controls exercise warning branches.

![Voice note and transcript](docs/screenshots/p1-voice.jpg)

![Weather hold](docs/screenshots/p1-weather.jpg)

![Equipment signals](docs/screenshots/p1-equipment.jpg)

![Operator updates](docs/screenshots/p1-updates.jpg)

## Role-separated workspaces and test scenarios

Use the blue Presentation row to switch between **Print operator** (navy/turquoise), **Site lead** (amber), and **ICON Support** (purple). This is a presenter role preview, not production login or access control. Operator navigation includes Live job, Site status, Equipment and History. Support requests and Updates belong to ICON Support.

[Read the step-by-step scenario test guide](docs/SCENARIO-TEST-GUIDE.md) — 12 scenarios, expected outcomes, cross-role handoffs and a defect log.

![Operator workspace](docs/screenshots/role-operator.jpg)

![ICON Support workspace](docs/screenshots/role-support.jpg)

## P2 and moonshot concepts

Select **Future concepts** in the Presentation workspace selector. Six separate views cover exception ownership, restart checks, fleet supervision, automated supply, robotic reinforcement placement and wall-system redesign. These are exploratory, isolated from the P0/P1 simulator and do not claim hardware feasibility.

[Future scope and priorities](docs/FUTURE-CONCEPTS.md) · [Test scenarios 13–18](docs/SCENARIO-TEST-GUIDE.md#future-concepts--scenarios-1318)

![Exception coordination](docs/screenshots/p2-exceptions.jpg)

![Multi-machine supervision](docs/screenshots/p2-fleet.jpg)

![Autonomous supply gate](docs/screenshots/moonshot-autonomy.jpg)

![Wall system exploration](docs/screenshots/moonshot-wall.jpg)

## Help v1 and AI copilot v2

The original embedded human-support flow is preserved on [`codex/help-v1`](https://github.com/yiluo829pro/printoperator-mock/tree/codex/help-v1) and as [standalone v1](versions/help-v1/prototype.html).

In Print operator / Live job, choose **Help version → v2 · AI copilot** to converse inside the task card. In ICON Support, open **AI evaluation** for groundedness, helpfulness and harmlessness metrics with source passages, traces and human review. All conversations and scores are scenario fixtures, not actual model performance.

[AI support scope](docs/AI-SUPPORT-V2.md) · [Test guide (22 scenarios)](docs/SCENARIO-TEST-GUIDE.md)

![AI copilot inside task](docs/screenshots/ai-copilot.jpg)

![AI evaluation](docs/screenshots/ai-evaluation.jpg)

[View all 18 full-page screenshots](docs/SCREENSHOT-GALLERY.md).
