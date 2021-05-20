import { LinkIcon } from '@heroicons/react/outline';
import React from 'react';
import slugify from 'slugify';
import { ExtraRequirementsType, RequirementsType } from '../types/ComboTypes';
import Requirements from './Requirements';
import StyledLinkIcon from './Styled/StyledLinkIcon';

const PowerTitle = ({
  title,
  source,
  requirements,
  extraRequirements,
}: {
  title: string;
  source: string;
  requirements?: RequirementsType;
  extraRequirements?: ExtraRequirementsType;
}) => {
  const slug = `power-${slugify(title).toLowerCase()}-${source.length}`;
  return title ? (
    <header className="text-2xl py-3" id={slug}>
      <h4 className="flex flex-row items-center space-x-2 font-medium font-serif">
        <span>{title}</span>
        <a href={`#${slug}`}>
          <StyledLinkIcon />
        </a>
      </h4>
      <Requirements
        requirements={requirements || []}
        extraRequirements={extraRequirements}
      />
    </header>
  ) : null;
};

export default PowerTitle;
