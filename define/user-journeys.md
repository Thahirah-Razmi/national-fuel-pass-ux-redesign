# User Journeys

## 1. Purpose

This document defines the provisional user journeys for the National Fuel Pass (NFP) UX redesign project, executing Phase 3 — Define & Prioritize of the UX Engineering protocol (`process/UX-PROCESS.md`).

User journeys provide structured models of important service interactions, touchpoints, dependencies, potential friction points, and recovery situations across the NFP service ecosystem.

In this project, the journeys are used to:

1. Translate the evidence-backed problem areas established in `define/problem-statement.md` and the provisional personas established in `define/personas.md` into structured service scenarios.
2. Identify service-level dependencies and potential failure or recovery points requiring investigation.
3. Define focused research questions and observation areas for the primary research phase.
4. Provide a traceable foundation for later requirements and design hypotheses.

### Critical Epistemological Disclaimer

Primary field research has **not yet been executed**.

Therefore, all journeys in this document are explicitly **PROVISIONAL / HYPOTHETICAL USER JOURNEYS**.

They do not represent:

* observed user behavior;
* validated user goals;
* measured task durations;
* measured failure rates;
* verified pain-point frequencies;
* validated emotional states;
* confirmed accessibility barriers;
* confirmed QR presentation methods;
* confirmed station workflows.

Where a condition is not directly established by evidence, it is classified as **I, RH, DH, or UNKNOWN**.

These journeys must be revised after primary research.

---

# 2. Evidence Base

These provisional journeys are constructed from the following approved project artifacts:

* **`research/02-desk-research.md`** — documented current and historical NFP service conditions, registration information, allocation information, QR requirements, support information, and other publicly documented service parameters.
* **`research/03-stakeholder-analysis.md`** — stakeholder groups, service relationships, responsibilities, and research areas.
* **`research/04-user-research.md`** — approved primary research questions, participant groups, methods, and validation plan.
* **`define/problem-statement.md`** — approved problem areas and scope boundaries.
* **`define/personas.md`** — five provisional user archetypes.

### Evidence Boundary

The following must not be inferred from these documents unless explicitly supported:

* internal government architecture;
* undocumented APIs;
* database synchronization mechanisms;
* specific station hardware;
* exact station software implementation;
* exact QR storage methods;
* exact QR scanning failure causes;
* exact transaction durations;
* internal support-ticket architecture;
* staffing levels or SLAs;
* undocumented administrative workflows.

---

# 3. Journey Methodology

The journeys model service interactions as provisional scenarios across relevant service stages.

Each journey considers:

* **Trigger** — what may cause the interaction to begin.
* **User Goal** — what the user may seek to accomplish.
* **User Actions** — documented or hypothesized actions.
* **Touchpoints** — digital, physical, or human interaction points.
* **Potential Issues** — evidence-backed conditions, inferences, or research hypotheses.
* **Service Dependencies** — service-level relationships between relevant actors.
* **Recovery / Exception Paths** — documented or unknown recovery mechanisms.
* **Research Questions** — questions requiring empirical validation.

The epistemological taxonomy used throughout the document is:

* **E — Evidence:** Directly documented or verified information.
* **I — Inference:** Logical interpretation derived from evidence.
* **RH — Research Hypothesis:** Unverified condition requiring primary research.
* **DH — Design Hypothesis:** Proposed design direction requiring later validation.
* **TD — Technical Decision:** Implementation or architecture decision.
* **UNKNOWN:** Not established by current evidence.

No hypothetical journey stage should be interpreted as an observed user behavior.

---

# 4. Journey Overview

| Journey ID | Provisional User Journey                      | Relevant Personas            | Primary Problem Area                      | Validation Status                          |
| ---------- | --------------------------------------------- | ---------------------------- | ----------------------------------------- | ------------------------------------------ |
| **J-01**   | Registration & Vehicle Onboarding             | P-01, P-02, P-04, P-05       | Ownership, Registration, and Recovery     | **PROVISIONAL — Pending primary research** |
| **J-02**   | Allocation & Quota Comprehension              | P-01, P-02, P-03, P-04       | Allocation / Quota Comprehension          | **PROVISIONAL — Pending primary research** |
| **J-03**   | Forecourt QR Presentation & Verification      | P-01, P-02, P-03, P-04, P-05 | QR Verification and Forecourt Interaction | **PROVISIONAL — Pending primary research** |
| **J-04**   | Contact / Ownership Change & Recovery         | P-01, P-02, P-04             | Ownership, Registration, and Recovery     | **PROVISIONAL — Pending primary research** |
| **J-05**   | Support & Issue Escalation                    | P-01, P-02, P-03, P-04, P-05 | Support and Escalation                    | **PROVISIONAL — Pending primary research** |
| **J-06**   | Exceptional / Non-Standard Allocation Context | P-03                         | Exceptional / Non-Standard Contexts       | **PROVISIONAL — Pending primary research** |

