# Data Model Design

This document explains the core data model used in the ESG Analyst Platform.

---

# Goals

The model was designed to support:

- Multi-source ESG ingestion
- Multi-tenancy
- Scope categorization
- Normalization
- Review workflow
- Auditability
- Source tracking

---

# Core Models

---

# 1. Organization

Represents a tenant/company using the system.

Example:

- Tesla India
- Shell Energy
- Bangalore Manufacturing Ltd

Purpose:

Supports **multi-tenancy**.

One organization can own many data sources and emission records.

Example structure:

```txt
Organization
├── id
├── name
├── created_at
```

---

# 2. SourceConfig

Represents the origin system producing uploaded data.

Supported sources:

- SAP ERP
- Utility Portal
- Concur / Navan

Purpose:

Tracks:

- ingestion source
- configuration
- ownership

Relationship:

```txt
Organization
    ↓
SourceConfig
```

Example structure:

```txt
SourceConfig
├── id
├── source_type
├── organization
├── created_at
```

---

# 3. RawUpload

Tracks uploaded files.

Purpose:

Preserve source-of-truth evidence.

Examples:

- sample_sap.csv
- sample_utility.csv
- sample_travel.csv

Relationship:

```txt
SourceConfig
    ↓
RawUpload
```

Example structure:

```txt
RawUpload
├── source
├── uploaded_file
├── uploaded_by
├── upload_timestamp
├── status
```

---

# 4. RawRecord

Stores parsed rows before normalization.

Purpose:

Retain original source representation.

Useful for:

- debugging
- traceability
- audit review

Relationship:

```txt
RawUpload
    ↓
RawRecord
```

Example structure:

```txt
RawRecord
├── upload
├── payload
├── created_at
```

payload stores raw source data.

Example:

```json
{
  "FuelType":"Diesel",
  "Quantity":"500",
  "Unit":"Liters"
}
```

---

# 5. NormalizedEmissionRecord

Primary working model.

Purpose:

Create a standardized ESG representation independent of source system.

Supports:

- scope mapping
- unit normalization
- anomaly detection
- analyst workflow

Relationship:

```txt
Organization
        ↓
NormalizedEmissionRecord
```

Example structure:

```txt
NormalizedEmissionRecord
├── organization
├── source
├── scope
├── category
├── activity_type
├── original_value
├── original_unit
├── normalized_value
├── normalized_unit
├── suspicious_flag
├── anomaly_reason
├── status
```

---

# Scope Categorization

Used:

```txt
Scope 1
Scope 2
Scope 3
```

Examples:

| Source | Example | Scope |
|---------|---------|---------|
| SAP ERP | Diesel | Scope 1 |
| Utility Portal | Electricity | Scope 2 |
| Concur/Navan | Flight Travel | Scope 3 |

---

# Unit Normalization

Purpose:

Create consistent quantities across heterogeneous systems.

Examples:

```txt
Liters → liters
kWh → kWh
KM → km
```

Normalization occurs during ingestion.

---

# 6. ReviewAction

Stores analyst review decisions.

Purpose:

Support approval workflow.

Supported decisions:

- APPROVED
- FLAGGED
- REJECTED

Relationship:

```txt
NormalizedEmissionRecord
        ↓
ReviewAction
```

Example structure:

```txt
ReviewAction
├── record
├── reviewer
├── decision
├── comment
├── timestamp
```

---

# 7. AuditLog

Captures immutable workflow history.

Purpose:

Maintain governance and traceability.

Tracks:

- actor
- action
- old state
- new state

Relationship:

```txt
ReviewAction
        ↓
AuditLog
```

Example structure:

```txt
AuditLog
├── entity
├── action
├── old_data
├── new_data
├── actor
├── timestamp
```

---

# Model Relationships Overview

```txt
Organization
    ↓
SourceConfig
    ↓
RawUpload
    ↓
RawRecord

Organization
    ↓
NormalizedEmissionRecord
    ↓
ReviewAction
    ↓
AuditLog
```

---

# Design Rationale

The model separates:

**Raw source data**  
from

**Normalized ESG records**

This enables:

- reproducibility
- debugging
- source-of-truth tracking
- audit readiness

The review and audit layers were intentionally isolated to support analyst workflows and governance requirements.
