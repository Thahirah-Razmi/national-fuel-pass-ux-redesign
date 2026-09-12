# Research Source Register

## 1. Purpose

This document serves as the central Source Register for the National Fuel Pass (NFP) UX redesign proposal and the research artifacts contained in:

* `research/01-project-framing.md`
* `research/02-desk-research.md`
* `research/03-stakeholder-analysis.md`
* `research/04-user-research.md`
* `research/05-competitive-analysis.md`

The purpose of this register is to provide a centralized, traceable record of the authoritative institutional sources, historical service documentation, technical specifications, and comparative references used throughout the research phase.

The register also distinguishes current evidence from historical evidence and separates documented source evidence from analyst inference and research/design hypotheses.

---

## 2. Research Status & Epistemological Boundaries

The research phase currently consists primarily of desk research, stakeholder analysis, research planning, and competitive analysis.

### Current Research Status

* Desk research has been conducted using publicly available institutional and service documentation.
* Historical National Fuel Pass documentation has been reviewed separately from current NFP information.
* Stakeholder analysis has been structured.
* User-research instruments have been prepared.
* Competitive analysis has been conducted as a comparative desk-research activity.
* Primary field research has **NOT yet been conducted**.

Therefore, the following have not yet been established through empirical participant research:

* actual user behavior
* frequency of specific user problems
* actual station workflow variation
* actual station transaction duration
* actual QR presentation methods
* actual causes of QR scanning failures
* actual station connectivity conditions
* actual accessibility barriers
* actual user comprehension of quota rules

These remain Research Questions (**RH**), Design Hypotheses (**DH**), or **UNKNOWN** until validated.

### Epistemological Classification

* **E — Evidence:** Directly documented, observed, or verified through an authoritative source.
* **I — Inference:** A logical deduction derived from documented evidence.
* **RH — Research Question / Research Hypothesis:** An empirical question requiring validation.
* **DH — Design Hypothesis:** A proposed design approach requiring validation.
* **TD — Technical Decision:** An engineering implementation decision.
* **UNKNOWN:** A claim, condition, or parameter that has not been established by accessible verified evidence.

---

## 3. Source Quality & Assessment Principles

### 3.1 Primary Sources Are Preferred

Official government portals, institutional documentation, technical specifications, and direct service documentation are prioritized over secondary commentary.

### 3.2 Current and Historical Evidence Are Separated

Historical National Fuel Pass documentation from 2022 is not treated as evidence of current 2026 system behavior.

For example:

* Historical ICTA documentation records the original NFP implementation and its historical quota-cycle rules.
* Current GIC documentation establishes the currently published quota reset and support information.

### 3.3 Competitor Evidence Does Not Automatically Become an NFP Requirement

A feature documented in another service establishes that a particular interaction or technical pattern exists (**E**).

It does not establish that NFP users need the same feature.

Its relevance to NFP is therefore classified separately as an **I**, **RH**, or **DH** where appropriate.

### 3.4 No Fabrication

URLs, publication dates, organizational responsibilities, technical capabilities, statistics, and competitor features are included only when they can be verified.

Where verification is unavailable, the source or claim is marked **UNKNOWN** rather than guessed.

---

# 4. National Fuel Pass & Government Sources

## NFP-01 — Current GIC Fuel Pass Portal

* **Organization:** Government Information Center (GIC), Sri Lanka
* **Source Type:** Official Government / Service Portal
* **Status:** Current
* **URL:** `https://fuelpass.gic.gov.lk/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/02-desk-research.md`, `research/03-stakeholder-analysis.md`
* **Supports:**

  * Current Saturday 12:00 AM quota reset information.
  * Current guidance relating to ownership changes.
  * Current guidance relating to lost contact numbers.
  * Current WhatsApp support number: 076 013 9886.
  * Fraud/misuse warnings.
* **Evidence Classification:** E
* **Notes:** This is a current source. It must not be used to establish historical 2022 behavior. The current portal explicitly states that Fuel Pass quotas reset at midnight on Saturday and provides current support guidance.

---

## NFP-02 — GIC Fuel Pass Registration / Complaint Guidance

* **Organization:** Government Information Center (GIC), Sri Lanka
* **Source Type:** Official Service Support Page
* **Status:** Current
* **URL:** `https://fuelpass.gic.gov.lk/complain-registration.html`
* **Publication Date:** UNKNOWN
* **Date Accessed:** September 2026
* **Used In:** `research/02-desk-research.md`, `research/03-stakeholder-analysis.md`
* **Supports:**

  * Documentation requirements associated with registration/support cases.
  * Ownership-related verification and documentation requirements where explicitly stated.
