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
  const baseStyles = {
    fontFamily: 'Roboto, var(--lm-font-primary)',
    fontWeight: '400',
    fontSize: '14px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    lineHeight: '1.2em',
    padding: '12px 24px',
    border: 'none',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-lg';
      case 'secondary':
        return 'bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black';
      case 'link':
        return 'bg-transparent text-yellow-500 hover:text-yellow-400 p-0';
      default:
        return 'bg-yellow-500 text-black hover:bg-yellow-400';
    }
  };

  const buttonClass = `${getVariantStyles()} transition-all duration-300 ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={buttonClass}
        style={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={buttonClass}
      style={baseStyles}
    >
      {children}
    </button>
  );
}
