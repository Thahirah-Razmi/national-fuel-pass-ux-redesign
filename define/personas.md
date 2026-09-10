# Personas

## 1. Purpose

This document defines the provisional user archetypes for the National Fuel Pass (NFP) UX redesign project, executing Phase 3 (Define & Prioritize) of the UX Engineering protocol (`process/UX-PROCESS.md`).

These personas serve as working analytical models to structure primary research inquiries, inform service journey mapping, and guide early user-experience design hypotheses. They translate the stakeholder categories established in `research/03-stakeholder-analysis.md` and the evidence-backed problem areas identified in `define/problem-statement.md` into concrete, user-centered reference models.

Because primary field research has not yet been executed (`research/04-user-research.md`), these archetypes are explicitly designated as **evidence-informed provisional personas**. They do not represent real individuals, empirical survey cohorts, or validated user profiles. Instead, they provide a structured hypothesis framework that will be updated, merged, split, or replaced once field research data is collected and analyzed.

---

## 2. Persona Methodology

Provisional personas are used as working analytical models when primary field research has not yet been completed. In this project, they provide an initial structure for organizing research questions, service journeys, and early design hypotheses without presenting assumptions as empirical findings.

### Derivation & Evidence Coupling

These provisional archetypes are derived by synthesizing:

* Documented service rules, support topics, and registration workflows from official sources (`research/02-desk-research.md`) **E**.
* Stakeholder groups, service touchpoints, operational contexts, and responsibility relationships identified in `research/03-stakeholder-analysis.md` **E/I**.
* Target participant groups and research questions defined in `research/04-user-research.md` **RH**.
* Documented current-state and historical service conditions summarized in `define/problem-statement.md` **E/I**.

### Non-Representativeness Disclaimer

These archetypes are non-statistical, qualitative constructs. They do not claim to represent measured population percentages, demographic distributions, or verified behavioral frequencies within Sri Lanka.

No fictional names, manufactured quotes, unsupported socio-economic statistics, or fabricated research findings are attributed to these profiles.

### Validation & Lifecycle Management

Following primary field research, these provisional archetypes may be:

1. **Confirmed or retained:** Where empirical evidence supports the archetype.
2. **Modified:** Where research reveals different goals, contexts, or behaviors.
3. **Merged:** Where multiple archetypes demonstrate substantially overlapping needs and behaviors.
4. **Split:** Where research identifies meaningfully different behavioral or contextual groups.
5. **Retired or replaced:** Where research shows that an archetype does not adequately represent an important service context.

---

## 3. Epistemological Boundaries

To maintain alignment with the project's epistemological protocol, attributes within these provisional personas are classified using the following taxonomy:

* **E — Evidence:** Directly documented service rules, public guidelines, or verified observations.
* **I — Inference:** A reasoned interpretation derived from established evidence.
* **RH — Research Hypothesis:** An unverified user behavior, condition, need, or potential pain point requiring primary research.
* **DH — Design Hypothesis:** A proposed interaction or design direction requiring later validation.
* **TD — Technical Decision:** An engineering, architectural, or implementation decision.
* **UNKNOWN:** A condition, metric, behavior, or technical mechanism not established by the available evidence.

Assumptions embedded within these provisional archetypes are treated as hypotheses requiring empirical verification rather than established facts.

---

## 4. Persona Overview

The following five provisional archetypes correspond to the major user contexts identified in the approved stakeholder analysis and user-research plan.

| ID       | Provisional Archetype                            | Primary Context                                                                                                           | Evidence Basis                                                        | Validation Status                                  |
| -------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------- |
| **P-01** | Everyday Private Vehicle User                    | Personal transportation using private motor vehicles.                                                                     | `research/02-desk-research.md`, `research/03-stakeholder-analysis.md` | **PROVISIONAL — Requires primary research (RH)**   |
| **P-02** | Commercial / Daily-Income Vehicle User           | Contexts where vehicle usage is connected to commercial or daily-income activity.                                         | `research/02-desk-research.md`, `research/03-stakeholder-analysis.md` | **PROVISIONAL — Requires primary research (RH)**   |
| **P-03** | Heavy Transport / Agriculture / Operational User | Production, essential-service, agricultural, or other non-standard operational contexts.                                  | `research/02-desk-research.md`, `research/03-stakeholder-analysis.md` | **PROVISIONAL — Requires primary research (RH)**   |
| **P-04** | Limited Digital Access / Digital Literacy User   | Contexts involving potential digital-access, literacy, connectivity, or accessibility constraints.                        | `research/04-user-research.md`                                        | **PROVISIONAL — Requires primary research (RH)**   |
| **P-05** | Temporary / Foreign User                         | Temporary or foreign users for whom applicable registration requirements may differ from ordinary resident-user pathways. | `research/02-desk-research.md`, `research/03-stakeholder-analysis.md` | **PROVISIONAL — Requires pathway validation (RH)** |

