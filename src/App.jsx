import React from 'react';
import AssetCard from './components/AssetCard';

const sampleAsset = {
  name: "Sample Property",
  category: "Real Estate",
  status: "Active",
  cost: 250000,
  roi: 12
};

export default function App() {
  return (
    <div className="p-10 bg-slate-100 min-h-screen">
      <AssetCard asset={sampleAsset} />
    </div>
  );
}