---

# 5. Detailed Provisional Journeys

## J-01 — Registration & Vehicle Onboarding

### Purpose

Models the provisional service pathway through which a user attempts to register for the National Fuel Pass and associate the required identity and vehicle information with the service.

Official documentation establishes registration requirements and validation conditions, while the exact user experience and frequency of difficulties require primary research.

### Relevant Personas

* **P-01 — Everyday Private Vehicle User**
* **P-02 — Commercial / Daily-Income Vehicle User**
* **P-04 — Limited Digital Access / Digital Literacy User**
* **P-05 — Temporary / Foreign User**

### Trigger

A user needs to register for applicable fuel-pass access.

**Classification: RH/I**

The exact circumstances that most commonly trigger registration require primary research.

### User Goal

Complete the applicable registration process and obtain access to the fuel-pass credential.

**Classification: I/RH**

### Journey Stages

| Stage                       | User Goal                                           | User Action                                                                      | Touchpoint                   | Potential Issue                                                                  | Classification | Research Question |
| --------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------- | -------------- | ----------------- |
| **1. Service Entry**        | Find the official service                           | Access the official NFP service                                                  | Web / mobile browser         | Users may be uncertain about where to begin or which information source to trust | E/RH           | RQ-A1             |
| **2. Contact Verification** | Verify the registered contact                       | Enter applicable mobile information and complete OTP verification where required | Web / SMS                    | OTP delivery or retry difficulties may affect completion                         | E/RH           | RQ-A1, RQ-B1      |
| **3. Identity Information** | Provide required identity information               | Enter the applicable documented identity information                             | Registration form            | Users may experience uncertainty about required fields or accepted formats       | E/RH           | RQ-A1             |
| **4. Vehicle Information**  | Provide vehicle information                         | Enter required vehicle registration and chassis information                      | Registration form            | Data-entry difficulties or uncertainty about field formats may occur             | E/RH           | RQ-A1, RQ-B1      |
| **5. Validation**           | Determine whether submitted information is accepted | Submit information and receive validation outcome                                | Service validation interface | Ownership or registration-information mismatch may prevent successful completion | E/RH           | RQ-A1, RQ-B2      |
| **6. Credential Access**    | Access the resulting fuel-pass credential           | Obtain the credential through the method made available by the service           | Web / credential interface   | Actual storage and presentation methods require validation                       | E/RH/UNKNOWN   | RQ-A1, RQ-D3      |

### Important Boundary

The journey does **not** assume:

* a particular internal database architecture;
* a particular API;
* a specific automated matching implementation;
* a particular QR storage method;
* screenshot or printed-credential usage.

Those conditions require validation.

---

# 6. J-02 — Allocation & Quota Comprehension

## Purpose

Models how users obtain and interpret information about their applicable fuel allocation, remaining allocation, and reset schedule.

Current official information establishes the current Saturday-midnight reset schedule and applicable allocation information.

Historical service information used in earlier NFP documentation may differ and must not be presented as current.

### Relevant Personas

* **P-01 — Everyday Private Vehicle User**
* **P-02 — Commercial / Daily-Income Vehicle User**
* **P-03 — Heavy Transport / Agriculture / Operational User**
* **P-04 — Limited Digital Access / Digital Literacy User**

### Trigger

A user wants to understand their applicable fuel allocation or determine when allocation information resets.

**Classification: I/RH**

### User Goal

Understand the user's applicable allocation information sufficiently to make an informed decision about fuel usage.

**Classification: I/RH**

### Journey Stages

| Stage                              | User Goal                               | User Action                                                    | Touchpoint                               | Potential Issue                                                                                     | Classification | Research Question |
| ---------------------------------- | --------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------- | ----------------- |
| **1. Access Information**          | Find allocation information             | Access the currently available allocation information          | NFP service / applicable channel         | Users may not know where to find current allocation information                                     | RH             | RQ-A3             |
| **2. Read Allocation**             | Understand applicable amount            | Review displayed allocation information                        | Web / other documented channel           | Numerical information may be difficult to interpret without clear context                           | RH             | RQ-A3             |
| **3. Understand Remaining Amount** | Determine available allocation          | Interpret available/used allocation information where provided | Service interface                        | Users may confuse allocation limits with remaining availability                                     | RH             | RQ-A3             |
| **4. Understand Reset Timing**     | Know when allocation information resets | Interpret current reset schedule                               | Service interface / official information | Historical and current reset schedules may create confusion if users encounter outdated information | E/I/RH         | RQ-A3             |
| **5. Make Fuel Decision**          | Decide when/how much fuel to obtain     | Use available information to plan a fuel purchase              | User decision                            | The effect of allocation information on planning behavior requires validation                       | RH             | RQ-A3             |

