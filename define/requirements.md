# Requirements Specification

## 1. Purpose

This document establishes the **provisional requirements specification** for the National Fuel Pass (NFP) UX redesign project and supports Phase 3 — Define & Prioritize — of the UX Engineering protocol defined in `process/UX-PROCESS.md`.

The requirements specification bridges the project's current research and design activities. It translates the evidence-backed problem areas in `define/problem-statement.md`, the provisional personas in `define/personas.md`, and the provisional user journeys in `define/user-journeys.md` into structured service, UX, functional, accessibility, operational, data, trust, and technical requirements.

These requirements are intended to guide subsequent phases including:

* Phase 4: Service Design & Information Architecture
* Phase 5: Interaction Design & Wireframing
* Phase 6: Visual Design & Prototyping
* Phase 7: Usability Testing & Iteration
* Phase 8: React MVP Engineering

### Academic & Prototype Scope Disclaimer

This project is an academic UX Engineering research and design proposal. The requirements defined in this document guide a proposed service redesign and demonstration React MVP.

They do **not** represent official Sri Lankan government specifications, production requirements, or claims about the internal architecture of the National Fuel Pass service.

The React MVP will use synthetic or mock data and will not assume live integration with government databases, fuel-station systems, identity systems, payment systems, or production support infrastructure.

Requirements marked **RH**, **DH**, or **UNKNOWN** remain provisional and require validation before they can be treated as established user or service needs.

---

# 2. Requirement Methodology

Requirements are derived through the following traceable progression:

```text
Research Evidence (E)
        │
        ▼
Inferences (I)
        │
        ▼
Problem Areas
        │
        ▼
Provisional Personas & User Journeys
        │
        ▼
Service Requirements
        │
        ▼
UX / Functional / Accessibility /
Operational / Data / Trust / Technical Requirements
        │
        ▼
Primary Research Validation
        │
        ▼
Prioritization & Design
        │
        ▼
React MVP
```

The project uses the following epistemological distinctions:

### Evidence-Backed

A requirement is evidence-backed only when it can be directly connected to documented or independently verified information.

### Inferred

An inferred requirement follows logically from established evidence but is not itself directly documented as a user need.

### Research-Dependent

A research-dependent requirement addresses a condition that has not yet been established through primary research.

### Design Hypothesis

A design hypothesis proposes a potential UX solution to a validated or suspected problem. It must not be presented as a confirmed user need.

### Technical Decision

A technical decision defines how the academic React MVP will be implemented or bounded. It does not describe the production NFP architecture.

### Unknown

An unknown represents a service, operational, technical, or infrastructure condition that has not been established through the current evidence base.

### Core Rule

A requirement marked **RH**, **DH**, or **UNKNOWN** must not be treated as a confirmed empirical user need.

Similarly, an MVP technical decision must not be interpreted as evidence about how the real NFP system operates.

---

# 3. Requirement Classification

Requirements are organized into eight domains.

### SR — Service Requirement

Describes a capability or condition that the proposed service should support.

### UXR — User Experience Requirement

Describes requirements relating to clarity, feedback, navigation, comprehension, error recovery, cognitive load, and interaction quality.

### FR — Functional Requirement

Describes functionality proposed for the academic MVP or redesigned interface.

### AR — Accessibility Requirement

Describes requirements supporting inclusive access, including language, readability, digital literacy, and accessibility considerations.

### OR — Operational Requirement

Describes requirements relating to interactions between citizens, station personnel, support personnel, and other service participants.

### TR — Technical Requirement

Describes technical qualities or implementation boundaries for the proposed React MVP.

### DR — Data Requirement

Describes information needed to support a user task or prototype interaction.

### CR — Compliance / Safety / Trust Requirement

Describes requirements relating to privacy-conscious design, transparency, misuse prevention, and user trust.

These classifications describe the role of a requirement and do not by themselves indicate that the requirement is evidence-backed.

---

# 4. Requirement Status

Each requirement is assigned an epistemological status.

| Status      | Meaning                                                                                 |
| ----------- | --------------------------------------------------------------------------------------- |
| **E**       | Evidence-backed: directly supported by documented or verified evidence                  |
| **I**       | Inferred: logically derived from established evidence                                   |
| **RH**      | Research Hypothesis: requires primary research validation                               |
| **DH**      | Design Hypothesis: proposed solution requiring design/usability validation              |
| **TD**      | Technical Decision: deliberately chosen boundary or implementation decision for the MVP |
| **UNKNOWN** | Not established by the current evidence base                                            |

A requirement may contain more than one status where appropriate, for example:

> **RH / DH** — an unverified condition paired with a proposed design response.

Status labels describe the confidence and origin of a requirement; they do not indicate implementation priority.

---

# 5. Requirement IDs

Requirements use domain-specific identifiers:

* `SR-01` to `SR-04` — Service Requirements
* `UXR-01` to `UXR-06` — User Experience Requirements
* `AR-01` to `AR-04` — Accessibility Requirements
* `OR-01` to `OR-04` — Operational Requirements
* `FR-01` to `FR-06` — Functional Requirements
* `DR-01` to `DR-04` — Data Requirements
* `CR-01` to `CR-03` — Compliance, Safety & Trust Requirements
* `TR-01` to `TR-04` — Technical Requirements

