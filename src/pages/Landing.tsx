import { ApodLauncher, HubbleLauncher, NewsLauncher, SpaceXLauncher, WebbLauncher } from "@/components";

const Landing = () => {
	return (
		<section className="section">
			<NewsLauncher />
			<SpaceXLauncher />
			<ApodLauncher />
			<WebbLauncher />
			<HubbleLauncher />
		</section>
	)
}
export default Landing