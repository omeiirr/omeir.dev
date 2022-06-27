import Link from 'next/link';

// assets
import Github from 'assets/socials/Github.svg';
import Linkedin from 'assets/socials/Linkedin.svg';
import Twitter from 'assets/socials/Twitter.svg';

const commonSvgConfig = {
  height: '24',
  width: '24',
  fill: '#6b7280',
};
const ExternalLink = ({ href, children }: any) => (
  <a
    className='text-gray-500 transition hover:text-gray-800'
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

      <div className='flex justify-between w-full max-w-2xl pb-16 '>
        <div className='flex flex-col '>
          <Link href='/'>
            <a className='text-gray-500 transition hover:text-gray-800'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='text-gray-500 transition hover:text-gray-800'>
              About
            </a>
          </Link>
        </div>
        <div className='flex flex-col'>
          <ExternalLink href='https://omeiirr.github.io/SDE-Handbook'>
            SDE Handbook
          </ExternalLink>
        </div>
        <div className='flex gap-4'>
          <ExternalLink href='https://twitter.com/omeiirr'>
            <Twitter {...commonSvgConfig} />
          </ExternalLink>
          <ExternalLink href='https://github.com/omeiirr'>
            <Github {...commonSvgConfig} />
          </ExternalLink>
          <ExternalLink href='https://linkedin.com/in/omeir-fawaz'>
            <Linkedin {...commonSvgConfig} />
          </ExternalLink>
        </div>
      </div>
      <p className='text-gray-500'>Built with Next.js, Tailwind and Vercel</p>
    </footer>
  );
};

export default Footer;
