const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fetch CICA asset data (mock for International Treasury)
router.get('/assets/:id', async (req, res) => {
    try {
        // Mock API call to International Treasury (private endpoint)
        const response = await axios.get(`https://api.int-treasury.org/v1/assets/${req.params.id}`, {
            headers: { Authorization: `Bearer ${process.env.CICA_API_KEY}` }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch CICA asset data' });
    }
});

// Update CICA backing
router.post('/update-backing', async (req, res) => {
    try {
        const { tokenId, cicaValue } = req.body;
        const result = await invokeChaincode('asset_backing', 'UpdateBacking', [tokenId, '0', cicaValue.toString(), '0']);
        res.status(200).json({ message: 'CICA backing updated', result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;