### Current / Historical Boundary

* **E:** Current official information states that quota allocation resets at 12:00 AM midnight Saturday.
* **E:** Historical NFP documentation used different reset timing.
* **RH:** Whether users encounter or are confused by historical information requires primary research.

The redesign must not treat historical reset rules as current requirements.

---

# 7. J-03 — Forecourt QR Presentation & Verification

## Purpose

Models the provisional service interaction that occurs when a vehicle operator reaches a fuel station and presents the applicable fuel-pass credential for verification.

The exact current forecourt workflow requires observation.

### Relevant Personas

* **P-01 — Everyday Private Vehicle User**
* **P-02 — Commercial / Daily-Income Vehicle User**
* **P-03 — Heavy Transport / Agriculture / Operational User**
* **P-04 — Limited Digital Access / Digital Literacy User**
* **P-05 — Temporary / Foreign User**

### Trigger

A user arrives at a fuel station seeking fuel under the applicable allocation rules.

**Classification: I/RH**

### User Goal

Present the applicable credential and complete the fuel transaction successfully.

**Classification: I/RH**

### Provisional Journey Stages

| Stage                          | User Goal                               | User Action                                                     | Touchpoint                                  | Potential Issue                                                     | Classification | Research Question |
| ------------------------------ | --------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------- | -------------- | ----------------- |
| **1. Arrival**                 | Access the station service              | Arrive at the fuel station and enter the relevant service area  | Forecourt                                   | Queueing and physical workflow characteristics require observation  | RH             | RQ-07.1, RQ-07.2  |
| **2. Credential Presentation** | Present the applicable credential       | Present the credential using the method available to the user   | Credential / device / physical presentation | Actual presentation methods are unknown                             | RH/UNKNOWN     | RQ-03.1           |
| **3. Verification Attempt**    | Have credential verified                | Station personnel attempt verification                          | Station verification touchpoint             | Verification failure causes require investigation                   | E/RH/UNKNOWN   | RQ-03.2, RQ-03.3  |
| **4. Verification Outcome**    | Understand whether fuel can be provided | Receive the verification result                                 | Station personnel / verification interface  | Error communication and recovery behavior require observation       | RH/UNKNOWN     | RQ-03.3           |
| **5. Fuel Transaction**        | Receive applicable fuel                 | Complete the fuel transaction according to the applicable rules | Pump / station interaction                  | Actual transaction sequence requires observation                    | RH/UNKNOWN     | RQ-07.1           |
| **6. Completion**              | Understand transaction outcome          | Confirm that the interaction is complete                        | Station / service interface                 | Actual balance-update and confirmation behavior requires validation | RH/UNKNOWN     | RQ-07.1, RQ-07.2  |

### Forecourt Research Boundary

The following must be observed rather than assumed:

* QR presentation method;
* credential retrieval method;
* station device type;
* scanning distance;
* scan success/failure;
* environmental effects;
* network conditions;
* verification latency;
* queue duration;
* transaction duration;
* fuel dispensing sequence;
* balance update timing;
* confirmation/notification behavior.

---

# 8. J-04 — Contact / Ownership Change & Recovery

## Purpose

Models the provisional pathway for users whose registered contact information or vehicle ownership information changes.

Current official guidance establishes that users with valid documents can follow relevant re-registration or contact-update procedures. The exact operational handling behind these procedures remains partly unknown.

### Relevant Personas

* **P-01 — Everyday Private Vehicle User**
* **P-02 — Commercial / Daily-Income Vehicle User**
* **P-04 — Limited Digital Access / Digital Literacy User**

### Trigger

A user experiences a change involving registered contact information, vehicle ownership, or another registration condition.

**Classification: E/RH**

### User Goal

Understand the appropriate recovery or re-registration pathway and regain valid access to the service.

**Classification: I/RH**

### Journey Stages

| Stage                               | User Goal                     | User Action                                                                          | Touchpoint                   | Potential Issue                                                               | Classification | Research Question |
| ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------- | -------------- | ----------------- |
| **1. Change Occurs**                | Maintain valid service access | Recognize that registered information no longer matches the user's current situation | User context                 | Actual frequency and circumstances require research                           | RH             | RQ-02.1           |
| **2. Identify Required Action**     | Understand what to do         | Consult official NFP guidance                                                        | Portal / support information | Users may be uncertain whether they need to update or re-register             | RH             | RQ-02.2           |
| **3. Provide Required Information** | Complete applicable procedure | Follow the documented update/re-registration pathway                                 | NFP service                  | Required information and validation requirements may create friction          | E/RH           | RQ-02.2           |
| **4. Validation / Processing**      | Obtain an accepted result     | Submit the required information                                                      | Service validation           | Actual handling of exceptional ownership cases may vary                       | E/RH/UNKNOWN   | RQ-02.1, RQ-02.3  |
| **5. Recovery / Escalation**        | Resolve unresolved problems   | Use the documented support pathway where self-service is insufficient                | GIC / official support       | Users may be uncertain about what information to provide or what happens next | E/RH           | RQ-02.3, RQ-05.1  |

