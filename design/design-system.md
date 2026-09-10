# Design System

## 1. Purpose

This document defines the proposed design system for the National Fuel Pass UX redesign prototype.

The design system establishes reusable visual, interaction, accessibility, and content rules so that the Figma prototype and subsequent React MVP maintain consistency across screens.

The system is intended for an **academic UX Engineering prototype**.

It does not claim to reproduce the official visual identity, branding, colors, typography, component library, or production design system of the Sri Lankan National Fuel Pass service.

---

# 2. Design System Objectives

The design system should support the project's core UX objectives:

* make the current service state obvious
* guide users toward one clear next action
* reduce unnecessary cognitive load
* make errors understandable and recoverable
* make QR verification clear
* make allocation information understandable
* support Sinhala, Tamil, and English
* support users with different levels of digital familiarity
* maintain consistency across common tasks
* support mobile-first interaction
* provide a trustworthy and transparent interface

These objectives are derived from the project's approved design principles and remain subject to usability validation.

---

# 3. Evidence and Epistemological Boundaries

The design system distinguishes between:

* **E — Evidence:** verified service information.
* **I — Inference:** interpretation based on evidence.
* **RH — Research Hypothesis:** something that requires validation.
* **DH — Design Hypothesis:** proposed UX solution.
* **TD — Technical Decision:** implementation decision for the prototype.
* **UNKNOWN:** not established.

Visual decisions such as colors, spacing, typography, component styles, and navigation appearance are generally **design decisions for the prototype**, not evidence about the current NFP interface.

---

# 4. Design System Scope

The system covers:

1. Design tokens
2. Color
3. Typography
4. Spacing
5. Layout
6. Borders and radius
7. Elevation
8. Icons
9. Buttons
10. Form fields
11. Cards
12. Status indicators
13. Alerts
14. Navigation
15. QR presentation
16. Progress indicators
17. Empty states
18. Loading states
19. Error states
20. Success states
21. Confirmation patterns
22. Multilingual support
23. Accessibility
24. Responsive behavior
25. Content and microcopy
26. Prototype component states
27. Figma organization
28. React implementation guidance

---

# 5. Visual Design Direction

The proposed visual direction is:

> **Clear, calm, functional, trustworthy, and accessible.**

The interface should avoid unnecessary decoration.

Visual emphasis should be placed on:

* important service status
* primary actions
* QR presentation
* allocation information
* recovery actions
* support information

The interface should prioritize task completion over visual complexity.

**Classification:** DH

---

# 6. Color System

## 6.1 Purpose

Color should communicate:

* hierarchy
* interaction
* status
* warnings
* errors
* success
* information

The prototype should use a restrained palette.

The exact colors are **prototype design decisions**, not official National Fuel Pass colors.

---

## 6.2 Proposed Color Tokens

| Token             | Purpose                     |
| ----------------- | --------------------------- |
| `primary`         | Main interactive actions    |
| `primary-hover`   | Hover state                 |
| `primary-pressed` | Pressed state               |
| `surface`         | Main page background        |
| `surface-raised`  | Cards and elevated surfaces |
| `text-primary`    | Main content                |
| `text-secondary`  | Supporting information      |
| `text-muted`      | Low-priority information    |
| `border`          | Dividers and input borders  |
| `success`         | Successful states           |
| `warning`         | Attention-required states   |
| `error`           | Errors and failures         |
| `info`            | Informational messages      |

The actual hex values should be finalized during visual exploration and checked for accessibility contrast.

**Classification:** DH / TD

---

# 7. Color Usage Rules

Color should not be the only method used to communicate meaning.

For example:

```text id="z2w9o5"
✓ Successful
! Attention required
× Error
ⓘ Information
```

Status should combine:

* color
* icon
* text

This is especially important for users with color-vision differences.

**Classification:** DH

---

# 8. Typography

The typography system should prioritize:

* readability
* hierarchy
* multilingual compatibility
* predictable wrapping
* sufficient line spacing

The selected typeface must support:

* English
* Sinhala
* Tamil

The final font choice should be confirmed during implementation because character support and rendering quality can differ between languages.

---

# 9. Typography Scale

A proposed mobile-first scale is:

| Token        | Purpose                       |
| ------------ | ----------------------------- |
| `display`    | Major page/service heading    |
| `h1`         | Main page heading             |
| `h2`         | Section heading               |
| `h3`         | Subsection heading            |
| `body-large` | Important explanatory content |
| `body`       | Standard content              |
| `body-small` | Secondary information         |
| `label`      | Form/control labels           |
| `caption`    | Supporting metadata           |

Example hierarchy:

```text
Display
Your Fuel Pass

H1
Allocation

H2
Current allocation

Body
You have XX remaining.

Label
Vehicle number

Caption
Last updated information
```

Exact font sizes should be finalized during the Figma design phase.

**Classification:** DH / TD

---

# 10. Typography Rules

Use:

* short headings
* sentence case
* clear labels
* readable line height
* sufficient contrast
* consistent hierarchy

Avoid:

* excessive capitalization
* long paragraphs inside cards
* decorative typography
* unexplained abbreviations
* overly technical terminology

---

# 11. Spacing System

A consistent spacing scale should be used across the prototype.

Recommended base unit:

```text id="dbb8e4"
4px
```

Example spacing tokens:

| Token      | Value |
| ---------- | ----: |
| `space-1`  |   4px |
| `space-2`  |   8px |
| `space-3`  |  12px |
| `space-4`  |  16px |
| `space-5`  |  20px |
| `space-6`  |  24px |
| `space-8`  |  32px |
| `space-10` |  40px |
| `space-12` |  48px |
| `space-16` |  64px |

The exact scale may be adjusted during implementation.

**Classification:** TD / DH

---

# 12. Layout

The mobile layout should generally use:

* consistent horizontal padding
* clear content grouping
* predictable vertical spacing
* one primary content column
* clear separation between sections

Proposed mobile content width:

```text
┌─────────────────────────────┐
│  ← consistent page padding  │
│                             │
│  Content                    │
│                             │
│  Content                    │
│                             │
│  Primary Action             │
│                             │
└─────────────────────────────┘
```

The exact grid should be established in Figma.

---

# 13. Border Radius

Rounded corners should be used consistently.

Proposed tokens:

| Token         | Usage                   |
| ------------- | ----------------------- |
| `radius-sm`   | Inputs, small controls  |
| `radius-md`   | Cards and buttons       |
| `radius-lg`   | Major containers        |
| `radius-full` | Pills/status indicators |

Avoid excessive variation in corner styles.

**Classification:** TD

---

# 14. Borders

Borders should communicate structure without overwhelming the interface.

Use borders for:

* form fields
* cards where necessary
* grouped information
* separators

Avoid using heavy borders around every piece of information.

---

# 15. Elevation

Elevation should be used sparingly.

The interface should not depend heavily on shadows to establish hierarchy.

Recommended hierarchy:

```text
Page
 ↓
Section
 ↓
Card
 ↓
Interactive element
```

Elevation should support hierarchy rather than decoration.

**Classification:** DH

---

# 16. Iconography

Icons should be:

* simple
* recognizable
* consistent
* paired with text when meaning could be ambiguous

Suggested semantic icons include:

| Meaning     | Example           |
| ----------- | ----------------- |
| Home        | Home              |
| QR          | QR / Scan         |
| Vehicle     | Vehicle           |
| Allocation  | Fuel / Allocation |
| Help        | Help Circle       |
| Settings    | Settings          |
| Success     | Check Circle      |
| Warning     | Alert Triangle    |
| Error       | X Circle          |
| Information | Info              |
| Back        | Arrow Left        |

Icons should never be the only source of meaning for important actions.

**Classification:** DH / TD

---

# 17. Button System

Buttons should have a clear hierarchy.

## Primary Button

Used for the main action.

Examples:

* Continue
* Confirm & Register
* Open QR
* Try Again

## Secondary Button

Used for supporting actions.

Examples:

* Review Information
* View Allocation
* Get Help

## Tertiary Action

Used for lower-priority actions such as:

* Back
* Edit
* Learn More

---

# 18. Button Rules

Each major screen should generally have one visually dominant primary action.

Buttons should:

* use action-oriented labels
* have sufficient touch area
* provide clear disabled/loading states
* maintain readable labels in all supported languages

