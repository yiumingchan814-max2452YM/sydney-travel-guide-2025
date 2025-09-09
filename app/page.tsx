'use client';

import HeroSection from '@/components/HeroSection';
import QuickLinks from '@/components/QuickLinks';
import FeaturedSection from '@/components/FeaturedSection';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <QuickLinks />
      <FeaturedSection />
      <BottomNav />
    </div>
  );
}