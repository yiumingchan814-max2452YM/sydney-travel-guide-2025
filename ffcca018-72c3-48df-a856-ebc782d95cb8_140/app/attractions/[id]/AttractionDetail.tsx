
'use client';
import { useState } from 'react';
import AttractionHeader from './AttractionHeader';
import AttractionInfo from './AttractionInfo';
import AttractionPhotos from './AttractionPhotos';

interface AttractionDetailProps {
  attractionId: string;
}

export default function AttractionDetail({ attractionId }: AttractionDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const attractions = {
    'sydney-opera-house': {
      id: 'sydney-opera-house',
      name: '悉尼歌劇院',
      category: '地標建築',
      rating: 4.8,
      reviews: 25847,
      location: 'Bennelong Point',
      address: 'Bennelong Point, Sydney NSW 2000',
      coordinates: { lat: -33.8568, lng: 151.2153 },
      price: '$45',
      openHours: '每日 9:00-17:00',
      ticketPrice: '成人 $45 | 學生 $35 | 兒童 $25',
      phone: '+61 2 9250 7111',
      website: 'https://www.sydneyoperahouse.com',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20iconic%20white%20shell%20architecture%20against%20deep%20blue%20harbor%20water%20and%20clear%20azure%20sky%2C%20architectural%20photography%20masterpiece%2C%20golden%20hour%20dramatic%20lighting%20creating%20warm%20glow%20on%20white%20shells%2C%20professional%20travel%20photography%20with%20perfect%20composition&width=800&height=600&seq=opera-house-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20iconic%20white%20shell%20architecture%20against%20deep%20blue%20harbor%20water%20and%20clear%20azure%20sky%2C%20architectural%20photography%20masterpiece%2C%20golden%20hour%20dramatic%20lighting%20creating%20warm%20glow%20on%20white%20shells%2C%20professional%20travel%20photography%20with%20perfect%20composition&width=800&height=600&seq=opera-house-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20interior%20concert%20hall%20with%20elegant%20red%20velvet%20seats%20and%20grand%20piano%20on%20stage%2C%20sophisticated%20architecture%20with%20curved%20ceiling%2C%20warm%20ambient%20lighting%2C%20classical%20music%20venue%20atmosphere%2C%20luxurious%20performance%20space&width=800&height=600&seq=opera-house-interior&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20at%20magical%20sunset%20with%20Sydney%20Harbour%20Bridge%20visible%20in%20background%2C%20golden%20light%20reflecting%20on%20calm%20harbor%20water%2C%20dramatic%20pink%20and%20orange%20sky%2C%20breathtaking%20travel%20photography%20composition&width=800&height=600&seq=opera-house-sunset&orientation=landscape'
      ],
      description: '悉尼歌劇院是20世紀最具特色的建築之一，也是世界著名的表演藝術中心。其獨特的貝殼狀設計使其成為悉尼最具標誌性的建築，每年吸引數百萬遊客前來參觀。這座建築於1973年正式開放，由丹麥建築師約恩·烏鬆設計，是聯合國教科文組織世界文化遺產。',
      highlights: [
        '世界文化遺產',
        '獨特的建築設計',
        '世界級表演場地',
        '海港絕佳景觀'
      ],
      tips: [
        '建議提前訂票參加導覽',
        '黃昏時分拍照效果最佳',
        '可在附近的皇家植物園欣賞全景',
        '週末有免費的戶外表演'
      ],
      transport: [
        { type: '步行', icon: 'ri-walk-line', description: '從環形碼頭步行5分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭乘巴士至歌劇院站' },
        { type: '火車', icon: 'ri-train-line', description: '搭乘火車至環形碼頭站' }
      ],
      tags: ['世界遺產', '建築', '表演', '拍照'],
      hours: {
        '週一': '9:00 - 17:00',
        '週二': '9:00 - 17:00',
        '週三': '9:00 - 17:00',
        '週四': '9:00 - 17:00',
        '週五': '9:00 - 17:00',
        '週六': '9:00 - 17:00',
        '週日': '9:00 - 17:00'
      },
      ticketInfo: {
        '成人': '$45',
        '學生': '$35',
        '兒童': '$25',
        '家庭票': '$120'
      }
    },
    'harbour-bridge': {
      id: 'harbour-bridge',
      name: '悉尼海港大橋',
      category: '地標建築',
      rating: 4.7,
      reviews: 19842,
      location: '海港大橋',
      address: 'Sydney Harbour Bridge, Sydney NSW',
      coordinates: { lat: -33.8568, lng: 151.2153 },
      price: '$58',
      openHours: '每日 8:00-18:00',
      ticketPrice: '攀爬體驗 $174-$388 | 觀景台 $19',
      phone: '+61 2 8274 7777',
      website: 'https://www.bridgeclimb.com',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20majestic%20steel%20arch%20structure%20spanning%20across%20deep%20blue%20harbor%20water%20under%20clear%20sky%2C%20iconic%20engineering%20masterpiece%20photography%2C%20dramatic%20perspective%20showing%20full%20bridge%20span%2C%20professional%20architectural%20photography%20with%20perfect%20lighting&width=800&height=600&seq=harbour-bridge-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20majestic%20steel%20arch%20structure%20spanning%20across%20deep%20blue%20harbor%20water%20under%20clear%20sky%2C%20iconic%20engineering%20masterpiece%20photography%2C%20dramatic%20perspective%20showing%20full%20bridge%20span%2C%20professional%20architectural%20photography%20with%20perfect%20lighting&width=800&height=600&seq=harbour-bridge-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20climb%20experience%20with%20adventurous%20tourists%20wearing%20safety%20harnesses%20and%20hard%20hats%2C%20professional%20guides%20leading%20climb%2C%20spectacular%20harbor%20city%20view%20from%20bridge%20top%2C%20thrilling%20adventure%20activity%20photography&width=800&height=600&seq=harbour-bridge-climb&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20at%20golden%20sunset%20with%20Sydney%20Opera%20House%20prominently%20featured%20in%20foreground%2C%20warm%20golden%20light%20reflecting%20on%20calm%20harbor%20water%2C%20dramatic%20colorful%20sky%2C%20perfect%20travel%20photography%20composition&width=800&height=600&seq=harbour-bridge-sunset&orientation=landscape'
      ],
      description: '悉尼海港大橋是世界上最大的鋼拱橋之一，具有標誌性的建築設計和壯麗的海港景觀。這座橋樑於1932年建成，被當地人親切地稱為"衣架橋"。橋長1149公尺，是連接悉尼南北兩岸的重要交通樞紐，也是世界著名的旅遊景點。',
      highlights: [
        '世界最大鋼拱橋之一',
        '標誌性的建築設計',
        '壯麗的海港景觀',
        '攀爬體驗和導覽服務'
      ],
      tips: [
        '建議提前訂票參加攀爬體驗',
        '黃昏時分拍照效果最佳',
        '可在附近的皇家植物園欣賞全景',
        '攀爬體驗需要3.5小時'
      ],
      transport: [
        { type: '步行', icon: 'ri-walk-line', description: '從環形碼頭步行10分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭乘巴士至海港大橋站' },
        { type: '火車', icon: 'ri-train-line', description: '搭乘火車至米爾森角站' }
      ],
      tags: ['攀登體驗', '觀景', '地標', '拍照'],
      hours: {
        '週一': '8:00 - 18:00',
        '週二': '8:00 - 18:00',
        '週三': '8:00 - 18:00',
        '週四': '8:00 - 18:00',
        '週五': '8:00 - 18:00',
        '週六': '8:00 - 18:00',
        '週日': '8:00 - 18:00'
      },
      ticketInfo: {
        '攀爬體驗': '$174-$388',
        '觀景台': '$19',
        '導覽': '$35'
      }
    },
    'royal-botanic-gardens': {
      id: 'royal-botanic-gardens',
      name: '皇家植物園',
      category: '公園',
      rating: 4.7,
      reviews: 8934,
      location: '環形碼頭',
      address: 'Mrs Macquaries Road, Sydney NSW 2000',
      coordinates: { lat: -33.8641, lng: 151.2165 },
      price: '免費',
      openHours: '每日 7:00-日落',
      ticketPrice: '免費入園 | 導覽 $25',
      phone: '+61 2 9231 8111',
      website: 'https://www.rbgsyd.nsw.gov.au',
      image: 'https://readdy.ai/api/search-image?query=Royal%20Botanic%20Gardens%20Sydney%20lush%20green%20tropical%20paradise%20with%20diverse%20exotic%20plants%20palm%20trees%20and%20native%20flora%2C%20Mrs%20Macquaries%20Chair%20viewpoint%20with%20stunning%20Opera%20House%20harbor%20view%2C%20peaceful%20garden%20pathways%2C%20scenic%20walking%20trails%20through%20botanical%20collections&width=800&height=600&seq=botanic-gardens-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Royal%20Botanic%20Gardens%20Sydney%20lush%20green%20tropical%20paradise%20with%20diverse%20exotic%20plants%20palm%20trees%20and%20native%20flora%2C%20Mrs%20Macquaries%20Chair%20viewpoint%20with%20stunning%20Opera%20House%20harbor%20view%2C%20peaceful%20garden%20pathways%2C%20scenic%20walking%20trails%20through%20botanical%20collections&width=800&height=600&seq=botanic-gardens-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Royal%20Botanic%20Gardens%20Sydney%20tropical%20greenhouse%20conservatory%20with%20exotic%20rare%20plants%2C%20lush%20indoor%20botanical%20collection%20display%2C%20humid%20tropical%20environment%2C%20educational%20nature%20photography&width=800&height=600&seq=botanic-gardens-greenhouse&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Royal%20Botanic%20Gardens%20Sydney%20native%20Australian%20plant%20collection%20with%20unique%20indigenous%20flora%2C%20eucalyptus%20trees%2C%20banksia%20flowers%2C%20botanical%20education%20display%2C%20garden%20photography&width=800&height=600&seq=botanic-gardens-native&orientation=landscape'
      ],
      description: '悉尼皇家植物園是澳洲最古老的植物園，擁有超過7500種植物。園內有著名的麥覺理夫人座椅，是拍攝悉尼歌劇院和海港大橋的最佳位置。這座30公頃的植物園建於1816年，是世界級的植物研究和保育中心。',
      highlights: [
        '澳洲最古老的植物園',
        '麥覺理夫人座椅觀景點',
        '7500多種植物收藏',
        '絕佳的海港景觀'
      ],
      tips: [
        '麥覺理夫人座椅是最佳拍照點',
        '早晨和黄昏光線最美',
        '免費WiFi和導覽App',
        '適合野餐和慢跑'
      ],
      transport: [
        { type: '步行', icon: 'ri-walk-line', description: '從環形碼頭步行10分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭乘巴士至植物園站' },
        { type: '步行', icon: 'ri-walk-line', description: '從歌劇院步行5分鐘' }
      ],
      tags: ['免費', '散步', '拍照', '野餐'],
      hours: {
        '週一': '7:00 - 日落',
        '週二': '7:00 - 日落',
        '週三': '7:00 - 日落',
        '週四': '7:00 - 日落',
        '週五': '7:00 - 日落',
        '週六': '7:00 - 日落',
        '週日': '7:00 - 日落'
      },
      ticketInfo: {
        '入園': '免費',
        '導覽': '$25',
        '特展': '$15'
      }
    },
    'taronga-zoo': {
      id: 'taronga-zoo',
      name: '塔龍加動物園',
      category: '觀景',
      rating: 4.6,
      reviews: 7823,
      location: '莫斯曼',
      address: 'Bradleys Head Road, Mosman NSW 2088',
      coordinates: { lat: -33.8437, lng: 151.2411 },
      price: '$49',
      openHours: '每日 9:30-17:00',
      ticketPrice: '成人 $49 | 兒童 $29 | 家庭票 $139',
      phone: '+61 2 9969 2777',
      website: 'https://taronga.org.au',
      image: 'https://readdy.ai/api/search-image?query=Taronga%20Zoo%20Sydney%20spectacular%20harbor%20bridge%20backdrop%20with%20giraffes%20in%20foreground%2C%20iconic%20zoo%20photography%20combining%20wildlife%20with%20stunning%20city%20views%2C%20professional%20animal%20photography%2C%20scenic%20location%20with%20harbor%20panorama&width=800&height=600&seq=taronga-zoo-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Taronga%20Zoo%20Sydney%20spectacular%20harbor%20bridge%20backdrop%20with%20giraffes%20in%20foreground%2C%20iconic%20zoo%20photography%20combining%20wildlife%20with%20stunning%20city%20views%2C%20professional%20animal%20photography%2C%20scenic%20location%20with%20harbor%20panorama&width=800&height=600&seq=taronga-zoo-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Taronga%20Zoo%20Sydney%20elephant%20enclosure%20with%20majestic%20large%20African%20elephants%20in%20spacious%20natural%20habitat%2C%20family-friendly%20wildlife%20sanctuary%2C%20professional%20animal%20photography&width=800&height=600&seq=taronga-zoo-elephants&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Taronga%20Zoo%20Sydney%20Sky%20Safari%20cable%20car%20system%20with%20breathtaking%20harbor%20views%2C%20aerial%20zoo%20transport%2C%20scenic%20gondola%20ride%20photography%20with%20city%20skyline&width=800&height=600&seq=taronga-zoo-cable-car&orientation=landscape'
      ],
      description: '塔龍加動物園是悉尼最受歡迎的景點之一，擁有4000多隻動物和350個物種。動物園位於海港北岸，提供絕佳的海港景觀。這座世界級動物園致力於野生動物保育和教育，是澳洲本土動物的重要保護基地。',
      highlights: [
        '4000多隻動物350個物種',
        '絕佳的海港景觀',
        'Sky Safari空中纜車',
        '世界級動物保育中心'
      ],
      tips: [
        '建議預留整天時間',
        '搭渡輪前往最方便',
        '動物表演時間別錯過',
        'Sky Safari纜車免費搭乘'
      ],
      transport: [
        { type: '渡輪', icon: 'ri-ship-line', description: '從環形碼頭搭渡輪12分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭乘巴士至塔龍加動物園碼頭' },
        { type: '開車', icon: 'ri-car-line', description: '開車需付停車費' }
      ],
      tags: ['家庭', '動物', '渡輪', '纜車'],
      hours: {
        '週一': '9:30 - 17:00',
        '週二': '9:30 - 17:00',
        '週三': '9:30 - 17:00',
        '週四': '9:30 - 17:00',
        '週五': '9:30 - 17:00',
        '週六': '9:30 - 17:00',
        '週日': '9:30 - 17:00'
      },
      ticketInfo: {
        '成人': '$49',
        '兒童': '$29',
        '家庭票': '$139',
        '學生': '$39'
      }
    },
    'bondi-beach': {
      id: 'bondi-beach',
      name: '邦迪海灘',
      category: '海灘',
      rating: 4.5,
      reviews: 9876,
      location: '邦迪',
      address: 'Bondi Beach NSW 2026',
      coordinates: { lat: -33.8903, lng: 151.2762 },
      price: '免費',
      openHours: '24小時開放',
      ticketPrice: '免費 | 衝浪課程 $65起',
      phone: '+61 2 9365 4100',
      website: 'https://www.waverley.nsw.gov.au',
      image: 'https://readdy.ai/api/search-image?query=Bondi%20Beach%20world%20famous%20golden%20sand%20beach%20with%20turquoise%20crystal%20clear%20ocean%20waters%2C%20perfect%20beach%20paradise%20photography%2C%20sunny%20day%20atmosphere%20with%20beachgoers%20enjoying%20surfing%20and%20swimming%2C%20iconic%20Australian%20coastal%20lifestyle%2C%20promenade%20with%20Norfolk%20pine%20trees&width=800&height=600&seq=bondi-beach-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Bondi%20Beach%20world%20famous%20golden%20sand%20beach%20with%20turquoise%20crystal%20clear%20ocean%20waters%2C%20perfect%20beach%20paradise%20photography%2C%20sunny%20day%20atmosphere%20with%20beachgoers%20enjoying%20surfing%20and%20swimming%2C%20iconic%20Australian%20coastal%20lifestyle%2C%20promenade%20with%20Norfolk%20pine%20trees&width=800&height=600&seq=bondi-beach-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Bondi%20Beach%20professional%20surfers%20riding%20perfect%20waves%2C%20dynamic%20beach%20activity%20photography%2C%20adventure%20water%20sports%2C%20surfing%20culture%20lifestyle%20photography&width=800&height=600&seq=bondi-beach-surfing&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Bondi%20Beach%20spectacular%20sunset%20with%20warm%20golden%20light%20reflecting%20on%20calm%20ocean%20water%2C%20dramatic%20pink%20and%20orange%20sky%20colors%2C%20romantic%20evening%20beach%20photography&width=800&height=600&seq=bondi-beach-sunset&orientation=landscape'
      ],
      description: '邦迪海灘是悉尼最著名的海灘之一，擁有1公里長的金色沙灘和絕佳的衝浪條件。這裡不僅是衝浪愛好者的天堂，也是享受陽光沙灘的絕佳去處。海灘周圍有許多咖啡廳、餐廳和商店，是體驗澳洲海灘文化的最佳地點。',
      highlights: [
        '悉尼最著名的海灘',
        '金色沙灘和清澈的海水',
        '世界級衝浪勝地',
        '海岸步道景觀絕佳'
      ],
      tips: [
        '建議提早到達佔好位置',
        '注意海浪和安全旗幟',
        '防曬措施不可少',
        '海岸步道適合散步拍照'
      ],
      transport: [
        { type: '巴士', icon: 'ri-bus-line', description: '從市中心搭巴士約40分鐘' },
        { type: '火車+巴士', icon: 'ri-train-line', description: '搭火車至邦迪交匯站轉巴士' },
        { type: '開車', icon: 'ri-car-line', description: '開車約30分鐘（需付停車費）' }
      ],
      tags: ['衝浪', '游泳', '咖啡廳', '海岸步道'],
      hours: {
        '週一': '24小時開放',
        '週二': '24小時開放',
        '週三': '24小時開放',
        '週四': '24小時開放',
        '週五': '24小時開放',
        '週六': '24小時開放',
        '週日': '24小時開放'
      },
      ticketInfo: {
        '海灘': '免費',
        '衝浪課程': '$65起',
        '停車費': '$5/小時'
      }
    },
    'darling-harbour': {
      id: 'darling-harbour',
      name: '情人港',
      category: '地標',
      rating: 4.4,
      reviews: 6754,
      location: '情人港',
      address: 'Darling Harbour, Sydney NSW 2000',
      coordinates: { lat: -33.8693, lng: 151.2023 },
      price: '免費',
      openHours: '24小時開放',
      ticketPrice: '免費進入 | 各景點門票另計',
      phone: '+61 2 9240 8500',
      website: 'https://www.darlingharbour.com',
      image: 'https://readdy.ai/api/search-image?query=Darling%20Harbour%20Sydney%20spectacular%20waterfront%20entertainment%20precinct%20with%20modern%20glass%20buildings%20reflecting%20in%20harbor%20water%2C%20restaurants%20cafes%20shops%20family%20attractions%2C%20beautiful%20harbor%20waters%20with%20city%20skyline%20views%2C%20vibrant%20tourist%20destination%20photography&width=800&height=600&seq=darling-harbour-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Darling%20Harbour%20Sydney%20spectacular%20waterfront%20entertainment%20precinct%20with%20modern%20glass%20buildings%20reflecting%20in%20harbor%20water%2C%20restaurants%20cafes%20shops%20family%20attractions%2C%20beautiful%20harbor%20waters%20with%20city%20skyline%20views%2C%20vibrant%20tourist%20destination%20photography&width=800&height=600&seq=darling-harbour-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Darling%20Harbour%20Sydney%20waterfront%20dining%20scene%20with%20elegant%20restaurants%20cafes%20bars%2C%20outdoor%20dining%20atmosphere%2C%20harbor%20view%20dining%2C%20culinary%20travel%20photography&width=800&height=600&seq=darling-harbour-dining&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Darling%20Harbour%20Sydney%20magical%20evening%20scene%20at%20sunset%20with%20warm%20golden%20light%20reflecting%20on%20calm%20harbor%20water%2C%20dramatic%20colorful%20sky%2C%20romantic%20waterfront%20photography&width=800&height=600&seq=darling-harbour-sunset&orientation=landscape'
      ],
      description: '情人港是悉尼市中心最大的娛樂休閒區，擁有美麗的海港景觀和豐富的景點。這裡聚集了水族館、動物園、博物館、購物中心和眾多餐廳。港區經過精心規劃，是遊客和當地人都喜愛的休閒娛樂目的地。',
      highlights: [
        '悉尼最大娛樂休閒區',
        '集合多個熱門景點',
        '美麗的海港景觀',
        '豐富的餐飲購物選擇'
      ],
      tips: [
        '建議安排整天時間遊覽',
        '週末會有免費表演活動',
        '晚上夜景特別漂亮',
        '可搭渡輪遊覽海港'
      ],
      transport: [
        { type: '輕軌', icon: 'ri-train-line', description: '搭輕軌至會展中心站' },
        { type: '渡輪', icon: 'ri-ship-line', description: '搭渡輪至情人港碼頭' },
        { type: '步行', icon: 'ri-walk-line', description: '從市中心步行15分鐘' }
      ],
      tags: ['購物', '餐飲', '水族館', '表演'],
      hours: {
        '週一': '24小時開放',
        '週二': '24小時開放',
        '週三': '24小時開放',
        '週四': '24小時開放',
        '週五': '24小時開放',
        '週六': '24小時開放',
        '週日': '24小時開放'
      },
      ticketInfo: {
        '港區': '免費',
        '水族館': '$42',
        '動物園': '$39'
      }
    },
    'sydney-tower-eye': {
      id: 'sydney-tower-eye',
      name: '悉尼塔觀景台',
      category: '觀景',
      rating: 4.3,
      reviews: 5432,
      location: '市中心',
      address: '100 Market Street, Sydney NSW 2000',
      coordinates: { lat: -33.8708, lng: 151.2067 },
      price: '$29',
      openHours: '每日 9:00-21:00',
      ticketPrice: '成人 $29 | 兒童 $19 | 家庭票 $75',
      phone: '+61 2 9333 9222',
      website: 'https://www.sydneytowereye.com.au',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Tower%20Eye%20iconic%20tall%20observation%20deck%20golden%20turret%20top%20against%20clear%20blue%20sky%2C%20architectural%20photography%20masterpiece%2C%20CBD%20skyline%20vista%2C%20spectacular%20urban%20landscape%20tower%2C%20tourist%20attraction%20with%20magnificent%20city%20views&width=800&height=600&seq=sydney-tower-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Sydney%20Tower%20Eye%20iconic%20tall%20observation%20deck%20golden%20turret%20top%20against%20clear%20blue%20sky%2C%20architectural%20photography%20masterpiece%2C%20CBD%20skyline%20vista%2C%20spectacular%20urban%20landscape%20tower%2C%20tourist%20attraction%20with%20magnificent%20city%20views&width=800&height=600&seq=sydney-tower-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Tower%20Eye%20observation%20deck%20panoramic%20360%20degree%20spectacular%20city%20harbor%20views%2C%20breathtaking%20vista%20photography%2C%20urban%20landscape%20from%20above%2C%20travel%20photography&width=800&height=600&seq=sydney-tower-view&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sydney%20Tower%20Eye%20at%20dramatic%20sunset%20with%20warm%20golden%20light%20illuminating%20tower%20structure%2C%20Sydney%20Opera%20House%20and%20Harbour%20Bridge%20visible%20in%20distance%2C%20magical%20evening%20photography&width=800&height=600&seq=sydney-tower-sunset&orientation=landscape'
      ],
      description: '悉尼塔觀景台是南半球最高的觀景塔，提供360度的城市和海港景觀。塔高309公尺，觀景台位於250公尺高度，可以俯瞰整個悉尼市區、海港大橋和歌劇院。這裡是欣賞悉尼全貌的最佳位置。',
      highlights: [
        '南半球最高的觀景塔',
        '360度的城市和海港景觀',
        '高速電梯和觀景層',
        '互動式城市導覽系統'
      ],
      tips: [
        '建議提前訂票參加觀景體驗',
        '黃昏時分拍照效果最佳',
        '晴天能見度最好',
        '有4D電影體驗'
      ],
      transport: [
        { type: '步行', icon: 'ri-walk-line', description: '從市中心步行10分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭乘巴士至悉尼塔站' },
        { type: '火車', icon: 'ri-train-line', description: '搭乘火車至市政廰站' }
      ],
      tags: ['360度景觀', '高空', '拍照', '4D體驗'],
      hours: {
        '週一': '9:00 - 21:00',
        '週二': '9:00 - 21:00',
        '週三': '9:00 - 21:00',
        '週四': '9:00 - 21:00',
        '週五': '9:00 - 21:00',
        '週六': '9:00 - 21:00',
        '週日': '9:00 - 21:00'
      },
      ticketInfo: {
        '成人': '$29',
        '兒童': '$19',
        '家庭票': '$75',
        '4D體驗': '+$8'
      }
    },
    'the-rocks': {
      id: 'the-rocks',
      name: '岩石區',
      category: '地標',
      rating: 4.6,
      reviews: 8123,
      location: '岩石區',
      address: 'The Rocks, Sydney NSW 2000',
      coordinates: { lat: -33.8587, lng: 151.2092 },
      price: '免費',
      openHours: '24小時開放',
      ticketPrice: '免費參觀 | 導覽 $30',
      phone: '+61 2 9240 8788',
      website: 'https://www.therocks.com',
      image: 'https://readdy.ai/api/search-image?query=The%20Rocks%20Sydney%20historic%20cobblestone%20streets%20with%20heritage%20sandstone%20colonial%20buildings%2C%20weekend%20markets%20bustling%20with%20tourists%2C%20art%20galleries%20pubs%20restaurants%2C%20atmospheric%20tourist%20precinct%2C%20Australian%20colonial%20architecture%20photography&width=800&height=600&seq=the-rocks-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=The%20Rocks%20Sydney%20historic%20cobblestone%20streets%20with%20heritage%20sandstone%20colonial%20buildings%2C%20weekend%20markets%20bustling%20with%20tourists%2C%20art%20galleries%20pubs%20restaurants%2C%20atmospheric%20tourist%20precinct%2C%20Australian%20colonial%20architecture%20photography&width=800&height=600&seq=the-rocks-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=The%20Rocks%20Sydney%20weekend%20markets%20with%20local%20artisan%20stalls%2C%20handmade%20crafts%20souvenirs%2C%20vibrant%20market%20atmosphere%2C%20shopping%20tourism%20photography&width=800&height=600&seq=the-rocks-markets&orientation=landscape',
        'https://readdy.ai/api/search-image?query=The%20Rocks%20Sydney%20historic%20pub%20with%20traditional%20Australian%20colonial%20architecture%2C%20heritage%20sandstone%20building%2C%20cultural%20tourism%20photography&width=800&height=600&seq=the-rocks-pub&orientation=landscape'
      ],
      description: '岩石區是悉尼最古老的街區，保留了殖民時期的建築風貌。這裡有鵝卵石街道、歷史建築、週末市集、藝術畫廊和傳統酒吧。岩石區是澳洲歐洲殖民歷史的重要見證，也是體驗悉尼文化的絕佳地點。',
      highlights: [
        '悉尼最古老的街區',
        '殖民時期建築風貌',
        '週末市集和藝術畫廊',
        '傳統酒吧和餐廳'
      ],
      tips: [
        '週末市集最熱鬧',
        '適合散步和拍照',
        '有許多歷史導覽',
        '晚上酒吧文化體驗'
      ],
      transport: [
        { type: '步行', icon: 'ri-walk-line', description: '從環形碼頭步行5分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭乘巴士至岩石區站' },
        { type: '火車', icon: 'ri-train-line', description: '搭乘火車至環形碼頭站' }
      ],
      tags: ['歷史', '市集', '餐廳', '酒吧'],
      hours: {
        '週一': '24小時開放',
        '週二': '24小時開放',
        '週三': '24小時開放',
        '週四': '24小時開放',
        '週五': '24小時開放',
        '週六': '24小時開放',
        '週日': '24小時開放'
      },
      ticketInfo: {
        '街區': '免費',
        '導覽': '$30',
        '博物館': '$15'
      }
    },
    'manly-beach': {
      id: 'manly-beach',
      name: '曼利海灘',
      category: '海灘',
      rating: 4.5,
      reviews: 7234,
      location: '曼利',
      address: 'The Corso, Manly NSW 2095',
      coordinates: { lat: -33.7969, lng: 151.2840 },
      price: '免費',
      openHours: '24小時開放',
      ticketPrice: '免費 | 渡輪往返 $16',
      phone: '+61 2 9976 1430',
      website: 'https://www.manlyaustralia.com.au',
      image: 'https://readdy.ai/api/search-image?query=Manly%20Beach%20pristine%20golden%20sand%20coastline%20with%20crystal%20clear%20turquoise%20blue%20waters%2C%20Sydney%20northern%20beaches%20paradise%20photography%2C%20Norfolk%20pine%20trees%20lining%20beautiful%20shore%2C%20ferry%20wharf%20and%20beachfront%20promenade%2C%20family-friendly%20beach%20atmosphere&width=800&height=600&seq=manly-beach-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Manly%20Beach%20pristine%20golden%20sand%20coastline%20with%20crystal%20clear%20turquoise%20blue%20waters%2C%20Sydney%20northern%20beaches%20paradise%20photography%2C%20Norfolk%20pine%20trees%20lining%20beautiful%20shore%2C%20ferry%20wharf%20and%20beachfront%20promenade%2C%20family-friendly%20beach%20atmosphere&width=800&height=600&seq=manly-beach-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Manly%20Beach%20ferry%20arriving%20at%20scenic%20wharf%20with%20stunning%20harbor%20views%20during%20journey%2C%20waterfront%20ferry%20transport%2C%20scenic%20ferry%20ride%20photography&width=800&height=600&seq=manly-beach-ferry&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Manly%20Beach%20The%20Corso%20pedestrian%20shopping%20mall%20with%20boutique%20shops%20cafes%20restaurants%2C%20beachside%20shopping%20street%2C%20coastal%20lifestyle%20photography&width=800&height=600&seq=manly-beach-corso&orientation=landscape'
      ],
      description: '曼利海灘是悉尼北海岸最受歡迎的海灘之一，以其清澈的海水和悠閒的氛圍聞名。從環形碼頭搭乘渡輪前往是一種享受，沿途可欣賞美麗的港灣景色。海灘周圍的The Corso購物街有許多商店、餐廳和咖啡廳。',
      highlights: [
        '悉尼北海岸人氣海灘',
        '清澈海水和金沙灘',
        '渡輪之旅風景優美',
        'The Corso購物街'
      ],
      tips: [
        '搭渡輪前往是最佳方式',
        'The Corso有很多餐廳和商店',
        '適合學習衝浪的地方',
        '週末人潮較多'
      ],
      transport: [
        { type: '渡輪', icon: 'ri-ship-line', description: '從環形碼頭搭渡輪30分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭巴士從市中心約1小時' },
        { type: '開車', icon: 'ri-car-line', description: '開車約45分鐘' }
      ],
      tags: ['家庭友善', '渡輪', '衝浪', '購物'],
      hours: {
        '週一': '24小時開放',
        '週二': '24小時開放',
        '週三': '24小時開放',
        '週四': '24小時開放',
        '週五': '24小時開放',
        '週六': '24小時開放',
        '週日': '24小時開放'
      },
      ticketInfo: {
        '海灘': '免費',
        '渡輪往返': '$16',
        '衝浪課程': '$70起'
      }
    },
    'luna-park': {
      id: 'luna-park',
      name: '月神公園',
      category: '觀景',
      rating: 4.2,
      reviews: 4567,
      location: '米爾森斯角',
      address: '1 Olympic Dr, Milsons Point NSW 2061',
      coordinates: { lat: -33.8471, lng: 151.2108 },
      price: '$55',
      openHours: '週五-日 11:00-22:00',
      ticketPrice: '無限暢玩 $55 | 單項 $8-15',
      phone: '+61 2 9922 6644',
      website: 'https://www.lunaparksydney.com',
      image: 'https://readdy.ai/api/search-image?query=Luna%20Park%20Sydney%20vintage%20amusement%20park%20with%20iconic%20giant%20smiling%20face%20entrance%2C%20colorful%20carnival%20rides%20and%20attractions%2C%20harbor%20bridge%20spectacular%20views%2C%20nostalgic%20funfair%20atmosphere%2C%20heritage%20amusement%20park%20photography&width=800&height=600&seq=luna-park-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Luna%20Park%20Sydney%20vintage%20amusement%20park%20with%20iconic%20giant%20smiling%20face%20entrance%2C%20colorful%20carnival%20rides%20and%20attractions%2C%20harbor%20bridge%20spectacular%20views%2C%20nostalgic%20funfair%20atmosphere%2C%20heritage%20amusement%20park%20photography&width=800&height=600&seq=luna-park-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Luna%20Park%20Sydney%20ferris%20wheel%20ride%20with%20stunning%20harbor%20bridge%20and%20opera%20house%20views%2C%20amusement%20park%20photography%2C%20scenic%20rides%20with%20city%20backdrop&width=800&height=600&seq=luna-park-ferris-wheel&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Luna%20Park%20Sydney%20at%20magical%20night%20time%20with%20colorful%20carnival%20lights%20illuminated%2C%20vintage%20neon%20signs%20glowing%2C%20festive%20nighttime%20amusement%20park%20atmosphere&width=800&height=600&seq=luna-park-night&orientation=landscape'
      ],
      description: '月神公園是歷史悠久的遊樂園，標誌性的笑臉入口和復古遊樂設施讓人印象深刻。公園位於悉尼港北岸，從遊樂設施上可以欣賞到壯麗的海港大橋和歌劇院景色。這座建於1935年的遊樂園充滿懷舊魅力。',
      highlights: [
        '歷史悠久的遊樂園',
        '標誌性的笑臉入口',
        '復古遊樂設施',
        '絕佳的海港景觀'
      ],
      tips: [
        '週末和假日才開放',
        '摩天輪景色最佳',
        '適合懷舊體驗',
        '拍照效果很棒'
      ],
      transport: [
        { type: '火車', icon: 'ri-train-line', description: '搭火車至米爾森角站' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭巴士至月神公園站' },
        { type: '步行', icon: 'ri-walk-line', description: '從海港大橋步行10分鐘' }
      ],
      tags: ['遊樂園', '復古', '家庭', '拍照'],
      hours: {
        '週一': '關閉',
        '週二': '關閉',
        '週三': '關閉',
        '週四': '關閉',
        '週五': '11:00 - 22:00',
        '週六': '11:00 - 22:00',
        '週日': '11:00 - 22:00'
      },
      ticketInfo: {
        '無限暢玩': '$55',
        '單項遊戲': '$8-15',
        '家庭套票': '$180'
      }
    },
    'australian-museum': {
      id: 'australian-museum',
      name: '澳洲博物館',
      category: '博物館',
      rating: 4.4,
      reviews: 3456,
      location: '海德公園',
      address: '1 William St, Sydney NSW 2010',
      coordinates: { lat: -33.8741, lng: 151.2136 },
      price: '$15',
      openHours: '每日 9:30-17:00',
      ticketPrice: '成人 $15 | 學生 $8 | 兒童免費',
      phone: '+61 2 9320 6000',
      website: 'https://australian.museum',
      image: 'https://readdy.ai/api/search-image?query=Australian%20Museum%20Sydney%20natural%20history%20museum%20with%20impressive%20dinosaur%20fossil%20exhibits%2C%20educational%20displays%2C%20indigenous%20Aboriginal%20artifacts%20and%20cultural%20collections%2C%20heritage%20museum%20building%20facade%2C%20family-friendly%20educational%20attraction&width=800&height=600&seq=australian-museum-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Australian%20Museum%20Sydney%20natural%20history%20museum%20with%20impressive%20dinosaur%20fossil%20exhibits%2C%20educational%20displays%2C%20indigenous%20Aboriginal%20artifacts%20and%20cultural%20collections%2C%20heritage%20museum%20building%20facade%2C%20family-friendly%20educational%20attraction&width=800&height=600&seq=australian-museum-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Australian%20Museum%20Sydney%20dinosaur%20exhibition%20with%20massive%20T-Rex%20fossil%20skeleton%2C%20prehistoric%20exhibits%2C%20educational%20natural%20history%20displays%2C%20paleontology%20photography&width=800&height=600&seq=australian-museum-dinosaur&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Australian%20Museum%20Sydney%20Aboriginal%20indigenous%20culture%20display%20with%20traditional%20artifacts%2C%20cultural%20heritage%20exhibitions%2C%20educational%20cultural%20photography&width=800&height=600&seq=australian-museum-aboriginal&orientation=landscape'
      ],
      description: '澳洲博物館是澳洲最古老的博物館，展示豐富的自然歷史和文化收藏。博物館以其恐龍化石展覽、礦物收藏和原住民文化展示而聞名。這座成立於1827年的博物館是了解澳洲自然和文化歷史的重要場所。',
      highlights: [
        '澳洲最古老的博物館',
        '豐富的恐龍化石展覽',
        '原住民文化收藏',
        '互動式教育展示'
      ],
      tips: [
        '建議預留2-3小時參觀',
        '恐龍展區最受歡迎',
        '有中文語音導覽',
        '兒童活動區很豐富'
      ],
      transport: [
        { type: '火車', icon: 'ri-train-line', description: '搭火車至博物館站' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭巴士至澳洲博物館站' },
        { type: '步行', icon: 'ri-walk-line', description: '從市中心步行15分鐘' }
      ],
      tags: ['教育', '恐龍', '原住民文化', '家庭'],
      hours: {
        '週一': '9:30 - 17:00',
        '週二': '9:30 - 17:00',
        '週三': '9:30 - 17:00',
        '週四': '9:30 - 17:00',
        '週五': '9:30 - 17:00',
        '週六': '9:30 - 17:00',
        '週日': '9:30 - 17:00'
      },
      ticketInfo: {
        '成人': '$15',
        '學生': '$8',
        '兒童': '免費',
        '家庭票': '$35'
      }
    },
    'art-gallery-nsw': {
      id: 'art-gallery-nsw',
      name: '新南威爾士美術館',
      category: '博物館',
      rating: 4.6,
      reviews: 2789,
      location: '域多利街',
      address: 'Art Gallery Rd, Sydney NSW 2000',
      coordinates: { lat: -33.8688, lng: 151.2173 },
      price: '免費',
      openHours: '每日 10:00-17:00',
      ticketPrice: '常設展免費 | 特展 $20-35',
      phone: '+61 2 9225 1700',
      website: 'https://www.artgallery.nsw.gov.au',
      image: 'https://readdy.ai/api/search-image?query=Art%20Gallery%20of%20New%20South%20Wales%20Sydney%20neoclassical%20heritage%20building%20with%20impressive%20columns%2C%20art%20exhibitions%20inside%2C%20contemporary%20galleries%20with%20sculpture%20displays%2C%20cultural%20institution%20photography%2C%20harbor%20district%20location%20with%20gardens&width=800&height=600&seq=art-gallery-nsw-main&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Art%20Gallery%20of%20New%20South%20Wales%20Sydney%20neoclassical%20heritage%20building%20with%20impressive%20columns%2C%20art%20exhibitions%20inside%2C%20contemporary%20galleries%20with%20sculpture%20displays%2C%20cultural%20institution%20photography%2C%20harbor%20district%20location%20with%20gardens&width=800&height=600&seq=art-gallery-nsw-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Art%20Gallery%20of%20New%20South%20Wales%20Sydney%20interior%20gallery%20spaces%20with%20famous%20paintings%20and%20contemporary%20art%20displays%2C%20elegant%20museum%20atmosphere%2C%20cultural%20art%20photography&width=800&height=600&seq=art-gallery-nsw-interior&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Art%20Gallery%20of%20New%20South%20Wales%20Sydney%20sculpture%20garden%20with%20outdoor%20art%20installations%2C%20beautiful%20landscaped%20grounds%2C%20cultural%20art%20photography&width=800&height=600&seq=art-gallery-nsw-garden&orientation=landscape'
      ],
      description: '新南威爾士美術館是澳洲重要的藝術機構，收藏豐富的藝術作品，從古典到當代應有盡有。美術館建築本身就是一件藝術品，新古典主義風格的建築莊嚴典雅。館內還有專門的亞洲藝術和澳洲原住民藝術收藏。',
      highlights: [
        '豐富的藝術收藏',
        '新古典主義建築',
        '亞洲藝術專區',
        '澳洲原住民藝術'
      ],
      tips: [
        '常設展覽免費參觀',
        '特展需要門票',
        '有免費導覽服務',
        '館內咖啡廳景色很好'
      ],
      transport: [
        { type: '步行', icon: 'ri-walk-line', description: '從環形碼頭步行15分鐘' },
        { type: '巴士', icon: 'ri-bus-line', description: '搭巴士至美術館站' },
        { type: '火車', icon: 'ri-train-line', description: '搭火車至聖詹姆士站' }
      ],
      tags: ['藝術', '免費入場', '文化', '建築'],
      hours: {
        '週一': '10:00 - 17:00',
        '週二': '10:00 - 17:00',
        '週三': '10:00 - 21:00',
        '週四': '10:00 - 17:00',
        '週五': '10:00 - 17:00',
        '週六': '10:00 - 17:00',
        '週日': '10:00 - 17:00'
      },
      ticketInfo: {
        '常設展': '免費',
        '特展': '$20-35',
        '導覽': '$12'
      }
    }
  };

  const attraction = attractions[attractionId as keyof typeof attractions];

  if (!attraction) {
    return <div>景點未找到</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AttractionHeader data={attraction} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              className={`px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              概覽
            </button>
            <button
              className={`px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'photos'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('photos')}
            >
              照片
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && <AttractionInfo data={attraction} />}
            {activeTab === 'photos' && <AttractionPhotos data={attraction} />}
          </div>
        </div>
      </div>
    </div>
  );
}
