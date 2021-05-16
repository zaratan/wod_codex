import React from 'react';
import { LinkIcon } from '@heroicons/react/outline';

const LevelTitle = ({ level }: { level: number }) =>
  level !== 0 ? (
    <header className="text-3xl py-5">
      <h3 className="flex flex-row space-x-2 items-center font-medium font-serif">
        <span>Niveau : {level}</span>
        <a href={`#level-${level}`}>
          <LinkIcon className="w-5 h-5 text-blue-700 dark:text-blue-400 opacity-75 hover:opacity-100" />
        </a>
      </h3>
    </header>
  ) : null;

export default LevelTitle;
