import { HomeHero } from "../components/HomeHero";
import { Information } from "../components/Information";
import { Owner } from "../components/Owner/Owner";

export const HomePage = () => {
  return (
    <>
      <HomeHero />
      {/* <Owner />
      <Information /> */}

      <section>Practice section</section>

      <section>Team section</section>

      <section>ProBono section</section>

      <section>Achievement section</section>

      <section>Clients section</section>

      <section>FeedBack section</section>
    </>
  );
};

export default HomePage;
