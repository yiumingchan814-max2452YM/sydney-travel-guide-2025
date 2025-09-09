'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* 背景圖片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20and%20Harbour%20Bridge%20stunning%20panoramic%20cityscape%20at%20golden%20hour%2C%20magnificent%20harbor%20views%20with%20crystal%20clear%20blue%20water%2C%20iconic%20Australian%20landmarks%20photography%2C%20dramatic%20lighting%20creating%20warm%20atmosphere%2C%20professional%20travel%20photography%20composition%20showcasing%20Sydney%20beauty&width=1920&height=1080&seq=hero-background-unique&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* 內容 */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Pacifico']">
          悉尼旅遊指南
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          探索澳洲最美麗的城市，發現隱藏的寶石
        </p>
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          從標誌性的歌劇院到絕美的海灘，從美味的餐廳到精彩的購物體驗，讓我們帶您深度探索悉尼的魅力
        </p>
        
        {/* 快速導航按鈕 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Link href="/attractions" className="bg-red-500/90 hover:bg-red-600/90 text-white py-4 px-6 rounded-lg font-medium transition-colors cursor-pointer text-center whitespace-nowrap">
            <i className="ri-map-pin-line text-2xl mb-2 block"></i>
            熱門景點
          </Link>
          <Link href="/food" className="bg-orange-500/90 hover:bg-orange-600/90 text-white py-4 px-6 rounded-lg font-medium transition-colors cursor-pointer text-center whitespace-nowrap">
            <i className="ri-restaurant-line text-2xl mb-2 block"></i>
            美食推薦
          </Link>
          <Link href="/shopping" className="bg-blue-500/90 hover:bg-blue-600/90 text-white py-4 px-6 rounded-lg font-medium transition-colors cursor-pointer text-center whitespace-nowrap">
            <i className="ri-shopping-bag-line text-2xl mb-2 block"></i>
            購物天堂
          </Link>
          <Link href="/guide" className="bg-green-500/90 hover:bg-green-600/90 text-white py-4 px-6 rounded-lg font-medium transition-colors cursor-pointer text-center whitespace-nowrap">
            <i className="ri-book-open-line text-2xl mb-2 block"></i>
            旅遊攻略
          </Link>
        </div>
        
        {/* 向下滾動提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-white/70"></i>
        </div>
      </div>
    </div>
  );
}