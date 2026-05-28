# Engineering Decisions

This document explains key technical decisions taken during implementation.

---

# 1. Django REST Framework for Backend

Chosen because:

- Rapid API development
- Clean serialization support
- Strong ecosystem
- Suitable for CRUD + workflow APIs

DRF allowed fast implementation of ingestion, review, and audit endpoints.

---

# 2. React + Tailwind for Frontend

Chosen because:

- Fast UI iteration
- Component-based architecture
- Responsive design support
- Lightweight styling workflow

Tailwind enabled rapid construction of dashboard, upload, review and audit interfaces.

---

# 3. CSV-Based Data Ingestion

Implemented CSV ingestion instead of live ERP/API connectors.

Reason:

- Assignment scope prioritizes workflow demonstration.
- Easier local testing.
- Simple simulation of enterprise exports.

Supported simulated sources:

- SAP ERP
- Utility Portal
- Concur / Navan

---

# 4. Rule-Based Anomaly Detection

Implemented deterministic anomaly rules instead of ML.

Rules include:

- Negative quantities
- Unknown units
- Abnormally high values

Reason:

- Transparent logic
- Easy explainability
- Fast implementation
- Suitable for ESG validation workflows

---

# 5. Normalized Emission Model

Created a normalized record model to standardize:

- Scope
- Units
- Quantities
- Activity type

Reason:

Enterprise ESG systems ingest heterogeneous source formats.

Normalization provides a consistent downstream review workflow.

---

# 6. Review Workflow Design

Implemented explicit analyst decisions:

- APPROVED
- FLAGGED
- REJECTED

Reason:

Represents realistic ESG operational review processes.

---

# 7. Audit Logging Strategy

All review actions create audit events.

Captured fields:

- Reviewer
- Decision
- Comment
- Change history

Reason:

Auditability is a core ESG governance requirement.

---

# 8. SQLite for Development

SQLite chosen for simplicity during development.

Reason:

- Zero configuration
- Fast local setup
- Adequate for assignment scope

Production deployment could use PostgreSQL.
