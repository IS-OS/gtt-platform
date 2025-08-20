import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">Global Tax Token Platform</h1>
            <p className="text-lg mt-4">
                A blockchain-based solution for global debt relief and sustainable development,
                backed by real estate, CICA assets, and UN SDRs.
            </p>
            <div className="mt-6 space-x-4">
                <a href="/admin" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
                    Access Admin Dashboard
                </a>
                <a href="/ledger" className="bg-green-500 text-white p-3 rounded hover:bg-green-600">
                    View Public Ledger
                </a>
            </div>
        </div>
    );
};

export default Home;
