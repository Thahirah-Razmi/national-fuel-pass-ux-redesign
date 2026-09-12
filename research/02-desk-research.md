# Phase 2 — Research & Discovery
## Desk Research & Research Planning

**Project:** Redesigning Sri Lanka's National Fuel Pass (NFP)
**Research Stage:** Phase 2
**Document Type:** Research Execution Record
**Status:** Desk Research Completed; Field Research Planned

---

### **Pass 1: Current-State Official Documentation Audit**

This pass evaluates live, verified government and administrative portals governing the active National Fuel Pass (NFP) infrastructure (`fuelpass.gov.lk` and `fuelpass.gic.gov.lk`). It establishes the baseline rules, data validation constraints, and operational mechanisms currently mandated by the Ministry of Power & Energy and the Government Information Center (GIC).

```
+---------------------------------------------------------------------------------------------------+
|                                Pass 1 Execution Summary Matrix                                    |
+-----------------------------------+---------------------------------------------------------------+
| Target Sources                    | Active fuelpass.gov.lk portal, GIC notice board, ICTA notices |
| Key Focus                         | Verification logic, quota rules, schema fields, recovery flows|
| Epistemological Output            | Documented Evidence (E-05 through E-12)                       |
+-----------------------------------+---------------------------------------------------------------+

```

---

### **1. Primary Verification & Validation Rules**

Official portal documentation specifies strict input parameters and cross-validation rules required to establish a vehicle profile:

* **Identitifier Binding (1:1 Constraint):** Registration strictly enforces a unique 1:1 pairing: one vehicle permit can be associated with only **one NIC/Passport/BRN** and **one mobile phone number** at a time.
* **Chassis Number Strict Matching:** Chassis numbers must be entered **case-sensitively** and exactly as printed on the Certificate of Registration of Motor Vehicles. Incorrect case or missing characters result in validation rejection.
* **Legacy Registration Plate Formatting ("Sri" Standard):** Vehicle registration numbers containing historical "Sri" characters (e.g., `3 Sri - 1234`) require stripping the letters and entering only numerical groups (e.g., `3 1234`).
* **Institutional/Business Registration (BRN):** Commercial fleets and government ministry vehicles use a Business Registration Number (BRN) pathway. Multiple vehicles can be linked to a single mobile number under a BRN by generating a consistent institutional institution code.
* **Ownership Verification Decoupling:** Registration *does not* require the name or address on the NIC to match the registered owner details on the vehicle's Certificate of Registration during initial setup.

---

### **2. System Quota Reset & Allocation Mechanics**

```
+---------------------------------------------------------------------------------------------------+
|                              Official Quota Allocation Parameters                                 |
+-----------------------+---------------------------------------------------------------------------+
| Active Reset Window   | Weekly quota reset occurs strictly at 12:00 AM (midnight) on Saturday.|
| Carry-over Policy     | Unused weekly fuel allowances expire at reset and do not roll over.|
| Vehicle Categorization| Fixed volume allocations strictly assigned by DMT vehicle class:           |
|                       | • Motorcycles: 5 Liters                                                   |
|                       | • Motor Cars & Three-Wheelers: 15 Liters                                  |
|                       | • Vans: 40 Liters | Buses: 60 Liters | Lorries: 200 Liters                   |
+-----------------------+---------------------------------------------------------------------------+
| Foreigner / Tourist   | Passport-based registration pathway assigning temporary QR permits. |
+-----------------------+---------------------------------------------------------------------------+

```

---

### **3. Documented Exception & Profile Recovery Flows**

Official notices posted on `fuelpass.gic.gov.lk` document structural changes made to resolve profile lockouts:

* **Profile Override / Ownership Transfer Mechanism:** Citizens with valid ownership documents can invoke a "Vehicle Registration" override feature. Entering the vehicle and chassis number triggers a check allowing the new owner to view and remove a previous owner's linked phone number.
* **Deactivation Before Number Change:** Users planning to change phone numbers must log into their existing profile via SMS OTP and select **"Delete Profile"** before re-registering under a new mobile number.
* **Assistance & Dispute Escalation Channels:**
* Primary helpline: Government Information Center via shortcode `1919`.
* Technical escalation channel: Dedicated official WhatsApp support desk (`076 013 9886`) handling manual document submissions (NIC, Revenue License, Certificate of Registration) for registration dispute resolution.



---

### **4. Epistemological Evidence Ledger (Pass 1 Additions)**

**[EVIDENCE] (Direct Empirical Facts from Portal Audit)**

* **E-05:** Active system documentation confirms weekly quota resets occur at 12:00 AM (midnight) on Saturday. *(Resolves discrepancy logged in Phase 1 E-03).*
* **E-06:** Official registration inputs require Chassis Number matching, case sensitivity, and specific "Sri" plate numerical stripping rules.
* **E-07:** Multiple vehicle profiles under a single mobile number are permitted exclusively via the Business Registration Number (BRN) pathway using custom institutional codes.
* **E-08:** The active system includes a self-service profile deletion and vehicle registration transfer override mechanism.
* **E-09:** Manual registration dispute escalations require document submission (NIC, Revenue License, Registration Certificate) via a dedicated GIC WhatsApp desk (`076 013 9886`) or email.

**[INFERENCES] (Logical Deductions from Documentation)**

* **I-04:** The manual escalation workflow via WhatsApp/email indicates that automated DMT database cross-matching cannot resolve all ownership transfer edge cases without human verification.
* **I-05:** The requirement to log in via an old phone number's SMS OTP to delete a profile creates a complete self-service deadlock for users who lose access to their original SIM card, forcing them into manual support queues.

---

### **Pass 1 Sign-Off & Next Steps**

The current-state official documentation audit is complete. Unresolved questions RQ-2.1 and RQ-2.2 from Phase 1 are now resolved with verified evidence.

---

### **Pass 2: Historical & Archival Evidence Audit (Revised)**

This pass evaluates historical releases and documented evidence from the 2022–2023 National Fuel Pass rollout while explicitly isolating current portal availability and unverified claims.

```
+---------------------------------------------------------------------------------------------------+
|                                Pass 2 Execution Summary Matrix                                    |
+-----------------------------------+---------------------------------------------------------------+
| Target Sources                    | ICTA releases (2022), Ministry of Power & Energy notices,     |
|                                   | Official press releases (Daily FT, Daily News, Daily Mirror)   |
| Key Focus                         | Verified 2022–2023 metrics, portal status, 2022 vs 2026 state |
| Epistemological Output            | Documented Historical Evidence (E-10 through E-14)            |
+-----------------------------------+---------------------------------------------------------------+

```

---

