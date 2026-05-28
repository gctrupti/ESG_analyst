# Tradeoffs

This document outlines implementation tradeoffs made during development.

---

# 1. CSV Uploads vs Live Integrations

### Chosen

CSV ingestion.

### Alternative

Live integrations with:

- SAP APIs
- Utility systems
- Concur / Navan APIs

### Tradeoff

CSV uploads were selected to prioritize:

- Faster delivery
- Local testing
- Assignment scope alignment

Live connectors would improve realism but significantly increase complexity.

---

# 2. Rule-Based Detection vs Machine Learning

### Chosen

Rule-based anomaly detection.

### Alternative

ML anomaly detection models.

### Tradeoff

Rule-based detection offers:

- Explainability
- Predictable outputs
- Faster implementation

Machine learning could improve detection accuracy but requires:

- Historical datasets
- Model training
- Monitoring infrastructure

---

# 3. SQLite vs Production Database

### Chosen

SQLite.

### Alternative

PostgreSQL / MySQL.

### Tradeoff

SQLite enables:

- Minimal setup
- Fast development
- Portable local environment

Production environments would typically require PostgreSQL for:

- Scalability
- Concurrent users
- Stronger transactional guarantees

---

# 4. No Authentication Layer

### Chosen

Single demo reviewer workflow.

### Alternative

JWT authentication / RBAC.

### Tradeoff

Authentication was omitted to prioritize core ESG functionality:

- ingestion
- normalization
- anomaly detection
- review workflow
- audit trail

Production systems would require:

- login
- role-based access
- permissions
- secure session handling

---

# 5. Simplified ESG Scope Mapping

### Chosen

Direct rule-based scope mapping.

### Alternative

Complex taxonomy engine.

### Tradeoff

Simple mappings improved:

- readability
- maintainability
- delivery speed

Production ESG systems often support:

- jurisdiction-specific standards
- configurable taxonomies
- reporting frameworks.

---

# 6. Frontend State Management

### Chosen

React local state.

### Alternative

Redux / Zustand / Context-heavy architecture.

### Tradeoff

Local state keeps implementation lightweight.

Larger systems may benefit from centralized state management for:

- caching
- shared state
- complex workflows

---

# 7. UI Polish vs Feature Completion

### Chosen

Functional + professional responsive UI.

### Alternative

Highly animated enterprise dashboard.

### Tradeoff

Priority was given to:

- workflow completion
- API integration
- assignment requirements

instead of advanced visual polish.
