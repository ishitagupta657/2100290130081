// components/PriceFilter.tsx
import React, { useState } from 'react';

interface PriceFilterProps {
  onFilterChange: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <form onSubmit={handleFilterSubmit} className="mb-4">
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Min Price</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Price</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">Apply</button>
    </form>
  );
};

export default PriceFilter;
