import { CardsGrid, RelatedNews, Title } from "@/components";
import type { spaceXNewsAndRockets } from "@/utils/type"
import { useLoaderData } from "react-router-dom"

const SpaceX = () => {

	const { news, rockets } = useLoaderData() as spaceXNewsAndRockets;
	
	return (
		<section className="section align-element">
			<Title text="spaceX" />
			{news && <RelatedNews news={news} />}
			<Title text="rockets" />
			{rockets && <CardsGrid objects={rockets} mode="rockets" />}
		</section>
	)
}
export default SpaceX