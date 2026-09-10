# Competitive Analysis

## 1. Purpose

This document provides a comparative analysis of public and enterprise digital service patterns to inform the academic UX redesign proposal for Sri Lanka's National Fuel Pass (NFP) service. In accordance with the methodology established in `process/UX-PROCESS.md`, this analysis systematically evaluates established interaction models across comparable domains.

The goal is not to copy competitor features or critique visual design, but to evaluate how other systems address structural service challenges, such as:

* Identity verification and multi-attribute onboarding
* Account recovery and asset re-binding
* Optical credential presentation and verification
* Quota, allocation, and cycle visibility
* Multilingual navigation and inclusive access
* Error communication and service escalation

By evaluating verified implementations from Sri Lankan public portals, international digital public infrastructure (DPI), and commercial utility and mobility platforms, this document extracts candidate patterns while identifying commercial practices that should **not automatically be transferred** to a public rationing system.

---

## 2. Competitive Analysis Objectives

1. **Evaluate Structural Service Patterns:** Examine how comparable systems structure onboarding, identity binding, recovery, balance presentation, and offline verification workflows.

2. **Benchmark Local Public Service Expectations:** Document interaction models within Sri Lankan public digital services and investigate whether these patterns align with user expectations (**E/I/RH**).

3. **Assess Operational Verification Contexts:** Analyze how frontline operational environments such as scanning, queue management, and device constraints are addressed in comparable high-throughput services. These conditions are treated as comparative contexts rather than established characteristics of NFP stations.

4. **Distinguish Transferable vs. Non-Transferable Patterns:** Differentiate between patterns that may support public accessibility and commercial patterns that may introduce additional access or interaction barriers.

5. **Formulate Testable Design Hypotheses:** Establish evidence-informed Design Hypotheses (**DH**) and Research Questions (**RH**) for validation in primary field research (`research/04-user-research.md`).

---

## 3. Competitive Scope

The competitive scope is bounded by the seven core NFP service areas established in earlier project phases (`research/01-project-framing.md` and `research/02-desk-research.md`):

```text
+-----------------------------------------------------------------------------------+
|                            COMPETITIVE ANALYSIS SCOPE                             |
+-----------------------------------------------------------------------------------+
|  1. Registration & Identity Binding   │  5. Support & Escalation Pathways         |
|  2. Account Recovery & Transfer       │  6. Multilingual & Inclusive Access       |
|  3. QR Storage & Optical Scanning     │  7. Forecourt & Station Workflows         |
|  4. Quota & Allocation Dashboards     │                                           |
+-----------------------------------------------------------------------------------+
```

---

## 4. Competitor Selection Criteria

Services were selected based on structural and functional relevance rather than superficial visual features. To qualify for inclusion, a platform had to meet at least two of the following criteria:

1. **Public Infrastructure / Sovereign Context:** Operated by or for a government entity serving a broad population with varying digital access and literacy.

2. **High-Throughput Verification:** Utilized optical (QR/barcode) or cryptographic credential verification in real-time or physical operational settings.

3. **Allocation / Limit Tracking:** Displayed non-monetary balance, quota, usage history, or cycle information under restricted consumption rules.

4. **Identity & Document Binding:** Handled multi-attribute verification, such as matching an identity record to an asset or account.

5. **Local Ecosystem Relevance:** Operated within Sri Lanka, establishing a useful comparative reference for local digital public-service interactions.

---

## 5. Selected Services

The comparative analysis evaluates eight selected services across five functional categories:

```text
+-----------------------------------------------------------------------------------+
|                               SELECTED SERVICES                                   |
+-----------------------------------------------------------------------------------+
| CATEGORY A — Sri Lankan Public Digital Infrastructure                             |
| • GovPay Sri Lanka (ICTA / LankaPay) — Public payment & fine settlement           |
| • Department of Motor Traffic (DMT) Online Portal — Vehicle information services  |
|                                                                                   |
| CATEGORY B — Global Digital Public Infrastructure (DPI) & Identity                |
| • GovStack Building Blocks (ITU / DIAL) — Standardized DPI architectural specs    |
| • Aadhaar / mAadhaar (India) — Large-scale identity & QR credential               |
|                                                                                   |
| CATEGORY C — QR-Based Credential & Verification Systems                           |
| • EU Digital COVID Certificate (EUDCC) — QR-based credential verification         |
|                                                                                   |
| CATEGORY D — Mobility, Energy & Utility Dashboards                                |
| • PickMe Sri Lanka — Domestic mobility & driver dispatch interface                |
| • CEB Care (Ceylon Electricity Board) — Domestic utility consumption service       |
|                                                                                   |
| CATEGORY E — Enterprise Forecourt & Point-of-Sale (POS) Systems                   |
| • Shell App / SmartPay — Commercial digital fueling & forecourt workflows         |
+-----------------------------------------------------------------------------------+
```

