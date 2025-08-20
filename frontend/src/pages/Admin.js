import React from 'react';
import Dashboard from '../components/Dashboard';
import TokenTracker from '../components/TokenTracker';
import ComplianceReport from '../components/ComplianceReport';

const Admin = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <div className="mb-4">
                <a href="/ledger" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    View Public Ledger
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Dashboard />
                </div>
                <div>
                    <TokenTracker />
                    <ComplianceReport />
                </div>
            </div>
        </div>
    );
};

export default Admin;
