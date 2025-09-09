
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ShoppingHeader from './ShoppingHeader';
import ShoppingInfo from './ShoppingInfo';
import ShoppingPhotos from './ShoppingPhotos';
import ShoppingReviews from './ShoppingReviews';

interface ShoppingDetailProps {
  shoppingId: string;
}

export default function ShoppingDetail({ shoppingId }: ShoppingDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorited, setIsFavorited] = useState(false);

  const shoppingData: Record<string, any> = {
    'qvb': {
      id: 'qvb',
      name: 'QVB 維多利亞女王大廈',
      type: '歷史購物中心',
      rating: 4.8,
      reviews: 2156,
      image: 'https://readdy.ai/api/search-image?query=Queen%20Victoria%20Building%20QVB%20Sydney%20magnificent%20Victorian%20architecture%20exterior%20with%20clock%20tower%2C%20ornate%20facades%2C%20heritage%20building%2C%20tourist%20landmark%2C%20George%20Street%20location%2C%20beautiful%20historic%20shopping%20center&width=400&height=300&seq=qvb-exterior&orientation=landscape',
      description: '建於1898年的維多利亞女王大廈是悉尼最美麗的購物中心之一，擁有精緻的維多利亞式建築和優雅的購物環境。',
      address: '455 George St, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Queen+Victoria+Building+455+George+Street+Sydney+NSW+2000',
      phone: '+61 2 9265 6800',
      website: 'www.qvb.com.au',
      hours: {
        '週一至週三': '9:00 - 18:00',
        '週四': '9:00 - 21:00',
        '週五至週六': '9:00 - 18:00',
        '週日': '11:00 - 17:00'
      },
      parking: '地下停車場，前2小時$8',
      tags: ['奢侈品', '歷史建築', '咖啡廳', '珠寶', '時裝'],
      highlights: [
        '百年歷史的維多利亞式建築',
        '精美的彩色玻璃圓頂',
        '超過180家精品店舖',
        '著名的大時鐘和許願井',
        '優雅的咖啡廳和餐廳'
      ]
    },
    'westfield-sydney': {
      id: 'westfield-sydney',
      name: 'Westfield Sydney',
      type: '現代購物中心',
      rating: 4.6,
      reviews: 1823,
      image: 'https://readdy.ai/api/search-image?query=Westfield%20Sydney%20modern%20shopping%20mall%20interior%20with%20contemporary%20architecture%2C%20multiple%20shopping%20levels%2C%20fashion%20stores%2C%20food%20court%2C%20bright%20natural%20lighting%2C%20busy%20shoppers%2C%20sleek%20design%20elements&width=400&height=300&seq=westfield-interior&orientation=landscape',
      description: 'Westfield Sydney是悉尼市中心最大的購物中心，匯集了世界知名品牌和最新的時尚潮流。',
      address: 'Pitt Street Mall, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Westfield+Sydney+Pitt+Street+Mall+Sydney+NSW+2000',
      phone: '+61 2 8236 9200',
      website: 'www.westfield.com.au/sydney',
      hours: {
        '週一至週三': '9:30 - 19:00',
        '週四': '9:30 - 21:00',
        '週五': '9:30 - 21:00',
        '週六': '9:00 - 19:00',
        '週日': '10:00 - 19:00'
      },
      parking: '購物可享免費停車',
      tags: ['時尚', '美食廣場', '電影院', '化妝品', '科技'],
      highlights: [
        '超過250家國際品牌店舖',
        '6層樓的時尚購物體驗',
        '頂級美食廣場',
        'Event Cinemas電影院',
        '免費WiFi覆蓋全場'
      ]
    },
    'strand-arcade': {
      id: 'strand-arcade',
      name: 'Strand Arcade 拱廊',
      type: '精品拱廊',
      rating: 4.7,
      reviews: 956,
      image: 'https://readdy.ai/api/search-image?query=Strand%20Arcade%20Sydney%20beautiful%20Victorian%20era%20glass%20ceiling%20corridor%20with%20elegant%20boutiques%2C%20vintage%20architecture%2C%20natural%20skylight%2C%20heritage%20shopping%20arcade%2C%20ornate%20interior%20details%2C%20classic%20retail%20environment&width=400&height=300&seq=strand-corridor&orientation=landscape',
      description: '建於1892年的Strand Arcade是悉尼最優雅的購物拱廊，以其精美的維多利亞式玻璃天花板而聞名。',
      address: '412-414 George St, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Strand+Arcade+412+George+Street+Sydney+NSW+2000',
      phone: '+61 2 9232 4199',
      website: 'www.strandarcade.com.au',
      hours: {
        '週一至週三': '9:00 - 17:30',
        '週四': '9:00 - 21:00',
        '週五': '9:00 - 17:30',
        '週六': '9:00 - 17:00',
        '週日': '關閉'
      },
      parking: '附近有多個付費停車場',
      tags: ['精品', '咖啡', '手工藝品', '珠寶', '書店'],
      highlights: [
        '百年歷史的玻璃拱廊',
        '獨特的精品店和設計師品牌',
        '著名的Strand Hatters帽店',
        '精緻的咖啡廳',
        '手工製作的澳洲紀念品'
      ]
    },
    'paddy-market': {
      id: 'paddy-market',
      name: 'Paddy\'s Markets 帕迪市場',
      type: '傳統市場',
      rating: 4.3,
      reviews: 1234,
      image: 'https://readdy.ai/api/search-image?query=Paddys%20Markets%20Sydney%20vibrant%20traditional%20market%20hall%20with%20fresh%20produce%20stalls%2C%20local%20vendors%2C%20colorful%20fruits%20and%20vegetables%2C%20authentic%20market%20atmosphere%2C%20bustling%20shoppers%2C%20diverse%20food%20products&width=400&height=300&seq=paddys-interior&orientation=landscape',
      description: '成立於1834年的帕迪市場是悉尼最古老的市場，提供新鮮農產品、紀念品和各種特色商品。',
      address: '9-13 Hay St, Haymarket NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Paddys+Markets+9+Hay+Street+Haymarket+NSW+2000',
      phone: '+61 2 9325 6924',
      website: 'www.paddysmarkets.com.au',
      hours: {
        '週三至週五': '10:00 - 18:00',
        '週六至週日': '9:00 - 17:00',
        '週一至週二': '關閉'
      },
      parking: 'Market City停車場',
      tags: ['新鮮食材', '紀念品', '便宜', '多元文化', '傳統'],
      highlights: [
        '悉尼最古老的市場',
        '新鮮的本地農產品',
        '物美價廉的紀念品',
        '多元文化的美食攤位',
        '真正的當地購物體驗'
      ]
    },
    'barangaroo-shops': {
      id: 'barangaroo-shops',
      name: 'Barangaroo 購物區',
      type: '海濱商店',
      rating: 4.5,
      reviews: 678,
      image: 'https://readdy.ai/api/search-image?query=Barangaroo%20Sydney%20modern%20waterfront%20shopping%20precinct%20with%20luxury%20retail%20stores%2C%20contemporary%20architecture%2C%20harbor%20views%2C%20outdoor%20shopping%20walkways%2C%20premium%20brands%2C%20scenic%20dining%20options&width=400&height=300&seq=barangaroo-precinct&orientation=landscape',
      description: 'Barangaroo是悉尼最新的高端購物區，結合了奢華購物、精緻餐飲和絕美的海港景色。',
      address: 'Barangaroo Ave, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Barangaroo+Shopping+District+Barangaroo+Avenue+Sydney+NSW+2000',
      phone: '+61 2 8072 7000',
      website: 'www.barangaroo.com',
      hours: {
        '週一至週日': '10:00 - 22:00'
      },
      parking: '地下停車場，首小時免費',
      tags: ['海景', '高端', '餐廳', '奢侈品', '現代'],
      highlights: [
        '壯觀的海港景色',
        '國際奢侈品牌',
        '世界級餐廳和酒吧',
        '現代建築設計',
        '海濱步行道'
      ]
    },
    'bondi-markets': {
      id: 'bondi-markets',
      name: 'Bondi Markets 邦迪市場',
      type: '海灘市場',
      rating: 4.4,
      reviews: 892,
      image: 'https://readdy.ai/api/search-image?query=Bondi%20Markets%20Sydney%20beachside%20weekend%20market%20with%20local%20artisan%20stalls%2C%20handmade%20crafts%2C%20vintage%20clothing%2C%20organic%20produce%2C%20bohemian%20atmosphere%2C%20outdoor%20market%20setting%2C%20creative%20vendors&width=400&height=300&seq=bondi-market-stalls&orientation=landscape',
      description: '邦迪市場是每週六舉行的創意市集，匯集了本地藝術家、設計師和手工藝者的獨特作品。',
      address: 'Bondi Beach Public School, Campbell Parade',
      googleMapsUrl: 'https://maps.google.com/?q=Bondi+Markets+Bondi+Beach+Public+School+Campbell+Parade+Bondi+Beach+NSW+2026',
      phone: '+61 2 9398 5486',
      website: 'www.bondimarkets.com.au',
      hours: {
        '週六': '9:00 - 16:00',
        '其他日期': '關閉'
      },
      parking: '街邊停車',
      tags: ['手工', '有機', '海灘風', '藝術', '創意'],
      highlights: [
        '獨特的手工藝品',
        '本地設計師作品',
        '有機食品和護膚品',
        '復古和二手服飾',
        '海灘邊的輕鬆氛圍'
      ]
    },
    'myer-sydney': {
      id: 'myer-sydney',
      name: 'Myer Sydney 邁爾百貨',
      type: '百貨公司',
      rating: 4.4,
      reviews: 1567,
      image: 'https://readdy.ai/api/search-image?query=Myer%20department%20store%20Sydney%20elegant%20interior%20with%20luxury%20fashion%20displays%2C%20cosmetics%20counters%2C%20multiple%20shopping%20floors%2C%20premium%20retail%20experience%2C%20Australian%20department%20store%20landmark&width=400&height=300&seq=myer-interior&orientation=landscape',
      description: '澳洲最具代表性的百貨公司，提供國際奢侈品牌、時尚服飾、化妝品和家居用品的一站式購物體驗。',
      address: '436 George St, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Myer+Sydney+436+George+Street+Sydney+NSW+2000',
      phone: '+61 2 9238 9111',
      website: 'www.myer.com.au',
      hours: {
        '週一至週三': '9:30 - 19:00',
        '週四': '9:30 - 21:00',
        '週五': '9:30 - 19:00',
        '週六': '9:00 - 19:00',
        '週日': '10:00 - 19:00'
      },
      parking: '購物滿$50可享2小時免費停車',
      tags: ['時尚', '化妝品', '精品', '家居', '禮品'],
      highlights: [
        '澳洲知名百貨品牌',
        '國際時尚和美容品牌',
        '專業美容諮詢服務',
        '會員積分優惠',
        '季節性特價活動'
      ]
    },
    'dfo-homebush': {
      id: 'dfo-homebush',
      name: 'DFO Homebush 暢貨中心',
      type: '暢貨中心',
      rating: 4.2,
      reviews: 1089,
      image: 'https://readdy.ai/api/search-image?query=DFO%20outlet%20shopping%20center%20Homebush%20Sydney%20brand%20name%20stores%20with%20discount%20signs%2C%20modern%20retail%20complex%2C%20bargain%20shopping%20atmosphere%2C%20factory%20outlet%20environment&width=400&height=300&seq=dfo-outlet&orientation=landscape',
      description: '悉尼最大的品牌暢貨中心，提供知名品牌30%-70%的折扣優惠，是精明購物者的天堂。',
      address: '3-5 Underwood Rd, Homebush NSW 2140',
      googleMapsUrl: 'https://maps.google.com/?q=DFO+Homebush+3+Underwood+Road+Homebush+NSW+2140',
      phone: '+61 2 9748 9800',
      website: 'www.dfo.com.au/homebush',
      hours: {
        '週一至週三': '10:00 - 18:00',
        '週四至週五': '10:00 - 21:00',
        '週六': '9:00 - 18:00',
        '週日': '10:00 - 18:00'
      },
      parking: '免費停車場',
      tags: ['折扣', '品牌', '划算', '運動用品', '時裝'],
      highlights: [
        '超過100家品牌折扣店',
        '全年30%-70%折扣',
        'Nike、Adidas等運動品牌',
        '免費停車位充足',
        '定期清倉特賣活動'
      ]
    },
    'harbourside-shopping': {
      id: 'harbourside-shopping',
      name: 'Harbourside Shopping 海港購物中心',
      type: '旅遊購物中心',
      rating: 4.3,
      reviews: 945,
      image: 'https://readdy.ai/api/search-image?query=Harbourside%20Shopping%20Centre%20Darling%20Harbour%20Sydney%20waterfront%20retail%20complex%20with%20harbor%20views%2C%20tourist%20shopping%20destination%2C%20maritime%20atmosphere%2C%20outdoor%20dining%20areas&width=400&height=300&seq=harbourside-exterior&orientation=landscape',
      description: '位於情人港的購物中心，結合購物、餐飲和娛樂，是遊客和當地人的熱門聚會地點。',
      address: 'Darling Harbour, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Harbourside+Shopping+Centre+Darling+Harbour+Sydney+NSW+2000',
      phone: '+61 2 9281 3999',
      website: 'www.harboursidesc.com.au',
      hours: {
        '週一至週日': '10:00 - 21:00'
      },
      parking: '地下停車場，購物可享折扣',
      tags: ['海景', '旅遊', '便利', '紀念品', '餐飲'],
      highlights: [
        '絕佳的海港景觀',
        '豐富的紀念品選擇',
        '多元化餐飲選擇',
        '鄰近主要景點',
        '適合全家購物'
      ]
    },
    'pitt-street-mall': {
      id: 'pitt-street-mall',
      name: 'Pitt Street Mall 皮特街購物街',
      type: '步行購物街',
      rating: 4.5,
      reviews: 2234,
      image: 'https://readdy.ai/api/search-image?query=Pitt%20Street%20Mall%20Sydney%20bustling%20pedestrian%20shopping%20street%20with%20retail%20stores%2C%20busy%20shoppers%2C%20city%20center%20commercial%20district%2C%20Australian%20urban%20shopping%20boulevard%2C%20modern%20storefronts&width=400&height=300&seq=pitt-street-scene&orientation=landscape',
      description: '悉尼市中心最繁華的步行購物街，匯集了各種國際品牌和本地商店，是購物愛好者的必訪之地。',
      address: 'Pitt St, Sydney CBD NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=Pitt+Street+Mall+Sydney+CBD+NSW+2000',
      phone: 'N/A',
      website: 'www.cityofsydney.nsw.gov.au',
      hours: {
        '店鋪營業時間': '因店而異，通常9:00-18:00'
      },
      parking: '附近有多個付費停車場',
      tags: ['步行街', '品牌', '繁華', '便利', '多樣'],
      highlights: [
        '悉尼最繁忙的購物街',
        '各種國際和本地品牌',
        '步行友善的購物環境',
        '街頭表演和活動',
        '連接主要購物中心'
      ]
    },
    'chatswood-chase': {
      id: 'chatswood-chase',
      name: 'Chatswood Chase 查茨伍德購物中心',
      type: '區域購物中心',
      rating: 4.4,
      reviews: 1456,
      image: 'https://readdy.ai/api/search-image?query=Chatswood%20Chase%20shopping%20center%20modern%20interior%20with%20escalators%2C%20retail%20stores%2C%20family%20shopping%20environment%2C%20North%20Shore%20Sydney%20suburban%20mall%2C%20contemporary%20design%20elements&width=400&height=300&seq=chatswood-interior&orientation=landscape',
      description: '位於悉尼北岸的大型購物中心，以其便利的交通、豐富的購物選擇和優質的餐飲而受到家庭顧客的喜愛。',
      address: '345 Victoria Ave, Chatswood NSW 2067',
      googleMapsUrl: 'https://maps.google.com/?q=Chatswood+Chase+345+Victoria+Avenue+Chatswood+NSW+2067',
      phone: '+61 2 9410 4666',
      website: 'www.chatswoodchase.com.au',
      hours: {
        '週一至週三': '9:00 - 17:30',
        '週四': '9:00 - 21:00',
        '週五': '9:00 - 17:30',
        '週六': '9:00 - 17:00',
        '週日': '10:00 - 17:00'
      },
      parking: '免費停車3小時',
      tags: ['家庭', '美食', '交通便利', '品牌', '舒適'],
      highlights: [
        '直接連接火車站',
        '超過230家商店',
        '豐富的美食選擇',
        '兒童遊樂設施',
        '免費停車便利'
      ]
    },
    'broadway-shopping': {
      id: 'broadway-shopping',
      name: 'Broadway Shopping Centre 百老匯購物中心',
      type: '社區購物中心',
      rating: 4.2,
      reviews: 1123,
      image: 'https://readdy.ai/api/search-image?query=Broadway%20Shopping%20Centre%20Sydney%20modern%20community%20mall%20with%20diverse%20stores%2C%20student-friendly%20retail%20environment%2C%20urban%20shopping%20center%2C%20contemporary%20architecture%2C%20practical%20shopping%20destination&width=400&height=300&seq=broadway-mall&orientation=landscape',
      description: '位於悉尼大學附近的社區購物中心，以實惠的價格和多元化的商店選擇服務當地居民和學生。',
      address: '1 Bay St, Broadway NSW 2007',
      googleMapsUrl: 'https://maps.google.com/?q=Broadway+Shopping+Centre+1+Bay+Street+Broadway+NSW+2007',
      phone: '+61 2 9212 3599',
      website: 'www.broadwaysc.com.au',
      hours: {
        '週一至週三': '9:00 - 17:30',
        '週四': '9:00 - 21:00',
        '週五': '9:00 - 17:30',
        '週六': '9:00 - 17:00',
        '週日': '10:00 - 17:00'
      },
      parking: '購物可享2小時免費停車',
      tags: ['學生', '實惠', '多元', '便利', '社區'],
      highlights: [
        '鄰近悉尼大學',
        '學生友善的價格',
        '多元文化商店',
        '24小時健身房',
        '便利的公共交通'
      ]
    }
  };

  const data = shoppingData[shoppingId] || shoppingData['qvb'];

  const tabs = [
    { id: 'overview', label: '概覽', icon: 'ri-information-line' },
    { id: 'photos', label: '照片', icon: 'ri-camera-line' },
    { id: 'reviews', label: '評價', icon: 'ri-star-line' },
  ];

  const handleNavigation = () => {
    if (data.googleMapsUrl) {
      window.open(data.googleMapsUrl, '_blank');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: data.name,
      text: `查看 ${data.name} - ${data.description}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        copyToClipboard(`${data.name} - ${window.location.href}`);
      }
    } else {
      copyToClipboard(`${data.name} - ${window.location.href}`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // 創建成功提示
      const toast = document.createElement('div');
      toast.innerHTML = `
        <div style="
          position: fixed; 
          top: 20%; 
          left: 50%; 
          transform: translate(-50%, -50%);
          background: linear-gradient(145deg, #10B981, #059669); 
          color: white; 
          padding: 12px 20px; 
          border-radius: 12px; 
          font-size: 14px; 
          font-weight: 600;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
          z-index: 10000;
          text-align: center;
          animation: shareToast 0.4s ease-out;
        ">
          📋 連結已複製到剪貼板！
        </div>
        <style>
          @keyframes shareToast {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
        </style>
      `;

      document.body.appendChild(toast);

      setTimeout(() => {
        if (toast.parentNode) {
          toast.style.transition = 'all 0.3s ease-out';
          toast.style.opacity = '0';
          toast.style.transform = 'translate(-50%, -50%) scale(0.8)';
          setTimeout(() => {
            if (toast.parentNode) {
              document.body.removeChild(toast);
            }
          }, 300);
        }
      }, 2000);
    }).catch(() => {
      // 複製失敗提示
      const toast = document.createElement('div');
      toast.innerHTML = `
        <div style="
          position: fixed; 
          top: 20%; 
          left: 50%; 
          transform: translate(-50%, -50%);
          background: linear-gradient(145deg, #EF4444, #DC2626); 
          color: white; 
          padding: 12px 20px; 
          border-radius: 12px; 
          font-size: 14px; 
          font-weight: 600;
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
          z-index: 10000;
          text-align: center;
        ">
          ❌ 複製失敗，請手動複製連結
        </div>
      `;

      document.body.appendChild(toast);

      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 3000);
    });
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    
    // 創建收藏狀態提示
    const toast = document.createElement('div');
    const isAdding = !isFavorited;
    
    toast.innerHTML = `
      <div style="
        position: fixed; 
        top: 20%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        background: linear-gradient(145deg, ${isAdding ? '#EF4444, #DC2626' : '#6B7280, #4B5563'}); 
        color: white; 
        padding: 12px 20px; 
        border-radius: 12px; 
        font-size: 14px; 
        font-weight: 600;
        box-shadow: 0 8px 25px ${isAdding ? 'rgba(239, 68, 68, 0.3)' : 'rgba(107, 114, 128, 0.3)'};
        z-index: 10000;
        text-align: center;
        animation: favoriteToast 0.4s ease-out;
      ">
        ${isAdding ? '❤️ 已加入收藏！' : '💔 已取消收藏'}
      </div>
      <style>
        @keyframes favoriteToast {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
      </style>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.transition = 'all 0.3s ease-out';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <ShoppingHeader data={data} onShare={handleShare} onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />

      {/* 標籤導航 */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center py-3 text-sm font-medium cursor-pointer transition-colors ${
                activeTab === tab.id
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className={`${tab.icon} mr-1`}></i>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 內容區域 */}
      <div className="pb-4">
        {activeTab === 'overview' && <ShoppingInfo data={data} />}
        {activeTab === 'photos' && <ShoppingPhotos data={data} />}
        {activeTab === 'reviews' && <ShoppingReviews data={data} />}
      </div>

      {/* 底部操作按鈕 */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex space-x-3">
          <button 
            onClick={handleNavigation}
            className="flex-1 bg-red-500 text-white py-3 rounded-full font-medium whitespace-nowrap hover:bg-red-600 transition-colors cursor-pointer"
          >
            Google 地圖導航
          </button>
          <button 
            onClick={handleShare}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            title="分享"
          >
            <i className="ri-share-line text-lg text-gray-600"></i>
          </button>
          <button 
            onClick={toggleFavorite}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            title={isFavorited ? '取消收藏' : '加入收藏'}
          >
            <i className={`${isFavorited ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'} text-lg`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
