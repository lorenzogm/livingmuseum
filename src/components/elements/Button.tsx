import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
}

export default function Button({ href, onClick, children, target, rel, variant = 'primary', className = '' }: ButtonProps) {
  const primaryColor = 'rgb(255, 206, 16)';
  const primaryHoverColor = 'rgb(245, 196, 6)';
  
  const baseStyles = {
    fontFamily: 'Roboto, var(--lm-font-primary)',
    fontWeight: '300',
    fontSize: '18px',
    letterSpacing: '-0.3px',
    textTransform: 'uppercase' as const,
    lineHeight: '1.1em',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '40px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',
    backgroundColor: variant === 'primary' ? primaryColor : variant === 'secondary' ? 'transparent' : 'transparent',
    borderColor: variant === 'secondary' ? primaryColor : 'none',
    borderWidth: variant === 'secondary' ? '2px' : '0',
    borderStyle: variant === 'secondary' ? 'solid' : 'none',
    color: variant === 'link' ? primaryColor : variant === 'secondary' ? primaryColor : 'black'
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (variant === 'primary') {
      (e.target as HTMLElement).style.backgroundColor = primaryHoverColor;
    } else if (variant === 'secondary') {
      (e.target as HTMLElement).style.backgroundColor = primaryColor;
      (e.target as HTMLElement).style.color = 'black';
    } else if (variant === 'link') {
      (e.target as HTMLElement).style.color = primaryHoverColor;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (variant === 'primary') {
      (e.target as HTMLElement).style.backgroundColor = primaryColor;
    } else if (variant === 'secondary') {
      (e.target as HTMLElement).style.backgroundColor = 'transparent';
      (e.target as HTMLElement).style.color = primaryColor;
    } else if (variant === 'link') {
      (e.target as HTMLElement).style.color = primaryColor;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'text-black hover:shadow-lg rounded-[40px]';
      case 'secondary':
        return 'bg-transparent border-2 text-black rounded-[40px]';
      case 'link':
        return 'bg-transparent rounded-[40px]';
      default:
        return 'text-black rounded-[40px]';
    }
  };

  const buttonClass = `${getVariantStyles()} transition-all duration-300 ${className}`;

  if (href) {
    return (
      <Link 
        href={`${process.env.NODE_ENV ==='production' ? 'livingmuseum':''}${href}`}
        target={target}
        rel={rel}
        className={buttonClass}
        style={baseStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={buttonClass}
      style={baseStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
