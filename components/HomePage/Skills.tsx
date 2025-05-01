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

import Azure from 'assets/tech-icons/Azure.svg';
import PowerAutomate from 'assets/tech-icons/PowerAutomate.svg';
import PowerBi from 'assets/tech-icons/PowerBi.svg';
import Purview from 'assets/tech-icons/Purview.svg';
import Python from 'assets/tech-icons/Python.svg';
import SharePoint from 'assets/tech-icons/SharePoint.svg';

const commonSvgConfig = {
  width: '52px',
  height: '52px',
};

const Skills = () => {
  return (
    <>
      <h3 className='heading-text'>Skills</h3>
      <h3 className='subheading-text'>Data</h3>
      <div className='flex flex-wrap items-center justify-start gap-8 mb-6 '>
        <PowerBi {...commonSvgConfig} />
        <SharePoint {...commonSvgConfig} />
        <Purview {...commonSvgConfig} />
        <PowerAutomate {...commonSvgConfig} />
        <Python {...commonSvgConfig} />
        <Azure {...commonSvgConfig} />
      </div>


      <h3 className='subheading-text'>Languages</h3>
      <div className='flex flex-wrap items-center justify-start gap-8 mb-6 '>
        <JavaScript {...commonSvgConfig} />
        <TypeScript {...commonSvgConfig} />
        <Golang {...commonSvgConfig} />
      </div>

      <h3 className='subheading-text'>Front-end</h3>
      <div className='flex flex-wrap items-center justify-start gap-8 mb-6 '>
        <NextJS {...commonSvgConfig} className='dark:fill-white' />
        <React {...commonSvgConfig} />
        <TailwindCSS {...commonSvgConfig} />
        <Sass {...commonSvgConfig} />
      </div>

      <h3 className='subheading-text'>Back-end and DevOps</h3>
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
