export default function AssetCard({ asset }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{asset.name}</h3>
          <p className="text-sm text-slate-500">{asset.category}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          asset.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {asset.status}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-500">Cost</span>
          <span className="font-mono">${asset.cost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">ROI</span>
          <span className="font-bold text-emerald-600">{asset.roi}%</span>
        </div>
      </div>
    </div>
  );
}
