import { LinkIcon } from '@heroicons/react/outline';
import React from 'react';
import { AdvFlawType } from '../types/AdvFlawTypes';
import AdvFlawSubCategoryLinks from './AdvFlawSubCategoryLinks';
import AdvFlawSubType from './AdvFlawSubType';

const AdvFlawCategory = ({
  advFlawsGroup,
  withoutTitle,
}: {
  advFlawsGroup: {
    type: string;
    subtypes: Array<{
      type: string;
      subtype: string;
      data: Array<AdvFlawType>;
    }>;
  };
  withoutTitle?: boolean;
}) => (
  <section id={`type-${advFlawsGroup.type}`}>
    {withoutTitle ? null : (
      <header className="text-3xl py-5">
        <h3 className="flex flex-row space-x-2 items-center font-medium font-serif justify-center">
          <span>{advFlawsGroup.type}</span>
          <a href={`#type-${advFlawsGroup.type}`}>
            <LinkIcon className="w-5 h-5 text-blue-700 dark:text-blue-400 opacity-75 hover:opacity-100" />
          </a>
        </h3>
        <AdvFlawSubCategoryLinks
          type={advFlawsGroup.type}
          subtypes={advFlawsGroup.subtypes.map((e) => e.subtype)}
        />
      </header>
    )}
    <ul>
      {advFlawsGroup.subtypes.map((advFlawsSubGroup) => (
        <AdvFlawSubType
          advFlawsSubGroup={advFlawsSubGroup}
          key={`type-${advFlawsSubGroup.type}-${advFlawsSubGroup.subtype}`}
        />
      ))}
    </ul>
  </section>
);

export default AdvFlawCategory;
