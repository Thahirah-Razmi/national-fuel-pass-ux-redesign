# UX Engineering Methodology Protocol

## Redesigning Sri Lanka's National Fuel Pass

**Project Classification:** Academic UX Engineering Proposal & Evidence-Informed React MVP/Prototype

**Core Objective:** Establish a rigorous, evidence-grounded UX Engineering methodology for public infrastructure service design, balancing digital transformation with real-world accessibility, operational constraints, and digital divide inclusion.

---

## 1. Guiding Principles & Epistemological Taxonomy

To ensure scientific integrity and eliminate speculative design decisions, all project outputs, documentation, and interface components must explicitly categorize every claim using the following **Epistemological Taxonomy**:

```
                                  [ PROJECT INPUTS ]
                                          │
       ┌──────────────────────────────────┴──────────────────────────────────┐
       ▼                                                                     ▼
[ RESEARCH EVIDENCE ]                                            [ WORKING HYPOTHESES ]
Directly observable data                                        Unverified assumptions
(Docs, News, Field Studies)                                     (To be tested & validated)
       │                                                                     │
       ▼                                                                     ▼
  1. EVIDENCE ────────────────► 2. INFERENCE ────────────────► 3. DESIGN HYPOTHESIS
Direct empirical facts        Logical deductions from         Proposed solution targeting
and primary data.             observed evidence patterns.      inferred user needs.
                                                                             │
                                                                             ▼
                                                         4. TECHNICAL IMPLEMENTATION DECISION
                                                         Engineering architecture chosen to
                                                         satisfy design hypotheses within constraints.

```

### Classification Definitions

