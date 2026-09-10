# Design Principles

## 1. Purpose

This document defines the design principles that will guide the UX/UI redesign of the proposed Sri Lanka National Fuel Pass service.

The principles translate the current problem definition, stakeholder analysis, provisional personas, user journeys, and requirements into a set of consistent design directions.

These principles are intended to guide:

* Information architecture
* Interaction design
* Visual design
* Accessibility
* Service recovery
* Forecourt interactions
* Support and escalation
* React MVP implementation
* Usability testing and iteration

The principles are **provisional design guidance**, not claims about confirmed user preferences or validated usability outcomes.

They must be reviewed and refined after primary research and usability testing.

---

# 2. Evidence and Epistemological Boundaries

The redesign follows the project's evidence-first approach.

No design principle should be treated as a confirmed user requirement unless it is supported by appropriate evidence.

The following classifications are used:

| Classification               | Meaning                                                          |
| ---------------------------- | ---------------------------------------------------------------- |
| **E — Evidence**             | Directly documented, observed, or otherwise verified information |
| **I — Inference**            | Logical interpretation derived from available evidence           |
| **RH — Research Hypothesis** | An unverified condition requiring primary research               |
| **DH — Design Hypothesis**   | A proposed design direction that requires validation             |
| **TD — Technical Decision**  | A decision made for the prototype implementation                 |
| **UNKNOWN**                  | Information that has not yet been established                    |

The principles below therefore describe **how the service should be designed**, while the supporting rationale identifies why the principle is currently justified.

---

# 3. Design Principle Overview

The proposed redesign is guided by the following principles:

1. **Make the Current State Obvious**
2. **Guide Users Through One Clear Next Action**
3. **Design for Recovery, Not Just the Happy Path**
4. **Use Plain, Contextual and Actionable Language**
5. **Make Verification Understandable and Trustworthy**
6. **Design for Real-World Forecourt Conditions**
7. **Support Inclusive Access Across Languages and Digital Abilities**
8. **Expose Allocation and Quota Information Clearly**
9. **Reduce Unnecessary Cognitive and Interaction Load**
10. **Keep Users Informed About Service Status and Exceptions**
11. **Protect Users From Preventable Errors**
12. **Build Trust Through Transparency and Official Context**
13. **Separate Confirmed Service Rules From Proposed UX Improvements**
14. **Design the Service as an Ecosystem, Not Only a Citizen Interface**
15. **Validate Before Scaling or Freezing Design Decisions**

---

# 4. Principle 01 — Make the Current State Obvious

## Principle

Users should be able to quickly understand:

* whether they are registered
* which vehicle they are using
* whether their allocation information is current
* what action is required next
* whether an issue requires recovery or support

The interface should avoid forcing users to infer important service state from scattered information.

## Rationale

**E:** The service involves multiple states and dependencies, including registration, vehicle information, ownership/contact changes, QR-based fuel verification, allocation/quota information, and support.

**I:** When several service states are distributed across different interactions, users may have difficulty determining what they should do next.

**DH:** Presenting important service state and the next relevant action together may improve clarity and reduce unnecessary navigation.

## Design Direction

Where appropriate, interfaces should prioritize:

* current status
* vehicle context
* allocation/quota status
* required action
* important exceptions

The exact information hierarchy should be validated through usability testing.

---

# 5. Principle 02 — Guide Users Through One Clear Next Action

## Principle

At important points in the journey, the interface should make the most relevant next action clear.

Users should not have to determine the correct sequence of actions from technical instructions or multiple competing choices.

## Rationale

**I:** The journeys identified in `user-journeys.md` contain multiple transitions, including registration, allocation information, QR presentation, verification, recovery, and support.

**RH:** Users may experience uncertainty about what to do when moving between these stages.

**DH:** A clear primary action and supporting explanation may reduce decision-making effort.

## Design Direction

Use:

* clear primary actions
* meaningful action labels
* contextual instructions
* visible progress where appropriate
* concise explanations before consequential actions

Avoid presenting multiple equally prominent actions when one action is clearly the expected next step.

---

# 6. Principle 03 — Design for Recovery, Not Just the Happy Path

## Principle

Every important journey should provide a clear path for recovering from common problems.

The redesign should treat errors, ownership changes, lost contact information, verification problems, and support needs as part of the service rather than as exceptional afterthoughts.

