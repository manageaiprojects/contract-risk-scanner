---
description: Draft a 5-line executive summary email from a risk report
argument-hint: output/risk_report.md
---
Read the risk report at $ARGUMENTS.
Write a 5-line executive summary email to output/summary_email.md, exactly one line each:
Line 1: Subject line
Line 2: One-sentence risk rating
Line 3: First critical finding (P1 if any, else P2)
Line 4: Second critical finding (P1 if any, else P2)
Line 5: Recommended action before signing
Rules:
- Use only facts stated in the report. Do not add facts, names, dates or values.
- Write only to output/summary_email.md. Never write to input/.
- Print the email after saving it.
