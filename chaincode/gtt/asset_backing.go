package main

import (
    "encoding/json"
    "fmt"
    "github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// AssetBackingContract manages GTT asset backing
type AssetBackingContract struct {
    contractapi.Contract
}

// AssetBacking defines backing proportions
type AssetBacking struct {
    TokenID      string             `json:"tokenId"`
    RealEstate   float64            `json:"realEstate"`
    CICA         float64            `json:"cica"`
    SDR          float64            `json:"sdr"`
    TotalValue   float64            `json:"totalValue"`
}

// UpdateBacking updates asset backing for a token
func (c *AssetBackingContract) UpdateBacking(ctx contractapi.TransactionContextInterface, tokenID string, realEstate float64, cica float64, sdr float64) error {
    total := realEstate + cica + sdr
    backing := AssetBacking{
        TokenID:    tokenID,
        RealEstate: realEstate,
        CICA:       cica,
        SDR:        sdr,
        TotalValue: total,
    }
    backingJSON, err := json.Marshal(backing)
    if err != nil {
        return err
    }
    return ctx.GetStub().PutState(tokenID+"_backing", backingJSON)
}

// QueryBacking retrieves asset backing details
func (c *AssetBackingContract) QueryBacking(ctx contractapi.TransactionContextInterface, tokenID string) (*AssetBacking, error) {
    backingJSON, err := ctx.GetStub().GetState(tokenID+"_backing")
    if err != nil {
        return nil, fmt.Errorf("failed to read backing %s: %v", tokenID, err)
    }
    if backingJSON == nil {
        return nil, fmt.Errorf("backing %s does not exist", tokenID)
    }
    var backing AssetBacking
    err = json.Unmarshal(backingJSON, &backing)
    if err != nil {
        return nil, err
    }
    return &backing, nil
}

func main() {
    chaincode, err := contractapi.NewChaincode(&AssetBackingContract{})
    if err != nil {
        fmt.Printf("Error creating AssetBacking chaincode: %v\n", err)
        return
    }
    if err := chaincode.Start(); err != nil {
        fmt.Printf("Error starting AssetBacking chaincode: %v\n", err)
    }
}
