/* eslint-disable react/no-danger */
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../shared/components/loader';
import CookieAlert from '../shared/components/cookie-alert';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prohar Saha Polak',
  url: 'https://proharsaha.vercel.app',
  email: 'sahaprohar10@gmail.com',
  jobTitle: 'Full Stack Developer',
  description:
    'CS undergrad at BRAC University building scalable web apps with Django, MERN stack and modern frameworks.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'BRAC University'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'Bangladesh'
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Professional Data Analyst',
      credentialCategory: 'Certification',
      recognizedBy: { '@type': 'Organization', name: 'DataCamp' },
      url: 'https://www.datacamp.com/certificate/PDA0010463863599'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Software Engineer Intern',
      credentialCategory: 'Certification',
      recognizedBy: { '@type': 'Organization', name: 'HackerRank' },
      url: 'https://www.hackerrank.com/certificates/3c051b8580a4'
    }
  ],
  sameAs: [
    'https://github.com/Prohar04',
    'https://www.linkedin.com/in/prohor04/',
    'https://leetcode.com/u/Prohor04/',
    'https://www.hackerrank.com/profile/prohar_04'
  ]
};

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  };

  return (
    <div>
      <Head>
        <title>Prohar Saha Polak | Full Stack Developer</title>
        <meta name="title" content="Prohar Saha Polak | Full Stack Developer" />
        <meta
          name="description"
          content="CS undergrad at BRAC University crafting scalable web apps with Django, the MERN stack, and modern frameworks. AWS enthusiast based in Dhaka, Bangladesh."
        />
        <meta
          name="keywords"
          content="Prohar Saha Polak, Prohar04, Full Stack Developer, Django Developer, MERN Stack, Next.js Developer, React Developer, Python Developer, BRAC University, Bangladesh, Web Developer Dhaka, EventNest, EducAI, AWS, FastAPI, Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Prohar Saha Polak" />
        <meta name="copyright" content="All rights reserved, 2025. Prohar Saha Polak" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="canonical" href="https://proharsaha.vercel.app" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proharsaha.vercel.app" />
        <meta property="og:title" content="Prohar Saha Polak | Full Stack Developer" />
        <meta
          property="og:description"
          content="CS undergrad at BRAC University crafting scalable web apps."
        />
        <meta property="og:image" content="/og-image.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://proharsaha.vercel.app" />
        <meta property="twitter:title" content="Prohar Saha Polak | Full Stack Developer" />
        <meta
          property="twitter:description"
          content="CS undergrad at BRAC University crafting scalable web apps with Django, the MERN stack, and modern frameworks."
        />
        <meta property="twitter:image" content="/og-image.svg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container">
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
          <CookieAlert />
        </AnimatePresence>
      )}
    </div>
  );
}

export default MyApp;
