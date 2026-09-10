# User Flows

## 1. Purpose

This document defines the proposed user flows for the UX redesign of the Sri Lanka National Fuel Pass service.

The flows translate the provisional user journeys, requirements, information architecture, and design principles into structured interaction paths.

The purpose is to describe:

* the major tasks users need to complete
* the sequence of interactions
* decision points
* successful paths
* recovery paths
* support and escalation paths
* interactions between citizens and fuel-station personnel
* areas requiring primary research or technical validation

These flows are **proposed UX models for the project prototype**.

They do not represent the actual production workflow, backend architecture, database processes, station software, or government operational procedures.

---

# 2. Evidence and Epistemological Boundaries

The following classifications are used throughout this document:

| Classification               | Meaning                                                   |
| ---------------------------- | --------------------------------------------------------- |
| **E — Evidence**             | Directly documented or verified information               |
| **I — Inference**            | Logical interpretation based on evidence                  |
| **RH — Research Hypothesis** | Unverified condition requiring research                   |
| **DH — Design Hypothesis**   | Proposed interaction/design solution requiring validation |
| **TD — Technical Decision**  | Prototype implementation decision                         |
| **UNKNOWN**                  | Not established by available evidence                     |

A flow containing an **UNKNOWN**, **RH**, or **DH** step must not be described as the confirmed behaviour of the production National Fuel Pass system.

---

# 3. Flow Design Principles

The flows follow the project's approved design principles:

1. Make the current state obvious.
2. Guide users through one clear next action.
3. Design for recovery, not only the happy path.
4. Use plain, contextual, actionable language.
5. Make verification understandable and trustworthy.
6. Consider real-world forecourt conditions.
7. Support inclusive access.
8. Make allocation information clear.
9. Reduce unnecessary cognitive and interaction load.
10. Keep users informed about service status and exceptions.
11. Prevent avoidable errors.
12. Build trust through transparency.
13. Separate confirmed service rules from proposed improvements.
14. Consider the whole service ecosystem.
15. Validate before freezing design decisions.

---

# 4. Flow Overview

The redesign contains six primary user flows:

| ID    | Flow                                          | Primary Actor               | Status      |
| ----- | --------------------------------------------- | --------------------------- | ----------- |
| JF-01 | Registration & Vehicle Onboarding             | Citizen / Vehicle Owner     | Provisional |
| JF-02 | Allocation & Quota Comprehension              | Citizen / Vehicle Owner     | Provisional |
| JF-03 | Forecourt QR Presentation & Verification      | Citizen + Station Personnel | Provisional |
| JF-04 | Contact / Ownership Change & Recovery         | Citizen / Vehicle Owner     | Provisional |
| JF-05 | Support & Issue Escalation                    | Citizen / Support Service   | Provisional |
| JF-06 | Exceptional / Non-Standard Allocation Context | Relevant User / Service     | Provisional |

The flows intentionally correspond to the six journeys defined in `define/user-journeys.md`.

---

# 5. Global Entry Flow

The proposed citizen experience begins with a simple entry point.

```text
Start
  ↓
Open National Fuel Pass prototype
  ↓
Select language
  ↓
Sign in / Continue
  ↓
Identify current service state
  ↓
 ┌─────────────────────────────────────┐
 │ What does the user need to do?      │
 └─────────────────────────────────────┘
       ↓          ↓          ↓
 Registration   Fuel/QR    Problem/Recovery
       ↓          ↓          ↓
    JF-01       JF-02/03    JF-04/05
```

### Status

**DH / TD**

This is a proposed prototype entry structure rather than a claim about the production service's current login architecture.

---

# 6. JF-01 — Registration & Vehicle Onboarding

## 6.1 Purpose

Allow a user to establish or review a vehicle's registration state within the proposed prototype.

## 6.2 Primary Flow

