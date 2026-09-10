# Usability Testing Plan

## 1. Purpose

This document defines the usability testing plan for the proposed Sri Lanka National Fuel Pass UX redesign.

The purpose of usability testing is to evaluate whether the proposed interface allows representative users to understand and complete important fuel-allocation tasks with:

* clarity
* efficiency
* confidence
* accessibility
* understandable recovery paths
* reduced unnecessary interaction effort

This document defines the **testing protocol**, not completed research results.

No participant findings, success rates, quotes, or usability conclusions are claimed until testing has actually been conducted.

---

# 2. Testing Status

**Current status: PLANNED — NO USER TESTING RESULTS YET**

The testing process will follow:

```text
Test Preparation
      ↓
Participant Recruitment
      ↓
Consent
      ↓
Task-Based Testing
      ↓
Observation
      ↓
Interview / Debrief
      ↓
Analysis
      ↓
Findings
      ↓
Design Changes
      ↓
Retest
```

Any results added later must be based on actual participant observations or responses.

---

# 3. Evidence and Epistemological Boundaries

The testing plan uses the project's evidence taxonomy:

* **E — Evidence:** directly observed or verified.
* **I — Inference:** logical interpretation from evidence.
* **RH — Research Hypothesis:** unverified condition requiring investigation.
* **DH — Design Hypothesis:** proposed design solution requiring validation.
* **TD — Technical Decision:** prototype implementation decision.
* **UNKNOWN:** not established.

Usability testing is intended to generate new empirical evidence.

Testing must not be used to manufacture evidence for decisions that were not actually tested.

---

# 4. Testing Objectives

The primary objectives are to determine whether users can:

1. Understand the purpose of the redesigned service.
2. Identify their current registration state.
3. Find their QR pass quickly.
4. Understand their fuel allocation.
5. Understand remaining allocation and reset information.
6. Find vehicle and registration information.
7. Understand what to do after ownership or contact changes.
8. Recover from QR verification problems.
9. Find appropriate support.
10. Navigate the service in their preferred language.
11. Complete common tasks without unnecessary confusion.
12. Understand important confirmation, warning, and error messages.

---

# 5. Research Questions

## RQ-UT-01 — Service Understanding

Can users understand what the proposed service allows them to do?

## RQ-UT-02 — Navigation

Can users find important functions without unnecessary exploration?

## RQ-UT-03 — QR Access

Can users locate and present their QR pass when required?

## RQ-UT-04 — Allocation

Can users correctly understand their allocation, used amount, remaining amount, and reset information?

## RQ-UT-05 — Registration

Can users understand and complete the proposed registration flow?

## RQ-UT-06 — Recovery

Can users identify what to do when registration or QR verification does not succeed?

## RQ-UT-07 — Ownership / Contact Changes

Can users identify the appropriate path when vehicle ownership or contact information changes?

## RQ-UT-08 — Support

Can users find appropriate assistance when self-service recovery is insufficient?

## RQ-UT-09 — Language

Can users understand and navigate the interface in their selected language?

## RQ-UT-10 — Accessibility

Do users with different levels of digital familiarity experience barriers when completing the proposed tasks?

---

# 6. Testing Scope

Testing should focus on the highest-priority citizen journeys:

1. Registration and vehicle onboarding
2. Allocation and quota comprehension
3. QR presentation and verification
4. Ownership/contact change and recovery
5. Support and issue escalation

The exceptional/non-standard allocation journey may be tested if relevant participants and prototype states are available.

Station-personnel testing should be conducted separately if a station-facing prototype is developed.

---

# 7. Prototype Under Test

The prototype may include:

* language selection
* entry/authentication simulation
* registration
* vehicle information
* registration status
* allocation
* QR presentation
* simulated QR verification states
* ownership/contact-change guidance
* support guidance
* settings/accessibility options

The prototype should use synthetic information.

It must not connect to:

* live National Fuel Pass services
* DMT production systems
* government databases
* real government authentication
* real fuel transactions
* real support ticketing systems

---

# 8. Participant Groups

Testing should aim to include participants representing different service contexts.