The number of requirements is intentionally limited to avoid creating artificial requirements that are not supported by the project's evidence or scope.

---

# 6. Core Service Requirements

## 6.1 Registration & Onboarding

### SR-01 — Clear Registration and Vehicle Onboarding

* **Status:** E / DH
* **Description:** The proposed service should provide a clear pathway for registering a vehicle and supplying the identity and vehicle information required by the documented NFP registration process.
* **Evidence Basis:** Current and historical official NFP documentation establishes identity/contact and vehicle-related registration information.
* **Design Boundary:** The redesign must not assume undocumented identity fields or additional government data requirements.
* **Validation:** Primary research and usability testing should establish whether the proposed registration flow is understandable and sufficient for different user groups.

### SR-02 — Understandable Validation and Error Feedback

* **Status:** I / DH
* **Description:** The proposed registration experience should clearly communicate when submitted information cannot be accepted and provide an understandable next action.
* **Evidence Basis:** The requirement is an interaction-design response to the documented registration and ownership/vehicle information dependencies.
* **Validation:** Usability testing should determine whether users understand validation messages and can recover successfully.

---

## 6.2 Ownership & Contact Information

### SR-03 — Discoverable Recovery and Re-registration Pathways

* **Status:** E / DH
* **Description:** The service should make the appropriate documented pathway discoverable when users experience changed ownership or changed contact information.
* **Evidence Basis:** Current NFP guidance establishes re-registration/recovery guidance for relevant ownership and contact-information situations.
* **Design Boundary:** The redesign must not claim knowledge of the internal support process used to resolve these cases.
* **Validation:** Primary research and usability testing should determine whether users can identify and follow the appropriate recovery pathway.

---

## 6.3 QR Credential & Forecourt Verification

### SR-04 — Clear QR Credential Presentation

* **Status:** E / RH / DH
* **Description:** The proposed service should provide a clear way for a registered user to access and present the QR credential required for fuel access. The most effective presentation method and any additional fallback mechanism must be established through research.
* **Evidence Basis:** Current official guidance establishes QR-based fuel access.
* **Unknowns:** Actual citizen presentation methods, scanning conditions, failure modes, station hardware, and connectivity conditions.
* **Validation:** Station contextual inquiry, observation, and usability testing.

---

# 7. UX Requirements

## UXR-01 — Registration and Service Status Visibility

* **Status:** I / DH
* **Description:** The proposed interface should make important service states understandable, including whether registration or a relevant user task has been completed and what action is available next.
* **Design Boundary:** The interface must not display information that is not actually available to the proposed service or supported by the prototype data model.
* **Validation:** Usability testing.

## UXR-02 — Transparent Allocation and Reset Information

* **Status:** E / DH
* **Description:** Where allocation information is displayed, the interface should clearly communicate the applicable allocation and the documented weekly reset timing.
* **Evidence Basis:** Current official guidance establishes a Saturday 12:00 AM quota reset.
* **Design Boundary:** The requirement does not assume a particular current balance or transaction-history mechanism.
* **Validation:** Comprehension testing and usability testing.

## UXR-03 — Verification Failure Recovery Guidance

* **Status:** RH / DH
* **Description:** When QR verification does not succeed, the proposed service experience should communicate the verification state clearly and provide an appropriate next action.
* **Unknowns:** Actual verification failure causes, error states, station workflow, and recovery mechanisms.
* **Design Boundary:** The MVP must not present invented error codes or failure causes as real NFP behavior.
* **Validation:** Station contextual inquiry and usability testing.

## UXR-04 — Progressive Information Disclosure

* **Status:** I / DH
* **Description:** Where registration or recovery tasks contain multiple information requirements, the interface should organize information into understandable steps rather than presenting unnecessary complexity at once.
* **Validation:** Usability testing with participants representing different digital-literacy levels.

## UXR-05 — Clear Action Confirmation and Feedback

* **Status:** I / DH
* **Description:** Important user actions should provide clear confirmation or status feedback so users understand whether an action has succeeded, failed, or requires further attention.
* **Validation:** Usability testing.

## UXR-06 — Context-Preserving Navigation

* **Status:** I / DH
* **Description:** Users should be able to move between related service tasks such as registration information, allocation information, credential access, and support without unnecessary loss of context.
* **Design Boundary:** Exact navigation structure will be determined during information architecture and interaction design.
* **Validation:** Usability testing and prototype evaluation.

---

# 8. Accessibility & Inclusive Design Requirements

## AR-01 — Sinhala, Tamil and English Support

* **Status:** E / TD
* **Description:** The proposed MVP should support the project's trilingual service experience in Sinhala, Tamil, and English.
* **Evidence Basis:** The existing government service context and official materials demonstrate trilingual service communication.
* **Design Boundary:** Exact translation and terminology should be reviewed for linguistic accuracy rather than generated solely from automated translation.
* **Validation:** Localized review and usability testing.

## AR-02 — Multilingual Layout Stability

* **Status:** I / DH
* **Description:** The interface should remain usable when content changes between Sinhala, Tamil, and English, including appropriate handling of text length, wrapping, navigation, and interactive controls.
* **Validation:** Multilingual interface review and usability testing.

