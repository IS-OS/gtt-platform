import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center max-w-5xl">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8">
          Global Tax Token (GTT)
        </h1>
        <h2 className="text-5xl font-bold text-gray-800 mb-10">
          Honest SDG Liquidity Layer
        </h2>
        <p className="text-3xl text-gray-700 leading-relaxed mb-12">
          A global, transparent, open-source platform to fund the Sustainable Development Goals.<br/>
          Backed by real assets. Governed by love. Built for every human being.
        </p>
        <p className="text-4xl font-bold text-blue-700 mb-12">
          No hidden accounts. No personal gain. Only truth.
        </p>
        <p className="text-5xl font-bold text-green-700 mb-16">
          Ubuntu — I am because we are
        </p>

        <div className="space-x-12">
          <Link to="/admin" className="bg-blue-700 text-white text-2xl px-12 py-6 rounded-xl hover:bg-blue-800 transition shadow-2xl">
            Access Global Dashboard
          </Link>
          <Link to="/ledger" className="bg-green-700 text-white text-2xl px-12 py-6 rounded-xl hover:bg-green-800 transition shadow-2xl">
            View Public Ledger
          </Link>
        </div>

        <p className="text-xl text-gray-600 mt-20">
          Launched with love — 11 November 2025<br/>
          For every child in Lagos, Delhi, São Paulo, and beyond.
        </p>
      </div>
    </div>
  );
};

export default Home;
