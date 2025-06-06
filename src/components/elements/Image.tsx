import NextImage, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';

type AspectRatio = '1:1' | '4:3' | '16:9' | '3:2' | '2:3';

interface ImageComponentProps extends Omit<ImageProps, 'height' | 'width' | 'fill'> {
  /** Image source path */
  src: string;
  /** Image alt text */
  alt: string;
  /** Aspect ratio for the image container */
  aspectRatio?: AspectRatio;
  /** Whether to display the image with rounded corners */
  rounded?: boolean;
  /** Whether to add a shadow effect */
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  /** Whether to add a caption below the image */
  caption?: string;
  /** Whether to fill the container (uses fill property of Next.js Image) */
  fill?: boolean;
  /** Optional width in pixels (not used if fill is true) */
  width?: number;
  /** Optional height in pixels (not used if fill is true) */
  height?: number;
  /** Image quality (1-100) */
  quality?: number;
  /** Any additional classes to add to the wrapper */
  wrapperClassName?: string;
  /** Any additional classes to add to the image */
  imageClassName?: string;
}

export function Image({
  src,
  alt,
  aspectRatio = '4:3',
  rounded = true,
  shadow = 'md',
  caption,
  fill = true,
  width,
  height,
  quality = 85,
  wrapperClassName = '',
  imageClassName = '',
  ...rest
}: ImageComponentProps) {
  // Calculate aspect ratio styles
  const getAspectRatioStyle = (): CSSProperties => {
    switch (aspectRatio) {
      case '1:1':
        return { aspectRatio: '1/1' };
      case '4:3':
        return { aspectRatio: '4/3' };
      case '16:9':
        return { aspectRatio: '16/9' };
      case '3:2':
        return { aspectRatio: '3/2' };
      case '2:3':
        return { aspectRatio: '2/3' };
      default:
        return { aspectRatio: '4/3' };
    }
  };

  // Determine shadow class
  const getShadowClass = (): string => {
    switch (shadow) {
      case 'none':
        return '';
      case 'sm':
        return 'shadow-sm';
      case 'md':
        return 'shadow-md';
      case 'lg':
        return 'shadow-lg';
      default:
        return 'shadow-md';
    }
  };

  // Combine classes
  const wrapperClasses = `
    relative overflow-hidden 
    ${rounded ? 'rounded-lg' : ''} 
    ${getShadowClass()}
    ${wrapperClassName}
  `;

  src = `${process.env.NODE_ENV === 'production' ? '/livingmuseum' : ''}${src}`

  return (
    <figure>
      <div 
        className={wrapperClasses} 
        style={fill ? getAspectRatioStyle() : {}}
      >
        {fill ? (
          <NextImage
            src={src}
            alt={alt}
            fill={true}
            quality={quality}
            className={`object-cover ${imageClassName}`}
            {...rest}
          />
        ) : (
          <NextImage
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            quality={quality}
            className={imageClassName}
            {...rest}
          />
        )}
      </div>
      
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-3 font-light leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