### P-01 — Everyday Private Vehicle User

A person who uses a private vehicle for normal daily transportation.

### P-02 — Commercial / Daily-Income Vehicle User

A person who depends on a vehicle for income-generating activity.

### P-03 — Heavy Transport / Agriculture / Operational User

A person whose fuel requirements or vehicle use may differ from ordinary private use.

### P-04 — Limited Digital Access / Digital Literacy User

A participant who may have lower confidence with digital services or limited access to digital devices/data.

### P-05 — Temporary / Foreign User

Where appropriate, a participant whose registration or service context differs from a long-term local vehicle owner.

These categories are based on the project's provisional personas and should not be treated as claims about actual user populations.

---

# 9. Participant Sampling

For an academic prototype, a practical initial usability study may target approximately:

**8–15 participants**

A smaller exploratory test can still identify major interaction problems, while additional participants can help identify recurring patterns across different user contexts.

The final sample should depend on:

* participant availability
* research access
* project timeline
* diversity of relevant user contexts

Participant counts must be reported accurately in the final documentation.

---

# 10. Recruitment Criteria

Participants should ideally:

* be familiar with using a mobile phone
* have experience using or understanding vehicle/fuel-related services where possible
* represent at least some of the identified persona groups
* be willing to interact with an academic prototype
* provide informed consent

Recruitment should avoid selecting only people who are already highly familiar with UX prototypes or software development.

---

# 11. Exclusion Criteria

Participants should not be required to provide:

* NIC numbers
* passport numbers
* vehicle registration documents
* chassis numbers
* OTPs
* passwords
* bank/payment credentials
* personal addresses
* real government account credentials

Testing can be completed using synthetic scenarios.

---

# 12. Test Environment

Testing may be conducted:

* in person
* remotely
* using a mobile device
* using a desktop browser where appropriate

For QR-related testing, the researcher should record the testing context because interaction can differ depending on the device and environment.

The study must not claim to reproduce actual fuel-station conditions unless testing is genuinely conducted in such an environment.

---

# 13. Testing Materials

Prepare:

* prototype
* participant information sheet
* consent form
* task sheet
* facilitator guide
* observation sheet
* note-taking template
* post-test questionnaire
* interview/debrief questions
* issue-severity classification
* findings matrix

---

# 14. Participant Consent

Before testing, explain:

* the academic purpose of the study
* that the prototype is not the live National Fuel Pass
* that participation is voluntary
* that participants can stop at any time
* what information will be recorded
* how notes/recordings will be handled
* that no real credentials are required

If recording audio/video or screen activity, obtain appropriate consent before recording.

---

# 15. Privacy and Data Protection

Do not collect unnecessary sensitive information.

Use participant identifiers such as:

```text
P01
P02
P03
```

instead of participant names in the analysis.

Avoid recording:

* real identity numbers
* real phone numbers
* real OTPs
* passwords
* payment information
* unnecessary personal information

Synthetic prototype data should be used throughout testing.

---

# 16. Facilitator Instructions

The facilitator should:

* explain the task without explaining how to complete it
* avoid leading the participant
* allow the participant to explore independently
* observe behavior
* ask neutral clarification questions
* avoid correcting the participant immediately
* avoid defending the design
* record unexpected behavior
* distinguish observation from interpretation

The facilitator should not say:

> Click the QR button.

Instead say:

> Imagine you are at a fuel station and need to present your Fuel Pass. Show me what you would do.

---

# 17. Think-Aloud Method

Participants may be asked to think aloud while completing selected tasks.

Example instruction:

> As you use the prototype, please say what you are looking for, what you expect to happen, and anything that feels unclear.

Think-aloud should not be forced if it significantly interferes with task completion.

---

# 18. Task Scenario 1 — Find the QR

### Scenario

> You are going to a fuel station and need to present your Fuel Pass. Show me how you would find the QR pass.

### Observe

* where the participant starts
* whether they understand the navigation
* time to locate QR
* hesitation
* incorrect navigation
* whether the QR context is understood

### Success Condition

The participant reaches the intended QR screen without facilitator assistance.

