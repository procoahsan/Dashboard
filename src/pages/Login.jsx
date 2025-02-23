import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          CryptoPulse
        </h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Track Your Crypto Journey
          <span className="block text-purple-400 mt-2">In Real-Time</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Monitor your cryptocurrency portfolio, get market insights, and make informed decisions with our powerful dashboard.
        </p>
        <Link to="/dashboard">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Crypto Dashboard
          </button>
        </Link>

        {/* Crypto Stats Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <p className="text-gray-400">Market Cap</p>
            <p className="text-2xl font-bold text-green-400">$2.45T</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <p className="text-gray-400">24h Volume</p>
            <p className="text-2xl font-bold text-blue-400">$98.7B</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <p className="text-gray-400">BTC Dominance</p>
            <p className="text-2xl font-bold text-purple-400">52.3%</p>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose CryptoPulse?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Real-Time Updates</h4>
              <p className="text-gray-400">Get instant price updates and market trends.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Advanced Analytics</h4>
              <p className="text-gray-400">Deep insights into market movements.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4m-8 0c0-2.21-1.79-4-4-4S0 8.79 0 11s1.79 4 4 4m8 0c0 2.21-1.79 4-4 4s-4-1.79-4-4m8 0c0-2.21 1.79-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Portfolio Tracking</h4>
              <p className="text-gray-400">Manage all your assets in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>&copy; 2025 CryptoPulse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;