### Important Boundary

Do not assume:

* an internal support-agent workflow;
* manual database unbinding;
* database synchronization;
* a specific identity-verification process;
* a specific processing time.

Those are **UNKNOWN** unless officially verified.

---

# 9. J-05 — Support & Issue Escalation

## Purpose

Models the provisional pathway through which users seek assistance when they encounter a problem that they cannot resolve through available service guidance.

### Relevant Personas

All five provisional personas may potentially encounter support needs:

* P-01
* P-02
* P-03
* P-04
* P-05

### Trigger

A user encounters a registration, verification, recovery, allocation, or other service problem requiring assistance.

**Classification: RH/I**

### User Goal

Understand the problem and obtain appropriate assistance or resolution.

**Classification: I/RH**

### Journey Stages

| Stage                         | User Goal                                | User Action                                                      | Touchpoint                              | Potential Issue                                                                     | Classification | Research Question |
| ----------------------------- | ---------------------------------------- | ---------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------- | -------------- | ----------------- |
| **1. Problem Recognition**    | Understand that something has gone wrong | Read or interpret the available service response                 | Service interface / station interaction | Users may not understand the reason for failure or the next action                  | RH             | RQ-05.1           |
| **2. Self-Service Attempt**   | Resolve the issue independently          | Consult available guidance or retry where appropriate            | NFP portal / official guidance          | Guidance may not address every exception                                            | RH             | RQ-05.1           |
| **3. Support Discovery**      | Find appropriate help                    | Locate official support information                              | Portal / support information            | Users may be uncertain about which channel to use                                   | RH             | RQ-05.1           |
| **4. Support Contact**        | Explain the problem                      | Contact the documented support channel                           | GIC / official support                  | The information users need to provide and the support experience require validation | E/RH           | RQ-05.2, RQ-05.3  |
| **5. Resolution / Next Step** | Understand what happens next             | Follow support instructions or complete the required next action | Support / service                       | Actual resolution and escalation workflows are not fully established                | UNKNOWN/RH     | RQ-05.3           |

### Support Boundary

Current public information establishes official support availability, including GIC support and current messaging support.

However, the following remain **UNKNOWN** unless separately verified:

* internal ticket-management systems;
* staffing levels;
* escalation hierarchy;
* service-level agreements;
* average response time;
* internal case-routing mechanisms;
* citizen-facing ticket tracking.

---

# 10. J-06 — Exceptional / Non-Standard Allocation Context

## Purpose

Models the need for users in specialized operational contexts to understand and access applicable fuel-allocation mechanisms.

Official documentation establishes that special mechanisms exist for certain production, essential-service, agricultural, and other relevant operational contexts.

The actual operational workflow for these cases is not fully established by the current desk research.

### Relevant Persona

* **P-03 — Heavy Transport / Agriculture / Operational User**

### Trigger

A user operates within a context where ordinary fuel-allocation arrangements may not fully describe the applicable service pathway.

**Classification: E/RH**

### User Goal

Understand and access the applicable allocation or authorization pathway.

**Classification: I/RH**

### Provisional Journey Stages

| Stage                          | User Goal                                               | User Action                                               | Touchpoint                                    | Potential Issue                                            | Classification | Research Question |
| ------------------------------ | ------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------- | -------------- | ----------------- |
| **1. Identify Applicability**  | Determine whether a special pathway applies             | Seek information about applicable allocation arrangements | Official information / administrative contact | Eligibility and pathway information may be unclear         | RH/UNKNOWN     | RQ-E3             |
| **2. Understand Requirements** | Determine what information or documentation is required | Consult applicable official guidance                      | Official guidance / administrative channel    | Actual documentation requirements require validation       | RH/UNKNOWN     | RQ-E3             |
| **3. Submit / Request**        | Follow the applicable process                           | Complete the officially required process where one exists | Administrative / service touchpoint           | Actual submission method and workflow are unknown          | UNKNOWN/RH     | RQ-E3             |
| **4. Review / Outcome**        | Understand the outcome                                  | Receive the applicable decision or allocation information | Administrative / service touchpoint           | Processing time and decision criteria are unknown          | UNKNOWN        | RQ-E3             |
| **5. Follow-up**               | Resolve unresolved issues                               | Seek clarification or further support where required      | Support / administrative channel              | Escalation and re-application processes require validation | UNKNOWN/RH     | RQ-E3             |

