import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { AssetProvider } from './context/AssetContext';

export default function App() {
  return (
    <AssetProvider>
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <Dashboard />
      </div>
    </AssetProvider>
  );
}
