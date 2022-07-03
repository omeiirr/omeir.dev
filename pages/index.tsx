import Head from 'next/head';

// components
import Layout from 'components/Layout';
import Introduction from 'components/HomePage/Introduction';
import Skills from 'components/HomePage/Skills';
import FeaturedProjects from 'components/HomePage/FeaturedProjects';
import ContactMe from 'components/HomePage/ContactMe';

const Home = () => {
  return (
    <>
      <Head>
        <title>Omeir Fawaz - Developer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Introduction />
        <Skills />
        <FeaturedProjects />
        <ContactMe />
      </Layout>
    </>
  );
};

export default Home;