---

# 5. Provisional Persona P-01 — Everyday Private Vehicle User

### Context

Represents citizens using private motor vehicles for personal transportation.

Relevant documented service interactions include registration, QR-based fuel verification, fuel-allocation information, and procedures associated with changes to registered contact or vehicle information (`research/02-desk-research.md`, `research/03-stakeholder-analysis.md`) **E**.

### Likely Goals

* Complete the applicable NFP registration process using the required identity and vehicle information **E**.
* Obtain and present a valid fuel-pass QR credential during fuel transactions **E**.
* Understand applicable fuel allocation and reset information **E/I**.
* Access appropriate support or re-registration procedures when registered contact or vehicle information changes **E**.

### Potential Needs

* Clear instructions explaining required registration information **E/I**.
* Understandable guidance for relevant account or contact-number recovery situations **E/I/RH**.
* Clear presentation of applicable fuel allocation and reset information **I/RH**.

### Potential Pain Points

The following are hypotheses requiring validation:

* **RH:** Users may be uncertain about the correct procedure when a registered mobile number becomes inactive or changes.
* **RH:** Users may experience difficulty or errors when entering vehicle or chassis information.
* **RH:** Users may misunderstand current allocation or reset information, particularly where historical and current service rules differ.

### Behaviours Requiring Validation

* How users currently obtain, store, and present their QR credentials **RH**.
* How frequently users check fuel allocation information **RH**.
* What users do when registration, contact-number, or vehicle-information problems occur **RH**.
* Whether users seek assistance from official or informal sources when encountering difficulties **RH**.

### Accessibility / Language Considerations

* The service provides Sinhala, Tamil, and English access **E**.
* Appropriate text readability, form presentation, and interaction guidance require validation across relevant user contexts **RH**.

### Evidence and Classification

* **E:** NFP documentation establishes registration, QR verification, fuel allocation, and relevant recovery/re-registration mechanisms.
* **I:** These service requirements create information and interaction points where clarity may influence successful completion.
* **RH:** Actual user difficulties, frequency of errors, and recovery behavior require primary research.

### Research Questions

* **RQ-A1:** How do users currently register, obtain, store, and present their fuel-pass QR codes?
* **RQ-A2:** What specific friction points occur when users change registered phone numbers or vehicle details?
* **RQ-A3:** How clearly do users understand quota balances, allocation rules, and weekly reset schedules?

---

# 6. Provisional Persona P-02 — Commercial / Daily-Income Vehicle User

### Context

Represents users operating vehicles in contexts where vehicle use is connected to commercial activity or daily income.

The service provides fuel allocation parameters for different vehicle categories **E**. The extent to which fuel-pass interactions affect commercial operations requires primary research **RH**.

### Likely Goals

* Maintain access to fuel required for their vehicle's applicable operational context **I**.
* Complete fuel verification and dispensing interactions **I**.
* Understand applicable allocation limits and remaining allocation **I/RH**.
* Resolve registration, verification, or support issues when they arise **RH**.

### Potential Needs

* Efficient access to the applicable fuel-pass credential during station interactions **I/RH**.
* Clear information about applicable fuel allocations **I/RH**.
* Understandable recovery and support guidance when service problems occur **RH**.

### Potential Pain Points

* **RH:** Fuel-access or verification problems may affect commercially dependent users' operations.
* **RH:** Verification delays or unsuccessful scans may create additional time costs during station visits.
* **RH:** Users may experience difficulty resolving service issues while engaged in daily commercial activity.

### Behaviours Requiring Validation

* Frequency of fuel-station visits **RH**.
* Methods used to present QR credentials **RH**.
* How users monitor fuel allocation in relation to their operational needs **RH**.
* Whether verification conditions create observable delays or repeated attempts **RH**.

### Accessibility / Language Considerations

