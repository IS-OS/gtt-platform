import React, { useEffect, useState } from 'react';
import api from '../api/api';

const Dashboard = () => {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await api.get('/gtt/query/GTT001');
                setTokens([response.data]);
            } catch (error) {
                console.error('Error fetching tokens:', error);
            }
        };
        fetchTokens();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">GTT Dashboard</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner</th>
                        <th>Value</th>
                        <th>Asset Backing</th>
                    </tr>
                </thead>
                <tbody>
                    {tokens.map(token => (
                        <tr key={token.id}>
                            <td>{token.id}</td>
                            <td>{token.owner}</td>
                            <td>{token.value}</td>
                            <td>{JSON.stringify(token.assetBacking)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;