### **1. Historical System Context (2022–2023 Rollout & Discontinuation)**

* **Official Launch:** Announced on July 16, 2022, by the Ministry of Power & Energy (MoPE) alongside tech partner Information and Communication Technology Agency of Sri Lanka (ICTA).
* **Countrywide Rollout:** Full countrywide implementation enforced on August 1, 2022, across CEYPETCO and LIOC stations.
* **Official Discontinuation:** Discontinued with effect from midnight, September 1, 2023, by Power and Energy Minister Kanchana Wijesekera following supply stabilization.

---

### **2. Documented Historical Metrics & Technical Responsibilities**

```
+---------------------------------------------------------------------------------------------------+
|                              Verified Historical Parameters & Metrics                             |
+-----------------------+---------------------------------------------------------------------------+
| Peak Registrations    | Reached 6.5 million registered users by late July 2023.                  |
| Launch Velocity       | Over 1,000,000 registrations recorded within the first 24 hours.          |
| Station Participation | 1,060 filling stations adopted the QR system during initial August 2022   |
|                       | nationwide rollout.                                                       |
| Transaction Scale     | Exceeded 1.1 million transactions conducted via QR in a single day        |
|                       | during initial August 2022 rollout.                                       |
| Private Sector Role   | Dialog Axiata and MillenniumIT ESP partnered with ICTA to design and      |
|                       | deploy the system infrastructure pro bono.                                |
| Historical Reset      | Automated quota refresh occurred every Sunday at midnight (Monday to      |
|                       | Sunday cycle).                                                            |
+-----------------------+---------------------------------------------------------------------------+

```

---

### **3. Comparative Status Matrix: Historical vs. Current vs. Unknown**

```
+---------------------------------------------------------------------------------------------------+
|                        System State Comparison & Status Matrix                                    |
+--------------------------+------------------------------+--------------------------+--------------+
| Feature / Parameter      | Historical (2022–2023)       | Current (2026 Portal)    | Status       |
+--------------------------+------------------------------+--------------------------+--------------+
| Active Fuel Rationing    | Mandated island-wide         | Discontinued (Sep 2023)  | HISTORICAL   |
| Weekly Reset Schedule    | Sunday Midnight              | Saturday Midnight (GIC)  | HISTORICAL   |
| Portal Operations        | Live registration portal     | Active support / info    | CURRENT      |
|                          |                              | portal                   |              |
| Transaction Server       | Active real-time scanning    | Operational state        | UNKNOWN      |
| Availability             | backend                      | unverified               |              |
| Live DMT API Integration | Active real-time cross-check | Active integration status| UNKNOWN      |
| Status                   | with vehicle database        | unverified               |              |
| Active Station Scanner   | Mobile app used by pump      | Active usage status      | UNKNOWN      |
| App Execution            | operators                    | unverified               |              |
| Fuel Import Expenditure  | Unverified import reduction  | Unverified historical    | UNKNOWN      |
| Impact (USD 500M->230M)  | numbers                      | claim                    |              |
+--------------------------+------------------------------+--------------------------+--------------+

```

---

### **4. Epistemological Evidence Ledger (Pass 2 Additions)**

**[EVIDENCE] (Direct Empirical Facts & Authoritative Sources)**

* **E-10 (Historical):** The National Fuel Pass QR rationing system was officially discontinued on September 1, 2023.
*Source:* Ministry of Power & Energy Press Release / Daily News, *"QR not needed for fuel now"*, Published Sept 2, 2023.
* **E-11 (Historical):** Total system registration reached 6.5 million users, with 1 million registering within the first 24 hours of launch.
*Source:* Ministry of Power & Energy Statement / Daily Mirror, *"Tally of those registered for Fuel Pass QR Code tops 6.5 mn"*, Published July 29, 2023.
* **E-12 (Historical):** Over 1,060 stations adopted the QR system and completed 1.1 million daily transactions during initial rollout.
*Source:* Statement by Minister Kanchana Wijesekera / Daily FT, *"National Fuel Pass QR system rollout countrywide today"*, Published Aug 1, 2022.
* **E-13 (Historical):** Primary technology architecture was built and deployed pro bono by Dialog Axiata PLC and MillenniumIT ESP in coordination with ICTA.
*Source:* ICTA Official Announcement / Media Release, *"National Fuel Pass Development Partners"*, July 2022.
* **E-14 (Historical):** Original 2022 quota allocations operated on a weekly cycle refreshing every Sunday at midnight.
*Source:* ICTA Official FAQ Documentation, *"What is my fuel quota allocation per vehicle?"*, Published Aug 2, 2022.

**[INFERENCES] (Logical Deductions)**

* **I-06:** The evolution from initial in-person administrative transfer workflows (2022) to self-service profile deletion and registration overrides on the portal suggests that vehicle ownership transitions and profile lockouts were an operational issue during the system's active lifecycle. The exact extent and root causes of these changes require further research.
* **I-07:** While fuel rationing is currently discontinued, the `fuelpass.gov.lk` and `fuelpass.gic.gov.lk` portals remain active as informational and support portals for public reference.

---

### **5. Summary of Claims Remaining UNKNOWN or Requiring Further Research**

1. **Transaction & Backend Integration Status (UNKNOWN):** Whether the live transaction servers, mobile scanner app APIs, and real-time DMT database validation interfaces are currently active or dormant.
2. **Fuel Import Expenditure Claim (UNVERIFIED):** The specific claim that the system reduced monthly fuel import bills from USD 500 million to USD 230 million lacks direct confirmation in official government audit documentation and remains unverified.
3. **93% Station Adoption Peak (UNVERIFIED):** While 1,060 stations were documented during initial launch, the specific claim of a 93% island-wide station adoption peak requires primary audit confirmation.
4. **Current Hardware & Network Baselines at Fuel Stations (UNVERIFIED):** Physical device conditions, camera scanning capabilities, and connectivity constraints at pump stations remain to be investigated in field research passes.

---

### **Pass 2 Sign-Off & Next Steps**

The revised Historical & Archival Evidence Audit is complete with verified primary citations. Unverified claims are categorized under UNKNOWN or marked for future research passes.

---

### **Pass 3: User Experience & Reported Problems Audit (Revised & Audit-Corrected)**

This pass evaluates documented operational conditions, policy mandates, and reported system behaviors. In strict compliance with the epistemological protocol, all findings distinguish between **(a) direct empirical facts established by authoritative sources**, **(b) logical inferences**, and **(c) unverified user impacts/hypotheses reserved for field research**.

---

### **1. Categorized Empirical Audit Findings**

#### **A. Registration, Onboarding & Identity Validation**

