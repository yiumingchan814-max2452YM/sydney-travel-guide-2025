'use client';

import { useState } from 'react';

interface ShoppingPhotosProps {
  data: any;
}

export default function ShoppingPhotos({ data }: ShoppingPhotosProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 為每個購物地點生成多張照片
  const generateImages = (data: any) => {
    const baseImage = data.image;
    const images = [baseImage];
    
    // 根據不同類型生成相應的圖片
    if (data.type === '購物中心' || data.type === '現代購物中心') {
      images.push(
        baseImage.replace('&seq=', '&seq=interior-'),
        baseImage.replace('&seq=', '&seq=shops-'),
        baseImage.replace('&seq=', '&seq=dining-')
      );
    } else if (data.type === '精品拱廊' || data.type === '精品店') {
      images.push(
        baseImage.replace('&seq=', '&seq=boutique-'),
        baseImage.replace('&seq=', '&seq=luxury-')
      );
    } else if (data.type === '傳統市場' || data.type === '海灘市場') {
      images.push(
        baseImage.replace('&seq=', '&seq=market-stalls-'),
        baseImage.replace('&seq=', '&seq=vendors-')
      );
    } else {
      images.push(
        baseImage.replace('&seq=', '&seq=exterior-'),
        baseImage.replace('&seq=', '&seq=shopping-')
      );
    }
    
    return images;
  };

  const images = generateImages(data);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {images.map((image: string, index: number) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`${data.name} - 照片 ${index + 1}`}
              className="w-full h-64 object-cover object-top rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(image)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
              <i className="ri-search-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
          </div>
        ))}
      </div>

      {/* 相片數量統計 */}
      <div className="mt-4 text-center text-sm text-gray-500">
        共 {images.length} 張照片
      </div>

      {/* 燈箱效果 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              <i className="ri-close-line"></i>
            </button>
            <img
              src={selectedImage}
              alt={data.name}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}