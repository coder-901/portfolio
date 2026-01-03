import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-accent text-bg-primary hover:bg-accent-hover hover:shadow-glow',
    secondary: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-bg-primary',
    ghost: 'bg-transparent text-text-primary hover:text-accent',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={classes}
      href={href}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {icon && <span className="flex items-center text-xl">{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;

