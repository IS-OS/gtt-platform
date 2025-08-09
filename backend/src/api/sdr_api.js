const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fetch SDR rates
router.get('/rates', async (req, res) => {
    try {
        const response = await axios.get('https://www.imf.org/external/np/fin/data/sdr_rr.aspx?date=2025-08-09');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch SDR rates' });
    }
});

// Update GTT SDR backing
router.post('/update-backing', async (req, res) => {
    try {
        const { tokenId, sdrValue } = req.body;
        const result = await invokeChaincode('asset_backing', 'UpdateBacking', [tokenId, '0', '0', sdrValue.toString()]);
        res.status(200).json({ message: 'SDR backing updated', result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;