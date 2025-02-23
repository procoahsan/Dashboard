import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

// Sample watchlist data (you can replace this with API data)
const watchlistData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 62345.67, change: 2.34, volume: '32.5B' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 2456.89, change: -0.87, volume: '14.2B' },
  { id: 3, name: 'Cardano', symbol: 'ADA', price: 0.3567, change: 1.45, volume: '1.1B' },
  { id: 4, name: 'Solana', symbol: 'SOL', price: 145.23, change: 3.12, volume: '2.8B' },
];

export default function Watchlist() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(watchlistData);

  // Function to remove item from watchlist
  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter(coin => coin.id !== id));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow p-6">
          <div className="max-w-6xl mx-auto">
            {/* Watchlist Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                My Watchlist
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Track your favorite cryptocurrencies in real-time
              </p>
            </div>

            {/* Watchlist Table */}
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">Coin</th>
                    <th className="py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">Price</th>
                    <th className="py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">24h Change</th>
                    <th className="py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">24h Volume</th>
                    <th className="py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {watchlist.length > 0 ? (
                    watchlist.map((coin) => (
                      <tr 
                        key={coin.id} 
                        className="border-t border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold">{coin.symbol[0]}</span>
                            </div>
                            <div>
                              <p className="text-gray-800 dark:text-white font-medium">{coin.name}</p>
                              <p className="text-gray-500 dark:text-gray-400 text-sm">{coin.symbol}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-800 dark:text-white">
                          ${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="py-4 px-6">
                          <span className={coin.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                            {coin.change >= 0 ? '+' : ''}{coin.change}%
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-800 dark:text-white">${coin.volume}</td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => removeFromWatchlist(coin.id)}
                            className="text-red-500 dark:text-red-400 hover:text-red-400 dark:hover:text-red-300 bg-gray-200/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-8 text-center text-gray-500 dark:text-gray-400">
                        Your watchlist is empty. Add some coins to track!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Add Coin Hint */}
            {watchlist.length < 5 && (
              <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
                <p>Want to add more coins? Visit the Markets page to explore and add to your watchlist.</p>
              </div>
            )}
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}