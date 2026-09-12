# National Fuel Pass — UX Engineering Redesign

A research-driven UX Engineering redesign and React MVP proposal for Sri Lanka's National Fuel Pass service.

This project explores how the National Fuel Pass experience could be improved for citizens, fuel-station operators, and government stakeholders by focusing on **clarity, accessibility, reliability, and trust**.

> **Academic Prototype:** This project is a university UX Engineering proposal and demonstration MVP. It is not an official replacement for the National Fuel Pass system. All account, vehicle, and transaction information shown in the prototype is synthetic demonstration data.

---

## 📌 Project Overview

The National Fuel Pass is a public-service system that connects citizens, vehicles, fuel allocations, and fuel stations.

This project redesigns the service as an end-to-end UX Engineering proposal, beginning with research and stakeholder analysis and progressing through problem definition, service design, wireframing, visual design, and React implementation.

The objective is not to reproduce or claim access to the real government backend. Instead, the project demonstrates how a redesigned public-service experience could be structured and implemented as a minimum viable prototype.

### How the project approaches the problem

```text
Research
   ↓
Evidence & Findings
   ↓
Problem Definition
   ↓
Requirements
   ↓
Information Architecture
   ↓
User Flows
   ↓
Low-Fidelity Wireframes
   ↓
High-Fidelity Design
   ↓
React MVP
   ↓
Evaluation & Documentation
```

---

## 🎯 Project Objective

The main objective is to explore:

> **How might we redesign the National Fuel Pass service so citizens, fuel-station operators and government administrators can complete fuel allocation tasks with greater clarity, reliability, accessibility and trust?**

The redesign focuses on:

* Clearer user journeys
* Simpler registration
* Easy access to the QR Pass
* Clear fuel allocation information
* Transaction history
* Vehicle and ownership management
* Accessible support
* Multilingual considerations
* Mobile-first interaction
* Clear communication of system states

---

## 👥 Target Users

The project considers multiple stakeholders rather than designing only for one citizen user.

### Citizens / Vehicle Owners

Users who need to:

* Register a vehicle
* Access their QR Pass
* View fuel allocation
* Check remaining quota
* Review transaction history
* Update ownership or contact information
* Get support

### Fuel-Station Operators

Users who may need to:

* Verify a user's fuel entitlement
* Process fuel allocation
* Handle QR-based verification
* Work in potentially constrained station environments

### Government / Administrative Stakeholders

Stakeholders responsible for:

* Fuel allocation policies
* Vehicle and ownership processes
* Service reliability
* Public communication
* Support and operational oversight

The research and design process therefore considers different levels of digital literacy, accessibility needs, environmental constraints, and public-service expectations.

---

# 🔎 UX Engineering Process

The project follows an AI-assisted UX Engineering process agreed and documented before conducting the redesign.

The process consists of:

1. **Project Framing**
2. **Research & Discovery**
3. **Define & Prioritize**
4. **Service Design & Architecture**
5. **Interaction Design**
6. **Visual Design & Prototyping**
7. **React MVP Engineering**
8. **Evaluation & Documentation**

The process was developed with AI assistance and then used as the structure for the subsequent research and redesign work.

### Evidence-driven approach

Design decisions are organized using the following reasoning structure:

```text
Evidence
   ↓
Inference
   ↓
Research Question / Hypothesis
   ↓
Design Hypothesis
   ↓
Technical Decision
```

The project does not fabricate interviews, surveys, user quotes, statistics, or government system details.

Where information could not be verified, it is treated as **UNKNOWN** rather than presented as fact.

---

# 📚 Research & Discovery

The research phase examined the existing National Fuel Pass experience and relevant public-service, identity, QR verification, payment, accessibility, and digital-service patterns.

Research areas included:

* Existing National Fuel Pass processes
* Government and institutional stakeholders
* Vehicle registration and ownership considerations
* Citizen registration requirements
* Fuel allocation and quota communication
* QR-based verification
* Public-service accessibility
* Multilingual interaction
* Low-connectivity and real-world station conditions
* Comparable digital public-service experiences

Research findings were used to identify potential usability and service-design opportunities rather than assuming that a visual redesign alone would solve the problem.

Research sources are documented in:

`research/sources.md`

---

# 🧩 Problem Definition

The research was translated into:

* Problem statement
* Personas
* User journeys
* Requirements
* Design principles

These documents establish the relationship between research findings and subsequent design decisions.

The redesign prioritizes:

### Clarity

Users should quickly understand what they need to do and what their current fuel status means.

### Accessibility

The service should consider different literacy levels, languages, visual conditions, and digital confidence.

### Reliability

Important information and actions should be presented clearly, particularly when users are completing time-sensitive tasks.

### Trust

The interface should clearly communicate system status, errors, confirmations, and limitations.

---

# 🏗️ Service Design & Architecture

The project includes:

* Information Architecture
* User Flows
* Service considerations
* User journey mapping
* Functional requirements

The primary citizen journey includes:

```text
Entry
  ↓
Language Selection
  ↓
Sign In ───────────────→ Home
  │
  └── Register
        ↓
    Vehicle Information
        ↓
    Identity Information
        ↓
    Review & Confirm
        ↓
    Registration Success
        ↓
       Home
```

From the Home dashboard, users can access:

```text
Home
├── QR Pass
├── Vehicle
│   ├── Change Ownership
│   └── Change Contact Number
├── Fuel Allocation
│   └── Transaction History
├── Help
└── Settings
```

---

# 🎨 Design

## Low-Fidelity Wireframes

The low-fidelity phase was used to validate:

* Screen structure
* Information hierarchy
* Navigation
* User flows
* Form structure
* Error and success states
* Main task paths

