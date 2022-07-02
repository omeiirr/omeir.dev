import Link from 'next/link';

// components
import ProjectCard from 'components/HomePage/ProjectCard';

// lib
import { mainProjects } from 'lib/projectsData';

const FeaturedProjects = () => {
  return (
    <>
      <h3 className='heading-text'>Featured Projects</h3>

      {mainProjects.map((project, idx) => (
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
        <p className='text-lg cursor-pointer subheading-text '>
          See all projects
        </p>
      </Link>
    </>
  );
};

export default FeaturedProjects;