* **E-15 (Historical & Current): Documented Ownership Validation Deadlock on Transfers**
* *(a) Direct Source Fact:* Official releases from the Ministry of Power & Energy and CPC state that vehicle registration cross-references identity numbers against Department of Motor Traffic (DMT) records. Motorists attempting to register vehicles purchased without completed legal transfer of ownership encounter validation failures due to identity mismatches.
* *(b) Reasonable Inference:* Automated DMT database validation fails when vehicle sales remain legally unrecorded, preventing new possessors from completing self-service registration.
* *(c) What Remains Unknown:* The exact percentage of national motorists affected by un-transferred vehicle sales.
* *Affected Group:* Unregistered vehicle possessors, second-hand vehicle buyers.
* *Source & Date:* Digital Economy Ministry Statement / Ceylon Petroleum Corporation (CPC) Release; *The Morning*, March 19, 2026; *Daily Mirror*, March 16, 2026.
* *URL:* `[https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp](https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp)`


* **E-16 (Historical): Documented Case-Sensitivity & Formatting Rules for Inputs**
* *(a) Direct Source Fact:* ICTA official documentation mandates that chassis numbers must be entered with exact case sensitivity, and legacy "Sri" license plate numbers require numerical stripping of letter characters for validation to succeed.
* *(b) Reasonable Inference:* Deviations from strict input formatting result in automated system rejections during registration.
* *(c) What Remains Unknown:* The frequency of input validation errors caused by user error versus system failure.
* *Affected Group:* Onboarding vehicle owners.
* *Source & Date:* ICTA Official FAQ Notice, August 02, 2022; *Daily Mirror*, July 16, 2022.
* *URL:* `[https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass](https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass)`


* **E-17 (Historical & Current): Documented Server Infrastructure & OTP Operational Parameters**
* *(a) Direct Source Fact:* Official statements document server capacity configurations designed to handle surges exceeding 30,000 requests/hour, alongside mandatory SMS-based OTP verification requirements during onboarding.
* *(b) Reasonable Inference:* SMS delivery mechanisms introduce an external technical dependency on telecommunication network infrastructure during high-volume registration periods.
* *(c) What Remains Unknown:* The exact failure rates, delivery latency metrics, or panic levels caused by OTP delays during peak traffic.
* *Affected Group:* Registering citizens, onboarding users.
* *Source & Date:* Managing Director CPC Release / *The Morning*, March 19, 2026; ICTA FAQ, August 02, 2022.
* *URL:* `[https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp](https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp)`



---

#### **B. Profile Management, Lost SIMs & Delegation**

* **E-18 (Historical): Documented In-Person Requirement for Profile Deletion via Lost SIMs**
* *(a) Direct Source Fact:* Initial ICTA system documentation stipulated that changing a registered mobile phone number required executing a "Delete Profile" command using an OTP sent to the original phone number. Users without access to the original SIM were directed to visit designated administrative offices in person.
* *(b) Reasonable Inference:* Losing access to a registered SIM card created a self-service profile lockout under the initial 2022 architecture.
* *(c) What Remains Unknown:* The total number of citizens who underwent in-person administrative profile resets.
* *Affected Group:* Citizens with lost, expired, or disconnected mobile numbers.
* *Source & Date:* ICTA Official FAQ Notice, August 02, 2022.
* *URL:* `[https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass](https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass)`



---

#### **C. Station Operations, Dispensing Policies & Exceptions**

* **E-20 (Current): Documented Zero-Tolerance Policy for Non-QR Dispensing**
* *(a) Direct Source Fact:* Statements from the Petroleum Dealers’ Association and CPC confirm a policy mandate prohibiting filling stations from dispensing fuel without scanning a valid QR credential.
* *(b) Reasonable Inference:* Station operators are legally and operationally restricted from using discretionary manual overrides at the pump.
* *(c) What Remains Unknown:* The frequency of emergency exceptions, medical exemptions, or station-level compliance failures.
* *Affected Group:* Pump attendants, station owners, fueling motorists.
* *Source & Date:* Filling Station Owners' Association Statement / *The Morning*, March 19, 2026.
* *URL:* `[https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp](https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp)`


* **E-21 (Historical & Current): Documented Prohibition of Container Dispensing at Standard Pumps**
* *(a) Direct Source Fact:* Ministry of Power & Energy regulations prohibit fuel dispensing into external cans, bottles, or portable containers at standard retail pump lanes.
* *(b) Reasonable Inference:* Users requiring fuel for off-road or non-vehicular equipment must operate under separate regulatory or commercial guidelines.
* *(c) What Remains Unknown:* The extent to which agricultural, fishing, or generator operators experience operational disruption due to container restrictions.
* *Affected Group:* Station attendants, commercial equipment operators.
* *Source & Date:* CPC Press Briefing / *Daily Mirror*, March 16, 2026.
* *URL:* `[https://www.dailymirror.lk/breaking-news/Security-at-fuel-station-to-maintain-order-DIG/108-335394](https://www.dailymirror.lk/breaking-news/Security-at-fuel-station-to-maintain-order-DIG/108-335394)`



---

#### **D. Specialized Groups & Escalation Channels**

* **E-22 (Historical & Current): Documented Parallel Manual Allocation Schemes**
* *(a) Direct Source Fact:* Official releases document the establishment of dedicated, non-portal quota administration channels (e.g., direct supply via SLTB bus depots, regional divisional secretariat allocation logs) for public transport and commercial fleets.
* *(b) Reasonable Inference:* Standard automated vehicle-category allocations were supplemented by specialized administrative frameworks to manage sector-specific fuel distribution.
* *(c) What Remains Unknown:* The efficiency, total volume, or operational friction associated with these parallel allocation systems.
* *Affected Group:* Public transport operators, commercial fleet managers, regional administrators.
* *Source & Date:* CPC Statement / *Daily Mirror*, March 16, 2026.
* *URL:* `[https://www.dailymirror.lk/breaking-news/Security-at-fuel-station-to-maintain-order-DIG/108-335394](https://www.dailymirror.lk/breaking-news/Security-at-fuel-station-to-maintain-order-DIG/108-335394)`


* **E-23 (Current): Documented Deployments of Assisted Messaging Support Channels**
* *(a) Direct Source Fact:* Government notices document active official WhatsApp support lines (e.g., `076 013 9886`) dedicated to receiving photos of identity cards and registration certificates for registration assistance.
* *(b) Reasonable Inference:* Manual document review channels are maintained to handle registration edge cases that cannot be processed via self-service web validation.
* *(c) What Remains Unknown:* Average response latency, resolution rates, or data retention policies of messaging-based support desks.
* *Affected Group:* Motorists experiencing registration errors, support desk operators.
* *Source & Date:* Digital Economy Ministry Announcement / *The Morning*, March 19, 2026.
* *URL:* `[https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp](https://www.themorning.lk/articles/Ey8yG7e7dgWKG9rMCphp)`



