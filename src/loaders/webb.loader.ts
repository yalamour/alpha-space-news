import { snapiCustomFetch, webbCustomFetch } from "@/utils/customFetch";
import type { News, NewsResponse, WebbImage, WebbImagesResponse, webbNewsAndImagery } from "@/utils/type";
import { type LoaderFunction } from "react-router-dom";

const newsParams = {
	news_site_exclude: "SpacePolicyOnline.com",
	limit: 9,
	ordering: "-published_at",
	summary_contains: "webb",
};

const imagesParams = {
	page: 1,
	perPage: 4,
};

export const newsFetch = async():Promise<News[] | null> => {
	try {
		const response = await snapiCustomFetch.get<NewsResponse>("", {
			params: newsParams
		});
		return response.data.results;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}

export const imageryFetch = async():Promise<WebbImage[] | null> => {
	try {
		const response = await webbCustomFetch.get<WebbImagesResponse>("", {params: imagesParams});
		return response.data.body;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}

export const webbPageLoader: LoaderFunction = async(): Promise<webbNewsAndImagery | null> => {
	try {
		const [news, imagery] = await Promise.all([
			newsFetch(), 
			imageryFetch(),
		]);
		return {news, imagery};
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}