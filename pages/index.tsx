import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import classes from '../styles/index.module.scss';
import {
  loadComboDisciplinesRequirements,
  loadDisciplines,
} from '../helpers/dataLoader';

export const getStaticProps: GetStaticProps = async () => {
  const disciplines = loadDisciplines();
  const comboRequirements = loadComboDisciplinesRequirements();

  return {
    props: {
      disciplines: disciplines.disciplines,
      thaumaturgies: disciplines.thaumaturgies,
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
              href={`/powers/thaumaturgy/${discipline.slug}`}
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
