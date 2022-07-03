import Head from 'next/head';

// components
import Layout from 'components/Layout';
import ProjectCard from 'components/HomePage/ProjectCard';

// lib
import { allProjects } from 'lib/projectsData';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Omeir Fawaz - Projects</title>
      </Head>
      <Layout>
        <h3 className='heading-text'>Projects</h3>

        <p className='text-lg subheading-text'>
          These are some of my projects. <br /> The source code and a link to
          the demo is provided for each project.
        </p>

        {allProjects.map((project, idx) => (
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
      </Layout>
    </>
  );
};

export default Projects;
