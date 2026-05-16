import React, { useContext, useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import { navlinks } from '@utils/constants';
import { PersonalDetails } from '@utils/types';
import { PersonalDetailsContext } from '@utils/contexts';

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      className="px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center cursor-pointer"
      onClick={handleClick}>
      <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
        {title}
      </p>
    </li>
  );
};

const Navbar = (): JSX.Element => {
  const { logo }: PersonalDetails = useContext(PersonalDetailsContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const addShadowtoNav = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.scrollY >= 100 ? setisScreenScrolled(true) : setisScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);

  return (
    <div
      className={` mx-auto bg-blue w-full fixed z-30
      ${isScreenScrolled && 'shadow-2xl'}
      `}>
      <nav className="block md:flex justify-between items-center p-2 px-8">
        <div className="flex justify-between">
          <div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src={logo}
              alt="logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`${
                isScreenScrolled ? 'w-1/4 md:w-1/3' : 'w-20 md:w-1/2'
              } pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer`}
            />
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}>
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block'}>
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {navlinks.map((item) => {
              return <NavItem title={item.title} href={item.href} key={item.href} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
