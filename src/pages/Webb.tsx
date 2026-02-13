import { CardsGrid, RelatedNews, Title, WebbTelescopeSummary } from "@/components";
import type { webbNewsAndImagery } from "@/utils/type";
import { useLoaderData } from "react-router-dom";

const Webb = () => {
	const {news, imagery} = useLoaderData() as webbNewsAndImagery;

	return (
		<section className="section align-element">
			<Title text="James Webb Space Telescope" />
			{news && <RelatedNews news={news} />}
			<Title text="in brief" />
			<WebbTelescopeSummary />
			<Title text="recent Imagery" />
			{imagery && <CardsGrid objects={imagery} mode="imagery" />}
		</section>
	)
}
export default Webb