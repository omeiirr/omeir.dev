// assets
import Laptop from 'assets/misc/Laptop.svg';

// lib
import { experienceData } from 'lib/experienceData';

const Timeline = () => {
  return (
    <div className='px-5 mt-4'>
      <ol className='relative border-l-2 dark:border-blue-200 '>
        {experienceData.map((experience, idx) => (
          <li className='mb-10 ml-8' key={idx}>
            <span className='absolute grid items-center w-6 h-6 bg-blue-200 rounded-full ring-blue-200 -left-3 ring-8 '>
              <Laptop />
            </span>
            <span className='mb-1 text-lg text-gray-900 dark:text-white'>
              {experience.position} at{' '}
            </span>
            {experience.orgLink ? (
              <a
                href={experience.orgLink && experience.orgLink}
                target='_blank'
                rel='noreferrer'
                className='text-lg font-semibold underline'
              >
                {experience.orgName}
              </a>
            ) : (
              <span className='text-lg font-semibold'>
                {experience.orgName}
              </span>
            )}
            <p className='block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500'>
              {experience.from} - {experience.to}, {experience.location}
            </p>

            <ul className='ml-4 list-disc'>
              {experience.workDone.map((item, idx) => (
                <li
                  key={idx}
                  className='text-base font-normal text-gray-500 list-outside  dark:text-gray-400'
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
