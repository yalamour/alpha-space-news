import { objectsPerPage } from "@/utils/constants"
import { snapiCustomFetch } from "@/utils/customFetch"
import type { FiltersParams, NewsResponse, NewsResponseWithParams } from "@/utils/type"
import { type LoaderFunction } from "react-router-dom"

const newsParams = {
	news_site_exclude: "SpacePolicyOnline.com",
	limit: objectsPerPage,
	ordering: "-published_at"
}


export const newsPageLoader: LoaderFunction = async ({request}): Promise<NewsResponseWithParams | null> => {
	try {
		const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const formattedParams = {
			search: params.term ? params.term : "",
			offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,
			...newsParams,
		}
		const response = await snapiCustomFetch.get<NewsResponse>("", {
			params: formattedParams
		})
		return { response: response.data, params };		
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}