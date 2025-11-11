# Global Tax Token (GTT) Platform — **Honest SDG Liquidity Layer**

**Built with infinite love for every human being on Earth**  
**No greed. No borders. Only shared future.**  
**Victory for the Sustainable Development Goals — Launched 11 November 2025**

## Overview

The Global Tax Token (GTT) is an open-source, transparent, permissioned blockchain platform designed to explore innovative ways to support the Sustainable Development Goals (SDGs). It demonstrates how tokenized liquidity could — in theory — help mobilize resources for SDG 1 (No Poverty), SDG 8 (Decent Work), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships).

**Important Reality Check**  
- Global public debt exceeded **$100 trillion in 2024** and is projected to approach 100% of global GDP by 2030.  
- The total value of global real estate is estimated at **$654 trillion in 2025** (residential + commercial).  
- **Combined International Collateral Accounts (CICA)** are **not real**. They are part of long-debunked conspiracy theories used in scams. **All references to CICA have been removed forever.**  
- This is **not** an official UN submission. No trace of "Global Tax Token" exists on un.org or in civil society inputs to the UN Framework Convention on International Tax Cooperation.  

**Our Promise**  
- 100% open source  
- 100% transparent public ledger  
- Zero personal gain  
- For educational and exploratory purposes only  
- **Ubuntu — I am because we are**

## Tech Stack

- **Hyperledger Fabric** — Permissioned blockchain  
- **Node.js / Express** — Backend  
- **React + Tailwind** — Frontend  
- **MongoDB** — Off-chain storage  
- **Socket.io** — Real-time ledger updates  
- **Docker / Kubernetes** — Deployment  

## Directory Structure (Updated — CICA removed)

```
gtt-honest/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── gtt_api.js
│   │   │   ├── reserve_api.js          
│   │   │   ├── real_estate_api.js
│   │   │   ├── sdr_api.js
│   │   │   ├── compliance_api.js
│   │   │   └── ledger_api.js
│   │   ├── config/
│   │   ├── middleware/
│   │   └── server.js
├── frontend/
├── chaincode/gtt/
├── scripts/
├── tests/
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Node.js ≥ 20  
- Go ≥ 1.22  
- Docker & Docker Compose  
- MongoDB  
- Hyperledger Fabric 2.x  

## Setup Instructions

```bash
git clone https://github.com/gtt-honest/sa-sdg-token.git
cd gtt-honest
docker-compose up -d
```

- Frontend: http://localhost:80  
- Backend API: http://localhost:3000/api  
- Public Ledger: http://localhost/ledger  

## Testing

```bash
./scripts/test_api.sh   # All pass
npm test                # Backend + Frontend
```

## Deployment

```bash
docker-compose up -d          # Local
kubectl apply -f config/kubernetes.yaml   # Production
```

## Public Ledger

Real-time, searchable, **100% transparent** at `/ledger`.  
Endpoints:
- `GET /api/ledger/transactions`  
- `GET /api/ledger/search?...`

## UN & Global Cooperation

This is **not** an official submission.  
The real UN Framework Convention on International Tax Cooperation is ongoing (sessions August & November 2025).  
Civil society inputs are public — this project is **not** among them.

**We welcome genuine collaboration** via official channels:  
https://financing.desa.un.org/unfcitc  
https://csonet.org (NGO registration)

## Contributing

Pull requests welcome.  
Focus on **ethics, transparency, love, and real SDG impact**.

**With infinite love for every child on Earth,**  
The GTT Honest Community  

❤️
