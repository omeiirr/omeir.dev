// assets
import Gmail from 'assets/socials/Gmail.svg';
import Linkedin from 'assets/socials/Linkedin.svg';
import Twitter from 'assets/socials/Twitter.svg';
import Github from 'assets/socials/Github.svg';

// libraries
import ReactGA from 'react-ga4';

const commonSvgConfig = {
  height: '28',
};

const contactOptions = [
  {
    icon: <Gmail {...commonSvgConfig} />,
    displayText: 'omeirf.02@gmail.com',
    link: 'mailto:omeirf.02@gmail.com',
    analyticsTag: 'gmail',
  },
  {
    icon: <Linkedin {...commonSvgConfig} className='bg-white rounded-[3px]' />,
    displayText: 'omeir-fawaz',
    link: 'https://linkedin.com/in/omeir-fawaz',
    analyticsTag: 'linkedin',
  },
  {
    icon: <Twitter {...commonSvgConfig} />,
    displayText: 'omeiirr',
    link: 'https://twitter.com/omeiirr',
    analyticsTag: 'twitter',
  },
  {
    icon: <Github {...commonSvgConfig} className='dark:fill-white' />,
    displayText: 'omeiirr',
    link: 'https://github.com/omeiirr',
    analyticsTag: 'gmail',
  },
];
const ContactMe = () => {
  return (
    <div className='mt-5'>
      <h3 className='heading-text'>Get in Touch</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-24 '>
        {contactOptions.map((option, idx) => (
          <a
            key={idx}
            href={option.link}
            target='_blank'
            rel='noreferrer'
            onClick={() =>
              ReactGA.event(`visited_${option.analyticsTag}`, {
                event_category: 'SOCIAL',
              })
            }
            onCopy={() =>
              ReactGA.event(`copied_${option.analyticsTag}`, {
                event_category: 'SOCIAL',
              })
            }
            className='flex items-center gap-4 mb-4 underline md:no-underline md:hover:underline text-md '
          >
            {option.icon}
            <span>{option.displayText}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
