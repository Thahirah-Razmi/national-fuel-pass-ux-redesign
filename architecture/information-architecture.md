# Information Architecture

## 1. Purpose

This document defines the proposed information architecture (IA) for the UX redesign of the Sri Lanka National Fuel Pass service.

The purpose of the IA is to organize service information and user actions so that citizens and other relevant service participants can understand:

* where they are in the service
* what information is relevant to them
* what action they can take next
* how to recover from common problems
* where to obtain support

This IA is a **proposed UX structure for the project prototype**.

It does not represent the actual information architecture, navigation structure, database structure, or technical architecture of the production National Fuel Pass system.

---

# 2. Evidence Base

The IA is informed by:

* current National Fuel Pass public guidance
* historical National Fuel Pass documentation
* Ministry of Energy information about the current QR-based fuel allocation system
* DMT public vehicle-information services
* stakeholder analysis
* provisional personas
* provisional user journeys
* requirements specification
* design principles

Important evidence includes:

* the current service requires a National Fuel QR code for fuel transactions
* changed vehicle ownership or contact information can require re-registration
* the current allocation cycle resets at midnight on Saturday
* current fuel allocations vary by vehicle category
* the service provides public support guidance
* Sinhala, Tamil, and English are relevant service languages

Some operational details remain unknown and must be validated through primary research.

---

# 3. Epistemological Boundaries

The following classifications are used:

| Classification | Meaning                                                |
| -------------- | ------------------------------------------------------ |
| **E**          | Evidence directly supported by a source or observation |
| **I**          | Inference from available evidence                      |
| **RH**         | Research hypothesis requiring validation               |
| **DH**         | Design hypothesis                                      |
| **TD**         | Technical/prototype decision                           |
| **UNKNOWN**    | Not currently established                              |

The proposed IA should therefore not be interpreted as evidence that the current production service already contains these screens, menus, workflows, or information groupings.

---

# 4. IA Objectives

The information architecture should:

1. Make the user's current service state understandable.
2. Prioritize the most important task for the current context.
3. Keep registration and vehicle information understandable.
4. Make fuel allocation information easy to locate.
5. Make QR presentation easy to access when needed.
6. Provide clear recovery and support paths.
7. Support Sinhala, Tamil, and English.
8. Accommodate different levels of digital literacy.
9. Separate normal tasks from exceptional/recovery tasks.
10. Avoid unnecessary navigation and information duplication.
11. Support both citizen-facing and service-ecosystem considerations.
12. Remain simple enough to implement and demonstrate in the React MVP.

---

# 5. Proposed Information Architecture

The proposed citizen-facing structure is:

```text
National Fuel Pass
│
├── Home / Dashboard
│   ├── Vehicle
│   ├── Registration Status
│   ├── Fuel Allocation
│   ├── Remaining Allocation
│   ├── Reset Information
│   └── Next Action
│
├── Fuel QR
│   ├── Display QR
│   ├── Vehicle Context
│   └── Verification Status
│
├── Vehicle & Registration
│   ├── Vehicle Information
│   ├── Registration Status
│   ├── Ownership / Contact Information
│   └── Change / Re-registration Guidance
│
├── Allocation
│   ├── Current Allocation
│   ├── Used Allocation
│   ├── Remaining Allocation
│   └── Reset Information
│
├── Activity / History
│   ├── Recent Fuel Transactions
│   └── Allocation History
│
├── Help & Support
│   ├── Common Issues
│   ├── Registration Help
│   ├── QR / Verification Help
│   ├── Ownership / Contact Change
│   ├── Support Information
│   └── Recovery Guidance
│
└── Settings
    ├── Language
    ├── Accessibility Preferences
    └── Account / Session Options
```

The exact contents of each section should be validated before implementation.

---

# 6. Primary Navigation

The primary navigation should expose the small number of areas that users are most likely to need regularly.

A proposed navigation model is:

```text
Home
QR
Vehicle
Allocation
Help
```

## Rationale

**I:** Registration, allocation, QR verification, and support represent major service areas identified through the user journeys.

**DH:** Persistent access to these areas may reduce unnecessary navigation.

The final navigation structure should be validated through card sorting, tree testing, or usability testing where practical.

---

# 7. Home / Dashboard

## Purpose

The Home screen should provide a concise overview of the user's current service state.

## Proposed information

