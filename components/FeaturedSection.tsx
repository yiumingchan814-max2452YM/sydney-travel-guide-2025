'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeaturedSection() {
  const [likedItems, setLikedItems] = useState<string[]>([]);

  const featuredAttractions = [
    {
      id: 'sydney-opera-house',
      name: '悉尼歌劇院',
      category: '地標建築',
      rating: 4.8,
      reviews: 25847,
      location: '環形碼頭',
      description: '世界著名的表演藝術中心，獨特的帆船造型建築',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20iconic%20white%20shell%20architecture%20against%20deep%20blue%20harbor%20water%20under%20clear%20azure%20sky%2C%20architectural%20photography%20masterpiece%2C%20golden%20hour%20dramatic%20lighting%20creating%20warm%20glow%2C%20professional%20travel%20photography%20composition&width=500&height=400&seq=featured-opera-house&orientation=landscape',
      price: '$45',
      tags: ['世界遺產', '建築', '表演']
    },
    {
      id: 'harbour-bridge',
      name: '悉尼海港大橋',
      category: '地標建築',
      rating: 4.7,
      reviews: 19842,
      location: '海港大橋',
      description: '跨越悉尼港的鋼拱橋，可體驗刺激的橋樑攀登',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20majestic%20steel%20arch%20structure%20spanning%20across%20deep%20blue%20harbor%20water%20under%20clear%20sky%2C%20iconic%20engineering%20masterpiece%20photography%2C%20dramatic%20perspective%20showing%20full%20bridge%20span%20with%20city%20skyline&width=500&height=400&seq=featured-harbour-bridge&orientation=landscape',
      price: '$58',
      tags: ['攀登體驗', '觀景', '地標']
    },
    {
      id: 'bondi-beach',
      name: '邦迪海灘',
      category: '海灘天堂',
      rating: 4.5,
      reviews: 9876,
      location: '邦迪',
      description: '世界知名的衝浪海灘，金色沙灘和絕佳的海邊咖啡廳',
      image: 'https://readdy.ai/api/search-image?query=Bondi%20Beach%20world%20famous%20golden%20sand%20beach%20with%20turquoise%20crystal%20clear%20ocean%20waters%2C%20perfect%20beach%20paradise%20photography%2C%20sunny%20day%20atmosphere%20with%20beachgoers%20enjoying%20surfing%20and%20swimming%20activities&width=500&height=400&seq=featured-bondi-beach&orientation=landscape',
      price: '免費',
      tags: ['衝浪', '游泳', '咖啡廳']
    }
  ];

  const toggleLike = (attractionId: string) => {
    setLikedItems(prev => 
      prev.includes(attractionId) 
        ? prev.filter(id => id !== attractionId)
        : [...prev, attractionId]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">精選推薦</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            不容錯過的悉尼必遊景點，每一處都有其獨特的魅力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAttractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <Link href={`/attractions/${attraction.id}`}>
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-64 object-cover object-top cursor-pointer group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {attraction.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleLike(attraction.id)}
                    className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                  >
                    <i className={`${likedItems.includes(attraction.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                  </button>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <span className="bg-green-500/90 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-medium">
                    {attraction.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <Link href={`/attractions/${attraction.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-red-600 transition-colors">
                    {attraction.name}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <span className="font-medium text-gray-900 mr-1">{attraction.rating}</span>
                    <span className="text-sm text-gray-500">({attraction.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-map-pin-line mr-1"></i>
                    {attraction.location}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {attraction.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/attractions/${attraction.id}`}
                  className="block w-full bg-red-500 text-white py-3 rounded-lg text-center font-medium cursor-pointer hover:bg-red-600 transition-colors whitespace-nowrap"
                >
                  查看詳情
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/attractions"
            className="inline-flex items-center px-8 py-3 bg-white border-2 border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            查看所有景點
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}