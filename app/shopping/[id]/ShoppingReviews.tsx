'use client';

import { useState } from 'react';

interface ShoppingReviewsProps {
  data: any;
}

export default function ShoppingReviews({ data }: ShoppingReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // 模擬評論資料
  const reviews = [
    {
      id: 1,
      author: 'Jennifer Liu',
      rating: 5,
      date: '2024-01-18',
      comment: '購物環境很棒，店家選擇豐富。服務人員都很友善，停車也很方便！',
      helpful: 15,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      author: 'Mark Thompson',
      rating: 4,
      date: '2024-01-15',
      comment: '整體不錯，但週末人潮較多。品牌選擇多樣，價格合理。',
      helpful: 10,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      author: 'Sophie Chen',
      rating: 5,
      date: '2024-01-12',
      comment: '非常喜歡這裡的氛圍！店舖設計很有特色，找到了很多獨特的商品。',
      helpful: 18,
      avatar: '👩‍🎨'
    },
    {
      id: 4,
      author: 'Alex Wang',
      rating: 4,
      date: '2024-01-10',
      comment: '交通便利，商品種類齊全。美食區的選擇也不錯，值得推薦。',
      helpful: 8,
      avatar: '👨‍🍳'
    },
    {
      id: 5,
      author: 'Emma Brown',
      rating: 5,
      date: '2024-01-08',
      comment: '和朋友一起來逛街，度過了愉快的一天。這裡真的什麼都有！',
      helpful: 12,
      avatar: '👩‍🎓'
    }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`${
          index < rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'
        } text-sm`}
      />
    ));
  };

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
      distribution[review.rating - 1]++;
    });
    return distribution.reverse();
  };

  const ratingDistribution = getRatingDistribution();
  const totalReviews = reviews.length;

  return (
    <div className="space-y-6">
      {/* 評分總覽 */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{data.rating}</div>
            <div className="flex justify-center mb-1">
              {renderStars(Math.floor(data.rating))}
            </div>
            <div className="text-sm text-gray-500">{data.reviews || totalReviews} 則評論</div>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={star} className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-gray-600 w-3">{star}</span>
                <i className="ri-star-fill text-yellow-400 text-xs"></i>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: `${totalReviews > 0 ? (ratingDistribution[index] / totalReviews) * 100 : 0}%`
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-6">{ratingDistribution[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 評論列表 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">顧客評論</h3>
        <div className="space-y-4">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{review.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{review.author}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{review.comment}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 cursor-pointer hover:text-gray-700">
                      <i className="ri-thumb-up-line"></i>
                      <span>有用 ({review.helpful})</span>
                    </button>
                    <button className="cursor-pointer hover:text-gray-700">回覆</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 顯示更多按鈕 */}
        {reviews.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {showAllReviews ? '收起評論' : `查看全部 ${reviews.length} 則評論`}
            </button>
          </div>
        )}
      </div>

      {/* 寫評論按鈕 */}
      <div className="bg-red-50 rounded-lg p-4">
        <div className="text-center">
          <h3 className="font-medium text-gray-900 mb-2">分享您的購物體驗</h3>
          <p className="text-sm text-gray-600 mb-3">您的評論將幫助其他購物者做出更好的選擇</p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-colors whitespace-nowrap">
            寫評論
          </button>
        </div>
      </div>
    </div>
  );
}