# Stakeholder Analysis

## 1. Purpose

This document establishes a structured stakeholder model for the National Fuel Pass (NFP) redesign project.

Its purpose is to identify the human, operational, institutional, and technical actors connected to the NFP service; understand their documented roles and interactions; distinguish verified evidence from inference and research hypotheses; and identify areas requiring primary research.

The analysis is intended to inform subsequent problem definition, service requirements, service design, interaction design, and the React MVP proposal.

To maintain academic and research integrity, stakeholder statements are classified using the project's epistemological taxonomy:

* **E — Evidence:** Directly documented or independently verified information.
* **I — Inference:** A logical interpretation derived from available evidence.
* **RH — Research Hypothesis/Question:** An unverified condition requiring primary research.
* **DH — Design Hypothesis:** A proposed design direction requiring validation.
* **TD — Technical Decision:** An engineering decision made for the academic MVP.
* **UNKNOWN:** Information that has not been established.

No stakeholder interviews, surveys, or field observations have been conducted at this stage. Therefore, this document does not claim unverified stakeholder opinions, preferences, or experiences as findings.

---

## 2. Stakeholder Identification

Stakeholders were identified by examining the NFP service lifecycle, including:

1. Vehicle registration and onboarding
2. Identity and vehicle-data validation
3. QR-code generation and presentation
4. Fuel-station QR verification
5. Fuel allocation and quota management
6. Account recovery and ownership changes
7. Public support and escalation
8. Fuel-station operations
9. Government policy and administration
10. Vehicle-registration data dependencies

Stakeholders were identified from official current documentation, historical NFP documentation, and the service processes documented during desk research.

The stakeholder model therefore includes both direct users of the service and institutional actors that govern, support, operate, or provide data dependencies for the ecosystem.

---

## 3. Stakeholder Groups

For research purposes, stakeholders are grouped into four broad areas.

### Group 1 — Citizens and Vehicle Users

* Private vehicle owners
* Vehicle owners experiencing ownership transfers
* Users experiencing changed or lost contact numbers
* Commercial and daily-income vehicle users
* Heavy transport and agricultural vehicle users
* Users with potentially limited digital access or digital literacy

### Group 2 — Fuel-Station Operations

* Fuel-station attendants
* Fuel-station managers and owners
* Fuel distribution and retail-station ecosystem

### Group 3 — Support and Service Operations

* Government Information Centre (GIC)
* National Fuel Pass support functions

### Group 4 — Government and Technical Stakeholders

* Ministry responsible for energy/fuel policy
* Department of Motor Traffic (DMT)
* Information and Communication Technology Agency (ICTA), particularly its historical NFP role
* Ceylon Petroleum Corporation (CPC)
* Lanka IOC (LIOC)

Some groups represent user segments rather than formally separate organizations. These segments are included because their circumstances may affect how the service is experienced and therefore require research validation.

---

## 4. Stakeholder Profiles

### 4.1 Private Vehicle Owners / Citizens

**Role in Service**

Private vehicle owners are direct users of the NFP service who may register eligible vehicles, obtain a QR code, monitor their fuel allocation, and present the QR code when obtaining fuel.

**Evidence-Supported Interactions**

Historical NFP documentation records registration information including identity information, mobile number, vehicle number, and chassis number. Historical documentation also describes QR-based fuel authorization.

Current GIC documentation provides guidance for QR-code generation, verification problems, registration, and re-registration.

**Evidence-Supported Constraints**

Registration and verification depend on information and documents required by the service, including vehicle and ownership information.

**Research Questions**

* **RH-01:** How do users currently access and present their QR codes at fuel stations?
* **RH-02:** How well do users understand their available quota and quota-reset timing?
* **RH-03:** Which registration or recovery steps cause the greatest difficulty for users?
* **RH-04:** How do users respond when QR verification fails?

---

### 4.2 Vehicle Owners Experiencing Ownership Transfers or Changed Contact Details

**Role in Service**

These users represent important exception scenarios involving vehicle ownership changes, previous owners, changed contact numbers, or loss of access to a previously registered number.

**Evidence**

