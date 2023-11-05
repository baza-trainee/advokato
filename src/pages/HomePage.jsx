import { HomeHero } from "../components/HomeHero";
import { Information } from "../components/Information";
import { Owner } from "../components/Owner/Owner";
import { Practice } from "../components/Practice";
import { FeedBackForm } from "../components/FeedBackForm";

export const HomePage = () => {
	return (
		<>
			<HomeHero />
			<Owner />
			<Information />

			<Practice />

			<section>Team section</section>

			<section>ProBono section</section>

			<section>Achievement section</section>

			<section>Clients section</section>

			<FeedBackForm />
		</>
	);
};

export default HomePage;
