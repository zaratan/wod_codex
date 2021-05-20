import React from 'react';
import { advFlawSlug } from '../helpers/slugs';
import { AdvFlawType } from '../types/AdvFlawTypes';
import StyledLinkIcon from './Styled/StyledLinkIcon';

const AdvFlaw = ({ advFlaw }: { advFlaw: AdvFlawType }) => {
  const slug = advFlawSlug(advFlaw);
  return (
    <article className="py-6 group" id={slug}>
      <header className="flex flex-row items-baseline py-3">
        <h5 className="pr-4 text-2xl flex flex-col sm:flex-row items-baseline space-y-2 sm:space-x-2 font-medium font-serif">
          <span className="flex flex-row space-x-2 items-baseline">
            {advFlaw.name}
          </span>
          <span className="text-base flex flex-row space-x-2">
            <span>
              {advFlaw.kind} :{' '}
              {typeof advFlaw.level === 'number'
                ? advFlaw.level
                : advFlaw.level.join(' ou ')}
            </span>
            <a href={`#${slug}`} className="block sm:hidden">
              <StyledLinkIcon />
            </a>
          </span>
          <a href={`#${slug}`} className="hidden sm:block">
            <StyledLinkIcon />
          </a>
        </h5>
      </header>
      <p className="py-1">{advFlaw.description}</p>
      <footer className="text-xs flex justify-end w-full">
        <span className="sm:max-w-md pt-4">{advFlaw.source}</span>
      </footer>
    </article>
  );
};

export default AdvFlaw;
