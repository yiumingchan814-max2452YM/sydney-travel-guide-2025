import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string): string {
  if (price === '免費' || price === 'Free') {
    return '免費';
  }
  return price;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

export function openGoogleMaps(address: string) {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.google.com/?q=${encodedAddress}`;
  window.open(url, '_blank');
}

export function shareContent(title: string, text: string, url: string) {
  if (navigator.share) {
    return navigator.share({ title, text, url });
  } else {
    // 降級處理：複製到剪貼板
    const shareText = `${title} - ${text} ${url}`;
    return navigator.clipboard.writeText(shareText);
  }
}