---

## 6. Competitor Profiles

### GovPay Sri Lanka (ICTA / LankaPay)

* **Category:** Category A — Sri Lankan Public Infrastructure

* **Service Purpose:** Centralized digital payment gateway for public services, including traffic fine settlements, local government taxes, and departmental fees (**E**).

* **Target Users:** Sri Lankan citizens, drivers, business owners, and government-service users.

* **Verified Capability (E):** Provides a trilingual interface and supports digital public-service payment workflows, including reference-based transactions (**E**).

* **Relevance to NFP (I):** Provides a domestic comparative reference for transaction confirmation, reference identifiers, and multilingual public-service interaction.

### Department of Motor Traffic (DMT) Online Portal

* **Category:** Category A — Sri Lankan Public Infrastructure

* **Service Purpose:** Online services enabling users to query vehicle-related registration information (**E**).

* **Target Users:** Vehicle owners, prospective buyers, institutions, and other authorized users.

* **Verified Capability (E):** Provides vehicle information through online query services, including vehicle-related registration information (**E**).

* **Relevance to NFP (I):** Provides a comparative reference for vehicle and ownership information that may be relevant when designing NFP registration and ownership-transfer workflows. Specific NFP/DMT data mismatches require separate validation.

### GovStack Building Blocks (ITU / DIAL / Estonia)

* **Category:** Category B — Global Digital Public Infrastructure

* **Service Purpose:** Defines standardized architectural building blocks for digital public services, including identity, registration, and information exchange (**E**).

* **Target Users:** Government ICT architects, digital-service designers, and public-sector software engineers.

* **Verified Capability (E):** Provides specifications for modular digital public-service components and interoperability patterns (**E**).

* **Relevance to NFP (I):** Provides an architectural comparative reference for separating identity, registration, and information-exchange responsibilities.

### mAadhaar / UIDAI QR Credential System (India)

* **Category:** Category B — Global Digital Public Infrastructure

* **Service Purpose:** Provides digital identity credentials and QR-based verification mechanisms (**E**).

* **Target Users:** Residents using India's digital identity ecosystem.

* **Verified Capability (E):** UIDAI documentation describes digitally signed QR-based credentials and verification mechanisms, including offline verification capabilities for applicable credentials (**E**).

* **Relevance to NFP (I):** Demonstrates a comparative model in which credential authenticity can be verified locally without requiring a live database request for every verification.

### EU Digital COVID Certificate (EUDCC) / Verifier Architecture

* **Category:** Category C — QR-Based Credential & Verification Systems

* **Service Purpose:** Enabled verification of health credentials during the COVID-19 pandemic (**E**).

* **Target Users:** Credential holders and verification personnel.

* **Verified Capability (E):** Used QR-based certificates and dedicated verifier software capable of validating certificate signatures using trusted keys (**E**).

* **Relevance to NFP (I):** Provides a comparative example of separating credential presentation from verifier-facing interaction.

### CEB Care (Ceylon Electricity Board)

* **Category:** Category D — Energy & Utility Services

* **Service Purpose:** Allows utility customers to access electricity-related account and service information (**E**).

* **Target Users:** Household and commercial electricity consumers in Sri Lanka.

* **Verified Capability (E):** Provides digital access to electricity account information, consumption/billing information, and service-related functions (**E**).

* **Relevance to NFP (I):** Provides a domestic comparative reference for presenting consumption quantities, account status, cycles, and service information.

### PickMe Sri Lanka

* **Category:** Category D — Mobility & Service Platform

* **Service Purpose:** Domestic ride-hailing, delivery, and logistics platform operating in Sri Lanka (**E**).

* **Target Users:** Passengers, drivers, delivery users, and merchants.

* **Verified Capability (E):** Provides real-time service/job status and trip or transaction history within its mobility workflows (**E**).

