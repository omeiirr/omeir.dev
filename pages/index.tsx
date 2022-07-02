// components
import Layout from 'components/Layout';
import Introduction from 'components/HomePage/Introduction';
import Skills from 'components/HomePage/Skills';
import FeaturedProjects from 'components/HomePage/FeaturedProjects';
import ContactMe from 'components/HomePage/ContactMe';

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <Skills />
      <FeaturedProjects />
      <ContactMe />
    </Layout>
  );
};

export default Home;
