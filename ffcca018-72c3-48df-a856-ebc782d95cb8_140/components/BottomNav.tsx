'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: '首頁',
      href: '/',
      icon: 'ri-home-line',
      activeIcon: 'ri-home-fill'
    },
    {
      name: '景點',
      href: '/attractions',
      icon: 'ri-map-pin-line',
      activeIcon: 'ri-map-pin-fill'
    },
    {
      name: '美食',
      href: '/food',
      icon: 'ri-restaurant-line',
      activeIcon: 'ri-restaurant-fill'
    },
    {
      name: '購物',
      href: '/shopping',
      icon: 'ri-shopping-bag-line',
      activeIcon: 'ri-shopping-bag-fill'
    },
    {
      name: '攻略',
      href: '/guide',
      icon: 'ri-book-open-line',
      activeIcon: 'ri-book-open-fill'
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                active
                  ? 'text-red-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className={`${active ? item.activeIcon : item.icon} text-2xl mb-1`}></i>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}