* **Relevance to NFP (I):** Provides a comparative example of presenting time-sensitive service status within a frequently used mobile service.

### Shell App / SmartPay Forecourt System

* **Category:** Category E — Enterprise Forecourt & POS Systems

* **Service Purpose:** Supports digital fueling and related retail-service workflows in participating markets (**E**).

* **Target Users:** Retail fueling customers.

* **Verified Capability (E):** Applicable Shell digital-fueling services can support mobile interaction with fueling transactions in participating markets (**E**).

* **Relevance to NFP (I):** Provides a comparative reference for digital transaction status and forecourt interaction. Its commercial context means its interaction model should not automatically be treated as appropriate for a public allocation service.

---

## 7. Comparative UX Analysis

The table below summarizes documented capabilities and comparative interaction patterns. Where a capability varies by service version, market, or implementation, it should be treated as requiring verification before being used as a design requirement.

| **Service**          | **Target Audience & Context**              | **Identity & Onboarding**                                            | **Recovery & Exception Handling**                            | **Status & Usage Visibility**                      | **Language / Access Considerations**                          |
| -------------------- | ------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------- |
| **GovPay LK**        | Sri Lankan public-service users            | Reference/service information and applicable authentication (**E**)  | Service/reference-based support mechanisms (**E**)           | Transaction/payment confirmation (**E**)           | Sinhala, Tamil, English support (**E**)                       |
| **DMT Portal**       | Sri Lankan vehicle-related users           | Vehicle information/query inputs (**E**)                             | Service queries and administrative processes (**E**)         | Vehicle-related information display (**E**)        | Local public-service portal (**E**)                           |
| **GovStack**         | Government digital-service implementations | Modular identity/registration building blocks (**E**)                | Interoperability and administrative-service patterns (**E**) | Client application determines presentation (**E**) | Localization can be incorporated at application level (**E**) |
| **mAadhaar / UIDAI** | Indian digital-identity users              | Identity credential and applicable authentication mechanisms (**E**) | Identity-service recovery/update mechanisms (**E**)          | Credential/profile and QR presentation (**E**)     | Multiple Indian-language contexts (**E**)                     |
| **EUDCC Verifier**   | Credential verification personnel          | Credential issued by authorized health systems (**E**)               | Re-issuance handled by issuing systems (**E**)               | Verification result displayed by verifier (**E**)  | Designed for cross-border/multilingual European use (**E**)   |
| **CEB Care**         | Sri Lankan electricity consumers           | Utility account-based access (**E**)                                 | Service/account support mechanisms (**E**)                   | Consumption and billing information (**E**)        | Sri Lankan utility-service context (**E**)                    |
| **PickMe LK**        | Passengers and drivers                     | Mobile-account-based service access (**E**)                          | Platform support/account mechanisms (**E**)                  | Real-time job/trip status and history (**E**)      | Local mobility-service context (**E**)                        |
| **Shell SmartPay**   | Commercial fueling customers               | Market-dependent account/payment setup (**E**)                       | Commercial account/payment recovery (**E**)                  | Fueling transaction status where supported (**E**) | Market-dependent implementation (**E**)                       |

---

## 8. Heuristic / Interaction Analysis

The following observations are **analyst evaluations (I)** informed by documented service characteristics. They are not user-testing findings.

```text
+-----------------------------------------------------------------------------------+
|               ANALYST HEURISTIC EVALUATION SUMMARY (I)                            |
+-----------------------------------------------------------------------------------+
| 1. VISIBILITY OF SYSTEM STATUS                                                    |
|    • Competitor Evidence (E): EUDCC verifier interfaces communicate verification  |
|      results clearly.                                                              |
|    • Heuristic Consideration (I): Verification interfaces should make the current |
|      system state immediately understandable.                                      |
|                                                                                   |
| 2. MATCH BETWEEN SYSTEM AND REAL WORLD                                            |
|    • Competitor Evidence (E): Utility services such as CEB Care present           |
|      consumption/account information using concepts familiar from physical bills. |
|    • Heuristic Consideration (I): NFP terminology should correspond closely to     |
|      terms users encounter on vehicle and fuel-related documents.                 |
|                                                                                   |
| 3. ERROR PREVENTION & GUIDED RECOVERY                                             |
|    • Competitor Evidence (E): Structured digital-service forms can constrain or    |
|      validate required inputs.                                                     |
|    • Heuristic Consideration (I): NFP forms should provide clear input guidance   |
|      and actionable recovery where validation fails.                               |
|                                                                                   |
| 4. RECOGNITION RATHER THAN RECALL                                                 |
|    • Competitor Evidence (E): Digital credential systems present recognizable     |
|      credential information for verification.                                      |
|    • Heuristic Consideration (I): NFP interfaces should minimize the need for      |
|      users or operators to remember information that could instead be displayed.  |
+-----------------------------------------------------------------------------------+
```

