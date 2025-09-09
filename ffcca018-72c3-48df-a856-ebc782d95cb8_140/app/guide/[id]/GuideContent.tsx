'use client';

interface GuideContentProps {
  data: any;
}

export default function GuideContent({ data }: GuideContentProps) {
  return (
    <div className="space-y-6">
      {/* 文章摘要 */}
      <div className="bg-purple-50 rounded-lg p-4">
        <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
          <i className="ri-information-line mr-2"></i>
          指南摘要
        </h3>
        <p className="text-purple-800 text-sm">{data.description}</p>
      </div>

      {/* 標籤 */}
      {data.tags && (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 主要內容 */}
      <div className="prose prose-lg max-w-none">
        {data.id === 'transportation-guide' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Opal 卡 - 您的交通好夥伴</h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold mb-2">什麼是 Opal 卡？</h3>
                <p className="text-gray-700 mb-3">Opal 卡是悉尼公共交通的電子票卡系統，可用於火車、巴士、渡輪和輕軌。</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>可在機場、火車站、便利店購買</li>
                  <li>最低儲值 $10 澳幣</li>
                  <li>可重複使用和充值</li>
                  <li>享有自動折扣優惠</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">火車系統</h2>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-blue-600">機場線 (Airport Line)</h3>
                  <p className="text-gray-700 text-sm mb-2">連接悉尼機場與市中心，是最快捷的方式。</p>
                  <div className="text-sm text-gray-600">
                    <p>• 車程：機場到市中心約13分鐘</p>
                    <p>• 班次：每10分鐘一班</p>
                    <p>• 票價：$19.44 (含機場站費用)</p>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-green-600">市區環線 (City Circle)</h3>
                  <p className="text-gray-700 text-sm mb-2">市中心環狀線，連接主要商業區。</p>
                  <div className="text-sm text-gray-600">
                    <p>• 主要站點：Central, Town Hall, Wynyard, Circular Quay</p>
                    <p>• 班次：每3-5分鐘一班（尖峰時間）</p>
                    <p>• 票價：$3.61 (成人單程)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">巴士系統</h2>
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold mb-2">巴士路線指南</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-red-600">機場巴士 (400號)：</strong>
                    <p className="text-gray-700">連接機場與Bondi Junction，經過多個熱門地區。</p>
                  </div>
                  <div>
                    <strong className="text-blue-600">海灘巴士 (380-382號)：</strong>
                    <p className="text-gray-700">前往Bondi Beach、Coogee等知名海灘。</p>
                  </div>
                  <div>
                    <strong className="text-green-600">觀光巴士 (555號)：</strong>
                    <p className="text-gray-700">連接主要觀光景點的免費接駁巴士。</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">渡輪系統</h2>
              <div className="bg-teal-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">悉尼渡輪不僅是交通工具，更是觀光體驗的一部分。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>熱門路線：</strong>
                    <ul className="list-disc list-inside text-gray-700 mt-1">
                      <li>Circular Quay ↔ Manly (30分鐘)</li>
                      <li>Circular Quay ↔ Taronga Zoo (12分鐘)</li>
                      <li>Circular Quay ↔ Darling Harbour (25分鐘)</li>
                    </ul>
                  </div>
                  <div>
                    <strong>票價資訊：</strong>
                    <ul className="list-disc list-inside text-gray-700 mt-1">
                      <li>短程：$6.12</li>
                      <li>長程：$7.51</li>
                      <li>曼利渡輪：$8.35</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">實用小貼士</h2>
              <div className="space-y-3">
                {[
                  '尖峰時間（7-9AM, 5-7PM）班次更頻繁但人潮較多',
                  '週日使用 Opal 卡有 $2.80 每日上限優惠',
                  '可下載 TripView 或 Citymapper App 查詢即時班次',
                  '大部分車站都有無障礙設施',
                  '請在車門關閉前上下車，避免擠迫'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <i className="ri-lightbulb-line text-green-600 text-lg mt-0.5"></i>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {data.id === 'accommodation-guide' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">市中心商務區 (CBD)</h2>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">優點</h3>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>交通便利，步行可達主要景點</li>
                    <li>餐廳、購物、娛樂選擇豐富</li>
                    <li>商務設施完善</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">缺點</h3>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>住宿費用較高</li>
                    <li>週末較為冷清</li>
                    <li>停車費昂貴</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">推薦住宿類型</h3>
                <p className="text-sm text-gray-700">商務酒店、精品酒店、服務式公寓</p>
                <p className="text-sm text-gray-600 mt-1">價格範圍：$150-500/晚</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">岩石區 (The Rocks)</h2>
              <div className="bg-amber-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">悉尼最具歷史氛圍的住宿區域，鄰近環形碼頭和海港大橋。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">適合族群</h3>
                    <ul className="text-sm text-gray-700 list-disc list-inside">
                      <li>歷史文化愛好者</li>
                      <li>攝影愛好者</li>
                      <li>首次造訪悉尼的遊客</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">住宿選擇</h3>
                    <ul className="text-sm text-gray-700 list-disc list-inside">
                      <li>精品酒店</li>
                      <li>歷史建築改建酒店</li>
                      <li>高端民宿</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">達令港 (Darling Harbour)</h2>
              <div className="bg-teal-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">家庭友善的住宿區域，靠近水族館、動物園等景點。</p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">特色</h3>
                    <p className="text-sm text-gray-700">海濱景觀、娛樂設施豐富、適合親子出遊</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">價格範圍</h3>
                    <p className="text-sm text-gray-700">$120-350/晚</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">邦迪海灘 (Bondi Beach)</h2>
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">悉尼最著名的海灘住宿區，適合喜愛海灘生活的遊客。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">住宿類型</h3>
                    <ul className="text-sm text-gray-700 list-disc list-inside">
                      <li>海景酒店</li>
                      <li>衝浪客旅館</li>
                      <li>度假公寓</li>
                      <li>背包客棧</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">注意事項</h3>
                    <ul className="text-sm text-gray-700 list-disc list-inside">
                      <li>夏季價格較高</li>
                      <li>需搭巴士進入市區</li>
                      <li>週末較為熱鬧</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">預訂建議</h2>
              <div className="space-y-3">
                {[
                  '旺季（12月-2月）建議提前2-3個月預訂',
                  '考慮住宿位置與主要景點的交通便利性',
                  '比較不同平台價格，注意隱藏費用',
                  '閱讀最新評價，了解實際住宿品質',
                  '確認取消政策，保持行程彈性'
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <i className="ri-home-line text-blue-600 text-lg mt-0.5"></i>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 其他指南的內容可以類似方式添加 */}
        {data.id !== 'transportation-guide' && data.id !== 'accommodation-guide' && (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              這是一份詳細的{data.title}，包含了最實用的資訊和建議。
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">主要內容包括：</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>詳細的步驟指南</li>
                <li>實用的小貼士</li>
                <li>注意事項和建議</li>
                <li>相關資源和聯絡方式</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">為什麼選擇這份指南？</h3>
              <p className="text-blue-800 text-sm">
                我們的指南基於當地專家的實際經驗，並持續更新最新資訊，確保您獲得最準確和實用的建議。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 相關指南推薦 */}
      <div className="border-t pt-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">相關指南推薦</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-1">悉尼省錢旅遊秘訣</h3>
            <p className="text-sm text-gray-600">教你如何用最少預算玩遍悉尼</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-1">悉尼最佳攝影點</h3>
            <p className="text-sm text-gray-600">專業攝影師推薦的拍攝地點</p>
          </div>
        </div>
      </div>
    </div>
  );
}