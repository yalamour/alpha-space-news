import { datastroCustomFetch } from "@/utils/customFetch";
import type { HubbleImage, HubbleImagesResponse } from "@/utils/type";
import { type LoaderFunction } from "react-router-dom"

const singleHubbleLoader: LoaderFunction = async ({ params }): Promise<HubbleImage | null> => {
	try {
		const formattedParams = {where: params.id ? `photo_id like "${params.id}"` : ''};
		const response = await datastroCustomFetch.get<HubbleImagesResponse>("", { params: formattedParams});

		return response.data.results[0];		
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}
export default singleHubbleLoader