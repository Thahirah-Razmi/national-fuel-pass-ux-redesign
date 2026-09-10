# Problem Statement

## 1. Purpose

This document defines the current service problem for the National Fuel Pass (NFP) UX redesign project.

The purpose is to translate verified desk-research evidence and identified research questions into a clear, evidence-bounded problem definition that can guide subsequent UX Engineering activities.

This document does not claim that unverified technical, operational, or user-experience conditions are established facts. Where evidence is incomplete, the relevant condition is classified as an inference, research hypothesis, design hypothesis, technical decision, or unknown.

---

## 2. Evidence Base and Epistemological Boundaries

The problem definition is based primarily on:

* Current National Fuel Pass information published through the Government Information Center (GIC)
* Historical National Fuel Pass documentation published by ICTA
* Ministry of Energy information concerning the current National Fuel QR Code System
* Department of Motor Traffic (DMT) public information
* Stakeholder analysis
* Competitive and comparative service analysis
* The primary-research plan defined in `research/04-user-research.md`

The following epistemological taxonomy is used:

* **E — Evidence:** Directly documented, observed, or verified information
* **I — Inference:** A reasoned interpretation derived from evidence
* **RH — Research Hypothesis/Question:** A condition requiring primary research validation
* **DH — Design Hypothesis:** A proposed design direction requiring validation
* **TD — Technical Decision:** A project implementation decision
* **UNKNOWN:** Not established by the available evidence

No fabricated interviews, surveys, usability results, stakeholder statements, or internal system details are used.

---

## 3. Current-State Service Problem

The National Fuel Pass is a government service that connects vehicle owners and other fuel users with fuel allocation and verification processes.

Current public documentation indicates that:

* Users may register or re-register vehicles under specified circumstances, including ownership or contact-number changes. **(E)**
* Fuel access is subject to vehicle-specific allocations or quotas. **(E)**
* The current system requires QR-based verification for fuel access. **(E)**
* Current government guidance states that fuel is not to be provided without the required QR credential. **(E)**
* Fuel station verification involves scanning citizen QR credentials in order to verify fuel allocation eligibility and/or quota information. **(E)**
* Support is available through government-provided channels, including the GIC Fuel Pass support mechanism. **(E)**
* Special mechanisms exist for certain production, essential-service, and non-standard vehicle contexts. **(E)**

However, the available desk research does not establish how frequently users encounter problems during these interactions, how these problems vary between user groups or stations, or how effectively users recover when a problem occurs.

These areas therefore require primary research.

---

## 4. Evidence-Backed Problem Areas

| Problem Area                          | Evidence / Interpretation                                                                                                                                                        | Classification   |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Ownership and registration changes    | Public NFP documentation indicates that ownership and contact-number changes can require re-registration or related recovery actions.                                            | **E**            |
| Identity and vehicle-record alignment | Historical NFP registration documentation required identity and vehicle information to correspond with registration records.                                                     | **E**            |
| Registration edge cases               | Ownership or registration information may change over time, creating cases that require validation or recovery.                                                                  | **I / RH**       |
| QR-based fuel verification            | Current policy requires QR-based verification for fuel access.                                                                                                                   | **E**            |
| Verification reliability              | The causes, frequency, and operational impact of QR verification difficulties are not established by desk research.                                                              | **RH / UNKNOWN** |
| Quota comprehension                   | Fuel allocation varies according to vehicle category, but user understanding of allocation rules has not been empirically established.                                           | **E / RH**       |
| Account and contact recovery          | Current guidance provides mechanisms for users dealing with ownership or contact-number changes, but the effectiveness and usability of these recovery paths require validation. | **E / RH**       |
| Exceptional vehicle contexts          | Special mechanisms are documented for certain production, essential-service, or non-standard vehicle contexts.                                                                   | **E**            |
| Operator interaction burden           | The extent to which repeated QR verification interactions create interaction burden for station personnel requires field observation.                                            | **RH**           |

---

## 5. Problem Themes

The evidence and research plan indicate three major problem themes requiring investigation.

### 5.1 Ownership, Registration, and Recovery

Changes in vehicle ownership, contact information, or registration records can affect a user's ability to interact with the service.

Historical and current documentation demonstrates that re-registration and recovery mechanisms exist, but the actual user experience of these processes requires primary research.

**Research focus:**

