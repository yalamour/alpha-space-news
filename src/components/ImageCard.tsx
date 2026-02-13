import type { WebbImage } from "@/utils/type"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const ImageCard = ({ image }:{ image: WebbImage }) => {
	const {location, details} = image;
	const {description, mission} = details;
	return <Card className="bg-muted">
		<CardHeader>{mission}</CardHeader>
		<CardContent>
			<img src={location} alt="jwst-pic" className="w-full" />
		</CardContent>
		<CardFooter>{description}</CardFooter>
	</Card>
}
export default ImageCard