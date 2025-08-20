const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions (public)
router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ timestamp: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Search transactions (public)
router.get('/search', async (req, res) => {
    try {
        const { txId, owner, fromDate, toDate } = req.query;
        const query = {};
        if (txId) query.txId = txId;
        if (owner) query.owner = owner;
        if (fromDate) query.timestamp = { $gte: new Date(fromDate) };
        if (toDate) query.timestamp = { ...query.timestamp, $lte: new Date(toDate) };
        const transactions = await Transaction.find(query).sort({ timestamp: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;