* The service provides Sinhala, Tamil, and English access **E**.
* The effect of ambient conditions on credential presentation and interface readability requires field observation **RH**.
* Appropriate language and information density for rapid task completion require validation **RH**.

### Evidence and Classification

* **E:** Different vehicle categories have documented fuel-allocation parameters.
* **I:** Fuel access is relevant to users operating vehicles for commercial purposes.
* **RH:** The actual operational effect of verification, queueing, and recovery issues requires field research.

### Research Questions

* **RQ-A1:** How do users currently register, obtain, store, and present their fuel-pass QR codes?
* **RQ-A3:** How clearly do users understand quota balances, allocation rules, and weekly reset schedules?
* **RQ-C2:** What technical or environmental factors affect QR verification performance at station forecourts?

---

# 7. Provisional Persona P-03 — Heavy Transport / Agriculture / Operational User

### Context

Represents users operating vehicles or equipment in production, essential-service, agricultural, commercial transport, or other non-standard operational contexts.

Official documentation establishes special mechanisms for certain production, essential-service, agricultural, and non-standard vehicle contexts **E**.

The exact actors, workflows, documentation, and administrative responsibilities associated with these cases are not fully established by desk research **UNKNOWN/RH**.

### Likely Goals

* Understand and access applicable fuel-allocation mechanisms for specialized or non-standard operational contexts **I/RH**.
* Complete applicable registration or allocation procedures **RH**.
* Maintain operational continuity where fuel access is necessary for the user's activity **I**.

### Potential Needs

* Clear information about eligibility and applicable documentation **I/RH**.
* Understandable explanation of applicable special allocation procedures **RH**.
* Clear status or support information where exceptional procedures are involved **RH**.

### Potential Pain Points

* **RH:** Users may be uncertain about documentation required for special or non-standard fuel-allocation cases.
* **RH/UNKNOWN:** The actual workflow, responsible actors, documentation requirements, and administrative handling of exceptional allocation cases require primary research.
* **RH:** Exceptional cases may involve additional uncertainty or support requirements.

### Behaviours Requiring Validation

* How users apply for and manage special or non-standard fuel allocations **RH**.
* Which organizations or administrative actors users interact with **RH/UNKNOWN**.
* How fuel-pass credentials are presented or managed in operational contexts **RH**.
* Whether exceptional cases require additional support or escalation **RH**.

### Accessibility / Language Considerations

* Clear and structured information should be investigated for users dealing with specialized procedures **RH**.
* Appropriate language and documentation presentation require validation **RH**.

### Evidence and Classification

* **E:** Special allocation mechanisms exist for certain production, essential-service, agricultural, and non-standard contexts.
* **I:** Specialized operational contexts may require information beyond ordinary private-vehicle registration.
* **RH/UNKNOWN:** Actual workflows and user difficulties require primary research.

### Research Questions

* **RQ-A3:** How clearly do users understand quota balances, allocation rules, and weekly reset schedules?
* **RQ-E1:** What support and escalation categories arise in relevant service interactions?
* **RQ-E3:** How are special or non-standard fuel-allocation requests processed and managed?

---

# 8. Provisional Persona P-04 — Limited Digital Access / Digital Literacy User

### Context

Represents users who may experience constraints related to digital literacy, smartphone or device access, connectivity, or accessibility when interacting with digital public services.

These conditions are identified as participant contexts and research areas in `research/04-user-research.md` **RH**. Their prevalence and actual effect on NFP interactions have not yet been established.

### Likely Goals

* Complete required fuel-pass tasks with understandable and manageable digital interactions **I/RH**.
* Access and present a valid fuel-pass credential through applicable methods **E/RH**.
* Understand fuel allocation and service instructions **I/RH**.
* Obtain appropriate assistance or recovery support when self-service is unsuccessful **RH**.

### Potential Needs

* Clear and simple instructions for registration and credential access **I/RH**.
* Accessible information and navigation across supported languages **RH/DH**.
* Understandable support and recovery pathways **RH**.

### Potential Pain Points

* **RH:** Users with limited digital access may require assistance with registration or account-related tasks.
* **RH:** Users with lower digital confidence may experience difficulty navigating multi-step digital processes.
* **RH:** Users may experience difficulty accessing or presenting their fuel-pass credential under constrained device or connectivity conditions.

### Behaviours Requiring Validation

