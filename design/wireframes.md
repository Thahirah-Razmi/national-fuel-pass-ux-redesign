# Low-Fidelity Wireframes

## 1. Purpose

This document defines the low-fidelity wireframe structure for the proposed redesign of the Sri Lanka National Fuel Pass service.

The purpose of the wireframes is to translate the approved Information Architecture, User Flows, Requirements, Design Principles, Personas, and Problem Definition into a structured interaction model before visual styling and high-fidelity UI design.

The wireframes focus on:

* clear service status
* registration and vehicle onboarding
* allocation and quota comprehension
* QR presentation and verification
* ownership and contact-change recovery
* support and issue escalation
* exceptional allocation guidance
* multilingual and accessible interaction
* clear recovery paths

These wireframes represent a **proposed UX direction for an academic prototype**. They do not represent the current production National Fuel Pass interface and do not claim to reproduce undocumented government system architecture.

---

## 2. Evidence and Epistemological Boundaries

The wireframes are informed by:

* official National Fuel Pass information
* historical National Fuel Pass documentation
* Ministry of Energy information about the current QR-based fuel system
* DMT public vehicle-information services
* stakeholder analysis
* provisional personas
* provisional user journeys
* provisional requirements
* provisional design principles
* information architecture
* conceptual user flows

The following taxonomy is used throughout this document:

* **E — Evidence:** directly documented or verified.
* **I — Inference:** logical interpretation based on evidence.
* **RH — Research Hypothesis:** an unverified condition requiring research.
* **DH — Design Hypothesis:** a proposed solution that requires validation.
* **TD — Technical Decision:** a decision made for the prototype implementation.
* **UNKNOWN:** not established by available evidence.

No wireframe element should be interpreted as evidence that users have already requested or validated the feature.

---

# 3. Wireframe Methodology

The wireframes follow these principles:

1. Start with the user's task rather than the interface structure.
2. Make the current service state visible.
3. Provide one clear primary action where possible.
4. Keep recovery paths close to the point of failure.
5. Separate confirmed service rules from proposed UX improvements.
6. Avoid unnecessary technical terminology.
7. Support Sinhala, Tamil, and English.
8. Design for different levels of digital familiarity.
9. Consider the forecourt context without assuming specific hardware or environmental conditions.
10. Validate important interaction decisions through primary research and usability testing.

The wireframes are intentionally low fidelity.

They should communicate:

* hierarchy
* content grouping
* navigation
* actions
* states
* relationships between screens

They should not yet determine:

* final colors
* final typography
* branding
* detailed visual styling
* final iconography
* production component implementation

---

# 4. Wireframe Inventory

| ID    | Screen                          | Primary Purpose                                  | Related Flow      |
| ----- | ------------------------------- | ------------------------------------------------ | ----------------- |
| WF-01 | Language Selection              | Select interface language                        | Global Entry      |
| WF-02 | Entry / Sign In                 | Enter the service                                | Global Entry      |
| WF-03 | Registration Start              | Begin vehicle registration                       | JF-01             |
| WF-04 | Vehicle / Identity Details      | Enter required registration information          | JF-01             |
| WF-05 | Registration Review             | Confirm entered information                      | JF-01             |
| WF-06 | Registration Success            | Confirm successful registration                  | JF-01             |
| WF-07 | Registration Error / Recovery   | Recover from registration problems               | JF-01             |
| WF-08 | Home / Dashboard                | Understand current service state                 | Global Navigation |
| WF-09 | QR Credential                   | Present QR for verification                      | JF-03             |
| WF-10 | Vehicle & Registration          | View vehicle and registration information        | JF-01 / JF-04     |
| WF-11 | Allocation                      | Understand allocation and remaining amount       | JF-02             |
| WF-12 | Activity / History              | Review previous activity                         | JF-02             |
| WF-13 | Ownership / Contact Change      | Begin change or re-registration process          | JF-04             |
| WF-14 | QR Verification Failure         | Understand failed verification and recovery      | JF-03             |
| WF-15 | Help & Support                  | Find contextual assistance                       | JF-05             |
| WF-16 | Support Context                 | Prepare information before contacting support    | JF-05             |
| WF-17 | Exceptional Allocation Guidance | Explain non-standard allocation context          | JF-06             |
| WF-18 | Settings / Accessibility        | Configure language and accessibility preferences | Global Navigation |

