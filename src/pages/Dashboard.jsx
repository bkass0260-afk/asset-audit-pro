import useAssets from '../hooks/useAssets';
import AssetCard from '../components/AssetCard';

export default function Dashboard() {
  const { assets } = useAssets();

    return (
        <main className="p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Portfolio Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {assets.map((asset) => (
                                      <AssetCard key={asset.id} asset={asset} />
                                              ))}
                                                    </div>
                                                        </main>
                                                          );
                                                          }
                                                          