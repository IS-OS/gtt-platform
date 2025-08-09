# GTT Platform API Documentation

## GTT API
- **POST /api/gtt/issue**: Issue a new GTT.
  - Body: `{ "id": "GTT001", "owner": "UN_Treasury", "value": 1000 }`
  - Response: `{ "message": "Token issued", "result": {} }`
- **POST /api/gtt/transfer**: Transfer a GTT.
  - Body: `{ "id": "GTT001", "newOwner": "MemberState" }`
- **GET /api/gtt/query/:id**: Query a GTT by ID.

## Real Estate API
- **GET /api/real-estate/register/:id**: Fetch real estate data.
- **POST /api/real-estate/tokenize**: Tokenize a real estate asset.

## SDR API
- **GET /api/sdr/rates**: Fetch IMF SDR rates.
- **POST /api/sdr/update-backing**: Update GTT SDR backing.

## CICA API
- **GET /api/cica/assets/:id**: Fetch CICA asset data.
- **POST /api/cica/update-backing**: Update GTT CICA backing.

## Compliance API
- **POST /api/compliance/verify**: Verify KYC/AML.
- **GET /api/compliance/report/:txId**: Generate compliance report.