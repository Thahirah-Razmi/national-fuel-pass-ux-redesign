**UX Engineering Protocol: Execution Phase**
**Domain:** Public Infrastructure Service Design
**Subject:** Redesigning Sri Lanka's National Fuel Pass (NFP)
**Execution Phase:** Phase 1 — Project Framing

---

### **System Context & Framing Matrix**

**Core Objective:** Establish the structural scope, identify ecosystem actors, define operational boundaries, and construct an evidence-controlled assumption ledger grounded strictly in verified historical context while isolating unverified operational claims for Phase 2 investigation.

```
+---------------------------------------------------------------------------------------------------+
|                                 Phase 1 Execution Matrix (Revised)                                |
+-----------------------------------+---------------------------------------------------------------+
| Key Questions                     | 1. Who are the primary, secondary, and administrative actors? |
|                                   | 2. What boundaries apply without assuming unverified limits?  |
|                                   | 3. How are claims categorized across the epistemological taxonomy?|
+-----------------------------------+---------------------------------------------------------------+
| Methods & Activities              | Ecosystem Mapping, Boundary Analysis, Assumption Logging      |
+-----------------------------------+---------------------------------------------------------------+
| Human vs. AI Division of Labor    | AI: Scaffolding, structural layout, matrix synthesis          |
|                                   | Human: Local context validation, scope limits, boundary review|
+-----------------------------------+---------------------------------------------------------------+

```

---

### **1. Ecosystem Network Mapping**

The National Fuel Pass operates at the intersection of public administration, field operations, and daily commerce.

**Primary Citizen & Commercial Actors**

* **Marginalized / Low-Literacy Citizens:** Non-smartphone owners and non-English speakers relying on physical QR prints or external assistance.
* **Daily-Wage Commuters:** Three-wheeler (tuk-tuk) drivers, motorcycle delivery workers, and small-holder agricultural transport operators sensitive to quota limits and queue delays.
* **Private Vehicle Owners:** Passenger cars, dual-purpose vans, and personal motorcycles.
* **Fleet / Commercial Operators:** Logistics fleets, public/private omnibus operators, and government-owned utility vehicles requiring multi-vehicle profile management.

**Field & Operational Actors**

* **Pump Station Operators (Pumpers):** Front-line attendants responsible for scanning QR codes via mobile or handheld devices during refueling transactions.
* **Station Managers:** Local fuel station supervisors handling queue exceptions, station-level quota monitoring, and stock reconciliations.

**Administrative & Technical Bodies**

* **Ministry of Power & Energy (MoPE):** Primary policy owner responsible for fuel distribution regulations and allocation frameworks.
* **ICT Agency of Sri Lanka (ICTA):** Historically documented technology partner involved in the initial 2022 deployment of the National Fuel Pass. (Current operational responsibilities regarding OTP gateways, LIX integrations, or backend infrastructure must be verified in Phase 2).
* **Department of Motor Traffic (DMT):** Authoritative database custodian for vehicle registrations, chassis numbers, and vehicle classifications.

---

### **2. Boundary Analysis & Contextual Constraints**

```
+---------------------------------------------------------------------------------------------------+
|                                Boundary Analysis & Contextual Constraints                         |
+-----------------------+---------------------------------------------------------------------------+
| Physical Boundaries   | Outdoor fuel station operating environments subject to variable weather    |
|                       | and lighting conditions.                                                  |
|                       | High throughput demands during peak queue hours.                          |
+-----------------------+---------------------------------------------------------------------------+
| Technical Boundaries  | Multi-step verification dependent on external cellular networks and SMS   |
|                       | delivery mechanisms.                                                      |
|                       | Client-side rendering constraints across varied mobile hardware profiles. |
+-----------------------+---------------------------------------------------------------------------+
| Social & Language     | Trilingual interface requirements across Sinhala, Tamil, and English.     |
| Constraints           | Varying levels of digital literacy across rural and urban populations.    |
+-----------------------+---------------------------------------------------------------------------+

```

---

### **3. Epistemological Assumption Ledger**

Every claim and structural condition governing the initial scope is categorized according to the **Five-Tier Epistemological Taxonomy**:

1. **Evidence** (Direct empirical facts / verified historical records)
2. **Inference** (Logical deductions from established evidence)
3. **Research Question / Hypothesis** (Unverified assumptions to investigate)
4. **Design Hypothesis** (Proposed solution concepts — *Deferred to Phase 3–5*)
5. **Technical Implementation Decision** (Academic scope and engineering constraints)

#### **1. HISTORICAL EVIDENCE (Verified via 2022 Public/ICTA Documentation)**

* **E-01 (Historical):** The 2022 legacy system required vehicle registration using National Identity Card (NIC), Passport, or Business Registration Number (BRN), cross-checked against chassis numbers and mobile phone numbers via Department of Motor Traffic (DMT) records.
* **E-02 (Historical):** Verification at the pump relied on scanning a unique QR code presented via mobile screens or printed physical paper.
* **E-03 (Historical / Discrepancy Note):** Historical 2022 documentation records a Monday-to-Sunday weekly quota allocation cycle. Current Government Information Center (GIC) documentation states a Saturday midnight reset. The exact active reset schedule and current system behavior must be verified during Phase 2.
* **E-04 (Historical):** SMS-based One-Time Password (OTP) verification was mandatory to bind a user profile to a mobile phone number during registration.

