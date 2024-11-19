import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Watchlist from './pages/Watchlist';
import Bot from './pages/Bot';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/watchlist" element={<Watchlist />} />
        <Route exact path="/bot" element={<Bot />} />
      </Routes>
    </>
  );
}

export default App;