---

## 9. Comparison Matrix

The matrix below compares documented National Fuel Pass capabilities against selected competitors. Current NFP details reflect verified findings from desk research (`research/02-desk-research.md`). Where a mechanism cannot be confirmed, it is marked **UNKNOWN**.

| **Service Dimension**        | **NFP Documented Baseline (E)**                                                                                                                                                                     | **Comparative Evidence**                                                                                | **Relevance to NFP Redesign**                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Onboarding**               | Historical NFP documentation identifies identity, vehicle, chassis, and mobile information as registration data, including SMS OTP (**E**).                                                         | Comparable public services use structured identity, account, or reference-based workflows (**E**).      | **DH:** Test whether document-guided input assistance improves completion and reduces entry errors.              |
| **Identity / Asset Binding** | NFP documentation establishes vehicle/profile registration and current guidance for ownership changes and re-registration (**E**).                                                                  | Identity and asset/account relationships are handled differently across public-service systems (**E**). | **DH:** Explore clearer ownership-transfer states and guidance if research identifies transfer-related friction. |
| **Account Recovery**         | Current GIC guidance addresses contact-number and profile/re-registration problems and provides support channels (**E**).                                                                           | Comparable services provide different combinations of self-service and administrative recovery (**E**). | **DH:** Investigate whether additional self-service recovery would be useful and policy-compliant.               |
| **QR & Verification**        | NFP uses QR-based vehicle verification; current documentation includes QR scanning/verification failure cases (**E**). Exact technical failure causes and current offline behavior are **UNKNOWN**. | mAadhaar and EUDCC demonstrate QR credentials capable of cryptographic verification (**E**).            | **DH:** Explore offline verification only if operational and technical research supports it.                     |
| **Quota Visibility**         | Current NFP documentation establishes quota allocation and the current Saturday-midnight reset timing (**E**).                                                                                      | Utility services provide comparative examples of presenting consumption and cycle information (**E**).  | **DH:** Test whether combining remaining quantity with clear reset information improves comprehension.           |
| **Error Handling**           | Current documentation establishes several registration, ownership, QR, and support issues (**E**); exact current interface treatment is partly **UNKNOWN**.                                         | Comparable services provide different forms of validation and recovery guidance (**E**).                | **DH:** Test clearer error explanations and next-step guidance.                                                  |
| **Multilingual Support**     | NFP provides Sinhala, Tamil, and English interface options (**E**).                                                                                                                                 | Several Sri Lankan public/digital services provide multilingual interaction (**E**).                    | **DH:** Test whether language selection and layout remain clear across all three scripts.                        |

---

## 10. Recurring UX & Service Patterns

The following are **candidate interaction patterns**, not validated NFP requirements.

### Pattern 1 — Clear Verification Status

* **Observed Competitor Evidence (E):** QR credential-verification systems such as EUDCC provide a clear verification result.

* **NFP Relevance (I):** Verification interfaces benefit from making the current state immediately understandable.

* **Research Question (RH):** What information and visual hierarchy do station operators need to make verification decisions efficiently?

* **Design Hypothesis (DH):** A simplified verification-status presentation will reduce interpretation time compared with a dense information display.

### Pattern 2 — Offline-Capable Credential Verification

* **Observed Competitor Evidence (E):** EUDCC and applicable UIDAI credentials demonstrate cryptographic QR verification without requiring a live database lookup for every verification.

* **NFP Relevance (I):** Offline-capable verification could reduce dependence on continuous connectivity if connectivity is found to be an operational constraint.

* **Research Question (RH):** What connectivity conditions and verification failures occur during actual fuel-station operations?

* **Design Hypothesis (DH):** If connectivity problems are confirmed as a significant operational constraint, an offline-verification mechanism could be investigated subject to technical, security, and policy feasibility.

