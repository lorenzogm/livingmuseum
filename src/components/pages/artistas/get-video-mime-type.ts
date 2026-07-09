import type { Artwork } from '@/api/apiSdk';

export function getVideoMimeType(artwork: Artwork) {
  if (artwork.mimeType) {
    return artwork.mimeType;
  }

  if (artwork.image.endsWith('.mov')) {
    return 'video/quicktime';
  }

  if (artwork.image.endsWith('.webm')) {
    return 'video/webm';
  }

  return 'video/mp4';
}