## Rationale

**E:** Current public guidance addresses changed ownership/contact information and provides a published support channel.

**E:** The service explicitly requires QR-based verification for fuel transactions.

**RH:** Users may encounter additional recovery situations during registration or forecourt verification that are not fully documented by current public information.

**DH:** Designing explicit recovery paths may reduce abandonment and unnecessary support dependency.

## Design Direction

Recovery experiences should explain:

1. What happened
2. Why the user may be seeing the issue, where this is known
3. What the user can do next
4. When they need to contact support
5. What information they may need when requesting assistance

The prototype must not invent undocumented government recovery procedures.

---

# 7. Principle 04 — Use Plain, Contextual and Actionable Language

## Principle

Service information should be understandable to users with different levels of technical and digital familiarity.

Messages should describe what users need to know and do rather than expose unnecessary technical terminology.

## Rationale

**RH:** Digital literacy and familiarity with government digital services may vary across the service's user groups.

**DH:** Plain-language instructions may reduce misunderstanding and support burden.

## Design Direction

Prefer:

* short sentences
* familiar terminology
* descriptive headings
* explicit action labels
* contextual explanations
* meaningful error messages

Avoid:

* unexplained technical terms
* system-oriented language
* vague messages such as "Invalid request"
* unnecessary codes without explanation

Where a technical term is necessary, provide a short explanation.

---

# 8. Principle 05 — Make Verification Understandable and Trustworthy

## Principle

QR-based verification should be presented as a clear service interaction rather than as an unexplained technical mechanism.

Users should understand what they are presenting and what successful or unsuccessful verification means.

## Rationale

**E:** Current policy requires a National Fuel QR code for fuel transactions.

**UNKNOWN:** The precise technical implementation of QR generation, scanning, validation, station hardware, and network communication is not established by the available research.

**RH:** The practical conditions under which users present and attendants scan QR codes require field investigation.

**DH:** Clear verification states and instructions may improve confidence and reduce uncertainty at the point of fuel collection.

## Design Direction

The prototype should explore:

* clear QR presentation
* visible vehicle context
* understandable verification status
* clear success/failure states
* actionable recovery instructions

The prototype should **not** imply that its QR payload or verification architecture represents the actual production NFP system.

---

# 9. Principle 06 — Design for Real-World Forecourt Conditions

## Principle

The fuel-station experience should be designed around the physical and operational context in which verification occurs.

## Rationale

**RH:** QR presentation and verification may occur in environments where users and attendants need to complete interactions quickly while managing physical vehicles and fuel transactions.

**UNKNOWN:** Actual environmental factors, hardware, connectivity, transaction duration, queue conditions, and scanning difficulties require observation.

**DH:** Testing the interaction in realistic conditions may reveal usability issues that cannot be identified from a desktop or office-based prototype.

## Design Direction

The design should be evaluated for:

* quick recognition
* readable information
* clear verification status
* minimal unnecessary interaction
* appropriate screen hierarchy
* practical interaction distance
* device orientation and handling where relevant

Specific environmental problems such as glare, sunlight, network latency, or particular hardware limitations must not be presented as established facts unless research confirms them.

---

# 10. Principle 07 — Support Inclusive Access Across Languages and Digital Abilities

## Principle

The service should support users with different languages, digital confidence, and access conditions.

## Rationale

**E:** The service ecosystem includes Sinhala, Tamil, and English contexts.

**RH:** Users may differ in digital literacy, smartphone access, language preference, accessibility needs, and familiarity with government services.

**DH:** Inclusive information architecture and multilingual interaction may make the service easier to use across these groups.

## Design Direction

The prototype should provide:

* Sinhala
* Tamil
* English

Language selection should be understandable and persistent where appropriate.

The interface should also consider:

* readable typography
* sufficient contrast
* clear labels
* simple navigation
* non-colour-only status indicators
* accessible form controls
* understandable feedback

Specific accessibility features should be selected based on applicable accessibility guidance and validated through testing rather than assumed to solve every user need.

---

# 11. Principle 08 — Expose Allocation and Quota Information Clearly

## Principle

Users should be able to understand their applicable fuel allocation and its current status without unnecessary interpretation.

## Rationale

**E:** Current Ministry information documents vehicle-category-specific fuel allocations and the current Saturday midnight reset schedule.

