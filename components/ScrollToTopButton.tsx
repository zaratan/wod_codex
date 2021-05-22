import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline';
import classMerge from '../helpers/classMerge';
import { useScroll } from '../hooks/useScroll';

const ScrollToTopButton = () => {
  const { atTopScroll } = useScroll({ top: 500 });
  const onClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={classMerge(
        atTopScroll ? 'opacity-0' : 'opacity-100',
        'fixed right-10 bottom-10 md:bottom-16 md:right-16 h-10 w-10 transition-opacity duration-300'
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