Current GIC documentation explicitly addresses ownership-transfer cases, previous-owner registrations, changed contact numbers, and re-registration.

The documentation also describes cases where existing registration information can prevent a new owner from completing registration without further action.

**Evidence-Supported Constraint**

The registration process can depend on vehicle and ownership information associated with existing records.

**Research Questions**

* **RH-05:** How frequently do users encounter ownership-related registration conflicts?
* **RH-06:** How clearly do users understand what they must do after purchasing a previously registered vehicle?
* **RH-07:** How do users recover access after changing or losing the registered mobile number?
* **RH-08:** What information or documentation do users expect to provide during recovery?
* **RH-09:** Where do users seek assistance when self-service recovery does not resolve the issue?

---

### 4.3 Commercial and Daily-Income Vehicle Users

**Role in Service**

Commercial and daily-income vehicle users depend on eligible vehicle fuel allocations as part of their transportation or commercial activity.

This includes vehicle categories such as three-wheelers and other commercial vehicle categories documented in government fuel-allocation information.

**Evidence-Supported Constraints**

Different vehicle categories have different allocation rules.

**Inference**

Because some users depend on vehicles for income-generating activities, fuel-access interruptions may have greater practical consequences for them than for occasional vehicle users.

This is an inference rather than a measured user outcome.

**Research Questions**

* **RH-10:** How do commercial users plan their activities around available fuel quota?
* **RH-11:** How do users respond when their expected fuel allocation cannot be accessed?
* **RH-12:** Do shared vehicles or multiple drivers create account-management difficulties?
* **RH-13:** How important is real-time quota visibility to commercial users?

---

### 4.4 Heavy Transport and Agricultural Vehicle Users

**Role in Service**

This group includes users operating vehicle categories such as lorries, tractors, land vehicles, and other specialized categories covered by fuel-allocation rules.

**Evidence**

Government documentation establishes different fuel allocations for different vehicle categories and identifies special mechanisms for certain essential or production-related activities.

**Unknowns**

The exact user workflows for specialized vehicles, agricultural equipment, institutional vehicles, and exceptional fuel requirements require further research.

**Research Questions**

* **RH-14:** How do specialized vehicle users register and manage their fuel allocation?
* **RH-15:** Are there differences between standard private-vehicle workflows and specialized vehicle workflows?
* **RH-16:** What documentation or verification difficulties occur for specialized or institutional users?
* **RH-17:** How are exceptional fuel requirements handled at station level?

---

### 4.5 Users with Potentially Limited Digital Access or Digital Literacy

**Role in Service**

Users with different levels of digital literacy, smartphone access, language preferences, or accessibility requirements are included as an important research segment.

**Research Status**

The project has identified digital literacy, language, accessibility, smartphone access, and non-smartphone scenarios as research areas.

However, the current desk research does **not** establish the prevalence or severity of these conditions among NFP users.

Therefore, claims about users relying on family members, station staff, printed QR codes, proxy registration, or other assistance remain **research hypotheses** rather than findings.

**Research Questions**

* **RH-18:** What devices and access methods do different user groups use to interact with NFP?
* **RH-19:** Do users require assistance from other people to complete registration or recovery?
* **RH-20:** Which language and accessibility requirements are most important to users?
* **RH-21:** Are printed or otherwise non-screen QR presentation methods used in practice?
* **RH-22:** What accessibility problems occur during actual service use?

---

### 4.6 Fuel-Station Forecourt Attendants

**Role in Service**

Fuel-station attendants are frontline operational stakeholders involved in the fuel-dispensing process.

Historical NFP documentation establishes station-side vehicle/QR verification as part of the fuel authorization process.

Current government policy also establishes QR verification as a requirement for obtaining fuel.

**Evidence-Supported Interaction**

* Receive a user's QR code
* Verify the vehicle/fuel authorization
* Proceed with the fuel-dispensing process when authorization is successful

**Unknowns**

The exact devices, software interfaces, connectivity conditions, transaction sequence, and exception-handling procedures currently used at individual stations are not established by the available desk research.

**Research Questions**