```text
Home
│
├── Vehicle
│   └── Current vehicle
│
├── Registration
│   └── Current status
│
├── Fuel Allocation
│   ├── Allocation
│   ├── Used
│   └── Remaining
│
├── Reset Information
│
└── Next Action
```

## Design Rationale

**DH:** Combining the most relevant current-state information may help users understand what they need to do without navigating through multiple sections.

The dashboard should not become an information-heavy summary of every available service feature.

The final content hierarchy should be validated with users.

---

# 8. QR Area

## Purpose

Provide a clear location for accessing the user's prototype QR credential when fuel verification is required.

## Proposed structure

```text
Fuel QR
│
├── QR Credential
│
├── Vehicle Context
│
├── Status
│
└── Help / Verification Guidance
```

## Important Boundary

**E:** Current policy requires QR-based verification for fuel transactions.

**UNKNOWN:** The exact production QR presentation, payload, storage mechanism, scanning infrastructure, and verification architecture are not established by the current research.

Therefore, the prototype should demonstrate a **simulated QR credential**, not reproduce or claim the production technical implementation.

---

# 9. Vehicle & Registration

## Purpose

Provide users with a clear view of their vehicle and registration-related information.

## Proposed structure

```text
Vehicle & Registration
│
├── Vehicle Details
│
├── Registration Status
│
├── Ownership / Contact Information
│
└── Change Information
    └── Re-registration / Support Guidance
```

## Design Consideration

The IA should avoid exposing unnecessary technical registration information on the primary screen.

Detailed information can be progressively disclosed when needed.

---

# 10. Allocation

## Purpose

Allow users to understand their current fuel allocation.

## Proposed structure

```text
Allocation
│
├── Vehicle Category
├── Applicable Allocation
├── Used
├── Remaining
├── Reset Information
└── Allocation History
```

## Evidence Boundary

Current vehicle-category allocations and the Saturday midnight reset schedule are documented service information.

However, the proposed visualization and information hierarchy are **design decisions**, not documented features of the existing interface.

---

# 11. Activity / History

## Purpose

Provide a potential location for reviewing previous fuel-related activity.

## Status

**DH / RH**

A history feature may improve transparency, but the available research does not establish that users currently need or expect this feature.

Primary research should determine:

* whether users want transaction history
* what information they need from history
* how frequently they would use it
* whether history is important for dispute/support situations

Therefore, transaction history should not be treated as a mandatory production requirement at this stage.

---

# 12. Help & Support

## Purpose

Provide users with a clear recovery and support pathway.

## Proposed structure

```text
Help & Support
│
├── Registration Problems
├── Ownership / Contact Changes
├── QR / Verification Problems
├── Allocation Questions
├── Common Questions
├── Recovery Guidance
└── Official Support Channel
```

## Evidence Boundary

The current public service provides support guidance and a published WhatsApp support channel.

The IA should surface the verified current support information without inventing internal support workflows, ticket systems, escalation procedures, or response times.

---

# 13. Settings

## Purpose

Provide user-facing preferences that affect the prototype experience.

## Proposed structure

```text
Settings
│
├── Language
├── Accessibility
└── Account / Session
```

## Language

The prototype should support:

* Sinhala
* Tamil
* English

This is a prototype implementation decision informed by the service's multilingual context.

## Accessibility

Accessibility preferences may be explored where they are useful and technically appropriate.

The project should not assume that one set of preferences will address every accessibility requirement.

---

# 14. Information Hierarchy

Information should generally follow this priority:

### Level 1 — Immediate Task

What does the user need to do now?

Examples:

* Show QR
* Complete registration
* Review allocation
* Resolve an issue

### Level 2 — Current State

What is happening?

Examples:

* Registered
* Action required
* Verification successful
* Verification unsuccessful

### Level 3 — Supporting Information

Why is this happening?

Examples:

* ownership/contact information changed
* allocation reset information
* relevant service guidance

### Level 4 — Detailed Information

Additional information that may be useful but is not required for the immediate task.

This hierarchy supports the design principle:

> **Make the current state obvious and guide users toward one clear next action.**

---

# 15. Content Grouping Principles

Information should be grouped according to user goals rather than internal government organizational structures.

For example:

### User Goal

> "I need fuel."

Relevant information:

* QR access
* vehicle context
* allocation status
* verification guidance