* **Evidence Classification:** E
* **Notes:** Only claims explicitly stated on the page should be attributed to this source. It should not be used to infer internal support procedures or backend processing.

---

## NFP-03 — ICTA National Fuel Pass FAQ

* **Organization:** Information and Communication Technology Agency of Sri Lanka (ICTA)
* **Source Type:** Official Institutional FAQ
* **Status:** Historical — 2022
* **URL:** `https://www.icta.lk/media/news/frequently-asked-questions-about-the-national-fuel-pass`
* **Publication Date:** 2 August 2022
* **Date Accessed:** September 2026
* **Used In:** `research/02-desk-research.md`, `research/05-competitive-analysis.md`
* **Supports:**

  * Historical NFP registration requirements.
  * Historical use of NIC/passport/business registration information.
  * Historical mobile-number registration and OTP.
  * Historical vehicle number and chassis number requirements.
  * Historical one-vehicle-per-profile restriction.
  * Historical quota-based service model.
* **Evidence Classification:** E
* **Notes:** Historical evidence only. The ICTA FAQ describes the 2022 implementation and must not be treated as proof of the current 2026 system.

---

## NFP-04 — Ministry of Energy: 2026 National Fuel QR Code System

* **Organization:** Ministry of Energy, Sri Lanka
* **Source Type:** Official Government Announcement
* **Status:** Current / 2026
* **URL:** `https://energymin.gov.lk/index.php/2026/03/15/news-07-15-03/`
* **Publication Date:** 15 March 2026
* **Date Accessed:** September 2026
* **Used In:** `research/02-desk-research.md`
* **Supports:**

  * QR enforcement from 15 March 2026.
  * Re-registration requirements for changed ownership or phone number.
  * Registration for newly registered vehicles.
  * Vehicle-category fuel quotas.
  * Special mechanisms for production and essential services.
  * Fuel issuance restrictions associated with the QR system.
* **Evidence Classification:** E
* **Notes:** This is an important current government source and should be retained separately from historical 2022 ICTA documentation.

---

## GOV-01 — Department of Motor Traffic Online Vehicle Information Service

* **Organization:** Department of Motor Traffic (DMT), Sri Lanka
* **Source Type:** Official Public E-Service
* **Status:** Current
* **URL:** `https://eservices.motortraffic.gov.lk/`
* **Publication Date:** Continuously operational
* **Date Accessed:** September 2026
* **Used In:** `research/02-desk-research.md`, `research/05-competitive-analysis.md`
* **Supports:**

  * Availability of registered vehicle information through the DMT online service.
  * Vehicle information categories such as engine number, vehicle class, make, model, year of manufacture, engine capacity, fuel type, and registration-related information.
  * Distinction between limited and full vehicle information requests.
* **Evidence Classification:** E
* **Notes:** This source establishes publicly exposed vehicle-information categories. It does not by itself establish the architecture or current API relationship between DMT and NFP.

---

## GOV-02 — Department of Motor Traffic Appointments Portal

* **Organization:** Department of Motor Traffic (DMT), Sri Lanka
* **Source Type:** Official Administrative Service Portal
* **Status:** Current
* **URL:** `https://dmtappointments.dmt.gov.lk/`
* **Publication Date:** Continuously operational
* **Date Accessed:** September 2026
* **Used In:** `research/02-desk-research.md`
* **Supports:**

  * Existence of appointment-based DMT administrative services.
* **Evidence Classification:** E
* **Notes:** The existence of an appointment system does not by itself establish when a citizen must use an in-person administrative process to resolve an NFP issue. Any such relationship remains subject to further research.

---

# 5. Competitive Analysis Sources

## COMP-01 — GovPay Sri Lanka

* **Organization:** GovTech / LankaPay
* **Source Type:** Official Government Digital Payment Platform
* **Status:** Current
* **URL:** `https://govpay.lk/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * Government digital-payment workflows.
  * Reference-number based transaction information.
  * Sinhala, Tamil, and English interface availability.
  * Payment confirmation and receipt-related workflows.
* **Evidence Classification:** E
* **Notes:** Provides a useful Sri Lankan public-service comparison for structured reference input, confirmation, and multilingual interaction. It does not establish that NFP should use the same payment-oriented interaction model.

---

## COMP-02 — GovStack Building Block Specifications

* **Organization:** GovStack / ITU and contributing organizations
* **Source Type:** Digital Public Infrastructure Technical Specification
* **Status:** Current
* **URL:** `https://www.govstack.global/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * Modular digital public-service building blocks.
  * Identity and registration building-block specifications.
  * Interoperability and service/API patterns described in the specifications.
