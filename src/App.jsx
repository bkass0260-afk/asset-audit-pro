import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="bg-slate-950 border-b border-slate-700 py-6 px-8">
        <h1 className="text-3xl font-bold text-white">Asset Audit Pro</h1>
        <p className="text-slate-400 mt-2">Institutional-grade asset management and portfolio auditing</p>
      </header>
      
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Dashboard</h2>
            <p className="text-slate-300">Welcome to Asset Audit Pro. Start managing your portfolio assets and perform comprehensive audits.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App