import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import PowerList from '../../components/PowerList';
import { loadComboDisciplines } from '../../helpers/dataLoader';
import { ComboPowerType } from '../../types/ComboTypes';

export const getStaticProps: GetStaticProps<{
  disciplinePowers: Array<ComboPowerType>;
}> = async () => {
  const disciplineData = loadComboDisciplines();

  return {
    props: {
      disciplinePowers: disciplineData,
    },
  };
};

const combo = ({
  disciplinePowers,
}: {
  disciplinePowers: Array<ComboPowerType>;
}) => (
  <Layout
    title="Disciplines combinées"
    description="Index de toutes les disciplines combinées"
  >
    <PowerList powers={disciplinePowers} />
  </Layout>
);

export default combo;
