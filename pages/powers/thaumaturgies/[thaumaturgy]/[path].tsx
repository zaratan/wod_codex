import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../../../components/Layout';
import LevelLinks from '../../../../components/LevelLinks';
import LevelPowers from '../../../../components/LevelPowers';
import {
  loadDisciplines,
  loadThaumaturgyPath,
} from '../../../../helpers/dataLoader';
import { DisciplineType } from '../../../../types/DisciplineTypes';

export const getStaticProps: GetStaticProps<
  {
    powers: Array<{ level: number; powers: Array<DisciplineType> }>;
    name: string;
    levels: number[];
    subname: string;
    thaumaturgySlug: string;
    pathSlug: string;
  },
  { thaumaturgy: string; path: string }
> = async (context) => {
  const thaumaturgyPaths = loadThaumaturgyPath(
    String(context.params.thaumaturgy),
    String(context.params.path)
  );

  return {
    props: thaumaturgyPaths,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const disciplines = loadDisciplines();

  return {
    paths: disciplines.thaumaturgies.flatMap((disc) =>
      disc.paths.map(
        (path) => `/powers/thaumaturgies/${disc.slug}/${path.slug}`
      )
    ),
    fallback: false,
  };
};

const PathPage = ({
  powers,
  name,
  subname,
  levels,
}: {
  powers: Array<{ level: number; powers: Array<DisciplineType> }>;
  name: string;
  levels: number[];
  subname: string;
}) => (
  <Layout title={`${name} : ${subname}`} description="">
    <LevelLinks levels={levels} />
    {powers.map((levelPowers) => (
      <LevelPowers
        key={`level-${levelPowers.level}`}
        levelPowers={levelPowers}
      />
    ))}
  </Layout>
);

export default PathPage;
