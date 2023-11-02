import { HomeHero } from "../components/HomeHero";
import { Information } from "../components/Information";

export const HomePage = () => {
	return (
		<>
			<HomeHero />

			<section>Company main section</section>

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