## AR-03 — Support for Different Digital-Literacy Levels

* **Status:** RH / DH
* **Description:** The proposed service should use understandable terminology, clear labels, and discoverable interaction patterns appropriate for users with different levels of digital confidence.
* **Unknown:** The specific interaction barriers experienced by different user groups.
* **Validation:** Primary interviews and usability testing.

## AR-04 — Accessible and Readable Interface

* **Status:** DH
* **Description:** The MVP should follow appropriate accessibility practices for text readability, contrast, focus states, keyboard interaction where applicable, scalable content, and sufficiently large interactive controls.
* **Design Boundary:** Accessibility compliance should be evaluated during design and testing rather than claimed in advance.
* **Validation:** Accessibility review and usability testing.
* **Research Boundary:** Specific environmental problems such as sunlight glare or low-quality displays must not be treated as established NFP problems without evidence.

---

# 9. Station / Forecourt Operational Requirements

## OR-01 — Clear Verification State

* **Status:** RH / DH
* **Description:** If the redesigned service includes a station-facing verification interface, it should communicate the verification state clearly and distinguish successful and unsuccessful outcomes.
* **Unknowns:** Actual operator interface, workflow, hardware, terminology, and transaction sequence.
* **Validation:** Station contextual inquiry and observation.

## OR-02 — Appropriate Verification Recovery Mechanism

* **Status:** RH / DH
* **Description:** If QR verification failure is observed during primary research, the proposed service should provide an appropriate recovery mechanism based on the actual failure conditions and operator workflow.
* **Design Boundary:** The project must not assume that manual pass-code entry is an existing production fallback.
* **Validation:** Station research.

## OR-03 — Clear Allocation / Transaction State Before Completion

* **Status:** RH / DH
* **Description:** If allocation information is part of the observed station verification workflow, the proposed interface should make the relevant authorization or transaction state understandable before the transaction is completed.
* **Unknowns:** Exact current station workflow and information available to station personnel.
* **Validation:** Station observation and operator interviews.

## OR-04 — Credential Presentation Resilience

* **Status:** RH / DH
* **Description:** If research demonstrates that users experience difficulty presenting their QR credential because of connectivity, device, environmental, or other contextual conditions, the redesign should consider an appropriate resilience or recovery mechanism.
* **Design Boundary:** Offline caching, wallet storage, screenshots, printed credentials, and other specific mechanisms must not be treated as requirements until supported by research.
* **Validation:** Forecourt observation and contextual inquiry.

---

# 10. Functional Requirements

The following functional requirements define the proposed **academic MVP**, not the production NFP system.

## FR-01 — Registration Flow Prototype

* **Status:** DH / TD
* **Description:** The React MVP shall provide an interactive registration/onboarding flow using synthetic data and the documented categories of identity, contact, and vehicle information required for the prototype scenario.
* **Design Boundary:** The MVP must not imply that submitted information is being validated against a live government database.
* **Validation:** Usability testing.

## FR-02 — Synthetic QR Credential Demonstration

* **Status:** E / TD
* **Description:** The React MVP shall demonstrate the proposed QR credential presentation experience using a synthetic QR credential.
* **Evidence Basis:** QR-based fuel access is established by current official guidance.
* **Prototype Boundary:** The synthetic QR must not be presented as a reproduction of the real production QR payload or encoding.
* **Validation:** Usability testing of the presentation experience.

## FR-03 — Allocation Information Dashboard

* **Status:** E / DH / TD
* **Description:** The MVP shall demonstrate a clear presentation of applicable fuel allocation information and the documented weekly reset schedule using synthetic data.
* **Prototype Boundary:** Any remaining/used balance or transaction history shown in the MVP must be explicitly identified as simulated data unless its current availability is established through research.
* **Validation:** Comprehension and usability testing.

## FR-04 — Contact / Ownership Recovery Guidance

* **Status:** E / DH / TD
* **Description:** The MVP shall provide a clear information pathway for users whose registered contact or ownership information has changed, based on currently documented public guidance.
* **Prototype Boundary:** The MVP shall not simulate or claim undocumented internal government actions such as database unbinding, agent processing, or automated ownership transfer.
* **Validation:** Usability testing.

## FR-05 — Station Verification Demonstration

* **Status:** DH / TD
* **Description:** The MVP may provide a simulated station verification interface to demonstrate how a proposed redesigned verification experience could work.
* **Prototype Boundary:** Any operator workflow, verification state, or transaction outcome represented in the MVP must be explicitly identified as a prototype scenario rather than an established production workflow.
* **Validation:** Station research and usability testing.

## FR-06 — Non-Standard / Special Allocation Information

* **Status:** E / DH / TD
* **Description:** The MVP may provide information about documented special mechanisms for certain operational or essential-service contexts where relevant to the project scope.
* **Design Boundary:** The exact administrative workflow, responsible office, application procedure, eligibility rules, and approval process must not be invented.
* **Validation:** Official-source verification and primary research where access is available.

---

# 11. Data Requirements

Data requirements are separated into three categories.

## 11.1 Documented Information

### DR-01 — Identity, Contact and Vehicle Information