```text
Start
  ↓
Open Registration
  ↓
Enter required prototype information
  ↓
Validate input
  ↓
 ┌──────────────────────┐
 │ Information valid?   │
 └──────────────────────┘
       ↓ Yes                 ↓ No
       ↓                     ↓
Review information       Show field guidance
       ↓                     ↓
Confirm                Correct information
       ↓                     │
Registration state ←───────┘
       ↓
Display next action
       ↓
Home / Dashboard
```

## 6.3 Key Interaction Steps

### Step 1 — Start Registration

User selects the registration/onboarding action.

**DH**

The exact wording should be validated.

### Step 2 — Enter Information

The prototype collects only the information necessary for the simulated registration flow.

Historical NFP documentation provides examples of identity and vehicle information used by the service, but the exact current production registration contract should not be assumed.

**TD**

Prototype data should be synthetic.

### Step 3 — Validate

The interface performs prototype-level validation.

**TD**

Validation rules implemented in the prototype must not be presented as the actual production validation logic.

### Step 4 — Review

The user sees a summary before completing the process.

**DH**

A review step may reduce accidental submissions.

### Step 5 — Completion

The prototype displays the resulting registration state.

Possible prototype states:

* Registered
* Action required
* Unable to complete

These are prototype states and do not imply that the production system uses exactly these statuses.

---

# 7. JF-01 — Registration Recovery Flow

```text
Registration
     ↓
Validation problem
     ↓
Explain problem
     ↓
 ┌─────────────────────────────┐
 │ Can the user correct it?    │
 └─────────────────────────────┘
       ↓ Yes              ↓ No / Unknown
       ↓                  ↓
Correct information    View guidance
       ↓                  ↓
Try again              Support
       ↓                  ↓
Registration       Official support
```

The interface should avoid claiming a specific cause when the cause is not known.

For example, instead of:

> "DMT synchronization failed."

the prototype should use neutral language unless such a technical cause is actually established.

---

# 8. JF-02 — Allocation & Quota Comprehension

## 8.1 Purpose

Help users understand the fuel allocation associated with their vehicle context.

## 8.2 Primary Flow

```text
Home
  ↓
Allocation
  ↓
View vehicle category
  ↓
View applicable allocation
  ↓
View used / remaining information
  ↓
View reset information
  ↓
Return to Home
```

## 8.3 Current Rule

**E:** Current Ministry information documents vehicle-category-specific allocations and a Saturday midnight reset cycle.

The interface may communicate these rules in a clear manner.

The visual representation of this information is a **DH**.

---

# 9. JF-02 — Allocation Clarification Flow

```text
Allocation
   ↓
User does not understand amount
   ↓
Select "What does this mean?"
   ↓
Plain-language explanation
   ↓
Show applicable allocation
   ↓
Show reset information
   ↓
Return to Allocation
```

The exact wording should be tested with users.

Historical quota/reset information must be clearly separated from current information.

---

# 10. JF-03 — Forecourt QR Presentation & Verification

## 10.1 Purpose

Represent the interaction between a citizen and fuel-station personnel when the user presents the required QR credential.

## 10.2 Important Evidence Boundary

**E:** Current policy requires a National Fuel QR code for fuel transactions.

**UNKNOWN:** The exact production QR payload, scanning software, station hardware, network architecture, and verification process are not established by this research.

Therefore, this flow models the **service interaction**, not the production technical implementation.

---

# 11. JF-03 — Citizen Flow

```text
Home
  ↓
Open Fuel QR
  ↓
View QR credential
  ↓
Confirm vehicle context
  ↓
Present QR to station personnel
  ↓
Station verification
  ↓
 ┌─────────────────────────────┐
 │ Verification successful?    │
 └─────────────────────────────┘
       ↓ Yes              ↓ No
       ↓                  ↓
Success state         Failure state
       ↓                  ↓
Continue transaction   View guidance
                          ↓
                    Retry / Support
```

The prototype may simulate verification outcomes.

**TD**