---

# 5. Global Layout Structure

The primary citizen interface is designed primarily for mobile-sized screens because the service involves QR presentation and mobile interaction.

The proposed basic structure is:

```text
┌─────────────────────────────┐
│ Header                      │
│ Page title        Help/Menu │
├─────────────────────────────┤
│                             │
│ Main content                │
│                             │
│                             │
├─────────────────────────────┤
│ Primary action              │
├─────────────────────────────┤
│ Bottom navigation           │
│ Home QR Vehicle Alloc. Help │
└─────────────────────────────┘
```

This structure is a **design hypothesis**, not a claim about the current NFP interface.

The exact navigation pattern should be validated during usability testing.

---

# 6. WF-01 — Language Selection

## Purpose

Allow the user to select the language in which the service interface will be presented.

## Proposed Structure

```text
┌─────────────────────────────┐
│        Fuel Pass            │
│                             │
│       Select Language       │
│                             │
│   ┌─────────────────────┐   │
│   │ Sinhala             │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │ தமிழ்               │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │ English             │   │
│   └─────────────────────┘   │
│                             │
│          Continue            │
└─────────────────────────────┘
```

## Design Rationale

The current service ecosystem provides information in Sinhala, Tamil, and English. Supporting these languages in the prototype is therefore an evidence-informed design direction.

The exact wording and language-switching behavior require validation.

**Classification:** E → DH

---

# 7. WF-02 — Entry / Sign In

## Purpose

Provide a clear entry point into the proposed service.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back                      │
│                             │
│       Welcome               │
│                             │
│   Access your Fuel Pass     │
│                             │
│   Mobile / Identifier       │
│   ┌─────────────────────┐   │
│   │                     │   │
│   └─────────────────────┘   │
│                             │
│   Verification              │
│   ┌─────────────────────┐   │
│   │                     │   │
│   └─────────────────────┘   │
│                             │
│   [ Continue ]              │
│                             │
│   Need help?                │
│   Register / Recover        │
└─────────────────────────────┘
```

The exact authentication mechanism is intentionally not defined as a production implementation.

Historical NFP documentation included SMS OTP, but current authentication architecture has not been established through the available evidence.

**Classification:** Historical E → DH / UNKNOWN

---

# 8. WF-03 — Registration Start

## Purpose

Provide a clear entry point for users who need to register or re-register a vehicle.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back     Registration     │
├─────────────────────────────┤
│                             │
│ Register your vehicle       │
│                             │
│ You may need to register    │
│ again after certain vehicle │
│ or contact changes.         │
│                             │
│ [ Start Registration ]      │
│                             │
│ Already registered?         │
│ [ Check Registration ]      │
│                             │
│ Need help?                  │
└─────────────────────────────┘
```

The wording around re-registration should be based on verified current service guidance.

**Classification:** E → DH

---

# 9. WF-04 — Vehicle / Identity Details

## Purpose

Collect the information required for the prototype registration flow.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back     Registration 2/3 │
├─────────────────────────────┤
│ Vehicle information         │
│                             │
│ Vehicle number              │
│ ┌─────────────────────────┐ │
│ │                         │ │
│ └─────────────────────────┘ │
│                             │
│ Chassis number               │
│ ┌─────────────────────────┐ │
│ │                         │ │
│ └─────────────────────────┘ │
│                             │
│ Identity information        │
│ ┌─────────────────────────┐ │
│ │ Document type            │ │
│ └─────────────────────────┘ │
│                             │
│ Document number              │
│ ┌─────────────────────────┐ │
│ │                         │ │
│ └─────────────────────────┘ │
│                             │
│ [ Continue ]                │
└─────────────────────────────┘
```

The exact fields should be determined from the verified requirements for the prototype.

Historical documentation provides examples of identity and vehicle information used by the NFP, but historical fields should not automatically be treated as current production requirements.

**Classification:** Historical E → DH / RH

---

# 10. WF-05 — Registration Review

## Purpose

Allow users to review information before submission.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back     Review            │
├─────────────────────────────┤
│ Check your information       │
│                             │
│ Vehicle                     │
│ ABC-1234              Edit  │
│                             │
│ Chassis                     │
│ XXXXXXXX              Edit  │
│                             │
│ Identity                    │
│ XXXX XXXX             Edit  │
│                             │
│ ─────────────────────────── │
│                             │
│ [ Confirm & Register ]      │
│                             │
│ Back to edit                │
└─────────────────────────────┘
```

