# Financial Contract Risk Scanner
## What this app does
Analyses a vendor contract or financial agreement (input/*.txt or input/*.md)
and produces a structured risk report: overall risk rating, flagged clauses
by severity (P1/P2/P3), and a summary of key obligations for each party.
## Model routing
- Sub-agents (clause-agent, obligation-agent, risk-agent): haiku — fast extraction.
- Coordinator (main session): sonnet — merges findings and writes the final report.
## Folders
- input/ — source material. Read only. Claude must never write here.
- output/ — the ONLY place generated files are written.
## Clause severity taxonomy
- P1 Critical: auto-renewal without adequate notice, uncapped liability,
 punitive penalties, unilateral IP or data assignment to vendor.
- P2 Major: broad indemnification, exclusivity, price escalation triggers,
 customer data ownership ambiguity.
- P3 Minor: notice periods, governing law, dispute resolution forum,
 termination-for-convenience timelines.
## Output format
- Markdown with one H2 section per result area.
- Clauses as a table: | Clause type | Excerpt | Risk explanation |
- Overall risk: High (any P1) / Medium (P2 only) / Low (P3 or none).
- End report with GATE: FAIL if any P1 finding exists, else GATE: PASS.
## Do not
- Do not write files outside output/.
- Do not add facts or interpretations not in the contract text.
- Do not guess vendor names, dates, or values not stated in the contract.
