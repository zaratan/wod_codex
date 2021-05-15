import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import {
  loadDiscipline,
  loadDisciplines,
  PowersType,
} from '../../helpers/dataLoader';
import { DisciplineType } from '../../types/DisciplineTypes';
import LevelLinks from '../../components/LevelLinks';
import LevelPowers from '../../components/LevelPowers';

export const getStaticProps: GetStaticProps<
  {
    disciplinePowers: Array<{ level: number; powers: Array<DisciplineType> }>;
    disciplineLevels: Array<number>;
    disciplineName: string;
    disciplineSlug: string;
  },
  { discipline: string }
> = async (context) => {
  const disciplineData = loadDiscipline(String(context.params.discipline));

  console.log(disciplineData.levels);

  return {
    props: {
      disciplinePowers: disciplineData.powers,
      disciplineLevels: disciplineData.levels,
      disciplineName: disciplineData.name,
      disciplineSlug: disciplineData.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const disciplines = loadDisciplines();

  return {
    paths: disciplines.disciplines.map((disc) => `/powers/${disc.slug}`),
    fallback: false,
  };
};

const DisciplinePage = ({
  disciplinePowers,
  disciplineName,
  disciplineLevels,
}: {
  disciplineName: string;
  disciplinePowers: PowersType;
  disciplineLevels: Array<number>;
}) => {
  console.log({ disciplinePowers });
  return (
    <Layout
      title={disciplineName}
      description={`Tous les niveaux de ${disciplineName}`}
    >
      <LevelLinks levels={disciplineLevels} />
      {disciplinePowers.map((levelPowers) => (
        <LevelPowers levelPowers={levelPowers} />
      ))}
    </Layout>
  );
};

export default DisciplinePage;