1. **Evidence (E):** Primary or secondary data points directly observed, documented, or extracted from verified public archives, legislative documents, official media releases, or field observations (e.g., *“Fuel station queues in 2022 experienced 3G/4G network throttling due to localized power outages.”*).
2. **Inference (I):** Logical deductions drawn by synthesizing multiple pieces of Evidence (e.g., *“Therefore, pump operators cannot rely solely on real-time server-side database lookups for QR code verification.”*).
3. **Design Hypothesis (DH):** Proposed service interactions or UI patterns intended to resolve an Inference, subject to empirical validation (e.g., *“Example: Providing a locally cached verification pass on the citizen's phone may allow pump operators to verify quotas during temporary connectivity losses.”*).
4. **Technical Implementation Decision (TD):** Specific engineering architectures, algorithms, or client-side code structures selected to execute a Design Hypothesis (e.g., *“Example: Storing verified pass metadata in browser IndexedDB with ServiceWorker offline fallback handling.”*).

> **Core Principle:** No major design decision should be presented as a fact unless it is supported by evidence. Otherwise, it must be explicitly labeled as an **Inference**, **Assumption**, **Design Hypothesis**, or **Technical Implementation Decision**.

---

## 2. Research Ethics, Privacy & Limitations Framework

Public sector research involves handling sensitive personal identifiable information (PII) and national infrastructure operational data. The project adheres to strict research ethics:

```
  INFORMED CONSENT                DATA ANONYMIZATION               NO SYNTHETIC DATA
┌──────────────────────────┐     ┌──────────────────────────┐     ┌──────────────────────────┐
│ Clear participant rights │     │ Complete removal of PII, │     │ Zero AI-generated        │
│ and opt-outs prior to    │ ──► │ masking of names, and    │ ──► │ interviews, stats, or    │
│ usability testing.       │     │ aggregated reporting.    │     │ fake survey responses.   │
└──────────────────────────┘     └──────────────────────────┘     └──────────────────────────┘
             │                                                                 │
             ▼                                                                 ▼
  ZERO SYNTHETIC PII                                             LIMITATIONS TRANSPARENCY
┌──────────────────────────┐                                      ┌──────────────────────────┐
│ Synthetic National Identity│                                    │ Explicit tagging of      │
│ Numbers (NIC) & vehicle  │ ───────────────────────────────────► │ unverified government    │
│ registration formats.    │                                      │ internal backend systems.│
└──────────────────────────┘                                      └──────────────────────────┘

```

* **Informed Consent & Voluntary Participation:** All human research and usability testing participants must receive clear information regarding the study's scope, data usage, and their right to withdraw at any point without penalty.
* **Data Anonymization & PII Handling:** Real National Identity Card (NIC) numbers, real vehicle registration numbers, phone numbers, and addresses **will never be collected, stored, or processed**.
* **Synthetic Test Identifiers:** All data utilized across research, prototyping, and testing will employ strictly synthetic patterns (e.g., `NIC: 000000000V`, `Vehicle: WP ABC-0000`).
* **Research Limitations & Assumptions:** Internal government technical architecture (such as real-time Department of Motor Traffic [DMT] APIs, server replication models, or petroleum storage database syncing) cannot be verified without internal access. These systems are treated as **unverified external dependencies** and modeled strictly through explicit architectural assumptions grounded in public technical literature.

---

## 3. Disciplinary Boundaries & Domain Separation

Public service transformations require clear operational separation across four distinct disciplines:

```
+---------------------------------------------------------------------------------------+
|                                  UX RESEARCH                                          |
|  Uncovers human behavior, operational realities, digital literacy gaps, and context   |
+---------------------------------------------------------------------------------------+
                                           │
                                           ▼
+---------------------------------------------------------------------------------------+
|                                   SERVICE DESIGN                                      |
|  Architects the multi-actor ecosystem: front-stage, back-stage, offline, and online  |
+---------------------------------------------------------------------------------------+
                                           │
                                           ▼
+---------------------------------------------------------------------------------------+
|                                     UX DESIGN                                         |
|  Structures interaction models, information architecture, micro-copy, and UI visuals  |
+---------------------------------------------------------------------------------------+
                                           │
                                           ▼
+---------------------------------------------------------------------------------------+
|                                   UX ENGINEERING                                      |
|  Translates designs into a functional React MVP with resilient web performance        |
+---------------------------------------------------------------------------------------+

```

### Disciplinary Scope Matrix

* **UX Research:** Investigates human behavior, social context, mental models, operational limitations, literacy rates, and physical environmental constraints (e.g., sunlight glare, noise). *Scope excludes UI layout design or code implementation.*
* **Service Design:** Maps multi-actor relationships, front-stage citizen/attendant actions, back-stage infrastructure processes, channel handoffs, offline fallbacks, and operational policies. *Scope excludes visual component styling or client-side code.*
* **UX Design:** Defines interaction models, navigation structures, information architecture, wireframing, trilingual visual layouts, micro-copy, and design system visual components. *Scope excludes server deployment and frontend build optimization.*
* **UX Engineering:** Translates validated UX specifications into performant, accessible, and offline-resilient web applications using frontend technologies (React, TypeScript, IndexedDB, Service Workers). *Scope excludes primary ethnographic discovery or policy formulation.*

---

## 4. Artificial Intelligence Usage Governance Policy

AI tools (e.g., Large Language Models) serve strictly as velocity multipliers for structural scaffolding, synthesis facilitation, and code generation. AI is strictly prohibited from substituting for human empirical evidence.

```
  STRICTLY PERMITTED AI USAGE                   PROHIBITED AI USAGE (FATAL METHODOLOGY VIOLATION)
┌──────────────────────────────────────────┐  ┌─────────────────────────────────────────────────┐
│ • Synthesizing RAW research transcripts  │  │ ❌ Generating synthetic user interviews         │
│ • Drafting initial code (React, CSS)     │  │ ❌ Fabricating survey results or statistics     │
│ • Trilingual copy translation drafts     │  │ ❌ Simulating usability test metrics or logs    │
│ • Edge-case checklists & matrix formats  │  │ ❌ Inventing stakeholder quotes or opinions     │
│ • Drafting structural layouts/outlines   │  │ ❌ Hallucinating unverified government facts    │
└──────────────────────────────────────────┘  └─────────────────────────────────────────────────┘

```

---

## 5. Traceability Architecture: Research-to-Code Matrix

To ensure every line of code in the final React MVP is traceable back to empirical research, the methodology enforces a **Traceability Matrix**:

```
[RESEARCH FINDING] ──► [PAIN POINT] ──► [SERVICE REQUIREMENT] ──► [DESIGN DECISION] ──► [REACT COMPONENT/CODE]
     (E-01)                 (PP-03)               (SR-02)                 (DH-05)                  (TD-01)

```

### Traceability Schema Structure

1. **Evidence ID (E-XX):** Empirical evidence item observed or extracted from documented sources.
2. **Inference / Pain Point ID (PP-XX):** Logical deduction regarding operational friction or user barriers.
3. **Service Requirement (SR-XX):** Functional or non-functional requirement defined to address the pain point.
4. **Design Hypothesis (DH-XX):** Proposed interaction pattern, layout, or flow hypothesized to fulfill the requirement.
5. **Technical Decision (TD-XX):** Engineering approach or code structure selected to build the design hypothesis within the React MVP.

---

## 6. Comprehensive 9-Phase UX Engineering Process

```
┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
│   PHASE 1: Project      │ ──►│   PHASE 2: Research     │ ──►│    PHASE 3: Define      │
│        Framing          │    │      & Discovery        │    │      & Prioritize       │
└─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘
                                                                           │
                                                                           ▼
┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
│   PHASE 6: Visual Design│ ◄──│   PHASE 5: Interaction  │ ◄──│   PHASE 4: Service      │
│     & Prototyping       │    │         Design          │    │  Design & Architecture  │
└─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘
             │
             ▼
┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
│   PHASE 7: Usability    │ ──►│   PHASE 8: React MVP    │ ──►│   PHASE 9: Evaluation   │
│   Testing & Iteration   │    │       Engineering       │    │     & Documentation     │
└─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘

```

---

### Phase 1: Project Framing

#### Objective

Establish structural scope, identify ecosystem actors, define operational boundaries, and construct the initial assumption ledger for the national fuel distribution context.

#### Key Questions

1. What regulatory, geographical, economic, and infrastructure constraints govern Sri Lanka's fuel distribution ecosystem?
2. Who are the primary, secondary, and tertiary actors involved across the service network?
3. What are the unverified technical assumptions regarding external institutional backend systems?

#### Activities

* **Ecosystem Actor Mapping:** Identifying interactions between citizens (various vehicle classes), pump operators, fuel station owners, distributors (CPC/LIOC), regulatory authorities, and IT providers.
* **Assumption Ledger Creation:** Cataloging all unverified technical and operational beliefs regarding infrastructure capabilities.
* **Boundary & Scope Definition:** Setting academic proposal limits (what the MVP will and will not simulate).

#### Methods

* Desk Research (Public policy records, official government announcements).
* Stakeholder Ecosystem Mapping.
* Boundary Matrix Analysis.

#### AI Role

* **Assisted:** Generating preliminary ecosystem templates; formatting actor relation tables.
* **Prohibited:** Creating unverified assumptions as facts or hallucinating government backend specs.

#### Human Role

Validating local context accuracy, establishing scope limits, and reviewing all assumption ledger entries.

#### Expected Deliverables

* Project Charter & Scope Statement.
* Ecosystem Actor Map.
* Initial Assumption & Constraint Ledger.

#### Evidence Needed to Proceed

Mapped ecosystem network representing all primary vehicle categories, station operators, and governing bodies, accompanied by a documented Assumption Ledger.

#### Risks

* Over-scoping the academic proposal to simulate full government backend enterprise systems.

#### Assumptions

* Public historical records regarding the 2022 Fuel Pass system provide sufficient structural context for framing.

---

### Phase 2: Research & Discovery

#### Objective

Conduct a baseline investigation into the operational realities, current-state processes, competitive global benchmarks, and lived experiences of fuel pass users and operators.

#### Key Questions

1. How does the current National Fuel Pass system operate from end-to-end across different user touchpoints?
2. What operational workarounds were developed by citizens and fuel station attendants to cope with system failures during past crisis periods?
3. What global benchmarks exist for digital quota/rationing systems in constrained environments?

#### Activities

* **Current-State Service Mapping:** Documenting the existing registration, quota allocation, QR generation, scanning, and station pump fulfillment steps.
* **Secondary Field & Archival Research:** Analyzing public reports, social forums, news archives, and field documentation on Sri Lankan fuel queue dynamics.
* **Competitive & Benchmark Research:** Evaluating international digital allocation systems under offline or low-literacy conditions.

#### Methods

* Current-State Flow Analysis.
* Archival Research & Media Syntheses.
* Competitive Benchmarking Analysis.

#### AI Role

* **Assisted:** Clustering secondary research text notes into themes; generating structural comparative tables for benchmark analysis.
* **Prohibited:** Inventing user field notes, fabricating survey metrics, or generating synthetic research interviews.

#### Human Role

Analyzing secondary data, verifying news source credibility, documenting physical pump station conditions from recorded sources, and validating current-state workflow models.

#### Expected Deliverables

* Current-State System & Workflow Audit.
* Secondary Research Insights Report.
* Global Competitive & Benchmark Analysis.

#### Evidence Needed to Proceed

Documented current-state workflow identifying known operational friction points, supported by verified public or secondary source evidence.

#### Risks

* Inability to access internal software documentation of the legacy National Fuel Pass system.

#### Assumptions

* Publicly documented user issues and media records accurately reflect primary operational bottlenecks.

---

### Phase 3: Define & Prioritize

#### Objective

Synthesize research findings, structure human-centered artifacts, define precise problem statements, establish evidence-grounded baseline usability and accessibility reference criteria, and prioritize system requirements.

#### Key Questions

1. What are the core user archetypes, pain points, and mental models across different literacy levels and vehicle classes?
2. What are the non-negotiable functional and non-functional requirements for an inclusive national solution?
3. What specific usability reference criteria and task performance baselines should be established for evaluation?

#### Activities

* **Research Synthesis & Affinity Mapping:** Grouping observed evidence into thematic pain-point clusters.
* **Persona & Journey Map Construction:** Developing evidence-backed user personas (e.g., rural tuk-tuk driver, elderly non-smartphone vehicle owner, pump attendant under intense queue pressure) and current-state journey maps.
* **Problem Definition & HMW Statements:** Framing "How Might We" statements grounded in synthesized pain points.
* **Requirements & Baseline Criteria Formulation:** Documenting Functional Requirements (FR), Non-Functional Requirements (NFR), and establishing target usability evaluation benchmarks based on research findings.
* **Feature Prioritization:** Applying MoSCoW (Must have, Should have, Could have, Won't have) matrix alignment.

#### Methods

* Affinity Diagramming.
* Persona & Customer Journey Mapping (CJM).
* How Might We (HMW) Framework.
* MoSCoW Prioritization.
* Usability Evaluation Reference Formulation.

#### AI Role

* **Assisted:** Organizing raw synthesized notes into affinity clusters; drafting structural persona templates from provided evidence.
* **Prohibited:** Generating synthetic persona traits not supported by research evidence or inventing user quotes.

#### Human Role

Facilitating synthesis, approving persona archetypes, defining baseline evaluation targets based on research realities, and making final requirement prioritization decisions.

#### Expected Deliverables

* Synthesized Affinity Map & Pain Point Index.
* Evidence-Grounded User Personas & Journey Maps.
* HMW Problem Statements & Design Principles.
* Prioritized Requirements Specification (FRs & NFRs).
* Usability Evaluation Reference Matrix.

#### Evidence Needed to Proceed

Prioritized requirements matrix explicitly linking every "Must Have" requirement back to an Evidence ID or Inference ID.

#### Risks

* Feature creep resulting in an overly complex service model unsuited for low-literacy users.

#### Assumptions

* Standard MoSCoW prioritization effectively balances digital inclusion with public institutional constraints.

---

### Phase 4: Service Design & Architecture

#### Objective

Architect the future-state service ecosystem, mapping front-stage human interactions to back-stage processes, physical station mechanics, offline fallbacks, and error recovery channels.

#### Key Questions

1. How does the complete service function across digital, paper-based, SMS, and physical station touchpoints?
2. How does the service handle system edge cases (e.g., failed connectivity, registration ownership transfer, lost QR printouts, server timeouts)?
3. What physical offline mechanics ensure fuel queue progress when digital systems fail?

#### Activities

* **Future-State Service Blueprinting:** Mapping customer actions, pump attendant actions, line-of-sight boundaries, back-stage system processes, and support infrastructure across both connected and disconnected states.
* **Error & Recovery Journey Mapping:** Designing explicit fallback paths for system, human, and hardware failure modes.
* **System Architecture Modeling (Hypothesized):** Diagramming theoretical data flows between frontend client applications, local browser storage, local edge scanners, and external institutional databases.

#### Methods

* Service Blueprinting.
* Edge-Case & Exception Workflow Mapping.
* System Data-Flow Diagramming.

#### AI Role

* **Assisted:** Generating preliminary failure-mode checklists; formatting complex service blueprint tables.
* **Prohibited:** Deciding policy mechanics or inventing unverified backend database synchronization protocols.

#### Human Role

Designing realistic offline operational fallbacks, evaluating physical queue management safety, and approving service blueprints.

#### Expected Deliverables

* Future-State Multi-Actor Service Blueprint.
* Comprehensive Error, Exception & Recovery Matrix.
* Hypothesized Technical System Architecture Diagram.

#### Evidence Needed to Proceed

A validated future-state service blueprint containing defined recovery channels for all identified failure modes.

#### Risks

* Service blueprints becoming overly reliant on back-stage automation that cannot be implemented in resource-constrained environments.

#### Assumptions

* Station attendants are capable of executing simplified physical fallback protocols during network connectivity losses.

---

### Phase 5: Interaction Design

#### Objective

Define the information architecture, navigation logic, user flows, and low-fidelity screen layouts prioritizing clarity, minimal cognitive effort, and trilingual support.

#### Key Questions

1. How can navigation structures be organized so users access primary status information with minimal interactions?
2. How do Sinhala, Tamil, and English language scripts affect interface layout, text scaling, and spatial density?
3. What is the interaction sequence required for a station operator to complete a verification task?

#### Activities

* **Information Architecture (IA) Mapping:** Constructing sitemaps and tree structures for citizen and pump operator views.
* **User Flow Diagramming:** Mapping step-by-step paths for core tasks (Registration, Quota View, Quota Transfer Request, Scanning, Offline Verification).
* **Wireframing & Structural Layouts:** Designing low-fidelity layouts for mobile, desktop, and handheld scanner viewports.

#### Methods

* Information Architecture & Sitemap Tree.
* Task Flow / User Flow Diagramming.
* Low-Fidelity Wireframing (Paper / Digital).

#### AI Role

* **Assisted:** Drafting user flow logic trees; suggesting structural wireframe layout schemas based on screen sizes.
* **Prohibited:** Generating visual UI styles, choosing color schemes, or writing localized copy without human review.

#### Human Role

Reviewing IA for simplicity, validating trilingual text fitting, ensuring low-literacy accessibility, and approving wireframe structures.

#### Expected Deliverables

* Complete Sitemap & Information Architecture Map.
* End-to-End User Flow Diagrams.
* Low-Fidelity Wireframe Suite (Citizen & Operator Interfaces).

#### Evidence Needed to Proceed

Approved wireframe suite demonstrating complete task flows for both citizen and operator primary journeys.

#### Risks

* Trilingual text length variations (Sinhala/Tamil phrasing often requiring more spatial area than English) breaking visual layout bounds.

#### Assumptions

* Card-based, vertical linear layouts accommodate multi-script typography more effectively than dense multi-column layouts.

---

### Phase 6: Visual Design & Prototyping

#### Objective

Develop an accessible design system evaluated against reference standards (e.g., WCAG legibility and touch-target guidelines), construct high-fidelity trilingual interface screens, and build an interactive prototype for usability testing.

#### Key Questions

1. How well does the visual interface align with established accessibility reference standards (e.g., contrast ratios and touch-target dimensions)?
2. How can visual hierarchy, iconography, and status colors communicate state clearly without relying solely on written text?
3. How effectively does the high-fidelity design support switching between Sinhala, Tamil, and English?

#### Activities

* **Design System Development:** Creating a component library (buttons, typography scales for Sinhala/Tamil/English, status badges, high-contrast QR containers, progress meters) evaluated against accessibility reference standards for outdoor legibility.
* **High-Fidelity UI Design:** Crafting polished screen layouts applying the design system.
* **Interactive Prototyping:** Assembling clickable interactive prototypes (Figma or web-based) for usability validation.

#### Methods

* WCAG 2.1 AA Reference Standard Evaluation.
* Component-Driven Design System Architecture.
* Interactive Prototyping.

#### AI Role

* **Assisted:** Generating design token schemas (JSON colors, spacing arrays); generating initial localized text string dictionaries.
* **Prohibited:** Creating low-contrast visual components that fail baseline legibility or generating non-standard typography mappings.

#### Human Role

Auditing visual contrast under simulated outdoor sunlight, verifying trilingual script readability, and validating interaction feedback.

#### Expected Deliverables

* Trilingual Design System & Style Guide.
* High-Fidelity UI Screen Suite.
* Interactive Design Prototype (Ready for testing).

#### Evidence Needed to Proceed

Visual design system evaluated against WCAG 2.1 AA reference guidelines (e.g., target contrast ratios and touch-target dimensions) and approved interactive prototype.

#### Risks

* Visual design over-emphasizing aesthetic trends at the expense of outdoor readability.

#### Assumptions

* High-contrast design tokens significantly improve screen legibility under direct sunlight at fuel stations.

---

### Phase 7: Usability Testing & Iterative Refinement

#### Objective

Evaluate the interactive prototype with human participants representing diverse digital literacy levels and vehicle classes to collect empirical usability evidence and refine design solutions prior to React implementation.

#### Key Questions

1. What task completion rates, time-on-task metrics, and error patterns emerge during execution of primary workflows?
2. Where do non-digital or low-literacy users encounter friction when attempting to view or present their fuel QR code?
3. How easily do station operators understand and navigate simulated offline verification states?

#### Activities

* **Usability Test Plan & Protocol Design:** Structuring scenario-based task scripts, participant screening criteria, and quantitative/qualitative data recording templates.
* **Facilitated Usability Testing Sessions:** Conducting observational testing sessions with human participants under ethical protocols (informed consent, anonymized data collection).
* **Data Synthesis & Issue Prioritization:** Analyzing task completion, time-on-task, error rates, and qualitative feedback using a severity matrix.
* **Iterative Design Refinement:** Updating high-fidelity designs and prototypes to address identified usability breakdowns.

#### Methods

* Scenario-Based Moderated Usability Testing.
* Qualitative Observation & Think-Aloud Protocol.
* Usability Severity Ranking (Critical, Major, Minor).
* System Usability Scale (SUS) or Single Ease Question (SEQ) evaluation (used as post-baseline measurements).

#### AI Role

* **Assisted:** Synthesizing anonymized observer notes into thematic usability issue matrices; formatting testing scenario script sheets.
* **Prohibited:** Fabricating usability testing data, generating synthetic participant observations, or altering metrics.

#### Human Role

Facilitating live human testing sessions, observing physical behavior and confusion markers, recording accurate task completion metrics, and executing design iterations.

#### Expected Deliverables

* Usability Testing Plan & Ethical Protocol Document.
* Empirical Usability Evaluation Report (Completion Rates, Error Logs, Usability Scores).
* Prioritized Usability Issue & Iteration Backlog.
* Validated/Revised High-Fidelity Design Specifications.

#### Evidence Needed to Proceed

Empirical usability evaluation report documenting identified friction points, with all critical severity usability issues addressed in revised design iterations.

#### Risks

* Participant sampling bias favoring tech-savvy individuals over digitally marginalized citizens.

#### Assumptions

* Scenario-based testing accurately reveals operational friction points despite lacking physical fuel station queue pressure.

---

### Phase 8: React MVP Engineering

#### Objective

Translate validated UI designs and service architectures into a functional, hosted React MVP featuring local state persistence, offline capabilities, accessible markup, and trilingual localization.

#### Key Questions

1. How effectively does the client application handle offline states, local storage data persistence, and background sync simulations?
2. Is the frontend code accessible, responsive across budget mobile devices, and performant under throttled CPU/network conditions?
3. How is the trilingual state managed dynamically without triggering layout jumps or performance degradation?

#### Activities

* **Frontend Architecture & Setup:** Initializing a React TypeScript application environment with state management, routing, and localization engines.
* **Accessible Component Implementation:** Coding design system components using semantic HTML5, ARIA attributes, keyboard focus management, and responsive CSS (Flexbox/Grid).
* **Offline & Resilience Engineering:** Implementing Service Workers for static asset caching, LocalStorage/IndexedDB for local offline data persistence, and simulated network offline toggles.
* **State & Flow Integration:** Wiring citizen registration, quota dashboards, offline pass generation hypotheses, and attendant scanning simulation interfaces.

#### Methods

* Component-Driven Frontend Architecture (React, TypeScript).
* Progressive Web App (PWA) / Service Worker Offline Implementation.
* Client-Side State & Storage Persistence.
* Accessibility Validation (axe-core, Lighthouse auditing tools).

#### AI Role

* **Assisted:** Generating clean React components, boilerplate hooks, CSS modules, and local i18n translation key mapping objects.
* **Prohibited:** Writing non-accessible markup (e.g., non-semantic `div` buttons) or bypassing offline error handling.

#### Human Role

Reviewing frontend code quality, testing layout stability across real physical mobile viewports, verifying offline caching mechanics, and performing manual screen-reader testing.

#### Expected Deliverables

* React MVP Source Code Repository.
* Hosted Live Prototype Application.
* Technical Implementation & Offline Architecture Documentation.

#### Evidence Needed to Proceed

A fully compiled, hosted React web application evaluated against web standards (e.g., automated accessibility validation tools), functioning offline via Service Workers, and supporting instant trilingual toggling without layout breaks.

#### Risks

* Client-side verification logic causing performance lag on low-spec budget mobile hardware.

#### Assumptions

* Modern web browsers on budget Android devices support Web Storage, IndexedDB, and Service Workers.

---

### Phase 9: Evaluation & Documentation

#### Objective

Conduct a post-implementation evaluation of the React MVP against baseline targets, compile a complete traceability matrix, write technical documentation, and publish an academic Medium case study detailing the end-to-end methodology.

#### Key Questions

1. How closely does the working React MVP align with the original research findings, service requirements, and usability goals?
2. Is every feature in the final implementation traceable back to an Evidence ID or Design Hypothesis?
3. How effectively does the final documentation transfer institutional and technical knowledge for academic and public sector evaluation?

#### Activities

* **Traceability Matrix Finalization:** Audit mapping every implemented React feature/component back through Design Hypotheses, Requirements, and empirical Research Evidence.
* **System & Code Documentation:** Writing comprehensive documentation covering technical setup, component libraries, service handoffs, and operational manuals.
* **Academic Case Study Synthesis:** Publishing an in-depth, analytical Medium case study documenting the methodologies, research evidence, service mechanics, trade-offs, and lessons learned.

#### Methods

* Traceability Audit.
* Technical System Documentation.
* Case Study Writing & Visual Communication.

#### AI Role

* **Assisted:** Drafting structural outlines for documentation; editing technical prose clarity; formatting code block annotations.
* **Prohibited:** Generating speculative conclusions not supported by project data or inflating project outcomes.

#### Human Role

Conducting the final traceability audit, verifying technical documentation accuracy, writing the case study narrative, and executing public deployment.

#### Expected Deliverables

* Completed End-to-End Traceability Matrix (Research to Code).
* Comprehensive System & Component Documentation.
* Published Medium Case Study Article.

#### Evidence Needed to Proceed

Final project sign-off accompanied by a completed Traceability Matrix proving that every implemented MVP feature links directly to documented research, service requirements, or explicit design hypotheses.

#### Risks

* Incomplete alignment between theoretical service blueprints and final coded MVP scope due to time or technical constraints.

#### Assumptions

* Comprehensive documentation and a public case study provide a replicable model for public sector UX engineering initiatives.

---

## 7. Master Summary Matrix: Phase Justifications

| Phase | Disciplines Involved | Primary Focus | Justification for Inclusion |
| --- | --- | --- | --- |
| **1. Project Framing** | Service Design / Strategy | Scope, Actors, Assumptions | **Mandatory:** Prevents unrealistic project scope; explicitly cataloging backend assumptions avoids representing unverified government systems as facts. |
| **2. Research & Discovery** | UX Research | Current-State Audit, Benchmarks | **Mandatory:** Baseline understanding of historical system operations, workarounds, and global benchmarks is required before proposing future changes. |
| **3. Define & Prioritize** | UX Research / UX Design | Synthesis, Requirements, Targets | **Mandatory:** Converts raw research into prioritized requirements (FRs/NFRs) and establishes baseline usability reference criteria based on evidence. |
| **4. Service Architecture** | Service Design | Blueprinting, Offline Fallbacks | **Mandatory:** National fuel distribution is an offline/online service ecosystem; focusing purely on digital screens leads to system failure at the pump. |
| **5. Interaction Design** | UX Design | IA, User Flows, Wireframes | **Mandatory:** Establishes minimal-step navigation, spatial layout rules for Sinhala/Tamil/English scripts, and interaction flows before visual styling. |
| **6. Visual Design & Prototyping** | UX Design | Design System, Accessibility, Prototype | **Mandatory:** Evaluates outdoor visual readability, accessibility standards, and creates testable visual assets. |
| **7. Usability Testing & Iteration** | UX Research / UX Design | Empirical Testing, Iteration | **Mandatory:** Validates design hypotheses with human participants to gather empirical metrics prior to frontend engineering code lock. |
| **8. React MVP Engineering** | UX Engineering / Frontend | React Code, Offline PWA, i18n | **Mandatory:** Demonstrates frontend performance, real-world local data caching, responsive layouts, and trilingual execution in code. |
| **9. Evaluation & Documentation** | All Disciplines | Traceability, Case Study | **Mandatory:** Connects all implemented components back to research evidence and documents the UX Engineering methodology for knowledge transfer. |