import { LinkIcon } from '@heroicons/react/outline';
import { GetStaticProps } from 'next';
import React from 'react';
import AdvFlaw from '../components/AdvFlaw';
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
    {advFlawsGroups.map((advFlawsGroup) => (
      <section id={`type-${advFlawsGroup.type}`}>
        <header className="text-3xl py-5">
          <h3 className="flex flex-row space-x-2 items-center font-medium font-serif justify-center">
            <span>{advFlawsGroup.type}</span>
            <a href={`#type-${advFlawsGroup.type}`}>
              <LinkIcon className="w-5 h-5 text-blue-700 dark:text-blue-400 opacity-75 hover:opacity-100" />
            </a>
          </h3>
        </header>
        <ul>
          {advFlawsGroup.subtypes.map((advFlawsSubGroup) => (
            <section
              id={`type-${advFlawsSubGroup.type}-${advFlawsSubGroup.subtype}`}
            >
              <header className="text-3xl py-5">
                <h4 className="flex flex-row space-x-2 items-center font-medium font-serif">
                  <span>{advFlawsSubGroup.subtype}</span>
                  <a
                    href={`#type-${advFlawsSubGroup.type}-${advFlawsSubGroup.subtype}`}
                  >
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
          ))}
        </ul>
      </section>
    ))}
  </Layout>
);

export default AdvFlawPage;
