import Link from 'next/link';

// assets
import Github from 'assets/socials/Github.svg';
import Linkedin from 'assets/socials/Linkedin.svg';
import Twitter from 'assets/socials/Twitter.svg';

const commonSvgConfig = {
  height: '24',
  width: '24',
  // fill: '#6b7280',
};

const svgStyles =
  'transition 500 fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300';

const ExternalLink = ({ href, children }: any) => (
  <a
    className='font-semibold text-gray-500 transition-all duration-200 hover:underline'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className='flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8'>
      <hr className='w-full mb-8 border-gray-200 border-1 dark:border-gray-800' />

      <div className='flex justify-between w-full max-w-2xl pb-8 '>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <Link href='/'>
            <a className='text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300'>
              Home
            </a>
          </Link>
          <Link href='/projects'>
            <a className='text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300'>
              Projects
            </a>
          </Link>
          <Link href='/experience'>
            <a className='text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300'>
              Experience
            </a>
          </Link>
        </div>

        <div className='flex gap-4'>
          <ExternalLink href='https://twitter.com/omeiirr'>
            <Twitter {...commonSvgConfig} className={svgStyles} />
          </ExternalLink>
          <ExternalLink href='https://github.com/omeiirr'>
            <Github {...commonSvgConfig} className={svgStyles} />
          </ExternalLink>
          <ExternalLink href='https://linkedin.com/in/omeir-fawaz'>
            <Linkedin {...commonSvgConfig} className={svgStyles} />
          </ExternalLink>
        </div>
      </div>

      <p className='text-gray-500'>
        Built with{' '}
        <ExternalLink href='https://nextjs.org'>Next.js</ExternalLink>,{' '}
        <ExternalLink href='https://tailwindcss.com'>Tailwind</ExternalLink>,
        and <ExternalLink href='https://vercel.com'>Vercel</ExternalLink>
      </p>

      <p className='text-gray-500'>
        Design inspired by{' '}
        <ExternalLink href='https://leerob.io'>Lee Robinson</ExternalLink>{' '}
      </p>
    </footer>
  );
};

export default Footer;
