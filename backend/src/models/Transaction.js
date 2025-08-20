const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    txId: String,
    blockNumber: Number,
    owner: String,
    value: Number,
    timestamp: Date,
    assetBacking: Object,
    status: String
});

module.exports = mongoose.model('Transaction', transactionSchema);