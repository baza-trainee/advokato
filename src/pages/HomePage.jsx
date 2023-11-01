import { HomeHero } from '../components/HomeHero';

export const HomePage = () => {
  return (
    <>
      <HomeHero />

      <section style={{height:'100vh',backgroundColor:"black",position:"relative",top:"-20vh",color:"white"}}>Company main section</section>

      <section>Company second section</section>

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