* **RH-23:** What are the actual steps attendants follow during a normal transaction?
* **RH-24:** How long does a typical transaction take?
* **RH-25:** What happens when a QR code cannot be verified?
* **RH-26:** How are connectivity or device problems handled?
* **RH-27:** How does the process change during periods of high demand?
* **RH-28:** What information does an attendant need to resolve a failed transaction?

---

### 4.7 Fuel-Station Managers and Owners

**Role in Service**

Station managers and owners are operational stakeholders responsible for overseeing station-level service delivery.

**Evidence**

Fuel stations form part of the NFP fuel-distribution environment, and station-side verification is part of the documented service process.

**Unknowns**

The available research does not establish the exact management dashboards, reconciliation procedures, override permissions, or internal escalation processes used at stations.

**Research Questions**

* **RH-29:** What responsibilities do managers have when NFP transactions fail?
* **RH-30:** How are station-level disputes and exceptions currently handled?
* **RH-31:** What operational information do managers need during system problems?
* **RH-32:** How do managers communicate recurring issues to support or authorities?

---

### 4.8 Government Information Centre (GIC) / NFP Support

**Role in Service**

GIC provides public information and support relating to NFP.

**Evidence**

The current NFP service provides support information and a dedicated WhatsApp channel. The GIC FAQ documents numerous registration, QR, ownership-transfer, and account-related issues.

The FAQ also indicates that WhatsApp responses may take more than 24 hours during periods of high inquiry volume.

**Evidence-Supported Research Opportunity**

The existence of documented support cases indicates that recovery and escalation are important areas for research.

However, the internal support workflow, ticket volumes, resolution times, and administrative tools are not established.

**Research Questions**

* **RH-33:** Which categories of NFP problems generate the greatest support demand?
* **RH-34:** What information must citizens provide before a support case can be resolved?
* **RH-35:** Which problems can be resolved through self-service?
* **RH-36:** Which problems require manual escalation?
* **RH-37:** What are the actual response and resolution times for different case types?

---

### 4.9 Department of Motor Traffic (DMT)

**Role in Service**

Historical NFP documentation establishes vehicle and ownership data validation involving DMT information.

**Evidence-Supported Dependency**

Vehicle-registration information is an important dependency for registration and ownership validation.

**Important Boundary**

The internal technical implementation of this dependency is **UNKNOWN**.

The project does not assume a specific current API, database architecture, synchronization mechanism, or real-time connection.

**Research Questions**

* **RH-38:** How frequently do users encounter mismatches between submitted information and vehicle records?
* **RH-39:** What happens operationally when ownership information does not match?
* **RH-40:** How are records corrected or escalated?
* **RH-41:** What current technical integration exists between DMT and NFP?

---

### 4.10 Ministry Responsible for Energy and Fuel Policy

**Role in Service**

The Ministry responsible for energy/fuel policy establishes or communicates fuel-allocation policy and QR enforcement requirements.

**Evidence**

Current Ministry communication establishes QR-code enforcement and publishes fuel-allocation categories and quota amounts.

**Unknowns**

The exact internal administrative interfaces, analytics systems, approval workflows, and deployment processes used to modify system rules are not established.

**Research Questions**

* **RH-42:** What information is required for policy-level monitoring of fuel allocation?
* **RH-43:** How are policy changes communicated to operational stakeholders?
* **RH-44:** How are changes to allocation rules reflected in service interfaces?
* **RH-45:** What administrative information would be useful for monitoring exceptions and service performance?

---

### 4.11 CPC / LIOC and Fuel-Station Ecosystem

**Role in Service**

CPC and LIOC form part of the national fuel-distribution and retail-station ecosystem within which NFP transactions occur.

**Evidence**

Fuel distribution and retail stations are part of the operational environment in which fuel allocation is enforced.

**Unknowns**

The exact relationship between NFP software, station systems, inventory systems, terminals, and the respective CPC/LIOC infrastructure is not established by the current research.

**Research Questions**

* **RH-46:** What station-level infrastructure is currently used for NFP verification?
* **RH-47:** Are there meaningful operational differences between different station environments?
* **RH-48:** How are system-related exceptions communicated between stations and central support?
* **RH-49:** How are fuel allocation records reconciled with station operations?

