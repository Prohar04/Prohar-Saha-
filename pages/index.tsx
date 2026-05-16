import dynamic from 'next/dynamic';
import { getPersonalDetails, getProjectDetails, getCompanyDetails } from '@utils/apiService';
import {
  PersonalDetailsContext,
  ProjectDetailsContext,
  CompanyDetailsContext
} from '@utils/contexts';
import { PersonalDetails, Project, Company } from '@utils/types';
import { Footer, Loader, Navbar, SocialBar } from '@shared-components';

const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
});

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
  companyDetails: Company[];
};

const Home = ({ personalDetails, projectDetails, companyDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <CompanyDetailsContext.Provider value={companyDetails}>
            <Navbar />
            <SocialBar />
            <HomePage />
            <Footer />
          </CompanyDetailsContext.Provider>
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};

export default Home;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[]; companyDetails: Company[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const projectDetails = (await getProjectDetails()) as Project[];
  const companyDetails = (await getCompanyDetails()) as Company[];
  return { props: { personalDetails, projectDetails, companyDetails } };
}
