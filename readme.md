# Global Tax Token (GTT) Platform

A blockchain-based platform for the Global Tax Token, backed by global real estate, CICA, and SDRs.

## Setup

1. Install dependencies:
   ```bash
   npm install
   cd backend && npm install
   cd frontend && npm install

APIs

/api/gtt: Issue, transfer, and query GTTs.
/api/real-estate: Integrate with real estate registries.
/api/sdr: Fetch IMF SDR rates.
/api/cica: Access CICA assets (mock).
/api/compliance: KYC/AML and tax reporting.


Notes

API Integrations:

Real Estate: Mock integrations with CoreLogic and Stobox APIs; replace with actual endpoints in production.
SDR: Uses IMF’s public SDR API (rate-limited).
CICA: Mock API for International Treasury; requires private endpoint in production.
Compliance: Integrates with TaxBit for KYC/AML and IRS Form 1099-DA reporting.


Compliance: Ensures IFRS 9 fair value reporting, SOC 2 security, and UN tax convention alignment.
UN Submission: Include /docs/submission_guidelines.md with the treaty and tech stack in a PDF submission to ola@un.org, per ECOSOC Resolution 1996/31.