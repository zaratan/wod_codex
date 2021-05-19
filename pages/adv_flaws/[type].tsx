import { GetStaticPaths, GetStaticProps } from 'next';
import AdvFlawCategory from '../../components/AdvFlawCategory';
import Layout from '../../components/Layout';
import { loadAdvFlawCategories, loadAdvFlaws } from '../../helpers/dataLoader';
import { AdvFlawType } from '../../types/AdvFlawTypes';

export const getStaticProps: GetStaticProps<
  {
    advFlaws: {
      type: string;
      subtypes: {
        type: string;
        subtype: string;
        data: Array<AdvFlawType>;
      }[];
    };
  },
  { type: string }
> = async (context) => {
  const advFlawsData = loadAdvFlaws(String(context.params.type))[0];

  return {
    props: {
      advFlaws: advFlawsData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const advFlawCategories = loadAdvFlawCategories();

  return {
    paths: advFlawCategories.map(
      (advFlawCategory) => `/adv_flaws/${advFlawCategory.typeSlug}`
    ),
    fallback: false,
  };
};

const AdvFlawGroupPage = ({
  advFlaws,
}: {
  advFlaws: {
    type: string;
    subtypes: {
      type: string;
      subtype: string;
      data: Array<AdvFlawType>;
    }[];
  };
}) => (
  <Layout
    title={`Avantages et Inconvénients: ${advFlaws.type}`}
    description={`Tous les avantages et inconvénients de type ${advFlaws.type}`}
  >
    <AdvFlawCategory advFlawsGroup={advFlaws} withoutTitle />
  </Layout>
);

export default AdvFlawGroupPage;