**I:** Allocation information is therefore an important part of the service state.

**DH:** Presenting allocation information in a clear and contextual form may improve users' understanding of their available fuel.

## Design Direction

Where applicable, the prototype should make it possible to understand:

* applicable allocation
* amount already used
* remaining amount, if supported by the prototype model
* reset timing
* relevant vehicle category

The exact presentation should be validated with users.

Historical allocation/reset rules must not be presented as current rules unless independently verified.

---

# 12. Principle 09 — Reduce Unnecessary Cognitive and Interaction Load

## Principle

The redesign should minimize the amount of information users must remember, interpret, or repeatedly enter.

## Rationale

**I:** The service contains several journeys involving registration, vehicle information, QR verification, allocation information, and recovery.

**RH:** Repeated or unnecessarily complex interactions may increase user effort.

**DH:** Progressive disclosure, contextual information, sensible defaults, and clear grouping may reduce cognitive load.

## Design Direction

Use:

* logical grouping
* progressive disclosure
* contextual help
* meaningful defaults where appropriate
* concise forms
* clear summaries before confirmation
* reuse of already-known prototype information

Do not automatically remove information simply to make screens shorter. Information should remain available when it is necessary for informed decisions.

---

# 13. Principle 10 — Keep Users Informed About Service Status and Exceptions

## Principle

Users should receive clear feedback when an action succeeds, fails, is pending, or requires another action.

## Rationale

**I:** Users cannot reliably determine the state of a digital transaction without system feedback.

**RH:** Verification, registration, connectivity, and support interactions may create uncertainty if feedback is unclear.

**DH:** Explicit status communication can reduce repeated actions and uncertainty.

## Design Direction

Use distinct and understandable states such as:

* Success
* Action required
* Processing/pending
* Unable to complete
* Support required

Status should not rely on colour alone.

Where the actual underlying cause is unknown, the interface should avoid pretending to know the cause.

---

# 14. Principle 11 — Protect Users From Preventable Errors

## Principle

The interface should help users avoid common input and interaction mistakes before those mistakes become service problems.

## Rationale

**E:** Historical NFP documentation contains structured registration information and specific validation requirements.

**RH:** Users may make input errors when entering structured vehicle or identity information.

**DH:** Appropriate input guidance and validation may reduce avoidable errors.

## Design Direction

The prototype may use:

* clear field labels
* examples where useful
* appropriate input constraints
* confirmation before consequential actions
* inline validation
* preservation of entered information where safe

Validation rules should reflect verified service requirements where known.

Prototype-only validation rules must not be represented as official production validation rules.

---

# 15. Principle 12 — Build Trust Through Transparency and Official Context

## Principle

The service should make it clear what information and actions belong to the official service context and what is part of the proposed redesign.

## Rationale

**E:** Current official NFP guidance includes warnings about misuse and fraud.

**I:** Trust is particularly important when a service involves identity information, vehicle information, fuel allocation, and government services.

**DH:** Clear service identity, transparent messaging, and explicit confirmation may strengthen user confidence.

## Design Direction

The prototype should:

* clearly identify itself as a proposed UX redesign/demo where appropriate
* distinguish prototype behaviour from official service behaviour
* avoid fabricated government branding or claims of official integration
* provide references to official information where appropriate
* clearly communicate important service rules
* avoid implying that prototype data is real government data

All prototype data should be synthetic.

---

# 16. Principle 13 — Separate Confirmed Service Rules From Proposed UX Improvements

## Principle

The design should clearly distinguish between:

* established service rules
* documented historical behaviour
* research hypotheses
* proposed UX improvements
* prototype-only technical decisions

## Rationale

**E:** Some current NFP rules and public guidance are documented.

**E:** Some historical NFP behaviour is documented but is no longer necessarily current.

**UNKNOWN:** Several operational and technical details remain unresolved.

**DH:** Treating assumptions as facts could result in a misleading redesign.

## Design Direction

Documentation, interface copy, and implementation should avoid presenting speculative behaviour as official.

For example:

> "The prototype demonstrates a possible recovery flow."

is preferable to:

> "The National Fuel Pass system automatically performs this recovery process."

unless the latter is supported by evidence.

---

# 17. Principle 14 — Design the Service as an Ecosystem, Not Only a Citizen Interface

## Principle

