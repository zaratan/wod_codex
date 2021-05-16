import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import BigList from '../../../components/BigList';
import Layout from '../../../components/Layout';
import PowerList from '../../../components/PowerList';
import {
  loadDisciplines,
  loadThaumaturgyPaths,
} from '../../../helpers/dataLoader';
import { DisciplineType } from '../../../types/DisciplineTypes';

export const getStaticProps: GetStaticProps<
  {
    paths: Array<{ name: string; slug: string }>;
    powers: Array<DisciplineType>;
    name: string;
    slug: string;
  },
  { thaumaturgy: string }
> = async (context) => {
  const thaumaturgyPaths = loadThaumaturgyPaths(
    String(context.params.thaumaturgy)
  );

  return {
    props: thaumaturgyPaths,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const disciplines = loadDisciplines();

  return {
    paths: disciplines.thaumaturgies.map(
      (disc) => `/powers/thaumaturgies/${disc.slug}`
    ),
    fallback: false,
  };
};

const ThaumaturgyPage = ({
  paths,
  powers,
  name,
  slug,
}: {
  paths: Array<{ name: string; slug: string }>;
  powers: Array<DisciplineType>;
  name: string;
  slug: string;
}) => {
  console.log(powers);

  return (
    <Layout description={`Toutes les voies de ${name}`} title={name}>
      <PowerList powers={powers} className="pb-6" />
      <BigList items={paths} path={`/thaumaturgies/${slug}`} />
    </Layout>
  );
};

export default ThaumaturgyPage;
