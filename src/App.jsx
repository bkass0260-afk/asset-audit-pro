import React, { useState, useMemo } from 'react';
import AssetCard from './components/AssetCard';
import { LayoutGrid, Database, ShieldCheck, Filter } from 'lucide-react';

const DUMMY_ASSETS = [
  { id: 1, address: '725 5th Ave (Penthouse)', city: 'New York', state: 'NY', acquisition_cost: 4200000, repair_cost: 850000, resale_value: 6800000, status: 'Active' },
  { id: 2, address: '110 N Wacker Dr', city: 'Chicago', state: 'IL', acquisition_cost: 2100000, repair_cost: 400000, resale_value: 2900000, status: 'Under Repair' },
  { id: 3, address: '444 Ocean Drive', city: 'Miami', state: 'FL', acquisition_cost: 1850000, repair_cost: 220000, resale_value: 2650000, status: 'Pending Sale' },
  { id: 4, address: '121 Seaport Blvd', city: 'Boston', state: 'MA', acquisition_cost: 3100000, repair_cost: 150000, resale_value: 4100000, status: 'Active' },
  { id: 5, address: '900 Biscayne Blvd', city: 'Miami', state: 'FL', acquisition_cost: 950000, repair_cost: 120000, resale_value: 1450000, status: 'Sold' },
  { id: 6, address: 'Wrigleyville Multi-Unit', city: 'Chicago', state: 'IL', acquisition_cost: 1200000, repair_cost: 600000, resale_value: 1950000, status: 'Under Repair' },
  { id: 7, address: 'Beacon Hill Townhouse', city: 'Boston', state: 'MA', acquisition_cost: 5400000, repair_cost: 300000, resale_value: 7200000, status: 'Active' },
  { id: 8, address: 'Chelsea Highline Loft', city: 'New York', state: 'NY', acquisition_cost: 2800000, repair_cost: 450000, resale_value: 3900000, status: 'Active' },
];

const App = () => {
  const [assets] = useState(DUMMY_ASSETS);

  const stats = useMemo(() => {
    const totalInv = assets.reduce((acc, curr) => acc + curr.acquisition_cost + curr.repair_cost, 0);
    const totalVal = assets.reduce((acc, curr) => acc + curr.resale_value, 0);
    const avgMargin = ((totalVal - totalInv) / totalVal * 100).toFixed(1);
    return { totalInv, totalVal, avgMargin };
  }, [assets]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Header */}
      <header className="border-b border-slate-900 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">ASSET AUDIT <span className="text-indigo-500">PRO</span></h1>
              <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Institutional Portfolio Manager</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="text-right">
              <p className="text-slate-500 text-[10px] font-bold uppercase">Portfolio Value</p>
              <p className="text-white font-mono text-lg font-semibold">
                ${(stats.totalVal / 1000000).toFixed(2)}M
              </p>
            </div>
            <div className="h-10 w-[1px] bg-slate-800" />
            <div className="text-right">
              <p className="text-slate-500 text-[10px] font-bold uppercase">Avg. Gross Margin</p>
              <p className="text-emerald-400 font-mono text-lg font-semibold">{stats.avgMargin}%</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button className="px-4 py-1.5 bg-slate-800 rounded-md text-sm font-medium shadow-sm">Grid</button>
              <button className="px-4 py-1.5 text-slate-500 hover:text-slate-300 text-sm font-medium">List</button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              <Filter size={16} />
              Filter Properties
            </button>
          </div>
          <p className="text-slate-500 text-sm">
            Showing <span className="text-slate-200 font-semibold">{assets.length}</span> institutional assets
          </p>
        </div>

        {/* Asset Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 w-full border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm py-2 px-6">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> DB Connected</span>
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Node V20.4</span>
          </div>
          <span>&copy; 2024 Audit Pro Systems v1.0.4</span>
        </div>
      </footer>
    </div>
  );
};

export default App;