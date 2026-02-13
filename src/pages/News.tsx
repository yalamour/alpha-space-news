import { CardsGrid, Filters, Overview, Title } from "@/components"
import PaginationContainer from "@/components/PaginationContainer";
import type { NewsResponseWithParams } from "@/utils/type"
import { useLoaderData } from "react-router-dom"

const News = () => {
	const data = useLoaderData() as NewsResponseWithParams;
	const { response, params } = data;
	
	return (
		<section className="section align-element">
			<Title text="All news" />
			<Filters term={params.term} mode="news" key={params.term} />
			<Overview objects={data} />
			<CardsGrid objects={response.results} mode="news" />
			<PaginationContainer />
		</section>
	);
}
export default News