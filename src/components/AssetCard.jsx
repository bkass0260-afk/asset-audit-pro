import React from 'react';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

const AssetCard = ({ asset }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
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

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm flex items-center gap-1">
            <DollarSign size={16} /> Cost
          </span>
          <span className="font-mono font-medium">${asset.cost.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm flex items-center gap-1">
            <TrendingUp size={16} /> ROI
          </span>
          <span className="font-bold text-emerald-600">{asset.roi}%</span>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