The design aims to reduce preventable submission errors.

**Classification:** DH

---

# 11. WF-06 — Registration Success

## Purpose

Provide clear confirmation after a successful registration state.

## Proposed Structure

```text
┌─────────────────────────────┐
│                             │
│            ✓                │
│                             │
│ Registration complete       │
│                             │
│ Vehicle: ABC-1234           │
│                             │
│ Your Fuel Pass is ready     │
│                             │
│ [ View Fuel Pass QR ]       │
│                             │
│ [ Go to Home ]              │
└─────────────────────────────┘
```

The exact meaning of “ready” must correspond to the simulated state used by the prototype.

The prototype must not imply that the generated QR is a production credential.

**Classification:** DH / TD

---

# 12. WF-07 — Registration Error / Recovery

## Purpose

Explain registration problems and provide an actionable next step.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back                      │
│                             │
│ Registration needs attention│
│                             │
│ We could not complete this  │
│ step.                       │
│                             │
│ [ What you can check ]      │
│                             │
│ • Review your information   │
│ • Try again                 │
│ • Get help if the issue     │
│   continues                 │
│                             │
│ [ Review Information ]      │
│ [ Get Help ]                │
└─────────────────────────────┘
```

Specific error states should be developed after primary research identifies the most important failure scenarios.

**Classification:** DH / RH

---

# 13. WF-08 — Home / Dashboard

## Purpose

Give users a quick understanding of their current service state and the next action they may need to take.

## Proposed Structure

```text
┌─────────────────────────────┐
│ Fuel Pass            Help   │
├─────────────────────────────┤
│                             │
│ Vehicle                     │
│ ABC-1234                    │
│                             │
│ Registration                │
│ ● Active                    │
│                             │
│ Allocation                  │
│ Remaining: XX               │
│ Reset: Saturday midnight*  │
│                             │
│ ┌─────────────────────────┐ │
│ │ Next action              │ │
│ │ View your QR             │ │
│ │ [ Open QR ]              │ │
│ └─────────────────────────┘ │
│                             │
│ Quick actions               │
│ [ Allocation ] [ Vehicle ]  │
│ [ Help ]                    │
│                             │
├─────────────────────────────┤
│ Home   QR  Vehicle  Alloc.  │
│              Help           │
└─────────────────────────────┘
```

`Saturday midnight` reflects current published GIC guidance as an evidence-backed service rule.

The dashboard structure itself is a design hypothesis.

**Classification:** E → DH

---

# 14. WF-09 — QR Credential

## Purpose

Provide a clear screen for presenting the QR required for fuel verification.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back          Fuel Pass   │
├─────────────────────────────┤
│                             │
│        Your QR Pass         │
│                             │
│      ┌───────────────┐      │
│      │               │      │
│      │      QR       │      │
│      │               │      │
│      └───────────────┘      │
│                             │
│ Vehicle                     │
│ ABC-1234                    │
│                             │
│ Status                      │
│ ● Ready for verification    │
│                             │
│ [ QR Help ]                 │
│                             │
│ Do not share your pass      │
└─────────────────────────────┘
```

The current Ministry guidance establishes QR-based fuel verification.

The exact presentation method, scanning conditions, and credential format require primary research and must not be assumed.

The QR shown in the prototype should use synthetic data.

**Classification:** E → DH / TD

---

# 15. WF-10 — Vehicle & Registration

