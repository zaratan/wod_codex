import { GetStaticProps } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import orderBy from 'lodash/orderBy';
import Layout from '../components/Layout';
import { DisciplineType } from '../types/DisciplineTypes';
import classes from '../styles/index.module.scss';
import { ComboPowerType } from '../types/ComboTypes';

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const disciplinePath = path.join(dataDirectory, 'disciplines.json');
  const disciplinesJson = fs.readFileSync(disciplinePath, 'utf8');
  const disciplines: Array<DisciplineType> = JSON.parse(disciplinesJson);
  const disciplineComboPath = path.join(
    dataDirectory,
    'disciplines_combo.json'
  );
  const disciplinesComboJson = fs.readFileSync(disciplineComboPath, 'utf8');
  const disciplinesCombo: Array<ComboPowerType> =
    JSON.parse(disciplinesComboJson);

  const disciplinesReworked = disciplines.reduce<{
    disciplines: Record<string, { name: string; slug: string }>;
    thaumaturgies: Record<string, { name: string; slug: string }>;
  }>(
    (result, discipline) => {
      if (discipline.subname === '' && discipline.level !== 0) {
        if (!result.disciplines[discipline.name]) {
          result.disciplines[discipline.name] = {
            name: discipline.name,
            slug: slugify(discipline.name).toLowerCase(),
          };
        }
      } else if (
        discipline.subname !== '' &&
        !result.thaumaturgies[discipline.name]
      ) {
        result.thaumaturgies[discipline.name] = {
          name: discipline.name,
          slug: slugify(discipline.name).toLowerCase(),
        };
      }
      return result;
    },
    { disciplines: {}, thaumaturgies: {} }
  );

  const comboRequirements = Array.from(
    new Set(
      disciplinesCombo
        .map((e) => e.requirements)
        .flat()
        .map((e) => e.or)
        .flat()
        .map((e) => e.name)
    )
  )
    .sort()
    .map((discName) => ({
      name: discName,
      slug: slugify(discName).toLowerCase(),
    }));

  return {
    props: {
      disciplines: orderBy(Object.values(disciplinesReworked.disciplines), [
        'name',
      ]),
      thaumaturgies: orderBy(Object.values(disciplinesReworked.thaumaturgies), [
        'name',
      ]),
      comboRequirements,
    },
  };
};

export default function Home({
  disciplines,
  thaumaturgies,
  comboRequirements,
}: {
  disciplines: Array<{ name: string; slug: string }>;
  thaumaturgies: Array<{ name: string; slug: string }>;
  comboRequirements: Array<{ name: string; slug: string }>;
}) {
  return (
    <Layout description="Codex pour les différentes informations de WoD.">
      <h2 className="text-center text-4xl mb-8 font-serif">Disciplines</h2>
      <ul className={classes.list}>
        {disciplines.map((discipline) => (
          <Link href={`/powers/${discipline.slug}`} key={discipline.slug}>
            <a className="mb-2 block">
              <li>{discipline.name}</li>
            </a>
          </Link>
        ))}
      </ul>
      <h2 className="mt-8 text-center text-4xl mb-8 font-serif">
        Thaumaturgies
      </h2>
      <ul className={classes.list}>
        {thaumaturgies.map((discipline) => (
          <li key={discipline.slug}>
            <Link
              href={`/powers/thuamaturgy/${discipline.slug}`}
              key={discipline.slug}
            >
              <a className="mb-2 block">{discipline.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-8 text-center text-4xl mb-8 font-serif">
        Disciplines Combinées
        <small className="text-center block text-sm">Avec :</small>
      </h2>
      <ul className={classes.list}>
        <li>
          <Link href="/combo">
            <a className="mb-2 block">Toutes</a>
          </Link>
        </li>
        {comboRequirements.map((discipline) => (
          <li key={discipline.slug}>
            <Link href={`/combo/${discipline.slug}`}>
              <a className="mb-2 block">{discipline.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
