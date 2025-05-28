interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function Button({ href, onClick, children, target, rel }: ButtonProps) {
  const baseStyles = {
    background: 'transparent',
    border: 'none',
    textDecoration: 'none',
    padding: '0',
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '0.025em',
    textTransform: 'none' as const,
    fontFamily: 'inherit',
    lineHeight: '1.5'
  };

  const className = "text-white font-normal text-base tracking-wider normal-case transition-opacity duration-300 hover:opacity-70 cursor-pointer";

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={className}
      style={baseStyles}
    >
      {children}
    </button>
  );
}
