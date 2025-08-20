package main

import (
    "testing"
    "github.com/hyperledger/fabric-contract-api-go/contractapi"
    "github.com/hyperledger/fabric-stub-go/shim"
)

func TestCheckCompliance(t *testing.T) {
    chaincodeStub := shim.NewMockStub("compliance", new(ComplianceContract))
    ctx := contractapi.NewMockTransactionContext(chaincodeStub)

    err := new(ComplianceContract).CheckCompliance(ctx, "TX001", "USER001")
    if err != nil {
        t.Fatalf("CheckCompliance failed: %v", err)
    }

    record, err := new(ComplianceContract).QueryCompliance(ctx, "TX001")
    if err != nil {
        t.Fatalf("QueryCompliance failed: %v", err)
    }
    if record.Status != "Approved" {
        t.Errorf("Expected status Approved, got %s", record.Status)
    }
}