'use client';

import Link from 'next/link';

export default function QuickLinks() {
  const quickLinks = [
    {
      title: '熱門景點',
      description: '探索悉尼最著名的地標和景點',
      href: '/attractions',
      icon: 'ri-map-pin-line',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20iconic%20white%20shell%20architecture%20with%20harbor%20bridge%20visible%20in%20background%2C%20stunning%20cityscape%20photography%2C%20professional%20travel%20destination%20imagery%2C%20golden%20hour%20lighting%20creating%20magical%20atmosphere&width=400&height=300&seq=attractions-card-unique&orientation=landscape'
    },
    {
      title: '美食推薦',
      description: '品嚐當地特色美食和國際料理',
      href: '/food',
      icon: 'ri-restaurant-line',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20fine%20dining%20restaurant%20elegant%20gourmet%20dishes%20beautifully%20plated%2C%20sophisticated%20culinary%20experience%2C%20professional%20food%20photography%2C%20upscale%20dining%20atmosphere%20with%20harbor%20views&width=400&height=300&seq=food-card-unique&orientation=landscape'
    },
    {
      title: '購物天堂',
      description: '從精品店到市集，購物樂趣無窮',
      href: '/shopping',
      icon: 'ri-shopping-bag-line',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20premium%20shopping%20district%20with%20luxury%20boutiques%20designer%20stores%2C%20modern%20retail%20architecture%2C%20stylish%20shopping%20mall%20interior%2C%20fashionable%20shopping%20experience%20photography&width=400&height=300&seq=shopping-card-unique&orientation=landscape'
    },
    {
      title: '旅遊攻略',
      description: '實用的旅遊建議和深度體驗',
      href: '/guide',
      icon: 'ri-book-open-line',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      image: 'https://readdy.ai/api/search-image?query=Sydney%20travel%20guide%20book%20with%20detailed%20maps%20and%20tourist%20information%2C%20planning%20vacation%20itinerary%2C%20travel%20planning%20photography%2C%20adventure%20exploration%20preparation&width=400&height=300&seq=guide-card-unique&orientation=landscape'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">開始您的悉尼之旅</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            選擇您感興趣的類別，探索悉尼的精彩世界
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href} className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <img
                    src={link.image}
                    alt={link.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${link.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <i className={`${link.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center mt-4 text-red-600 text-sm font-medium">
                    探索更多
                    <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}