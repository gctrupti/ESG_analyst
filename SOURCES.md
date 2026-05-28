# Source Research & Assumptions

This document explains researched source formats, chosen ingestion mechanisms, and simplifications used in the prototype.

---

# 1. SAP ERP — Fuel & Procurement Data

## Research

Typical SAP enterprise exports commonly use:

- CSV / Flat File exports
- IDoc structures
- OData APIs
- BAPI integrations

For this prototype, CSV-style exports were selected.

---

## Chosen Ingestion Mechanism

File Upload (CSV)

Reason:

- Realistic for enterprise reporting teams.
- Common export mechanism from ERP workflows.
- Easy local testing.

---

## Example Data Used

Fields included:

- FuelType
- Quantity
- Unit
- Plant Code

Example:

```txt
Diesel,500,Liters
Petrol,220,Liters
```

---

## ESG Mapping

Mapped primarily to:

**Scope 1**

because fuel combustion produces direct emissions.

---

## What Would Break in Production

Real SAP environments introduce complexity such as:

- German column names
- inconsistent plant codes
- mixed date formats
- unit mismatches
- multi-system exports

A production solution would require configurable mapping logic.

---

# 2. Utility Portal — Electricity Data

## Research

Utility/facilities teams typically retrieve data from:

- provider portals
- CSV downloads
- invoices / PDFs
- utility APIs

This prototype uses CSV portal exports.

---

## Chosen Ingestion Mechanism

File Upload (CSV)

Reason:

Matches how facilities teams commonly export electricity usage.

---

## Example Data Used

Fields included:

- MeterID
- Facility
- BillingPeriod
- Usage_kWh
- Tariff
- Cost

Example:

```txt
ELEC001,Bangalore Plant,12500kWh
```

---

## ESG Mapping

Mapped primarily to:

**Scope 2**

because purchased electricity produces indirect emissions.

---

## What Would Break in Production

Real utility data often includes:

- tariff complexity
- billing cycles
- seasonal adjustments
- meter reconciliation issues
- incomplete exports

Production systems require stronger validation logic.

---

# 3. Corporate Travel — Concur / Navan Style Data

## Research

Corporate travel platforms commonly expose:

- APIs
- downloadable CSV reports
- expense integrations

Platforms researched:

- SAP Concur
- Navan

---

## Chosen Ingestion Mechanism

File Upload (CSV)

Reason:

Simple simulation of enterprise travel exports.

---

## Example Data Used

Fields included:

- Employee
- TripType
- Origin
- Destination
- DistanceKM
- Category

Example:

```txt
Rahul Sharma,Flight,BLR,DEL,1740km
```

---

## ESG Mapping

Mapped primarily to:

**Scope 3**

because business travel represents indirect emissions.

---

## What Would Break in Production

Real travel systems introduce challenges such as:

- missing distance values
- airport-code lookups
- hotel categorization
- mixed currencies
- multi-leg itineraries

Production deployments would require enrichment logic.

---

# Summary

| Source | Format | Scope |
|--------|--------|--------|
| SAP ERP | CSV Export | Scope 1 |
| Utility Portal | CSV Export | Scope 2 |
| Concur / Navan | CSV Export | Scope 3 |
