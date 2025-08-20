package main

import (
    "encoding/json"
    "fmt"
    "github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// GTTContract defines the smart contract for Global Tax Token
type GTTContract struct {
    contractapi.Contract
}

// Token represents a GTT
type Token struct {
    ID         string  `json:"id"`
    Owner      string  `json:"owner"`
    Value      float64 `json:"value"`
    AssetBacking map[string]float64 `json:"assetBacking"` // RealEstate: 60%, CICA: 30%, SDR: 10%
}

// InitLedger initializes the ledger with sample tokens
func (c *GTTContract) InitLedger(ctx contractapi.TransactionContextInterface) error {
    tokens := []Token{
        {ID: "GTT001", Owner: "UN_Treasury", Value: 1000.0, AssetBacking: map[string]float64{"RealEstate": 600, "CICA": 300, "SDR": 100}},
    }
    for _, token := range tokens {
        tokenJSON, err := json.Marshal(token)
        if err != nil {
            return err
        }
        err = ctx.GetStub().PutState(token.ID, tokenJSON)
        if err != nil {
            return fmt.Errorf("failed to put token %s: %v", token.ID, err)
        }
    }
    return nil
}

// IssueToken creates a new GTT
func (c *GTTContract) IssueToken(ctx contractapi.TransactionContextInterface, id string, owner string, value float64) error {
    token := Token{
        ID:    id,
        Owner: owner,
        Value: value,
        AssetBacking: map[string]float64{
            "RealEstate": value * 0.6,
            "CICA":       value * 0.3,
            "SDR":        value * 0.1,
        },
    }
    tokenJSON, err := json.Marshal(token)
    if err != nil {
        return err
    }
    return ctx.GetStub().PutState(id, tokenJSON)
}

// TransferToken transfers GTT to a new owner
func (c *GTTContract) TransferToken(ctx contractapi.TransactionContextInterface, id string, newOwner string) error {
    token, err := c.QueryToken(ctx, id)
    if err != nil {
        return err
    }
    token.Owner = newOwner
    tokenJSON, err := json.Marshal(token)
    if err != nil {
        return err
    }
    return ctx.GetStub().PutState(id, tokenJSON)
}

// QueryToken retrieves a token by ID
func (c *GTTContract) QueryToken(ctx contractapi.TransactionContextInterface, id string) (*Token, error) {
    tokenJSON, err := ctx.GetStub().GetState(id)
    if err != nil {
        return nil, fmt.Errorf("failed to read token %s: %v", id, err)
    }
    if tokenJSON == nil {
        return nil, fmt.Errorf("token %s does not exist", id)
    }
    var token Token
    err = json.Unmarshal(tokenJSON, &token)
    if err != nil {
        return nil, err
    }
    return &token, nil
}

func main() {
    chaincode, err := contractapi.NewChaincode(&GTTContract{})
    if err != nil {
        fmt.Printf("Error creating GTT chaincode: %v\n", err)
        return
    }
    if err := chaincode.Start(); err != nil {
        fmt.Printf("Error starting GTT chaincode: %v\n", err)
    }
}
