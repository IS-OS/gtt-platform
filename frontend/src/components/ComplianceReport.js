import React, { useState } from 'react';
import api from '../api/api';

const ComplianceReport = () => {
    const [txId, setTxId] = useState('');
    const [report, setReport] = useState(null);
    const [error, setError] = useState('');

    const handleFetchReport = async () => {
        try {
            const response = await api.get(`/compliance/report/${txId}`);
            setReport(response.data);
            setError('');
        } catch (err) {
            setError('Failed to fetch compliance report');
            setReport(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold">Compliance Report</h2>
            <div className="my-4">
                <input
                    type="text"
                    value={txId}
                    onChange={(e) => setTxId(e.target.value)}
                    placeholder="Enter Transaction ID"
                    className="border p-2 rounded"
                />
                <button
                    onClick={handleFetchReport}
                    className="ml-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                    Fetch Report
                </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {report && (
                <div>
                    <p><strong>Transaction ID:</strong> {report.transactionId}</p>
                    <p><strong>User ID:</strong> {report.userId}</p>
                    <p><strong>Status:</strong> {report.status}</p>
                    <p><strong>Details:</strong> {report.details}</p>
                </div>
            )}
        </div>
    );
};

export default ComplianceReport;
