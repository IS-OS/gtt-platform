# Global Tax Token (GTT) Platform

## Overview
The Global Tax Token (GTT) is a blockchain-based digital currency designed to offset global public debt ($102 trillion in 2024) and support all the Sustainable Development Goals (SDGs), particularly SDG 1 (No Poverty), SDG 8 (Decent Work and Economic Growth), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships for the Goals). Backed by global real estate ($654.4 trillion projected for 2025), Combined International Collateral Accounts (CICA), and UN Special Drawing Rights (SDRs), the GTT injects an estimated $91.4 trillion in liquidity into the international rules-based order without diminishing any stakeholder's value.

The platform uses:
- **Hyperledger Fabric**: Permissioned blockchain for token issuance and compliance.
- **Node.js/Express.js**: Backend with MongoDB for off-chain storage and Socket.io for real-time updates.
- **React.js**: Frontend with Tailwind CSS for public and admin interfaces.
- **Docker/Kubernetes**: Deployment and orchestration.
- **APIs**: Integrates with real estate registries (e.g., PropertyRadar, Estated), IMF (data.imf.org), BIS (stats.bis.org), World Bank (data.worldbank.org), UN (data.un.org), and CME Group (cmegroup.com/market-data/api).
- **Public Ledger**: Real-time, searchable transaction ledger accessible at `/ledger`.

## Directory Structure
```
gtt-platform/
├── /chaincode/
│   ├── /gtt/
│   │   ├── gtt.go
│   │   ├── compliance.go
│   │   ├── asset_backing.go
│   │   └── go.mod
├── /backend/
│   ├── /src/
│   │   ├── /api/
│   │   │   ├── gtt_api.js
│   │   │   ├── real_estate_api.js
│   │   │   ├── sdr_api.js
│   │   │   ├── cica_api.js
│   │   │   ├── compliance_api.js
│   │   │   └── ledger_api.js
│   │   ├── /config/
│   │   │   ├── database.js
│   │   │   ├── blockchain.js
│   │   │   └── env.js
│   │   ├── /middleware/
│   │   │   ├── auth.js
│   │   │   └── rate_limiter.js
│   │   ├── /models/
│   │   │   └── Transaction.js
│   │   └── server.js
│   ├── package.json
│   └── Dockerfile
├── /frontend/
│   ├── /src/
│   │   ├── /components/
│   │   │   ├── Dashboard.js
│   │   │   ├── TokenTracker.js
│   │   │   ├── ComplianceReport.js
│   │   │   └── LedgerTable.js
│   │   ├── /pages/
│   │   │   ├── Home.js
│   │   │   ├── Admin.js
│   │   │   └── Ledger.js
│   │   ├── /api/
│   │   │   └── api.js
│   │   └── App.js
│   ├── package.json
│   └── Dockerfile
├── /contracts/
│   ├── gtt_contract.json
│   └── compliance_contract.json
├── /scripts/
│   ├── deploy_chaincode.sh
│   ├── start_network.sh
│   ├── setup_db.sh
│   └── test_api.sh
├── /tests/
│   ├── /chaincode/
│   │   ├── gtt_test.go
│   │   └── compliance_test.go
│   ├── /backend/
│   │   └── api_test.js
│   └── /frontend/
│       └── Dashboard.test.js
├── /docs/
│   ├── api.md
│   ├── architecture.md
│   └── submission_guidelines.md
├── /config/
│   ├── fabric-config.yaml
│   ├── kubernetes.yaml
│   └── .env
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Prerequisites
- Node.js (>= 16.x)
- Go (>= 1.18)
- Docker and Docker Compose
- Kubernetes (for production deployment)
- MongoDB
- Hyperledger Fabric (2.x)
- API keys for PropertyRadar, Estated, IMF, BIS, World Bank, UN, CME Group, and TaxBit

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/gtt-platform.git
   cd gtt-platform
   ```

2. **Configure Environment**
   - Copy `config/.env.example` to `config/.env` and add API keys:
     ```env
     MONGO_URI=mongodb://localhost:27017/gtt
     PORT=3000
     JWT_SECRET=your_jwt_secret
     CORELOGIC_API_KEY=your_corelogic_key
     STOBOX_API_KEY=your_stobox_key
     TAXBIT_API_KEY=your_taxbit_key
     CICA_API_KEY=your_cica_key
     PROPERTYRADAR_API_KEY=your_propertyradar_key
     ESTATED_API_KEY=your_estated_key
     IMF_API_KEY=your_imf_key
     BIS_API_KEY=your_bis_key
     WORLD_BANK_API_KEY=your_worldbank_key
     UN_API_KEY=your_un_key
     CME_API_KEY=your_cme_key
     REACT_APP_API_URL=http://localhost:3000/api
     ```

3. **Start Hyperledger Fabric Network**
   ```bash
   cd scripts
   ./start_network.sh
   ./deploy_chaincode.sh
   ```

4. **Initialize MongoDB**
   ```bash
   ./setup_db.sh
   ```

5. **Run Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```

6. **Run Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

7. **Access the Platform**
   - Public Ledger: `http://localhost:3000/ledger`
   - Admin Dashboard: `http://localhost:3000/admin`
   - Home Page: `http://localhost:3000`

## Testing
- Run API tests:
  ```bash
  cd scripts
  ./test_api.sh
  ```
- Run backend tests:
  ```bash
  cd backend
  npm test
  ```
- Run frontend tests:
  ```bash
  cd frontend
  npm test
  ```

## Deployment
- Build Docker images:
  ```bash
  docker-compose build
  ```
- Deploy locally:
  ```bash
  docker-compose up
  ```
- Deploy to Kubernetes:
  ```bash
  kubectl apply -f config/kubernetes.yaml
  ```

## Public Ledger
The public ledger at `/ledger` provides real-time viewing and searching of all GTT transactions, using Socket.io for live updates and MongoDB for storage. Accessible endpoints:
- `GET /api/ledger/transactions`: Fetch all transactions.
- `GET /api/ledger/search?txId=TX001&owner=UN_Treasury&fromDate=2025-01-01&toDate=2025-12-31`: Search by criteria.

## UN Submission
This platform shall form part of a ngo registration then submission via https://ecosoc.un.org/en/ngo/apply-for-consultative-status to the UN Framework Convention on International Tax Cooperation. It aligns with:
- ECOSOC Resolution 1996/31 for transparency.
- SDGs via $91.4+ trillion liquidity injection.
- Compliance with IFRS 9, SEC, FCA, MAS via TaxBit integration.

See `docs/submission_guidelines.md` for details.

## Contributing
Contributions are welcome via pull requests to the GitHub repository. Ensure compliance with ethical guidelines and regulatory standards.

This submission does not represent the official positions or views of any government, organization, or institution, including the United Nations. It is intended to contribute to the ongoing negotiations, particularly the workstreams on taxation of cross-border services and prevention/resolution of tax disputes, by offering an innovative financial instrument aligned with the Sustainable Development Goals (SDGs).