The simulated verification must not be presented as live government verification.

---

# 12. JF-03 — Station Personnel Interaction

The service-level interaction can be represented as:

```text
Citizen presents QR
       ↓
Station personnel receives QR
       ↓
QR is scanned / verification attempted
       ↓
Verification result
       ↓
 ┌──────────────┬────────────────┐
 │ Successful   │ Unsuccessful   │
 ↓              ↓
Continue        Explain next
transaction     available action
```

### UNKNOWN

The following remain subject to field research:

* exact scanning device
* station software
* network dependency
* verification duration
* transaction recording procedure
* handling of unreadable QR codes
* station-side recovery process

These should be investigated through station observation and interviews.

---

# 13. JF-03 — Verification Failure Flow

```text
Verification attempt
        ↓
Unable to verify
        ↓
Show clear status
        ↓
 ┌──────────────────────────────┐
 │ Can the user retry safely?   │
 └──────────────────────────────┘
       ↓ Yes              ↓ No / Unknown
       ↓                  ↓
Retry verification     View guidance
       ↓                  ↓
Successful?            Support
       ↓                  ↓
  JF-03 complete     Official support
```

The prototype should avoid assigning an unsupported technical cause.

For example, the prototype should not claim:

* poor network caused the failure
* QR glare caused the failure
* server timeout caused the failure

unless the scenario is explicitly labelled as a simulated/test condition.

---

# 14. JF-04 — Contact / Ownership Change & Recovery

## 14.1 Purpose

Represent the service journey when a vehicle's ownership or contact information has changed.

## 14.2 Evidence

**E:** Current public guidance addresses situations involving changed ownership or contact information and indicates that re-registration may be required.

The exact internal processing of these cases is not established.

---

# 15. JF-04 — Ownership / Contact Change Flow

```text
User notices information has changed
             ↓
Open Vehicle & Registration
             ↓
Select Change / Recovery
             ↓
View applicable guidance
             ↓
 ┌──────────────────────────────┐
 │ Can user continue through    │
 │ available re-registration   │
 │ guidance?                    │
 └──────────────────────────────┘
       ↓ Yes              ↓ No / Unclear
       ↓                  ↓
Continue guidance      Contact support
       ↓                  ↓
Re-registration       Official support
       ↓
Review updated state
       ↓
Home
```

This flow intentionally does not specify an undocumented internal process such as:

* support-agent database unbinding
* manual record deletion
* DMT synchronization
* automatic ownership transfer

unless those mechanisms are established through further research.

---

# 16. JF-04 — Lost / Changed Contact Recovery

```text
Contact problem
      ↓
Identify available public recovery guidance
      ↓
Can the user follow the documented process?
      ↓
 ┌───────────────┬────────────────┐
 │ Yes           │ No             │
 ↓               ↓
Follow process   Support guidance
 ↓               ↓
Updated state    Official support
 ↓
Return to Home
```

The prototype should distinguish between:

* documented public guidance
* proposed UX improvements
* unknown internal handling.

---

# 17. JF-05 — Support & Issue Escalation

## 17.1 Purpose

Provide a clear path when users cannot resolve a problem through self-service.

## 17.2 Primary Flow

```text
Problem
  ↓
View contextual help
  ↓
Try recommended action
  ↓
 ┌────────────────────────────┐
 │ Problem resolved?          │
 └────────────────────────────┘
       ↓ Yes              ↓ No
       ↓                  ↓
Continue service       Support
                          ↓
                   Official channel
                          ↓
                    Provide context
                          ↓
                    Await guidance
```

The prototype should not claim to reproduce an actual government ticketing or escalation system.

---

# 18. JF-05 — Contextual Support

Support should be accessible from relevant failure states.

For example:

```text
Registration problem
        ↓
Registration guidance
        ↓
Still unable to continue?
        ↓
Support
```

and:

