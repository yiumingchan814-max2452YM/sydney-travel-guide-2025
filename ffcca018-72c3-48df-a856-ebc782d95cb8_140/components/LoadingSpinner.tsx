'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'red' | 'green' | 'gray';
  fullScreen?: boolean;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue',
  fullScreen = false,
  text
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500',
    gray: 'border-gray-500'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const spinner = (
    <div className={`inline-block ${sizeClasses[size]} border-2 border-t-transparent ${colorClasses[color]} rounded-full animate-spin`}></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <div className={`inline-block ${sizeClasses.lg} border-2 border-t-transparent ${colorClasses[color]} rounded-full animate-spin mb-4`}></div>
          {text && (
            <p className={`${textSizeClasses[size]} text-gray-600`}>
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (text) {
    return (
      <div className="flex items-center justify-center space-x-2">
        {spinner}
        <span className={`${textSizeClasses[size]} text-gray-600`}>
          {text}
        </span>
      </div>
    );
  }

  return spinner;
}

// 頁面載入組件
export function PageLoading({ text = '載入中...' }: { text?: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-2 border-t-transparent border-red-500 rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-gray-600">{text}</p>
      </div>
    </div>
  );
}

// 區塊載入組件
export function SectionLoading({ height = 'h-64', text }: { height?: string; text?: string }) {
  return (
    <div className={`${height} bg-white rounded-lg border border-gray-100 flex items-center justify-center`}>
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-t-transparent border-blue-500 rounded-full animate-spin mb-2"></div>
        {text && <p className="text-sm text-gray-500">{text}</p>}
      </div>
    </div>
  );
}

// 按鈕載入組件
export function ButtonLoading({ text = '處理中...' }: { text?: string }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
      <span>{text}</span>
    </div>
  );
}