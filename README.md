# Print Operator — Interactive Prototype

[Open the live prototype](https://printoperator-mock.bronzegiant10.chatgpt.site)

A clickable proposal for a BuildOS-inspired live-job operator experience. The published link is public; no GitHub access, installation or sign-in is required.

## Operator-centric task queue

Print visual → task queue → Your Action. Each action names its owner; the critical manual task includes layer-specific positions, component reference and count attestation.

![Live job and operator task](docs/screenshots/live-job.png)

## Verify before cover-up

Acknowledge the task, confirm the placed count, capture a frame and select a verification outcome in the evidence step. Count matches, human review, retake and discrepancy/rework are branches of the same workflow.

![Human review and decision](docs/screenshots/human-review.png)

## Help in context

Get help attaches the job, task, layer, machine state and version. Flag issue records a reason in two clicks. Offline/reconnect states are available above the job status; Reset walkthrough is a presenter-only control.

![Contextual help](docs/screenshots/contextual-help.png)

## Run locally

Open `prototype.html` directly, or run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173. No dependencies or build step are needed. `index.html`, `style.css`, and `app.js` are the editable source; `prototype.html` is the standalone copy.

## Scope

All content, job data, images, verification results, support responses and connectivity states are simulated. No machine or support service is connected and no real messages are sent. State exists for the current page session and resets on reload. This prototype does not certify installation quality or structural acceptance. P1 integrations are not included.
