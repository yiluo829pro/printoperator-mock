# P2 and moonshot — prototype scope addendum

Status: exploratory clickable concepts. This extends the original PRD baseline; it does not establish hardware feasibility or production readiness.

Access: Presentation → Workspace role → Future concepts. The teal concept header and explicit banner separate proposals from current operator/support workflows.

## Priority and dependencies

| ID | Priority | Concept | Why this order | Implemented interaction | Production prerequisites |
|---|---|---|---|---|---|
| F16 | P2 first | Exception coordination | Extends task ownership and contextual help | Delayed refill / missing ties, assign owner, confirm supply, return to task | Accurate stock/ETA, operations ownership, approved print sequence |
| F17 | P2 second | Pause and restart | Makes exception recovery explicit | Four recorded checks; final site-lead authorization | Procedure per pause type, responsible roles, safe-state integration |
| F18 | P2 third | Multi-machine supervision | Reuses gates and assignment after individual workflows work | Select three machines, inspect exceptions, assign on-call team per machine | Workload/response study, isolated control state and connectivity |
| F19 | Moonshot exploration | Autonomous replenishment and material control | Potential reduction in repetitive material work | Supply stages, failure branch, supervisor confirmation | Feed hardware, material sensing, validated control interface |
| F20 | Moonshot research | Robotic reinforcement placement | High physical/perception dependencies | Human presentation, path proposal, clear-zone confirmation, placement, inspection requirement | Singulation/grasping, localization, exclusion zones, inspection authority |
| F21 | Moonshot architecture | Wall-system redesign | May remove a dependency rather than automate it | Compare sleeves/channels and core alternatives; record review dependency | Architecture, structural/trade/code/certification review |

There is no commitment to automate sleeves or cores. Alternatives are discussion artifacts. Three Titans in the fleet is a fixture, not a proven staffing ratio. Adjacent-industry automation is not evidence of in-print feasibility.

## Acceptance rules

- Future concepts open to six distinct, selectable views.
- Supply confirmation requires an assigned owner and does not attest to task completion.
- Restart requires a note at each stage and cannot finish before site-lead authorization.
- Fleet assignment persists per selected machine and does not clear another machine's inspection gate.
- Autonomous replenishment stops at a supervisor confirmation stage before sequence-ready.
- Robotic placement retains human work-zone confirmation and a final inspection requirement.
- Redesign cannot be marked safe, certified or production-ready; it records only the review dependency.
- Each view exposes assumptions/open questions and ends with the simulation disclaimer.

## Isolation from P0/P1

These concepts use separate session state. Their conceptual holds and machine records do not control the P0/P1 live-job simulator. Returning to a held task shows the operator flow but still requires its own attestation/evidence/verification. This separation prevents a concept action from silently completing existing work. Future integration would need explicit state contracts.

## Measurement before production

F16/F17: avoidable delay per eligible exception, ambiguous ownership, recovery time, inappropriate continuation. F18: reviewer workload, response time, concurrent incidents and local response capacity. F19/F20: intervention rate, false-ready decisions, material/placement quality, safe-state performance. F21: validated removal of manual dependency with all discipline approvals. Baselines and thresholds must be established with ICON rather than inferred from the prototype.
