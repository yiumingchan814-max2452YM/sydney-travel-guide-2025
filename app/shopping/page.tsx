'use client';

import { useState } from 'react';
import ShoppingHeader from './ShoppingHeader';
import ShoppingGrid from './ShoppingGrid';
import BottomNav from '@/components/BottomNav';

export default function ShoppingPage() {
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <ShoppingHeader 
        onCategoryChange={setCategoryFilter}
        onSearchChange={setSearchFilter}
      />
      <ShoppingGrid 
        categoryFilter={categoryFilter}
      />
      <BottomNav />
    </div>
  );
}