The redesign should consider the interactions between citizens, station personnel, support channels, and relevant government/service stakeholders.

## Rationale

**E:** The service involves multiple stakeholder groups and service relationships.

**I:** A problem experienced by one stakeholder may originate from or affect another part of the service.

**RH:** The exact operational relationship between citizen-facing and station-facing workflows requires primary research.

**DH:** Considering the complete service ecosystem may prevent optimizing one interface while creating problems elsewhere.

## Design Direction

Design evaluation should consider:

* citizen registration
* allocation information
* QR presentation
* station verification
* transaction completion
* exceptions
* support and escalation

The redesign should not assume that every stakeholder requires a fully implemented interface in the MVP.

---

# 18. Principle 15 — Validate Before Scaling or Freezing Design Decisions

## Principle

Important design decisions should be validated before they are treated as final.

## Rationale

**E:** Current desk research establishes several service rules and documented conditions.

**UNKNOWN:** Important real-world user and operational behaviours remain unverified.

**RH:** Actual user behaviour, station workflows, recovery patterns, accessibility barriers, and QR presentation conditions require primary research.

**DH:** Iterative validation can identify whether proposed solutions actually address the underlying problems.

## Design Direction

The design process should follow:

**Evidence → Hypothesis → Prototype → Test → Finding → Revision**

Design decisions that repeatedly fail validation should be revised rather than defended simply because they were implemented earlier.

---

# 19. Cross-Principle Design Rules

The principles above should be applied together rather than independently.

## 19.1 Clarity Before Complexity

When choosing between two designs, prefer the option that communicates the required information with less unnecessary interpretation.

## 19.2 Actionability Over Explanation

Provide the explanation necessary for a user to make the correct decision, followed by a clear action.

## 19.3 Recovery Is a Core Flow

Do not design the successful registration or verification path while leaving failure handling until the end.

## 19.4 Evidence Before Feature Commitment

A feature should not be described as necessary merely because it appears useful.

## 19.5 Accessibility Is Part of the Core Experience

Accessibility should be considered during information architecture, interaction, visual design, and testing rather than added only after the interface is complete.

## 19.6 Context Determines Priority

A citizen completing registration at home and a user presenting a QR code at a fuel station may have different information priorities.

The same interface pattern should not automatically be applied to every stage of the service.

---

# 20. Design Principle → Requirement Traceability

The following matrix connects the principles to the requirements developed in `define/requirements.md`.

| Principle                        | Related Requirements     | Primary Validation                                  |
| -------------------------------- | ------------------------ | --------------------------------------------------- |
| Make the Current State Obvious   | UXR-01, UXR-02           | User interviews, usability testing                  |
| One Clear Next Action            | UXR-01, UXR-03           | Usability testing                                   |
| Design for Recovery              | SR-03, UXR-03, FR-04     | Interviews, contextual inquiry, usability testing   |
| Plain and Actionable Language    | UXR-03, UXR-04, UXR-05   | Interviews, usability testing                       |
| Understandable Verification      | OR-01, OR-02, OR-03      | Station research, usability testing                 |
| Real-World Forecourt Conditions  | OR-01, OR-03, OR-04      | Forecourt observation, contextual inquiry           |
| Inclusive Access                 | AR-01, AR-02, AR-04      | Interviews, accessibility review, usability testing |
| Clear Allocation Information     | UXR-02, FR-03            | User interviews, usability testing                  |
| Reduce Cognitive Load            | UXR-04, UXR-05, UXR-06   | Usability testing                                   |
| Status and Exceptions            | UXR-03, OR-01            | Usability testing                                   |
| Prevent Errors                   | FR-01, DR-01, DR-02      | Prototype testing                                   |
| Build Trust                      | CR-01, CR-02, CR-03      | User interviews, usability testing                  |
| Separate Evidence From Proposals | All requirements         | Documentation review                                |
| Service Ecosystem                | SR-01–SR-04, OR-01–OR-04 | Stakeholder research                                |
| Validate Before Freezing         | All DH/RH requirements   | Iterative research and testing                      |

---

# 21. Design Principles and Personas

The principles should accommodate the different provisional personas identified in `define/personas.md`.

