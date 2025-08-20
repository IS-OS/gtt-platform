const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

async function connectToFabric() {
    const walletPath = path.join(__dirname, '../../config/wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    const connectionProfile = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config/fabric-config.json')));
    
    const gateway = new Gateway();
    await gateway.connect(connectionProfile, {
        wallet,
        identity: 'admin',
        discovery: { enabled: true, asLocalhost: true }
    });
    
    return gateway.getNetwork('gttchannel');
}

async function invokeChaincode(channelName, chaincodeName, fcn, args) {
    const network = await connectToFabric();
    const contract = network.getContract(chaincodeName);
    return await contract.submitTransaction(fcn, ...args);
}

async function queryChaincode(channelName, chaincodeName, fcn, args) {
    const network = await connectToFabric();
    const contract = network.getContract(chaincodeName);
    return await contract.evaluateTransaction(fcn, ...args);
}

module.exports = { connectToFabric, invokeChaincode, queryChaincode };
