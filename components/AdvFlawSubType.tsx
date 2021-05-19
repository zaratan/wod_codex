import { LinkIcon } from '@heroicons/react/outline';
import React from 'react';
import { AdvFlawType } from '../types/AdvFlawTypes';
import AdvFlaw from './AdvFlaw';

const AdvFlawSubType = ({
  advFlawsSubGroup,
}: {
  advFlawsSubGroup: {
    type: string;
    subtype: string;
    data: Array<AdvFlawType>;
  };
}) => (
  <section id={`type-${advFlawsSubGroup.type}-${advFlawsSubGroup.subtype}`}>
    <header className="text-3xl py-5">
      <h4 className="flex flex-row space-x-2 items-center font-medium font-serif">
        <span>{advFlawsSubGroup.subtype}</span>
        <a href={`#type-${advFlawsSubGroup.type}-${advFlawsSubGroup.subtype}`}>
          <LinkIcon className="w-5 h-5 text-blue-700 dark:text-blue-400 opacity-75 hover:opacity-100" />
        </a>
      </h4>
    </header>
    <ul>
      {advFlawsSubGroup.data.map((advFlaws) => (
        <AdvFlaw advFlaw={advFlaws} />
      ))}
    </ul>
  </section>
);

export default AdvFlawSubType;
