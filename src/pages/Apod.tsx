import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch"
import { numberToDate } from "@/utils/functions";
import type { ApodType } from "@/utils/type";
import { useEffect, useEffectEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Apod = () => {
	const defaultApod = useLoaderData() as ApodType;
	const [data, setData] = useState<ApodType>(defaultApod);
	const [day, setDay] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const fetchApod = async(day:number):Promise<void | null> => {
		setIsLoading(true)
		try {
			const params = {date: numberToDate(day)}
			const response = await nasaCustomFetch.get<ApodType>("", { params })
			setData(response.data)
			setIsLoading(false)
		} catch (error) {
			/* eslint-disable-next-line no-console */
			console.log(error);
			setIsLoading(false)
			return null
		}
	}

	const updateApodDay = useEffectEvent((day: number) => {
		fetchApod(day);
	});
	useEffect(() => {
		updateApodDay(day);
	}, [day]);


	// useEffect(() => {
	// 	fetchApod(day);
	// }, [day]);

	return (
		<section className="section align-element">
			<Title text="NASA's Astronomy Picture Of The Day" />
			<ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading} />
		</section>
	)
}
export default Apod