* Ownership-transfer scenarios
* Contact-number changes
* Previous-owner information
* Registration-record mismatches
* Account recovery
* User understanding of required actions
* Escalation and support requirements

---

### 5.2 QR Verification and Forecourt Interaction

The current fuel-access process depends on QR-based verification.

Although the requirement for QR verification is established, desk research does not establish the frequency or causes of verification difficulties, nor the exact workflow followed by station personnel in all contexts.

**Research focus:**

* How users present QR credentials
* Observed verification delays or failures
* Environmental and physical conditions affecting interaction
* Station personnel workflow
* Connectivity and device-related issues
* Recovery when verification fails
* Differences between ordinary and higher-volume situations

The causes of any observed QR failures must not be assumed before field research.

---

### 5.3 Clarity, Support, and Inclusive Access

The service operates across a diverse population with different levels of digital access, literacy, language preference, and vehicle-use contexts.

The availability of support channels is documented, but the effectiveness of those channels and the barriers experienced by different user groups require primary research.

**Research focus:**

* Sinhala, Tamil, and English access
* Digital literacy
* Smartphone and connectivity limitations
* Older or less digitally experienced users
* Understanding of fuel allocations
* Support-channel discovery
* Information required before requesting support
* Recovery from unsuccessful interactions

---

## 6. Contributing Factors and Root-Cause Areas

The following are areas for investigation rather than established technical root causes.

### 6.1 Registration and Ownership Data Dependency

Public NFP documentation indicates that submitted vehicle and ownership information is subject to validation against registration records.

The current technical implementation of that validation is not established.

**Classification: E / UNKNOWN**

---

### 6.2 Changing Vehicle and Ownership Information

Vehicle ownership and contact information may change after initial registration.

Such changes are explicitly addressed by current NFP guidance through re-registration or related processes.

The frequency and severity of these scenarios among actual users remain unknown.

**Classification: E / RH**

---

### 6.3 QR Verification Conditions

QR verification is a required part of the current fuel-access process.

The specific technical and environmental causes of unsuccessful verification are not established by current desk research.

Potential contributing conditions therefore require observation rather than assumption.

**Classification: E / UNKNOWN / RH**

---

### 6.4 Support and Recovery Dependency

Current public guidance provides support mechanisms for users experiencing registration and related issues.

However, the information users need before contacting support, the types of issues that lead to escalation, and the effectiveness of recovery processes require validation.

**Classification: E / RH**

---

### 6.5 Service Complexity Across User Contexts

The service must accommodate different vehicle categories, usage contexts, digital capabilities, and exceptional cases.

The extent to which these differences create usability or operational problems has not yet been established through primary research.

**Classification: E / RH**

---

## 7. Stakeholder Impact

### Citizens and Vehicle Owners

Potential impacts requiring validation include:

* Difficulty understanding registration or re-registration requirements
* Uncertainty about ownership or contact-number changes
* Difficulty recovering from unsuccessful registration or verification
* Uncertainty about fuel allocation
* Dependence on support channels
* Accessibility or language barriers

These are research areas rather than confirmed user findings.

---

### Fuel-Station Personnel

Potential impacts requiring validation include:

* Repeated QR-verification interactions
* Handling unsuccessful verification attempts
* Explaining verification or eligibility issues to customers
* Managing exceptions
* Supporting users who cannot complete a required digital interaction

The actual frequency and operational impact of these situations require contextual inquiry and observation.

---

### Government and Service Operators

Potential impacts requiring validation include:

* Support demand associated with registration and recovery
* Need for clear public communication
* Handling of exceptional cases
* Consistency of service rules across user contexts
* Ability to communicate allocation and verification requirements clearly

Internal administrative processes and system architecture are outside the established evidence base unless verified through authoritative sources or stakeholder research.

---

## 8. Core Problem Statement

The National Fuel Pass service provides a structured mechanism for registering vehicles, allocating fuel, and verifying eligibility through QR-based interactions.

However, the available evidence identifies several service areas that require further investigation, particularly:

1. ownership and registration changes;
2. identity and vehicle-record alignment;
3. QR verification interactions;
4. quota and allocation comprehension;
5. account and contact recovery;
6. support and escalation; and
7. accessibility across different user groups.

The available desk research does not establish the frequency, severity, or exact causes of problems within these areas.

The redesign therefore requires investigation of these touchpoints to determine where improvements to clarity, verification, recovery, and inclusive service access are warranted by evidence.

---

## 9. Refined How Might We Question

