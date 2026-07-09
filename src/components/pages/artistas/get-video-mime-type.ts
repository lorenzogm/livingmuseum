import type { Artwork } from '@/api/apiSdk';

export function getVideoMimeType(artwork: Artwork) {
  if (artwork.mimeType) {
    return artwork.mimeType;
  }

  const normalizedImage = artwork.image.toLowerCase();

  if (normalizedImage.endsWith('.mov')) {
    return 'video/quicktime';
  }

  if (normalizedImage.endsWith('.webm')) {
    return 'video/webm';
  }

  return 'video/mp4';
}
