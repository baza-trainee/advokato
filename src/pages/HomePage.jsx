import { HomeHero } from "../components/HomeHero";
import { index } from "../components/HomeHero/HomeHero.styled";

export const HomePage = () => {
	return (
		<>
			<HomeHero />

      <section
        style={{
          height: "100vh",
          backgroundColor: "black",
          position: "relative",
          top: "-20vh",
          color: "white",
        }}
      >
        Company main section
      </section>

			<Information />

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
