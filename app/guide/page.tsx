'use client';

import { useState } from 'react';
import GuideHeader from './GuideHeader';
import GuideGrid from './GuideGrid';
import BottomNav from '@/components/BottomNav';

export default function GuidePage() {
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <GuideHeader 
        onCategoryChange={setCategoryFilter}
        onSearchChange={setSearchFilter}
      />
      <GuideGrid 
        categoryFilter={categoryFilter}
        searchFilter={searchFilter}
      />
      <BottomNav />
    </div>
  );
}