## Purpose

Allow users to understand their registered vehicle and current registration state.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Vehicle        │
├─────────────────────────────┤
│                             │
│ ABC-1234                    │
│                             │
│ Registration status         │
│ ● Active                    │
│                             │
│ Vehicle information         │
│ Vehicle number              │
│ Chassis / relevant details  │
│ Vehicle category            │
│                             │
│ Contact / ownership         │
│ Current status              │
│                             │
│ [ Change / Re-register ]    │
│                             │
│ Need help?                  │
└─────────────────────────────┘
```

The screen should only display information that the prototype is authorized to simulate.

It must not imply live access to DMT or government databases.

**Classification:** DH / TD

---

# 16. WF-11 — Allocation

## Purpose

Help users understand their current allocation, used amount, remaining amount, and reset information.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Allocation     │
├─────────────────────────────┤
│                             │
│ Current allocation          │
│                             │
│       XX / XX               │
│                             │
│ Used        Remaining       │
│ XX          XX              │
│                             │
│ Next reset                  │
│ Saturday midnight           │
│                             │
│ Vehicle category            │
│ Motor Vehicle               │
│                             │
│ [ View Activity ]           │
│                             │
│ Need help understanding    │
│ your allocation?            │
│ [ Allocation Help ]         │
└─────────────────────────────┘
```

The current quota values are service-rule data that should be represented accurately where applicable.

The visual representation of allocation is a design hypothesis.

**Classification:** E → DH

---

# 17. WF-12 — Activity / History

## Purpose

Provide a possible view of previous allocation or transaction-related activity.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Activity       │
├─────────────────────────────┤
│                             │
│ Recent activity             │
│                             │
│ ┌─────────────────────────┐ │
│ │ Date                    │ │
│ │ Fuel / allocation info  │ │
│ │ Status                  │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ Date                    │ │
│ │ Fuel / allocation info  │ │
│ │ Status                  │ │
│ └─────────────────────────┘ │
│                             │
│ No more activity            │
└─────────────────────────────┘
```

A user-facing activity/history view has not been established as a current NFP requirement.

Therefore this screen remains a **research-dependent design hypothesis**.

**Classification:** RH → DH

---

# 18. WF-13 — Ownership / Contact Change

## Purpose

Provide a clear path when ownership or contact information changes.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Vehicle        │
├─────────────────────────────┤
│                             │
│ Has your vehicle or contact │
│ information changed?        │
│                             │
│ [ Ownership changed ]       │
│                             │
│ [ Contact number changed ]  │
│                             │
│ [ I lost access to my old  │
│   number ]                  │
│                             │
│ Each option explains the    │
│ next available step.        │
│                             │
│ [ Get Help ]                │
└─────────────────────────────┘
```

Current public guidance indicates that users with changed ownership or contact information may need to re-register.

The internal process used to resolve these cases remains unknown.

**Classification:** E → DH

---

# 19. WF-14 — QR Verification Failure

## Purpose

Provide immediate recovery guidance when QR verification does not succeed.

## Proposed Structure

```text
┌─────────────────────────────┐
│                             │
│ QR verification             │
│ needs another attempt       │
│                             │
│ The pass could not be       │
│ verified at this time.      │
│                             │
│ [ Try Again ]               │
│                             │
│ Check your pass status      │
│ [ Open QR ]                 │
│                             │
│ If the problem continues:   │
│ [ Get Help ]                │
│                             │
│ What does this mean?        │
└─────────────────────────────┘
```

The prototype should provide different messages only where the corresponding state can be meaningfully simulated.

The actual causes of QR verification failures are currently unknown.

**Classification:** E → RH → DH

---

# 20. WF-15 — Help & Support

## Purpose

Provide contextual support without forcing users to search through unrelated information.

## Proposed Structure