---

# 19. Task Scenario 2 — Check Allocation

### Scenario

> Before going to the station, you want to understand how much fuel allocation you have remaining. Show me where you would check this.

### Observe

* whether Allocation is discoverable
* whether the participant understands used vs remaining
* whether reset information is understood
* whether terminology causes confusion

### Success Condition

The participant identifies the relevant allocation information and explains what it means.

---

# 20. Task Scenario 3 — Register a Vehicle

### Scenario

> Imagine you have a vehicle that needs to be registered for the service. Show me how you would begin and complete the registration process.

### Observe

* understanding of the registration entry point
* form comprehension
* field-label clarity
* validation
* review step
* confirmation

### Success Condition

The participant completes the simulated registration flow without critical facilitator assistance.

---

# 21. Task Scenario 4 — Correct Registration Information

### Scenario

> You notice that one of the details you entered is incorrect before completing registration. Show me what you would do.

### Observe

* whether Edit is discoverable
* whether the user understands how to return to the relevant field
* whether changes are preserved
* whether the review stage is understandable

### Success Condition

The participant successfully identifies and corrects the information.

---

# 22. Task Scenario 5 — QR Verification Problem

### Scenario

> Imagine you have presented your QR at a fuel station, but it could not be verified. Show me what you would do next.

### Observe

* whether the error state is understandable
* whether recovery actions are visible
* whether the participant knows when to retry
* whether support is discoverable
* whether the interface creates unnecessary uncertainty

### Success Condition

The participant identifies an appropriate recovery path.

---

# 23. Task Scenario 6 — Changed Contact Number

### Scenario

> Imagine that the contact number associated with your Fuel Pass has changed. Show me where you would go to understand what to do.

### Observe

* whether the Vehicle/Registration area is understandable
* whether the change/re-registration path is discoverable
* whether guidance is clear
* whether the participant knows when to seek support

### Success Condition

The participant reaches the appropriate guidance without facilitator direction.

---

# 24. Task Scenario 7 — Ownership Change

### Scenario

> Imagine that ownership of the vehicle has changed. Show me what you would do to continue using the service.

### Observe

* whether ownership-change guidance is discoverable
* whether the participant understands re-registration guidance
* whether the interface creates false expectations
* whether recovery/support is clear

### Success Condition

The participant identifies the proposed next step.

---

# 25. Task Scenario 8 — Find Support

### Scenario

> You are unable to resolve a Fuel Pass problem yourself. Show me how you would find official support.

### Observe

* discoverability of Help & Support
* topic grouping
* clarity of official support information
* trust indicators
* whether the participant understands when to escalate

### Success Condition

The participant reaches the appropriate support information.

---

# 26. Task Scenario 9 — Change Language

### Scenario

> Imagine you prefer to use the service in another supported language. Show me how you would change the language.

### Observe

* language-selection discoverability
* terminology
* layout changes
* text wrapping
* navigation consistency

### Success Condition

The participant changes the interface language successfully.

---

# 27. Task Scenario 10 — Accessibility

Where appropriate, participants may be asked to use accessibility-related controls.

Example:

> Imagine that the text on the screen is difficult for you to read. Show me what you would look for to make the interface easier to use.

This should only be tested with appropriate participants and should not imply that a particular accessibility setting is required.

---

# 28. Observation Template

For each task:

| Field                | Observation |
| -------------------- | ----------- |
| Participant ID       |             |
| Task ID              |             |
| Start time           |             |
| End time             |             |
| Completion           |             |
| Assistance required  |             |
| Errors               |             |
| Hesitation           |             |
| Misunderstandings    |             |
| Unexpected behavior  |             |
| Participant comments |             |
| Facilitator notes    |             |
| Potential issue      |             |
| Severity             |             |

No fields should be completed with invented information.

---

# 29. Task Completion

Use a simple classification:

### Completed independently

Participant completed the task without facilitator assistance.

### Completed with minor assistance

Participant needed limited clarification.

### Completed with major assistance

Participant required significant facilitator guidance.

### Not completed

Participant could not complete the task.

