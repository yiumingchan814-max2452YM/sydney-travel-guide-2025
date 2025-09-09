'use client';

interface ShoppingInfoProps {
  data: any;
}

export default function ShoppingInfo({ data }: ShoppingInfoProps) {
  const openMap = () => {
    if (data.googleMapsUrl) {
      window.open(data.googleMapsUrl, '_blank');
    } else {
      const query = encodeURIComponent(`${data.address}, Sydney`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  const callPhone = () => {
    if (data.phone) {
      window.open(`tel:${data.phone}`, '_blank');
    }
  };

  const visitWebsite = () => {
    if (data.website) {
      window.open(`https://${data.website}`, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      {/* 基本描述 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">關於這個購物地點</h3>
        <p className="text-gray-600 leading-relaxed">{data.description}</p>
      </div>

      {/* 特色亮點 */}
      {data.highlights && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">購物特色</h3>
          <div className="grid grid-cols-1 gap-2">
            {data.highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <i className="ri-check-line text-red-600 text-lg"></i>
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 實用資訊 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">實用資訊</h3>
        <div className="space-y-4">
          {/* 營業時間 */}
          {data.hours && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <i className="ri-time-line text-blue-600 mr-2"></i>
                營業時間
              </h4>
              <div className="space-y-1 text-sm text-gray-600">
                {Object.entries(data.hours).map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span>{time as string}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 停車資訊 */}
          {data.parking && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <i className="ri-car-line text-green-600 mr-2"></i>
                停車資訊
              </h4>
              <div className="text-sm text-gray-600">
                <span>{data.parking}</span>
              </div>
            </div>
          )}

          {/* 聯絡資訊 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <i className="ri-information-line text-purple-600 mr-2"></i>
              聯絡資訊
            </h4>
            <div className="space-y-3">
              <button
                onClick={openMap}
                className="w-full flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <i className="ri-map-pin-line text-red-500"></i>
                  <span className="text-sm text-gray-700">{data.address}</span>
                </div>
                <i className="ri-external-link-line text-gray-400"></i>
              </button>

              {data.phone && (
                <button
                  onClick={callPhone}
                  className="w-full flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <i className="ri-phone-line text-green-500"></i>
                    <span className="text-sm text-gray-700">{data.phone}</span>
                  </div>
                  <i className="ri-external-link-line text-gray-400"></i>
                </button>
              )}

              {data.website && (
                <button
                  onClick={visitWebsite}
                  className="w-full flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <i className="ri-global-line text-blue-500"></i>
                    <span className="text-sm text-gray-700">{data.website}</span>
                  </div>
                  <i className="ri-external-link-line text-gray-400"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 購物建議 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">購物建議</h3>
        <div className="space-y-2">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <i className="ri-lightbulb-line text-yellow-600 text-lg mt-0.5"></i>
            <span className="text-gray-700 text-sm">建議預留充足時間逛街</span>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <i className="ri-money-dollar-circle-line text-green-600 text-lg mt-0.5"></i>
            <span className="text-gray-700 text-sm">留意季節性折扣活動</span>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <i className="ri-map-pin-line text-blue-600 text-lg mt-0.5"></i>
            <span className="text-gray-700 text-sm">可使用購物中心免費WiFi查詢資訊</span>
          </div>
        </div>
      </div>

      {/* 標籤 */}
      {data.tags && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">標籤</h3>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}