### Pattern 3 — Document-Guided Form Input

* **Observed Competitor Evidence (E):** Comparable digital services use structured fields, validation, and user guidance for required identifiers.

* **NFP Relevance (I):** NFP registration includes technical vehicle information such as chassis details.

* **Research Question (RH):** What errors or uncertainty do users experience when locating and entering required vehicle information?

* **Design Hypothesis (DH):** Contextual document guidance may improve successful completion of vehicle-information fields.

### Pattern 4 — Numeric and Contextual Usage Information

* **Observed Competitor Evidence (E):** Utility services provide consumption quantities together with account or billing-cycle information.

* **NFP Relevance (I):** Fuel quota information must communicate both quantity and allocation-cycle context.

* **Research Question (RH):** Do users understand their remaining allocation and the timing of the next reset?

* **Design Hypothesis (DH):** Presenting remaining liters together with explicit reset information may improve quota comprehension.

### Pattern 5 — Staged Exception Workflows

* **Observed Competitor Evidence (E):** Public and enterprise services use combinations of automated processing and administrative support for cases that cannot be resolved automatically.

* **NFP Relevance (I):** Current NFP documentation identifies ownership, contact-number, and profile cases that may require support or re-registration.

* **Research Question (RH):** What friction and delays do users experience when resolving ownership or contact-number problems?

* **Design Hypothesis / Policy Question (DH / RH):** A staged, trackable exception workflow could be investigated if users and stakeholders identify a need for greater visibility during administrative resolution.

### Pattern 6 — Multilingual Interface Consistency

* **Observed Competitor Evidence (E):** Several Sri Lankan digital services provide Sinhala, Tamil, and English interfaces.

* **NFP Relevance (I):** NFP must communicate critical allocation and verification information across all supported languages.

* **Research Question (RH):** What layout and terminology choices best preserve clarity across Sinhala, Tamil, and English?

* **Design Hypothesis (DH):** Flexible interface layouts and language-aware content design can reduce layout and comprehension problems across supported scripts.

---

## 11. Patterns Not to Copy Automatically

The following patterns are identified as **comparative concerns**, not claims that existing competitors are inherently unsuitable.

```text
+-----------------------------------------------------------------------------------+
|                        PATTERNS NOT TO COPY AUTOMATICALLY                         |
+-----------------------------------------------------------------------------------+
| 1. Mandatory Smartphone App Dependency                                            |
|    • Commercial Context (E): Some commercial fueling and mobility services rely    |
|      heavily on smartphone applications.                                          |
|    • NFP Consideration (I/RH): A mandatory app requirement could create access     |
|      barriers for users with limited smartphone capability or connectivity.        |
|      The prevalence of these conditions among NFP users requires research.        |
|                                                                                   |
| 2. Strict Real-Time Connectivity Dependency                                       |
|    • Comparative Context (E): Some digital transaction systems use online          |
|      verification.                                                                 |
|    • NFP Consideration (I/RH): If station connectivity is unreliable, strict      |
|      real-time verification could create operational delays. This condition must   |
|      be investigated rather than assumed.                                          |
|                                                                                   |
| 3. High-Density Information Displays                                               |
|    • Comparative Context (E): Some utility services expose substantial historical |
|      account and consumption information.                                          |
|    • NFP Consideration (DH/RH): The appropriate information density for fuel       |
|      allocation tasks should be tested with users rather than assumed.             |
|                                                                                   |
| 4. Immediate Automated Account Lockouts                                            |
|    • Comparative Context (E): Some security-sensitive services use automated       |
|      account restrictions.                                                         |
|    • NFP Consideration (DH/RH): Any automated restriction in a fuel-allocation     |
|      service should provide an appropriate recovery and escalation path, subject   |
|      to policy and security requirements.                                          |
+-----------------------------------------------------------------------------------+
```

---

## 12. Potential Design Opportunities

The following provisional opportunities are identified for validation through primary research and stakeholder/technical analysis:

* **Provisional Design Opportunity 1 — Document-Guided Onboarding:** Explore contextual guidance for vehicle and chassis information if field research identifies significant entry uncertainty (**DH / RH**).

* **Provisional Design Opportunity 2 — Offline Cryptographic Verification:** Explore offline-verifiable QR mechanisms only if station research identifies connectivity as a significant constraint and technical/security feasibility is established (**DH / RH / TD**).