* **Evidence Classification:** E
* **Notes:** This is a comparative architectural reference. It does not establish the architecture of the current NFP system. GovStack describes building blocks as modular and interoperable software components that expose services to other applications/building blocks.

---

## COMP-03 — UIDAI Aadhaar QR Verification

* **Organization:** Unique Identification Authority of India (UIDAI)
* **Source Type:** Official Institutional Documentation
* **Status:** Current
* **URL:** `https://uidai.gov.in/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * Aadhaar QR-based identity verification.
  * Offline QR scanning capability.
  * QR verification without internet connectivity for the applicable scanner mechanism.
* **Evidence Classification:** E
* **Notes:** Demonstrates the existence of an offline QR verification pattern. It does not prove that NFP requires or should adopt such a mechanism.

---

## COMP-04 — EU Digital COVID Certificate

* **Organization:** European Commission / eHealth Network
* **Source Type:** Official Technical / Governance Documentation
* **Status:** Historical / Reference Standard
* **URL:** `https://health.ec.europa.eu/ehealth-digital-health-and-care/ehealth-and-covid-19/eu-digital-covid-certificate_en`
* **Publication Date:** 2021–2023
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * QR-based digital and paper credentials.
  * Digital signatures for certificate authenticity.
  * Verifier-side QR scanning.
  * Offline verification flows described by the European Commission/eHealth Network.
* **Evidence Classification:** E
* **Notes:** Historical comparative reference. The EUDCC demonstrates a QR credential and verifier model but does not establish that the same architecture is suitable for NFP.

---

## COMP-05 — CEB Care / CEB Customer Service Platform

* **Organization:** Ceylon Electricity Board (CEB)
* **Source Type:** Official Utility Service Portal
* **Status:** Current
* **URL:** `https://cebcare.ceb.lk/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * Digital electricity account/service information.
  * Billing and consumption information.
  * Presentation of electricity consumption in kWh.
* **Evidence Classification:** E
* **Notes:** CEB electricity consumption should not be described as a fuel-style quota. Its relevance is as a comparative example of presenting numeric consumption and billing-cycle information. The current service also indicates a transition from CEBCare to EDLCare.

---

## COMP-06 — PickMe Sri Lanka

* **Organization:** Digital Mobility Solutions Lanka PLC / PickMe
* **Source Type:** Commercial Mobility Platform
* **Status:** Current
* **URL:** `https://www.pickme.lk/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * Real-time driver-location tracking.
  * Ride/service status information.
  * Local mobility-service workflows.
  * Sinhala and Tamil localization documented by PickMe's annual report.
* **Evidence Classification:** E
* **Notes:** PickMe provides a comparative example of real-time status presentation in a commercial mobility context. Claims about specific accessibility or outdoor-visibility performance should not be made without separate evidence.

---

## COMP-07 — Shell Digital Fueling / SmartPay

* **Organization:** Shell
* **Source Type:** Commercial Fueling / Forecourt Documentation
* **Status:** Current
* **URL:** `https://www.shell.com/`
* **Publication Date:** Continuously updated
* **Date Accessed:** September 2026
* **Used In:** `research/05-competitive-analysis.md`
* **Supports:**

  * Commercial digital-fueling interaction patterns where officially documented.
* **Evidence Classification:** E
* **Notes:** This is a comparative commercial reference. Specific SmartPay capabilities should only be stated when supported by the exact relevant Shell documentation. Commercial fueling architecture should not be assumed to be technically or operationally transferable to a public fuel-allocation service.

---

# 6. Source Traceability Matrix

