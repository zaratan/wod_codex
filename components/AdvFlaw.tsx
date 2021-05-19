import { LinkIcon } from '@heroicons/react/outline';
import React from 'react';
import slugify from 'slugify';
import { AdvFlawType } from '../types/AdvFlawTypes';

const AdvFlaw = ({ advFlaw }: { advFlaw: AdvFlawType }) => {
  const slug = `${advFlaw.kind === 'Atout' ? 'adv' : 'flaw'}-${slugify(
    advFlaw.type
  ).toLowerCase()}-${slugify(advFlaw.name).toLowerCase()}-${
    advFlaw.source.length
  }`;
  return (
    <article className="py-6" id={slug}>
      <header className="flex flex-row items-baseline py-3">
        <h5 className="pr-4 text-2xl flex flex-row items-baseline space-x-2 font-medium font-serif">
          <span>{advFlaw.name}</span>
          <span className="text-base">
            {advFlaw.kind} :{' '}
            {typeof advFlaw.level === 'number'
              ? advFlaw.level
              : advFlaw.level.join(' ou ')}
          </span>
          <a href={`#${slug}`}>
            <LinkIcon className="w-5 h-5 text-blue-700 dark:text-blue-400 opacity-75 hover:opacity-100" />
          </a>
        </h5>
      </header>
      <p className="py-1">{advFlaw.description}</p>
      <footer className="text-xs flex justify-end w-full">
        <span className="max-w-md pt-4">{advFlaw.source}</span>
      </footer>
    </article>
  );
};

export default AdvFlaw;
