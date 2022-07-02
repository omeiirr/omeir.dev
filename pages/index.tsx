// components
import Layout from 'components/Layout';
import Introduction from 'components/HomePage/Introduction';
import Skills from 'components/HomePage/Skills';
import FeaturedProjects from 'components/HomePage/FeaturedProjects';

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <Skills />
      <FeaturedProjects />
    </Layout>
  );
};

export default Home;