```text
┌─────────────────────────────┐
│ Help & Support              │
├─────────────────────────────┤
│ Search help                 │
│ ┌─────────────────────────┐ │
│ │ What do you need help   │ │
│ │ with?                   │ │
│ └─────────────────────────┘ │
│                             │
│ Common topics               │
│                             │
│ Registration                │
│ Ownership / contact change │
│ QR verification             │
│ Allocation                  │
│ Account / access            │
│                             │
│ Still need help?            │
│ Official support            │
│ WhatsApp: 076 019 1919     │
└─────────────────────────────┘
```

The published GIC support channel should be represented accurately in the prototype.

The prototype must not invent additional official support channels.

**Classification:** E → DH

---

# 21. WF-16 — Support Context

## Purpose

Help the user understand what information may be useful before contacting support.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Get Help       │
├─────────────────────────────┤
│                             │
│ Before contacting support   │
│                             │
│ You may need information    │
│ such as:                    │
│                             │
│ • Vehicle number            │
│ • Registration status       │
│ • Description of the issue  │
│                             │
│ Do not share passwords, OTPs│
│ or other sensitive          │
│ credentials.                │
│                             │
│ [ Contact Official Support ]│
└─────────────────────────────┘
```

The exact information requested by support should be validated before being presented as an official requirement.

The privacy guidance here applies to the academic prototype and should not be interpreted as an official GIC support policy unless separately verified.

**Classification:** DH / TD

---

# 22. WF-17 — Exceptional Allocation Guidance

## Purpose

Provide an informational path for users whose fuel requirements fall into a non-standard or special allocation context.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Allocation     │
├─────────────────────────────┤
│                             │
│ Special allocation          │
│ information                 │
│                             │
│ Some operational or         │
│ essential-service contexts  │
│ may have separate fuel      │
│ arrangements.               │
│                             │
│ [ Learn More ]              │
│                             │
│ If this applies to you,    │
│ follow the current official │
│ guidance.                   │
│                             │
│ [ Official Support ]        │
└─────────────────────────────┘
```

The Ministry of Energy has documented special mechanisms for certain production and essential-service contexts.

The exact eligibility rules, application workflow, approval process, and user interface for these mechanisms are not established by the current research.

Therefore, this screen should remain informational unless further evidence is obtained.

**Classification:** E → DH / UNKNOWN

---

# 23. WF-18 — Settings / Accessibility

## Purpose

Provide secondary preferences that may improve inclusive access.

## Proposed Structure

```text
┌─────────────────────────────┐
│ ← Back       Settings       │
├─────────────────────────────┤
│                             │
│ Language                    │
│ Sinhala                     │
│ தமிழ்                       │
│ English                     │
│                             │
│ Accessibility               │
│ Text size                   │
│ Motion                     │
│ Contrast / display options │
│                             │
│ Account / session           │
│                             │
│ Help                        │
│                             │
│ About this prototype        │
└─────────────────────────────┘
```

The exact accessibility controls are design hypotheses and should be validated against user needs and technical feasibility.

Accessibility should also be built into the interface itself rather than relying only on a settings page.

**Classification:** DH

---

# 24. Global Error State

All major flows should use a consistent error structure.

```text
┌─────────────────────────────┐
│ Something needs attention   │
│                             │
│ What happened               │
│ Short explanation           │
│                             │
│ What you can do             │
│ 1. First action             │
│ 2. Second action            │
│ 3. Get help                │
│                             │
│ [ Primary Recovery Action ] │
│ [ Get Help ]                │
└─────────────────────────────┘
```

The exact error message should depend on the validated state.

The wireframe intentionally avoids inventing specific technical causes such as:

* database timeout
* network failure
* scanner hardware failure
* DMT synchronization failure

unless such states are actually observed or intentionally simulated.

**Classification:** DH

---

# 25. Global Confirmation State

Successful actions should communicate:

1. what happened
2. which item was affected
3. what the user can do next

Example:

```text
┌─────────────────────────────┐
│             ✓               │
│                             │
│ Action completed            │
│                             │
│ Vehicle: ABC-1234           │
│ Status: Updated             │
│                             │
│ [ Continue ]                │
└─────────────────────────────┘
```

**Classification:** DH

---

# 26. Navigation Model

The proposed primary citizen navigation is:

```text
                 HOME
                   │
       ┌───────────┼───────────┐
       │           │           │
      QR        VEHICLE    ALLOCATION
       │           │           │
       │           │      ACTIVITY
       │           │
       └─────── HELP & SUPPORT
                   │
                SETTINGS
```

The exact navigation pattern remains subject to usability validation.

The proposed navigation prioritizes the service areas most closely associated with the current user journeys.

**Classification:** DH

---

# 27. Registration Flow Wireframe Sequence

```text
Language
   ↓
Entry
   ↓
Registration Start
   ↓
Vehicle / Identity Details
   ↓
Review
   ↓
Validation / Submission
   ↓
 ┌───────────────┐
 │               │
Success         Problem
 │               │
 ↓               ↓
QR / Home       Recovery / Help
```

Related flow:

**JF-01 — Registration & Vehicle Onboarding**

---

# 28. Allocation Flow Wireframe Sequence

```text
Home
  ↓
Allocation
  ↓
Current Allocation
  ↓
Used / Remaining
  ↓
Reset Information
  ↓
Activity / Help
```

The purpose is to help users answer:

* What is my current allocation?
* How much remains?
* When does the allocation reset?
* What should I do if I do not understand the allocation?

**Classification:** DH

---

# 29. Forecourt QR Flow Wireframe Sequence

```text
Home
  ↓
Open QR
  ↓
Present QR
  ↓
Station verification attempt
  ↓
 ┌───────────────┐
 │               │
Success         Failure
 │               │
 ↓               ↓
Continue       Try Again
                  ↓
               Check Status
                  ↓
                 Help
```

The station interaction is represented as a service interaction rather than a technical architecture diagram.

The following remain unknown and require research:

* exact scanning hardware
* station application behavior
* network conditions
* verification duration
* transaction recording
* failure causes
* operator recovery procedures

**Classification:** E → RH → DH

---

# 30. Ownership / Contact Change Flow

```text
Vehicle
   ↓
Ownership / Contact Change
   ↓
Select situation
   ↓
 ┌───────────────────┐
 │                   │
Ownership         Contact
Changed           Changed
 │                   │
 └─────────┬─────────┘
           ↓
      Re-registration /
      Current Guidance
           ↓
       Confirmation
           ↓
          Home
```

If the user cannot proceed:

```text
Problem
   ↓
Help & Support
   ↓
Official Support
```

The prototype must not represent an undocumented internal support action as an actual system operation.

**Classification:** E → DH

---

# 31. Support Flow

```text
Help & Support
      ↓
Select problem
      ↓
Contextual guidance
      ↓
Try recommended action
      ↓
 ┌───────────────┐
 │               │
Resolved       Not resolved
 │               │
 ↓               ↓
Continue       Official Support
```

This structure reflects the design principle of designing for recovery rather than only the happy path.

**Classification:** DH

---

# 32. Wireframe State Model

Important states should be represented during design and later in the prototype.

| State            | Example                                |
| ---------------- | -------------------------------------- |
| Initial          | User has not started a task            |
| Loading          | Information is being processed         |
| Ready            | User can perform the next action       |
| Incomplete       | Required information is missing        |
| Validation issue | Entered information needs correction   |
| Success          | Requested action completed             |
| Failure          | Requested action did not complete      |
| Recovery         | User is given another path             |
| Support          | User is directed to assistance         |
| Unknown          | System cannot establish a useful state |

The exact states should be refined through research and implementation constraints.

---

# 33. Responsive Considerations

Although the primary interaction model is mobile-first, the information architecture should adapt to larger screens.

## Mobile

Priority:

* one primary task
* large touch targets
* concise content
* visible status
* easy QR presentation
* clear recovery

## Tablet

Potentially allow:

* wider content areas
* additional contextual information
* larger allocation/vehicle summaries

## Desktop

Potentially allow:

* expanded navigation
* more information visible simultaneously
* wider support and registration layouts

These are responsive design hypotheses rather than validated requirements.

---

# 34. Multilingual Wireframe Considerations