---

### 4.12 ICTA — Historical Technology Role

**Role in Service**

ICTA played a documented role in the historical development and implementation of the National Fuel Pass.

Historical documentation records technical elements including registration information, SMS OTP, DMT-related validation, and QR-based authorization.

**Important Boundary**

The current operational responsibility of ICTA for the NFP system is **UNKNOWN**.

Historical documentation must not be treated as evidence of current backend ownership or technical responsibility.

**Research Questions**

* **RH-50:** Does ICTA currently have an operational role in NFP?
* **RH-51:** Which organization currently owns and maintains the active technical infrastructure?
* **RH-52:** What current technical responsibilities are divided between government and technology partners?

---

# 5. Stakeholder Goals, Needs & Constraints

The following table distinguishes documented service responsibilities from needs that require validation.

| Stakeholder              | Documented Role / Goal                                        | Known Constraint                                            | Research Need                                        |
| ------------------------ | ------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| Private vehicle owners   | Register eligible vehicles and access allocated fuel          | Registration requires relevant identity/vehicle information | Understand registration, quota and QR difficulties   |
| Ownership-transfer users | Re-register or recover access after ownership/contact changes | Existing registration information may create conflicts      | Understand recovery and escalation                   |
| Commercial users         | Access category-specific fuel allocation                      | Allocation varies by vehicle category                       | Understand impact of fuel-access problems on work    |
| Heavy/agricultural users | Access applicable specialized allocation mechanisms           | Category-specific rules                                     | Understand specialized workflows                     |
| Limited-access users     | Use the service through available access methods              | Actual access limitations are UNKNOWN                       | Investigate device, language and accessibility needs |
| Station attendants       | Verify authorization and dispense fuel                        | Exact current workflow/device constraints UNKNOWN           | Observe transaction workflow                         |
| Station managers         | Oversee station operations                                    | Management procedures UNKNOWN                               | Investigate exception and escalation processes       |
| GIC/support              | Provide information and assistance                            | High inquiry volume is documented                           | Investigate support demand and resolution workflow   |
| DMT                      | Provide vehicle/ownership information used for validation     | Current integration mechanism UNKNOWN                       | Investigate data mismatch and integration            |
| Ministry                 | Establish/communicate fuel policy                             | Internal administrative workflow UNKNOWN                    | Investigate policy monitoring and communication      |
| CPC/LIOC ecosystem       | Operate within national fuel-distribution network             | Infrastructure differences UNKNOWN                          | Investigate station-level operational variation      |
| ICTA                     | Historical NFP technical role                                 | Current role UNKNOWN                                        | Verify current responsibility                        |

---

# 6. Stakeholder Influence & Interest

The following classification is an **analyst working model**, not an empirically validated measurement.

It is based on the distinction between:

* formal influence over policy, data, infrastructure, or implementation; and
* direct interest in the day-to-day usability of the service.

```text
+--------------------------------------------------------------------------------+
|                  STAKEHOLDER INFLUENCE / INTEREST MATRIX                      |
|                         Analyst Working Model (I)                             |
+--------------------------------------------------------------------------------+
| HIGH INFLUENCE / LOWER DIRECT USE       | HIGH INFLUENCE / HIGH INTEREST      |
|                                         |                                     |
| • Ministry                              | • Station Managers / Owners        |
| • DMT                                   | • Fuel Distribution Stakeholders   |
| • ICTA (historical role)                 | • NFP/Government Support           |
|                                         |                                     |
|-----------------------------------------+-------------------------------------|
| LOWER INFLUENCE / LOWER DIRECT USE      | LOWER FORMAL INFLUENCE / HIGH      |
|                                         | DIRECT INTEREST                    |
|                                         |                                     |
| • External technical actors             | • Private Vehicle Owners           |
|   (where applicable)                    | • Commercial Users                 |
|                                         | • Ownership-Transfer Users         |
|                                         | • Station Attendants               |
|                                         | • Limited-Access User Segments     |
+--------------------------------------------------------------------------------+
```

