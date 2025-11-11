// backend/controllers/gtt_controller.js
const { getContract } = require('../config/blockchain');

const issueToken = async (id, owner, value) => {
    const contract = await getContract();
    await contract.submitTransaction('IssueToken', id, owner, value.toString());
    return { id, owner, value, message: "Issued with love for humanity" };
};

const queryToken = async (id) => {
    const contract = await getContract();
    const result = await contract.evaluateTransaction('QueryToken', id);
    return JSON.parse(result.toString());
};

module.exports = { issueToken, queryToken };