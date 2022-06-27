// components
import Layout from 'components/Layout';
import Introduction from 'components/HomePage/Introduction';
import Skills from 'components/HomePage/Skills';
import Projects from 'components/HomePage/Projects';

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Home;