Not necessarily:

* government department names
* technical system descriptions
* historical policy information

### User Goal

> "My vehicle or phone information changed."

Relevant information:

* current registration state
* change/re-registration guidance
* required next action
* support information

---

# 16. Cross-Linking

Important service states should provide contextual links to related actions.

Examples:

```text
Registration Problem
        ↓
View Recovery Guidance
        ↓
Contact Support
```

```text
QR Verification Problem
        ↓
View Verification Help
        ↓
Recovery / Support
```

```text
Allocation Information
        ↓
View Reset Information
        ↓
View Activity
```

The exact links should be based on validated user needs.

---

# 17. Error and Recovery Information Architecture

Recovery should not exist only inside the Help section.

Where a user encounters a problem, the interface should provide an immediate route toward resolution.

For example:

```text
Problem
   ↓
What happened?
   ↓
What can I do?
   ↓
Try again / Correct information / View guidance
   ↓
Need more help?
   ↓
Official Support
```

This supports the design principle:

> **Design for recovery, not just the happy path.**

---

# 18. Role-Based Service Structure

The project recognizes three broad service groups:

```text
National Fuel Pass Service
│
├── Citizen / Vehicle Owner
│
├── Fuel Station Personnel
│
└── Government / Service Administration
```

However, the React MVP should not automatically implement all three as full production systems.

## Citizen Experience

Primary prototype scope:

* registration
* vehicle information
* allocation
* QR
* recovery
* support

## Fuel Station Experience

Potential prototype/simulation scope:

* QR verification
* vehicle context
* verification result
* exception state

Exact operator requirements remain subject to primary research.

## Government / Administration

Production administrative functionality is outside the MVP scope.

Administrative processes may instead be represented through conceptual service flows or documentation.

---

# 19. Sitemap

The proposed citizen-facing sitemap is:

```text
                         National Fuel Pass
                                │
          ┌─────────────────────┼─────────────────────┐
          │                     │                     │
        Home                   QR                 Vehicle
          │                     │                     │
   ┌──────┼──────┐        ┌─────┴─────┐        ┌─────┴─────┐
   │      │      │        │           │        │           │
Status Allocation Action  QR        Guidance  Details    Changes
          │
          └──────────────┐
                         │
                     Allocation
                         │
                  ┌──────┼──────┐
                  │      │      │
                Current Used  History
                         
                         │
                    Help & Support
                         │
              ┌──────────┼──────────┐
              │          │          │
          Registration   QR       Recovery
              │          │          │
              └──────────┼──────────┘
                         │
                   Official Support
                         
                         │
                     Settings
                         │
                    ┌────┴────┐
                    │         │
                 Language Accessibility
```

This is a conceptual IA model, not a technical system diagram.

---

# 20. Content Model

The prototype can organize information around the following conceptual entities:

| Entity           | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| User             | Represents the prototype account                   |
| Vehicle          | Represents the vehicle associated with the account |
| Registration     | Represents registration state                      |
| Allocation       | Represents applicable fuel allocation              |
| QR Credential    | Represents the prototype fuel credential           |
| Transaction      | Represents simulated fuel activity                 |
| Support Issue    | Represents a prototype support/recovery context    |
| Service Guidance | Provides contextual information                    |

These are **prototype domain concepts**, not claims about the production NFP database schema.

---

# 21. Multilingual Information Architecture

The IA should remain structurally consistent across:

* Sinhala
* Tamil
* English

Changing language should not unexpectedly move important controls or change the information hierarchy.

Translations should preserve:

* meaning
* action intent
* status meaning
* navigation hierarchy

Official terminology should be verified before final production-quality copy is created.

---

# 22. Accessibility and IA

Accessibility considerations should influence information architecture from the beginning.

The IA should support:

* predictable navigation
* meaningful headings
* logical content order
* clear grouping
* descriptive labels
* status information independent of colour
* manageable information density

The final implementation should use appropriate semantic structures so that assistive technologies can understand the information hierarchy.

---

# 23. IA Validation Plan

The IA should be validated before being treated as final.

## Method 1 — Card Sorting

Potential participants organize information into categories.

Useful for testing:

* navigation labels
* grouping
* terminology

## Method 2 — Tree Testing

Participants attempt tasks using the proposed information structure.

Example:

> "You changed your phone number. Where would you go?"

