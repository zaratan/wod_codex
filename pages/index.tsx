import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

import {
  loadAdvFlawCategories,
  loadComboDisciplinesRequirements,
  loadDisciplines,
} from '../helpers/dataLoader';
import BigList from '../components/BigList';

export const getStaticProps: GetStaticProps = async () => {
  const disciplines = loadDisciplines();
  const comboRequirements = loadComboDisciplinesRequirements();
  const advFlawsCategories = loadAdvFlawCategories();

  return {
    props: {
      disciplines: disciplines.disciplines,
      thaumaturgies: disciplines.thaumaturgies,
      comboRequirements,
      advFlawsCategories,
    },
  };
};

export default function Home({
  disciplines,
  thaumaturgies,
  comboRequirements,
  advFlawsCategories,
}: {
  disciplines: Array<{ name: string; slug: string }>;
  thaumaturgies: Array<{ name: string; slug: string }>;
  comboRequirements: Array<{ name: string; slug: string }>;
  advFlawsCategories: Array<{
    type: string;
    typeSlug: string;
  }>;
}) {
  return (
    <Layout description="Codex pour les différentes informations de WoD.">
      <h2 className="text-center text-4xl mb-8 font-serif">Disciplines</h2>
      <BigList items={disciplines} path="/powers" />
      <h2 className="mt-8 text-center text-4xl mb-8 font-serif">
        Thaumaturgies
      </h2>
      <BigList items={thaumaturgies} path="/powers/thaumaturgies" />
      <h2 className="mt-8 text-center text-4xl mb-8 font-serif">
        Disciplines Combinées
        <small className="text-center block text-sm">Avec :</small>
      </h2>
      <BigList items={comboRequirements} path="/powers/combo">
        <li>
          <Link href="/powers/combo">
            <a className="mb-2 block">Toutes</a>
          </Link>
        </li>
      </BigList>
      <h2 className="mt-8 text-center text-4xl mb-8 font-serif">
        Avantages et inconvénients
      </h2>
      <BigList
        items={advFlawsCategories.map((e) => ({
          name: `${e.type}`,
          slug: `${e.typeSlug}`,
        }))}
        path="/adv_flaws"
      >
        <li>
          <Link href="/adv_flaws">
            <a className="mb-2 block">Tous</a>
          </Link>
        </li>
      </BigList>
    </Layout>
  );
}
