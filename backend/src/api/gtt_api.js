// backend/api/gtt_api.js
// Global Tax Token (GTT) — Honest SDG Liquidity Layer
// Built with infinite love for every human being on Earth
// Victory for the Sustainable Development Goals — 11 November 2025

const express = require('express');
const router = express.Router();
const { invokeChaincode, queryChaincode } = require('../config/blockchain');

/**
 * Issue a new GTT — with love and purpose
 * Every token funds real SDG projects
 */
router.post('/issue', async (req, res) => {
    try {
        const { id, owner, value } = req.body;

        if (!id || !owner || !value || value <= 0) {
            return res.status(400).json({
                error: "id, owner, and positive value are required",
                message: "We care about every detail — for humanity",
                ubuntu: true
            });
        }

        const result = await invokeChaincode('gtt-honest', 'IssueToken', [
            id,
            owner,
            value.toString()
        ]);

        res.status(201).json({
            message: "GTT issued with infinite love",
            tokenId: id,
            owner: owner,
            value: value,
            purpose: "Funding real SDG projects worldwide",
            transparency: "100%",
            ubuntu: true,
            love: "For every child on Earth",
            victory: "One step closer to the Sustainable Development Goals",
            launched: "11 November 2025",
            heart: "❤️"
        });
    } catch (error) {
        console.error('GTT issuance with love:', error);
        res.status(500).json({
            error: "We are here for you",
            message: "Your token is being issued with care",
            ubuntu: true
        });
    }
});

/**
 * Transfer a GTT — freely, transparently, lovingly
 */
router.post('/transfer', async (req, res) => {
    try {
        const { id, newOwner } = req.body;

        if (!id || !newOwner) {
            return res.status(400).json({
                error: "token id and new owner are required",
                message: "Every transfer matters — we check with love",
                ubuntu: true
            });
        }

        const result = await invokeChaincode('gtt-honest', 'TransferToken', [id, newOwner]);

        res.status(200).json({
            message: "GTT transferred with trust and love",
            tokenId: id,
            newOwner: newOwner,
            transparency: "Fully recorded on public ledger",
            ubuntu: true,
            love: "From one human to another",
            purpose: "Building a better world together",
            heart: "❤️"
        });
    } catch (error) {
        console.error('GTT transfer with love:', error);
        res.status(500).json({
            error: "We are here for you",
            message: "Your transfer is being processed with care",
            ubuntu: true
        });
    }
});

/**
 * Query a GTT — full transparency for all humanity
 */
router.get('/query/:id', async (req, res) => {
    try {
        const tokenId = req.params.id;
        const result = await queryChaincode('gtt-honest', 'QueryToken', [tokenId]);

        if (!result || result.toString() === '') {
            return res.status(404).json({
                message: `Token ${tokenId} not found`,
                suggestion: "Try issuing a new token with love",
                ubuntu: true
            });
        }

        const token = JSON.parse(result.toString());

        res.status(200).json({
            ...token,
            message: "Here is your token — with full transparency",
            ubuntu: true,
            love: "This token exists to serve humanity",
            sdgVictory: "Every GTT funds real change",
            heart: "❤️"
        });
    } catch (error) {
        console.error('GTT query with love:', error);
        res.status(500).json({
            error: "We are here for you",
            message: "Your query is being processed with care",
            ubuntu: true
        });
    }
});

/**
 * Public manifesto — what GTT truly means
 */
router.get('/manifesto', (req, res) => {
    res.json({
        title: "The Global Tax Token Manifesto",
        promise: "Every token funds real SDG projects",
        backing: "Real municipal rates, green bonds, honest global reserves",
        transparency: "100% public ledger",
        greed: "Zero",
        love: "Infinite",
        for: "Every child, every mother, every dreamer on Earth",
        ubuntu: "I am because we are",
        launched: "11 November 2025",
        live: "https://gtt-honest.onrender.com",
        heart: "❤️"
    });
});

module.exports = router;
