
'use client';

import Link from 'next/link';
import { useState } from 'react';
import SamsungClipboardHelper from '@/lib/samsung-clipboard-helper';

const allShoppingPlaces = [
  {
    id: 'qvb',
    name: 'QVB 維多利亞女王大廈',
    type: '購物中心',
    category: '購物中心',
    rating: 4.8,
    reviews: 2156,
    image: 'https://readdy.ai/api/search-image?query=Queen%20Victoria%20Building%20QVB%20Sydney%20magnificent%20Victorian%20architecture%20interior%20with%20beautiful%20stained%20glass%20dome%2C%20elegant%20shopping%20galleries%2C%20luxury%20boutiques%2C%20ornate%20decorative%20details%2C%20historic%20Australian%20shopping%20landmark&width=300&height=200&seq=qvb-interior&orientation=landscape',
    tags: ['奢侈品', '歷史建築', '咖啡廳'],
    address: '455 George St, Sydney',
    googleMapsUrl: 'https://maps.google.com/?q=Queen+Victoria+Building+455+George+Street+Sydney+NSW+2000',
    hours: '每日 9:00-18:00',
    description: '百年歷史的優雅購物體驗'
  },
  {
    id: 'westfield-sydney',
    name: 'Westfield Sydney',
    type: '購物中心',
    category: '購物中心',
    rating: 4.6,
    reviews: 1823,
    image: 'https://readdy.ai/api/search-image?query=Westfield%20Sydney%20modern%20shopping%20center%20interior%20with%20contemporary%20design%2C%20multiple%20levels%2C%20fashion%20stores%2C%20bright%20lighting%2C%20bustling%20shoppers%2C%20sleek%20retail%20environment%2C%20Australian%20shopping%20mall&width=300&height=200&seq=westfield-sydney&orientation=landscape',
    tags: ['時尚', '美食廣場', '電影院'],
    address: 'Pitt Street Mall, Sydney',
    googleMapsUrl: 'https://maps.google.com/?q=Westfield+Sydney+Pitt+Street+Mall+Sydney+NSW+2000',
    hours: '每日 9:30-21:00',
    description: '時尚潮流的購物天堂'
  },
  {
    id: 'strand-arcade',
    name: 'Strand Arcade 拱廊',
    type: '精品店',
    category: '精品店',
    rating: 4.7,
    reviews: 956,
    image: 'https://readdy.ai/api/search-image?query=Strand%20Arcade%20Sydney%20beautiful%20Victorian%20glass%20roof%20arcade%20with%20elegant%20boutiques%2C%20vintage%20architecture%2C%20natural%20lighting%2C%20heritage%20shopping%20experience%2C%20ornate%20interior%20design%2C%20classic%20Australian%20retail&width=300&height=200&seq=strand-arcade&orientation=landscape',
    tags: ['精品', '咖啡', '手工藝品'],
    address: '412-414 George St, Sydney',
    googleMapsUrl: 'https://maps.google.com/?q=Strand+Arcade+412+George+Street+Sydney+NSW+2000',
    hours: '週一至六 9:00-17:30',
    description: '維多利亞時代的精品購物'
  },
  {
    id: 'paddy-market',
    name: 'Paddy\'s Markets 帕迪市場',
    type: '本地市場',
    category: '本地市場',
    rating: 4.3,
    reviews: 1234,
    image: 'https://readdy.ai/api/search-image?query=Paddys%20Markets%20Sydney%20bustling%20traditional%20market%20with%20fresh%20produce%2C%20local%20vendors%2C%20colorful%20fruits%20and%20vegetables%2C%20authentic%20Australian%20market%20atmosphere%2C%20diverse%20food%20stalls%2C%20community%20shopping%20experience&width=300&height=200&seq=paddys-market&orientation=landscape',
    tags: ['新鮮食材', '紀念品', '便宜'],
    address: '9-13 Hay St, Haymarket',
    googleMapsUrl: 'https://maps.google.com/?q=Paddys+Markets+9+Hay+Street+Haymarket+NSW+2000',
    hours: '週三至日 10:00-16:00',
    description: '體驗當地人的購物文化'
  },
  {
    id: 'barangaroo-shops',
    name: 'Barangaroo 購物區',
    type: '購物中心',
    category: '購物中心',
    rating: 4.5,
    reviews: 678,
    image: 'https://readdy.ai/api/search-image?query=Barangaroo%20Sydney%20waterfront%20shopping%20district%20with%20modern%20retail%20stores%2C%20harbor%20views%2C%20contemporary%20architecture%2C%20outdoor%20shopping%20experience%2C%20scenic%20walkways%2C%20luxury%20brands%2C%20Australian%20coastal%20shopping&width=300&height=200&seq=barangaroo-shops&orientation=landscape',
    tags: ['海景', '高端', '餐廳'],
    address: 'Barangaroo Ave, Sydney',
    googleMapsUrl: 'https://maps.google.com/?q=Barangaroo+Shopping+District+Barangaroo+Avenue+Sydney+NSW+2000',
    hours: '每日 10:00-22:00',
    description: '海港景致的高端購物'
  },
  {
    id: 'bondi-markets',
    name: 'Bondi Markets 邦迪市場',
    type: '本地市場',
    category: '本地市場',
    rating: 4.4,
    reviews: 892,
    image: 'https://readdy.ai/api/search-image?query=Bondi%20Markets%20Sydney%20beachside%20market%20with%20local%20artisans%2C%20handmade%20crafts%2C%20organic%20produce%2C%20bohemian%20atmosphere%2C%20coastal%20shopping%2C%20vintage%20finds%2C%20outdoor%20market%20stalls%2C%20relaxed%20Australian%20beach%20culture&width=300&height=200&seq=bondi-markets&orientation=landscape',
    tags: ['手工', '有機', '海灘風'],
    address: 'Bondi Beach Public School',
    googleMapsUrl: 'https://maps.google.com/?q=Bondi+Markets+Bondi+Beach+Public+School+Campbell+Parade+Bondi+Beach+NSW+2026',
    hours: '週六 9:00-16:00',
    description: '海灘邊的藝術創意市集'
  },
  {
    id: 'myer-sydney',
    name: 'Myer Sydney 邁爾百貨',
    type: '百貨公司',
    category: '百貨公司',
    rating: 4.4,
    reviews: 1567,
    image: 'https://readdy.ai/api/search-image?query=Myer%20department%20store%20Sydney%20elegant%20interior%20with%20luxury%20fashion%20brands%2C%20cosmetics%20counters%2C%20premium%20shopping%20experience%2C%20Australian%20retail%20landmark&width=300&height=200&seq=myer-sydney&orientation=landscape',
    tags: ['時尚', '化妝品', '精品'],
    address: '436 George St, Sydney',
    googleMapsUrl: 'https://maps.google.com/?q=Myer+Sydney+436+George+Street+Sydney+NSW+2000',
    hours: '每日 9:30-19:00',
    description: '澳洲知名百貨連鎖店'
  },
  {
    id: 'dfo-homebush',
    name: 'DFO Homebush 暢貨中心',
    type: '暢貨中心',
    category: '暢貨中心',
    rating: 4.2,
    reviews: 1089,
    image: 'https://readdy.ai/api/search-image?query=DFO%20outlet%20shopping%20center%20with%20brand%20name%20stores%2C%20discount%20fashion%20retail%2C%20modern%20shopping%20complex%2C%20bargain%20hunting%20experience&width=300&height=200&seq=dfo-homebush&orientation=landscape',
    tags: ['折扣', '品牌', '划算'],
    address: '3-5 Underwood Rd, Homebush',
    googleMapsUrl: 'https://maps.google.com/?q=DFO+Homebush+3+Underwood+Road+Homebush+NSW+2140',
    hours: '每日 10:00-18:00',
    description: '品牌折扣的購物天堂'
  },
  {
    id: 'harbourside-shopping',
    name: 'Harbourside Shopping 海港購物中心',
    type: '購物中心',
    category: '購物中心',
    rating: 4.3,
    reviews: 945,
    image: 'https://readdy.ai/api/search-image?query=Harbourside%20Shopping%20Centre%20Darling%20Harbour%20Sydney%20waterfront%20retail%20complex%20with%20harbor%20views%2C%20modern%20shopping%20mall%2C%20tourist%20destination&width=300&height=200&seq=harbourside-shopping&orientation=landscape',
    tags: ['海景', '旅遊', '便利'],
    address: 'Darling Harbour, Sydney',
    googleMapsUrl: 'https://maps.google.com/?q=Harbourside+Shopping+Centre+Darling+Harbour+Sydney+NSW+2000',
    hours: '每日 10:00-21:00',
    description: '情人港的購物休閒中心'
  },
  {
    id: 'pitt-street-mall',
    name: 'Pitt Street Mall 皮特街購物街',
    type: '購物街',
    category: '購物街',
    rating: 4.5,
    reviews: 2234,
    image: 'https://readdy.ai/api/search-image?query=Pitt%20Street%20Mall%20Sydney%20pedestrian%20shopping%20street%20with%20retail%20stores%2C%20busy%20shoppers%2C%20city%20center%20commercial%20district%2C%20Australian%20shopping%20boulevard&width=300&height=200&seq=pitt-street-mall&orientation=landscape',
    tags: ['步行街', '品牌', '繁華'],
    address: 'Pitt St, Sydney CBD',
    googleMapsUrl: 'https://maps.google.com/?q=Pitt+Street+Mall+Sydney+CBD+NSW+2000',
    hours: '店鋪營業時間不同',
    description: '悉尼最繁華的購物步行街'
  },
  {
    id: 'chatswood-chase',
    name: 'Chatswood Chase 查茨伍德購物中心',
    type: '購物中心',
    category: '購物中心',
    rating: 4.4,
    reviews: 1456,
    image: 'https://readdy.ai/api/search-image?query=Chatswood%20Chase%20shopping%20center%20modern%20interior%20with%20escalators%2C%20retail%20stores%2C%20family%20shopping%20environment%2C%20North%20Shore%20Sydney%20mall&width=300&height=200&seq=chatswood-chase&orientation=landscape',
    tags: ['家庭', '美食', '交通便利'],
    address: '345 Victoria Ave, Chatswood',
    googleMapsUrl: 'https://maps.google.com/?q=Chatswood+Chase+345+Victoria+Avenue+Chatswood+NSW+2067',
    hours: '每日 9:00-17:30',
    description: '北岸地區的購物熱點'
  },
  {
    id: 'broadway-shopping',
    name: 'Broadway Shopping Centre 百老匯購物中心',
    type: '購物中心',
    category: '購物中心',
    rating: 4.2,
    reviews: 1123,
    image: 'https://readdy.ai/api/search-image?query=Broadway%20Shopping%20Centre%20Sydney%20modern%20mall%20with%20diverse%20stores%2C%20student-friendly%20shopping%2C%20urban%20retail%20environment&width=300&height=200&seq=broadway-shopping&orientation=landscape',
    tags: ['學生', '實惠', '多元'],
    address: '1 Bay St, Broadway',
    googleMapsUrl: 'https://maps.google.com/?q=Broadway+Shopping+Centre+1+Bay+Street+Broadway+NSW+2007',
    hours: '每日 9:00-17:30',
    description: '學生區的實惠購物選擇'
  }
];

