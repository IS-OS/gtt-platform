#!/bin/bash

# Test GTT API endpoints
curl -X POST http://localhost:3000/api/gtt/issue -H "Authorization: Bearer $JWT_TOKEN" -d '{"id":"GTT002","owner":"UN_Treasury","value":2000}'
curl -X GET http://localhost:3000/api/gtt/query/GTT002 -H "Authorization: Bearer $JWT_TOKEN"
curl -X POST http://localhost:3000/api/compliance/verify -H "Authorization: Bearer $JWT_TOKEN" -d '{"transactionId":"TX001","userId":"USER001"}'
curl -X GET http://localhost:3000/api/ledger/transactions
echo "API tests completed"