* **Provisional Design Opportunity 3 — Clear Quota and Reset Presentation:** Test combinations of remaining-liter values and explicit reset information to determine which representation best supports comprehension (**DH / RH**).

* **Provisional Design Opportunity 4 — Staged Ownership Transfer Guidance:** Investigate a trackable ownership-transfer workflow subject to stakeholder, policy, security, and technical validation (**DH / RH**).

* **Provisional Design Opportunity 5 — Document-Assisted Account Recovery:** Investigate whether secondary verification could provide an appropriate recovery route for users who lose access to their registered contact number (**DH / RH**).

* **Provisional Design Opportunity 6 — Simplified Operator Verification View:** Explore a focused verification interface and test whether it improves operator comprehension and transaction efficiency (**DH / RH**).

* **Provisional Design Opportunity 7 — Support Case Status Visibility:** Investigate whether users benefit from a reference-based mechanism for tracking unresolved support cases (**DH / RH**).

* **Provisional Design Opportunity 8 — Multilingual Layout Resilience:** Design and test flexible layouts that maintain readability across Sinhala, Tamil, and English (**DH / RH / TD**).

---

## 13. Competitive Positioning

The diagram below provides an **analytical working model**, not an empirical accessibility assessment, usability score, or commercial market ranking.

```text
                    RESEARCH-INFORMED TARGET STATE
                                 │
                                 │
                                 │       [ NFP Proposed Redesign ]
                                 │       Target:
                                 │       • Clear service states
                                 │       • Inclusive access
                                 │       • Multilingual interaction
                                 │       • Evidence-supported resilience
                                 │
       [ Public-Service ]        │       [ Utility / Public-Service ]
       [ Workflows ]             │       [ Dashboards & Transactions ]
       Administrative            │       Consumption / transaction
       complexity                │       information
                                 │
                                 ├────────────────────────────────
                                 │
                                 │       [ Commercial Mobility /
                                 │         Fueling Workflows ]
                                 │       Real-time commercial
                                 │       transaction interactions
                                 │
                                 │
                          COMPARATIVE REFERENCE SPACE
```

This positioning is intended only to organize comparative observations. It does not claim that one service is objectively more accessible or usable than another.

---

## 14. Traceability to NFP Design

The matrix below maps competitor evidence to candidate patterns, research questions, and provisional design hypotheses. Future prototype components should be defined only after the relevant design hypotheses have been validated.

| **Competitor Evidence (E)**                                           | **Observed Pattern**                    | **NFP Relevance (I)**                                                                  | **Research Question (RH)**                                                  | **Design Hypothesis (DH)**                                                                            | **Candidate Prototype Focus** |
| --------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------- |
| EUDCC provides clear QR verification results (**E**).                 | Clear verification status               | Verification tasks require understandable system state (**I**)                         | What information and hierarchy best support operator verification? (**RH**) | Simplified status presentation may reduce interpretation time (**DH**)                                | Operator verification concept |
| Public digital services use structured fields and validation (**E**). | Guided input                            | NFP requires vehicle information during registration (**I**)                           | What vehicle-information entry errors occur? (**RH**)                       | Contextual document guidance may improve completion (**DH**)                                          | Guided registration concept   |
| Utility services present consumption and cycle information (**E**).   | Quantity + contextual cycle information | NFP quota information requires quantity and timing context (**I**)                     | Do users understand remaining allocation and reset timing? (**RH**)         | Clear remaining quantity + reset information may improve comprehension (**DH**)                       | Quota information concept     |
| mAadhaar / EUDCC demonstrate cryptographic QR verification (**E**).   | Offline-capable credential verification | Offline verification may be relevant if connectivity is a confirmed constraint (**I**) | What connectivity and verification conditions occur at stations? (**RH**)   | Offline verification could be explored if operational and technical feasibility is confirmed (**DH**) | Offline-verification concept  |

---

## 15. Evidence Quality & Sources

Competitor claims should be supported by authoritative documentation wherever possible.

Primary source categories include:

1. **Information and Communication Technology Agency (ICTA) of Sri Lanka:** Official documentation for GovPay and related public digital-service initiatives.

2. **Department of Motor Traffic (DMT) Sri Lanka:** Official e-services and vehicle-information resources.

