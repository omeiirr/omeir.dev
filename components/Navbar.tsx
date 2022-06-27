import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// assets
import Sun from 'assets/misc/Sun.svg';
import Moon from 'assets/misc/Moon.svg';
import { useTheme } from 'next-themes';

const NavItem = ({ href, text }: any) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
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

  return (
    <nav className='relative flex items-center justify-between w-full max-w-2xl p-8 pt-6 pb-6 mx-auto text-gray-900 border-gray-200 sm:pl-0 sm:pr-0 dark:border-gray-700 sm:pb-16 bg-gray-50 dark:bg-darkPrimary bg-opacity-60 dark:text-gray-100 '>
      {/* <a href='#skip' className='skip-nav'>
        Skip to content
      </a> */}
      <div className='ml-[-0.60rem]'>
        {/* <MobileMenu /> */}
        <NavItem href='/' text='Home' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/experience' text='Experience' />
        <NavItem href='/resume' text='Resume' />
      </div>

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
