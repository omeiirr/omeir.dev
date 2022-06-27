// components
import Layout from 'components/Layout';
import Introduction from 'components/HomePage/Introduction';
import Skills from 'components/HomePage/Skills';
import Projects from 'components/HomePage/Projects';

const Home = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700'>
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
