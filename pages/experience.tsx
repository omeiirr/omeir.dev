import Head from 'next/head';

// components
import Layout from 'components/Layout';
import Timeline from 'components/Timeline';

const Experience = () => {
  return (
    <>
      <Head>
        <title> Omeir Fawaz - Experience </title>
      </Head>
      <Layout>
        <h3 className='heading-text'>Experience</h3>

        <p className='text-lg subheading-text'>
          A brief summary of the places I've worked at as a developer
        </p>

        <Timeline />
      </Layout>
    </>
  );
};

export default Experience;
