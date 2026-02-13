import { CardsGrid, Filters, Overview, Title } from "@/components";
import PaginationContainer from "@/components/PaginationContainer";
import type { HubbleImagesResponseWithParams } from "@/utils/type";
import { useLoaderData } from "react-router-dom";

const Hubble = () => {
	const data = useLoaderData() as HubbleImagesResponseWithParams;
	const { response, params } = data;
	
	return (
		<section className="section align-element">
			<Title text="Hubble telescope photos" />
			<Filters term={params.term} mode="hubble" key={params.term} />
			<Overview objects={response} />
			<CardsGrid objects={response.results} mode="hubble" />
			<PaginationContainer />
		</section>
	)	
}
export default Hubble