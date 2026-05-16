import { HeaderSmall } from '@shared-components';
import { useContext } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';

export default function Work(): JSX.Element {
  const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <img
          src="/images/vectors/circle-spin.svg"
          alt="Circle Vector"
          className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none animate-spin"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <img
                src="/images/vectors/boxes.svg"
                alt="Box Vector"
                className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
              />
              <HeaderSmall text="Where is Prohar headed?" />
              <h1 className="mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Currently studying CS at{' '}
                <span className="text-pink font-bold">{personalDetails.work.company}</span>, seeking
                opportunities as a
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl font-extrabold text-white leading-tight">
                {personalDetails.work.designation}
              </h1>
              <div className="mt-8">
                <style>{`
                  @keyframes shimmer {
                    0%   { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(250%) skewX(-15deg); }
                  }
                  .btn-hire:hover .btn-shimmer {
                    animation: shimmer 0.7s ease forwards;
                  }
                  @keyframes pulse-ring {
                    0%   { box-shadow: 0 0 0 0 rgba(238,187,195,0.6); }
                    70%  { box-shadow: 0 0 0 12px rgba(238,187,195,0); }
                    100% { box-shadow: 0 0 0 0 rgba(238,187,195,0); }
                  }
                  .btn-hire { animation: pulse-ring 2.5s ease-out infinite; }
                `}</style>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-hire group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-pink px-8 py-4 font-bold text-blue transition-all duration-300 hover:shadow-light-xl hover:gap-5">
                  <span className="btn-shimmer absolute inset-0 w-1/3 bg-white opacity-20 pointer-events-none" />
                  <span className="relative z-10 text-7xl tracking-wide">Hire Me</span>
                  <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col items-center justify-center">
            <img
              src={personalDetails.work.logo}
              alt="Works at"
              className="w-48 lg:w-full p-10 sm:p-24 md:p-4 lg:p-24"
            />
          </div>
        </div>
      </div>
    </>
  );
}