This matrix should be treated as a planning tool rather than a definitive stakeholder-power assessment.

### Design Research Priority

The project should prioritize direct research with citizens and station personnel because they interact with the service at the point where registration, QR presentation, verification, and fuel access occur.

Institutional stakeholders remain important for understanding policy, operational constraints, data dependencies, and service boundaries.

---

# 7. Stakeholder-Service Relationships

| Service Stage                | Citizens / Drivers                  | Station Staff                          | Support                    | DMT                                     | Ministry / Government     |
| ---------------------------- | ----------------------------------- | -------------------------------------- | -------------------------- | --------------------------------------- | ------------------------- |
| Registration                 | Submit required information         | —                                      | Assistance when required   | Vehicle/ownership data dependency       | Policy/service governance |
| Ownership / Contact Recovery | Request re-registration or recovery | —                                      | Support/escalation         | Vehicle/ownership validation dependency | Governance                |
| Quota Information            | View/understand allocation          | —                                      | Guidance                   | —                                       | Defines allocation policy |
| QR Presentation              | Present QR                          | Receive/scan QR                        | —                          | —                                       | QR enforcement policy     |
| Verification                 | Await authorization                 | Verify vehicle/fuel authorization      | —                          | Data dependency may exist               | Enforcement policy        |
| Fuel Dispensing              | Receive allocated fuel              | Dispense fuel                          | —                          | —                                       | Allocation rules          |
| Failed Transaction           | Seek resolution                     | Handle immediate operational situation | Provide support/escalation | May be relevant in data-related cases   | Governance                |

The exact technical sequence between these stakeholders is not assumed to represent the current backend architecture.

---

# 8. Stakeholder Interaction Map

The following is a **service-level interaction model**, not a representation of the current technical architecture.

```text
                    +-----------------------------+
                    |     Ministry / Government   |
                    |   Policy & Allocation Rules |
                    +--------------+--------------+
                                   |
                                   v
                    +-----------------------------+
                    |    National Fuel Pass       |
                    |       Service Layer         |
                    +-------------+---------------+
                                  |
                +-----------------+-----------------+
                |                                   |
                v                                   v
       +------------------+               +------------------+
       | Vehicle Owners   |               |      GIC         |
       | / Citizens       |<------------->| Support / Help   |
       +--------+---------+               +------------------+
                |
                | Registration / QR
                |
                v
       +------------------+
       | Fuel Station     |
       | Attendant        |
       +--------+---------+
                |
                | Verification / Fueling
                v
       +------------------+
       | Station          |
       | Operations       |
       +------------------+

       DMT
        |
        | Vehicle / ownership
        | validation dependency
        v
   NFP registration process

   CPC / LIOC
        |
        | Fuel-station ecosystem
        v
   Station operations

   ICTA
        |
        | Historical technical role
        v
   Historical NFP implementation
```

The diagram intentionally avoids claiming specific APIs, databases, scanners, or synchronization mechanisms because those technical details remain **UNKNOWN**.

---

# 9. Primary, Secondary & Tertiary Stakeholders

This classification is a **project-scoping decision**, not a statement of formal organizational importance.

### Primary Stakeholders

These are the groups whose direct service experiences should receive the strongest attention during UX research:

1. Private vehicle owners
2. Commercial/daily-income vehicle users
3. Vehicle owners experiencing ownership or contact changes
4. Fuel-station attendants
5. Other relevant vehicle-user segments identified during field research

### Secondary Stakeholders

These stakeholders influence or support the operational service experience:

1. Fuel-station managers and owners
2. GIC/NFP support personnel
3. CPC/LIOC operational stakeholders

### Tertiary / Governance Stakeholders

These stakeholders provide policy, registry, governance, or historical technical context:

1. Ministry responsible for energy/fuel policy
2. DMT
3. ICTA, particularly its historical NFP role

---

# 10. Evidence-Backed Conditions & Research Hypotheses

To prevent assumptions from becoming false research findings, documented conditions are separated from hypotheses.

## Evidence-Backed Conditions

### E-01 — Registration and ownership validation

Historical NFP documentation describes identity, vehicle, and chassis information as part of registration and vehicle information validation.