interface ShoppingGridProps {
  categoryFilter?: string;
}

export default function ShoppingGrid({ categoryFilter = '全部' }: ShoppingGridProps) {
  const [displayCount, setDisplayCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredPlaces = categoryFilter === '全部' 
    ? allShoppingPlaces 
    : allShoppingPlaces.filter(place => place.category === categoryFilter);

  const displayedPlaces = filteredPlaces.slice(0, displayCount);
  const hasMore = displayCount < filteredPlaces.length;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + 4);
      setIsLoading(false);
    }, 1000);
  };

  const toggleFavorite = (placeId: string) => {
    setFavorites(prev => 
      prev.includes(placeId) 
        ? prev.filter(id => id !== placeId)
        : [...prev, placeId]
    );
  };

  const sharePlace = async (place: any) => {
    const shareData = {
      title: place.name,
      text: `查看 ${place.name} - ${place.description}`,
      url: `${window.location.origin}/shopping/${place.id}`
    };

    try {
      await SamsungClipboardHelper.copyWithShare(
        `${place.name} - ${window.location.origin}/shopping/${place.id}`,
        place.name,
        `查看 ${place.name} - ${place.description}`
      );
    } catch (error) {
      console.error('分享失敗:', error);
    }
  };

  const openGoogleMaps = (place: any) => {
    if (place.googleMapsUrl) {
      window.open(place.googleMapsUrl, '_blank');
    } else {
      const encodedAddress = encodeURIComponent(place.address);
      window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
    }
  };

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">熱門購物地點</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <i className="ri-map-pin-line"></i>
          <span>按距離排序</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {displayedPlaces.map((place) => (
          <div key={place.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Link href={`/shopping/${place.id}`}>
              <div className="relative cursor-pointer hover:shadow-md transition-shadow">
                <img 
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-3 right-3">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(place.id);
                    }}
                    className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                  >
                    <i className={`${favorites.includes(place.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                  </button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-white/90 text-xs font-medium text-gray-800 rounded-full">
                    {place.type}
                  </span>
                </div>
              </div>
            </Link>

            <div className="p-4">
              <Link href={`/shopping/${place.id}`}>
                <div className="cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg hover:text-red-500 transition-colors">{place.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{place.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <i className="ri-map-pin-line text-red-500"></i>
                      <span>{place.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <i className="ri-time-line text-blue-500"></i>
                      <span>{place.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {place.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`${i < Math.floor(place.rating) ? 'ri-star-fill' : 'ri-star-line'} text-sm`}></i>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{place.rating}</span>
                  <span className="text-xs text-gray-500">({place.reviews})</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => sharePlace(place)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
                    title="分享"
                  >
                    <i className="ri-share-line text-lg text-gray-400 hover:text-gray-600"></i>
                  </button>
                  <button 
                    onClick={() => openGoogleMaps(place)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-blue-100 rounded-full transition-colors"
                    title="Google 地圖導航"
                  >
                    <i className="ri-navigation-line text-lg text-blue-500 hover:text-blue-600"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedPlaces.length === 0 && (
        <div className="text-center py-8">
          <i className="ri-shopping-bag-line text-4xl text-gray-300 mb-2"></i>
          <p className="text-gray-500">該分類暫無購物地點</p>
        </div>
      )}

      {hasMore && (
        <div className="mt-6 text-center">
          <button 
            onClick={loadMore}
            disabled={isLoading}
            className="px-6 py-3 bg-red-500 text-white rounded-full text-sm whitespace-nowrap cursor-pointer hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                載入中...
              </div>
            ) : (
              '加載更多地點購物'
            )}
          </button>
        </div>
      )}
    </div>
  );
}