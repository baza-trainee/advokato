import { HomeHero } from '../components/HomeHero';
import { Information } from '../components/Information';
import { Owner } from '../components/Owner/Owner';
import { Practice } from '../components/Practice';
import ProBono from '../components/ProBono/ProBono';

export const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Owner />
      <Information />

      <Practice />

      <section>Team section</section>

      <ProBono/>

      <section>Achievement section</section>

      <section>Clients section</section>

      <section>FeedBack section</section>
    </>
  );
};

export default HomePage;
