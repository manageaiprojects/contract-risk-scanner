---
description: Scan a contract for risky clauses and produce a full risk report
argument-hint: <contract-path>
---
Read the contract at $ARGUMENTS.
Run the full coordinator workflow (clause-agent, obligation-agent, risk-agent in parallel).
Save the result to output/risk_report.md following CLAUDE.md.
Print the Risk Rating section and the GATE line.