The wireframes were intentionally kept simple and grayscale so that the UX structure could be considered before visual styling.

## High-Fidelity Design

The high-fidelity design translates the approved wireframes into a consistent visual system.

The design emphasizes:

* Clear hierarchy
* Accessible contrast
* Readable typography
* Consistent components
* Large touch targets
* Simple navigation
* Mobile-first interaction

### Primary Design Palette

| Purpose        | Colour    |
| -------------- | --------- |
| Primary        | `#263B73` |
| Primary Dark   | `#1D2E5B` |
| Primary Soft   | `#EEF2FF` |
| Background     | `#F6F8FB` |
| Text           | `#172033` |
| Secondary Text | `#667085` |
| Border         | `#E4E7EC` |
| Surface        | `#FFFFFF` |

---

# 💻 React MVP

The final outcome is a simple React MVP demonstrating the proposed experience.

The prototype includes:

* Entry / Welcome
* Language selection
* Sign in
* Registration
* Registration success
* Home dashboard
* QR Pass
* Vehicle details
* Fuel allocation
* Transaction history
* Ownership/contact management
* Help & Support
* Settings

The application uses synthetic data and simulated interactions.

It does **not** connect to the actual National Fuel Pass backend or government databases.

---

# 🛠️ Technology Stack

### Frontend

* React
* JavaScript
* Vite
* CSS

### UI

* Lucide React
* Responsive mobile-first layout

### Development

* Git
* GitHub
* VS Code
* Vercel / web hosting

---

# 📁 Project Structure

```text
national-fuel-pass-ux-redesign/
│
├── process/
│   └── UX-PROCESS.md
│
├── research/
│   ├── 01-project-framing.md
│   ├── 02-desk-research.md
│   ├── 03-stakeholder-analysis.md
│   ├── 04-user-research.md
│   ├── 05-competitive-analysis.md
│   └── sources.md
│
├── define/
│   ├── problem-statement.md
│   ├── personas.md
│   ├── user-journeys.md
│   ├── requirements.md
│   └── design-principles.md
│
├── architecture/
│   ├── information-architecture.md
│   └── user-flows.md
│
├── design/
│   ├── figma/
│   ├── wireframes.md
│   ├── design-system.md
│   └── usability-testing.md
│
├── documentation/
│   ├── project-report.md
│
├── app/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🚀 Running the React Application

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the application directory:

```bash
cd national-fuel-pass-ux-redesign/app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

# 🧪 Prototype Data

The prototype uses synthetic demonstration data.

For example:

```text
Vehicle Number: ABC-1234
Vehicle Category: Motor Car

Total Allocation: 15 L
Used: 5 L
Remaining: 10 L
```

Transaction examples such as:

```text
28 Aug 2026 — Demo Fuel Station — 5 L
21 Aug 2026 — Demo Fuel Station — 5 L
14 Aug 2026 — Demo Fuel Station — 3 L
```

are fictional and are included only to demonstrate interface behaviour.

No real user accounts, personal information, government records, or live fuel transactions are used.

---

# 🤖 AI-Assisted Workflow

AI tools were used as part of the documented UX Engineering process.

### AI Process Development

An initial AI conversation was used to:

* Discuss the UX Engineering approach
* Define the project phases
* Agree on the process
* Generate the Markdown process document

### AI-Assisted Research & Design

A separate AI conversation was then used to conduct the redesign process using the agreed UX process.

AI assistance was used for activities such as:

* Research organization
* Analysis
* UX documentation
* Design exploration
* Structuring requirements
* Reviewing design decisions

AI was treated as a supporting tool rather than a replacement for evidence.

### AI Conversation Links

**UX Process Discussion:**
`<ADD GEMINI THREAD LINK>`

**UX Research & Redesign Thread:**
`<ADD GEMINI THREAD LINK>`

**Design / Figma AI Thread:**
`<ADD LINK IF REQUIRED>`

---

# 🎨 Design Resources

### Figma

**Figma Design:**
`<ADD FIGMA LINK>`

The Figma file contains the project's wireframes, high-fidelity designs, user flows, and visual design work.

### React Prototype

**Live Application:**
`<ADD VERCEL LINK>`

### Source Code

**GitHub Repository:**
`<ADD GITHUB LINK>`

---

# ⚠️ Scope & Limitations

This project is a **proposal and MVP demonstration**, not a production government application.

The prototype does not implement:

* Real government authentication
* Real vehicle-registration integration
* Real fuel-station verification
* Real fuel allocation transactions
* Real government databases
* Production security infrastructure
* Real payment processing
* Live government APIs

These would require further technical, security, legal, operational, and stakeholder validation before production deployment.

The project also does not claim that undocumented government architecture or integrations exist.

---

# 🔮 Future Improvements

If this proposal were developed beyond the MVP, potential next steps could include:

* Stakeholder validation with relevant government institutions
* Primary user research
* Usability testing with representative users
* Accessibility testing
* Multilingual content validation
* Offline / low-connectivity support
* Real authentication and identity verification
* Secure backend architecture
* Government API integration
* Fuel-station operator workflows
* Administrative dashboards
* Monitoring and audit capabilities
* Production security and privacy controls

These are future considerations and are not represented as completed functionality in this prototype.

---

# 📌 Project Outcome

The final outcome is an end-to-end UX Engineering proposal that demonstrates how a public-service redesign can move from:

**Research → Problem Definition → Requirements → Service Design → User Flows → Wireframes → Visual Design → React MVP**

The purpose is to demonstrate the reasoning, process, and technical implementation behind a proposed redesign for a government/public-service context.

---

## 👩‍💻 Author

**Fathima Thahirah Razmi**

This project was developed as an academic UX Engineering proposal.
