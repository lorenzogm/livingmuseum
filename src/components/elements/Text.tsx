import { ReactNode, ElementType } from 'react';

// Define text variant types
export type TextVariant = 
  | 'hero'           // Large hero title (h1) - 120px
  | 'section'        // Section headings (h2) - 80px
  | 'heading'        // Smaller headings (h3-h6)
  | 'body'           // Regular body text
  | 'small'          // Small text for labels, captions
  | 'button'         // Button text styling
  | 'nav'            // Navigation text
  | 'footer'         // Footer text
  | 'copyright'      // Copyright text
  | 'link';          // Link text

// Define color variants
export type TextColor = 
  | 'primary'        // Black/Dark text
  | 'secondary'      // Yellow accent
  | 'muted'          // Gray text
  | 'light'          // Light gray text
  | 'white'          // White text (for dark backgrounds)
  | 'inherit';

// Define text alignment
export type TextAlign = 'left' | 'center' | 'right';

// Define text transform
export type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  transform?: TextTransform;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

// Define base styles for each variant - Updated to match Living Museum Madrid exactly
const variantStyles: Record<TextVariant, string> = {
  hero: 'text-[120px] font-normal leading-none tracking-tight font-roboto',
  section: 'text-[80px] font-normal leading-none tracking-wider font-roboto',
  heading: 'text-lg md:text-xl font-normal tracking-wide capitalize font-roboto',
  body: 'text-base font-light leading-relaxed font-roboto',
  small: 'text-sm font-light tracking-wide font-roboto',
  button: 'text-sm font-normal tracking-wider transition-all duration-300 font-roboto',
  nav: 'text-sm font-light tracking-wide font-roboto',
  footer: 'text-xs font-light font-roboto',
  copyright: 'text-sm font-light font-roboto',
  link: 'text-sm font-light transition-colors hover:text-yellow-500 cursor-pointer font-roboto'
};

// Define color styles
const colorStyles: Record<TextColor, string> = {
  primary: 'text-gray-900',
  secondary: 'text-yellow-500',
  muted: 'text-gray-600',
  light: 'text-gray-400',
  white: 'text-white',
  inherit: ''
};

// Define alignment styles
const alignStyles: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

// Define transform styles
const transformStyles: Record<TextTransform, string> = {
  none: 'normal-case',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize'
};

// Default HTML elements for each variant
const defaultElements: Record<TextVariant, ElementType> = {
  hero: 'h1',
  section: 'h2',
  heading: 'h3',
  body: 'p',
  small: 'span',
  button: 'span',
  nav: 'span',
  footer: 'p',
  copyright: 'h2',
  link: 'a'
};

export default function Text({
  variant = 'body',
  color = 'primary',
  align = 'left',
  transform = 'none',
  className = '',
  children,
  as
}: TextProps) {
  // Determine the HTML element to use
  const Element = as || defaultElements[variant];
  
  // Combine all styles
  const classes = [
    variantStyles[variant],
    colorStyles[color],
    alignStyles[align],
    transformStyles[transform],
    className
  ].filter(Boolean).join(' ');

  return (
    <Element className={classes}>
      {children}
    </Element>
  );
}