* Whether users rely on assistance from family, friends, service providers, or other people **RH**.
* Device types and connectivity conditions used when accessing the service **RH**.
* Methods used to obtain, store, and present fuel-pass credentials **RH**.
* How users seek help when they cannot complete a digital task independently **RH**.

### Accessibility / Language Considerations

* **E:** The public service supports Sinhala, Tamil, and English.
* **RH/DH:** Appropriate readability, navigation, QR presentation, and multilingual layout requirements require validation before visual design decisions are finalized.
* **RH:** The effect of device characteristics and connectivity limitations requires field investigation.

### Evidence and Classification

* **E:** Multilingual public service access is documented.
* **I:** Users with lower digital confidence may benefit from clearer instructional structures, but the extent of this need requires validation.
* **RH:** Actual device usage, assistance patterns, accessibility barriers, and alternative credential-presentation methods require field research.

### Research Questions

* **RQ-A1:** How do users currently register, obtain, store, and present their fuel-pass QR codes?
* **RQ-D1:** How do users with limited digital access or non-smartphone devices interact with the fuel-pass system?
* **RQ-D2:** What language or readability barriers exist across supported interfaces and device contexts?
* **RQ-D3:** How do alternative or offline credential-presentation methods perform during station verification?

---

# 9. Provisional Persona P-05 — Temporary / Foreign User

### Context

Represents temporary or foreign users for whom passport-based or other applicable registration requirements may be relevant.

Official documentation provides evidence concerning passport-based registration parameters, while the actual current pathway and interaction patterns for temporary or foreign users require validation **E/RH**.

### Likely Goals

* Understand whether and how they are eligible to register for fuel access **RH**.
* Complete applicable registration requirements using eligible identification documentation **E/RH**.
* Understand applicable fuel-allocation and station-verification procedures **I/RH**.
* Obtain and present a valid fuel-pass credential where applicable **E/RH**.

### Potential Needs

* Clear information about registration eligibility and applicable identification requirements **E/I**.
* Understandable guidance for temporary or foreign-user scenarios **RH**.
* Accessible support when registration or verification is unsuccessful **RH**.

### Potential Pain Points

* **RH:** Users may be unfamiliar with local government service structures or fuel-allocation procedures.
* **RH/UNKNOWN:** Actual registration procedures and eligibility rules for temporary or foreign-user scenarios require pathway verification.
* **RH:** Users may encounter difficulties when providing identification information required by the applicable registration process.

### Behaviours Requiring Validation

* Registration methods used by temporary or foreign users **RH**.
* Information sources consulted before using the service **RH**.
* Support or recovery needs encountered by temporary or foreign users **RH**.
* Language preferences and information requirements **RH**.

### Accessibility / Language Considerations

* **RH:** Language preferences and guidance needs of temporary or foreign users require validation.
* **RH/DH:** Identification-field formatting and guidance should be based on validated pathway requirements rather than assumed user behavior.

### Evidence and Classification

* **E:** Passport-based registration parameters are documented in historical official service guidance.
* **I:** Temporary or foreign users may require clear explanation of local service procedures.
* **RH/UNKNOWN:** Current interaction patterns, applicable pathways, and prevalence require validation.

### Research Questions

* **RQ-A1:** How do users currently register, obtain, store, and present their fuel-pass QR codes?
* **RQ-A2:** What specific friction points occur when users change registered phone numbers or vehicle details?

---

# 10. Cross-Persona Design Considerations Requiring Validation

The following dimensions recur across multiple provisional archetypes. They are **design considerations requiring validation**, not finalized product requirements.

### 10.1 Onboarding and Form Entry

Investigate whether users understand:

* required identity information;
* vehicle information;
* chassis information;
* registration steps;
* validation errors;
* actions required after unsuccessful submission.

**Classification: E/I/RH**

### 10.2 Allocation and Reset Information

Investigate whether users understand:

* applicable allocation;
* remaining allocation;
* allocation rules;
* current reset schedule;
* differences between current and historical information.

**Classification: E/I/RH**

### 10.3 QR Credential Access and Presentation

Investigate:

* how users obtain their credential;
* how they store it;
* how they present it;
* what happens when verification is unsuccessful;
* whether environmental or device conditions affect the interaction.

**Classification: E/RH**

### 10.4 Account and Recovery Guidance

Investigate:

* contact-number changes;
* ownership or vehicle-information changes;
* unsuccessful registration;
* credential-access problems;
* support escalation.

