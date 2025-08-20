# GTT Platform Architecture

The GTT platform uses:
- **Hyperledger Fabric**: Permissioned blockchain for GTT issuance and compliance.
- **Node.js/Express.js**: Backend for API integrations (real estate, SDR, CICA).
- **React.js**: Frontend for admin dashboards and public ledger.
- **MongoDB**: Off-chain storage for transaction metadata and public ledger.
- **Socket.io**: Real-time transaction updates for public ledger.
- **Docker/Kubernetes**: Deployment and orchestration.
- **Security**: AES-256 encryption, TLS/SSL, SOC 2 compliance.
- **APIs**: CoreLogic, Stobox, IMF SDR, TaxBit, and custom CICA API.