| Persona                                               | Particularly Relevant Principles                             |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| P-01 Everyday Private Vehicle User                    | Clarity, next action, verification, allocation information   |
| P-02 Commercial / Daily-Income User                   | Efficiency, verification, status, recovery                   |
| P-03 Heavy Transport / Agriculture / Operational User | Allocation clarity, recovery, service exceptions             |
| P-04 Limited Digital Access / Digital Literacy User   | Plain language, inclusive access, recovery, error prevention |
| P-05 Temporary / Foreign User                         | Clarity, multilingual access, contextual guidance            |

These relationships are design considerations, not claims that every individual within a persona will have identical needs.

---

# 22. Design Principles and User Journeys

The principles apply across the six provisional journeys.

| Journey                                            | Key Principles                                                       |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| J-01 Registration & Vehicle Onboarding             | Current-state clarity, next action, error prevention, plain language |
| J-02 Allocation & Quota Comprehension              | Allocation clarity, current-state clarity, transparency              |
| J-03 Forecourt QR Presentation & Verification      | Understandable verification, forecourt context, status feedback      |
| J-04 Contact / Ownership Change & Recovery         | Recovery, transparency, error prevention                             |
| J-05 Support & Issue Escalation                    | Recovery, actionable language, transparency                          |
| J-06 Exceptional / Non-Standard Allocation Context | Clarity, transparency, separation of confirmed and unknown processes |

---

# 23. Accessibility Principles

Accessibility is treated as a design requirement rather than a separate visual-design activity.

The prototype should aim to support:

### Perceivable information

* readable text
* sufficient visual distinction
* meaningful headings
* status information that does not rely only on colour

### Operable interaction

* appropriately sized interactive controls
* predictable navigation
* clear focus states where applicable
* sufficient time to complete important interactions

### Understandable interaction

* consistent terminology
* predictable interface behaviour
* clear instructions
* understandable error messages

### Robust implementation

* semantic HTML where applicable
* accessible form labels
* keyboard-accessible interactions where applicable
* appropriate assistive-technology semantics

The final implementation should be evaluated against an appropriate accessibility standard during the UI and testing stages.

---

# 24. Visual Design Direction

The design principles do not prescribe a final visual style.

However, the visual system should support the following goals:

* strong information hierarchy
* clear primary actions
* readable typography
* consistent spacing
* distinguishable status states
* restrained use of visual decoration
* consistent interaction patterns
* clear multilingual presentation

Colour should reinforce meaning rather than carry meaning alone.

The final colour palette, typography, component system, iconography, and branding treatment remain design decisions to be developed during the visual-design phase.

---

# 25. Prototype-Specific Design Decisions

The following are technical/prototype decisions rather than claims about the current production NFP system.

### 25.1 Synthetic Data

The prototype should use synthetic:

* identity information
* vehicle information
* contact information
* allocation information
* transaction information
* QR credentials

Real NIC numbers, phone numbers, chassis numbers, addresses, OTPs, passwords, or other sensitive credentials should not be used.

### 25.2 Simulated Verification

The React MVP may simulate successful and unsuccessful QR verification states.

The simulation must not be presented as the actual production verification architecture.

### 25.3 Simulated Government Integration

The prototype should not claim live integration with:

* DMT
* Ministry systems
* NFP production databases
* fuel-station systems
* government identity systems

unless such integration actually exists and has been independently verified.

### 25.4 Prototype Language Support

The React MVP should demonstrate Sinhala, Tamil, and English interface support as a prototype implementation decision, while recognizing that official production terminology and translations would require appropriate verification.

---

# 26. Research-Dependent Design Questions

The following questions should remain open until primary research and testing provide stronger evidence:

1. How do users actually present their QR credentials at fuel stations?
2. What causes QR verification failures in real-world use?
3. How long does the verification interaction normally take?
4. What recovery actions do users currently take after failed verification?
5. How frequently do ownership/contact mismatches occur?
6. Which recovery situations create the greatest difficulty?
7. What information do users need before contacting support?
8. What information do station personnel need to resolve common exceptions?
9. What accessibility barriers are experienced by users with different abilities?
10. Which languages and terminology create comprehension difficulties?
11. How do users understand their remaining allocation?
12. What information is most important to users before and during fuel collection?
13. Which service improvements would actually reduce user and operator effort?
14. Which proposed features should become Must Have, Should Have, Could Have, or Should Not Have requirements?

These questions should inform subsequent research and design iteration.

---

# 27. Design Validation Strategy

The principles should be validated through multiple stages.