This provides a qualitative measure without pretending that the study has statistical validity beyond its actual sample.

---

# 30. Time on Task

Where useful, record approximate task duration.

Example:

```text
Task started: 14:32:10
Task completed: 14:33:02
Duration: 52 seconds
```

Timing should be used consistently across participants.

Do not define arbitrary “good” or “bad” thresholds unless the project establishes them in advance.

---

# 31. Errors

Record observable interaction errors such as:

* selecting the wrong navigation item
* misunderstanding a label
* missing an important action
* entering information in the wrong field
* failing to identify a recovery path

Do not automatically assume why an error occurred.

For example:

**Observation:**

> Participant selected Vehicle instead of Allocation.

**Possible interpretation:**

> Participant may have expected allocation information to be associated with the vehicle.

The second statement remains an inference until supported by further evidence.

---

# 32. Qualitative Interview Questions

After task completion, ask questions such as:

1. What did you think of the overall experience?
2. What was easiest?
3. What was most confusing?
4. Was anything difficult to find?
5. Did any wording feel unclear?
6. Did you understand the QR status?
7. Did you understand the allocation information?
8. Did you know what to do when something went wrong?
9. Did you feel confident using the service?
10. What would you change?

Follow-up questions should remain neutral.

---

# 33. Avoid Leading Questions

Avoid:

> Was the allocation card useful?

Prefer:

> What did you think about the allocation information?

Avoid:

> Was the QR screen easy to understand?

Prefer:

> What did you expect to happen when you reached this screen?

This reduces the risk of steering participant responses.

---

# 34. Post-Test Questionnaire

A short questionnaire may ask participants to rate statements using a consistent scale.

Example:

| Statement                                    | Rating |
| -------------------------------------------- | ------ |
| I understood what I could do in the service. | 1–5    |
| I could find the QR pass easily.             | 1–5    |
| I understood my allocation.                  | 1–5    |
| I knew what to do when something went wrong. | 1–5    |
| I could find support when needed.            | 1–5    |
| I felt confident using the prototype.        | 1–5    |

These ratings should be reported only after actual participants complete the questionnaire.

---

# 35. Accessibility Testing

Accessibility evaluation should consider:

* text readability
* contrast
* touch target size
* keyboard access where relevant
* focus visibility
* language selection
* comprehension of labels
* error-message clarity
* screen-reader compatibility where testing resources permit

Accessibility testing should combine:

* participant observation
* expert review
* implementation checks

A participant's difficulty should not automatically be interpreted as a disability-related finding without appropriate evidence.

---

# 36. Multilingual Testing

Where possible, usability testing should include Sinhala and Tamil users rather than testing only English.

Evaluate:

* navigation labels
* button text
* error messages
* form labels
* allocation terminology
* support content
* text wrapping
* layout consistency

Translation quality should be checked independently rather than inferred from participant difficulty alone.

---

# 37. QR Testing

QR-related testing should distinguish between:

1. Finding the QR.
2. Understanding the QR screen.
3. Presenting the QR.
4. Understanding a verification state.
5. Recovering from verification failure.

The study should not claim to measure actual production scanning reliability.

If scanning is simulated, record it explicitly as a prototype interaction.

If real-world scanning is observed, document:

* device used
* environment
* observed outcome
* approximate duration
* any visible obstacles

Do not infer the technical cause of failure without evidence.

---

# 38. Severity Classification

Usability issues can be classified as:

### Severity 0 — No Issue

No meaningful usability problem observed.

### Severity 1 — Minor

Small issue with little impact on task completion.

### Severity 2 — Moderate

Issue causes confusion, delay, or unnecessary interaction.

### Severity 3 — Major

Issue significantly interferes with task completion.

### Severity 4 — Critical

Issue prevents completion of an important task or creates a serious misunderstanding.

Severity should be assigned using observed impact, not personal preference.

---

# 39. Finding Template

Each validated finding should use a consistent structure.

```text id="1y9rbc"
Finding ID:
F-01

Task:
UT-03

Observation:
[Describe what was actually observed.]

Evidence:
[Participant observations / responses.]

Interpretation:
[Clearly marked inference.]

Severity:
[0–4]

Design implication:
[Proposed change.]

Status:
Validated / Requires further testing
```

