import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../api/api';
import LedgerTable from '../components/LedgerTable';

const Ledger = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchParams, setSearchParams] = useState({ txId: '', owner: '', fromDate: '', toDate: '' });
    const socket = io(process.env.REACT_APP_API_URL || 'http://localhost:3000');

    useEffect(() => {
        fetchTransactions();
        socket.on('new_transaction', (newTx) => {
            setTransactions(prev => [newTx, ...prev]);
        });

        return () => socket.disconnect();
    }, []);

    const fetchTransactions = async (params = {}) => {
        try {
            const response = await api.get('/ledger/transactions', { params });
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const handleSearch = () => {
        fetchTransactions(searchParams);
    };

    const handleChange = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">Public Ledger</h1>
            <p className="text-center mt-2">View and search all GTT transactions in real-time.</p>
            <div className="my-4 grid grid-cols-2 gap-4">
                <input name="txId" value={searchParams.txId} onChange={handleChange} placeholder="Transaction ID" className="border p-2 rounded" />
                <input name="owner" value={searchParams.owner} onChange={handleChange} placeholder="Owner" className="border p-2 rounded" />
                <input name="fromDate" type="date" value={searchParams.fromDate} onChange={handleChange} className="border p-2 rounded" />
                <input name="toDate" type="date" value={searchParams.toDate} onChange={handleChange} className="border p-2 rounded" />
            </div>
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Search</button>
            <LedgerTable transactions={transactions} />
        </div>
    );
};

export default Ledger;