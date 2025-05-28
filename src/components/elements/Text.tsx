import { ReactNode, ElementType } from 'react';

// Define text variant types
export type TextVariant = 
  | 'hero'           // Large hero title (h1)
  | 'section'        // Section headings (h2)
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
  | 'white'
  | 'white-muted'    // white/70
  | 'white-subtle'   // white/30
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

// Define base styles for each variant
const variantStyles: Record<TextVariant, string> = {
  hero: 'text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none',
  section: 'text-4xl md:text-6xl lg:text-7xl font-light tracking-tight',
  heading: 'text-2xl md:text-3xl lg:text-4xl font-light tracking-tight',
  body: 'text-base font-normal leading-relaxed',
  small: 'text-sm font-light tracking-wider',
  button: 'text-base font-normal tracking-wider transition-opacity duration-300 hover:opacity-70',
  nav: 'text-sm font-light uppercase tracking-wider',
  footer: 'text-sm font-normal',
  copyright: 'text-base font-normal',
  link: 'text-sm transition-opacity hover:opacity-70 cursor-pointer'
};

// Define color styles
const colorStyles: Record<TextColor, string> = {
  white: 'text-white',
  'white-muted': 'text-white/70',
  'white-subtle': 'text-white/30',
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
  color = 'white',
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
