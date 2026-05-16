import { HeaderSmall } from '@shared-components';
import { Certification } from 'shared/utils/types';

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Professional Data Analyst',
    issuer: 'DataCamp',
    credentialId: 'PDA0010463863599',
    verifyUrl: 'https://www.datacamp.com/certificate/PDA0010463863599',
    description:
      'Earned by passing two timed assessments covering data management, exploratory analysis, and statistical experimentation in SQL and Python, plus a practical exam involving real-world data analysis, visualization, and a stakeholder presentation.',
    skills: [
      'SQL',
      'Python',
      'Data Management',
      'Exploratory Analysis',
      'Statistical Experimentation',
      'Data Visualization'
    ]
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    credentialId: '3c051b8580a4',
    verifyUrl: 'https://www.hackerrank.com/certificates/3c051b8580a4',
    description:
      'A verified role-based certification covering core software engineering competencies tested in real interview settings — demonstrating solid foundations in problem solving and SQL that meet the bar for entry-level engineering roles.',
    skills: ['Problem Solving', 'SQL', 'Algorithms', 'Data Structures']
  }
];

export default function Certifications(): JSX.Element {
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <img
          src="/images/vectors/boxes.svg"
          alt="Box Vector"
          className="absolute right-0 top-10 w-20 md:w-32 opacity-30 pointer-events-none"
        />
        <div className="ml-4 sm:mx-12 md:mx-16">
          <div className="w-3/4 md:w-1/2 mx-auto md:mx-0">
            <HeaderSmall text="Credentials" />
            <h1 className="mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
              Verified <span className="text-pink font-bold">certifications</span> that back the
              skills.
            </h1>
            <h1 className="mb-10 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none">
              Tested. <span className="text-pink">Verified.</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                style={{
                  background: 'linear-gradient(135deg, #1e2756 0%, #252d6e 100%)',
                  borderColor: 'rgba(184,193,236,0.35)'
                }}
                className="rounded-2xl px-8 py-8 border hover:shadow-violet-5xl transition-shadow duration-300">
                {/* Header row */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-bold text-xl text-white mb-1">{cert.title}</p>
                    <p className="text-pink font-semibold text-sm">{cert.issuer}</p>
                    <p className="text-xs text-violet mt-1 italic">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-pink text-pink px-3 py-1 rounded-lg hover:bg-pink hover:text-blue transition-all whitespace-nowrap ml-4">
                    Verify ↗
                  </a>
                </div>

                {/* Divider */}
                <div style={{ borderColor: 'rgba(184,193,236,0.25)' }} className="border-t mb-4" />

                {/* Description */}
                <p className="text-sm text-white opacity-80 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: 'rgba(35,41,70,0.8)',
                        borderColor: 'rgba(184,193,236,0.4)'
                      }}
                      className="text-xs text-white px-3 py-1 rounded-full border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
