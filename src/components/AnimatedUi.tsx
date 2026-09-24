import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

// ==========================================
// 1. Top Screen Scroll Progress Indicator
// ==========================================
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DFC17B] via-[#C49B37] to-[#A07722] origin-left z-50 pointer-events-none shadow-[0_1px_6px_rgba(196,155,55,0.4)]"
    />
  );
};

// ==========================================
// 2. Scroll Reveal Component
// ==========================================
interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.65,
  className = '',
  distance = 32,
  once = true,
}) => {
  const getInitial = () => {
    switch (variant) {
      case 'fade-up':
        return { opacity: 0, y: distance };
      case 'fade-down':
        return { opacity: 0, y: -distance };
      case 'fade-left':
        return { opacity: 0, x: -distance };
      case 'fade-right':
        return { opacity: 0, x: distance };
      case 'zoom-in':
        return { opacity: 0, scale: 0.94 };
      case 'blur-in':
        return { opacity: 0, filter: 'blur(8px)', y: distance * 0.5 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (variant) {
      case 'blur-in':
        return { opacity: 1, filter: 'blur(0px)', y: 0 };
      case 'zoom-in':
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 3. Stagger Grids for Scroll Animation
// ==========================================
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = 0.09,
  delayChildren = 0.05,
  className = '',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className = '', yOffset = 24 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 4. Animated Interactive Button
// ==========================================
interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  shimmer?: boolean;
}

export const MotionButton: React.FC<MotionButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  shimmer = false,
  onClick,
  disabled,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-colors cursor-pointer select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B37]/50 disabled:opacity-50 disabled:cursor-not-allowed group';

  const variantStyles = {
    primary:
      'text-[#2C2420] bg-[#F8EABA] hover:bg-[#F2DF9E] border border-[#DEC37C]/80 rounded-full shadow-[0_3px_12px_rgba(222,195,124,0.22)] hover:shadow-[0_6px_20px_rgba(222,195,124,0.38)]',
    secondary:
      'text-[#4A3E37] bg-[#FAF7F2] hover:bg-white border border-[#D8C7B4] hover:border-[#C49B37] rounded-full shadow-2xs hover:shadow-xs',
    ghost:
      'text-[#6B5D55] hover:text-[#2C2420] bg-transparent hover:bg-[#EFE5D7]/50 rounded-full',
    dark:
      'text-[#FAF7F2] bg-[#2C2420] hover:bg-[#3D322C] border border-[#4A3D36] rounded-full shadow-sm hover:shadow-md',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.025, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.965 }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 24,
      }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...(props as any)}
    >
      {/* Subtle shine/shimmer effect */}
      {(shimmer || variant === 'primary') && (
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Content with animated icon nudge */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:scale-110">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
};

// ==========================================
// 5. Floating Accent for Parallax feel
// ==========================================
export const FloatAccent: React.FC<{
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  className?: string;
}> = ({ children, duration = 4, yOffset = 8, className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