3. **GovStack / ITU / DIAL:** Architectural specifications for digital public-service building blocks.

4. **Unique Identification Authority of India (UIDAI):** Official documentation relating to Aadhaar and QR-based credential verification.

5. **European Commission / EU Digital COVID Certificate documentation:** Technical and implementation documentation for EUDCC verification.

6. **Ceylon Electricity Board (CEB):** Official CEB Care/service documentation.

7. **Official commercial-service documentation:** Used where necessary to establish publicly documented capabilities of services such as PickMe or Shell.

No competitor capability should be treated as established evidence if it cannot be traced to a credible source.

---

## 16. Limitations

1. **Dynamic Commercial Platforms:** Commercial applications such as PickMe and Shell can change over time. Analysis therefore applies only to documented capabilities available during the research period (**E**).

2. **Market and Version Differences:** Some commercial and international services vary by country, product version, implementation, or deployment context. A documented capability in one implementation does not establish that it exists everywhere.

3. **Proprietary Backend Transparency:** Public documentation generally does not establish private backend architecture, server performance, operational staffing, or internal infrastructure.

4. **No Empirical User Evaluation:** This competitive analysis is an analyst-led comparative exercise. It does not establish user satisfaction, usability performance, accessibility outcomes, or actual behavior among NFP users.

5. **NFP Technical Unknowns:** The current causes of QR verification failures, station connectivity conditions, scanner hardware, transaction timing, and detailed backend architecture remain subject to primary and technical research.

6. **Comparative Context Limits:** A pattern that works in another service does not automatically transfer to NFP. Every candidate design opportunity must be evaluated against user needs, government policy, operational constraints, security requirements, and technical feasibility.

---

## 17. Research Validation Status

The following table tracks the validation status of comparative design opportunities before primary field research:

| **Opportunity ID** | **Proposed Design Opportunity**       | **Comparative Origin**                        | **Field / Research Validation Track**                                    | **Validation Status**   |
| ------------------ | ------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------ | ----------------------- |
| **OPP-01**         | Document-Guided Onboarding            | Structured public-service forms               | Citizen interviews and task-based research                               | **Requires Validation** |
| **OPP-02**         | Offline Cryptographic Verification    | mAadhaar / EUDCC                              | Station observation, operator interviews, technical feasibility analysis | **Requires Validation** |
| **OPP-03**         | Clear Quota and Reset Presentation    | Utility consumption interfaces                | Citizen interviews and comprehension testing                             | **Requires Validation** |
| **OPP-04**         | Staged Ownership Transfer Guidance    | Comparative administrative recovery workflows | Ownership-transfer user research and stakeholder validation              | **Requires Validation** |
| **OPP-05**         | Simplified Operator Verification View | EUDCC / verification interfaces               | Forecourt contextual inquiry and usability testing                       | **Requires Validation** |
| **OPP-06**         | Document-Assisted Account Recovery    | Comparative account-recovery workflows        | Recovery-user research and stakeholder/policy validation                 | **Requires Validation** |
| **OPP-07**         | Support Case Status Visibility        | Reference-based public-service workflows      | Support-user research and stakeholder validation                         | **Requires Validation** |
| **OPP-08**         | Multilingual Layout Resilience        | Sri Lankan multilingual services              | Multilingual usability/comprehension testing                             | **Requires Validation** |

---

## 18. Conclusion

This competitive analysis establishes an **evidence-informed comparative foundation** for the National Fuel Pass UX redesign proposal.

The analysis examines local public-service platforms, international digital public infrastructure, QR-based credential systems, utility services, mobility platforms, and commercial fueling workflows. These systems provide comparative examples of identity binding, credential verification, status visibility, recovery, multilingual interaction, and consumption information.

The analysis does **not** assume that competitor features should be directly transferred to NFP. Instead, candidate patterns are classified as inferences, research questions, or Design Hypotheses and must be validated against actual NFP users, station personnel, government stakeholders, policy constraints, and technical feasibility.

In particular, offline QR verification, staged ownership-transfer workflows, document-guided onboarding, quota visualization, and specialized operator interfaces remain **provisional opportunities rather than established requirements**.

The next stage is therefore primary research and evidence synthesis. Findings from `research/04-user-research.md` and subsequent stakeholder/field research should determine which, if any, of these comparative patterns become actual service requirements and design decisions.