## Method 3 — Usability Testing

Test the complete navigation in the interactive prototype.

Observe:

* navigation errors
* hesitation
* backtracking
* incorrect section selection
* ability to locate support

## Method 4 — Stakeholder Review

Where access is available, review service terminology and operational assumptions with appropriate stakeholders.

---

# 24. Research Questions for IA Validation

The following questions remain open:

1. Which functions do users need most frequently?
2. What should appear immediately after login?
3. Do users understand "Allocation" as a navigation label?
4. Do users expect QR access to be a primary navigation item?
5. Where would users look for ownership/contact recovery?
6. Do users expect transaction history?
7. What terminology do users naturally use for registration problems?
8. How should support information be grouped?
9. Which navigation patterns work best for users with limited digital literacy?
10. Does the proposed information hierarchy remain understandable across Sinhala, Tamil, and English?

---

# 25. IA-to-User-Journey Traceability

| Journey                                            | Primary IA Areas             |
| -------------------------------------------------- | ---------------------------- |
| J-01 Registration & Vehicle Onboarding             | Vehicle & Registration, Home |
| J-02 Allocation & Quota Comprehension              | Home, Allocation             |
| J-03 Forecourt QR Presentation & Verification      | QR, Home                     |
| J-04 Contact / Ownership Change & Recovery         | Vehicle & Registration, Help |
| J-05 Support & Issue Escalation                    | Help & Support               |
| J-06 Exceptional / Non-Standard Allocation Context | Help, Allocation, Guidance   |

---

# 26. IA-to-Design-Principle Traceability

| IA Decision                      | Relevant Principle                        |
| -------------------------------- | ----------------------------------------- |
| Current state on Home            | Make the Current State Obvious            |
| Primary QR access                | One Clear Next Action                     |
| Contextual recovery links        | Design for Recovery                       |
| Plain navigation labels          | Plain, Contextual and Actionable Language |
| QR status area                   | Understandable Verification               |
| Responsive information hierarchy | Real-World Forecourt Conditions           |
| Multilingual structure           | Inclusive Access                          |
| Allocation section               | Clear Allocation Information              |
| Progressive content grouping     | Reduce Cognitive Load                     |
| Explicit status states           | Keep Users Informed                       |
| Form grouping                    | Prevent Preventable Errors                |
| Official support context         | Build Trust                               |
| Evidence labels                  | Separate Rules From Proposals             |
| Citizen/operator ecosystem       | Service as an Ecosystem                   |
| IA testing                       | Validate Before Freezing                  |

---

# 27. Prototype Boundary

The following are within the proposed React MVP information architecture:

* citizen dashboard
* synthetic vehicle information
* synthetic registration state
* synthetic allocation information
* prototype QR display
* simulated verification states
* recovery guidance
* support guidance
* Sinhala/Tamil/English interface structure
* selected accessibility considerations

The following remain outside the prototype's production claims:

* live DMT integration
* live government databases
* real identity verification
* real OTP delivery
* production QR validation
* live fuel-station infrastructure
* real government administrative systems
* undocumented backend architecture

---

# 28. Current Status

**Status: PROVISIONAL — READY FOR USER-FLOW DESIGN AND PRIMARY RESEARCH VALIDATION**

The IA provides a proposed organizational structure for the redesigned service.

It should be refined after:

* primary user research
* stakeholder research
* card sorting/tree testing where practical
* usability testing

No IA structure should be treated as permanently fixed before validation.

---

# 29. Next Steps

1. Develop `architecture/user-flows.md`.
2. Map each major user journey to the proposed IA.
3. Conduct primary research.
4. Validate navigation terminology and grouping.
5. Create wireframes.
6. Test the information hierarchy.
7. Revise the IA based on evidence.
8. Begin interaction design and prototyping.

---

# 30. Conclusion

The proposed information architecture organizes the National Fuel Pass redesign around user goals rather than undocumented internal system structures.

Its central priorities are:

* clear current state
* direct access to important tasks
* understandable allocation information
* accessible QR presentation
* recovery and support
* multilingual access
* inclusive navigation
* evidence-based iteration

The IA is intentionally provisional and should evolve as primary research and usability testing provide stronger evidence.

**Information Architecture Status: PROVISIONAL**
**Validation Status: PENDING PRIMARY RESEARCH AND USABILITY TESTING**
