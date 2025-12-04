import React from 'react';
import { VideoProps } from '../types';

// Responsive Video Player Component
export const VideoPlayer: React.FC<VideoProps> = ({ src, title, isYouTube }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 relative bg-black">
      <div className="aspect-video w-full relative">
        <iframe 
          src={src} 
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};