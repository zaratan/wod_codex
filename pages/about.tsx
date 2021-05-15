import Layout from '../components/Layout';

const About = () => (
  <Layout title="À propos" description="Quelques lignes sur le projet.">
    <p className="py-2 text-lg">
      Ce site est une tentative de sauvegarder et de mettre a disposition sous
      une forme plus récente les données des
      <a className="pl-1" href="http://bindusara.free.fr">
        Litanies de Sang
      </a>
      .
    </p>
    <p className="py-2 text-lg">
      Les contributions sont les bienvenues à cette addresse:
      <a className="pl-1" href="https://github.com/zaratan/wod_codex">
        https://github.com/zaratan/wod_codex
      </a>
      .
    </p>
    <p className="py-2 text-lg">
      Les informations de ce site concernent la gamme de Jeu de Role du Monde de
      Ténèbres, copyright de
      <a className="pl-1" href="http://www.white-wolf.com">
        White Wolf Publishing Inc.
      </a>{' '}
      © 2002 édité en version Française par Hexagonal © 2002.
    </p>
  </Layout>
);

export default About;
