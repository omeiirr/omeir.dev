import Head from 'next/head';

// components
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const Layout = ({ children }: any) => {
  return (
    <div className=' bg-gray-50 dark:bg-darkPrimary'>
      <Head>
        <title>Omeir Fawaz - Developer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='sticky top-0 z-10 flex flex-col justify-center px-0'>
        <Navbar />
      </nav>
      <main
        id='skip'
        className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-darkPrimary'
      >
        <div className='flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700'>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
