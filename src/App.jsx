import React from 'react';

const AssetCard = ({ asset }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-indigo-500/50 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-bold text-white">{asset.address}</h3>
          <p className="text-xs text-slate-400">{asset.city}, {asset.state}</p>
        </div>
        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-950 border border-slate-800 rounded text-slate-300">
          {asset.status}
        </span>
      </div>
      
      <div className="space-y-2 font-mono text-xs">
        <div className="flex justify-between text-slate-500">
          <span>Cost Basis</span>
          <span className="text-white">${(asset.acquisition_cost + asset.repair_cost).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-slate-500">
          <span>Resale Value</span>
          <span className="text-emerald-400">${asset.resale_value.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
