import './App.css';
import AssetCard from './components/AssetCard';

function App() {
  // Your asset data
  const assets = [
    { id: 1, name: 'Main Property', category: 'Real Estate', cost: 250000, roi: 12.5, status: 'Active' },
    { id: 2, name: 'Tech Portfolio', category: 'Stocks', cost: 75000, roi: 8.2, status: 'Active' },
    { id: 3, name: 'Equipment Lease', category: 'Business', cost: 15000, roi: 5.0, status: 'Maintenance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="bg-slate-950 border-b border-slate-700 py-6 px-8">
        <h1 className="text-3xl font-bold text-white">Asset Audit Pro</h1>
        <p className="text-slate-400 mt-2">Institutional-grade asset management and portfolio auditing</p>
      </header>
      
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Dashboard</h2>
            <p className="text-slate-300">Welcome to Asset Audit Pro. Managing {assets.length} active assets.</p>
          </div>

          {/* Asset Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((item) => (
              <AssetCard key={item.id} asset={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
