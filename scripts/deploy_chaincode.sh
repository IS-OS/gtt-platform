#!/bin/bash

# Deploy GTT chaincode
peer chaincode install -n gtt -v 1.0 -p gtt-platform/chaincode/gtt
peer chaincode instantiate -n gtt -v 1.0 -C gttchannel -c '{"Args":["InitLedger"]}'

# Deploy Compliance chaincode
peer chaincode install -n compliance -v 1.0 -p gtt-platform/chaincode/gtt
peer chaincode instantiate -n compliance -v 1.0 -C gttchannel -c '{"Args":["InitLedger"]}'

# Deploy Asset Backing chaincode
peer chaincode install -n asset_backing -v 1.0 -p gtt-platform/chaincode/gtt
peer chaincode instantiate -n asset_backing -v 1.0 -C gttchannel -c '{"Args":["InitLedger"]}'

echo "Chaincode deployed"