* **Status:** E
* **Description:** The service model should account for the categories of identity/contact and vehicle information documented in official NFP materials, including applicable identity information, mobile contact information, vehicle registration information, and chassis information where documented.
* **Boundary:** Do not add undocumented identity fields such as driver's-license information.

### DR-02 — Allocation and Registration Status Information

* **Status:** E / UNKNOWN
* **Description:** The model may represent documented vehicle-category allocation information and registration/service status.
* **Unknown:** The exact current user-facing balance, transaction-history, and status data available through the production service.

## 11.2 Proposed MVP Data

### DR-03 — Synthetic Prototype Data

* **Status:** TD
* **Description:** The React MVP shall use synthetic data for identity, vehicle, registration, QR, allocation, and transaction scenarios.
* **Privacy Boundary:** Real NIC numbers, phone numbers, chassis numbers, addresses, OTPs, passwords, or other sensitive personal credentials must not be used in the prototype.

## 11.3 Unknown Production Data

### DR-04 — Production Data Architecture

* **Status:** UNKNOWN
* **Description:** The exact production data schemas, APIs, synchronization mechanisms, station transaction records, support records, and government-system integrations are outside the established evidence base.
* **Boundary:** The project must not infer production architecture from the React MVP implementation.

---

# 12. Error Prevention & Recovery Requirements

## 12.1 Input Validation

* **Status:** I / DH
* **Description:** The proposed interface should provide understandable input validation and prevent avoidable formatting mistakes where appropriate.
* **Boundary:** Exact validation rules must follow documented requirements or be explicitly marked as prototype assumptions.

## 12.2 Data Mismatch Guidance

* **Status:** E / DH
* **Description:** When registration or validation cannot proceed because relevant information does not match expected service information, the interface should explain that the information requires attention and provide an appropriate next action.
* **Boundary:** The interface must not claim to know the exact internal cause or automated backend process.

## 12.3 Contact Access Recovery

* **Status:** E / DH
* **Description:** Where a user no longer has access to the registered contact information, the interface should provide a discoverable pathway to the currently documented official guidance or support channel.
* **Boundary:** Internal support actions must not be invented.

## 12.4 Verification Failure

* **Status:** RH / DH
* **Description:** The redesigned service should provide understandable recovery guidance when verification does not succeed.
* **Boundary:** Specific failure categories such as network timeout, invalid QR, expired QR, quota exhaustion, or optical scanning failure must not be represented as confirmed production failure modes unless established by research or official documentation.

---

# 13. Trust, Transparency & Safety Requirements

## CR-01 — Privacy-Conscious Prototype Data Handling

* **Status:** TD
* **Description:** The prototype shall clearly communicate what information is being requested within the prototype and why it is needed for the demonstrated user task.
* **Boundary:** The project must not make unsupported claims about the production government's exact data-processing purposes or privacy architecture.

## CR-02 — Official-Service Context and Anti-Fraud Awareness

* **Status:** E / DH
* **Description:** The redesigned service should clearly communicate its official-service context and preserve appropriate anti-fraud or misuse warnings documented in current official guidance.
* **Boundary:** The project must not claim a particular production authentication/security architecture unless verified.

## CR-03 — Confirmation for Important Account Actions

* **Status:** I / DH
* **Description:** Important account or contact-information actions should provide clear confirmation before and/or after submission where appropriate.
* **Validation:** Usability testing.

---

# 14. Non-Functional Requirements

## 14.1 Usability

### TR-01 — Understandable Interaction

* **Status:** DH
* **Description:** The MVP should use clear hierarchy, understandable terminology, visible system feedback, and recoverable interaction states.
* **Validation:** Usability testing.

### TR-02 — Responsive Interface

* **Status:** TD
* **Description:** The React MVP shall provide responsive layouts appropriate for the target mobile and desktop contexts defined by the project.
* **Implementation Boundary:** Exact breakpoints will be determined during implementation based on the chosen design system.

### TR-03 — Maintainable Prototype Architecture

* **Status:** TD
* **Description:** The React MVP should use a maintainable component and state structure appropriate for an academic demonstration, with clear separation between UI components, mock data, and interaction logic.

### TR-04 — Accessibility Evaluation

* **Status:** DH / TD
* **Description:** The MVP should be evaluated for accessibility during design and testing, including language support, readable content, contrast, keyboard/focus behavior where applicable, and interaction usability.
* **Boundary:** Accessibility compliance must not be claimed before evaluation.

### Production-Scale Boundary

National-scale infrastructure characteristics such as:

* production server capacity
* database architecture
* national transaction throughput
* government cloud infrastructure
* distributed station synchronization
* production identity infrastructure
* production SMS gateway architecture

are outside the scope of this React MVP and remain **UNKNOWN** unless established by authoritative sources.

---

# 15. Provisional MoSCoW Prioritization

MoSCoW prioritization is provisional and represents the current **academic MVP scope**, not confirmed national service priorities.

## Must Have

The MVP should demonstrate:

* trilingual interface support
* a clear registration/onboarding experience
* synthetic QR credential presentation
* clear allocation and reset information
* contact/ownership recovery guidance
* a coherent primary user journey from registration to credential access

