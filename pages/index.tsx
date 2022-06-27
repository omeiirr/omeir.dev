import Image from 'next/image';

// components
import Layout from 'components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700'>
        <div className='flex flex-col-reverse items-start sm:flex-row '>
          <div className='flex flex-col pr-8'>
            <h1 className='mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
              Omeir Fawaz
            </h1>
            <h2 className='mb-4 text-xl text-gray-700 dark:text-gray-200'>
              Web Developer
            </h2>
            <p className='mb-16 text-gray-600 dark:text-gray-400'>
              Building web apps with elegant &amp; accessible UI, and secure
              &amp; scalable backends.
            </p>
          </div>
          <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
            <Image
              alt='Omeir Fawaz'
              height={176}
              width={176}
              src='https://avatars.githubusercontent.com/u/54888682?v=4'
              sizes='30vw'
              priority
              className='rounded-2xl filter '
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
