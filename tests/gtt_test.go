package main

import (
    "testing"
    "github.com/hyperledger/fabric-contract-api-go/contractapi"
    "github.com/hyperledger/fabric-stub-go/shim"
)

func TestInitLedger(t *testing.T) {
    chaincodeStub := shim.NewMockStub("gtt", new(GTTContract))
    ctx := contractapi.NewMockTransactionContext(chaincodeStub)

    err := chaincodeStub.MockInit("tx1", nil)
    if err != nil {
        t.Fatalf("InitLedger failed: %v", err)
    }

    token, err := new(GTTContract).QueryToken(ctx, "GTT001")
    if err != nil {
        t.Fatalf("QueryToken failed: %v", err)
    }
    if token.ID != "GTT001" {
        t.Errorf("Expected token ID GTT001, got %s", token.ID)
    }
}