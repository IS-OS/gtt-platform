const express = require('express');
const router = express.Router();
const { invokeChaincode, queryChaincode } = require('../config/blockchain');

// Issue a new GTT
router.post('/issue', async (req, res) => {
    try {
        const { id, owner, value } = req.body;
        const result = await invokeChaincode('gtt', 'IssueToken', [id, owner, value.toString()]);
        res.status(201).json({ message: 'Token issued', result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Transfer GTT
router.post('/transfer', async (req, res) => {
    try {
        const { id, newOwner } = req.body;
        const result = await invokeChaincode('gtt', 'TransferToken', [id, newOwner]);
        res.status(200).json({ message: 'Token transferred', result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Query GTT
router.get('/query/:id', async (req, res) => {
    try {
        const result = await queryChaincode('gtt', 'QueryToken', [req.params.id]);
        res.status(200).json(JSON.parse(result));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;