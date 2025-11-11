import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Ledger from './pages/Ledger';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <nav className="bg-gradient-to-r from-blue-800 to-green-800 text-white p-6 shadow-xl">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">GTT — Honest SDG Liquidity Layer</h1>
            <div className="space-x-6 text-lg">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/admin" className="hover:underline">Admin</Link>
              <Link to="/ledger" className="hover:underline">Public Ledger</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ledger" element={<Ledger />} />
        </Routes>

        <footer className="bg-gray-900 text-white text-center p-6 mt-20">
          <p className="text-xl">Built with love for every human being on Earth</p>
          <p className="mt-2">No greed. No borders. Only shared future.</p>
          <p className="mt-4 text-2xl font-bold">Ubuntu — I am because we are</p>
          <p className="text-sm mt-4">11 November 2025 — For humanity</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
