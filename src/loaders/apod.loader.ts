import { nasaCustomFetch } from "@/utils/customFetch"
import type { ApodType } from "@/utils/type";
import { type LoaderFunction } from "react-router-dom";

export const apodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
	try {
		const response = await nasaCustomFetch.get<ApodType>("");
		return response.data;
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
}