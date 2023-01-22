// assets
import Github from 'assets/socials/Github.svg';
import JavaScript from 'assets/tech-icons/JavaScript.svg';
import React from 'assets/tech-icons/React.svg';
import Firebase from 'assets/tech-icons/Firebase.svg';
import NextJS from 'assets/tech-icons/NextJS.svg';
import TailwindCSS from 'assets/tech-icons/TailwindCSS.svg';
import Golang from 'assets/tech-icons/Golang.svg';
import Node from 'assets/tech-icons/Node.svg';
import Puppeteer from 'assets/tech-icons/Puppeteer.svg';
import ExternalLink from 'assets/misc/ExternalLink.svg';

// libraries
import ReactGA from 'react-ga4';

const commonSvgConfig = {
  width: '36px',
  height: '36px',
};

type ProjectCardProps = {
  title: string;
  img: string;
  description: string;
  techUsed: string[];
  demoLink: string;
  githubLink: string;
};

const ProjectCard = ({
  title,
  img,
  description,
  techUsed,
  demoLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className='flex justify-center mt-2 mb-6'>
      <div className='flex flex-col dark:border-gray-600 rounded-lg shadow-lg  border-[1px] md:shadow-md md:flex-row '>
        {img && (
          <img
            className='object-cover object-top w-full h-40 rounded-t-lg md:h-auto md:w-80 md:rounded-none md:rounded-l-lg'
            src={img}
            alt={title}
          />
        )}
        <div className='flex flex-col justify-start p-6 mb-2'>
          <div className='flex items-center justify-between gap-4 mb-4'>
            <h5 className='text-2xl font-medium text-black dark:text-white'>
              {title}
            </h5>

            <div className='flex gap-4 '>
              <a
                href={githubLink}
                target='_blank'
                rel='noreferrer'
                onClick={() => {
                  ReactGA.event(`gh_${title.replaceAll(' ', '')}`, {
                    event_category: 'PROJECTS',
                  });
                }}
              >
                <Github height='22' className='dark:fill-white' />
              </a>
              <a
                href={demoLink}
                target='_blank'
                rel='noreferrer'
                onClick={() => {
                  ReactGA.event(`demo_${title.replaceAll(' ', '')}`, {
                    event_category: 'PROJECTS',
                  });
                }}
              >
                <ExternalLink height='20' className='dark:fill-white' />
              </a>
            </div>
          </div>
          <p className='mb-6 text-base text-justify text-black dark:text-gray-200'>
            {description}
          </p>
          <div className='flex gap-4'>
            {techUsed.includes('nextjs') && (
              <NextJS {...commonSvgConfig} className='dark:fill-white' />
            )}
            {techUsed.includes('tailwind') && (
              <TailwindCSS {...commonSvgConfig} />
            )}
            {techUsed.includes('golang') && <Golang {...commonSvgConfig} />}
            {techUsed.includes('node') && <Node {...commonSvgConfig} />}
            {techUsed.includes('react') && <React {...commonSvgConfig} />}
            {techUsed.includes('firebase') && <Firebase {...commonSvgConfig} />}
            {techUsed.includes('javascript') && (
              <JavaScript {...commonSvgConfig} />
            )}
            {techUsed.includes('puppeteer') && (
              <Puppeteer {...commonSvgConfig} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
