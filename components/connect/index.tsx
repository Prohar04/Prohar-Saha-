import { useContext } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';

export default function Connect(): JSX.Element {
  const { socialMedia }: PersonalDetails = useContext(PersonalDetailsContext);
  return (
    <>
      <div className="bg-blue pt-28 h-auto min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full text-center lg:w-7/12 lg:text-left pl-0 lg:pl-20">
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-6">
                Meet and Greet
              </h1>
              <p className="text-sm sm:text-7xl font-light text-white leading-none mb-6">
                Drop me an email or connect through any of my profiles below. Available for
                internship and junior full-stack roles — remote or Dhaka-based.
              </p>
              <div className="flex flex-row justify-center lg:justify-start items-end">
                {socialMedia.map(({ alt_text, image_file, link }) => {
                  return (
                    <a href={link} key={link}>
                      <img
                        src={image_file}
                        alt={alt_text}
                        className="w-6 md:w-10 h-10 m-2 md:m-2 transition-all hover:opacity-40 transform hover:scale-75"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ml-auto w-full px-10 lg:px-20 lg:w-5/12 h-auto flex flex-col justify-center items-center py-20">
            <div className="bg-violet rounded-2xl px-10 py-10 w-full max-w-sm text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-sm text-white mb-8 leading-relaxed">
                Open to Django, MERN, and Python backend roles. Let&apos;s build something together.
              </p>
              <a
                href="mailto:sahaprohar10@gmail.com"
                className="inline-block bg-pink text-blue font-bold px-8 py-3 rounded-xl transition-all hover:opacity-80 break-all text-sm">
                sahaprohar10@gmail.com
              </a>
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block border-2 border-pink text-pink font-bold px-8 py-3 rounded-xl transition-all hover:bg-pink hover:text-blue text-sm">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
