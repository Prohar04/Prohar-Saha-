import { useContext } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';
import { HeaderSmall } from '@shared-components';

export default function Contact(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <div className="ml-4 sm:mx-12 md:mx-16">
          <div className="w-3/4 md:w-1/2 mx-auto md:mx-0 text-center md:text-left">
            <HeaderSmall text="Get In Touch" />
            <h1 className="mb-3 mt-1 text-3xl font-extrabold text-white leading-tight">
              Open to <span className="text-pink">Opportunities</span>
            </h1>
            <p className="text-7xl font-light text-white mb-8 leading-relaxed max-w-md">
              Inbox always open. Whether you have a project idea, a job opportunity, or just want to
              say hi &mdash; drop a message and I&apos;ll get back to you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start mt-4">
            <a
              href="mailto:sahaprohar10@gmail.com"
              className="inline-block bg-pink text-blue font-bold px-10 py-4 rounded-xl transition-all hover:opacity-80 hover:shadow-light-xl text-7xl">
              sahaprohar10@gmail.com &rarr;
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-block border-2 border-pink text-pink font-bold px-10 py-4 rounded-xl transition-all hover:bg-pink hover:text-blue text-7xl">
              Download Resume &darr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