---

### **2. Epistemological Classification Matrix**

```
+---------------------------------------------------------------------------------------------------+
|                            User & Operational Finding Classification                              |
+------------------------------------+------------------------+-------------------+-----------------+
| Item / Topic                       | Target Group           | Epistemological   | Status          |
|                                    |                        | Tag               |                 |
+------------------------------------+------------------------+-------------------+-----------------+
| Transfer ownership DMT deadlock    | Used Vehicle Buyers    | E (Evidence)      | Hist / Current  |
| Case-sensitivity & chassis input   | Onboarding Motorists   | E (Evidence)      | Historical      |
| SMS OTP technical dependency       | Registering Citizens   | E (Evidence)      | Hist / Current  |
| In-person profile deletion rule    | Mobile Switchers       | E (Evidence)      | Historical      |
| Zero-tolerance QR policy           | Station Operators      | E (Evidence)      | Current         |
| Container dispensing prohibition   | Retail Fuel Customers  | E (Evidence)      | Hist / Current  |
| Parallel public transit quotas     | Commercial Transit     | E (Evidence)      | Hist / Current  |
| WhatsApp document review channels  | Support Seekers        | E (Evidence)      | Current         |
| Third-party registration dependence| Low-Literacy Users     | RH (Research Hypo)| UNKNOWN         |
| Screen glare / optical camera cause| Pump Attendants        | RH (Research Hypo)| UNKNOWN         |
| Emergency medical QR exceptions    | Emergency Travelers    | RH (Research Hypo)| UNKNOWN         |
| Container policy impact on farming | Farmers / Fishermen    | RH (Research Hypo)| UNKNOWN         |
+------------------------------------+------------------------+-------------------+-----------------+

```

---

### **3. Audit-Corrected Inferences**

* **I-08:** The existence of manual escalation channels for ownership-related registration cases suggests that automated database validation does not resolve every case through the standard self-service registration pathway.
* **I-09:** Strict QR-based verification creates a potential operational dependency on the user's ability to present a valid QR credential at the point of service. The impact of battery failure, device failure, connectivity loss, or other access interruptions requires field investigation.
* **I-10:** Self-service registration models that rely on web interfaces and SMS verification assume basic digital access and device literacy; the extent to which non-digital users require third-party assistance remains an open research question.

---

### **4. Summary of UNKNOWN Items & Research Hypotheses Carried Forward**

```
+---------------------------------------------------------------------------------------------------+
|                                  Evidence Gaps & UNKNOWN Items                                    |
+-----------------------------------+---------------------------------------------------------------+
| Third-Party Registration          | UNKNOWN: Whether non-smartphone or digitally excluded         |
| Dependence & Privacy Risks        | citizens relied on commercial shops or third parties, and     |
|                                   | whether this created PII exposure, requires field research.   |
| Technical Causes of QR Failures   | UNKNOWN: Physical camera lens specs, ambient glare, and screen|
|                                   | brightness impact on station scanning failure rates.          |
| Hardware & Network Baselines      | UNKNOWN: The exact device profiles (OS version, RAM, camera)  |
|                                   | and cellular latency experienced at rural vs urban stations.  |
| Disruption from Device / Battery  | UNKNOWN: Actual frequency and operational handling of dead    |
| Failures                          | batteries or cracked screens at the pump.                     |
| Actual Impact of Container Policy | UNKNOWN: Empirical assessment of how off-road and agricultural|
|                                   | users navigate container dispensing restrictions.            |
+-----------------------------------+---------------------------------------------------------------+

```

---

### **Pass 3 Sign-Off & Handover**

Pass 3 is now fully audited, removing all unverified causal assertions and reclassifying speculative impacts as Research Hypotheses or UNKNOWN items. No UI designs, personas, wireframes, or solutions have been generated.

### **Pass 4: Stakeholder & Operational Research (REVISED AUDIT)**

This pass evaluates the human, organizational, and technical actors within the National Fuel Pass (NFP) ecosystem. In strict adherence to epistemological guidelines, every claim distinguishes between:

* **(E) Direct Empirical Evidence:** Facts explicitly documented by authoritative government, GIC, ICTA, or ministry sources.
* **(I) Reasonable Inference:** Logical extensions derived directly from documented baseline policies or operational parameters.
* **(RH / UNKNOWN) Research Questions & Hypotheses:** Plausible technical, physical, or behavioral conditions reserved for empirical field validation.

---

### **1. Revised Stakeholder Operational Analysis Matrix**

#### **A. Citizens & Vehicle Owners**

```
+-----------------------------------------------------------------------------------------------------------------------------+
| Actor                 | Responsibility          | Evidence (E)          | Dependency (I)       | Constraint / Unknowns       |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Primary Registered    | Executes self-service   | Historical (2022)     | Valid NIC/Passport/  | Constraint: Loss of original|
| Vehicle Owners        | registration via web    | ICTA FAQ; Current     | BRN, mobile phone    | SIM blocks self-service     |
|                       | portal; presents QR     | (2026) GIC Portal.    | for OTP, matching    | profile deletion/edits (E). |
|                       | credential at station   |  | DMT records.| UNKNOWN: Physical screen    |
|                       | for fuel issuance.      |                       |                      | glare, ambient light impact |
|                       |           |                       |                      | on pump scanning. (RH)      |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Second-Hand /         | Attempts registration   | Current (2026) GIC    | Manual review path   | Constraint: Previous owner  |
| Unrecorded Transfer   | or profile updates      | Notice; Historical    | or previous owner's  | registration blocks self-   |
| Owners                | using physical          | ICTA FAQ.             | willingness to remove| service access until document|
|                       | vehicle documents.      |  | vehicle link.        | validation occurs (E).      |
|                       |    |                       | | UNKNOWN: Total national     |
|                       |                         |                       |                      | volume of un-transferred     |
|                       |                         |                       |                      | registered vehicles. (RH)   |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Motorcyclists & Light | Obtains fuel within     | Official Ministry &   | Fixed weekly auto-   | Discrepancy (E): Quota cycle|
| Vehicle Drivers       | weekly assigned quotas  | ICTA Schedules        | reset schedule.      | operated Sunday midnight    |
|                       | via QR presentation.    | (2022); GIC Portal    | | (2022); shifts|
|                       |           | (2026).               |                      | to Saturday midnight (2026) |
|                       |                         |  |                      |. UNKNOWN: Rate|
|                       |                         |                       |                      | of paper print usage. (RH)  |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Three-Wheeler Users   | Registers vehicle and   | Current (2026) GIC    | Administrative tier  | Discrepancy (E): GIC notes  |
| (Commercial / Special)| claims assigned quota.  | Notice; Historical    | classification       | display showing 14L vs 15L  |
|                       |    | ICTA Guidelines.      | systems.             | allocation.   |
|                       |                         |  |                      | UNKNOWN: Root cause of display|
|                       |                         |                       |                      | vs. policy mismatch. (RH)   |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Commercial Fleet      | Accesses fuel supply via| Official Ministry &   | Administrative       | Constraint: Operating under |
| Operators / Public    | standard or specialized | CPC Public Notices.   | quota distribution   | parallel or manual quota    |
| Transport             | administrative quota    |                       | mechanisms for       | logs outside standard web   |
|                       | arrangements.           |                       | essential services.  | self-service portal (E).    |
|                       |                         |                       |                      | UNKNOWN: Specific digital   |
|                       |                         |                       |                      | architecture for fleets. (RH)|
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+

```