```text
QR verification problem
        ↓
Verification guidance
        ↓
Still unable to continue?
        ↓
Support
```

This avoids forcing users to leave the task entirely and search for support elsewhere.

---

# 19. JF-06 — Exceptional / Non-Standard Allocation Context

## 19.1 Purpose

Represent situations where the normal private-vehicle allocation journey may not apply.

## 19.2 Evidence Boundary

Current Ministry information documents special mechanisms for certain production and essential-service contexts.

However, the exact eligibility criteria, administrative process, approval mechanism, and user workflow are not fully established by this research.

Therefore, the prototype should not invent a detailed administrative process.

---

# 20. JF-06 — Proposed Guidance Flow

```text
User identifies special context
             ↓
View relevant information
             ↓
Eligibility / process guidance
             ↓
 ┌──────────────────────────────┐
 │ Does documented guidance    │
 │ provide a clear next step?  │
 └──────────────────────────────┘
       ↓ Yes              ↓ No / Unknown
       ↓                  ↓
Follow guidance       Contact support /
                      relevant authority
```

The prototype may demonstrate an informational pathway without claiming to implement actual government approval processes.

---

# 21. Global Error Flow

A consistent error model should be used across the prototype.

```text
User action
    ↓
System response
    ↓
 ┌────────────────────────────────┐
 │ What happened?                 │
 └────────────────────────────────┘
    ↓
 ┌────────────────────────────────┐
 │ What can the user do next?    │
 └────────────────────────────────┘
    ↓
 ┌────────────────────────────────┐
 │ Can the issue be resolved?    │
 └────────────────────────────────┘
       ↓ Yes              ↓ No
       ↓                  ↓
Retry / correct       Support
       ↓                  ↓
Continue              Escalate
```

Error messages should not expose unnecessary technical information.

---

# 22. Global Confirmation Flow

Consequential actions should use appropriate confirmation.

```text
Action
  ↓
Review
  ↓
Confirm
  ↓
Processing / response
  ↓
Success / action required / unable to complete
```

Examples of actions that may require confirmation in the prototype include:

* completing registration
* changing important vehicle/contact information
* performing another consequential account action

The exact confirmation requirements should be validated.

---

# 23. Navigation Flow

The proposed navigation is:

```text
Home
├── QR
├── Vehicle
├── Allocation
├── Help
└── Settings
```

A user should be able to return to Home from major task areas without losing safe, non-sensitive progress where appropriate.

---

# 24. End-to-End Citizen Service Flow

The major service experience can be represented as:

```text
                  START
                    │
                    ▼
              Select Language
                    │
                    ▼
             Access Service
                    │
                    ▼
             Current State
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   Registration   Allocation     Problem
        │           │           │
        ▼           ▼           ▼
      JF-01       JF-02       JF-04/JF-05
        │           │           │
        └───────────┼───────────┘
                    │
                    ▼
                  Home
                    │
                    ▼
                Fuel QR
                    │
                    ▼
           Present at Station
                    │
                    ▼
              Verification
               │         │
             Pass       Fail
               │         │
               ▼         ▼
        Continue Fuel   Recovery
                         │
                    ┌────┴────┐
                    ▼         ▼
                  Retry     Support
```

This represents the proposed UX model rather than a verified production process.

---

# 25. Citizen ↔ Station Service Flow

The citizen and station interactions should be considered together.

```text
CITIZEN                         STATION

Open QR
   │
   │ Present QR
   ├──────────────────────────────►
   │                              │
   │                         Scan / Verify
   │                              │
   │                         Verification
   │                              │
   │◄─────────────────────────────┤
   │       Result
   │
   ├───────────────┐
   │               │
Success         Failure
   │               │
   ▼               ▼
Continue       Recovery /
transaction    support
```

The exact station workflow remains a research question.

---

# 26. Recovery Architecture

Recovery should connect related problems rather than treating every error as an isolated page.

