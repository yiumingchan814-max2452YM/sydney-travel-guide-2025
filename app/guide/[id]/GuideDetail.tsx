'use client';

import { useState } from 'react';
import GuideHeader from './GuideHeader';
import GuideContent from './GuideContent';

interface GuideDetailProps {
  guideId: string;
}

export default function GuideDetail({ guideId }: GuideDetailProps) {
  const guides = {
    'transportation-guide': {
      id: 'transportation-guide',
      title: '悉尼交通完全指南',
      category: '交通指南',
      readTime: '8分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20public%20transport%20train%20bus%20ferry%20system%2C%20modern%20city%20transport%20infrastructure%2C%20commuter%20travel%2C%20urban%20transportation%20network%2C%20Opal%20card%20usage%2C%20efficient%20public%20transit&width=800&height=600&seq=sydney-transport-detail&orientation=landscape',
      description: '詳細介紹悉尼的公共交通系統，包括火車、巴士、渡輪的使用方法和票價資訊',
      tags: ['Opal卡', '火車', '巴士', '渡輪'],
      author: 'Sydney Travel Team',
      publishDate: '2024-01-15',
      views: 15420
    },
    'accommodation-guide': {
      id: 'accommodation-guide',
      title: '悉尼住宿選擇攻略',
      category: '住宿攻略',
      readTime: '12分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20luxury%20hotels%20accommodation%20options%20city%20harbor%20views%2C%20modern%20hotel%20rooms%2C%20backpacker%20hostels%2C%20Airbnb%20apartments%2C%20diverse%20lodging%20choices%2C%20tourist%20accommodation%20guide&width=800&height=600&seq=sydney-accommodation-detail&orientation=landscape',
      description: '從豪華酒店到背包客旅館，全面分析悉尼各區域的住宿選擇',
      tags: ['酒店', '民宿', '青旅', '地區分析'],
      author: 'Local Expert',
      publishDate: '2024-01-12',
      views: 12890
    },
    'budget-travel-guide': {
      id: 'budget-travel-guide',
      title: '悉尼省錢旅遊秘訣',
      category: '實用資訊',
      readTime: '10分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20budget%20travel%20free%20activities%2C%20affordable%20dining%20options%2C%20discount%20attractions%2C%20money-saving%20tips%2C%20budget-friendly%20tourism%2C%20economical%20travel%20planning&width=800&height=600&seq=sydney-budget-detail&orientation=landscape',
      description: '教你如何在悉尼以最少的預算體驗最豐富的旅程',
      tags: ['省錢', '免費景點', '優惠', '預算規劃'],
      author: 'Budget Traveler',
      publishDate: '2024-01-10',
      views: 18760
    },
    'aboriginal-culture-guide': {
      id: 'aboriginal-culture-guide',
      title: '探索原住民文化',
      category: '文化體驗',
      readTime: '15分鐘',
      image: 'https://readdy.ai/api/search-image?query=Aboriginal%20Australian%20indigenous%20culture%20Sydney%2C%20traditional%20art%20dreamtime%20stories%2C%20cultural%20experiences%2C%20native%20heritage%2C%20indigenous%20history%2C%20cultural%20tourism%20education&width=800&height=600&seq=aboriginal-culture-detail&orientation=landscape',
      description: '深入了解澳洲原住民的歷史文化和在悉尼的文化體驗',
      tags: ['原住民', '文化', '歷史', '藝術'],
      author: 'Cultural Guide',
      publishDate: '2024-01-08',
      views: 9430
    },
    'seasonal-events-guide': {
      id: 'seasonal-events-guide',
      title: '悉尼四季活動日曆',
      category: '季節活動',
      readTime: '20分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20seasonal%20events%20festivals%20throughout%20the%20year%2C%20Vivid%20Sydney%20light%20festival%2C%20New%20Years%20Eve%20fireworks%2C%20cultural%20celebrations%2C%20outdoor%20concerts%2C%20seasonal%20activities%20calendar&width=800&height=600&seq=sydney-events-detail&orientation=landscape',
      description: '全年度悉尼重要節慶活動和最佳參與時間',
      tags: ['節慶', 'Vivid Sydney', '跨年', '音樂節'],
      author: 'Event Specialist',
      publishDate: '2024-01-05',
      views: 16780
    },
    'food-culture-guide': {
      id: 'food-culture-guide',
      title: '悉尼美食文化探索',
      category: '文化體驗',
      readTime: '18分鐘',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20multicultural%20food%20scene%20diverse%20cuisine%2C%20ethnic%20restaurants%2C%20food%20markets%2C%20culinary%20diversity%2C%20international%20dining%2C%20gastronomic%20cultural%20experience&width=800&height=600&seq=sydney-food-culture-detail&orientation=landscape',
      description: '認識悉尼多元文化背景下的豐富美食文化',
      tags: ['美食', '多元文化', '市場', '餐廳'],
      author: 'Food Expert',
      publishDate: '2024-01-03',
      views: 14560
    }
  };

  const guide = guides[guideId as keyof typeof guides] || guides['transportation-guide'];

  return (
    <div className="min-h-screen bg-gray-50">
      <GuideHeader data={guide} />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <GuideContent data={guide} />
        </div>
      </div>
    </div>
  );
}