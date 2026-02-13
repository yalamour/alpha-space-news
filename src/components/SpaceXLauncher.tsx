import { Link } from "react-router-dom"

const SpaceXLauncher = () => {
	return (
		<article className="w-full min-h-[40vh] spacex py-20">
			<div className="align-element text-white p-2">
				<p className="font-bold text-4xl capitalize">More about SpaceX</p>
				<button type="button" className="mt-4 slider-btn">
					<Link to="/spacex">Explore</Link>
				</button>
			</div>
		</article>
	)
}
export default SpaceXLauncher