#### **B. Station-Level Operational Staff**

```
+-----------------------------------------------------------------------------------------------------------------------------+
| Actor                 | Responsibility          | Evidence (E)          | Dependency (I)       | Constraint / Unknowns       |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Fuel Station          | Scans citizen QR code;  | CPC Station Owner     | Functional mobile    | Constraint: Strictly        |
| Attendants (Pumpers)  | validates quota         | Guidelines (2026);    | device; active NFP   | prohibited from dispensing  |
|                       | availability; operates  | Ministry Releases.    | Fuel Station App.    | fuel without QR validation  |
|                       | pump.|  |        | (E). UNKNOWN: |
|                       |                         |                       |                      | Hardware specs, device      |
|                       |                         |                       |                      | ownership, camera autofocus |
|                       |                         |                       |                      | issues, weather impact. (RH)|
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Station Managers /    | Oversees daily station  | CPC / Petroleum       | Connectivity to      | Constraint: Enforces zero-  |
| Owners                | operations and fuel     | Dealers Statements    | Central System;      | tolerance non-QR dispensing |
|                       | distribution compliance.| (2026).               | Fuel Station App     | policy at retail pumps (E)  |
|                       |    |         | maintenance.         |. UNKNOWN:     |
|                       |                         |                       |        | Network conditions, queue   |
|                       |                         |                       |                      | procedures, legal liability. |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+

```

#### **C. Government, System Administrators & Service Partners**

```
+-----------------------------------------------------------------------------------------------------------------------------+
| Actor                 | Responsibility          | Evidence (E)          | Dependency (I)       | Constraint / Unknowns       |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| ICTA (Information &   | Historically documented | ICTA Official Portal  | Inter-agency data    | Status: Historically        |
| Communication         | technology partner and  | Notices (2022); Site Footer   | SMS Gateway delivery |. UNKNOWN:     |
|                       | (2022).   | (2026). | integrations.        | Current operational         |
|                       |                         |                       |                      | ownership, backend control, |
|                       |                         |                       |                      | active API maintainer. (RH) |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Department of Motor   | Authoritative national  | Historical ICTA FAQ;  | Internal database    | Status: System cross-       |
| Traffic (DMT)         | registry of vehicle     | GIC Notices (2026).   | maintenance and      | validates input data against|
|                       | ownership and technical |  | data consistency.    | DMT records (E)|
|                       | specs.    |                       |                      | UNKNOWN: Synchronization    |
|                       |                         |                       |                      | latency, API limits, paper  |
|                       |                         |                       |                      | record propagation. (RH)    |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| Government            | Tier-1/Tier-2 support;  | Current GIC Portal    | Availability of      | Documented Support (E):     |
| Information Center    | manages official        | Notices (2026).       | support personnel;   | WhatsApp support desk       |
| (GIC - 1919)          | WhatsApp resolution     |         | verification of user | (`076 013 9886`)|
|                       | desk (`076 013 9886`).  |                       | submitted documents. | UNKNOWN: Capacity, agent    |
|                       |           |                       |        | counts, exact response time |
|                       |                         |                       |                      | backlogs, admin rights. (RH)|
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+
| CPC / LIOC (Fuel      | Distributes fuel and    | Ministry Releases;    | Verified digital     | Status: Participates in     |
| Distributors)         | enforces retail quota   | CPC Station Portal    | quota tracking at    | fuel distribution & quota   |
|                       | policies..|
|                       | 1.1.4]                  |  | | UNKNOWN: Backend data       |
|                       |                         |                       |                      | pipelines, supply integration|
|                       |                         |                       |                      | API architecture. (RH)      |
+-----------------------+-------------------------+-----------------------+----------------------+-----------------------------+

```

---

### **2. Versioning & Schedule Discrepancies (Documented Finding)**

* **E-13 (Historical vs Current): Weekly Quota Reset Schedule Difference**
* *(a) Historical Fact (2022):* ICTA FAQ (Aug 2, 2022) explicitly specified: *"Fuel quota will be limited to a weekly cycle (Monday to Sunday)... refreshed for the new week every Sunday at midnight."*
* *(b) Current Fact (2026):* Official GIC Fuel Pass Portal explicitly states: *"Fuel Pass quotas will reset at 12:00 AM (midnight) on Saturday."*
* *(c) Reasonable Inference:* The operational administration adjusted the weekly cycle cutoff from Sunday midnight to Saturday midnight between 2022 and 2026.
* *(d) What Remains Unknown:* Specific policy rationale or technical system reason for the schedule adjustment.



---

### **3. Revised Service Ecosystem Interaction Map**

```
+---------------------------------------------------------------------------------------------------+
|                                  Service Ecosystem Interaction Map                                |
+---------------------+-----------------------+----------------------------------+------------------+
| Interface Boundary  | Interacting Actors    | Service Transfer / Information   | Status & Evidence|
|                     |                       | Requirement                      | Class            |
+---------------------+-----------------------+----------------------------------+------------------+
| Registration &      | Citizen <-> NFP       | NIC + Chassis + Vehicle Number   | E: Input format  |
| Validation Portal   | Portal <-> DMT        | cross-validation against DMT     | mandatory.  |
|                     | Records               | database.          | RH: DMT sync     |
|                     |                       |                                  | latency unknown. |
+---------------------+-----------------------+----------------------------------+------------------+
| Auth & OTP Gateway  | Citizen <-> Telecoms  | SMS OTP sent to mobile number    | E: Required for  |
|                     | / Gateway             | to confirm profile access.       | onboarding.|
|                     |                       |                    | RH: Network      |
|                     |                       |                                  | delays unknown.  |
+---------------------+-----------------------+----------------------------------+------------------+
| Pump Point          | Citizen <-> Attendant | Optical presentation of QR code; | E: Scanning /    |
| Verification        | <-> Station App       | validation against quota balance.| presentation     |
|                     |                       |             | mandatory. |
|                     |                       |                                  | RH: Glare / camera|
|                     |                       |                                  | causes unknown.  |
+---------------------+-----------------------+----------------------------------+------------------+
| Escalation & Support| Citizen <-> GIC L2    | Document submission via WhatsApp | E: Hotline &     |
| Desk                | WhatsApp Desk         | (`076 013 9886`) for support.    | WhatsApp active  |
|                     |                       |                    |. RH: Response|
|                     |                       |                                  | latency unknown. |
+---------------------+-----------------------+----------------------------------+------------------+

```

