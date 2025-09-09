'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AttractionsHeaderProps {
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
}

export default function AttractionsHeader({ onCategoryChange, onSearchChange }: AttractionsHeaderProps) {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['全部', '地標', '公園', '觀景', '海灘', '博物館'];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* 頂部導航 */}
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="cursor-pointer">
          <i className="ri-arrow-left-line text-2xl text-gray-600"></i>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">悉尼景點</h1>
        <div className="w-6"></div>
      </div>

      {/* 搜尋框 */}
      <div className="px-4 pb-4">
        <div className="relative">
          <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="搜尋景點名稱或類型..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 分類篩選 */}
      <div className="px-4 pb-4">
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}