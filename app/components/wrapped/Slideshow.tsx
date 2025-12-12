'use client';

import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { WrappedData } from '@/types/wrapped';
import SlideContainer from './SlideContainer';

export default function Slideshow() {
  const [data, setData] = useState<WrappedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWrappedData() {
      try {
        const response = await fetch('/api/wrapped/data');

        if (!response.ok) {
          throw new Error('Failed to fetch wrapped data');
        }

        const wrappedData = await response.json();
        setData(wrappedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchWrappedData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="text-center">
          <div className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">
            Loading your wrapped...
          </div>
          <div className="animate-spin h-8 w-8 border-4 border-zinc-300 dark:border-zinc-700 border-t-blue-600 dark:border-t-blue-400 rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="text-center max-w-md p-8">
          <div className="text-xl text-red-600 dark:text-red-400 mb-4">
            Error loading wrapped data
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-black dark:text-white font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <SlideContainer data={data} />

      {/* Sign out button */}
      <button
        onClick={() => signOut()}
        className="fixed top-8 left-8 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-black dark:text-white text-sm font-medium"
      >
        Sign Out
      </button>
    </>
  );
}
