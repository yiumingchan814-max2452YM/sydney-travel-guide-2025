'use client';

import { useState } from 'react';

interface AttractionPhotosProps {
  data: any;
}

export default function AttractionPhotos({ data }: AttractionPhotosProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = data.images || [data.image];

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