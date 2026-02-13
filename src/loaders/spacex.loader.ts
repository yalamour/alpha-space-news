import { snapiCustomFetch, spaceXCustomFetch } from "@/utils/customFetch";
import type { News, NewsResponse, Rocket, spaceXNewsAndRockets } from "@/utils/type";
import type { LoaderFunction } from "react-router-dom";

const newsParams = {
	news_site_exclude: "SpacePolicyOnline.com",
	limit: 20,
	ordering: "-published_at",
	summary_contains: "spaceX"
}

const starshipURL = "rockets/5e9d0d96eda699382d09d1ee";
const falconOneURL = "rockets/5e9d0d95eda69955f709d1eb";
const falconNineURL = "rockets/5e9d0d95eda69973a809d1ec";
const falconHeavyURL = "rockets/5e9d0d95eda69974db09d1ed";

const rocketsURLs = [
	starshipURL,
	falconOneURL,
	falconNineURL,
	falconHeavyURL,
]

export const newsFetch = async():Promise<News[] | null> => {
	try {
		const response = await snapiCustomFetch<NewsResponse>("", {params: newsParams});
		return response.data.results;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}  

export const rocketFetch = async(rocketURL: string): Promise<Rocket | null> => {
	try {
		const response = await spaceXCustomFetch.get<Rocket>(rocketURL);
		return response.data;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}  

export const rocketsFetch = async(): Promise<(Rocket | null)[] | null> => {
	try {
		const response: (Rocket | null)[] = await Promise.all(rocketsURLs.map(rocketsURL => rocketFetch(rocketsURL)));
		return response;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}  

export const spaceXPageLoader: LoaderFunction = async(): Promise<spaceXNewsAndRockets | null> => {
	try {
		const [news, rockets] = await Promise.all([newsFetch(), rocketsFetch()])
		return { news, rockets };
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}