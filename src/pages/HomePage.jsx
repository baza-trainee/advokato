import { lazy } from 'react';
import { HomeHero } from '../components/HomeHero';
import { Information } from '../components/Information';
import { Owner } from '../components/Owner';
import { FeedBackForm } from '../components/FeedBackForm';
import { ProBono } from '../components/ProBono/ProBono';
import { Results } from '../components/Results';
import { ClientsBlock } from '../components/ClientsBlock';
import { ClientReviews } from '../components/ClientReviews';
import { TeamGallery } from '../components/TeamGallery';

const PracticeSection = lazy(() => import('../components/Practice'));


export const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Owner />
      <Information />
      <PracticeSection />
      <TeamGallery />
      <ProBono />
      <Results />
      <ClientsBlock />
      <ClientReviews />
      <FeedBackForm />
    </>
  );
};

export default HomePage;