**Classification: E/I/RH**

### 10.5 Multilingual and Accessible Interaction

Investigate:

* language preferences;
* readability;
* information hierarchy;
* interaction complexity;
* script rendering;
* device and accessibility requirements.

**Classification: E/RH/DH**

### 10.6 Error, Exception, and Support Communication

Investigate:

* how users understand errors;
* what information they need to recover;
* when users seek support;
* what support channels they use;
* how exceptional cases are communicated.

**Classification: I/RH**

---

# 11. Persona Comparison Matrix

The following matrix compares **research relevance**, not measured user characteristics.

| Dimension                   | P-01 Everyday Private  | P-02 Commercial / Income | P-03 Heavy / Agriculture | P-04 Limited Digital Access | P-05 Temporary / Foreign    |
| --------------------------- | ---------------------- | ------------------------ | ------------------------ | --------------------------- | --------------------------- |
| Registration                | Relevant research area | Relevant research area   | Relevant research area   | Primary research focus      | Pathway requires validation |
| Ownership / Contact Changes | Relevant research area | Relevant research area   | Relevant research area   | Relevant research area      | Relevant research area      |
| QR Verification             | Relevant research area | Relevant research area   | Relevant research area   | Primary research focus      | Relevant research area      |
| Allocation Understanding    | Relevant research area | Relevant research area   | Relevant research area   | Relevant research area      | Relevant research area      |
| Recovery                    | Relevant research area | Relevant research area   | Relevant research area   | Primary research focus      | Relevant research area      |
| Digital Access              | Requires validation    | Requires validation      | Requires validation      | Primary research focus      | Requires validation         |
| Language / Accessibility    | Relevant research area | Relevant research area   | Relevant research area   | Primary research focus      | Requires validation         |
| Exceptional Cases           | Requires validation    | Requires validation      | Primary research focus   | Requires validation         | Requires validation         |

---

# 12. Persona Validation Plan

The provisional personas will be validated through the research methods and participant targets defined in `research/04-user-research.md`.

### Approved Planning Targets

* **Citizen participants:** 26–33 proposed
* **Station participants:** 9–12 proposed
* **Total participants:** 35–45 proposed
* **Quantitative survey:** 50–100 proposed

These are planning targets only. They do not represent completed research.

### Research Methods

1. **Semi-Structured Citizen Interviews**

   * Investigate registration, QR presentation, allocation understanding, contact changes, recovery, accessibility, and language needs.
   * Relevant primarily to P-01, P-02, P-04, and P-05.

2. **Contextual Inquiry and Fuel-Station Observation**

   * Investigate actual QR presentation, verification workflow, observable delays, device context, environmental conditions, and exception handling.
   * Relevant primarily to P-01, P-02, and P-04, with other contexts included where encountered.

3. **Digital Access and Accessibility Research**

   * Investigate digital literacy, device access, connectivity, language, and accessibility barriers.
   * Relevant primarily to P-04.

4. **Station, Support, and Administrative Interviews**

   * Investigate support categories, recovery procedures, station workflow, and exceptional allocation contexts.
   * Relevant primarily to P-03 and relevant service stakeholders.

5. **Quantitative Survey**

   * Investigate the prevalence of selected behaviors, access conditions, service difficulties, and user characteristics identified through the qualitative research plan.

### Potential Persona Lifecycle Outcomes

Following analysis, each provisional archetype may be:

* **Retained or confirmed** where evidence supports it;
* **Modified** where research changes the understanding of the group;
* **Merged** where behavioral patterns substantially overlap;
* **Split** where meaningful sub-groups emerge;
* **Retired or replaced** where the archetype is not supported;
* **Expanded** where research identifies an important user context not currently represented.

---

# 13. Persona-to-Research Traceability

| Persona  | Relevant Research Questions | Proposed Research Methods                                         | Current Status                               |
| -------- | --------------------------- | ----------------------------------------------------------------- | -------------------------------------------- |
| **P-01** | RQ-A1, RQ-A2, RQ-A3         | Citizen interviews, contextual inquiry, survey                    | **PROVISIONAL — Pending primary research**   |
| **P-02** | RQ-A1, RQ-A3, RQ-C2         | Commercial-user interviews, station contextual inquiry, survey    | **PROVISIONAL — Pending primary research**   |
| **P-03** | RQ-A3, RQ-E1, RQ-E3         | Operational/admin interviews, contextual inquiry where applicable | **PROVISIONAL — Pending primary research**   |
| **P-04** | RQ-A1, RQ-D1, RQ-D2, RQ-D3  | Accessibility interviews, contextual inquiry, observation         | **PROVISIONAL — Pending primary research**   |
| **P-05** | RQ-A1, RQ-A2                | Pathway-focused interviews and desk verification                  | **PROVISIONAL — Pending pathway validation** |