---

### **4. Systemic Themes (Evidence-Backed Categorization)**

#### **Theme A: Ownership & Registration Data Dependency**

* **Evidence:** ICTA (2022) and GIC (2026) documentation establish that vehicle registration requires exact cross-validation of NIC, Chassis Number, and Vehicle Number against DMT database records.
* **Inference:** Self-service registration cannot complete automatically if the user's input does not match current DMT records (e.g., in unrecorded private transfers or chassis entry typos).
* **Unknowns:** Rate of physical paper-to-digital record propagation, DMT API uptime, percentage of unrecorded vehicle sales nationally.
* **Research Implication:** Field research must evaluate how non-matching vehicle possessors navigate the manual escalation pathway to secure access.

#### **Theme B: QR Verification Reliability — Technical & Environmental Causes Unknown**

* **Evidence:** Government and CPC policies mandate that fuel shall not be dispensed without presenting a valid QR code. Station operators utilize the National Fuel Pass Station App to perform verification.
* **Inference:** Inability to scan or present a valid QR code prevents fueling under standard station operating conditions.
* **Unknowns:** Exact causes of scanning failures (e.g., optical glare, screen brightness, damaged displays, camera resolution, ambient lighting, cellular network latency).
* **Research Implication:** Direct station observation is required to determine the physical and environmental failure rate during scanning operations.

#### **Theme C: Support & Escalation Load**

* **Evidence:** Official government notices document the establishment of a WhatsApp support desk (`076 013 9886`) for resolving registration errors and vehicle document verification.
* **Inference:** Manual support channels are required to handle edge cases that fail automated self-service validation.
* **Unknowns:** Operational capacity per agent, response latency, daily ticket volume, internal backend administrative permissions.
* **Research Implication:** Quantitative sampling of escalation response times is necessary to evaluate the reliability of assisted registration.

---

### **5. Remaining Unknowns & Phase 3 Field Research Implications**

```
+---------------------------------------------------------------------------------------------------+
| Remaining UNKNOWN Items & Field Research Questions                                                |
+-----------------------------------+---------------------------------------------------------------+
| Item / Focus Area                 | Specific Research Question for Phase 3                        |
+-----------------------------------+---------------------------------------------------------------+
| Hardware & Attendant Baseline     | What device types, OS versions, and camera hardware are used  |
|                                   | by station attendants in urban vs. rural locations?           |
+-----------------------------------+---------------------------------------------------------------+
| Environmental QR Failure Rates    | What proportion of QR scanning delays stem from screen glare, |
|                                   | damaged displays, or low ambient light at pump lanes?          |
+-----------------------------------+---------------------------------------------------------------+
| Network Conditions at Stations    | What is the actual network latency and offline error rate     |
|                                   | experienced during peak fueling queue hours?                  |
+-----------------------------------+---------------------------------------------------------------+
| Support Desk Latency              | What is the real-world resolution timeframe for citizens       |
|                                   | submitting documents via the official WhatsApp hotline?        |
+-----------------------------------+---------------------------------------------------------------+
| Three-Wheeler Display Discrepancy | What causes the display discrepancy (14L vs 15L) noted in GIC |
|                                   | documentation for three-wheeler allocations?     |
+-----------------------------------+---------------------------------------------------------------+

```

---

### **6. Source List & Exploratory Materials**

#### **Authoritative Government & Official Sources**

1. **ICTA (Information and Communication Technology Agency of Sri Lanka):**
* *Frequently Asked Questions about the National Fuel Pass* (Aug 02, 2022).
URL: `[https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass](https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass)`
* *ICTA Institutional Role Update* (Feb 09, 2026).
URL: `[https://www.icta.lk/who-we-are/our-role](https://www.icta.lk/who-we-are/our-role)`


2. **GIC (Government Information Center Sri Lanka):**
* *National Fuel Pass Portal Notices & Quota Reset Policy* (Current 2026).
URL: `[https://fuelpass.gic.gov.lk/](https://fuelpass.gic.gov.lk/)`
* *Government Services Directory*.
URL: `[https://gic.gov.lk/](https://gic.gov.lk/)`


3. **Ceylon Petroleum Corporation (CPC):**
* *National Fuel Pass – Fuel Station Owners Notice* (Current 2026).
URL: `[https://ceypetco.gov.lk/national-fuel-pass-fuel-station-owners/](https://ceypetco.gov.lk/national-fuel-pass-fuel-station-owners/)`



#### **Exploratory / Non-Authoritative Sources (Retained for Context Only)**

* *Fuel Pass Registration Fix Guide (Video Walkthrough)*
URL: `[https://www.youtube.com/watch?v=k8He_Z6RI4k](https://www.youtube.com/watch?v=k8He_Z6RI4k)`
*(Note: Used solely as non-authoritative exploratory visual context regarding public user-facing interfaces; not cited for baseline facts).*

---

### **7. Pass 4 Audit & Approval Checklist**

* [x] **Strict Methodological Distinction:** Every claim explicitly classified as Evidence (E), Inference (I), or Research Question (RH / UNKNOWN).
* [x] **Quota Reset Schedule Corrected:** Documented historical reset (Sunday midnight) separated from current evidence (Saturday midnight).
* [x] **ICTA Role Corrected:** Historical role documented (2022); current operational ownership marked UNKNOWN.
* [x] **DMT Mechanism Claims Removed:** Real-time API, sync latency, and paper propagation reclassified as UNKNOWN / Research Questions.
* [x] **QR Failure Causes Neutralized:** Environmental/hardware claims (glare, focus, screen brightness) reclassified as UNKNOWN / Research Questions.
* [x] **Station Staffing Claims Removed:** Hardware ownership, personal phone usage, and legal liability claims removed or marked UNKNOWN.
* [x] **Three-Wheeler Discrepancy Corrected:** Documented 14L vs 15L discrepancy recorded; cause marked UNKNOWN.
* [x] **GIC Support Capacity Neutralized:** WhatsApp support desk documented; internal capacity and response time backlogs marked UNKNOWN.
* [x] **CPC/LIOC Architecture Neutralized:** Real-time data pipeline claims removed; supply architecture marked UNKNOWN.
* [x] **Systemic Themes Reclassified:** Structured under safe categories (Data Dependency, QR Reliability, Support Load).
* [x] **Zero Design Solutions:** No wireframes, personas, UI proposals, or technical solutions introduced.

