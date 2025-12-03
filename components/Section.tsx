import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`
        py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden
        ${darker ? 'bg-deep-900/30' : 'bg-transparent'}
        ${className}
      `}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};