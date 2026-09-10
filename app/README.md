The text is restructured below into a clean, fully validated, and properly formatted GitHub README Markdown document. Fixes have been applied to code block fences, broken ASCII tree structures, and formatting inconsistencies.

```markdown
# National Fuel Pass — UX Engineering Prototype

A modern UX redesign and React prototype of Sri Lanka's National Fuel Pass service.

This project explores how the National Fuel Pass experience could be redesigned to provide citizens, fuel-station operators, and government administrators with a clearer, more reliable, accessible, and trustworthy service experience.

> **Academic Prototype:** This is a university UX Engineering project and is not an official Sri Lankan government application. All account, vehicle, allocation, and transaction data shown in the prototype is synthetic.

---

## Project Overview

The National Fuel Pass service involves several important tasks, including vehicle registration, fuel allocation, QR verification, ownership changes, transaction history, and support.

This project focuses on improving the user experience around these tasks through:

- Clearer information architecture
- Simpler registration flows
- Easy access to the Fuel QR Pass
- Transparent fuel allocation information
- Vehicle and ownership management
- Transaction history
- Help and support
- Accessibility considerations
- Trilingual interface planning
- Responsive web design

The prototype was developed as part of an end-to-end UX Engineering process, combining UX research, service design, interaction design, visual design, usability planning, and React implementation.

---

## Objectives

The main objective is to explore how the National Fuel Pass service can become:

- **Clearer** — Users can easily understand their vehicle, allocation, and QR status.
- **Reliable** — Important actions and system states are communicated clearly.
- **Accessible** — The interface considers different literacy levels, languages, devices, and usage environments.
- **Trustworthy** — Users receive clear explanations, status information, and guidance.
- **Efficient** — Common tasks require fewer unnecessary steps.

---

## Key Features

### Vehicle Registration
A guided registration flow that helps users:
1. Enter vehicle information
2. Provide identification information
3. Review their details
4. Submit registration

### Fuel QR Pass
A dedicated QR Pass screen provides:
- Vehicle number
- QR representation
- Pass status
- Verification guidance

### Fuel Allocation
Users can view:
- Total allocation
- Used allocation
- Remaining allocation
- Allocation reset information
- Recent transactions

### Vehicle Management
Users can review their registered vehicle and access flows for:
- Ownership changes
- Contact number changes
- Vehicle information

### Transaction History
A dedicated history screen provides a simple overview of previous fuel transactions.

### Help & Support
The prototype includes:
- Search for help topics
- Frequently needed guidance
- Support information
- Important service warnings

### Settings
The settings area provides:
- Language selection
- Accessibility-related options
- Prototype information

---

## UX Engineering Process

The project follows a structured UX Engineering process:

1. **Project Framing**
2. **Research & Discovery**
3. **Define & Prioritize**
4. **Service Design & Architecture**
5. **Interaction Design**
6. **Visual Design & Prototyping**
7. **Usability Testing & Iteration**
8. **React MVP Engineering**
9. **Evaluation & Documentation**

The project maintains traceability between research findings and implementation decisions:

```text
Research Evidence
       ↓
Empirical Finding
       ↓
Verified Pain Point
       ↓
Service Requirement
       ↓
Design Hypothesis
       ↓
Design Decision / Specification
       ↓
React Component / Code

```

---

## Project Structure

```text
.
├── app/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Alert.jsx
│   │   │   ├── AppShell.jsx
│   │   │   ├── BottomNavigation.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── PageHeader.jsx
│   │   │   ├── QRCard.jsx
│   │   │   └── StatusBadge.jsx
│   │   │
│   │   ├── data/
│   │   │   └── mockData.js
│   │   │
│   │   ├── pages/
│   │   │   ├── EntryPage.jsx
│   │   │   ├── SignInPage.jsx
│   │   │   ├── LanguagePage.jsx
│   │   │   ├── RegistrationPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── QRPage.jsx
│   │   │   ├── VehiclePage.jsx
│   │   │   ├── AllocationPage.jsx
│   │   │   ├── HistoryPage.jsx
│   │   │   ├── OwnershipPage.jsx
│   │   │   ├── HelpPage.jsx
│   │   │   └── SettingsPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── index.html
│
├── architecture/
├── define/
├── design/
├── process/
├── research/
└── README.md

```

---

## Technology Stack

| Category | Technology |
| --- | --- |
| **Frontend Framework** | React |
| **Language & Styling** | JavaScript, HTML5, CSS3 |
| **Build Tool** | Vite |
| **UI & Icons** | Lucide React |
| **Development Tools** | VS Code, Git, GitHub, npm |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
cd <YOUR-REPOSITORY-NAME>

```

### Install Dependencies

```bash
cd app
npm install

```

### Start the Development Server

```bash
npm run dev

```

The application will be available at the local development URL shown in the terminal.

---

## Prototype Data

This application uses synthetic data for demonstration purposes.

**Example:**

```javascript
export const vehicle = {
  number: "ABC-1234",
  category: "Motor Car",
  registrationStatus: "Active",
};

```

The prototype **does not** connect to:

* Government databases
* Real vehicle records
* Real user accounts
* Real fuel transactions
* Live QR verification services
* Government authentication systems

> **Warning:** No real personal information should be entered into the prototype.

---

## Accessibility Considerations

The design considers the practical conditions in which a public service such as this may be used, including:

* Clear visual hierarchy
* Readable typography
* Large interactive controls
* Simple language
* Clear system status
* Error and warning communication
* Mobile-first layouts
* Trilingual interface planning
* Potential low-connectivity environments
* Outdoor and high-sunlight usage
* Users with different levels of digital literacy

---

## Design Principles

1. **Clarity First** — Important information such as QR status, allocation, and vehicle details should be immediately understandable.
2. **Progressive Disclosure** — Users should only see the information needed for the current task.
3. **Visible System Status** — The interface should clearly communicate states such as active, completed, remaining, submitted, or unavailable.
4. **Error Prevention** — Flows should help users avoid mistakes before submitting important information.
5. **Accessible by Default** — Interactions should remain understandable and usable across different languages, devices, and user abilities.
6. **Trust Through Transparency** — The service should explain important actions, requirements, warnings, and system states rather than leaving users uncertain.

---

## Important Prototype Disclaimer

This repository contains an academic UX Engineering prototype created for design and evaluation purposes. It is not an official implementation of the Sri Lankan National Fuel Pass system.

The interface, workflows, architecture, and implementation are proposed design solutions and should not be interpreted as undocumented government system specifications. All prototype account, vehicle, allocation, and transaction information is synthetic.

---

## Future Improvements

Potential future development includes:

* Complete Sinhala and Tamil localization
* Improved offline/low-connectivity behaviour
* Real accessibility testing
* Usability testing with representative participants
* Improved QR verification flows
* Fuel-station operator workflows
* Government administrator workflows
* Backend API integration
* Authentication and secure identity verification
* Real-time service status
* Notifications and service alerts
* Production-grade security and privacy controls

---

## Author

**Fathima Thahirah Razmi**

---

## License

This project is created for academic and educational purposes.

---