Avoid vague labels such as:

* Submit
* Proceed
* Click Here

where a more descriptive action is possible.

**Classification:** DH

---

# 19. Button States

Every interactive button should support:

```text
Default
Hover
Focus
Pressed
Disabled
Loading
```

Example:

```text id="xj4j0v"
[ Confirm & Register ]

        ↓ loading

[ Registering... ]
```

The final visual treatment will be implemented in Figma and React.

**Classification:** TD

---

# 20. Form Fields

Forms should clearly communicate:

* what information is required
* what format is expected
* whether the current value is valid
* what needs to be corrected

Example:

```text id="u3v7ca"
Vehicle number

┌─────────────────────────────┐
│ ABC-1234                    │
└─────────────────────────────┘

Format guidance where necessary
```

Do not rely only on placeholder text to explain fields.

---

# 21. Form Field States

Required states:

```text
Default
Focused
Filled
Error
Disabled
Read-only
Success where appropriate
```

Example error:

```text id="t9tr1n"
Vehicle number

┌─────────────────────────────┐
│ ABC                         │
└─────────────────────────────┘

Please check the vehicle number.
```

The specific validation rules should correspond to the prototype's defined requirements.

---

# 22. Input Error Design

Errors should explain:

1. What happened.
2. What needs attention.
3. What the user can do next.

Avoid technical error messages such as:

> Database validation failed.

Prefer user-oriented language such as:

> We could not verify this information. Check the details and try again.

Specific wording should be validated during usability testing.

**Classification:** DH

---

# 23. Cards

Cards should group related information.

Appropriate uses include:

* registration status
* allocation summary
* next action
* vehicle information
* support topics

Example:

```text id="t4th9y"
┌─────────────────────────────┐
│ Allocation                  │
│                             │
│ Remaining                   │
│ XX                          │
│                             │
│ Reset: Saturday midnight    │
│                             │
│ [ View Allocation ]         │
└─────────────────────────────┘
```

Cards should not be used simply because they look visually attractive.

Each card should represent a meaningful information group.

---

# 24. Status Indicators

Status should be explicit.

Examples:

```text id="s22n0a"
● Active

✓ Completed

! Needs attention

× Verification failed

? Status unavailable
```

Status should always include text.

Color alone should not communicate the state.

---

# 25. Alert Components

## Information

Used for helpful contextual information.

```text
ⓘ Information
```

## Warning

Used when the user should pay attention.

```text
! Attention required
```

## Error

Used when an action cannot continue.

```text
× Something needs attention
```

## Success

Used when an action has completed.

```text
✓ Registration complete
```

Each alert should remain concise.

---

# 26. QR Presentation Component

The QR component is one of the most important prototype components.

Proposed structure:

```text id="j3u1gi"
┌─────────────────────────────┐
│                             │
│       Your QR Pass          │
│                             │
│      ┌───────────────┐      │
│      │               │      │
│      │      QR       │      │
│      │               │      │
│      └───────────────┘      │
│                             │
│ Vehicle: ABC-1234           │
│ Status: Ready               │
│                             │
│ [ QR Help ]                 │
└─────────────────────────────┘
```

The QR displayed by the prototype must use synthetic data.

The prototype must not imply that it contains a valid government-issued credential.

**Classification:** E → DH → TD

---

# 27. QR States

The component should support:

1. Loading
2. Ready
3. Verification in progress
4. Verification successful
5. Verification unsuccessful
6. Credential unavailable
7. Help/recovery

The exact failure states should be refined following research.

---

# 28. Allocation Component

The allocation component should make the user's current allocation understandable.

Proposed structure:

```text id="jcf3qy"
Current allocation

XX / XX

Used       Remaining
XX         XX

Next reset
Saturday midnight
```

The current reset schedule is based on published GIC information.

The visual representation is a design hypothesis.

**Classification:** E → DH

---

# 29. Navigation Component

The proposed primary navigation is:

```text
Home
QR
Vehicle
Allocation
Help
```

Settings remains secondary.

The navigation should:

* identify the current location
* use text labels
* provide consistent ordering
* remain usable in supported languages
* avoid excessive navigation depth

This navigation is provisional and must be usability tested.

**Classification:** DH

---

# 30. Header

