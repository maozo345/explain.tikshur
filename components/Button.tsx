import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface ButtonProps {
  text?: string;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const CTAButton: React.FC<ButtonProps> = ({ 
  text = "תיאום שיחת הכרות", 
  className = "",
  fullWidth = false,
  onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        group inline-flex items-center justify-center gap-2
        bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400
        text-deep-950 font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,193,7,0.4)] 
        hover:shadow-[0_0_30px_rgba(255,193,7,0.6)]
        transition-all duration-300 transform hover:-translate-y-1
        border border-gold-300/50 cursor-pointer
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="text-lg md:text-xl tracking-wide">{text}</span>
    </button>
  );
};