### Important Boundary

This journey does **not** assume:

* Divisional Secretariat processing unless verified for the specific NFP pathway;
* a specific application form;
* manual paperwork;
* specific administrative approval criteria;
* specialized QR issuance;
* renewal schedules;
* regional processing differences.

These are research questions, not established service facts.

---

# 11. Journey Pain Points

The following categories distinguish documented conditions from assumptions requiring validation.

## 11.1 Evidence-Backed Conditions — E

Current and historical official documentation establishes conditions including:

* ownership or vehicle-information mismatches can affect registration/re-registration;
* changes to registered contact information may require a different registration/recovery pathway;
* the current service requires QR-based fuel verification;
* current allocation/reset information is published;
* official support channels exist;
* certain special allocation mechanisms exist for specified operational contexts.

These conditions do **not** automatically establish user frustration, frequency, or severity.

---

## 11.2 Inferences — I

Reasonable service-level inferences include:

* registration requirements create information-entry tasks that may require clear guidance;
* changes in ownership or contact information can create additional service steps;
* multiple service touchpoints create opportunities for information gaps between stages;
* exceptions that cannot be resolved through self-service may increase reliance on support.

These are analytical interpretations, not empirical user findings.

---

## 11.3 Research Hypotheses — RH

The following require primary research:

* users may have difficulty understanding registration requirements;
* users may make errors when entering vehicle or chassis information;
* users may misunderstand current allocation or reset information;
* users may have difficulty accessing or presenting their QR credential;
* QR verification may fail under particular environmental or device conditions;
* users may be uncertain about recovery after a failed verification;
* users with limited digital access may rely on assistance from other people;
* users may experience language or readability barriers;
* users may be uncertain about support pathways;
* exceptional operational users may have difficulty identifying the correct administrative pathway.

---

## 11.4 Unknowns — UNKNOWN

Important unknowns include:

* actual QR presentation methods;
* QR scanning failure causes;
* station hardware and software;
* station connectivity;
* actual forecourt workflow;
* transaction duration;
* frequency of ownership mismatches;
* actual recovery behavior;
* support escalation workflow;
* accessibility barriers;
* language preferences;
* OTP/SMS reliability in current operation;
* internal backend architecture;
* administrative processing workflows for exceptional cases.

---

# 12. Service Dependencies

The following are **service-level relationships**, not technical architecture claims.

| Service Relationship                              | Description                                                                       | Classification |
| ------------------------------------------------- | --------------------------------------------------------------------------------- | -------------- |
| **Citizen ↔ NFP Registration**                    | User provides the information required by the applicable registration process     | E              |
| **Citizen ↔ Mobile / OTP Service**                | Registration may involve mobile-number verification and OTP                       | E              |
| **Citizen ↔ Vehicle / Identity Information**      | Registration and validation depend on applicable vehicle and identity information | E              |
| **Citizen ↔ QR Credential**                       | A valid QR credential is required for current fuel verification                   | E              |
| **Citizen ↔ Fuel Station Staff**                  | User interacts with station personnel during fuel verification                    | E/RH           |
| **Station Staff ↔ Verification Process**          | Station personnel participate in the QR verification process                      | E              |
| **Citizen ↔ GIC / Official Support**              | Users can access documented support channels                                      | E              |
| **Citizen / Operator ↔ Allocation Rules**         | Fuel transactions operate within applicable allocation rules                      | E              |
| **Operational User ↔ Special Allocation Process** | Certain contexts may have special allocation mechanisms                           | E/RH/UNKNOWN   |

No internal API, database, synchronization, or infrastructure relationship is implied.

---

# 13. Recovery and Exception Paths

| Journey  | Exception                                   | Current Understanding                                                                                                    | Classification |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| **J-01** | Registration / vehicle-information mismatch | User may need to review the information provided and follow the applicable official recovery or re-registration guidance | E/RH           |
| **J-01** | OTP problem                                 | User may need to retry or follow the applicable service guidance                                                         | E/RH           |
| **J-03** | QR verification failure                     | The actual failure and recovery process requires observation                                                             | RH/UNKNOWN     |
| **J-03** | Insufficient applicable allocation          | The transaction outcome depends on the applicable current allocation rules                                               | E/RH           |
| **J-04** | Changed registered contact information      | Current official guidance provides pathways for relevant contact/re-registration situations                              | E              |
| **J-04** | Ownership information changed               | Current guidance indicates re-registration may be relevant; exact operational handling requires validation               | E/RH/UNKNOWN   |
| **J-05** | Unresolved service problem                  | User can use documented official support channels                                                                        | E              |
| **J-06** | Exceptional allocation problem              | Exact administrative recovery and escalation pathway is not established                                                  | UNKNOWN        |

---

# 14. Accessibility and Inclusive Journey Considerations