```text
                         Problem
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        Registration       QR          Allocation
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                       Help & Support
                            │
                            ▼
                   Official Support
```

The purpose is to ensure that users can move from a problem to an appropriate next action.

---

# 27. Flow States

The prototype should use a consistent set of conceptual states.

| State              | Meaning                                   |
| ------------------ | ----------------------------------------- |
| Initial            | User has not started the task             |
| In Progress        | User is completing the task               |
| Review             | User is checking information              |
| Success            | Task completed successfully               |
| Action Required    | User needs to do something                |
| Unable to Complete | Task cannot currently continue            |
| Recovery           | User is attempting to resolve the problem |
| Support            | User requires assistance                  |

These are proposed prototype states rather than confirmed production system states.

---

# 28. Flow-Level Accessibility Considerations

Every flow should consider:

### Language

The prototype should support Sinhala, Tamil, and English.

### Comprehension

Use clear instructions and meaningful action labels.

### Error recovery

Users should understand what happened and what they can do next.

### Status

Success and failure should not depend on colour alone.

### Navigation

Users should be able to understand where they are and how to return.

### Forms

Inputs should have clear labels and useful validation feedback.

### QR interaction

The QR presentation interface should prioritize the credential and necessary context rather than unnecessary information.

---

# 29. Flow-Level Trust Considerations

The prototype should clearly communicate:

* what service the user is interacting with
* what information is being demonstrated
* which information is synthetic
* which behaviour is simulated
* what is based on official documented service rules

The prototype must not imply live access to government systems.

---

# 30. Flow Validation Matrix

| Flow                             | Primary Research                              | Prototype Testing                     |
| -------------------------------- | --------------------------------------------- | ------------------------------------- |
| JF-01 Registration               | User interviews, contextual inquiry           | Task testing                          |
| JF-02 Allocation                 | User interviews, survey                       | Comprehension testing                 |
| JF-03 QR Verification            | Station observation, station interviews       | Forecourt/realistic-condition testing |
| JF-04 Ownership/Contact Recovery | User interviews, stakeholder research         | Recovery task testing                 |
| JF-05 Support                    | User interviews, support/stakeholder research | Support discovery testing             |
| JF-06 Exceptional Context        | Stakeholder research                          | Guidance comprehension testing        |

---

# 31. Research Questions Affecting the Flows

The following questions should remain open until primary research is conducted:

1. What is the actual sequence users follow during registration?
2. Which registration fields cause the greatest difficulty?
3. How do users recognize that their registration is complete?
4. How do users understand their current allocation?
5. How do users actually present the QR credential?
6. What happens when QR verification fails?
7. How long does the verification interaction take?
8. What do station personnel do when verification cannot be completed?
9. What ownership/contact-change cases are most common?
10. What recovery actions are available in practice?
11. What information do users need before contacting support?
12. Which support problems are most difficult to resolve?
13. What differences exist between private, commercial, and operational users?
14. What accessibility or language barriers affect the journeys?
15. Which proposed recovery patterns actually reduce user difficulty?

---

# 32. Research Observation Requirements

During station research, the following should be observed where ethically and practically possible:

* how users present the QR credential
* how station personnel initiate verification
* whether users need additional information during verification
* observed verification success/failure
* observed delays or repeated attempts
* what happens after an unsuccessful verification
* how exceptions are handled
* what information station personnel request
* how the transaction proceeds after successful verification

Do not record or collect unnecessary personal information.

Do not photograph or record sensitive credentials without explicit permission and appropriate research safeguards.

---

# 33. Flow-to-IA Traceability

| Flow  | Primary IA Areas                   |
| ----- | ---------------------------------- |
| JF-01 | Vehicle & Registration, Home       |
| JF-02 | Allocation, Home                   |
| JF-03 | QR, Home                           |
| JF-04 | Vehicle & Registration, Help       |
| JF-05 | Help & Support                     |
| JF-06 | Help, Allocation, Service Guidance |

