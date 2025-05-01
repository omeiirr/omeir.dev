import Image from 'next/image';

const Introduction = () => {
  return (
    <div className='flex flex-col-reverse items-start sm:flex-row '>
      <div className='flex flex-col pr-8'>
        <h1 className='mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          Omeir Fawaz
        </h1>
        <h2 className='mb-4 text-xl text-gray-700 dark:text-gray-200'>
          Data Engineer @ <a href="https://www.shell.com/" >Shell</a>
        </h2>
        <p className='mb-10 text-lg text-gray-600 dark:text-gray-400'>
          Associate Data Engineer at Shell, specializing in enterprise information management.
          Hands-on experience in Power BI, Microsoft Purview, SharePoint, and the Microsoft Power Platform.
          <br />
          I enjoy building with React/Tailwind and Golang.
        </p>
      </div>
      <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
        <Image
          alt='Omeir Fawaz'
          height={176}
          width={176}
          src='https://avatars.githubusercontent.com/u/54888682?v=4'
          sizes='30vw'
          priority
          className='rounded-2xl filter '
        />
      </div>
    </div>
  );
};

export default Introduction;
