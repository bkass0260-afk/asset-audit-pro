import { useContext } from 'react';
import { AssetContext } from '../context/AssetContext';

export default function useAssets() {
  return useContext(AssetContext);
  }

  