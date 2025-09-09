'use client';

import { useState } from 'react';
import AttractionsHeader from './AttractionsHeader';
import AttractionsGrid from './AttractionsGrid';
import BottomNav from '@/components/BottomNav';

export default function AttractionsPage() {
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <AttractionsHeader 
        onCategoryChange={setCategoryFilter}
        onSearchChange={setSearchFilter}
      />
      <AttractionsGrid 
        categoryFilter={categoryFilter}
        searchFilter={searchFilter}
      />
      <BottomNav />
    </div>
  );
}