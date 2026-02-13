import type { HubbleImage, News, Rocket, WebbImage } from "@/utils/type"
import type { ReactNode } from "react"
import NewsPageCard from "./NewsPageCard";
import HubbleCard from "./HubbleCard";
import ImageCard from "./ImageCard";
import RocketCard from "./RocketCard";

const CardsGrid = ({ objects, mode }: { objects: News[] | HubbleImage[] | WebbImage[] | (Rocket | null)[]; mode: string }): ReactNode => {
	if(mode === "hubble") {
		return <div className="mb-12 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{(objects as HubbleImage[]).map((item, index) => 
				<HubbleCard image={item} key={index} />
			)}
		</div>
	} else if (mode === "news") {
			return <div className="grid grid-cols-1 gap-y-4 auto-rows-[700px] lg:auto-rows-[400px] mb-12">
			{(objects as News[]).map((item, index) => 
				<NewsPageCard news={item} key={index} />
			)}
		</div>
	} else if (mode === "imagery") {
			return <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{(objects as WebbImage[]).map((item, index) => 
				<ImageCard image={item} key={index} />
			)}
		</div>
	} else if (mode === "rockets") {
			return <div>
			{(objects as (Rocket | null)[]).map((item, index) =>
				item && <RocketCard rocket={item} key={index} index={index} />
			)}
		 </div>
	}
};

export default CardsGrid;