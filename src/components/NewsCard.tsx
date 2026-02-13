import type { News } from "@/utils/type"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

const NewsCard = ({news, classname}:{news:News, classname?: string}) => {
	const {url, image_url, title, news_site} = news;
	return (
		<Link to={url} target="_blank" className={classname}>
			<Card className="relative text-white border-0 p-0 h-full">
				<CardHeader className="absolute p-2 capitalize">{news_site}</CardHeader>
				<CardContent className="h-full w-full p-0">
					<img src={image_url} alt="card-img" className="h-full w-full object-cover" />
				</CardContent>
				<CardFooter className="absolute bottom-0 p-2 font-extrabold text-xl leading-5">{title}</CardFooter>
			</Card>
		</Link>
	)
}
export default NewsCard