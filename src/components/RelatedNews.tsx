import type { News } from "@/utils/type"
import NewsCard from "./NewsCard"

const RelatedNews = ({news}:{news: News[]} ) => {
	return <div>
		<h2 className="capitalize my-4 text-2xl">Related news</h2>
		<div className="grid auto-rows-fr gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
			{news.map((newsItem) => (
				<NewsCard key={newsItem.id} news={newsItem} />
			))}
		</div>
	</div>
}
export default RelatedNews