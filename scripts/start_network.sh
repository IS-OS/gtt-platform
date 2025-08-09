#!/bin/bash

# Start Hyperledger Fabric network
cd config
./network.sh up createChannel -c gttchannel
echo "Network started"