These are prioritized because they represent the core service journey currently defined by the project.

## Should Have

Subject to research validation and implementation capacity:

* improved error and recovery guidance
* clearer service-status communication
* accessible multilingual interaction patterns
* a simulated station verification experience
* documented special-allocation information where relevant
* trust and anti-fraud communication

## Could Have

Only if supported by research or justified by prototype objectives:

* simulated transaction history
* additional notification states
* alternative credential presentation mechanisms
* resilience mechanisms for connectivity-related conditions
* additional accessibility assistance

## Won't Have / Out of Scope

The React MVP will not attempt to implement:

* live DMT or other government database integration
* production identity verification
* production SMS/OTP infrastructure
* live fuel-station transaction infrastructure
* real government support ticketing
* production payment infrastructure
* undocumented government APIs
* production-scale national infrastructure
* production security certification or compliance claims

---

# 16. Requirement Traceability Matrix

The following matrix provides representative traceability from requirements to the previously approved project artifacts.

| Requirement | Type                    | Status      | Problem Area                  | Persona          | Journey    | Evidence / Source                            | Validation                           |
| ----------- | ----------------------- | ----------- | ----------------------------- | ---------------- | ---------- | -------------------------------------------- | ------------------------------------ |
| `SR-01`     | Service                 | E / DH      | Ownership & Registration      | P-01, P-02, P-04 | J-01       | `research/02-desk-research.md`               | Primary research + usability testing |
| `SR-02`     | Service                 | I / DH      | Ownership & Registration      | P-01, P-04       | J-01       | `define/problem-statement.md`                | Usability testing                    |
| `SR-03`     | Service                 | E / DH      | Ownership & Recovery          | P-01, P-02, P-04 | J-04       | Current GIC guidance / `research/sources.md` | Primary research + usability testing |
| `SR-04`     | Service                 | E / RH / DH | QR Verification               | P-01, P-02       | J-03       | Current official QR requirement              | Station research                     |
| `UXR-01`    | UX                      | I / DH      | Registration & Status Clarity | P-01, P-02, P-04 | J-01, J-02 | `define/problem-statement.md`                | Usability testing                    |
| `UXR-02`    | UX                      | E / DH      | Quota Comprehension           | P-01, P-02, P-04 | J-02       | Current official quota/reset guidance        | Comprehension testing                |
| `UXR-03`    | UX                      | RH / DH     | QR Verification               | P-01, P-02       | J-03       | `define/user-journeys.md`                    | Station inquiry + usability testing  |
| `UXR-04`    | UX                      | I / DH      | Accessibility & Literacy      | P-04             | J-01       | `define/personas.md`                         | Usability testing                    |
| `UXR-05`    | UX                      | I / DH      | Support & Recovery            | P-01–P-04        | J-04, J-05 | `define/problem-statement.md`                | Usability testing                    |
| `UXR-06`    | UX                      | I / DH      | Service Complexity            | P-01–P-05        | J-01–J-05  | `define/user-journeys.md`                    | Usability testing                    |
| `AR-01`     | Accessibility           | E / TD      | Inclusive Access              | P-01–P-05        | J-01–J-06  | Government service context                   | Localized review                     |
| `AR-02`     | Accessibility           | I / DH      | Inclusive Access              | P-04             | J-01–J-06  | `define/personas.md`                         | Multilingual usability               |
| `AR-03`     | Accessibility           | RH / DH     | Digital Literacy              | P-04             | J-01, J-04 | `define/personas.md`                         | Primary interviews                   |
| `AR-04`     | Accessibility           | DH          | Inclusive Access              | P-01–P-05        | J-01–J-05  | Accessibility design practice                | Accessibility review                 |
| `OR-01`     | Operational             | RH / DH     | QR Verification               | P-01, P-02       | J-03       | `define/user-journeys.md`                    | Station inquiry                      |
| `OR-02`     | Operational             | RH / DH     | QR Verification               | P-01, P-02       | J-03       | Primary research required                    | Station inquiry                      |
| `OR-03`     | Operational             | RH / DH     | Forecourt Workflow            | P-01, P-02       | J-03       | Primary research required                    | Observation                          |
| `OR-04`     | Operational             | RH / DH     | Forecourt Workflow            | P-01, P-02       | J-03       | Primary research required                    | Observation                          |
| `FR-01`     | Functional              | DH / TD     | Registration                  | P-01, P-02, P-04 | J-01       | Documented service context                   | Usability testing                    |
| `FR-02`     | Functional              | E / TD      | QR Verification               | P-01–P-05        | J-01, J-03 | Current QR requirement                       | Usability testing                    |
| `FR-03`     | Functional              | E / DH / TD | Quota Comprehension           | P-01–P-04        | J-02       | Current allocation/reset guidance            | Usability testing                    |
| `FR-04`     | Functional              | E / DH / TD | Ownership & Recovery          | P-01, P-02, P-04 | J-04       | Current GIC guidance                         | Usability testing                    |
| `FR-05`     | Functional              | DH / TD     | Forecourt Workflow            | P-01, P-02       | J-03       | Prototype decision                           | Station research + usability testing |
| `FR-06`     | Functional              | E / DH / TD | Exceptional Allocation        | P-03             | J-06       | Ministry special-mechanism documentation     | Source verification + research       |
| `DR-01`     | Data                    | E           | Registration                  | P-01–P-05        | J-01       | Official NFP documentation                   | Primary research                     |
| `DR-02`     | Data                    | E / UNKNOWN | Allocation                    | P-01–P-04        | J-02       | Official allocation guidance                 | Primary research                     |
| `DR-03`     | Data                    | TD          | Prototype                     | P-01–P-05        | J-01–J-06  | MVP scope                                    | Prototype review                     |
| `DR-04`     | Data                    | UNKNOWN     | All                           | All              | All        | Current evidence limitations                 | Official verification                |
| `CR-01`     | Trust                   | TD          | Privacy & Trust               | P-01–P-05        | J-01       | Project privacy boundary                     | Design review                        |
| `CR-02`     | Trust                   | E / DH      | Trust & Safety                | P-01–P-05        | J-01, J-03 | Current official guidance                    | Heuristic review                     |
| `CR-03`     | Trust                   | I / DH      | Recovery                      | P-01–P-04        | J-04, J-05 | `define/problem-statement.md`                | Usability testing                    |
| `TR-01`     | Technical/UX            | DH          | Overall UX                    | P-01–P-05        | J-01–J-05  | Design hypothesis                            | Usability testing                    |
| `TR-02`     | Technical               | TD          | MVP Implementation            | All              | All        | Project scope                                | Responsive testing                   |
| `TR-03`     | Technical               | TD          | MVP Implementation            | All              | All        | Project scope                                | Code review                          |
| `TR-04`     | Technical/Accessibility | DH / TD     | Inclusive Access              | P-01–P-05        | J-01–J-06  | Accessibility practice                       | Accessibility review                 |