### E-02 — Ownership-transfer and contact-number problems

Current GIC documentation contains multiple support cases involving previous owners, ownership changes, changed contact numbers, and re-registration.

### E-03 — QR verification problems

Current GIC documentation explicitly addresses situations where QR codes cannot be scanned or vehicle/QR details cannot be verified.

The **cause** of these failures is not established.

### E-04 — Current QR enforcement

Current government communication establishes QR verification as a requirement for obtaining fuel.

### E-05 — Current quota-reset timing

The current GIC portal states that quotas reset at midnight on Saturday.

### E-06 — Support demand

Current GIC documentation provides support channels and notes that WhatsApp responses may take more than 24 hours during periods of high inquiry volume.

---

## Research Hypotheses

### RH-A — QR presentation conditions

QR presentation method, screen condition, printed materials, lighting, or other environmental factors may affect successful verification.

**Validation:** Forecourt observation and user interviews.

### RH-B — Digital access

Some users may require assistance because of device access, digital literacy, language, or accessibility factors.

**Validation:** Citizen interviews and survey.

### RH-C — Transaction workflow

QR verification may introduce delays or workflow difficulties under certain station conditions.

**Validation:** Contextual inquiry and transaction observation.

### RH-D — Ownership recovery

Users experiencing ownership transfers or changed contact numbers may require clearer recovery guidance or escalation pathways.

**Validation:** Interviews with affected users and support personnel.

### RH-E — Commercial-user impact

Fuel-access interruptions may have greater practical consequences for users whose income depends directly on vehicle operation.

**Validation:** Commercial-user interviews.

### RH-F — Station variation

Station hardware, connectivity, operational procedures, and staffing may vary across locations.

**Validation:** Multi-station observation where feasible.

---

# 11. Research Validation Status

| Insight / Claim                                   | Classification | Current Status                                      | Validation             |
| ------------------------------------------------- | -------------- | --------------------------------------------------- | ---------------------- |
| Current quotas reset at Saturday midnight         | E              | Verified through current GIC portal                 | Established            |
| QR verification is required for fuel              | E              | Verified through current government communication   | Established            |
| QR scanning/verification failures occur           | E              | Documented in GIC support material                  | Established            |
| Causes of QR failures                             | UNKNOWN        | Not established                                     | Forecourt research     |
| Ownership-transfer registration problems occur    | E              | Documented in current GIC material                  | Established            |
| Frequency of ownership-transfer problems          | UNKNOWN        | No prevalence data identified                       | User/support research  |
| Station hardware specifications                   | UNKNOWN        | Not established                                     | Station research       |
| Station connectivity reliability                  | UNKNOWN        | Not established                                     | Observation/testing    |
| Attendant cognitive load during transactions      | RH             | Hypothesis only                                     | Contextual inquiry     |
| Users frequently depend on third-party assistance | RH             | Hypothesis only                                     | Citizen research       |
| Paper QR codes are commonly used                  | RH             | Not established                                     | User research          |
| ICTA currently operates the NFP backend           | UNKNOWN        | Historical role documented; current role unverified | Institutional research |
| Current NFP-DMT API architecture                  | UNKNOWN        | Not publicly established                            | Technical verification |

---

# 12. Design Implications

The stakeholder analysis does not yet establish final design requirements. Instead, it identifies areas that the later design phases should investigate.

### 12.1 Clear Recovery and Escalation

**DH:** A clearer recovery and escalation experience may reduce uncertainty for users encountering ownership-transfer, changed-contact, or QR-verification problems.

This should be validated against actual user and support workflows.

### 12.2 Quota Comprehension

**DH:** The interface should make current quota, used allocation, remaining allocation, and reset timing easy to understand.

The exact information hierarchy should be validated through user research and later usability testing.

### 12.3 QR Presentation

**DH:** The citizen interface could investigate resilient QR presentation methods that remain usable when connectivity is unavailable after the QR has already been generated.

Whether this is necessary, and which implementation is appropriate, must be validated through research.

### 12.4 Station Workflow

