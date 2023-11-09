import { HomeHero } from "../components/HomeHero";
import { Information } from "../components/Information";
import { Owner } from "../components/Owner";
import { Practice } from "../components/Practice";
import { FeedBackForm } from "../components/FeedBackForm";
import { ProBono } from "../components/ProBono/ProBono";
import { Results } from "../components/Results";
import { ClientsBlock } from "../components/ClientsBlock";
import { ClientReviews } from "../components/ClientReviews";
import { TeamGallery } from "../components/TeamGallery";

export const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Owner />
      <Information />
      <Practice />
      <TeamGallery />
      <ProBono />
      <Results />
      <ClientsBlock />
      {/* <ClientReviews /> */}
      <FeedBackForm />
    </>
  );
};

export default HomePage;
