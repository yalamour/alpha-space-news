import { useLoaderData } from "react-router-dom"
import { NewsLauncherBubbleCards, NewsLauncherHeader, NewsLauncherSquareCards } from "."
import type { landingPageNewsApodHubbles } from "@/utils/type"

const NewsLauncher = () => {
	const { news } = useLoaderData() as landingPageNewsApodHubbles;

	return <article className="w-full py-12">
			<div className="align-element h-full">
				<NewsLauncherHeader />
				{ news && <NewsLauncherSquareCards news={news} /> }
				{ news && <NewsLauncherBubbleCards news={news} /> }
			</div>
		</article>
}
export default NewsLauncher