---

# 40. Research Evidence Classification

When analyzing results:

### Direct Observation

Example:

> 4 of 10 participants selected Vehicle when asked to find allocation information.

This is empirical evidence if accurately recorded.

### Participant Statement

Example:

> Participant P04 said that the allocation wording was unclear.

This is a participant-reported finding.

### Inference

Example:

> The navigation labels may not match users' mental models.

This is an inference and should be labeled accordingly.

### Design Hypothesis

Example:

> Grouping allocation under Home may improve discoverability.

This requires further validation.

---

# 41. Analysis Method

After testing:

### Step 1 — Consolidate observations

Bring all task observations together.

### Step 2 — Identify recurring issues

Look for patterns across participants.

### Step 3 — Identify contradictions

Compare:

* participant statements
* observed behavior
* task completion

Do not automatically resolve contradictions.

### Step 4 — Assign severity

Classify usability problems using the agreed severity scale.

### Step 5 — Identify design implications

Translate validated problems into possible design changes.

### Step 6 — Prioritize

Prioritize changes based on:

* severity
* frequency
* task importance
* affected participant groups
* implementation feasibility

---

# 42. Finding Matrix

The final analysis may use:

| Finding | Task  | Participants | Evidence | Severity | Proposed Change | Retest |
| ------- | ----- | ------------ | -------- | -------- | --------------- | ------ |
| F-01    | UT-01 |              |          |          |                 |        |
| F-02    | UT-02 |              |          |          |                 |        |
| F-03    | UT-03 |              |          |          |                 |        |

This table must remain empty until actual testing occurs.

---

# 43. Design Iteration Matrix

After analysis:

| Finding | Design Change | Reason | Status |
| ------- | ------------- | ------ | ------ |
| F-01    |               |        |        |
| F-02    |               |        |        |
| F-03    |               |        |        |

The goal is to establish traceability:

```text
Observed Problem
      ↓
Finding
      ↓
Design Change
      ↓
Updated Prototype
      ↓
Retest
```

---

# 44. Requirements Validation

Usability testing should also identify whether the current requirements remain appropriate.

For example:

```text
Requirement
     ↓
Prototype implementation
     ↓
Usability test
     ↓
Observed result
     ↓
Requirement confirmed / revised
```

Requirements should be updated if testing reveals that the original requirement does not adequately represent the user task.

---

# 45. Wireframe Validation

Before or during high-fidelity testing, verify:

* information hierarchy
* navigation
* content grouping
* primary actions
* error recovery
* QR interaction
* allocation presentation
* support access

If users consistently struggle with the structure, return to:

`design/wireframes.md`

rather than only changing visual styling.

---

# 46. Design-System Validation

Testing should also identify whether components create usability problems.

Check:

* button hierarchy
* input labels
* status indicators
* alerts
* cards
* navigation
* QR component
* typography
* multilingual layout

If a component causes recurring problems, update the design system rather than fixing each screen separately.

---

# 47. Ethical Research Requirements

The project must not:

* fabricate participant responses
* fabricate participant demographics
* fabricate usability scores
* fabricate task completion rates
* fabricate quotations
* claim testing occurred when it did not
* present AI-generated observations as human observations
* use real sensitive credentials in the prototype
* imply that synthetic users are real participants

AI may assist with:

* organizing notes
* formatting findings
* identifying potential themes for human review
* proofreading research documentation
* maintaining traceability

Human review remains necessary for final research interpretation.

---

# 48. AI Governance

AI assistance should be documented transparently.

Allowed uses include:

* creating the testing structure
* generating task templates
* proofreading researcher-written notes
* organizing researcher-provided findings
* identifying possible usability themes for manual verification
* helping map findings to requirements

AI must not:

* generate fictional participants
* invent observations
* create fake quotations
* invent usability results
* independently claim that a design works based on synthetic testing
* replace human judgment in interpreting research evidence

---

# 49. Testing Documentation

