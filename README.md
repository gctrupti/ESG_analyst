# ESG Analyst Platform

A lightweight ESG data ingestion, normalization, anomaly detection and review workflow platform.

Built as part of the Breathe ESG Engineering Assignment.

---

## Features

### Multi-Source Data Ingestion

Supports ingestion from:

- SAP ERP
- Utility Portal
- Concur / Navan Travel

### Data Normalization

Standardizes:

- Units
- Quantities
- ESG scopes

### Anomaly Detection

Detects suspicious records such as:

- Negative quantities
- Unknown units
- Extremely high values

### Dashboard

Provides:

- KPI summary cards
- Record overview
- Source visibility
- Health indicators

### Review Workflow

Analysts can:

- Approve records
- Flag suspicious entries
- Reject invalid data

### Audit Logging

Tracks:

- Reviewer
- Decision
- Comment
- Workflow history

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Django
- Django REST Framework
- SQLite

---

## Project Structure

```txt
frontend/
backend/

ingestion/
reviews/
audit/
normalization/
emissions/
```

---

## Backend Setup

Create virtual environment:

```bash
python -m venv venv
```

Activate:

Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start server:

```bash
python manage.py runserver
```

---

## Frontend Setup

Go to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run:

```bash
npm run dev
```

---

## API Endpoints

### Upload

```txt
/api/upload/sap/
/api/upload/utility/
/api/upload/travel/
```

### Records

```txt
/api/records/
```

### Reviews

```txt
/api/review/<record_id>/
```

### Audit Logs

```txt
/api/audit/
```

---

## Sample Data Sources

| Source | Example |
|---------|----------|
| SAP ERP | Fuel / Procurement |
| Utility Portal | Electricity Consumption |
| Concur / Navan | Business Travel |

---

## Assignment Notes

This solution focuses on:

- Practical ESG workflow simulation
- Multi-source ingestion
- Rule-based anomaly detection
- Lightweight review & audit pipeline