## 14.1 Language

* **E:** Official service information supports Sinhala, Tamil, and English.
* **RH:** User preferences and language-specific comprehension should be investigated.
* **RH:** Potential text readability or layout issues across languages should be tested rather than assumed.

## 14.2 Digital Literacy

* **RH:** Users with lower digital confidence may require assistance during registration or recovery.
* **RH:** The frequency and nature of assisted interactions require research.

## 14.3 Device and Connectivity Access

* **RH:** Device availability, connectivity conditions, and their effect on service access require field investigation.
* **UNKNOWN:** The distribution of device types and connectivity conditions among NFP users is not established.

## 14.4 Credential Presentation

* **RH/UNKNOWN:** The actual methods users employ to access and present credentials should be established through observation and interviews.

Do not assume screenshots, printed copies, saved images, or any other presentation method before research confirms them.

## 14.5 Temporary / Foreign Users

* **E:** Historical official service documentation includes passport-related registration information.
* **RH/UNKNOWN:** Current pathways, language preferences, and vehicle-binding situations for temporary or foreign users require validation.

---

# 15. Dedicated Forecourt / Fuel-Station Journey

Because fuel-station verification is a critical service touchpoint, the following provisional flow is used for research planning.

```text
[Arrival]
    ↓
[Credential Presentation]
    ↓
[Verification Attempt]
    ↓
[Verification Outcome]
    ↓
[Fuel Transaction]
    ↓
[Completion / Next Step]
```

This flow is a **research model**, not a claim that every station follows this exact sequence.

## Forecourt Observation Framework

| Stage                       | What Is Currently Established                               | What Must Be Observed                                    |
| --------------------------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| **Arrival**                 | Fuel stations are service touchpoints                       | Queue behavior, station layout, waiting conditions       |
| **Credential Presentation** | QR-based verification is required                           | Actual presentation methods and retrieval behavior       |
| **Verification**            | QR verification occurs                                      | Scan process, device context, success/failure conditions |
| **Outcome**                 | Verification determines whether the transaction can proceed | Error communication and recovery behavior                |
| **Fuel Transaction**        | Fuel is dispensed according to applicable rules             | Actual operator/user sequence                            |
| **Completion**              | Transaction affects applicable fuel allocation              | Actual confirmation and balance-update behavior          |

### Research Boundary

Do not record environmental conditions such as glare, sunlight, camera focus, connectivity, or device limitations as causes of failure unless they are actually observed or reported by participants.

---

# 16. Dedicated Ownership / Contact Change Journey

The provisional model is:

```text
[Change in Ownership / Contact Information]
                    ↓
        [Identify Applicable Procedure]
                    ↓
       [Follow Official Guidance]
                    ↓
        [Validation / Processing]
                    ↓
        [Successful Completion]
                    ↓
          [Support if Unresolved]
```

### Documented Current Conditions

* Current official guidance addresses relevant contact-number and ownership-change situations.
* Users may be required to follow a re-registration or recovery pathway.

**Classification: E**

### Research Questions

Primary research should investigate:

* How users discover that a change requires action.
* Whether users understand the correct procedure.
* What information users expect to provide.
* Where users become uncertain.
* When users seek support.
* What happens when the standard pathway does not resolve the problem.

### Unknowns

The following must not be assumed:

* internal record-unbinding process;
* support-agent workflow;
* database synchronization;
* exact identity-verification procedure;
* processing time.

---

# 17. Dedicated Support & Escalation Journey

The provisional model is:

```text
[Problem Recognition]
        ↓
[Attempt Available Guidance]
        ↓
[Discover Official Support]
        ↓
[Contact Support]
        ↓
[Receive Guidance / Next Step]
        ↓
[Resolution or Further Escalation]
```

### Documented

Official support channels are available for NFP-related issues.

**Classification: E**

### Requires Research

Primary research should investigate:

* how users discover support;
* which problems cause users to seek support;
* what information users need before contacting support;
* whether users understand the expected next step;
* whether they need to contact support repeatedly;
* how unresolved cases are handled from the user's perspective.

### Unknown

The following are not established:

* internal ticketing;
* case-routing architecture;
* staffing;
* SLA;
* internal escalation hierarchy;
* citizen-facing status tracking.

---

# 18. Journey Comparison Matrix