The header should generally contain:

```text
Back / Menu
Page title
Contextual action where necessary
```

Example:

```text
┌─────────────────────────────┐
│ ←     Allocation            │
└─────────────────────────────┘
```

Avoid placing too many actions in the header.

---

# 31. Empty States

An empty state should explain:

* what is missing
* why it matters, if known
* what the user can do next

Example:

```text id="j7zv9g"
No activity yet

Your activity will appear here
when relevant information is available.

[ Go to Home ]
```

The actual availability of activity/history data remains a research-dependent assumption.

**Classification:** RH → DH

---

# 32. Loading States

Loading states should prevent uncertainty.

Example:

```text
Checking your information...

Please wait.
```

Avoid unnecessarily long animations.

If an operation may take longer than expected, provide appropriate status feedback.

The prototype should simulate loading states where useful.

**Classification:** DH / TD

---

# 33. Success States

Success messages should clearly state:

* completed action
* affected item
* next available action

Example:

```text id="e8d8bq"
✓ Registration complete

Vehicle: ABC-1234

[ View QR ]
[ Go to Home ]
```

---

# 34. Recovery States

Recovery is a core design requirement.

Where an action fails, the interface should provide an appropriate recovery path.

Example:

```text id="0j98pu"
Verification needs another attempt

[ Try Again ]

or

[ Open QR ]

Still having trouble?

[ Get Help ]
```

The actual recovery options should correspond to validated service capabilities.

---

# 35. Confirmation Patterns

Important actions should provide confirmation before irreversible or consequential changes.

Example:

```text id="0b6i1q"
Confirm registration

Vehicle
ABC-1234

Please check your information
before continuing.

[ Confirm & Register ]
[ Edit ]
```

This supports error prevention.

---

# 36. Multilingual Design

The prototype should support:

* Sinhala
* Tamil
* English

The system must allow for different text lengths.

Designers should avoid:

* fixed-width buttons that cannot expand
* fixed-height containers containing variable-length text
* layouts dependent on English-only wording
* text embedded inside images

Language selection should remain accessible from appropriate locations.

**Classification:** E → DH / TD

---

# 37. Content Design

Microcopy should be:

* concise
* direct
* respectful
* action-oriented
* understandable
* context-specific

Prefer:

> Check your vehicle number and try again.

Instead of:

> Invalid input.

Prefer:

> We could not verify this information.

Instead of:

> Validation error.

---

# 38. Trust and Transparency

The interface should clearly distinguish:

* current service rules
* user information
* proposed guidance
* prototype-only behavior

The academic prototype should include an appropriate prototype disclaimer where necessary.

Example:

> Prototype demonstration — not connected to the live National Fuel Pass system.

This prevents users from confusing the academic demonstration with the production government service.

**Classification:** TD

---

# 39. Accessibility

Accessibility should be treated as a system-wide requirement rather than a separate screen.

The design should support:

* readable text
* strong contrast
* clear focus states
* keyboard navigation where applicable
* semantic controls
* sufficient touch target sizes
* meaningful labels
* non-color-only status communication
* logical content order
* multilingual text
* understandable error messages

The implementation should target an appropriate accessibility standard such as WCAG, with the exact conformance target documented as a technical/design decision.

**Classification:** DH / TD

---

# 40. Touch Targets

Interactive controls should provide sufficient space for touch interaction.

Avoid:

```text
[ tiny text link ]
```

when the action is important.

Prefer:

```text
┌─────────────────────────────┐
│        Try Again             │
└─────────────────────────────┘
```

Touch target sizing should be checked during implementation and usability testing.

---

# 41. Focus and Keyboard Interaction

Although the primary prototype is mobile-oriented, the React implementation should support accessible keyboard interaction.

Interactive elements should have:

* visible focus
* logical tab order
* semantic controls
* keyboard activation
* no keyboard traps

---

# 42. Responsive Design

The system should support:

### Mobile

Primary target.

Prioritize:

* QR
* current status
* allocation
* recovery
* support

### Tablet

Allow additional content width while preserving clear hierarchy.

### Desktop

Use wider layouts where appropriate without unnecessarily increasing reading width.

The system should not simply stretch mobile layouts across large screens.

---

