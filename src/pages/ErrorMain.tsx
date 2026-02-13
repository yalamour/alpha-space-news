/* eslint-disable no-console */
import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom"

const ErrorMain = () => {
	const error = useRouteError();
	console.log(error);
	
	return <div className="section align-element flex flex-col gap-10 items-start">
		<h4>An error has occured!</h4>
		<Button asChild size={"lg"} variant={"default"}>
			<Link to="/">Back home</Link>
		</Button>
	</div>
}
export default ErrorMain