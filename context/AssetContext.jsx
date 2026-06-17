import { createContext, useState } from 'react';

export const AssetContext = createContext();

const initialAssets = [
  { id: 1, name: 'Sample Property A', category: 'Real Estate', status: 'Active', cost: 250000, roi: 12 },
  { id: 2, name: 'Sample Property B', category: 'Commercial', status: 'Active', cost: 480000, roi: 9 },
  { id: 3, name: 'Sample Property C', category: 'Industrial', status: 'Inactive', cost: 310000, roi: -2 },
];

export function AssetProvider({ children }) {
  const [assets, setAssets] = useState(initialAssets);

  return (
    <AssetContext.Provider value={{ assets, setAssets }}>
      {children}
    </AssetContext.Provider>
  );
}