---

# 17. Requirements by Persona

The following mapping identifies where requirements are particularly relevant. It does not imply that each mapped requirement represents a validated need for that persona.

### P-01 — Everyday Private Vehicle User

Relevant areas:

* registration and onboarding
* allocation comprehension
* QR credential access
* ownership/contact recovery
* support and recovery
* trust and misuse awareness

Relevant requirements:

`SR-01`, `SR-02`, `SR-03`, `SR-04`, `UXR-01`, `UXR-02`, `UXR-03`, `UXR-05`, `FR-01`, `FR-02`, `FR-03`, `FR-04`, `CR-02`

### P-02 — Commercial / Daily-Income Vehicle User

Relevant areas:

* efficient registration
* allocation comprehension
* forecourt verification
* recovery from service problems
* support

Relevant requirements:

`SR-01`, `SR-03`, `SR-04`, `UXR-01`, `UXR-02`, `UXR-03`, `OR-01`, `OR-02`, `OR-03`, `OR-04`, `FR-03`, `FR-05`

The importance of transaction speed and operational efficiency remains a **research question**, not a confirmed persona finding.

### P-03 — Heavy Transport / Agriculture / Operational User

Relevant areas:

* vehicle-category understanding
* allocation information
* exceptional/non-standard service pathways

Relevant requirements:

`UXR-01`, `UXR-02`, `FR-03`, `FR-06`

The exact needs and administrative processes for these users require further validation.

### P-04 — Limited Digital Access / Digital Literacy User

Relevant areas:

* understandable onboarding
* recovery guidance
* multilingual access
* accessible interaction
* error recovery

Relevant requirements:

`SR-01`, `SR-02`, `SR-03`, `UXR-04`, `UXR-05`, `AR-01`, `AR-02`, `AR-03`, `AR-04`, `FR-01`, `FR-04`

Specific barriers must be established through primary research rather than assumed.

### P-05 — Temporary / Foreign User

Relevant areas:

* understandable registration
* language selection
* service terminology
* applicable identity requirements

Relevant requirements:

`SR-01`, `AR-01`, `AR-02`, `FR-01`

The exact registration pathway and identity requirements for temporary or foreign users require validation against authoritative current guidance.

---

# 18. Requirements by Journey

### J-01 — Registration & Vehicle Onboarding

Relevant requirements:

`SR-01`, `SR-02`, `UXR-01`, `UXR-04`, `UXR-05`, `AR-01`, `AR-02`, `AR-03`, `FR-01`, `DR-01`, `CR-01`

### J-02 — Allocation & Quota Comprehension

Relevant requirements:

`UXR-01`, `UXR-02`, `FR-03`, `DR-02`

### J-03 — Forecourt QR Presentation & Verification

Relevant requirements:

`SR-04`, `UXR-03`, `AR-04`, `OR-01`, `OR-02`, `OR-03`, `OR-04`, `FR-02`, `FR-05`

### J-04 — Contact / Ownership Change & Recovery

Relevant requirements:

`SR-03`, `UXR-05`, `FR-04`, `DR-01`, `CR-03`

### J-05 — Support & Issue Escalation

Relevant requirements:

`SR-03`, `UXR-03`, `UXR-05`, `UXR-06`, `FR-04`, `CR-02`, `CR-03`

### J-06 — Exceptional / Non-Standard Allocation Context

Relevant requirements:

`FR-06`, `DR-02`, `UXR-01`

---

