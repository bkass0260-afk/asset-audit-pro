/**
 * Asset Audit Pro - Data Controller
 * Logic for financial KPIs and data normalization
 */

export const calculateGrossMargin = (resaleValue, acquisitionCost, repairCost) => {
  if (!resaleValue || resaleValue <= 0) return 0;
  
  const totalInvestment = (acquisitionCost || 0) + (repairCost || 0);
  const margin = (resaleValue - totalInvestment) / resaleValue;
  
  return (margin * 100).toFixed(2); // Returns percentage as string
};

export const formatCurrency = (val) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};

export const getStatusColor = (status) => {
  const mapping = {
    'Active': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Under Repair': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Pending Sale': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Sold': 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };
  return mapping[status] || 'bg-slate-500/10 text-slate-400';
};