# 43. Component State Matrix

Each reusable component should be documented with its states.

| Component          | Required States                                   |
| ------------------ | ------------------------------------------------- |
| Button             | Default, Hover, Focus, Pressed, Disabled, Loading |
| Input              | Default, Focus, Filled, Error, Disabled           |
| Card               | Default, Interactive where applicable             |
| Alert              | Info, Warning, Error, Success                     |
| QR                 | Loading, Ready, Verification, Success, Failure    |
| Status             | Active, Attention, Error, Unknown                 |
| Navigation         | Default, Active                                   |
| Checkbox/Selection | Unselected, Selected, Disabled                    |
| Dropdown           | Closed, Open, Selected, Error                     |

---

# 44. Figma Organization

The Figma file should be organized into pages such as:

```text
01 — Cover
02 — Foundations
03 — Components
04 — Wireframes
05 — High Fidelity
06 — Prototype
07 — Usability Testing
08 — Design Decisions
```

Components should be created before duplicating large numbers of screens.

---

# 45. Figma Naming Convention

Use consistent names.

Examples:

```text
Button / Primary
Button / Secondary
Input / Default
Input / Error
Card / Allocation
Card / Vehicle
Alert / Error
Alert / Success
Navigation / Bottom
QR / Ready
QR / Failure
Status / Active
```

This will make the system easier to maintain.

---

# 46. React Component Mapping

The eventual React implementation can map design-system components to reusable components.

Example structure:

```text
app/
├── components/
│   ├── Button
│   ├── Input
│   ├── Card
│   ├── Alert
│   ├── Status
│   ├── Navigation
│   ├── QRCard
│   ├── AllocationCard
│   └── LanguageSelector
│
├── pages/
│   ├── Home
│   ├── QR
│   ├── Vehicle
│   ├── Allocation
│   ├── Help
│   └── Settings
```

The exact implementation structure is a technical decision and can change as development progresses.

---

# 47. Design Tokens and React

The visual tokens should eventually be represented centrally rather than repeated throughout the application.

Conceptually:

```text
Design Token
      ↓
CSS variable / theme
      ↓
Reusable component
      ↓
Screen
```

This reduces inconsistent styling and makes later iteration easier.

---

# 48. Prototype Data

The design system should use synthetic demonstration data.

Examples:

```text
Vehicle number: ABC-1234
Chassis: SYNTHETIC-001
Allocation: 15 L
Remaining: 10 L
```

No real:

* NIC numbers
* phone numbers
* chassis numbers
* OTPs
* addresses
* passwords
* government credentials

should be used in the prototype.

---

# 49. Design Decision Record

Important visual decisions should be recorded.

Example:

| Decision                    | Classification | Reason                                    |
| --------------------------- | -------------- | ----------------------------------------- |
| Mobile-first layout         | DH / TD        | QR interaction and mobile service context |
| Three-language support      | E → DH         | Current service ecosystem is multilingual |
| One dominant primary action | DH             | Reduce cognitive load                     |
| Text + icon status          | DH             | Avoid color-only communication            |
| Synthetic QR                | TD             | Prototype safety                          |
| Prototype disclaimer        | TD             | Prevent confusion with production service |
| Bottom navigation           | DH             | Proposed information architecture         |
| Allocation summary card     | DH             | Improve allocation comprehension          |

---

# 50. Research-Dependent Design Decisions

The following should remain open until validated:

* exact primary navigation pattern
* dashboard information density
* activity/history usefulness
* preferred QR presentation method
* preferred recovery actions
* exact error wording
* station-facing interface requirements
* accessibility controls users actually need
* allocation visualization
* support information hierarchy
* authentication interaction
* ownership/contact-change interaction details

These should not be treated as final merely because they appear in the design system.

---

# 51. Design System Validation

The design system should be reviewed against:

### Clarity

Can users understand what each component means?

### Consistency

Does the same component behave the same way throughout the service?

### Accessibility

Can users with different abilities interact with the interface?

### Multilingual Support

Does the design remain usable when translated?

### Recovery

Do components provide understandable recovery states?

### Trust

Does the interface avoid misleading users about prototype capabilities?

### Responsiveness

Does the system work across relevant screen sizes?

---

# 52. Design QA Checklist

