# Validation Report — Contract Risk Scanner

Scope: `output/risk_report.md` for `input/sample_contract.txt`, checked against `CLAUDE.md`, `coordinator.md` and the contract text. Date: 2026-11-02.

## 1. Correctness — rating and any unsupported findings
**Rating: High accuracy.** Every quoted excerpt matches the contract word for word, and all figures (USD 120,000, 15%, 7 days, 12 months, 30 days, 15 days, one-month Vendor cap) are correct. The overall rating of High and GATE: FAIL are justified by the Section 6.1 data assignment, the Section 8.2 uncapped Customer liability and the Section 4.2 7-day renewal notice.

Unsupported or interpretive findings:
- **Section 3.3 late-payment interest, filed as a P1 "possible punitive penalty".** The contract calls it interest, capped at the legal maximum, and never calls it a penalty. The row itself admits the classification is a judgement. It is the only P1 row the text does not support. It does not change the rating or the gate, since other P1 findings remain.
- **Section 9.1 governing-law row:** "the choice may be unfamiliar to Vendor" is not in the contract.
- **Section 5.2 cure-period row:** "the cure period is short for a breach" is not in the contract.
- **Section 4.2 auto-renewal row:** "falls near expiry" is a fair paraphrase, but "without adequate notice" is a judgement on the 7-day figure.

These break the `CLAUDE.md` rule "do not add interpretations not in the contract text".

## 2. Completeness — gaps against the spec
No structural gaps. The report has the H1 title with vendor and file names, then Risk Rating, P1, P2, P3, Key Obligations and Run Info in the required order. Every clause row carries a Confidence value with a reason. Run Info lists input file, date, model and sub-agents. The report ends with `---` and a GATE line.

Gaps and inconsistencies in the spec itself:
- `CLAUDE.md` defines only `GATE: FAIL` and `GATE: PASS`. The new `GATE: ERROR` state exists only in `coordinator.md`, so the two files now disagree.
- The Confidence column and its one-line reason are specified only for the clause tables. `risk-agent` and `obligation-agent` output has no confidence.
- The clause-agent returned bare ratings without reasons until the reason format was spelled out in the prompt, so the `clause-agent.md` rule alone is not reliable.
- Merging unchanged, as `coordinator.md` requires, cannot be verified from the output file.

## 3. Robustness — broken-input result before the fix
Input: `input/broken_input.txt`, one line: `zx9 ;;; ### ??? lorem 0000 <<>>`.

Before the fix the app did not crash. All three agents ran and returned cleanly: the clause-agent reported "None found" for P1, P2 and P3, the obligation-agent reported no obligations, and the risk-agent rated it **Low**. Merged, this would have produced a normal-looking report ending in **GATE: PASS**. Garbage input and a clean contract were indistinguishable. The risk-agent also asserted the file was "untracked in the repository", which it had no way to know. The pre-fix merged result was saved to the scratchpad and not written to `output/`.

## Issue Fixed — problem, change made, evidence from the re-run
**Problem:** An unreadable input could earn Low / GATE: PASS, and it spent three sub-agent calls to get there.

**Change made (`coordinator.md`):**
- Step 1 now validates the text before any sub-agent launches. Input is invalid if it is under 200 characters, or shows no named parties, no numbered clauses or section headings, and no obligation language (shall / must / agrees / will).
- If invalid, no sub-agents run. The coordinator writes a short report with "Not rated — input is not a readable contract." and the line `GATE: ERROR — input not a readable contract`, then stops. It must never emit PASS for invalid input.
- The output-format section lists the new GATE: ERROR line.

**Evidence from the re-run** (`claude -p "Follow coordinator.md for input/broken_input.txt" --permission-mode acceptEdits`):
- Sub-agents used: none, as shown in the report's Run Info.
- Risk Rating: "Not rated — input is not a readable contract."
- Final line: `GATE: ERROR — input not a readable contract`.
- Result: no false Low and no PASS.

**Not yet tested:** The valid sample contract was not re-run after the change. It has named parties, numbered clauses and "shall" language, so it should pass validation, but that is unconfirmed. After the test, `output/risk_report.md` was restored to the full sample-contract report from a backup, so the error report from the re-run is not on disk.