The interface should be structured so that Sinhala, Tamil, and English content can be accommodated without breaking layouts.

Wireframes should account for:

* different text lengths
* different character shapes
* line wrapping
* button expansion
* labels that may require more vertical space
* error messages
* form instructions
* navigation labels

The prototype should not rely on English text length when defining fixed component dimensions.

**Classification:** E → DH / TD

---

# 35. Accessibility Considerations

Accessibility should be incorporated into every wireframe.

The design should consider:

* readable text
* clear hierarchy
* sufficiently large touch targets
* labels that do not depend only on icons
* meaningful error messages
* visible focus states in interactive implementations
* logical reading order
* screen-reader-friendly semantic structure
* language selection
* adjustable text/display options where appropriate

Accessibility requirements should be validated against research and implementation constraints.

No claim is made that all proposed accessibility features are current NFP requirements.

**Classification:** DH / TD

---

# 36. Forecourt Context Considerations

The QR interaction should be designed with the possibility of real-world environmental constraints in mind.

However, the current research does not establish specific causes of QR scanning problems.

Therefore the wireframes should avoid assuming that failures are caused by:

* sunlight
* glare
* screen brightness
* network latency
* hardware limitations
* poor camera focus

These should be investigated through contextual inquiry and observation.

The wireframe requirement is therefore:

> The QR interaction should provide a clear verification state and an understandable recovery path.

**Classification:** RH → DH

---

# 37. Wireframe Annotation Convention

Figma wireframes should use a consistent annotation system.

Recommended labels:

```text
[E] Evidence-backed
[I] Inference
[RH] Research hypothesis
[DH] Design hypothesis
[TD] Technical decision
[UNKNOWN] Not established
```

Example:

```text
[DH]
Display remaining allocation prominently on Home.
```

Example:

```text
[E]
Current published guidance states that quotas reset at
12:00 AM on Saturday.
```

Example:

```text
[UNKNOWN]
Exact station-side verification workflow has not been
established.
```

This prevents proposed interface behavior from being confused with verified service behavior.

---

# 38. Traceability to User Flows

| Wireframe | User Flow         |
| --------- | ----------------- |
| WF-01     | Global Entry      |
| WF-02     | Global Entry      |
| WF-03     | JF-01             |
| WF-04     | JF-01             |
| WF-05     | JF-01             |
| WF-06     | JF-01             |
| WF-07     | JF-01             |
| WF-08     | Global Navigation |
| WF-09     | JF-03             |
| WF-10     | JF-01 / JF-04     |
| WF-11     | JF-02             |
| WF-12     | JF-02             |
| WF-13     | JF-04             |
| WF-14     | JF-03             |
| WF-15     | JF-05             |
| WF-16     | JF-05             |
| WF-17     | JF-06             |
| WF-18     | Global Navigation |

---

# 39. Traceability to Design Principles

| Wireframe Area       | Relevant Design Principles                   |
| -------------------- | -------------------------------------------- |
| Language Selection   | Inclusive Access                             |
| Registration         | Clear Current State, Error Prevention        |
| Review               | Preventable Error Reduction                  |
| Dashboard            | Current State Obvious, One Clear Next Action |
| QR                   | Understandable Verification, Trust           |
| Allocation           | Clear Allocation Information                 |
| Ownership Change     | Recovery, Plain Language                     |
| QR Failure           | Recovery, Status Feedback                    |
| Help                 | Recovery, Ecosystem Thinking                 |
| Exceptional Guidance | Transparency, Evidence Separation            |
| Settings             | Inclusive Access                             |
| Global Errors        | Recovery, Actionable Language                |

---

# 40. Traceability to Requirements

The wireframes should be reviewed against the requirement identifiers defined in:

`define/requirements.md`

The mapping should be maintained as the requirements are revised following primary research.

Examples include:

* registration information → registration requirements
* clear registration state → service-state requirements
* QR presentation → QR interaction requirements
* allocation visibility → allocation requirements
* ownership/contact recovery → recovery requirements
* support access → support requirements
* multilingual access → inclusive-access requirements
* error recovery → error-handling requirements

