# Sprint 2 User Stories: Digitization and AI-Ready Content Preparation

**Duration:** Two weeks  
**Sprint goal:** An authorized content operator can upload a valid source, convert it to a structured digital representation, extract knowledge metadata, and present a reviewed AI-ready content package for the next sprint’s question-generation work.

## Sprint Scope

| ID | Story | Priority | Estimate | Depends on |
|---|---|---|---:|---|
| S2-01 | Digitize and normalize uploaded content | Must | 8 points | S1-06 |
| S2-02 | Extract taxonomy and learning objectives | Must | 8 points | S2-01 |
| S2-03 | Review and approve AI-ready content packages | Must | 8 points | S2-01, S2-02 |
| S2-04 | Validate the sprint outcome | Must | 3 points | S2-01 through S2-03 |

**Planned total:** 27 story points. Confirm this against the delivery team's observed velocity before sprint commitment.

## Proposed Technology Stack

**Status:** Proposed for Sprint 2 approval. This sprint emphasizes content processing, metadata extraction, and review flows while keeping the same platform foundation and security pattern introduced in Sprint 1.

| Area | Proposed technology | Sprint 2 use |
|---|---|---|
| Web application | Next.js, React, TypeScript | Review queue, package status overlays, approval actions, and source content views. |
| API and domain services | Python, FastAPI, Pydantic, SQLAlchemy | Digitization workflow, taxonomy extraction, review task APIs, and approval logic. |
| Document processing | Azure AI Document Intelligence or equivalent extraction pipeline | Extract clean text, structure, headings, key passages, and semantic document markers. |
| AI orchestration | Azure OpenAI or provider abstraction | Generate topic, sub-topic, key concept, and learning-objective suggestions from approved source material. |
| Structured data | PostgreSQL | Source content, extracted sections, taxonomy records, review decisions, and package versioning. |
| Private file storage | Azure Blob Storage | Secure storage of original source assets and generated normalized content package artifacts. |
| Deployment | Docker and Azure Container Apps | Reproducible deployment of all processing and review services. |
| Secrets and configuration | Azure Key Vault and environment configuration | Secure access to model, storage, and document-processing endpoints. |
| Observability | OpenTelemetry, Azure Monitor, Application Insights | Trace processing steps, record ingestion failures, and monitor extraction quality. |
| Automated testing | Pytest, Vitest, Playwright | API tests, extraction-validation tests, and review-flow validation. |
| Continuous integration | GitHub Actions | Linting, type checks, tests, and build validation across processing and web application layers. |

### Story-to-Stack Alignment

| Story | Primary technologies |
|---|---|
| S2-01 | FastAPI, Azure AI Document Intelligence, PostgreSQL, Azure Blob Storage, OpenTelemetry |
| S2-02 | FastAPI, Azure OpenAI, PostgreSQL, AI orchestration services |
| S2-03 | Next.js, FastAPI, PostgreSQL, Azure OpenAI, Azure Monitor |
| S2-04 | Pytest, Vitest, Playwright, GitHub Actions |

## S2-01: Digitize and Normalize Uploaded Content

**Backlog alignment:** MVP-03; X-02; X-04; X-05  
**Narrative:** As a Content Operations user, I want uploaded text and PDF sources to be processed into a clean, structured digital representation so that the material is usable for knowledge extraction and future question generation.

**Acceptance criteria:**

1. A Content Operations user can initiate digitization for an uploaded and stored text or PDF source.
2. The system extracts readable content while preserving document structure where available, including headings, segments, and obvious hierarchical content breaks.
3. The system stores a normalized content representation alongside the original asset without exposing the raw file to unauthorized users.
4. Unsupported or empty content is identified and rejected with a clear operational status, including a failure reason and an auditable event.
5. The system records processing status values such as `received`, `processing`, `processed`, `failed`, and `requires_review`.
6. Processing errors, timeout conditions, and partial extraction failures are captured in logs and audit records without storing sensitive content in the event details.
7. The content pipeline can be retried for a failed job without duplicating the original source asset or losing the source’s audit trail.
8. Automated tests cover valid PDF processing, valid text processing, empty-content failure, unsupported-format handling, and unauthenticated processing attempts.

**Out of scope:** OCR for handwritten, photo, audio, or scanned hard-copy sources; source editing and reversion; full semantic summarization; and bulk ingestion automation.

## S2-02: Extract Taxonomy and Learning Objectives

**Backlog alignment:** MVP-04; X-01; X-05  
**Narrative:** As an assessment designer or reviewer, I want the platform to identify subject, topic, sub-topic, key concepts, and learning objectives from processed content so that future question generation and coverage checks are grounded in a consistent knowledge model.

**Acceptance criteria:**

