import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// libraries
import { useTheme } from 'next-themes';
import ReactGA from 'react-ga4';

// components
import MobileMenu from 'components/MobileMenu';

// assets
import Sun from 'assets/misc/Sun.svg';
import Moon from 'assets/misc/Moon.svg';
import ExternalLink from 'assets/misc/ExternalLink.svg';

// lib
import { blogLink, resumeLink } from 'lib/externalLinks';

interface NavItemProps {
  href: string;
  text: string;
}

const externalLinkStyling = `hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ml-2 font-normal text-gray-600 dark:text-gray-400`;

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ml-2 ${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800'
            : 'font-normal text-gray-600 dark:text-gray-400'
        }`}
      >
        <span className='capsize'>{text}</span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) setShowName(true);
      else setShowName(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='relative flex items-center justify-between w-full max-w-2xl px-8 py-4 mx-auto mb-8 text-gray-900 border-b-2 border-gray-200 sm:pl-0 sm:pr-0 dark:border-gray-700 sm:py-6 bg-gray-50 dark:bg-darkPrimary dark:text-gray-100 '>
      <div className='ml-[-0.60rem]'>
        <MobileMenu />
        <NavItem href='/' text='Home' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/experience' text='Experience' />

        <a
          href={blogLink}
          target='_blank'
          rel='noreferrer'
          className={externalLinkStyling}
          onClick={() =>
            ReactGA.event('blogOpened__web', {
              event_category: 'APP',
            })
          }
        >
          <span className='flex items-center gap-1 capsize'>
            Blog
            {/* <ExternalLink
              height={14}
              className='fill-gray-600 dark:fill-gray-400'
            /> */}
          </span>
        </a>

        <a
          href={resumeLink}
          target='_blank'
          rel='noreferrer'
          className={externalLinkStyling}
          onClick={() =>
            ReactGA.event('resumeOpened__web', {
              event_category: 'APP',
            })
          }
        >
          <span className='flex items-center gap-1 capsize'>
            Resume
            <ExternalLink
              height={14}
              className='fill-gray-600 dark:fill-gray-400'
            />
          </span>
        </a>
      </div>

      <h3
        className={`text-lg font-medium sm:hidden transition-opacity duration-150  ${
          !showName ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Omeir Fawaz
      </h3>

      <button
        aria-label='Toggle Dark Mode'
        type='button'
        className='flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? (
          <Sun className='text-gray-800 dark:text-gray-200' />
        ) : (
          <Moon />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