#### **2. INFERENCES (Logical Deductions from Established Evidence)**

* **I-01:** Mandatory SMS OTP registration creates a direct operational dependency on mobile network availability and SMS gateway throughput. *Potential source of registration friction to be investigated in Phase 2.*
* **I-02:** Documented QR scanning and verification failures at the pump stall the transaction pipeline, directly increasing per-vehicle turnaround times. *Specific causes require empirical investigation.*

#### **3. RESEARCH QUESTIONS / RESEARCH HYPOTHESES (Unverified Claims for Phase 2)**

* **RH-01:** What are the primary physical and technical root causes of QR scanning failures at pump stations (e.g., screen glare, low contrast, damaged paper prints, lens quality, device lighting)?
* **RH-02:** What is the technical reliability, failure rate, and latency profile of the SMS/OTP gateway across different cellular providers during peak usage periods?
* **RH-03:** What hardware profiles (OS versions, camera resolutions, processing power) are currently used by pump station attendants?
* **RH-04:** What cellular network conditions (3G/4G/2G coverage gaps) exist across urban vs. rural fuel stations, and how do connectivity drops affect real-time verification?
* **RH-05:** Do digitally marginalized or low-literacy citizens rely on third-party commercial intermediaries (e.g., communication shops) for registration, and what privacy/PII risks arise from this practice?
* **RH-06:** Are security forces or armed personnel actively involved in physical queue management under current operational conditions, or has queue management shifted strictly to station staff?

#### **4. DESIGN HYPOTHESES (Proposed Solutions)**

* *None established in Phase 1. Solutions (e.g., offline caching, delegated proxies, audio cues) are strictly prohibited prior to empirical problem definition in Phase 2 and synthesis in Phase 3.*

#### **5. TECHNICAL IMPLEMENTATION DECISIONS (Academic Engineering Boundaries)**

* **TD-01:** The target prototype will operate purely as an isolated React Client-Side Application using local state persistence (`IndexedDB` / `localStorage`) and mock API handlers to simulate backend services without exposing, connecting to, or querying live government enterprise systems.
* **TD-02:** Synthetic mock data will strictly follow authentic Sri Lankan formatting rules (e.g., standard 9-digit + V/X or 12-digit NIC formats, standard vehicle registration formats) using non-PII, fully synthetic records.

---

### **4. Research Questions Carried Forward to Phase 2**

```
+---------------------------------------------------------------------------------------------------+
|                            Phase 2 Research Investigation Backlog                                 |
+---------+-------------------------------------------------------------+---------------------------+
| ID      | Unresolved Research Question                                | Primary Target Source     |
+---------+-------------------------------------------------------------+---------------------------+
| RQ-2.1  | What is the active quota reset schedule (Sat midnight vs.   | GIC / Official Bulletins  |
|         | Mon midnight) and quota allocation logic in 2026?           |                           |
+---------+-------------------------------------------------------------+---------------------------+
| RQ-2.2  | What institution currently maintains and operates the backend| Technical Documentation / |
|         | NFP infrastructure and SMS gateways?                        | Official Statements       |
+---------+-------------------------------------------------------------+---------------------------+
| RQ-2.3  | What physical and environmental factors most frequently     | Field Reports / User      |
|         | disrupt QR scanning efficiency at the pump?                 | Observational Data        |
+---------+-------------------------------------------------------------+---------------------------+
| RQ-2.4  | How do low-literacy users navigate digital registration, and | Field Interviews /        |
|         | what secondary support networks do they utilize?            | Secondary User Studies    |
+---------+-------------------------------------------------------------+---------------------------+
| RQ-2.5  | What network performance constraints (latency/offline gaps) | Network Infrastructure    |
|         | impact rural vs. urban pump station devices?                | Benchmarks                |
+---------+-------------------------------------------------------------+---------------------------+

```

---

### **Phase 1 Sign-Off Checklist**

* [x] **Taxonomy Discipline:** All claims categorized under Evidence, Inference, Research Hypothesis, or Technical Decision.
* [x] **No Unverified Claims as Fact:** Operational factors (glare, damaged prints, 3G blackspots, OTP latency, hardware specs, third-party reliance) reclassified as Research Hypotheses (RH-01 through RH-06).
* [x] **Historical vs. Current Distinction:** Legacy 2022 ICTA context tagged as historical evidence (E-01 through E-04), with current system behavior marked for Phase 2 verification.
* [x] **Quota Schedule Accuracy:** E-03 explicitly documents the historical Monday-Sunday cycle alongside the current GIC Saturday reset notice, removing unverified current assumptions.
* [x] **Inference Boundaries:** I-01 and I-02 rephrased to establish operational dependencies without asserting unproven outcomes (e.g., abandonment, specific physical causes).
* [x] **No Premature Solutions:** Solution-level Design Hypotheses removed from Phase 1.
* [x] **Scope Boundaries Preserved:** TD-01 and TD-02 maintained to define the React MVP prototype scope and synthetic non-PII data constraints.
* [x] **Actor Accuracy:** ICTA and operational actors framed accurately without unverified assumptions about active backend systems or current security presence.
* [x] **Phase 2 Handover:** Unresolved research questions formally logged into the Phase 2 Investigation Backlog.