1. The system identifies the primary subject and a hierarchical topic structure for processed content.
2. The system extracts key concepts, sub-topics, and learning objectives that are traceable to the original content.
3. Every extracted concept and objective has a confidence signal or provisional quality flag so reviewers can distinguish low-confidence results from strong candidates.
4. The system stores taxonomy metadata in a reusable, versioned structure tied to the content package and source asset.
5. A reviewer can view the extracted taxonomy alongside the original content and correct or reject low-confidence options.
6. The system records which extraction method or model version produced the metadata so the team can evaluate quality over time.
7. A low-confidence or ambiguous extraction is prevented from advancing automatically to question generation without review.
8. Automated tests cover successful taxonomy extraction, low-confidence extraction handling, missing-content protection, and a rejected content package that cannot advance to the next stage.

**Out of scope:** Full curriculum mapping, enterprise taxonomy standards, multi-source merge logic, and automated policy decisions beyond confidence-based gating.

## S2-03: Review and Approve AI-Ready Content Packages

**Backlog alignment:** MVP-05; MVP-06; X-01; X-03; X-05  
**Narrative:** As a Subject-Matter Reviewer, I want to review AI-assisted content extraction results and approve only high-quality packages so that content used for assessment generation is trusted and traceable.

**Acceptance criteria:**

1. A reviewer can access a queue of processed content packages that require review.
2. The package view shows the original source, normalized content, extracted taxonomy, learning objectives, and confidence indicators.
3. The reviewer can approve, reject, or request changes for a package with an auditable decision record.
4. Approved content packages are marked as `approved` and become eligible for question generation in the next sprint.
5. Rejected or corrected packages remain clearly identifiable and cannot be used for downstream generation until they are resubmitted and reapproved.
6. The system records who made the decision, what was reviewed, the decision outcome, and the timestamp.
7. Approval decisions are available for audit and for later quality analysis.
8. The review interface is keyboard-operable, provides label associations for form fields, and includes accessible status messaging for validation and approval outcomes.
9. Automated tests cover reviewer approval, reviewer rejection, change-request flow, unauthorized reviewer access, and audit capture for review outcomes.

**Out of scope:** Fully automated approval, editorial workflow sophistication, content version comparison beyond basic package status, and advanced contributor collaboration features.

## S2-04: Validate the Sprint Outcome

**Backlog alignment:** MVP-03; MVP-04; MVP-05; MVP-06; MVP-15; X-03; X-04  
**Narrative:** As the delivery team, we want an end-to-end validation of the Sprint 2 content-preparation flow so that the resulting package is demonstrably trustworthy, reviewable, and ready for future assessment generation.

**Acceptance criteria:**

1. An automated end-to-end or integration test proves that a content operator can upload a valid PDF, start digitization, review the extracted taxonomy, and approve an AI-ready package.
2. The same flow proves that a lower-confidence extraction is not automatically advanced to generation without review.
3. The pipeline records permission checks, digitization outcomes, taxonomy extraction result, and approval/rejection events in the audit trail.
4. The evidence demonstrates a user can complete the flow through the keyboard-accessible interface with accessible labels and status feedback.
5. The team demonstrates the flow in the non-production environment using non-sensitive sample material that mirrors the expected MVP use case.

## Definition of Done

- Acceptance criteria pass in the non-production environment.
- New behavior has automated tests at the appropriate layer.
- Security-sensitive paths have authorization tests and audit events.
- Logs and processing traces avoid credentials and raw learning-content leakage.
- Review and approval states are documented and approved by the Product Owner.
- Setup, processing configuration, and deployment steps are documented.
- Product Owner accepts the completed sprint goal during the sprint review.

## Decisions Needed Before Sprint Planning

| Decision | Default for planning if undecided | Owner |
|---|---|---|
| Content extraction service | Azure AI Document Intelligence with fail-safe review gates | Platform Team and Product Owner |
| Taxonomy model and hierarchy | Subject, topic, sub-topic, key concept, and learning objective | Assessment Designer and SMEs |
| Confidence threshold | Conservative threshold requiring human review below target | Product Owner and Reviewers |
| Review workflow | Approve, reject, or request changes with retained audit trail | Content Operations and SMEs |
| Package status model | `received`, `processing`, `processed`, `failed`, `requires_review`, `approved`, `rejected` | Platform Team |
| AI provider usage | Provider abstraction with documented privacy policy and evaluation controls | Supporting Organization and Legal/Compliance |

## Explicitly Deferred

- Full content enhancement beyond extraction and review preparation (MVP-05 continues as a review-and-improvement workflow)
- Question generation and assessment delivery (MVP-08 onward)
- Historical paper and multi-source intelligence
- Full adaptive assessment logic and learner scoring
- Audio, image, handwriting, and hard-copy ingestion beyond the defined MVP sources

## Notes for Sprint 2 Execution

This sprint is intentionally focused on converting a stored source into a trusted, reviewable content package. The goal is not to generate assessment questions yet; the goal is to ensure the content and metadata are credible enough to pass human oversight and become the basis for the next sprint’s generation work.