| Journey                               | Registration | QR Verification | Allocation  | Recovery    | Support     | Accessibility | Exceptions  |
| ------------------------------------- | ------------ | --------------- | ----------- | ----------- | ----------- | ------------- | ----------- |
| **J-01 Registration**                 | **Primary**  | Relevant        | Relevant    | Relevant    | Relevant    | Relevant      | Secondary   |
| **J-02 Allocation**                   | Secondary    | Relevant        | **Primary** | Not central | Relevant    | Relevant      | Relevant    |
| **J-03 Forecourt**                    | Not central  | **Primary**     | Relevant    | Relevant    | Relevant    | Relevant      | Relevant    |
| **J-04 Contact / Ownership Recovery** | Relevant     | Relevant        | Not central | **Primary** | **Primary** | Relevant      | Relevant    |
| **J-05 Support**                      | Relevant     | Relevant        | Relevant    | **Primary** | **Primary** | Relevant      | **Primary** |
| **J-06 Exceptional Context**          | Relevant     | Relevant        | **Primary** | Relevant    | Relevant    | Relevant      | **Primary** |

These classifications indicate research relevance, not measured severity.

---

# 19. Journey-to-Persona Traceability

| Journey  | Relevant Persona             | Reason for Relevance                                             | Status      |
| -------- | ---------------------------- | ---------------------------------------------------------------- | ----------- |
| **J-01** | P-01, P-02, P-04, P-05       | Registration and vehicle-information interaction                 | Provisional |
| **J-02** | P-01, P-02, P-03, P-04       | Allocation information may affect different operational contexts | Provisional |
| **J-03** | P-01, P-02, P-03, P-04, P-05 | All applicable vehicle users may encounter station verification  | Provisional |
| **J-04** | P-01, P-02, P-04             | Contact and ownership changes are relevant recovery contexts     | Provisional |
| **J-05** | P-01, P-02, P-03, P-04, P-05 | All user contexts may require support                            | Provisional |
| **J-06** | P-03                         | Represents specialized operational contexts                      | Provisional |

---

# 20. Journey-to-Problem Traceability

| Problem Area                                  | Related Journeys             | Classification   |
| --------------------------------------------- | ---------------------------- | ---------------- |
| **Ownership, Registration, and Recovery**     | J-01, J-04                   | E / I / RH       |
| **QR Verification and Forecourt Interaction** | J-03                         | E / I / RH       |
| **Allocation / Quota Comprehension**          | J-02                         | E / I / RH       |
| **Support and Escalation**                    | J-04, J-05                   | E / I / RH       |
| **Accessibility and Inclusive Access**        | J-01, J-02, J-03, J-04, J-05 | E / RH           |
| **Exceptional / Non-Standard Contexts**       | J-06                         | E / RH / UNKNOWN |

---

# 21. Research Validation Requirements

Each provisional journey requires specific empirical validation.

| Journey  | Validation Requirement                                                     | Research Method                                        |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------------------ |
| **J-01** | Actual registration sequence, data-entry difficulties, validation problems | Citizen interviews, contextual inquiry, survey         |
| **J-02** | Understanding of allocation, remaining amount, and reset timing            | Interviews, survey                                     |
| **J-03** | Actual QR presentation, scanning, station workflow, failures, recovery     | Station observation, contextual inquiry                |
| **J-04** | Ownership/contact-change experiences and recovery pathways                 | Citizen interviews, support/admin interviews           |
| **J-05** | Support discovery, information requirements, escalation experiences        | Interviews, support/admin research                     |
| **J-06** | Actual exceptional allocation pathways and administrative responsibilities | Stakeholder/admin interviews and official verification |

### Specific Research Questions

Research should particularly address:

* **RQ-02.1:** How frequently do ownership/identity mismatches occur and how are they resolved?
* **RQ-02.2:** How well do users understand ownership changes and re-registration?
* **RQ-02.3:** What recovery paths do users actually use?
* **RQ-03.1:** How do users actually present their QR credentials?
* **RQ-03.2:** What observable conditions affect QR verification?
* **RQ-03.3:** What happens when verification fails?
* **RQ-03.4:** How do users recover from verification failure?
* **RQ-04.1:** How do users understand their allocation?
* **RQ-04.2:** How do users interpret reset information?
* **RQ-05.1:** Which support channels do users use?
* **RQ-05.2:** What information do users need before contacting support?
* **RQ-05.3:** Which situations require escalation?
* **RQ-06.1:** What digital-access constraints affect service interaction?
* **RQ-06.2:** What device/connectivity constraints exist?
* **RQ-06.3:** What language and accessibility requirements emerge?
* **RQ-07.1:** What is the actual station workflow?
* **RQ-07.2:** How long do relevant transaction stages take?
* **RQ-07.3:** What happens during unreadable QR, timeout, or connectivity problems?
* **RQ-07.4:** What difficulties emerge in higher-volume station contexts?

---

# 22. Journey Evolution After Research

Following primary research, the provisional journeys will be revised using empirical evidence.

Possible outcomes include:

### Confirm

Retain a journey where research supports its structure and relevance.

### Modify

Change stages, goals, touchpoints, or recovery paths based on observed evidence.

### Merge

Combine journeys where research shows substantially overlapping service interactions.

### Split

