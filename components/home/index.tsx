import Landing from './landing';
import Skills from './skills';
import Work from './work';
import Projects from './projects';
import Contact from './contact';
import RepoDetails from './repo';
import Certifications from './certifications';

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28 overflow-x-hidden">
        <section id="hero">
          <Landing />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="experience">
          <Work />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <RepoDetails />
      </div>
    </>
  );
};

export default HomePage;
