import { lazy, Suspense } from 'react';
import { HomeHero } from '../components/HomeHero';
import { Information } from '../components/Information';
import { Owner } from '../components/Owner';
import { FeedBackForm } from '../components/FeedBackForm';
import { ProBono } from '../components/ProBono/ProBono';
import { ClientsBlock } from '../components/ClientsBlock';
import { ClientReviews } from '../components/ClientReviews';
import { TeamGallery } from '../components/TeamGallery';

const PracticeSection = lazy(() => import('../components/Practice'));
const ResultsSection = lazy(() => import('../components/Results'));


export const HomePage = () => {
  return (
    <Suspense>
      <HomeHero />
      <Owner />
      <Information />
      <TeamGallery />
      <PracticeSection />
      <ProBono />
      <ResultsSection />
      <ClientsBlock />
      <ClientReviews />
      <FeedBackForm />
    </Suspense>
  );
};

export default HomePage;
