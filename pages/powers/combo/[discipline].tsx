import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import slugify from 'slugify';
import Layout from '../../../components/Layout';
import PowerList from '../../../components/PowerList';
import {
  filteredLoadComboDisciplines,
  loadComboDisciplinesRequirements,
} from '../../../helpers/dataLoader';
import { ComboPowerType } from '../../../types/ComboTypes';

export const getStaticPaths: GetStaticPaths = async () => {
  const disciplinesReqs = loadComboDisciplinesRequirements();

  return {
    paths: disciplinesReqs.map((req) => `/powers/combo/${req.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  {
    disciplinePowers: Array<ComboPowerType>;
  },
  {
    discipline: string;
  }
> = async (context) => {
  const disciplineData = filteredLoadComboDisciplines(
    context.params.discipline
  );

  return {
    props: {
      disciplinePowers: disciplineData,
      name: disciplineData[0].requirements
        .flatMap((req) => req.or)
        .find(
          (req) => slugify(req.name).toLowerCase() === context.params.discipline
        ).name,
    },
  };
};

const ComboDiscipline = ({
  disciplinePowers,
  name,
}: {
  disciplinePowers: Array<ComboPowerType>;
  name: string;
}) => (
  <Layout
    title={`Disciplines combinées - ${name}`}
    description="Index de toutes les disciplines combinées"
  >
    <PowerList powers={disciplinePowers} />
  </Layout>
);

export default ComboDiscipline;