---

# 34. Flow-to-Design-Principle Traceability

| Flow  | Most Relevant Principles                                        |
| ----- | --------------------------------------------------------------- |
| JF-01 | Current State, Next Action, Error Prevention, Plain Language    |
| JF-02 | Allocation Clarity, Current State, Transparency                 |
| JF-03 | Understandable Verification, Forecourt Context, Status Feedback |
| JF-04 | Recovery, Error Prevention, Transparency                        |
| JF-05 | Recovery, Actionable Language, Trust                            |
| JF-06 | Transparency, Plain Language, Evidence Boundaries               |

---

# 35. Flow-to-Requirements Traceability

| Flow  | Related Requirement Areas                          |
| ----- | -------------------------------------------------- |
| JF-01 | Registration/service requirements, form validation |
| JF-02 | Allocation and quota information                   |
| JF-03 | QR presentation and verification                   |
| JF-04 | Ownership/contact recovery                         |
| JF-05 | Support and escalation                             |
| JF-06 | Exceptional/non-standard allocation guidance       |

Exact requirement IDs should be updated if the final `define/requirements.md` uses different identifiers.

---

# 36. Prototype Interaction States

For the React MVP, the following states can be simulated:

### Registration

```text
Empty → Editing → Review → Success
                         ↘
                          Error
```

### QR

```text
Available → Presented → Verification
                         │
                   ┌─────┴─────┐
                   ▼           ▼
                Success       Failure
                                │
                         Retry / Support
```

### Recovery

```text
Problem → Guidance → Resolved
             │
             └──────→ Support
```

These are implementation models for the prototype.

---

# 37. What the Prototype Must Not Claim

The prototype should not imply that it:

* connects to live DMT data
* connects to live National Fuel Pass databases
* performs real identity verification
* sends real OTPs
* performs real government QR validation
* connects to real station scanners
* performs real fuel transactions
* changes real ownership records
* changes real phone numbers in government systems
* implements actual administrative approval processes

All such behaviour should be simulated if demonstrated.

---

# 38. Flow Validation and Iteration

Each flow should follow this cycle:

```text
Provisional Flow
      ↓
Primary Research
      ↓
Research Finding
      ↓
Flow Revision
      ↓
Wireframe
      ↓
Prototype
      ↓
Usability Test
      ↓
Observed Issue
      ↓
Flow Revision
      ↓
Final Prototype Flow
```

A flow should only become a final design specification after appropriate validation.

---

# 39. Current Status

**Status: PROVISIONAL — READY FOR PRIMARY RESEARCH AND INTERACTION DESIGN**

The user flows provide a structured interaction model based on:

* current and historical desk research
* stakeholder analysis
* provisional personas
* provisional user journeys
* information architecture
* requirements
* design principles

They are not validated observations of current user behaviour.

---

# 40. Next Steps

1. Execute the primary research plan.
2. Validate the six provisional journeys.
3. Validate important assumptions in the flows.
4. Conduct station/forecourt contextual research.
5. Revise flows based on actual evidence.
6. Begin low-fidelity wireframes.
7. Test navigation and task sequences.
8. Create interactive prototypes.
9. Conduct usability testing.
10. Record flow changes in the design decision log.
11. Implement validated flows in React.
12. Document the final design rationale for the Medium article.

---

# 41. Conclusion

The proposed user flows provide the interaction architecture for the National Fuel Pass UX redesign.

They cover the complete service experience from:

**Registration → Allocation → QR Presentation → Verification → Recovery → Support**

while also considering ownership/contact changes and exceptional service contexts.

The flows intentionally distinguish between documented service rules and proposed interaction patterns.

Their purpose is not to reproduce an assumed government backend, but to create a testable UX model that can be validated through primary research and usability testing.

**User Flow Status: PROVISIONAL**

**Validation Status: PENDING PRIMARY RESEARCH AND USABILITY TESTING**