# Pass 5 — Research Plan & Field Research Design

## Purpose

Pass 5 converts the findings and unresolved questions from Passes 1–4 into an empirical research plan.

The purpose is not to assume that previously identified problems are true for all users. Instead, this pass defines how those assumptions, reported problems, operational questions and system uncertainties will be investigated through primary research.

The research plan therefore acts as the bridge between desk research and later field research.

---

## 5.1 Research Principles

The research plan follows four principles:

### 1. Non-Fabrication

No interviews, survey responses, observations, usability results, stakeholder opinions, statistics or research findings will be fabricated.

Where research has not yet been conducted, the item will be explicitly labelled as **Planned**, **Proposed**, or **Unexecuted**.

### 2. Evidence Classification

Research information will be classified using the project's evidence framework:

* **E — Evidence:** directly observed, documented or verified information
* **I — Inference:** a logical interpretation derived from evidence
* **RH — Research Hypothesis:** an unverified condition requiring investigation
* **DH — Design Hypothesis:** a proposed design solution requiring validation
* **TD — Technical Decision:** an engineering implementation decision
* **UNKNOWN:** information that has not yet been established

### 3. Traceable Design Intent

Research findings must eventually connect to design decisions through the following chain:

**Research Evidence → Empirical Finding → Verified Pain Point → Service Requirement → Design Hypothesis → Design Decision → React Component**

No major design decision should be presented as a validated requirement unless it is supported by research evidence.

### 4. Contextual Fidelity

Research should consider the real environment in which the National Fuel Pass service operates, including:

* citizens and vehicle owners
* fuel station attendants
* station managers
* government stakeholders
* registration and ownership processes
* QR verification
* support and recovery
* language and accessibility
* connectivity and device conditions
* operational conditions at fuel stations

---

## 5.2 Research Scope

The research will investigate the following core areas.

### Core Research Areas

1. Registration and onboarding
2. Ownership transfer and account recovery
3. QR presentation and verification
4. Fuel quota visibility and comprehension
5. Support and escalation
6. Accessibility and digital literacy
7. Fuel station forecourt workflow

### Secondary Research Areas

1. Network, device and environmental conditions
2. Trust, security and transparency
3. Differences between vehicle categories
4. Exceptional operational cases
5. OTP and SMS behaviour
6. Fuel station infrastructure variations

These areas are research topics rather than confirmed problems.

---

## 5.3 Research Questions

The following questions were derived from the uncertainties identified during Passes 1–4.

### Registration and Ownership

**RQ-02.1 (RH):** How frequently do users encounter ownership or identity mismatches during vehicle registration, and how do they attempt to resolve them?

**RQ-02.2 (RH):** What information do users understand about ownership changes, previous owners and re-registration?

**RQ-02.3 (RH):** What recovery paths do users currently use when they cannot complete registration?

### QR Presentation and Verification

**RQ-03.1 (RH):** How do users actually present their QR code at fuel stations?

Possible observed methods include:

* active smartphone screen
* saved image or screenshot
* printed copy
* laminated copy
* another observed method

The research must observe actual behaviour rather than assume a particular QR presentation method.

**RQ-03.2 (RH):** What environmental or physical conditions appear to affect QR scanning?

**RQ-03.3 (RH):** What happens when QR verification fails?

**RQ-03.4 (RH):** How do users and station staff recover from unsuccessful verification attempts?

### Quota Understanding

**RQ-04.1 (RH):** Do users understand their available fuel quota and when it becomes available?

**RQ-04.2 (RH):** What information do users need in order to understand their remaining allocation?

### Support and Escalation

**RQ-05.1 (RH):** What support channels do users use when registration, QR verification or account recovery fails?

**RQ-05.2 (RH):** What information do users need before contacting support?

**RQ-05.3 (RH):** What types of cases appear to require escalation beyond normal self-service?

### Accessibility and Digital Literacy

**RQ-06.1 (RH):** How do users with different levels of digital literacy understand and complete Fuel Pass tasks?

**RQ-06.2 (RH):** What difficulties are experienced by users with limited access to smartphones, mobile data or digital services?

**RQ-06.3 (RH):** What language and accessibility requirements are important for different user groups?

### Fuel Station Workflow

**RQ-07.1 (RH):** What is the actual workflow followed by station staff during QR verification and fueling?

The research should observe, where possible:

* QR presentation
* QR scanning
* vehicle verification
* fueling
* payment
* transaction recording
* exception handling
* queue management

The exact workflow must be observed rather than assumed.

**RQ-07.2 (RH):** How long does a typical transaction take, and what factors contribute to variation?

**RQ-07.3 (RH):** How do station staff handle unreadable QR codes, verification failures, timeouts or connectivity problems?

**RQ-07.4 (RH):** What operational difficulties occur during periods of higher customer volume?

---

## 5.4 Proposed Research Participants

The research plan covers several user groups.

### Citizen / Vehicle Owner Groups

**A. Everyday Private Commuters**

Private vehicle owners using Fuel Pass for regular travel.

**B. Commercial and Daily-Income Drivers**

Users whose income may depend heavily on vehicle availability.

**C. Heavy Transport and Agricultural Operators**

Users operating larger or specialized vehicles.

**D. Low-Digital-Literacy, Non-Smartphone or Older Users**

Users who may require additional assistance when interacting with digital services.

**E. Temporary or Foreign Vehicle Users**

Users whose registration circumstances may differ from typical long-term vehicle ownership.

These groups are proposed research segments, not claims that each group experiences a specific problem.

### Fuel Station Participants

* pump attendants
* station managers or cashiers
* station owners or franchisees

### Government / System Stakeholders

Where access is feasible, research may also consider:

* Ministry of Power and Energy
* ICTA
* Department of Motor Traffic
* Government Information Center
* CPC / LIOC and relevant station-side stakeholders

The involvement of these stakeholders is subject to access and should not be assumed.

---

## 5.5 Proposed Research Methods

### Citizen Interviews

Semi-structured interviews will be used to understand:

* registration experiences
* ownership changes
* QR usage
* quota understanding
* support experiences
* accessibility
* digital literacy
* workarounds
* exceptional cases

