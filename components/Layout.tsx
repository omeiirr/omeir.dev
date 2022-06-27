import Head from 'next/head';

// components
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const Layout = ({ children }: any) => {
  return (
    <div className=' bg-gray-50 dark:bg-gray-900'>
      <Head>
        <title>Omeir Fawaz - Developer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-center px-0'>
        <nav>
          <Navbar />
        </nav>
      </div>
      <main
        id='skip'
        className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900'
      >
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
