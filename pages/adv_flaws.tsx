import { LinkIcon } from '@heroicons/react/outline';
import { GetStaticProps } from 'next';
import React from 'react';
import AdvFlawCategory from '../components/AdvFlawCategory';
import AdvFlawCategoryLinks from '../components/AdvFlawCategoryLinks';
import Layout from '../components/Layout';
import { loadAdvFlaws } from '../helpers/dataLoader';
import { AdvFlawType } from '../types/AdvFlawTypes';

export const getStaticProps: GetStaticProps<{
  advFlawsGroups: Array<{
    type: string;
    subtypes: Array<{ type: string; subtype: string; data: AdvFlawType[] }>;
  }>;
}> = async () => {
  const advFlawsData = loadAdvFlaws();

  return {
    props: {
      advFlawsGroups: advFlawsData,
    },
  };
};

const AdvFlawPage = ({
  advFlawsGroups,
}: {
  advFlawsGroups: Array<{
    type: string;
    subtypes: Array<{ type: string; subtype: string; data: AdvFlawType[] }>;
  }>;
}) => (
  <Layout
    title="Avantages et inconvénients"
    description="Une liste de tous les avantages et inconvénients pour WoD"
  >
    <AdvFlawCategoryLinks types={advFlawsGroups.map((e) => e.type)} />
    {advFlawsGroups.map((advFlawsGroup) => (
      <AdvFlawCategory
        advFlawsGroup={advFlawsGroup}
        key={`type-${advFlawsGroup.type}`}
      />
    ))}
  </Layout>
);

export default AdvFlawPage;
