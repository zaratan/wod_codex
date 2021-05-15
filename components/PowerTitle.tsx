import { LinkIcon } from '@heroicons/react/outline';
import React from 'react';
import slugify from 'slugify';

const PowerTitle = ({ title, source }: { title: string; source: string }) => {
  const slug = `power-${slugify(title).toLowerCase()}-${source.length}`;
  return title ? (
    <header className="text-2xl py-3" id={slug}>
      <h4 className="flex flex-row items-center space-x-2 font-medium">
        <span>{title}</span>
        <a href={`#${slug}`}>
          <LinkIcon className="w-5 h-5 text-blue-700 dark:text-blue-400 opacity-75 hover:opacity-100" />
        </a>
      </h4>
    </header>
  ) : null;
};

export default PowerTitle;