| Source ID   | Source                                  | Research File(s) | Evidence / Pattern Supported                                                    | Classification |
| ----------- | --------------------------------------- | ---------------- | ------------------------------------------------------------------------------- | -------------- |
| **NFP-01**  | Current GIC Fuel Pass Portal            | 02, 03           | Current Saturday reset, ownership/contact recovery guidance, WhatsApp support   | E              |
| **NFP-02**  | GIC Registration / Complaint Guidance   | 02, 03           | Registration/support documentation requirements explicitly stated on the source | E              |
| **NFP-03**  | ICTA NFP FAQ                            | 02, 05           | Historical registration fields, OTP, vehicle/chassis information, quota model   | E              |
| **NFP-04**  | Ministry of Energy 2026 QR Announcement | 02               | Current QR enforcement, re-registration, vehicle quotas                         | E              |
| **GOV-01**  | DMT Online Vehicle Information Service  | 02, 05           | Public vehicle-information categories                                           | E              |
| **GOV-02**  | DMT Appointments Portal                 | 02               | Existence of appointment-based administrative services                          | E              |
| **COMP-01** | GovPay                                  | 05               | Multilingual public-service interface, reference/payment workflows              | E              |
| **COMP-02** | GovStack                                | 05               | Modular identity/registration/interoperability patterns                         | E              |
| **COMP-03** | UIDAI Aadhaar QR                        | 05               | Offline QR verification capability                                              | E              |
| **COMP-04** | EUDCC                                   | 05               | QR credentials, digital signatures, verifier/offline verification patterns      | E              |
| **COMP-05** | CEB Care                                | 05               | Digital consumption and billing information                                     | E              |
| **COMP-06** | PickMe                                  | 05               | Real-time mobility status/tracking and local-language support                   | E              |
| **COMP-07** | Shell                                   | 05               | Commercial digital-fueling patterns where officially documented                 | E              |

---

# 7. Claims Requiring Primary Field Verification

The following issues remain unverified through the current desk-research set and should remain **RH**, **DH**, or **UNKNOWN** until empirical research is conducted.

| Claim / Parameter                                           | Research Location                                                     | Current Status | Validation Method                                             |
| ----------------------------------------------------------- | --------------------------------------------------------------------- | -------------- | ------------------------------------------------------------- |
| Actual station QR scan duration                             | `research/02-desk-research.md`, `research/04-user-research.md`        | UNKNOWN        | Station observation / time measurement                        |
| Frequency of sunlight or environmental QR-scanning problems | `research/04-user-research.md`                                        | UNKNOWN        | Station observation and operator interviews                   |
| Prevalence of screen vs. printed QR presentation            | `research/04-user-research.md`                                        | UNKNOWN        | Citizen survey + station observation                          |
| Frequency of chassis-number entry errors                    | `research/04-user-research.md`                                        | UNKNOWN        | User research / usability testing / available system evidence |
| Station connectivity conditions                             | `research/04-user-research.md`                                        | UNKNOWN        | Operator interviews / contextual inquiry                      |
| User comprehension of quota and reset information           | `research/04-user-research.md`                                        | UNKNOWN        | Citizen interviews and comprehension/usability testing        |
| Frequency of ownership-transfer problems                    | `research/03-stakeholder-analysis.md`, `research/04-user-research.md` | UNKNOWN        | Citizen research + support/stakeholder evidence               |
| Actual causes of QR verification failures                   | `research/02-desk-research.md`, `research/04-user-research.md`        | UNKNOWN        | Operator interviews, observation, technical investigation     |
| Actual station transaction workflow                         | `research/04-user-research.md`                                        | UNKNOWN        | Contextual inquiry and observation                            |
| Current NFP backend/API architecture                        | `research/02-desk-research.md`                                        | UNKNOWN        | Authoritative technical documentation / stakeholder access    |

---

# 8. Sources Requiring Verification or Refinement

The following source details should remain cautious until directly verified:

1. **NFP-02:** Exact contents of the complaint/registration support page should be checked against the live page before using specific administrative claims.

2. **COMP-07:** Shell-specific SmartPay capabilities should only be described using the exact official Shell documentation for the relevant product and market.

3. **Historical ICTA implementation details:** Current NFP behavior must not be inferred from 2022 documentation.

4. **Competitor usability claims:** The existence of a feature does not establish that users find it usable, accessible, fast, or preferable.

5. **Operational claims:** Station hardware, connectivity, queue conditions, scanning duration, and staff workflow require field validation unless explicitly documented by an authoritative source.

---

# 9. Conclusion

This Source Register provides the traceability layer for the research phase of the National Fuel Pass UX redesign proposal.

It separates:

* current NFP evidence,
* historical NFP evidence,
* government and institutional evidence,
* comparative service evidence,
* analyst inference,
* research questions,
* design hypotheses,
* and unresolved technical or operational unknowns.

The register does not treat competitor capabilities as proof of NFP requirements, and it does not treat desk research as evidence of actual participant behavior.

Primary field research—including interviews, contextual inquiry, station observation, surveys, and later usability testing—remains necessary to validate the major unresolved questions identified throughout the research phase.

Future design decisions should therefore follow the project's traceability chain:

**Source Evidence → Research Finding → Validated Problem → Service Requirement → Design Hypothesis → Design Decision → Prototype / React Implementation**