# 19. Research-Dependent Requirements

The following areas must remain open until primary research is conducted.

| Research Area        | Current Unknown                                            | Why It Matters                                         | Required Research                      | Potential Design Dependency |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------- | --------------------------- |
| QR presentation      | How citizens actually present their QR credential          | Determines credential-access design                    | Interviews + observation               | Credential presentation     |
| QR verification      | Actual success/failure conditions                          | Prevents invented failure solutions                    | Station observation + operator inquiry | Verification and recovery   |
| Connectivity         | Whether connectivity materially affects tasks              | Determines whether resilience mechanisms are justified | Forecourt observation + interviews     | Connectivity strategy       |
| Station hardware     | Devices/scanners used by personnel                         | Determines realistic interaction constraints           | Station inquiry                        | Operator interface          |
| Transaction workflow | Actual steps from QR presentation to completion            | Prevents inaccurate service modelling                  | Contextual inquiry                     | Service blueprint           |
| Transaction duration | Actual time and variation                                  | Determines whether speed improvements are important    | Observation where feasible             | Interaction optimization    |
| Ownership mismatch   | Frequency and types of ownership/contact problems          | Determines recovery priority                           | Citizen interviews + survey            | Recovery flow               |
| Account recovery     | Actual user strategies and support experience              | Determines recovery design                             | Interviews                             | Recovery UX                 |
| Accessibility        | Actual barriers and support needs                          | Determines inclusive-design priorities                 | Interviews + accessibility sessions    | Accessibility design        |
| Language             | Actual language preferences and comprehension issues       | Determines localization priorities                     | Interviews + survey                    | Content and language design |
| OTP/SMS              | Current role and behavior                                  | Prevents incorrect authentication assumptions          | Current-source verification + research | Authentication prototype    |
| Support escalation   | What users need before contacting support                  | Determines help design                                 | Interviews + support inquiry           | Help/recovery               |
| Credential fallback  | Whether alternative presentation methods are actually used | Determines whether fallback features are justified     | Observation + interviews               | Credential resilience       |
| Special allocations  | Actual user needs and administrative pathways              | Prevents invented exceptional workflows                | Official verification + interviews     | J-06 design                 |

---

# 20. Requirements That Must NOT Be Assumed

The following must remain explicitly unconfirmed unless supported by authoritative evidence or primary research:

1. A specific undocumented identity credential is required for NFP registration.
2. The NFP currently uses a specific DMT/NFP API architecture.
3. The NFP production system automatically synchronizes with a DMT database in a particular way.
4. A specific QR payload or encoding format is known.
5. Citizens commonly use screenshots or printed QR credentials.
6. Offline QR verification is supported or required.
7. Manual alphanumeric pass-code entry is an existing production fallback.
8. Sunlight glare is a confirmed cause of QR failures.
9. Low screen brightness is a confirmed cause of QR failures.
10. Specific station hardware or scanner models are used.
11. Specific station network conditions are present.
12. A particular operator workflow is used at every station.
13. A specific user-facing balance or transaction-history mechanism exists.
14. Internal GIC support performs a particular account-unbinding or database action.
15. A particular government office handles special allocation requests unless officially verified.
16. Automated ownership transfer processing exists.
17. Internal support ticketing or escalation dashboards exist.
18. Specific production error codes exist.
19. Production security, privacy, or legal compliance architecture is known.
20. The React MVP represents the real production architecture.

---

# 21. MVP Boundary

The project distinguishes three levels.

| Dimension      | Service Design Proposal                | React MVP                                       | Production Government Service                               |
| -------------- | -------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| Purpose        | Proposed redesigned service experience | Demonstration of selected UX concepts           | Live national service                                       |
| Data           | Conceptual service information         | Synthetic/mock data                             | Production data — architecture UNKNOWN                      |
| Registration   | Proposed improved journey              | Simulated registration                          | Real government validation — implementation UNKNOWN         |
| QR             | Proposed credential experience         | Synthetic QR demonstration                      | Production QR implementation — payload/architecture UNKNOWN |
| Verification   | Proposed service workflow              | Simulated verification scenario where justified | Real station workflow — UNKNOWN                             |
| Support        | Proposed clearer guidance              | Information/guidance screens                    | Actual internal support workflow — UNKNOWN                  |
| Authentication | Conceptual                             | Simulated state if needed                       | Production mechanism — UNKNOWN                              |
| Integration    | Conceptual service relationships       | No live government integration                  | Actual APIs/integrations — UNKNOWN                          |
| Localization   | Trilingual UX proposal                 | Trilingual interface                            | Official production implementation — outside project scope  |
| Infrastructure | Service-level concept                  | Client-side React application                   | National-scale infrastructure — outside project scope       |

The MVP must clearly communicate that simulated states and mock data are **demonstration scenarios**, not representations of undocumented production behavior.

---

# 22. Validation Plan

Requirements will be progressively validated using the research methods defined in `research/04-user-research.md`.