No requirement should be considered permanently validated solely because it appears in a wireframe.

---

# 41. Wireframe-to-Prototype Boundary

The wireframes describe the structure of the academic prototype.

The React prototype may simulate:

* registration states
* vehicle information
* allocation information
* QR presentation
* verification success/failure states
* ownership/contact-change scenarios
* support guidance
* multilingual interface states

The prototype must **not** imply:

* live DMT integration
* live National Fuel Pass database access
* live government authentication
* live government QR credentials
* real fuel transaction processing
* real quota modification
* real support ticket creation
* production security guarantees

All demonstration data should be synthetic.

---

# 42. Validation Plan

The wireframes should be validated before moving to final high-fidelity UI.

Primary research should investigate:

* whether the proposed information hierarchy matches user expectations
* whether the main navigation is understandable
* whether users can find their QR quickly
* whether allocation information is understandable
* whether ownership/contact-change paths are clear
* whether recovery options are discoverable
* whether support information appears at the appropriate point
* whether multilingual layouts remain usable
* whether the proposed dashboard provides useful information without excessive cognitive load

Usability testing should later test representative tasks such as:

1. Find your QR.
2. Check remaining allocation.
3. Find vehicle registration information.
4. Handle a changed contact number.
5. Handle an ownership change.
6. Recover from a QR verification problem.
7. Find official support.
8. Change the interface language.

The results of these tests must be documented separately in:

`design/usability-testing.md`

---

# 43. Wireframe Iteration Model

The wireframes should evolve through:

```text
Research Evidence
       ↓
Validated Finding
       ↓
Service Requirement
       ↓
Design Hypothesis
       ↓
Wireframe
       ↓
Usability Test
       ↓
Observed Issue
       ↓
Design Change
       ↓
Retest
```

A wireframe should therefore not be considered final merely because it has been implemented in Figma or React.

---

# 44. What These Wireframes Do Not Claim

These wireframes do not claim that:

* the current NFP uses this information architecture
* users have already validated these screens
* users specifically requested a dashboard
* users specifically requested activity/history
* users specifically requested accessibility settings
* station personnel use a particular scanner application
* the system has a particular backend architecture
* the system integrates with DMT through a particular API
* QR failures have a known technical cause
* the proposed authentication flow matches production
* the proposed support flow matches internal GIC operations
* the prototype represents the production government system

They represent an **evidence-informed design proposal** that requires validation.

---

# 45. Current Status

**Status: PROVISIONAL — READY FOR LOW-FIDELITY FIGMA WIREFRAMING AND PRIMARY RESEARCH VALIDATION**

Completed inputs:

* Project framing
* Desk research
* Stakeholder analysis
* User research plan
* Competitive analysis
* Source register
* Problem definition
* Personas
* User journeys
* Requirements
* Design principles
* Information architecture
* User flows

Current design output:

* Low-fidelity wireframe specification

Pending:

* Figma low-fidelity wireframes
* Primary research execution
* Wireframe validation
* Design iteration
* High-fidelity visual design
* Usability testing

---

# 46. Next Steps

The recommended sequence is:

1. Create the low-fidelity wireframes in Figma based on this document.
2. Validate the structure against the user flows and IA.
3. Execute primary research where access is available.
4. Update any wireframe assumptions affected by research.
5. Create `design/design-system.md`.
6. Develop high-fidelity Figma screens.
7. Create `design/usability-testing.md`.
8. Conduct usability testing.
9. Record findings and iterate the design.
10. Translate the validated design into the React MVP.

---

# 47. Conclusion

The wireframes establish a structured interaction model for the proposed National Fuel Pass redesign.

They translate the project's research and architecture into concrete screen-level structures while preserving the distinction between verified service facts, research questions, and proposed design solutions.

The wireframes intentionally prioritize:

* clarity
* recovery
* understandable verification
* allocation visibility
* inclusive access
* support
* transparent service states

They should now serve as the structural foundation for the visual design system and later high-fidelity prototype.

**Wireframe status: PROVISIONAL — NOT YET USER-VALIDATED.**
