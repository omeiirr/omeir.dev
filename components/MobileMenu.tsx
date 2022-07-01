import Link from 'next/link';
import { useEffect, useState } from 'react';
import useDelayedRender from 'use-delayed-render';

// styles
import styles from 'styles/mobile-menu.module.css';

// assets
import BurgerMenu from 'assets/misc/BurgerMenu.svg';
import Cross from 'assets/misc/Cross.svg';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const burgerNavigationOptions = [
    {
      link: '/',
      title: 'Home',
      transitionDelay: '150ms',
    },
    {
      link: '/projects',
      title: 'Projects',
      transitionDelay: '175ms',
    },
    {
      link: '/experience',
      title: 'Experience',
      transitionDelay: '200ms',
    },
    {
      link: '/resume',
      title: 'Resume',
      transitionDelay: '250ms',
    },
  ];
  return (
    <>
      <button
        className={`${styles.burger} visible md:hidden`}
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}
      >
        <BurgerMenu
          data-hide={isMenuOpen}
          className='absolute w-5 h-5 text-gray-900 dark:text-gray-100'
        />
        <Cross
          data-hide={!isMenuOpen}
          className='absolute w-5 h-5 text-gray-900 dark:text-gray-100'
        />
      </button>
      {isMenuMounted && (
        <ul
          className={`${
            styles.menu
          } absolute flex flex-col bg-gray-50 dark:bg-darkPrimary ${
            isMenuRendered && styles.menuRendered
          }`}
        >
          {burgerNavigationOptions.map((option, idx) => (
            <li
              key={idx}
              className='font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100'
              style={{ transitionDelay: option.transitionDelay }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href={option.link}>
                <a className='flex w-auto pb-6'>{option.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileMenu;