Before approving a screen, check:

### Visual

* [ ] Typography follows the system.
* [ ] Spacing follows the system.
* [ ] Colors use defined tokens.
* [ ] Components are reused consistently.
* [ ] Alignment is consistent.

### Interaction

* [ ] Primary action is obvious.
* [ ] Interactive elements have appropriate states.
* [ ] Errors provide recovery.
* [ ] Success states provide a next action.

### Accessibility

* [ ] Text is readable.
* [ ] Contrast is sufficient.
* [ ] Meaning does not rely only on color.
* [ ] Controls have clear labels.
* [ ] Focus states exist where applicable.
* [ ] Multilingual text does not break the layout.

### Evidence

* [ ] No unsupported government behavior is presented as fact.
* [ ] Prototype-only behavior is identified.
* [ ] Unknown technical architecture is not implied.

---

# 53. Relationship to Wireframes

The design system should be applied **after** the low-fidelity wireframes establish the information hierarchy.

The intended sequence is:

```text
Wireframes
    ↓
Design System
    ↓
High-Fidelity UI
    ↓
Prototype
    ↓
Usability Testing
    ↓
Iteration
```

The design system should not be used to force the wireframes into a visual style before their interaction structure is validated.

---

# 54. Relationship to User Flows

Components should support the states defined in:

`architecture/user-flows.md`

Important examples include:

* registration
* validation
* success
* error
* QR presentation
* QR verification failure
* ownership/contact recovery
* support
* exceptional guidance

---

# 55. Relationship to Design Principles

The design system operationalizes the following principles:

| Design Principle            | Design-System Response               |
| --------------------------- | ------------------------------------ |
| Make Current State Obvious  | Status components                    |
| One Clear Next Action       | Button hierarchy                     |
| Design for Recovery         | Error/recovery states                |
| Plain Language              | Content rules                        |
| Understandable Verification | QR component                         |
| Real-World Context          | QR and mobile-first structure        |
| Inclusive Access            | Multilingual/accessibility rules     |
| Allocation Clarity          | Allocation component                 |
| Reduce Cognitive Load       | Consistent hierarchy                 |
| Status and Exceptions       | Alert/status components              |
| Prevent Errors              | Form states and confirmation         |
| Trust and Transparency      | Prototype disclaimer/status clarity  |
| Ecosystem Thinking          | Support and service-context patterns |
| Validate Before Scaling     | Research-dependent decisions         |

---

# 56. What This Design System Does Not Claim

This document does not claim that:

* these are official NFP colors
* these are official government fonts
* these components exist in the current NFP
* these are official government accessibility standards
* these are current production UI components
* these components represent internal government systems
* these designs have already been usability tested
* users have already validated the visual design
* station operators have validated the proposed interface
* the prototype is production-ready

This is a proposed design system for an academic UX Engineering project.

---

# 57. Current Status

**Status: PROVISIONAL — READY FOR HIGH-FIDELITY FIGMA DESIGN AND USABILITY VALIDATION**

Completed design inputs:

* Problem Definition
* Personas
* User Journeys
* Requirements
* Design Principles
* Information Architecture
* User Flows
* Low-Fidelity Wireframes

Current output:

* Design System

Pending:

* High-fidelity Figma screens
* Primary research validation
* Usability testing
* Design iteration
* React implementation

---

# 58. Next Steps

The recommended sequence is:

1. Create the design-system foundations in Figma.
2. Create reusable components.
3. Apply the design system to the low-fidelity wireframes.
4. Produce high-fidelity screens.
5. Review screens against requirements and design principles.
6. Prepare `design/usability-testing.md`.
7. Conduct usability testing.
8. Record findings.
9. Iterate the design.
10. Implement the validated design in React.

---

# 59. Conclusion

This design system establishes a consistent visual and interaction foundation for the proposed National Fuel Pass redesign.

It emphasizes clarity, recovery, accessibility, multilingual support, understandable QR verification, allocation visibility, and transparent prototype behavior.

The system remains intentionally provisional where evidence is incomplete. Visual and interaction decisions should be validated through primary research and usability testing before being treated as final design decisions.

**Design-system status: PROVISIONAL — NOT YET USER-VALIDATED.**