For each testing session, maintain:

```text id="av3u8c"
testing/
├── participant-information.md
├── consent.md
├── facilitator-guide.md
├── observation-notes/
├── findings.md
├── design-changes.md
└── retest-results.md
```

The exact structure may be adjusted according to the project's final documentation requirements.

---

# 50. Research Traceability

Usability findings should connect back to the earlier project artifacts.

Recommended chain:

```text
User Research
      ↓
Problem Definition
      ↓
Persona
      ↓
User Journey
      ↓
Requirement
      ↓
Design Principle
      ↓
Wireframe
      ↓
Design System
      ↓
Prototype
      ↓
Usability Finding
      ↓
Design Change
      ↓
Retest
```

This creates an auditable UX Engineering process.

---

# 51. Example Traceability Record

```text id="7p8m9a"
Finding:
F-01

Observed during:
UT-02 — Allocation

Related participant group:
P-02

Requirement:
Allocation clarity requirement

Design principle:
Expose allocation information clearly

Original design:
Allocation information accessed through Allocation page

Observed issue:
[To be completed after testing]

Design change:
[To be completed after testing]

Retest:
[To be completed after iteration]
```

No finding should be populated before the relevant testing occurs.

---

# 52. Test Success Criteria

The prototype should be considered ready for iteration when the study has produced enough evidence to identify:

* major navigation problems
* major task-completion barriers
* confusing terminology
* recovery failures
* important accessibility issues
* QR interaction problems
* allocation comprehension problems
* support discoverability problems

The objective is **not** to prove that the design is perfect.

The objective is to discover important usability problems and improve the design systematically.

---

# 53. Testing Limitations

The study may have limitations such as:

* small sample size
* convenience sampling
* limited access to real fuel-station environments
* prototype rather than production system
* simulated QR verification
* limited testing time
* limited representation of all vehicle categories
* limited accessibility testing resources

These limitations should be reported honestly.

---

# 54. What Testing Cannot Establish

Prototype usability testing cannot establish:

* production system reliability
* actual national service adoption
* production QR scanning accuracy
* government backend performance
* DMT integration reliability
* real station network performance
* national fuel availability
* policy effectiveness
* fraud reduction at national scale

Those require appropriate operational, technical, or policy evidence.

---

# 55. Final Reporting Structure

The eventual Medium article or project documentation can summarize usability testing as:

1. Testing objective
2. Participant profile
3. Testing method
4. Tasks
5. Key observations
6. Major usability findings
7. Severity
8. Design changes
9. Retesting
10. Limitations

Only actual completed testing should be reported as completed research.

---

# 56. Current Status

**Status: PLANNED — READY FOR USABILITY TEST PREPARATION**

Completed design inputs:

* Problem Definition
* Personas
* User Journeys
* Requirements
* Design Principles
* Information Architecture
* User Flows
* Low-Fidelity Wireframes
* Design System

Current output:

* Usability Testing Plan

Pending:

* High-fidelity Figma prototype
* Participant recruitment
* Usability testing
* Findings
* Design iteration
* Retesting
* React MVP implementation

---

# 57. Next Steps

The recommended sequence is:

1. Build the design system in Figma.
2. Create high-fidelity screens from the wireframes.
3. Connect the screens into an interactive prototype.
4. Review the prototype against requirements and design principles.
5. Prepare participant materials.
6. Recruit participants.
7. Conduct usability testing.
8. Record observations.
9. Analyze findings.
10. Prioritize usability problems.
11. Iterate the design.
12. Retest important changes.
13. Document the final findings.
14. Implement the validated design in React.

---

# 58. Conclusion

This usability testing plan provides a structured method for evaluating the proposed National Fuel Pass redesign without fabricating research evidence.

The protocol focuses on the project's highest-priority journeys:

* registration
* allocation
* QR verification
* ownership/contact recovery
* support

It also incorporates multilingual access, accessibility, error recovery, and real-world interaction considerations.

The testing process should produce a traceable connection between observed user behavior and subsequent design changes.

**Usability-testing status: PLANNED — NO RESULTS CLAIMED.**