**DH:** A station-facing interaction should prioritize rapid recognition of successful and failed verification states.

The actual interaction model should be based on observed station workflows rather than assumptions about current hardware.

### 12.5 Accessibility and Language

**DH:** Sinhala, Tamil, and English support, along with accessibility-oriented information presentation, should be investigated as part of the service design.

The exact accessibility requirements should be established through research with representative users.

---

# 13. Remaining Unknowns

The following areas remain unresolved and should not be presented as facts in later design documentation:

* **UNKNOWN-01:** Current NFP backend architecture and ownership
* **UNKNOWN-02:** Current NFP-DMT integration mechanism
* **UNKNOWN-03:** Current SMS/OTP infrastructure and responsibility
* **UNKNOWN-04:** QR scanning hardware used across stations
* **UNKNOWN-05:** Station connectivity and transaction latency
* **UNKNOWN-06:** Actual QR presentation methods used by citizens
* **UNKNOWN-07:** Frequency and causes of QR verification failures
* **UNKNOWN-08:** Actual transaction duration at stations
* **UNKNOWN-09:** Current station-level exception-handling procedures
* **UNKNOWN-10:** Current GIC internal escalation and resolution workflow
* **UNKNOWN-11:** Frequency of ownership-transfer and contact-number problems
* **UNKNOWN-12:** Digital-literacy and accessibility needs across user groups
* **UNKNOWN-13:** Current ICTA operational responsibility
* **UNKNOWN-14:** Current CPC/LIOC technical relationship with NFP
* **UNKNOWN-15:** Current privacy and data-retention architecture

These unknowns form part of the field-research agenda established in the desk-research phase.

---

# 14. Conclusion

This stakeholder analysis converts the findings and uncertainties identified during desk research into a structured model of the National Fuel Pass service ecosystem.

The analysis identifies citizens and vehicle users, fuel-station personnel, support teams, government institutions, fuel-distribution stakeholders, and historical technical actors. It also distinguishes established evidence from inference, research hypotheses, design hypotheses, and unresolved technical questions.

The most important research areas emerging from the stakeholder analysis are:

1. Ownership-transfer and contact-number recovery
2. QR presentation and verification
3. Actual station transaction workflow
4. Station-level exceptions and escalation
5. Quota comprehension
6. Digital access and accessibility
7. Support demand and resolution
8. Current technical and institutional responsibilities

No field findings are claimed at this stage.

The next research activity should therefore validate these stakeholder assumptions through interviews, contextual inquiry, station observation, and survey research before converting them into prioritized problems and service requirements.

---

# Key Stakeholder Questions for Primary Research

## Citizen / Driver Research

1. How do you currently register or update a vehicle in the Fuel Pass system?
2. What happens when the system does not accept your vehicle or ownership information?
3. How do you handle a vehicle ownership transfer?
4. What happens when the registered mobile number is changed or lost?
5. How do you obtain and store your QR code?
6. How do you present your QR code at the fuel station?
7. What happens when the QR code cannot be verified?
8. How do you check your remaining fuel quota?
9. How clearly do you understand when your quota resets?
10. Do you ever ask another person to help you use the service? If so, at which steps?

## Station Staff Research

11. Can you describe the exact steps from a customer's arrival until fuel is dispensed?
12. What happens when a customer's QR code cannot be verified?
13. What information is shown when verification succeeds or fails?
14. What do you do when the station system or connection is unavailable?
15. How long does a typical NFP transaction take?
16. How does the workflow change during busy periods?
17. Which problems require a manager or another support channel?

## Support Research

18. What types of NFP problems most commonly require support?
19. Which problems can users resolve themselves?
20. Which problems require manual escalation?
21. What information is required to resolve an ownership or contact-number issue?
22. What are the typical resolution paths for QR-verification problems?

## Institutional Research

23. Which organization currently owns and operates the active NFP technical system?
24. How does the current system obtain or validate vehicle-registration information?
25. What are the current responsibilities of DMT, GIC, CPC/LIOC, ICTA, and the Ministry?
26. How are policy or quota changes communicated to the operational system?
27. What operational metrics are currently available for monitoring service performance?
