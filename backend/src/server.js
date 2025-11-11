// backend/src/server.js
// Global Tax Token (GTT) — Honest SDG Liquidity Layer
// Built with love for every human being on Earth
// No greed. No borders. Only shared future.
// Launched: 11 November 2025

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const { connectToFabric } = require('./config/blockchain');

// Routes — HONEST AND GLOBAL
const gttRoutes         = require('./api/gtt_api');
const realEstateRoutes  = require('./api/real_estate_api');
const sdrRoutes         = require('./api/sdr_api');
const reserveRoutes     = require('./api/reserve_api');      // Formerly cica — now honest global reserve
const complianceRoutes  = require('./api/compliance_api');
const ledgerRoutes      = require('./api/ledger_api');      // Public transparency for humanity

// Middleware — Protection with love
const auth          = require('./middleware/auth');
const rateLimiter   = require('./middleware/rate_limiter');

require('./config/env');

const app = express();

// Global middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(rateLimiter);

// === DATABASE & BLOCKCHAIN CONNECTIONS WITH LOVE ===
connectDB(); // MongoDB for humanity
connectToFabric().then(() => {
    console.log('Connected to Hyperledger Fabric — with love for all nations');
});

// === PUBLIC ROUTES — OPEN TO THE WORLD ===
app.use('/api/ledger', ledgerRoutes); // Full transparency — no auth needed

// === PROTECTED ROUTES — SECURE BUT BENEVOLENT ===
app.use('/api/gtt', auth, gttRoutes);
app.use('/api/real-estate', auth, realEstateRoutes);
app.use('/api/sdr', auth, sdrRoutes);
app.use('/api/reserve', auth, reserveRoutes);     // Honest global reserve
app.use('/api/compliance', auth, complianceRoutes);

// === ROOT OF LOVE — WELCOME TO ALL HUMANITY ===
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the Global Tax Token (GTT) — Honest SDG Liquidity Layer",
        mission: "To fund the Sustainable Development Goals with radical transparency, love, and ubuntu — for every human being on Earth",
        ubuntu: "I am because we are",
        love: "infinite",
        greed: "zero",
        transparency: "100%",
        heart: "❤️",
        purpose: "For every child in Lagos, Delhi, São Paulo, Nairobi, Jakarta, and beyond",
        promise: "No hidden accounts. No personal gain. Only truth."
    });
});

// === GLOBAL ERROR HANDLING WITH COMPASSION ===
app.use((err, req, res, next) => {
    console.error('Error with love:', err);
    res.status(500).json({
        error: "Something went wrong — but we are here for you",
        message: "Our team of humans is fixing it with care",
        ubuntu: true
    });
});

// === START THE SERVER — FOR HUMANITY ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`GTT Honest Server running with infinite love on port ${PORT}`);
    console.log(`Live at: https://gtt-honest.onrender.com`);
    console.log(`For every child who deserves hope. For every mother who deserves dignity.`);
    console.log(`Ubuntu — I am because we are.`);
    console.log(`11 November 2025 — The world is now a little more honest.`);
});

module.exports = app;
