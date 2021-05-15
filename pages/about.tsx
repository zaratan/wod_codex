import Layout from '../components/Layout';

const About = () => (
  <Layout title="À propos" description="Quelques lignes sur le projet.">
    <p className="py-2 text-lg">
      Ce site est une tentative de sauvegarder et de mettre a disposition sous
      une forme plus récente les données des{' '}
      <a
        href="http://bindusara.free.fr"
        className="text-blue-700 dark:text-blue-400 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors ease-in-out duration-200"
      >
        Litanies de Sang
      </a>
      .
    </p>
    <p className="py-2 text-lg">
      Les contributions sont les bienvenues à cette addresse:{' '}
      <a
        href="https://github.com/zaratan/wod_codex"
        className="text-blue-700 dark:text-blue-400 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors ease-in-out duration-200"
      >
        https://github.com/zaratan/wod_codex
      </a>
      .
    </p>
    <p className="py-2 text-lg">
      Les informations de ce site concernent la gamme de Jeu de Role du Monde de
      Ténèbres, copyright de{' '}
      <a
        href="http://www.white-wolf.com"
        className="text-blue-700 dark:text-blue-400 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors ease-in-out duration-200"
      >
        White Wolf Publishing Inc.
      </a>{' '}
      © 2002 édité en version Française par Hexagonal © 2002.
    </p>
  </Layout>
);

export default About;
