import React from 'react';
import { AdvFlawType } from '../types/AdvFlawTypes';
import AdvFlawSubCategoryLinks from './AdvFlawSubCategoryLinks';
import AdvFlawSubType from './AdvFlawSubType';
import StyledLinkIcon from './Styled/StyledLinkIcon';

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
    <header className="text-3xl py-5 group">
      {withoutTitle ? null : (
        <h3 className="flex flex-row space-x-2 items-center font-medium font-serif justify-center">
          <span>{advFlawsGroup.type}</span>
          <a href={`#type-${advFlawsGroup.type}`}>
            <StyledLinkIcon />
          </a>
        </h3>
      )}
      <AdvFlawSubCategoryLinks
        type={advFlawsGroup.type}
        subtypes={advFlawsGroup.subtypes.map((e) => e.subtype)}
      />
    </header>

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
