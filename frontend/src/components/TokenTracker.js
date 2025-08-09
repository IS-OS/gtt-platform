import React, { useState } from 'react';
import api from '../api/api';

const TokenTracker = () => {
    const [tokenId, setTokenId] = useState('');
    const [tokenData, setTokenData] = useState(null);
    const [error, setError] = useState('');

    const handleQuery = async () => {
        try {
            const response = await api.get(`/gtt/query/${tokenId}`);
            setTokenData(response.data);
            setError('');
        } catch (err) {
            setError('Failed to fetch token data');
            setTokenData(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold">Track GTT</h2>
            <div className="my-4">
                <input
                    type="text"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                    placeholder="Enter Token ID"
                    className="border p-2 rounded"
                />
                <button
                    onClick={handleQuery}
                    className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Query
                </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {tokenData && (
                <div>
                    <p><strong>ID:</strong> {tokenData.id}</p>
                    <p><strong>Owner:</strong> {tokenData.owner}</p>
                    <p><strong>Value:</strong> {tokenData.value}</p>
                    <p><strong>Asset Backing:</strong> {JSON.stringify(tokenData.assetBacking)}</p>
                </div>
            )}
        </div>
    );
};

export default TokenTracker;