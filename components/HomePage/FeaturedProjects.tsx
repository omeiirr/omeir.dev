import Link from 'next/link';

// components
import ProjectCard from 'components/HomePage/ProjectCard';

// lib
import { allProjects } from 'lib/projectsData';

// assets
import RightArrow from 'assets/misc/RightArrow.svg';

const FeaturedProjects = () => {
  return (
    <>
      <h3 className='heading-text'>Featured Projects</h3>

      {allProjects.slice(0,3).map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.title}
          img={project.img}
          description={project.description}
          techUsed={project.techUsed}
          demoLink={project.demoLink}
          githubLink={project.githubLink}
        />
      ))}

      <Link href='/projects'>
        <p className='flex items-center gap-2 text-base font-semibold cursor-pointer'>
          See all projects{' '}
          <RightArrow className='w-4 stroke-1 dark:fill-white' />
        </p>
      </Link>
    </>
  );
};

export default FeaturedProjects;