---

# 14. Persona-to-Problem Traceability

The provisional personas are linked to the problem areas identified in `define/problem-statement.md`.

| Problem Area                                  | Relevant Personas            | Classification | Downstream UX Implication                                  |
| --------------------------------------------- | ---------------------------- | -------------- | ---------------------------------------------------------- |
| **Ownership, Registration, and Recovery**     | P-01, P-02, P-03, P-04, P-05 | E/I/RH         | Input to journey and requirement analysis after validation |
| **QR Verification and Forecourt Interaction** | P-01, P-02, P-03, P-04, P-05 | E/RH           | Input to verification-flow research and requirements       |
| **Allocation / Quota Comprehension**          | P-01, P-02, P-03, P-04, P-05 | E/I/RH         | Input to information-architecture and content requirements |
| **Support and Escalation**                    | P-01, P-02, P-03, P-04, P-05 | E/RH           | Input to support and recovery journey analysis             |
| **Accessibility and Inclusive Access**        | P-01, P-02, P-03, P-04, P-05 | E/RH           | Input to accessibility and multilingual requirements       |
| **Exceptional / Non-Standard Contexts**       | P-03, potentially P-05       | E/RH/UNKNOWN   | Input to exception-flow research and service requirements  |

No final interface or feature is implied by this mapping.

---

# 15. Design Use and Limitations

## Permissible Design Uses

During the Define & Prioritize phase, these provisional personas may be used to:

1. Structure potential user-journey scenarios.
2. Identify research gaps.
3. Organize service contexts for contextual inquiry.
4. Generate design hypotheses for later validation.
5. Ensure early requirements consider diverse service contexts.
6. Identify accessibility and multilingual questions for investigation.

## Impermissible Misuses

These provisional personas must **not** be used to:

* claim that a user group definitely experiences a particular problem;
* claim a specific problem frequency or severity;
* represent fabricated interview participants;
* justify final feature prioritization without supporting evidence;
* establish technical requirements that have not been validated;
* replace primary research or usability testing.

Final design prioritization and requirements should be updated using validated research findings.

---

# 16. Research Validation Status

**Document Status: PROVISIONAL — REQUIRES PRIMARY RESEARCH VALIDATION**

### Established Evidence

The current evidence base establishes relevant service rules, QR-based verification requirements, allocation information, support mechanisms, multilingual public-service access, and special mechanisms for certain operational contexts.

### Unvalidated Elements

The following remain unvalidated:

* behavioral frequencies;
* user pain-point severity;
* device distributions;
* credential-storage and presentation methods;
* accessibility barriers;
* language preferences;
* support-seeking behavior;
* operational impact of verification issues;
* temporary/foreign-user interaction patterns;
* actual station workflow variations.

These require primary research and must not be presented as established findings.

---

# 17. Next Steps

Following approval of this provisional persona document, the next activities are:

1. **Develop User Journeys:** Create `define/user-journeys.md` to map service touchpoints and potential user pathways.
2. **Execute Primary User Research:** Conduct interviews, contextual inquiry, station observation, and survey research according to `research/04-user-research.md`.
3. **Validate and Revise Personas:** Update the provisional archetypes using empirical findings.
4. **Formulate Requirements:** Develop `define/requirements.md` from validated research and service requirements.
5. **Establish Design Principles:** Develop `define/design-principles.md` to guide subsequent interaction and visual design.

---

# 18. Conclusion

This document establishes five evidence-informed provisional personas representing important user contexts within the National Fuel Pass service.

The personas provide a structured baseline for research and early service-design work while maintaining a clear distinction between documented evidence, inference, research hypotheses, and unknown conditions.

They are not validated representations of the Sri Lankan population and must not be treated as empirical findings.

Primary research will determine whether these archetypes should be retained, modified, merged, split, or replaced. Subsequent design decisions should be traced back to validated research evidence rather than to assumptions contained within these provisional personas.
