'use client';

import { useState } from 'react';
import FoodHeader from './FoodHeader';
import FoodInfo from './FoodInfo';
import FoodPhotos from './FoodPhotos';
import FoodReviews from './FoodReviews';

interface FoodDetailProps {
  foodId: string;
}

export default function FoodDetail({ foodId }: FoodDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const restaurants = {
    'bennelong-restaurant': {
      id: 'bennelong-restaurant',
      name: 'Bennelong Restaurant',
      category: '澳洲料理',
      rating: 4.8,
      reviews: 1456,
      image: 'https://readdy.ai/api/search-image?query=Bennelong%20Restaurant%20Sydney%20Opera%20House%20fine%20dining%20elegant%20interior%20with%20harbor%20views%2C%20contemporary%20Australian%20cuisine%2C%20sophisticated%20restaurant%20atmosphere%2C%20luxury%20dining%20experience%2C%20modern%20culinary%20presentation&width=800&height=600&seq=bennelong-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Bennelong%20Restaurant%20Sydney%20Opera%20House%20fine%20dining%20elegant%20interior%20with%20harbor%20views%2C%20contemporary%20Australian%20cuisine%2C%20sophisticated%20restaurant%20atmosphere%2C%20luxury%20dining%20experience%2C%20modern%20culinary%20presentation&width=800&height=600&seq=bennelong-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Bennelong%20Restaurant%20exquisite%20modern%20Australian%20dishes%20beautifully%20plated%2C%20gourmet%20cuisine%20photography%2C%20fine%20dining%20food%20presentation%2C%20culinary%20artistry&width=800&height=600&seq=bennelong-food&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Bennelong%20Restaurant%20Sydney%20Opera%20House%20harbor%20views%20from%20dining%20room%2C%20elegant%20restaurant%20interior%2C%20romantic%20dining%20atmosphere%2C%20luxury%20fine%20dining%20setting&width=800&height=600&seq=bennelong-view&orientation=landscape'
      ],
      location: '悉尼歌劇院',
      address: 'Bennelong Point, Sydney NSW 2000',
      phone: '+61 2 9240 8000',
      website: 'www.bennelong.com.au',
      cuisine: '現代澳洲料理',
      priceRange: '$$$',
      description: '位於悉尼歌劇院內的頂級餐廳，由著名主廚 Peter Gilmore 主理，提供精緻的現代澳洲料理。餐廳擁有絕佳的海港景觀，是慶祝特殊場合的完美選擇。',
      specialties: [
        '澳洲和牛配時令蔬菜',
        '新鮮海鮮拼盤',
        '招牌甜點雪蛋',
        '精選澳洲葡萄酒'
      ],
      highlights: [
        '位於世界知名的悉尼歌劇院內',
        '米其林星級主廚掌廚',
        '絕佳的海港景觀',
        '頂級的用餐體驗',
        '精選澳洲本地食材'
      ],
      hours: {
        '週二-週六': '18:00 - 22:00',
        '週日': '12:00 - 15:00, 18:00 - 22:00',
        '週一': '休息'
      },
      reservationRequired: true,
      reservationNote: '建議提前2週訂位',
      tips: [
        '建議穿著smart casual服裝',
        '提前訂位以確保靠窗座位',
        '品酒套餐值得嘗試',
        '適合慶祝特殊場合'
      ],
      tags: ['精緻料理', '海景', '約會', '商務', '慶祝']
    },
    'fish-market': {
      id: 'fish-market',
      name: 'Sydney Fish Market',
      category: '海鮮',
      rating: 4.6,
      reviews: 2345,
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Fish%20Market%20fresh%20seafood%20market%20with%20abundant%20fish%20displays%2C%20oysters%20prawns%20crabs%2C%20bustling%20market%20atmosphere%2C%20traditional%20Australian%20seafood%20experience%2C%20waterfront%20location%20with%20dining%20areas&width=800&height=600&seq=fish-market-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Sydney%20Fish%20Market%20fresh%20seafood%20market%20with%20abundant%20fish%20displays%2C%20oysters%20prawns%20crabs%2C%20bustling%20market%20atmosphere%2C%20traditional%20Australian%20seafood%20experience%2C%20waterfront%20location%20with%20dining%20areas&width=800&height=600&seq=fish-market-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Fish%20Market%20fresh%20oysters%20prawns%20crabs%20lobster%20on%20ice%20display%2C%20seafood%20market%20photography%2C%20abundant%20fresh%20seafood%20selection&width=800&height=600&seq=fish-market-seafood&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Fish%20Market%20outdoor%20dining%20area%20waterfront%20views%2C%20casual%20seafood%20dining%2C%20market%20atmosphere%2C%20people%20enjoying%20fresh%20seafood&width=800&height=600&seq=fish-market-dining&orientation=landscape'
      ],
      location: '派爾蒙',
      address: 'Pyrmont Bridge Road, Pyrmont NSW 2009',
      phone: '+61 2 9004 1100',
      website: 'www.sydneyfishmarket.com.au',
      cuisine: '海鮮',
      priceRange: '$$',
      description: '南半球最大的魚市場，提供最新鮮的海鮮和多樣化的用餐選擇。從生蠔、龍蝦到各種魚類，應有盡有。',
      specialties: [
        '新鮮生蠔',
        '澳洲龍蝦',
        '巴拉曼地螃蟹',
        '金槍魚刺身'
      ],
      highlights: [
        '南半球最大魚市場',
        '最新鮮的海鮮選擇',
        '多家餐廳和攤位',
        '海濱用餐環境',
        '價格合理'
      ],
      hours: {
        '每日': '7:00 - 16:00'
      },
      tips: [
        '早上去選擇最多',
        '可以買了海鮮現場加工',
        '週末人潮較多',
        '停車位有限'
      ],
      tags: ['新鮮海鮮', '市場', '經濟實惠', '家庭', '觀光']
    },
    'bills-darlinghurst': {
      id: 'bills-darlinghurst',
      name: 'Bills Darlinghurst',
      category: '咖啡廳',
      rating: 4.7,
      reviews: 1876,
      image: 'https://readdy.ai/api/search-image?query=Bills%20restaurant%20Darlinghurst%20Sydney%20famous%20ricotta%20pancakes%20breakfast%20brunch%20cafe%2C%20modern%20Australian%20casual%20dining%2C%20bright%20interior%20with%20natural%20lighting%2C%20popular%20breakfast%20destination%2C%20cozy%20atmosphere&width=800&height=600&seq=bills-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Bills%20restaurant%20Darlinghurst%20Sydney%20famous%20ricotta%20pancakes%20breakfast%20brunch%20cafe%2C%20modern%20Australian%20casual%20dining%2C%20bright%20interior%20with%20natural%20lighting%2C%20popular%20breakfast%20destination%2C%20cozy%20atmosphere&width=800&height=600&seq=bills-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Bills%20famous%20ricotta%20pancakes%20with%20honeycomb%20butter%20and%20banana%2C%20signature%20breakfast%20dish%2C%20food%20photography%2C%20Australian%20breakfast%20classic&width=800&height=600&seq=bills-pancakes&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Bills%20restaurant%20interior%20bright%20modern%20Australian%20cafe%20design%2C%20casual%20dining%20atmosphere%2C%20breakfast%20brunch%20setting%2C%20natural%20lighting&width=800&height=600&seq=bills-interior&orientation=landscape'
      ],
      location: '達令赫斯特',
      address: '433 Liverpool St, Darlinghurst NSW 2010',
      phone: '+61 2 9360 9631',
      website: 'www.bills.com.au',
      cuisine: '現代早餐',
      priceRange: '$$',
      description: '著名的瑞可達煎餅發源地，澳洲最受歡迎的早餐店之一。由 Bill Granger 創立，以創新的早餐料理聞名全球。',
      specialties: [
        '瑞可達煎餅配蜂巢奶油',
        '炒雞蛋配吐司',
        '酪梨吐司',
        '精品咖啡'
      ],
      highlights: [
        '瑞可達煎餅發源地',
        '澳洲早餐文化代表',
        '新鮮健康的食材',
        '明亮舒適的環境',
        '友善的服務'
      ],
      hours: {
        '每日': '7:30 - 15:00'
      },
      tips: [
        '週末需要排隊',
        '推薦瑞可達煎餅',
        '咖啡品質很棒',
        '適合早餐和早午餐'
      ],
      tags: ['早餐', '煎餅', '咖啡', '健康', '休閒']
    },
    'golden-century': {
      id: 'chinatown-yum-cha',
      name: 'Golden Century Seafood',
      category: '亞洲料理',
      rating: 4.5,
      reviews: 1234,
      image: 'https://readdy.ai/api/search-image?query=Golden%20Century%20Seafood%20restaurant%20Sydney%20Chinatown%20authentic%20Cantonese%20dim%20sum%20yum%20cha%2C%20traditional%20Chinese%20dining%20atmosphere%2C%20steaming%20bamboo%20baskets%2C%20family-style%20dining%2C%20bustling%20Hong%20Kong%20style%20restaurant&width=800&height=600&seq=golden-century-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Golden%20Century%20Seafood%20restaurant%20Sydney%20Chinatown%20authentic%20Cantonese%20dim%20sum%20yum%20cha%2C%20traditional%20Chinese%20dining%20atmosphere%2C%20steaming%20bamboo%20baskets%2C%20family-style%20dining%2C%20bustling%20Hong%20Kong%20style%20restaurant&width=800&height=600&seq=golden-century-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Golden%20Century%20dim%20sum%20yum%20cha%20bamboo%20steamers%20with%20har%20gow%20siu%20mai%2C%20traditional%20Cantonese%20dumplings%2C%20authentic%20Chinese%20cuisine%20photography&width=800&height=600&seq=golden-century-dimsum&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Golden%20Century%20fresh%20seafood%20tanks%20with%20live%20fish%20crab%20lobster%2C%20traditional%20Chinese%20restaurant%20seafood%20display%2C%20authentic%20Cantonese%20dining&width=800&height=600&seq=golden-century-seafood&orientation=landscape'
      ],
      location: '中國城',
      address: '393-399 Sussex St, Sydney NSW 2000',
      phone: '+61 2 9212 3901',
      website: 'www.goldencentury.com.au',
      cuisine: '粵菜',
      priceRange: '$$',
      description: '悉尼最佳粵菜餐廳之一，24小時營業的港式茶餐廳。以新鮮海鮮和正宗點心聞名，是體驗正宗廣東菜的最佳選擇。',
      specialties: [
        '蒸蝦餃',
        '燒賣',
        '叉燒包',
        '新鮮海鮮'
      ],
      highlights: [
        '24小時營業',
        '正宗粵菜口味',
        '新鮮海鮮選擇',
        '傳統點心製作',
        '家庭聚餐首選'
      ],
      hours: {
        '每日': '24小時營業'
      },
      tips: [
        '深夜也有營業',
        '海鮮很新鮮',
        '適合大家庭聚餐',
        '點心推車服務'
      ],
      tags: ['點心', '粵菜', '家庭聚餐', '24小時', '海鮮']
    },
    'gelato-messina': {
      id: 'gelato-messina',
      name: 'Gelato Messina',
      category: '甜點',
      rating: 4.8,
      reviews: 3456,
      image: 'https://readdy.ai/api/search-image?query=Gelato%20Messina%20Sydney%20artisan%20gelato%20ice%20cream%20shop%20with%20colorful%20gelato%20display%20case%2C%20creative%20flavors%2C%20modern%20ice%20cream%20parlor%20interior%2C%20Italian-style%20gelato%20making%2C%20dessert%20paradise%20atmosphere&width=800&height=600&seq=gelato-messina-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Gelato%20Messina%20Sydney%20artisan%20gelato%20ice%20cream%20shop%20with%20colorful%20gelato%20display%20case%2C%20creative%20flavors%2C%20modern%20ice%20cream%20parlor%20interior%2C%20Italian-style%20gelato%20making%2C%20dessert%20paradise%20atmosphere&width=800&height=600&seq=gelato-messina-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gelato%20Messina%20creative%20unique%20gelato%20flavors%20scoops%20in%20cone%2C%20artisan%20ice%20cream%20photography%2C%20colorful%20gelato%20presentation&width=800&height=600&seq=gelato-messina-flavors&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gelato%20Messina%20modern%20ice%20cream%20shop%20interior%20with%20customers%20enjoying%20gelato%2C%20trendy%20dessert%20shop%20atmosphere%2C%20gelato%20display%20counter&width=800&height=600&seq=gelato-messina-shop&orientation=landscape'
      ],
      location: '多個分店',
      address: '多個分店地址',
      phone: '+61 2 9557 4233',
      website: 'www.gelatomessina.com',
      cuisine: '義式甜點',
      priceRange: '$',
      description: '澳洲最受歡迎的手工義式冰淇淋店，以創意口味和優質原料聞名。每週都會推出新的限定口味。',
      specialties: [
        '開心果冰淇淋',
        '榛果巧克力',
        '檸檬羅勒',
        '季節限定口味'
      ],
      highlights: [
        '手工製作義式冰淇淋',
        '創意獨特口味',
        '使用優質天然原料',
        '每週新口味推出',
        '澳洲本土品牌'
      ],
      hours: {
        '每日': '12:00 - 23:00'
      },
      tips: [
        '可以試吃再選擇',
        '週末人潮較多',
        '限定口味要趁早',
        '有會員優惠'
      ],
      tags: ['義式冰淇淋', '創意口味', '甜品', '手工', '天然']
    }
  };

  const restaurant = restaurants[foodId as keyof typeof restaurants] || restaurants['bennelong-restaurant'];

  return (
    <div className="min-h-screen bg-gray-50">
      <FoodHeader data={restaurant} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              className={`px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              概覽
            </button>
            <button
              className={`px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'photos'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('photos')}
            >
              照片
            </button>
            <button
              className={`px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              評價
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && <FoodInfo data={restaurant} />}
            {activeTab === 'photos' && <FoodPhotos data={restaurant} />}
            {activeTab === 'reviews' && <FoodReviews data={restaurant} />}
          </div>
        </div>
      </div>
    </div>
  );
}