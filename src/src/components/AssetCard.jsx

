import React from 'react';
import { calculateGrossMargin, formatCurrency, getStatusColor } from '../utils/dataController';
import { TrendingUp, MapPin, Tool, DollarSign } from 'lucide-react';

const AssetCard = ({ asset }) => {
  const margin = calculateGrossMargin(asset.resale_value, asset.acquisition_cost, asset.repair_cost);
  const isHighMargin = margin > 20;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-2xl">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-slate-100 font-semibold text-lg leading-tight">{asset.address}</h3>
            <div className="flex items-center text-slate-500 text-sm mt-1">
              <MapPin size={14} className="mr-1" />
              {asset.city}, {asset.state}
            </div>
          </div>
          <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusColor(asset.status)}`}>
            {asset.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-1">
            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">Acquisition</p>
            <p className="text-slate-200 font-mono">{formatCurrency(asset.acquisition_cost)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">Est. Resale</p>
            <p className="text-slate-200 font-mono font-semibold">{formatCurrency(asset.resale_value)}</p>
          </div>
        </div>

        <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800/50 flex items-center justify-between">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg mr-3 ${isHighMargin ? 'bg-emerald-500/10' : 'bg-slate-800'}`}>
              <TrendingUp size={18} className={isHighMargin ? 'text-emerald-400' : 'text-slate-400'} />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Gross Margin</p>
              <p className={`text-lg font-bold font-mono ${parseFloat(margin) < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {margin}%
              </p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest text-right">Repairs</p>
             <p className="text-slate-300 font-mono text-sm">{formatCurrency(asset.repair_cost)}</p>
          </div>
        </div>
      </div>
      
      <div className="h-1 w-full bg-slate-800">
        <div 
          className="h-full bg-indigo-500 transition-all duration-500" 
          style={{ width: `${Math.min(Math.max(margin, 0), 100)}%` }}
        />
      </div>
    </div>
  );
};

export default AssetCard;