const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectToFabric } = require('./config/blockchain');
const gttRoutes = require('./api/gtt_api');
const realEstateRoutes = require('./api/real_estate_api');
const sdrRoutes = require('./api/sdr_api');
const cicaRoutes = require('./api/cica_api');
const complianceRoutes = require('./api/compliance_api');
const auth = require('./middleware/auth');
const rateLimiter = require('./middleware/rate_limiter');
require('./config/env');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Connect to Hyperledger Fabric
connectToFabric().then(() => console.log('Connected to Hyperledger Fabric'));

// Routes
app.use('/api/gtt', auth, gttRoutes);
app.use('/api/real-estate', auth, realEstateRoutes);
app.use('/api/sdr', auth, sdrRoutes);
app.use('/api/cica', auth, cicaRoutes);
app.use('/api/compliance', auth, complianceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));