| Requirement Area           | Validation Method                         | Participants / Context                                | Key Questions                                                                   |
| -------------------------- | ----------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| Registration               | Interviews + usability testing            | Citizens                                              | Do users understand required information and recovery from validation problems? |
| Allocation                 | Interviews + survey + usability testing   | Vehicle users                                         | Do users understand allocation and reset information?                           |
| QR presentation            | Contextual inquiry + observation          | Citizens + station personnel                          | How is the QR actually presented and verified?                                  |
| QR failure                 | Observation + operator interviews         | Station personnel                                     | What happens when verification does not succeed?                                |
| Ownership/contact recovery | Interviews                                | Citizens                                              | What problems occur when ownership/contact information changes?                 |
| Support                    | Interviews                                | Citizens + support personnel where accessible         | What information is needed before support is contacted?                         |
| Accessibility              | Interviews + usability testing            | Diverse participant groups                            | What accessibility and digital-literacy barriers actually occur?                |
| Language                   | Localized usability review                | Sinhala/Tamil/English users                           | Is the interface understandable and stable across languages?                    |
| Special cases              | Interviews + official-source verification | Relevant users/official stakeholders where accessible | What exceptional workflows actually exist?                                      |
| MVP technical qualities    | Prototype testing                         | Prototype users                                       | Does the implementation meet the chosen technical/design targets?               |

Where direct telemetry or production data is unavailable, the project will **not claim precise production-level measurements**.

For example, station research may document observed delays or workflow variation without claiming a national transaction-time statistic.

---

# 23. Requirements Evolution

Requirements are not permanently frozen at this stage.

The expected lifecycle is:

```text
Existing Desk Research
        │
        ▼
Provisional Requirements
        │
        ▼
Primary Field Research
        │
        ▼
Evidence Analysis
        │
        ▼
Persona & Journey Validation
        │
        ▼
Requirement Validation
        │
        ▼
MoSCoW Reprioritization
        │
        ▼
Design Principles
        │
        ▼
Service Architecture
        │
        ▼
Interaction Design
        │
        ▼
Prototype
        │
        ▼
Usability Testing
        │
        ▼
Requirement Refinement
```

If primary research contradicts a provisional requirement, the requirement should be:

* revised,
* downgraded,
* reclassified,
* deprioritized,
* or removed.

The project should preserve the reasoning behind significant requirement changes so that the final Medium article can demonstrate evidence-to-design traceability.

---

# 24. Current Status

**Document Status: PROVISIONAL REQUIREMENTS SPECIFICATION — PENDING PRIMARY RESEARCH VALIDATION**

This document translates the approved research, problem statement, personas, and user journeys into a provisional requirements framework.

It does **not** establish that all listed requirements represent confirmed user needs.

Requirements marked **RH**, **DH**, or **UNKNOWN** remain subject to validation.

The MVP-specific requirements marked **TD** describe deliberate project implementation decisions and must not be interpreted as claims about the production NFP system.

---

# 25. Next Steps

The correct sequence after this provisional requirements specification is:

1. **Execute Primary Research**

   * Conduct citizen interviews.
   * Conduct station contextual inquiry and observation where access is available.
   * Conduct accessibility and digital-literacy research.
   * Conduct the planned survey where feasible.

2. **Analyze Research Findings**

   * Code qualitative data.
   * Aggregate quantitative responses.
   * Identify supporting and contradictory evidence.
   * Update the evidence classification.

3. **Validate and Revise Personas**

   * Compare provisional personas against actual participant patterns.
   * Merge, modify, or remove personas where evidence requires it.

4. **Validate and Revise User Journeys**

   * Compare the provisional journeys against observed real-world workflows.
   * Update unknown steps, failure states, and recovery paths.

5. **Validate and Reprioritize Requirements**

   * Reclassify RH/DH/UNKNOWN requirements.
   * Update the MoSCoW prioritization.
   * Remove requirements unsupported by evidence.
   * Add new requirements only when justified by research.

6. **Create `define/design-principles.md`**

   * Derive design principles from the validated problem, personas, journeys, and requirements.

7. **Move to Phase 4 — Service Design & Information Architecture**

   * Define information architecture.
   * Develop service blueprint and system-level service flows.
   * Define the proposed navigation and content structure.

8. **Continue to Interaction Design**

   * Wireframes.
   * Prototype.
   * Usability testing.
   * Iteration.

9. **Build and Evaluate the React MVP**

   * Implement the validated MVP scope.
   * Use synthetic/mock data.
   * Document technical decisions and limitations.

---

# Conclusion

This requirements specification provides a structured bridge between the project's current evidence base and subsequent design activities.

The requirements deliberately distinguish:

**what is documented,**

**what is inferred,**

**what requires research,**

**what is a design hypothesis,**

and

**what is simply a technical decision for the academic MVP.**

This distinction is essential because the project does not have access to the complete internal NFP service architecture, station infrastructure, production data, or comprehensive user research.

The requirements should therefore remain **provisional until primary research is conducted**.

The final design should emerge through the following traceable chain:

```text
Research Evidence
      ↓
Empirical Findings
      ↓
Validated Problem
      ↓
Validated Persona / Journey
      ↓
Validated Requirement
      ↓
Design Principle
      ↓
Design Decision
      ↓
Prototype
      ↓
Usability Evidence
      ↓
Iteration
```

**Document Status:** PROVISIONAL — PENDING PRIMARY RESEARCH VALIDATION
