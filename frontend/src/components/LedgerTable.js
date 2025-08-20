import React from 'react';

const LedgerTable = ({ transactions }) => {
    return (
        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Tx ID</th>
                        <th className="px-4 py-2">Block Number</th>
                        <th className="px-4 py-2">Owner</th>
                        <th className="px-4 py-2">Value</th>
                        <th className="px-4 py-2">Timestamp</th>
                        <th className="px-4 py-2">Asset Backing</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{tx.txId}</td>
                            <td className="border px-4 py-2">{tx.blockNumber}</td>
                            <td className="border px-4 py-2">{tx.owner}</td>
                            <td className="border px-4 py-2">{tx.value}</td>
                            <td className="border px-4 py-2">{new Date(tx.timestamp).toLocaleString()}</td>
                            <td className="border px-4 py-2">{JSON.stringify(tx.assetBacking)}</td>
                            <td className="border px-4 py-2">{tx.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LedgerTable;