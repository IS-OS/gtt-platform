const express = require('express');
const router = express.Router();
const axios = require('axios');

// Verify KYC/AML
router.post('/verify', async (req, res) => {
    try {
        const { transactionId, userId } = req.body;
        const result = await invokeChaincode('compliance', 'CheckCompliance', [transactionId, userId]);
        // Integrate with TaxBit for compliance (mock)
        const complianceResponse = await axios.post('https://api.taxbit.com/v1/kyc/verify', {
            userId,
            transactionId
        }, {
            headers: { Authorization: `Bearer ${process.env.TAXBIT_API_KEY}` }
        });
        res.status(200).json({ chaincodeResult: result, compliance: complianceResponse.data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Generate compliance report
router.get('/report/:txId', async (req, res) => {
    try {
        const result = await queryChaincode('compliance', 'QueryCompliance', [req.params.txId]);
        res.status(200).json(JSON.parse(result));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;