## Stage 1 — Primary Research

Use:

* user interviews
* contextual inquiry
* station observation
* stakeholder interviews
* survey data where appropriate

Purpose:

Determine whether the assumptions behind the design principles reflect real user and operational conditions.

## Stage 2 — Information Architecture and Wireframes

Evaluate:

* information hierarchy
* terminology
* navigation
* task sequence
* recovery paths

## Stage 3 — Interactive Prototype

Evaluate:

* registration
* allocation comprehension
* QR presentation
* verification states
* recovery
* support

## Stage 4 — Usability Testing

Measure and observe:

* task completion
* errors
* hesitation
* misunderstandings
* recovery behaviour
* user confidence
* accessibility barriers

Where relevant, record observed outcomes rather than inventing numerical success rates.

## Stage 5 — Iteration

For each major issue:

1. Record the observed finding.
2. Identify the affected principle.
3. Determine whether the requirement should change.
4. Revise the design.
5. Retest where appropriate.

---

# 28. Design Decision Record

Future design decisions should use the following structure:

| Field           | Description                               |
| --------------- | ----------------------------------------- |
| Decision ID     | Unique identifier                         |
| Problem         | What problem is being addressed?          |
| Evidence        | What evidence supports the decision?      |
| Classification  | E / I / RH / DH / TD                      |
| Design Decision | What is being changed?                    |
| Alternatives    | What alternatives were considered?        |
| Rationale       | Why was this option selected?             |
| Validation      | How will it be tested?                    |
| Result          | What happened during validation?          |
| Status          | Proposed / Validated / Revised / Rejected |

This creates traceability between research and implementation.

---

# 29. Traceability Model

The complete design process should maintain the following chain:

**Research Evidence**

↓

**Empirical Finding**

↓

**Verified Pain Point**

↓

**Service Requirement**

↓

**Design Principle**

↓

**Design Hypothesis**

↓

**Design Decision**

↓

**Prototype Component**

↓

**Usability Finding**

↓

**Iteration**

A design feature should therefore be explainable in terms of the problem it addresses and the evidence or hypothesis that justified it.

---

# 30. What These Principles Do Not Claim

This document does **not** claim that:

* users have already validated these principles
* QR scanning failures have a confirmed technical cause
* specific smartphone hardware causes verification problems
* station connectivity is currently unreliable
* users necessarily use screenshots, printed QR codes, or saved QR images
* users require a particular recovery mechanism
* users prefer a particular dashboard layout
* users experience a particular accessibility barrier
* the current NFP backend uses a particular architecture
* the prototype represents the actual production government system
* a particular feature will definitely improve usability

These matters remain subject to research, validation, or technical verification.

---

# 31. Current Status

**Status: PROVISIONAL — READY FOR PRIMARY RESEARCH VALIDATION**

The design principles provide a structured design direction based on:

* current and historical desk research
* stakeholder analysis
* provisional personas
* provisional user journeys
* the requirements specification

They should **not** be treated as final validated design requirements.

The principles should be revisited after primary research and again after usability testing.

---

# 32. Next Steps

The next phase should be:

1. Execute the primary research plan.
2. Collect real user and stakeholder evidence.
3. Analyze the research without fabricating or assuming findings.
4. Validate or revise the personas.
5. Validate or revise the user journeys.
6. Validate and reprioritize the requirements.
7. Revisit these design principles using the new evidence.
8. Begin information architecture and interaction design.
9. Develop wireframes and prototypes.
10. Conduct usability testing.
11. Record design decisions and iterations.
12. Implement the validated direction in the React MVP.

---

# 33. Conclusion

These design principles establish a consistent UX direction for the proposed National Fuel Pass redesign while preserving the project's evidence-first methodology.

The central design goal is not simply to create a visually improved fuel-pass interface. It is to investigate and improve the broader service experience across registration, allocation information, QR verification, recovery, support, accessibility, and fuel-station interactions.

The principles therefore emphasize:

* clarity
* actionable guidance
* recovery
* understandable verification
* inclusive access
* transparent allocation information
* error prevention
* trust
* service-level thinking
* evidence-based iteration

As primary research becomes available, these principles should be strengthened, revised, or rejected according to the evidence.

**Design principle status: PROVISIONAL — PENDING PRIMARY RESEARCH AND USABILITY VALIDATION**