Questions should remain neutral and avoid leading participants toward predetermined problems.

### Fuel Station Contextual Inquiry

Contextual inquiry will investigate actual station-side workflows.

Where permission is available, the researcher will observe:

* QR presentation
* scanning
* vehicle verification
* fueling
* transaction handling
* exception cases
* queue conditions
* device handling

### Forecourt Observation

Observation will focus on actual behaviour rather than assumptions.

The checklist may record:

* QR presentation method
* number of scan attempts
* approximate verification duration
* fueling duration
* observed device handling
* interaction between customer and attendant
* exception incidents
* environmental conditions

### Survey

A quantitative and qualitative survey may be conducted to identify broader patterns across a larger participant group.

Potential topics include:

* vehicle type
* smartphone access
* registration experience
* QR usage
* quota understanding
* support usage
* perceived difficulties
* feature priorities

### Usability Testing

Usability testing will be conducted later using the proposed prototype.

It may evaluate tasks such as:

* registration
* ownership mismatch recovery
* quota checking
* QR access
* account recovery
* station-side verification

Usability results must only be reported after actual testing has taken place.

---

## 5.6 Proposed Sampling

The following are proposed research targets rather than completed participant numbers.

### Citizen Qualitative Research

Approximately **26–33 participants** across the identified user groups.

### Fuel Station Research

Approximately **9–12 participants** across station roles.

### Total Qualitative Research

Approximately **35–45 participants**.

### Survey

Approximately **50–100 responses**.

These targets may be adjusted depending on access, participant availability and research saturation.

No target should be represented as an achieved sample until the research has actually been conducted.

---

## 5.7 Research Ethics and Privacy

The research will avoid collecting unnecessary sensitive information.

The following must not be used in prototypes, research demonstrations or publicly documented examples:

* real NIC numbers
* real vehicle registration numbers
* real chassis numbers
* real OTP codes
* real phone numbers
* real addresses
* passwords or authentication credentials

Synthetic information will be used for prototype testing.

Participation in research should be voluntary, with participants informed about:

* the academic purpose of the research
* how information will be used
* their right to withdraw
* how recordings and notes will be handled

Audio recordings, where used, should be deleted after transcript verification unless explicit consent is provided for longer-term academic storage.

---

## 5.8 Research Analysis Plan

Collected research data will be analysed using both qualitative and quantitative approaches.

### Qualitative Analysis

The process will include:

1. transcription and cleaning
2. initial coding
3. thematic grouping
4. affinity mapping
5. identification of recurring patterns
6. comparison across user groups
7. identification of contradictions
8. evidence synthesis

### Quantitative Analysis

Survey data may be aggregated to identify:

* frequency patterns
* common task difficulties
* feature priorities
* differences between user groups

Quantitative results must only be reported from actual collected responses.

### Contradiction Analysis

Interview responses and observations should not automatically be treated as interchangeable.

Interviews capture participants' reported experiences, perceptions, memories and interpretations.

Observations capture behaviour directly observed in context.

If the two sources contradict each other, the contradiction should be documented and investigated rather than automatically selecting one source as correct.

---

## 5.9 Triangulation

Major design-driving findings should, where feasible, be supported by more than one independent evidence source.

Potential sources include:

* citizen interviews
* station staff interviews
* contextual observations
* survey responses
* usability testing
* verified government documentation
* peer-reviewed research
* relevant industry documentation

Triangulation is intended to reduce the risk of designing around a single anecdotal experience.

---

## 5.10 Research Outputs

The completed research should eventually produce:

1. participant/user-group summaries
2. coded interview data
3. observation notes
4. survey results
5. affinity maps
6. validated pain points
7. user needs
8. journey maps
9. service blueprint inputs
10. research-backed design requirements
11. unresolved research questions

At this stage, these outputs remain **planned** unless the corresponding research has actually been conducted.

---

## 5.11 Research-to-Design Traceability

After field research is completed, findings should be converted into design requirements using the following structure:

| Research Evidence                       | Empirical Finding   | Verified Pain Point        | Service Requirement         | Design Hypothesis | Design Decision    |
| --------------------------------------- | ------------------- | -------------------------- | --------------------------- | ----------------- | ------------------ |
| Actual participant/observation evidence | Synthesized finding | Evidence-supported problem | Required service capability | Proposed solution | Implemented design |

This prevents design decisions from being presented as facts before they are validated.

---

## 5.12 Prioritization Framework

Once empirical research has been completed, identified requirements may be prioritized using MoSCoW:

### Must Have

Critical requirements supported by research and necessary for the core service experience.

### Should Have

Important improvements that significantly improve the experience but are not essential to the MVP.

### Could Have

Useful enhancements that can be considered if time and resources permit.

### Won't Have

Features intentionally excluded from the current MVP scope.

Examples such as offline QR resilience, multilingual improvements, quota breakdowns, notification features or history export should only be promoted to actual requirements if supported by research findings.

---

## 5.13 Current Research Status

| Research Activity                  | Status    |
| ---------------------------------- | --------- |
| Desk research                      | Completed |
| Current-state documentation review | Completed |
| Historical/system evolution review | Completed |
| Reported UX problem review         | Completed |
| Stakeholder/operational review     | Completed |
| Research plan                      | Completed |
| Citizen interviews                 | Planned   |
| Station staff contextual inquiry   | Planned   |
| Forecourt observation              | Planned   |
| Quantitative survey                | Planned   |
| Usability testing                  | Planned   |

The research activities marked **Planned** have not yet been executed and therefore must not be represented as completed evidence.

---

## 5.14 Remaining Unknowns

The following questions remain unresolved and require empirical investigation:

* How users actually present QR codes at stations
* Causes of QR scanning failures
* Actual station-side device and network conditions
* Actual transaction duration and workflow variation
* How often ownership mismatches occur
* How users recover from registration problems
* How frequently users require third-party assistance
* Accessibility barriers across language and digital-literacy groups
* Operational differences between station environments
* The current technical responsibility for backend and SMS infrastructure where not established by authoritative current documentation

These are intentionally retained as unknowns rather than converted into assumptions.

---

## 5.15 Pass 5 Conclusion

Pass 5 establishes the research plan required to validate the uncertainties identified during the desk-research phase.

Passes 1–4 established the documented current state, historical context, reported problems and stakeholder/system context.

Pass 5 converts those findings into research questions and a structured plan for empirical investigation.

The next phase is therefore:

**Desk Research → Field Research → Evidence Synthesis → Problem Definition → Service Design → Interaction Design → Visual Design → Prototype → Usability Testing → React MVP**

No field research findings are claimed at this stage because the empirical research has not yet been executed.
