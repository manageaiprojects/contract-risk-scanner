# Coordinator — Financial Contract Risk Report
## Task
Produce a contract risk report for the file named in the request
(default: input/sample_contract.txt). Follow CLAUDE.md.
## Steps
1. Read the contract file once using the Read tool.
 Then validate it BEFORE launching any sub-agent. Treat the input as NOT a
 readable contract if it is under 200 characters, or shows none of: named
 parties, numbered clauses or section headings, obligation language
 (shall / must / agrees / will). If invalid, launch NO sub-agents and write
 output/risk_report.md containing only: the H1 title (file name), a
 "## Risk Rating" section reading "Not rated — input is not a readable
 contract.", a "## Run Info" section (input file · date · model ·
 sub-agents used: none), then "---" and the line
 GATE: ERROR — input not a readable contract
 Then stop. Never emit GATE: PASS for an invalid input.
2. In a single step, launch these three sub-agents IN PARALLEL.
 Pass each one the full contract text — they do not share your context:
 - clause-agent → P1/P2/P3 clause findings table
 - obligation-agent → Key obligations for each party
 - risk-agent → Overall risk rating + critical summary
 If the request contains --severity P1, launch ONLY clause-agent and
 risk-agent (skip obligation-agent).
3. Wait for all launched agents to finish. Merge their sections in this order;
 do not rewrite or paraphrase any finding:
 Risk Rating → P1 Critical Clauses → P2 Major Clauses →
 P3 Minor Clauses → Key Obligations → Run Info
 If --severity P1 was given: omit the P2 Major Clauses, P3 Minor Clauses
 and Key Obligations sections, and add this one-line note directly under
 the Risk Rating heading: "Filter applied: --severity P1 (P1 findings only;
 P2/P3 findings and key obligations omitted)."
4. Append GATE: FAIL if any P1 finding exists, otherwise GATE: PASS.
 (The gate is computed from P1 findings, so the filter does not change it.)
5. Write the result to output/risk_report.md.
## Output format (output/risk_report.md)
# Contract Risk Report — <vendor name or file name>
## Risk Rating
## P1 Critical Clauses | Clause type | Excerpt | Risk explanation | Confidence |
## P2 Major Clauses | Clause type | Excerpt | Risk explanation | Confidence |
## P3 Minor Clauses | Clause type | Excerpt | Risk explanation | Confidence |
## Key Obligations
## Run Info (input file · date · model · sub-agents used)
---
GATE: FAIL ← if any P1 clause found
GATE: PASS ← if no P1 clauses found
GATE: ERROR — input not a readable contract ← if validation in step 1 fails