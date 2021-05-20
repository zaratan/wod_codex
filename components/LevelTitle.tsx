import React from 'react';
import StyledLinkIcon from './Styled/StyledLinkIcon';

const LevelTitle = ({ level }: { level: number }) =>
  level !== 0 ? (
    <header className="text-3xl py-5 group">
      <h3 className="flex flex-row space-x-2 items-center font-medium font-serif">
        <span>Niveau : {level}</span>
        <a href={`#level-${level}`}>
          <StyledLinkIcon />
        </a>
      </h3>
    </header>
  ) : null;

export default LevelTitle;
