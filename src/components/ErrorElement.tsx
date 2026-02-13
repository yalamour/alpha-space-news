/* eslint-disable no-console */
import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
	const error = useRouteError();
	console.log(error);
	
	return <div className="section align-element">
		<h4>An error has occured!</h4>
	</div>
}
export default ErrorElement