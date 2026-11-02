# Contract Risk Report — TechVendor Ltd. (input/sample_contract.txt)

## Risk Rating
**High** — At least one P1 clause is present, most significantly Section 6.1, under which Customer assigns all right, title and interest in Customer Data (including aggregated, derived and anonymised data) to Vendor for any commercial purpose Vendor deems appropriate.

### Critical Summary
The most dangerous clause is Section 6.1, which assigns Customer Data to Vendor and allows Vendor to retain and use it after termination. The most important customer obligation is the USD 120,000 annual fee payable in advance within thirty days of invoice (Section 3.1), with prepaid fees non-refundable (Section 5.3) and fees increasable by up to 15% per year without consent (Section 3.2). Before signing, have Section 6.1 replaced with a limited licence to provide the Services, and have Customer's uncapped liability and punitive damages exposure in Sections 8.1 and 8.2 capped or removed.

## P1 Critical Clauses
| Clause type | Excerpt (max 30 words) | Risk explanation | Confidence |
|---|---|---|---|
| Auto-renewal without adequate notice | "unless either Party provides written notice of non-renewal no fewer than seven (7) days before the end of the then-current term." | Agreement auto-renews for 12-month Renewal Terms (Section 4.2). Non-renewal notice is due only 7 days before term end, a short window for a 12-month commitment. | High — the 7-day notice period and automatic renewal are stated explicitly in Section 4.2 |
| Uncapped liability | "Customer's liability under this Agreement shall be uncapped." | Customer liability has no ceiling. Vendor's aggregate liability is capped at fees paid in the preceding one month (Section 8.2), so the cap is one-sided. | High — Section 8.2 expressly states Customer liability is uncapped |
| Punitive penalties | "whether direct, indirect, consequential or punitive, arising out of or relating to Customer's use of the Services, without limitation as to amount." | Customer must cover punitive damages, with no monetary limit, for losses relating to its use of the Services. Only Customer is subject to this exposure. | High — Section 8.1 expressly lists punitive damages and states no limit as to amount |
| Late-payment interest (possible penalty) | "Late payments shall accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower." | Late payments accrue 1.5% per month (up to the legal maximum), which is a significant charge. The contract does not label it a penalty, so classification is uncertain. | Low — the clause states a rate but does not describe it as punitive; classification as a penalty is an interpretation |
| Unilateral data assignment to vendor | "Customer hereby assigns to Vendor all right, title and interest in and to Customer Data, including all aggregated, derived and anonymised data" | Customer assigns ownership of its Customer Data, including derived and anonymised data, to Vendor. Vendor may keep and use this data after termination (Section 6.1). | High — Section 6.1 contains an express present assignment and post-termination retention right |

## P2 Major Clauses
| Clause type | Excerpt (max 30 words) | Risk explanation | Confidence |
|---|---|---|---|
| Broad indemnification | "Customer shall indemnify and hold harmless Vendor from all third-party claims arising from Customer Data or Customer's use of the Services." | One-way indemnity from Customer to Vendor covering all third-party claims tied to Customer Data or Services use. The contract gives no reciprocal Vendor indemnity and sets no cap. | High — Section 8.3 states the indemnity obligation expressly and does not provide a reciprocal indemnity |
| Price escalation trigger | "Vendor may increase the subscription fees at the start of each contract year by up to fifteen percent (15%) of the fees in effect for the preceding year." | Vendor may raise fees up to 15% each contract year. Increases take effect on written notice without Customer consent or amendment (Section 3.2). | High — Section 3.2 states the 15% cap, automatic effect, and absence of a consent requirement |
| Customer data ownership ambiguity | "any other commercial purpose Vendor deems appropriate." | Permitted uses of Customer Data are open-ended and set at Vendor's discretion. Section 6.2 requires only "reasonable" safeguards, and the contract does not define how derived data is treated beyond Section 6.1. Overlaps with the P1 assignment. | Medium — the open-ended purpose wording is explicit, but the scope of "derived" data is an interpretation |

## P3 Minor Clauses
| Clause type | Excerpt (max 30 words) | Risk explanation | Confidence |
|---|---|---|---|
| Termination for convenience (timeline) | "Either Party may terminate this Agreement for convenience by giving the other Party thirty (30) days' prior written notice." | Either Party may exit on 30 days' notice. The notice period is short, and Section 5.3 makes prepaid fees non-refundable. | High — Section 5.1 states the 30-day notice period explicitly |
| Breach cure period (termination timeline) | "fails to cure such breach within fifteen (15) days of receiving notice." | Immediate termination for material breach is available if the breach is not cured within 15 days. The cure window is short. | High — Section 5.2 states the 15-day cure period explicitly |
| Non-refundable prepaid fees | "Prepaid fees are non-refundable." | Upon termination, Customer forfeits prepaid fees and pays fees accrued to the termination date. This applies regardless of which Party terminates. | Medium — the clause is explicit, but it is not in the listed P1 to P3 categories, so placement here is a judgement |
| Governing law | "governed by and construed in accordance with the laws of the State of Delaware, USA" | Delaware law governs the Agreement even though Vendor is organised under English and Welsh law. | High — Section 9.1 names Delaware law expressly |
| Dispute resolution forum | "The Parties submit to the exclusive jurisdiction of the state and federal courts located in Delaware." | Disputes must be brought exclusively in Delaware courts, which may be inconvenient for a UK-based Vendor. | High — Section 9.1 states exclusive jurisdiction expressly |

## Key Obligations
### TechVendor Ltd.
- Shall use commercially reasonable efforts to make the Services available 99.5% of the time each calendar month, excluding scheduled maintenance (Section 2.2).
- Shall implement reasonable administrative and technical safeguards designed to protect Customer Data from unauthorised access (Section 6.2).
- Warrants that the Services will perform materially in accordance with the documentation (Section 7.1).

### Acme Corp
- Shall pay an annual subscription fee of USD 120,000, invoiced annually in advance and payable within thirty (30) days of the invoice date (Section 3.1).
- Late payments shall accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower (Section 3.3).
- Shall pay all fees accrued through the effective date of termination (Section 5.3).
- Is liable to Vendor for any and all losses, damages, costs and expenses, whether direct, indirect, consequential or punitive, arising out of or relating to Customer's use of the Services, without limitation as to amount (Section 8.1). Customer's liability under the Agreement is stated to be uncapped (Section 8.2).
- Shall indemnify and hold harmless Vendor from all third-party claims arising from Customer Data or Customer's use of the Services (Section 8.3).
- Hereby assigns to Vendor all right, title and interest in and to Customer Data, including all aggregated, derived and anonymised data (Section 6.1).
- Right to access and use the Services is non-exclusive, non-transferable, and solely for Customer's internal business purposes (Section 2.1).

## Run Info
- Input file: input/sample_contract.txt
- Date: 2026-11-02
- Model: coordinator sonnet (claude-sonnet-5-5); sub-agents haiku
- Sub-agents used: clause-agent, obligation-agent, risk-agent (run in parallel)

---
GATE: FAIL