> **How might we redesign the National Fuel Pass service so citizens, fuel-station operators, and relevant government stakeholders can complete fuel-allocation and verification tasks with greater clarity, reliability, accessibility, and trust?**

This question is intentionally broad enough to allow primary research to determine which problems should receive design priority.

---

## 10. Scope Boundaries

### In Scope

The project will investigate and potentially redesign:

* Registration and onboarding
* Ownership and contact-number changes
* Account recovery
* Vehicle information and validation interactions
* QR presentation and verification
* Fuel allocation and quota visibility
* Support and escalation
* Accessibility and multilingual interaction
* Citizen–station interaction
* Relevant station-level workflow
* Exceptional and recovery scenarios identified through research

### Out of Scope

The project will not attempt to:

* Rebuild government vehicle-registration databases
* Establish undocumented government system architecture
* Replace official fuel-allocation policy
* Modify government fuel quotas without policy evidence
* Claim access to internal government APIs or databases
* Implement a production-grade national payment or identity infrastructure
* Present the prototype as an official government replacement system

The React implementation will be an academic/proposal MVP demonstrating the validated service and interaction concepts.

---

## 11. Assumptions and Unknowns

### Working Assumptions

1. The final React implementation will function as an academic/proposal prototype rather than a production government system.
2. Publicly documented NFP policies and service rules provide a baseline for the redesign.
3. Primary research may identify additional problems or contradict assumptions derived from desk research.
4. Synthetic data will be used in the prototype where real citizen or vehicle information would otherwise be required.

### Key Unknowns

The following remain unresolved until further research:

* Actual QR presentation methods used by citizens
* Frequency and causes of QR verification failures
* Station hardware and connectivity conditions
* Actual transaction duration and workflow variation
* Frequency of ownership or identity mismatches
* Effectiveness of current recovery processes
* Frequency and nature of support escalation
* Differences between user groups
* Accessibility barriers
* Language-related difficulties
* OTP/SMS-related issues
* Current responsibility for specific backend, messaging, and verification components
* Operational differences between fuel stations

These unknowns should not be presented as established facts in the final design documentation.

---

## 12. Validation Required

Primary research should validate the following before major design decisions are finalized:

### Citizen Validation

* Registration and onboarding experience
* Ownership-transfer scenarios
* Contact-number changes
* Account recovery
* QR presentation
* Understanding of fuel allocations
* Support discovery
* Accessibility and language needs

### Station Validation

* Actual QR-verification workflow
* Verification time and variation
* Failed verification scenarios
* Exception handling
* Queue and operational conditions
* Device and connectivity conditions
* Higher-volume situations

### Service Validation

* Current support and escalation paths
* Government communication requirements
* Exceptional vehicle scenarios
* Differences between documented policy and observed practice

---

## 13. Research-to-Design Traceability

The following traceability chain will be maintained throughout the project:

**Research Evidence → Empirical Finding → Verified Pain Point → Service Requirement → Design Hypothesis → Design Decision/Specification → React Component/Code**

Examples:

| Research Area                      | Current Status | Future Design Relevance                                     |
| ---------------------------------- | -------------- | ----------------------------------------------------------- |
| Ownership and registration changes | E + RH         | May influence registration and recovery flows               |
| QR verification                    | E + RH         | May influence QR presentation and verification interaction  |
| Quota comprehension                | E + RH         | May influence allocation information architecture           |
| Support and escalation             | E + RH         | May influence help and recovery flows                       |
| Multilingual access                | E + RH         | May influence content structure and language switching      |
| Script-related UI layout           | RH / DH        | Requires validation before visual implementation decisions  |
| Station workflow                   | RH             | May influence interaction efficiency and operational states |

No design feature will be treated as validated merely because it appears in a competitor or because it is technically feasible.

---

## 14. Problem Definition Status

**Status: APPROVED — Ready for Persona Development**

The problem definition is sufficiently bounded by current evidence and explicitly identifies unresolved areas requiring primary research.

The next activity is to develop `define/personas.md`.

Because primary user research has not yet been conducted, personas should initially be represented as **evidence-informed provisional personas/archetypes** rather than as confirmed representations of interviewed participants.

They must not contain fabricated:

* interview quotes;
* survey statistics;
* participant stories;
* demographic claims;
* usability findings; or
* statements presented as observed user behaviour without evidence.

Personas should be updated after primary research produces validated evidence.
