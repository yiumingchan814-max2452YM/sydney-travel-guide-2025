
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface AttractionsGridProps {
  categoryFilter: string;
  searchFilter: string;
}

export default function AttractionsGrid({ categoryFilter, searchFilter }: AttractionsGridProps) {
  const [likedAttractions, setLikedAttractions] = useState<string[]>([]);
  
  const [attractions] = useState([
    {
      id: 'sydney-opera-house',
      name: '悉尼歌劇院',
      category: '地標',
      rating: 4.9,
      reviews: 15842,
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20iconic%20white%20shell%20architecture%20against%20deep%20blue%20harbor%20water%20and%20clear%20azure%20sky%2C%20architectural%20photography%20masterpiece%2C%20golden%20hour%20dramatic%20lighting%20creating%20warm%20glow%20on%20white%20shells%2C%20professional%20travel%20photography%20with%20perfect%20composition&width=300&height=200&seq=opera-house-grid-unique&orientation=landscape',
      location: '環形碼頭',
      tags: ['世界遺產', '建築', '表演'],
      description: '世界著名的表演藝術中心，獨特的帆船造型建築',
      price: '$45'
    },
    {
      id: 'harbour-bridge',
      name: '悉尼海港大橋',
      category: '地標',
      rating: 4.8,
      reviews: 12456,
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20majestic%20steel%20arch%20structure%20spanning%20across%20deep%20blue%20harbor%20water%20under%20clear%20sky%2C%20iconic%20engineering%20masterpiece%20photography%2C%20dramatic%20perspective%20showing%20full%20bridge%20span%20with%20city%20skyline&width=300&height=200&seq=harbour-bridge-grid-unique&orientation=landscape',
      location: '海港大橋',
      tags: ['攀登體驗', '觀景', '地標'],
      description: '跨越悉尼港的鋼拱橋，可體驗刺激的橋樑攀登',
      price: '$58'
    },
    {
      id: 'royal-botanic-gardens',
      name: '皇家植物園',
      category: '公園',
      rating: 4.7,
      reviews: 8934,
      image: 'https://readdy.ai/api/search-image?query=Royal%20Botanic%20Gardens%20Sydney%20lush%20green%20tropical%20paradise%20with%20diverse%20exotic%20plants%20palm%20trees%20and%20native%20flora%2C%20Mrs%20Macquaries%20Chair%20viewpoint%20with%20stunning%20Opera%20House%20harbor%20view%2C%20peaceful%20garden%20pathways%20and%20botanical%20beauty&width=300&height=200&seq=botanic-gardens-grid-unique&orientation=landscape',
      location: '環形碼頭',
      tags: ['免費', '散步', '拍照'],
      description: '30公頃的熱帶植物園，免費入場並可欣賞海港美景',
      price: '免費'
    },
    {
      id: 'taronga-zoo',
      name: '塔龍加動物園',
      category: '觀景',
      rating: 4.6,
      reviews: 7823,
      image: 'https://readdy.ai/api/search-image?query=Taronga%20Zoo%20Sydney%20spectacular%20harbor%20bridge%20backdrop%20with%20giraffes%20in%20foreground%2C%20iconic%20zoo%20photography%20combining%20wildlife%20with%20stunning%20city%20views%2C%20professional%20animal%20photography%20with%20scenic%20harbor%20panorama&width=300&height=200&seq=taronga-zoo-grid-unique&orientation=landscape',
      location: '莫斯曼',
      tags: ['家庭', '動物', '渡輪'],
      description: '坐擁海港景色的動物園，可近距離接觸澳洲本土動物',
      price: '$49'
    },
    {
      id: 'bondi-beach',
      name: '邦迪海灘',
      category: '海灘',
      rating: 4.5,
      reviews: 9876,
      image: 'https://readdy.ai/api/search-image?query=Bondi%20Beach%20world%20famous%20golden%20sand%20beach%20with%20turquoise%20crystal%20clear%20ocean%20waters%2C%20perfect%20beach%20paradise%20photography%2C%20sunny%20day%20atmosphere%20with%20beachgoers%20enjoying%20surfing%20and%20swimming%20activities&width=300&height=200&seq=bondi-beach-grid-unique&orientation=landscape',
      location: '邦迪',
      tags: ['衝浪', '游泳', '咖啡廳'],
      description: '世界知名的衝浪海灘，金色沙灘和絕佳的海邊咖啡廳',
      price: '免費'
    },
    {
      id: 'darling-harbour',
      name: '情人港',
      category: '地標',
      rating: 4.4,
      reviews: 6754,
      image: 'https://readdy.ai/api/search-image?query=Darling%20Harbour%20Sydney%20spectacular%20waterfront%20entertainment%20precinct%20with%20modern%20glass%20buildings%20reflecting%20in%20harbor%20water%2C%20restaurants%20cafes%20shops%20family%20attractions%2C%20beautiful%20harbor%20waters%20with%20city%20skyline%20views&width=300&height=200&seq=darling-harbour-grid-unique&orientation=landscape',
      location: '情人港',
      tags: ['購物', '餐飲', '水族館'],
      description: '集購物、餐飲、娛樂於一體的海港娛樂區',
      price: '免費'
    },
    {
      id: 'sydney-tower-eye',
      name: '悉尼塔觀景台',
      category: '觀景',
      rating: 4.3,
      reviews: 5432,
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Tower%20Eye%20iconic%20tall%20observation%20deck%20golden%20turret%20top%20against%20clear%20blue%20sky%2C%20architectural%20photography%20masterpiece%2C%20CBD%20skyline%20vista%2C%20spectacular%20urban%20landscape%20tower%20with%20dramatic%20perspective&width=300&height=200&seq=sydney-tower-grid-unique&orientation=landscape',
      location: '市中心',
      tags: ['360度景觀', '高空', '拍照'],
      description: '悉尼最高觀景台，360度俯瞰整個悉尼市區',
      price: '$29'
    },
    {
      id: 'the-rocks',
      name: '岩石區',
      category: '地標',
      rating: 4.6,
      reviews: 8123,
      image: 'https://readdy.ai/api/search-image?query=The%20Rocks%20Sydney%20historic%20cobblestone%20streets%20with%20heritage%20sandstone%20colonial%20buildings%2C%20weekend%20markets%20bustling%20with%20tourists%2C%20art%20galleries%20pubs%20restaurants%2C%20atmospheric%20tourist%20precinct%20with%20heritage%20charm&width=300&height=200&seq=the-rocks-grid-unique&orientation=landscape',
      location: '岩石區',
      tags: ['歷史', '市集', '餐廳'],
      description: '悉尼最古老的街區，保留了殖民時期的建築風貌',
      price: '免費'
    },
    {
      id: 'manly-beach',
      name: '曼利海灘',
      category: '海灘',
      rating: 4.5,
      reviews: 7234,
      image: 'https://readdy.ai/api/search-image?query=Manly%20Beach%20pristine%20golden%20sand%20coastline%20with%20crystal%20clear%20turquoise%20blue%20waters%2C%20Sydney%20northern%20beaches%20paradise%20photography%2C%20Norfolk%20pine%20trees%20lining%20beautiful%20shore%20with%20family%20friendly%20atmosphere&width=300&height=200&seq=manly-beach-grid-unique&orientation=landscape',
      location: '曼利',
      tags: ['家庭友善', '渡輪', '衝浪'],
      description: '家庭友善的海灘，搭渡輪前往享受美麗的海港之旅',
      price: '免費'
    },
    {
      id: 'luna-park',
      name: '月神公園',
      category: '觀景',
      rating: 4.2,
      reviews: 4567,
      image: 'https://readdy.ai/api/search-image?query=Luna%20Park%20Sydney%20vintage%20amusement%20park%20with%20iconic%20giant%20smiling%20face%20entrance%2C%20colorful%20carnival%20rides%20and%20attractions%2C%20harbor%20bridge%20spectacular%20views%2C%20nostalgic%20funfair%20atmosphere%20with%20retro%20charm&width=300&height=200&seq=luna-park-grid-unique&orientation=landscape',
      location: '米爾森斯角',
      tags: ['遊樂園', '復古', '家庭'],
      description: '歷史悠久的遊樂園，標誌性的笑臉入口和復古遊樂設施',
      price: '$55'
    },
    {
      id: 'australian-museum',
      name: '澳洲博物館',
      category: '博物館',
      rating: 4.4,
      reviews: 3456,
      image: 'https://readdy.ai/api/search-image?query=Australian%20Museum%20Sydney%20natural%20history%20museum%20with%20impressive%20dinosaur%20fossil%20exhibits%2C%20educational%20displays%2C%20indigenous%20Aboriginal%20artifacts%20and%20cultural%20collections%2C%20heritage%20museum%20building%20facade%20with%20sandstone%20architecture&width=300&height=200&seq=australian-museum-grid-unique&orientation=landscape',
      location: '海德公園',
      tags: ['教育', '恐龍', '原住民文化'],
      description: '澳洲最古老的博物館，展示豐富的自然歷史和文化收藏',
      price: '$15'
    },
    {
      id: 'art-gallery-nsw',
      name: '新南威爾士美術館',
      category: '博物館',
      rating: 4.6,
      reviews: 2789,
      image: 'https://readdy.ai/api/search-image?query=Art%20Gallery%20of%20New%20South%20Wales%20Sydney%20neoclassical%20heritage%20building%20with%20impressive%20columns%2C%20art%20exhibitions%20inside%2C%20contemporary%20galleries%20with%20sculpture%20displays%2C%20cultural%20institution%20photography%20with%20elegant%20architecture&width=300&height=200&seq=art-gallery-nsw-grid-unique&orientation=landscape',
      location: '域多利街',
      tags: ['藝術', '免費入場', '文化'],
      description: '收藏豐富的藝術作品，從古典到當代應有盡有',
      price: '免費'
    }
  ]);

  const [filteredAttractions, setFilteredAttractions] = useState(attractions);

  useEffect(() => {
    let filtered = attractions;

    // 分類篩選
    if (categoryFilter !== '全部') {
      filtered = filtered.filter(attraction => attraction.category === categoryFilter);
    }

    // 搜尋篩選
    if (searchFilter) {
      filtered = filtered.filter(attraction =>
        attraction.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        attraction.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        attraction.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
        attraction.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()))
      );
    }

    setFilteredAttractions(filtered);
  }, [categoryFilter, searchFilter, attractions]);

  const toggleLike = (attractionId: string) => {
    setLikedAttractions(prev => 
      prev.includes(attractionId) 
        ? prev.filter(id => id !== attractionId)
        : [...prev, attractionId]
    );
  };

  const shareAttraction = (attraction: any) => {
    if (navigator.share) {
      navigator.share({
        title: attraction.name,
        text: `看看這個很棒的景點：${attraction.name} - ${attraction.description}`,
        url: window.location.origin + `/attractions/${attraction.id}`,
      });
    } else {
      const text = `看看這個很棒的景點：${attraction.name} - ${attraction.description}`;
      const url = window.location.origin + `/attractions/${attraction.id}`;
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('連結已複製到剪貼板！');
    }
  };

  const openMap = (attraction: any) => {
    const query = encodeURIComponent(`${attraction.location}, Sydney`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="p-4">
      {/* 結果統計 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          找到 {filteredAttractions.length} 個景點
        </span>
        {(categoryFilter !== '全部' || searchFilter) && (
          <span className="text-xs text-blue-600">
            {categoryFilter !== '全部' && `分類：${categoryFilter}`}
            {searchFilter && ` • 搜尋：${searchFilter}`}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredAttractions.map((attraction) => (
          <div key={attraction.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <Link href={`/attractions/${attraction.id}`}>
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover object-top cursor-pointer"
                />
              </Link>
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {attraction.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <button
                  onClick={() => shareAttraction(attraction)}
                  className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                >
                  <i className="ri-share-line text-gray-600"></i>
                </button>
                <button
                  onClick={() => toggleLike(attraction.id)}
                  className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                >
                  <i className={`${likedAttractions.includes(attraction.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                </button>
              </div>
              {attraction.price && (
                <div className="absolute bottom-3 right-3">
                  <span className="bg-green-500/80 backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium">
                    {attraction.price}
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <Link href={`/attractions/${attraction.id}`}>
                <h3 className="font-semibold text-gray-900 mb-1 cursor-pointer hover:text-blue-600 transition-colors">{attraction.name}</h3>
              </Link>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{attraction.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                  <span className="text-sm font-medium text-gray-900">{attraction.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({attraction.reviews.toLocaleString()})</span>
                </div>
                <button
                  onClick={() => openMap(attraction)}
                  className="flex items-center text-sm text-blue-600 cursor-pointer hover:text-blue-700"
                >
                  <i className="ri-map-pin-line mr-1"></i>
                  {attraction.location}
                </button>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {attraction.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 快速操作按鈕 */}
              <div className="flex space-x-2">
                <Link
                  href={`/attractions/${attraction.id}`}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-600 transition-colors text-center whitespace-nowrap"
                >
                  查看詳情
                </Link>
                <button
                  onClick={() => openMap(attraction)}
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

      {filteredAttractions.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-search-line text-4xl text-gray-300 mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">找不到相關景點</h3>
          <p className="text-gray-500 mb-4">試試調整搜尋條件或分類篩選</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            重新搜尋
          </button>
        </div>
      )}
    </div>
  );
}
