"use client";

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="h-32 w-32 rounded-full border-4 border-emerald-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 animate-pulse shadow-lg shadow-emerald-500/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 
