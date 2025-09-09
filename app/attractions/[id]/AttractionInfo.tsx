'use client';

interface AttractionInfoProps {
  data: any;
}

export default function AttractionInfo({ data }: AttractionInfoProps) {
  const openMap = () => {
    const query = encodeURIComponent(`${data.address || data.location}, Sydney`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
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
        <h3 className="text-lg font-semibold text-gray-900 mb-3">關於這個景點</h3>
        <p className="text-gray-600 leading-relaxed">{data.description}</p>
      </div>

      {/* 特色亮點 */}
      {data.highlights && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">景點特色</h3>
          <div className="grid grid-cols-1 gap-2">
            {data.highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <i className="ri-check-line text-blue-600 text-lg"></i>
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

          {/* 票價資訊 */}
          {data.ticketInfo && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <i className="ri-ticket-line text-green-600 mr-2"></i>
                票價資訊
              </h4>
              <div className="space-y-1 text-sm text-gray-600">
                {Object.entries(data.ticketInfo).map(([type, price]) => (
                  <div key={type} className="flex justify-between">
                    <span>{type}</span>
                    <span className="font-medium">{price as string}</span>
                  </div>
                ))}
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
                  <span className="text-sm text-gray-700">{data.address || data.location}</span>
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

      {/* 交通方式 */}
      {data.transport && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">交通方式</h3>
          <div className="space-y-3">
            {data.transport.map((item: any, index: number) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <i className={`${item.icon} text-2xl text-blue-600`}></i>
                <div>
                  <div className="font-medium text-gray-900">{item.type}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 實用提示 */}
      {data.tips && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">實用提示</h3>
          <div className="space-y-2">
            {data.tips.map((tip: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                <i className="ri-lightbulb-line text-yellow-600 text-lg mt-0.5"></i>
                <span className="text-gray-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 標籤 */}
      {data.tags && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">標籤</h3>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}