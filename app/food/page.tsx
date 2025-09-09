'use client';

import { useState } from 'react';
import FoodHeader from './FoodHeader';
import FoodGrid from './FoodGrid';
import BottomNav from '@/components/BottomNav';

export default function FoodPage() {
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <FoodHeader 
        onCategoryChange={setCategoryFilter}
        onSearchChange={setSearchFilter}
      />
      <FoodGrid 
        categoryFilter={categoryFilter}
        searchFilter={searchFilter}
      />
      <BottomNav />
    </div>
  );
}