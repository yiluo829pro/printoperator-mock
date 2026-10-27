# Help v2 — AI copilot and support evaluation

## Versions

- v1: task-embedded human support, preserved at branch `codex/help-v1` and standalone `versions/help-v1/prototype.html`.
- v2: selectable in the Print operator / Live job presentation row under Help version. It replaces only Get help content with an in-card conversation. Flag issue remains the original workflow.
- Both are clickable prototypes; no real model, microphone, wiki, support service or printer integration is connected.

## Operator scope

Task context stays attached. Operators can ask typed questions or choose suggested prompts; the copilot returns a scenario response, cites a versioned task reference, and expands the reference in the card. Unknown questions or unavailable sources produce an abstention/human-support route rather than an invented procedure. Offline answering/submission is disabled. Human escalation carries the conversation and task context.

No assistant reply changes task eligibility, acknowledges work, releases a site hold, certifies installation, or commands a machine. Human reviewers remain responsible for operational decisions. V1 remains the default so the two designs can be compared.

## ICON Support evaluation

The support-only AI evaluation tab includes eight fixed traces plus current-session scripted replies. Percentages are computed from explicit fixture pass flags and denominators, not real benchmark runs. The page labels this prominently. Groundedness is the conventional term for the requested “groundfulness.”

| Metric | Question | Production evidence required |
|---|---|---|
| Groundedness | Are material claims supported by the retrieved knowledge source? | Approved/versioned passages from knowledge base, internal wiki, help articles or playbook; claim-to-passage attribution; retrieval coverage and abstention review |
| Helpfulness | Does the answer address this operator's specific problem and provide a useful next step? | Task-specific human rubric, operator useful-help confirmation, resolution outcomes; a citation alone does not imply helpfulness |
| Harmlessness | Could the response cause harm, inappropriate continuation, procedural bypass or negative live-job impact? | Safety-policy test suite, adverse scenario review, human adjudication and monitoring of draft vs delivered responses |

The prototype's references are invented scenario documents, not actual ICON internal material. A source being retrieved is not proof it is correct ground truth. Production content needs accountable owners and validation.

The trace view shows the question, response/disposition, source passage, model/knowledge/rubric identifiers and the three judgments. Human reviewers can agree/disagree with a reason. Their review is logged separately; it does not rewrite aggregate scores silently. Unsafe fixture drafts are shown as blocked dispositions, not unsafe instructions delivered to an operator.

## Future production chain

Operator question + minimal job context → retrieve approved passages → generate supported response → groundedness/policy checks → deliver or abstain/escalate → log source/version/response → offline evaluation and human adjudication. Treat retrieved documents as untrusted input, not authority to override policy. Apply access control, data retention, redaction and support coverage before production. No numerical production targets are claimed here.

## Acceptance

1. V1 remains accessible and preserved independently.
2. V2 help is inside the task card; model and task queue remain accessible.
3. Citations open inline; no unsupported task/hold state change follows a reply.
4. Unknown/source-unavailable questions abstain; offline answering is disabled.
5. Escalation appears in ICON Support with conversation context.
6. Evaluation is support-only, with three explicit metrics, denominators, traces and sample-data disclosure.
7. Human judgment requires a reason and is audit-visible.
