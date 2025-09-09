'use client';

import Link from 'next/link';

interface GuideHeaderProps {
  data: any;
}

export default function GuideHeader({ data }: GuideHeaderProps) {
  return (
    <div className="relative">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-64 object-cover object-top"
      />
      
      {/* 頂部導航覆蓋層 */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
        <Link href="/guide" className="cursor-pointer">
          <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-xl text-gray-800"></i>
          </div>
        </Link>
        <div className="flex space-x-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer">
            <i className="ri-share-line text-xl text-gray-800"></i>
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer">
            <i className="ri-heart-line text-xl text-gray-800"></i>
          </button>
        </div>
      </div>

      {/* 底部漸層覆蓋層 */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <div className="text-white">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">
              {data.category}
            </span>
            <span className="bg-purple-500/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
              {data.readTime}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <i className="ri-user-line"></i>
              <span>{data.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="ri-calendar-line"></i>
              <span>{data.publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="ri-eye-line"></i>
              <span>{data.views?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}