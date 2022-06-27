// assets
import React from 'assets/tech-icons/React.svg';
import Node from 'assets/tech-icons/Node.svg';
import Golang from 'assets/tech-icons/Golang.svg';
import Aws from 'assets/tech-icons/Aws.svg';
import Docker from 'assets/tech-icons/Docker.svg';
import NextJS from 'assets/tech-icons/NextJS.svg';
import TailwindCSS from 'assets/tech-icons/TailwindCSS.svg';
import Sass from 'assets/tech-icons/Sass.svg';
import MySQL from 'assets/tech-icons/MySQL.svg';
import JavaScript from 'assets/tech-icons/JavaScript.svg';
import TypeScript from 'assets/tech-icons/TypeScript.svg';

const commonSvgConfig = {
  width: '52px',
  height: '52px',
};

const heading =
  'mb-4 mt-4  text-2xl font-bold text-black md:text-3xl dark:text-white';

const subheading = 'mb-4 text-xl text-gray-700 dark:text-gray-200';

const Skills = () => {
  return (
    <>
      <h3 className={heading}>Skills</h3>
      <h3 className={subheading}>Languages</h3>
      <div className='flex flex-wrap items-center justify-start gap-8 mb-6 '>
        <JavaScript {...commonSvgConfig} />
        <TypeScript {...commonSvgConfig} />
        <Golang {...commonSvgConfig} />
      </div>

      <h3 className={subheading}>Front-end</h3>
      <div className='flex flex-wrap items-center justify-start gap-8 mb-6 '>
        <NextJS {...commonSvgConfig} className='dark:fill-white' />
        <React {...commonSvgConfig} />
        <TailwindCSS {...commonSvgConfig} />
        <Sass {...commonSvgConfig} />
      </div>

      <h3 className={subheading}>Back-end and DevOps</h3>
      <div className='flex flex-wrap items-center justify-start gap-8 mb-6 '>
        <Node {...commonSvgConfig} />
        <Aws {...commonSvgConfig} />
        <Docker {...commonSvgConfig} />
        <MySQL {...commonSvgConfig} />
      </div>
    </>
  );
};

export default Skills;
