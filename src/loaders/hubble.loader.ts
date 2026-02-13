import { datastroCustomFetch } from "@/utils/customFetch";
import type { FiltersParams, HubbleImagesResponse, HubbleImagesResponseWithParams } from "@/utils/type";
import { type LoaderFunction } from "react-router-dom";
import { objectsPerPage } from "@/utils/constants";


const hubbleParams = {
	orderBy: "photo_date_taken desc",
	limit: objectsPerPage,
};

export const hubblePageLoader:LoaderFunction = async({ request }):Promise<HubbleImagesResponseWithParams | null> => {
	try {
		const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const formattedParams = {
			where: params.term ? `photo_title like "${params.term}"` : "",
			offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,
			...hubbleParams
		}
		const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formattedParams})
		return {response: response.data, params}
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null		
	}
}