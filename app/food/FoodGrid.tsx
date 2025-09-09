'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface FoodGridProps {
  categoryFilter: string;
  searchFilter: string;
}

export default function FoodGrid({ categoryFilter, searchFilter }: FoodGridProps) {
  const [likedRestaurants, setLikedRestaurants] = useState<string[]>([]);
  
  const [restaurants] = useState([
    {
      id: 'bennelong-restaurant',
      name: 'Bennelong Restaurant',
      category: '澳洲料理',
      rating: 4.8,
      reviews: 1456,
      image: 'https://readdy.ai/api/search-image?query=Bennelong%20Restaurant%20Sydney%20Opera%20House%20fine%20dining%20elegant%20interior%20with%20harbor%20views%2C%20contemporary%20Australian%20cuisine%2C%20sophisticated%20restaurant%20atmosphere%2C%20luxury%20dining%20experience%2C%20modern%20culinary%20presentation&width=300&height=200&seq=bennelong-restaurant&orientation=landscape',
      location: '悉尼歌劇院',
      tags: ['精緻料理', '海景', '約會'],
      description: '位於悉尼歌劇院內的頂級餐廳，提供現代澳洲料理',
      priceRange: '$$$',
      cuisine: '現代澳洲料理'
    },
    {
      id: 'fish-market',
      name: 'Sydney Fish Market',
      category: '海鮮',
      rating: 4.6,
      reviews: 2345,
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Fish%20Market%20fresh%20seafood%20market%20with%20abundant%20fish%20displays%2C%20oysters%20prawns%20crabs%2C%20bustling%20market%20atmosphere%2C%20traditional%20Australian%20seafood%20experience%2C%20waterfront%20location%20with%20dining%20areas&width=300&height=200&seq=fish-market&orientation=landscape',
      location: '派爾蒙',
      tags: ['新鮮海鮮', '市場', '經濟實惠'],
      description: '南半球最大的魚市場，新鮮海鮮應有盡有',
      priceRange: '$$',
      cuisine: '海鮮'
    },
    {
      id: 'bills-darlinghurst',
      name: 'Bills Darlinghurst',
      category: '咖啡廳',
      rating: 4.7,
      reviews: 1876,
      image: 'https://readdy.ai/api/search-image?query=Bills%20restaurant%20Darlinghurst%20Sydney%20famous%20ricotta%20pancakes%20breakfast%20brunch%20cafe%2C%20modern%20Australian%20casual%20dining%2C%20bright%20interior%20with%20natural%20lighting%2C%20popular%20breakfast%20destination%2C%20cozy%20atmosphere&width=300&height=200&seq=bills-darlinghurst&orientation=landscape',
      location: '達令赫斯特',
      tags: ['早餐', '煎餅', '咖啡'],
      description: '著名的瑞可達煎餅發源地，澳洲最受歡迎的早餐店',
      priceRange: '$$',
      cuisine: '現代早餐'
    },
    {
      id: 'chinatown-yum-cha',
      name: 'Golden Century Seafood',
      category: '亞洲料理',
      rating: 4.5,
      reviews: 1234,
      image: 'https://readdy.ai/api/search-image?query=Golden%20Century%20Seafood%20restaurant%20Sydney%20Chinatown%20authentic%20Cantonese%20dim%20sum%20yum%20cha%2C%20traditional%20Chinese%20dining%20atmosphere%2C%20steaming%20bamboo%20baskets%2C%20family-style%20dining%2C%20bustling%20Hong%20Kong%20style%20restaurant&width=300&height=200&seq=golden-century&orientation=landscape',
      location: '中國城',
      tags: ['點心', '粵菜', '家庭聚餐'],
      description: '悉尼最佳粵菜餐廳之一，24小時營業的港式茶餐廳',
      priceRange: '$$',
      cuisine: '粵菜'
    },
    {
      id: 'gelato-messina',
      name: 'Gelato Messina',
      category: '甜點',
      rating: 4.8,
      reviews: 3456,
      image: 'https://readdy.ai/api/search-image?query=Gelato%20Messina%20Sydney%20artisan%20gelato%20ice%20cream%20shop%20with%20colorful%20gelato%20display%20case%2C%20creative%20flavors%2C%20modern%20ice%20cream%20parlor%20interior%2C%20Italian-style%20gelato%20making%2C%20dessert%20paradise%20atmosphere&width=300&height=200&seq=gelato-messina&orientation=landscape',
      location: '多個分店',
      tags: ['義式冰淇淋', '創意口味', '甜品'],
      description: '澳洲最受歓迎的手工義式冰淇淋店，創意口味無限',
      priceRange: '$',
      cuisine: '義式甜點'
    },
    {
      id: 'quay-restaurant',
      name: 'Quay Restaurant',
      category: '澳洲料理',
      rating: 4.9,
      reviews: 987,
      image: 'https://readdy.ai/api/search-image?query=Quay%20Restaurant%20Sydney%20fine%20dining%20harbor%20bridge%20opera%20house%20views%2C%20contemporary%20Australian%20cuisine%2C%20elegant%20modern%20interior%2C%20luxury%20restaurant%20atmosphere%2C%20world-class%20culinary%20experience%2C%20romantic%20dining%20setting&width=300&height=200&seq=quay-restaurant&orientation=landscape',
      location: '環形碼頭',
      tags: ['米其林星級', '海景', '精緻料理'],
      description: '世界知名的精緻餐廳，俯瞰悉尼港的絕美景色',
      priceRange: '$$$$',
      cuisine: '現代澳洲料理'
    },
    {
      id: 'barangaroo-house',
      name: 'Barangaroo House',
      category: '澳洲料理',
      rating: 4.6,
      reviews: 1567,
      image: 'https://readdy.ai/api/search-image?query=Barangaroo%20House%20Sydney%20waterfront%20restaurant%20modern%20Australian%20cuisine%2C%20harbor%20views%20dining%2C%20contemporary%20interior%20design%2C%20casual%20fine%20dining%20atmosphere%2C%20seafood%20focused%20menu%2C%20trendy%20restaurant%20setting&width=300&height=200&seq=barangaroo-house&orientation=landscape',
      location: 'Barangaroo',
      tags: ['海景', '現代澳洲菜', '時尚'],
      description: '時尚的海濱餐廳，提供現代澳洲料理和精品葡萄酒',
      priceRange: '$$$',
      cuisine: '現代澳洲料理'
    },
    {
      id: 'mamak-haymarket',
      name: 'Mamak',
      category: '亞洲料理',
      rating: 4.4,
      reviews: 2876,
      image: 'https://readdy.ai/api/search-image?query=Mamak%20restaurant%20Sydney%20Malaysian%20street%20food%20roti%20canai%20authentic%20Asian%20cuisine%2C%20busy%20casual%20dining%20atmosphere%2C%20traditional%20Malaysian%20dishes%2C%20multicultural%20dining%20experience%2C%20affordable%20ethnic%20food&width=300&height=200&seq=mamak-restaurant&orientation=landscape',
      location: 'Haymarket',
      tags: ['馬來菜', '印度煎餅', '平價'],
      description: '正宗的馬來西亞料理，24小時營業的平價美食',
      priceRange: '$',
      cuisine: '馬來菜'
    },
    {
      id: 'cafe-sydney',
      name: 'Cafe Sydney',
      category: '澳洲料理',
      rating: 4.7,
      reviews: 1432,
      image: 'https://readdy.ai/api/search-image?query=Cafe%20Sydney%20rooftop%20dining%20harbor%20bridge%20opera%20house%20panoramic%20views%2C%20modern%20Australian%20restaurant%2C%20outdoor%20terrace%20dining%2C%20sunset%20dining%20atmosphere%2C%20sophisticated%20casual%20restaurant%20with%20spectacular%20views&width=300&height=200&seq=cafe-sydney&orientation=landscape',
      location: '環形碼頭',
      tags: ['屋頂餐廳', '全景', '浪漫'],
      description: '屋頂露台餐廳，享受360度悉尼港全景',
      priceRange: '$$$',
      cuisine: '現代澳洲料理'
    },
    {
      id: 'hurricane-grill',
      name: 'Hurricane\'s Grill',
      category: '澳洲料理',
      rating: 4.3,
      reviews: 1876,
      image: 'https://readdy.ai/api/search-image?query=Hurricanes%20Grill%20Sydney%20steakhouse%20ribeye%20steak%20grilled%20meat%2C%20American-style%20casual%20dining%2C%20hearty%20portions%2C%20family%20restaurant%20atmosphere%2C%20classic%20grill%20restaurant%20interior%2C%20comfort%20food%20dining&width=300&height=200&seq=hurricane-grill&orientation=landscape',
      location: '多個分店',
      tags: ['牛排', '美式', '家庭聚餐'],
      description: '著名的牛排餐廳，提供優質澳洲牛肉',
      priceRange: '$$',
      cuisine: '美式燒烤'
    },
    {
      id: 'pancakes-on-rocks',
      name: 'Pancakes on the Rocks',
      category: '咖啡廳',
      rating: 4.2,
      reviews: 2345,
      image: 'https://readdy.ai/api/search-image?query=Pancakes%20on%20the%20Rocks%20Sydney%20famous%20thick%20pancakes%20breakfast%20restaurant%2C%20casual%20family%20dining%2C%20hearty%20breakfast%20portions%2C%20comfort%20food%20atmosphere%2C%20traditional%20Australian%20breakfast%20experience&width=300&height=200&seq=pancakes-rocks&orientation=landscape',
      location: '岩石區',
      tags: ['煎餅', '24小時', '家庭'],
      description: '24小時營業的經典煎餅店，悉尼人的深夜食堂',
      priceRange: '$',
      cuisine: '美式早餐'
    },
    {
      id: 'opera-bar',
      name: 'Opera Bar',
      category: '酒吧',
      rating: 4.5,
      reviews: 1654,
      image: 'https://readdy.ai/api/search-image?query=Opera%20Bar%20Sydney%20outdoor%20waterfront%20bar%20underneath%20opera%20house%2C%20harbor%20bridge%20views%2C%20casual%20drinks%20dining%2C%20sunset%20cocktails%2C%20iconic%20Sydney%20bar%20location%2C%20relaxed%20atmosphere%20with%20stunning%20views&width=300&height=200&seq=opera-bar&orientation=landscape',
      location: '悉尼歌劇院',
      tags: ['調酒', '海景', '戶外'],
      description: '位於歌劇院下方的標誌性酒吧，絕佳的海港景色',
      priceRange: '$$',
      cuisine: '酒吧小食'
    }
  ]);

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    let filtered = restaurants;

    // 分類篩選
    if (categoryFilter !== '全部') {
      filtered = filtered.filter(restaurant => restaurant.category === categoryFilter);
    }

    // 搜尋篩選
    if (searchFilter) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchFilter.toLowerCase()) ||
        restaurant.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()))
      );
    }

    setFilteredRestaurants(filtered);
  }, [categoryFilter, searchFilter, restaurants]);

  const toggleLike = (restaurantId: string) => {
    setLikedRestaurants(prev => 
      prev.includes(restaurantId) 
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    );
  };

  const shareRestaurant = (restaurant: any) => {
    if (navigator.share) {
      navigator.share({
        title: restaurant.name,
        text: `看看這家很棒的餐廳：${restaurant.name} - ${restaurant.description}`,
        url: window.location.origin + `/food/${restaurant.id}`,
      });
    } else {
      const text = `看看這家很棒的餐廳：${restaurant.name} - ${restaurant.description}`;
      const url = window.location.origin + `/food/${restaurant.id}`;
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('連結已複製到剪貼板！');
    }
  };

  const openMap = (restaurant: any) => {
    const query = encodeURIComponent(`${restaurant.location}, Sydney`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const getPriceDisplay = (priceRange: string) => {
    switch (priceRange) {
      case '$': return '經濟實惠';
      case '$$': return '中等價位';
      case '$$$': return '高檔餐廳';
      case '$$$$': return '奢華料理';
      default: return '價位未定';
    }
  };

  return (
    <div className="p-4">
      {/* 結果統計 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          找到 {filteredRestaurants.length} 家餐廳
        </span>
        {(categoryFilter !== '全部' || searchFilter) && (
          <span className="text-xs text-red-600">
            {categoryFilter !== '全部' && `分類：${categoryFilter}`}
            {searchFilter && ` • 搜尋：${searchFilter}`}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <Link href={`/food/${restaurant.id}`}>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover object-top cursor-pointer"
                />
              </Link>
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {restaurant.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <button
                  onClick={() => shareRestaurant(restaurant)}
                  className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                >
                  <i className="ri-share-line text-gray-600"></i>
                </button>
                <button
                  onClick={() => toggleLike(restaurant.id)}
                  className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                >
                  <i className={`${likedRestaurants.includes(restaurant.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                </button>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="bg-green-500/80 backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium">
                  {getPriceDisplay(restaurant.priceRange)}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <Link href={`/food/${restaurant.id}`}>
                <h3 className="font-semibold text-gray-900 mb-1 cursor-pointer hover:text-red-600 transition-colors">{restaurant.name}</h3>
              </Link>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{restaurant.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                  <span className="text-sm font-medium text-gray-900">{restaurant.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({restaurant.reviews.toLocaleString()})</span>
                </div>
                <button
                  onClick={() => openMap(restaurant)}
                  className="flex items-center text-sm text-red-600 cursor-pointer hover:text-red-700"
                >
                  <i className="ri-map-pin-line mr-1"></i>
                  {restaurant.location}
                </button>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <i className="ri-restaurant-line mr-1 text-orange-500"></i>
                <span>{restaurant.cuisine}</span>
                <span className="mx-2">•</span>
                <span>{restaurant.priceRange}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {restaurant.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 快速操作按鈕 */}
              <div className="flex space-x-2">
                <Link
                  href={`/food/${restaurant.id}`}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-red-600 transition-colors text-center whitespace-nowrap"
                >
                  查看詳情
                </Link>
                <button
                  onClick={() => openMap(restaurant)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium cursor-pointer hover:bg-green-600 transition-colors flex items-center whitespace-nowrap"
                >
                  <i className="ri-navigation-line mr-1"></i>
                  導航
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-restaurant-line text-4xl text-gray-300 mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">找不到相關餐廳</h3>
          <p className="text-gray-500 mb-4">試試調整搜尋條件或分類篩選</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition-colors whitespace-nowrap"
          >
            重新搜尋
          </button>
        </div>
      )}
    </div>
  );
}