'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface GuideGridProps {
  categoryFilter: string;
  searchFilter: string;
}

export default function GuideGrid({ categoryFilter, searchFilter }: GuideGridProps) {
  const [likedGuides, setLikedGuides] = useState<string[]>([]);
  
  const [guides] = useState([
    {
      id: 'transportation-guide',
      title: '悉尼交通完全指南',
      category: '交通指南',
      readTime: '8分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20public%20transport%20train%20bus%20ferry%20system%2C%20modern%20city%20transport%20infrastructure%2C%20commuter%20travel%2C%20urban%20transportation%20network%2C%20Opal%20card%20usage%2C%20efficient%20public%20transit&width=300&height=200&seq=sydney-transport&orientation=landscape',
      description: '詳細介紹悉尼的公共交通系統，包括火車、巴士、渡輪的使用方法和票價資訊',
      tags: ['Opal卡', '火車', '巴士', '渡輪'],
      author: 'Sydney Travel Team',
      publishDate: '2024-01-15',
      views: 15420
    },
    {
      id: 'accommodation-guide',
      title: '悉尼住宿選擇攻略',
      category: '住宿攻略',
      readTime: '12分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20luxury%20hotels%20accommodation%20options%20city%20harbor%20views%2C%20modern%20hotel%20rooms%2C%20backpacker%20hostels%2C%20Airbnb%20apartments%2C%20diverse%20lodging%20choices%2C%20tourist%20accommodation%20guide&width=300&height=200&seq=sydney-accommodation&orientation=landscape',
      description: '從豪華酒店到背包客旅館，全面分析悉尼各區域的住宿選擇',
      tags: ['酒店', '民宿', '青旅', '地區分析'],
      author: 'Local Expert',
      publishDate: '2024-01-12',
      views: 12890
    },
    {
      id: 'budget-travel-guide',
      title: '悉尼省錢旅遊秘訣',
      category: '實用資訊',
      readTime: '10分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20budget%20travel%20free%20activities%2C%20affordable%20dining%20options%2C%20discount%20attractions%2C%20money-saving%20tips%2C%20budget-friendly%20tourism%2C%20economical%20travel%20planning&width=300&height=200&seq=sydney-budget&orientation=landscape',
      description: '教你如何在悉尼以最少的預算體驗最豐富的旅程',
      tags: ['省錢', '免費景點', '優惠', '預算規劃'],
      author: 'Budget Traveler',
      publishDate: '2024-01-10',
      views: 18760
    },
    {
      id: 'aboriginal-culture-guide',
      title: '探索原住民文化',
      category: '文化體驗',
      readTime: '15分鐘',
      image: 'https://readdy.ai/api/search-image?query=Aboriginal%20Australian%20indigenous%20culture%20Sydney%2C%20traditional%20art%20dreamtime%20stories%2C%20cultural%20experiences%2C%20native%20heritage%2C%20indigenous%20history%2C%20cultural%20tourism%20education&width=300&height=200&seq=aboriginal-culture&orientation=landscape',
      description: '深入了解澳洲原住民的歷史文化和在悉尼的文化體驗',
      tags: ['原住民', '文化', '歷史', '藝術'],
      author: 'Cultural Guide',
      publishDate: '2024-01-08',
      views: 9430
    },
    {
      id: 'seasonal-events-guide',
      title: '悉尼四季活動日曆',
      category: '季節活動',
      readTime: '20分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20seasonal%20events%20festivals%20throughout%20the%20year%2C%20Vivid%20Sydney%20light%20festival%2C%20New%20Years%20Eve%20fireworks%2C%20cultural%20celebrations%2C%20outdoor%20concerts%2C%20seasonal%20activities%20calendar&width=300&height=200&seq=sydney-events&orientation=landscape',
      description: '全年度悉尼重要節慶活動和最佳參與時間',
      tags: ['節慶', 'Vivid Sydney', '跨年', '音樂節'],
      author: 'Event Specialist',
      publishDate: '2024-01-05',
      views: 16780
    },
    {
      id: 'food-culture-guide',
      title: '悉尼美食文化探索',
      category: '文化體驗',
      readTime: '18分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20multicultural%20food%20scene%20diverse%20cuisine%2C%20ethnic%20restaurants%2C%20food%20markets%2C%20culinary%20diversity%2C%20international%20dining%2C%20gastronomic%20cultural%20experience&width=300&height=200&seq=sydney-food-culture&orientation=landscape',
      description: '認識悉尼多元文化背景下的豐富美食文化',
      tags: ['美食', '多元文化', '市場', '餐廳'],
      author: 'Food Expert',
      publishDate: '2024-01-03',
      views: 14560
    },
    {
      id: 'safety-tips-guide',
      title: '悉尼旅遊安全須知',
      category: '實用資訊',
      readTime: '8分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20travel%20safety%20tips%2C%20tourist%20security%20information%2C%20emergency%20services%2C%20safe%20travel%20practices%2C%20city%20safety%20guidelines%2C%20traveler%20protection%20advice&width=300&height=200&seq=sydney-safety&orientation=landscape',
      description: '重要的旅遊安全資訊和緊急聯絡方式',
      tags: ['安全', '緊急', '保險', '注意事項'],
      author: 'Safety Advisor',
      publishDate: '2024-01-01',
      views: 11230
    },
    {
      id: 'photography-spots-guide',
      title: '悉尼最佳攝影點',
      category: '實用資訊',
      readTime: '25分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20best%20photography%20locations%20scenic%20viewpoints%2C%20Instagram-worthy%20spots%2C%20sunrise%20sunset%20photography%2C%20architectural%20photography%2C%20landscape%20photography%20tips%2C%20tourist%20photo%20opportunities&width=300&height=200&seq=sydney-photography&orientation=landscape',
      description: '專業攝影師推薦的悉尼最佳拍攝地點和技巧',
      tags: ['攝影', '觀景點', 'Instagram', '技巧'],
      author: 'Photography Pro',
      publishDate: '2023-12-28',
      views: 22340
    },
    {
      id: 'family-travel-guide',
      title: '親子遊悉尼攻略',
      category: '實用資訊',
      readTime: '16分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20family%20travel%20with%20children%2C%20kid-friendly%20attractions%2C%20family%20activities%2C%20playgrounds%20parks%2C%20children%20entertainment%2C%20family%20vacation%20planning&width=300&height=200&seq=sydney-family&orientation=landscape',
      description: '帶孩子遊悉尼的完整攻略和親子景點推薦',
      tags: ['親子', '兒童', '家庭', '活動'],
      author: 'Family Travel Expert',
      publishDate: '2023-12-25',
      views: 13670
    },
    {
      id: 'nightlife-guide',
      title: '悉尼夜生活指南',
      category: '文化體驗',
      readTime: '14分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20nightlife%20bars%20clubs%20entertainment%2C%20vibrant%20night%20scene%2C%20rooftop%20bars%20harbor%20views%2C%20live%20music%20venues%2C%20nighttime%20entertainment%20district&width=300&height=200&seq=sydney-nightlife&orientation=landscape',
      description: '探索悉尼豐富的夜生活和娛樂選擇',
      tags: ['夜生活', '酒吧', '音樂', '娛樂'],
      author: 'Nightlife Guide',
      publishDate: '2023-12-22',
      views: 17890
    }
  ]);

  const [filteredGuides, setFilteredGuides] = useState(guides);

  useEffect(() => {
    let filtered = guides;

    // 分類篩選
    if (categoryFilter !== '全部') {
      filtered = filtered.filter(guide => guide.category === categoryFilter);
    }

    // 搜尋篩選
    if (searchFilter) {
      filtered = filtered.filter(guide =>
        guide.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        guide.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()))
      );
    }

    setFilteredGuides(filtered);
  }, [categoryFilter, searchFilter, guides]);

  const toggleLike = (guideId: string) => {
    setLikedGuides(prev => 
      prev.includes(guideId) 
        ? prev.filter(id => id !== guideId)
        : [...prev, guideId]
    );
  };

  const shareGuide = (guide: any) => {
    if (navigator.share) {
      navigator.share({
        title: guide.title,
        text: `看看這個實用的旅遊指南：${guide.title} - ${guide.description}`,
        url: window.location.origin + `/guide/${guide.id}`,
      });
    } else {
      const text = `看看這個實用的旅遊指南：${guide.title} - ${guide.description}`;
      const url = window.location.origin + `/guide/${guide.id}`;
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('連結已複製到剪貼板！');
    }
  };

  return (
    <div className="p-4">
      {/* 結果統計 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          找到 {filteredGuides.length} 份指南
        </span>
        {(categoryFilter !== '全部' || searchFilter) && (
          <span className="text-xs text-purple-600">
            {categoryFilter !== '全部' && `分類：${categoryFilter}`}
            {searchFilter && ` • 搜尋：${searchFilter}`}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredGuides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <Link href={`/guide/${guide.id}`}>
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover object-top cursor-pointer"
                />
              </Link>
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {guide.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <button
                  onClick={() => shareGuide(guide)}
                  className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                >
                  <i className="ri-share-line text-gray-600"></i>
                </button>
                <button
                  onClick={() => toggleLike(guide.id)}
                  className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                >
                  <i className={`${likedGuides.includes(guide.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                </button>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="bg-purple-500/80 backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium">
                  {guide.readTime}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <Link href={`/guide/${guide.id}`}>
                <h3 className="font-semibold text-gray-900 mb-2 cursor-pointer hover:text-purple-600 transition-colors line-clamp-2">{guide.title}</h3>
              </Link>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{guide.description}</p>
              
              <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                <div className="flex items-center">
                  <i className="ri-user-line mr-1"></i>
                  <span>{guide.author}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-1"></i>
                  <span>{guide.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-eye-line mr-1"></i>
                  <span>{guide.views.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {guide.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 快速操作按鈕 */}
              <div className="flex space-x-2">
                <Link
                  href={`/guide/${guide.id}`}
                  className="flex-1 bg-purple-500 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-purple-600 transition-colors text-center whitespace-nowrap"
                >
                  閱讀指南
                </Link>
                <button
                  onClick={() => toggleLike(guide.id)}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors flex items-center whitespace-nowrap"
                >
                  <i className={`${likedGuides.includes(guide.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line'} mr-1`}></i>
                  收藏
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-book-open-line text-4xl text-gray-300 mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">找不到相關指南</h3>
          <p className="text-gray-500 mb-4">試試調整搜尋條件或分類篩選</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg cursor-pointer hover:bg-purple-600 transition-colors whitespace-nowrap"
          >
            重新搜尋
          </button>
        </div>
      )}
    </div>
  );
}