Separate journeys where research identifies materially different user contexts or workflows.

### Retire

Remove a journey if research does not support its relevance.

### Add

Create additional journeys if research identifies important service scenarios not currently represented.

The resulting journeys should contain explicit evidence links to research findings.

---

# 23. Design Implications

The following are **Design Hypotheses (DH)** only.

They must not be treated as final product requirements.

### DH-01 — Registration Guidance

If research identifies significant uncertainty or errors during registration, the redesign may need clearer field guidance, examples, validation feedback, or contextual help.

### DH-02 — Allocation Clarity

If research identifies difficulty understanding allocation or remaining availability, the interface may need clearer information hierarchy and terminology distinguishing applicable allocation, usage, remaining availability, and reset information.

### DH-03 — Credential Presentation

If forecourt research identifies problems with credential access or presentation, the redesign may need to investigate more resilient or accessible credential-presentation options.

The exact solution must be determined after research.

### DH-04 — Recovery Guidance

If research identifies uncertainty around ownership or contact changes, the redesign may need clearer recovery and re-registration guidance.

### DH-05 — Support Discovery

If research identifies difficulty finding appropriate assistance, the redesign may need clearer support discovery and problem-specific guidance.

### DH-06 — Multilingual Accessibility

If research identifies language, readability, or layout problems, the redesign should investigate appropriate multilingual information architecture and accessible visual presentation.

### DH-07 — Forecourt Recovery

If observation identifies recurring verification failures, the redesign may need to investigate clearer error states and recovery guidance.

No offline verification, alternative QR formats, hardware changes, or other specific technical features are mandated at this stage.

---

# 24. Current Status

**Document Status: PROVISIONAL — PENDING PRIMARY USER RESEARCH**

| Artifact                              | Status                                |
| ------------------------------------- | ------------------------------------- |
| `process/UX-PROCESS.md`               | Completed                             |
| `research/02-desk-research.md`        | Completed                             |
| `research/03-stakeholder-analysis.md` | Completed                             |
| `research/04-user-research.md`        | Completed as research plan            |
| `research/05-competitive-analysis.md` | Completed                             |
| `research/sources.md`                 | Completed                             |
| `define/problem-statement.md`         | Completed                             |
| `define/personas.md`                  | Completed as provisional personas     |
| `define/user-journeys.md`             | **Completed as provisional journeys** |
| Primary user research                 | **Pending**                           |
| Journey validation                    | **Pending**                           |

---

# 25. Remaining Unknowns

The following remain explicitly unestablished:

1. Actual QR credential presentation methods.
2. Actual QR scanning failure causes.
3. Station hardware and verification-device characteristics.
4. Station connectivity conditions.
5. Actual forecourt workflow.
6. Actual transaction duration.
7. Frequency and severity of ownership/identity mismatches.
8. Actual user recovery behavior.
9. Actual support escalation workflow.
10. Accessibility barriers.
11. User language preferences.
12. Device and connectivity constraints.
13. Current OTP/SMS reliability characteristics.
14. Internal backend architecture.
15. Administrative workflows for exceptional allocation contexts.
16. Actual balance-update timing.
17. Actual notification/confirmation behavior.

These unknowns should not be resolved through speculation.

---

# 26. Next Steps

The next work should proceed in the following order:

1. **Execute primary user research**

   * Citizen interviews
   * Station contextual inquiry
   * Forecourt observation
   * Accessibility-focused research
   * Survey
   * Relevant stakeholder/support interviews

2. **Analyze research findings**

   * Qualitative coding
   * Affinity analysis
   * Contradiction analysis
   * Quantitative aggregation where applicable

3. **Validate and revise personas and journeys**

   * Confirm
   * Modify
   * Merge
   * Split
   * Retire
   * Add

4. **Develop `define/requirements.md`**

   * Derive requirements from validated evidence and clearly labelled hypotheses.

5. **Develop `define/design-principles.md`**

   * Establish principles based on the validated problem, research findings, and service requirements.

Requirements should not be treated as final simply because they appear in a provisional journey.

---

# 27. Conclusion

This document establishes six provisional user journeys representing important service interactions within the National Fuel Pass ecosystem:

1. Registration & Vehicle Onboarding
2. Allocation & Quota Comprehension
3. Forecourt QR Presentation & Verification
4. Contact / Ownership Change & Recovery
5. Support & Issue Escalation
6. Exceptional / Non-Standard Allocation Context

The journeys provide a structured bridge between the approved problem definition, provisional personas, and planned primary research.

They deliberately distinguish documented service conditions from inferences, research hypotheses, design hypotheses, and unknowns.

Because primary research has not yet been conducted, these journeys are **not empirical findings** and must not be presented as observed user behavior.

The next major activity should be primary research and validation before final requirements and design decisions are established.
