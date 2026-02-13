import { Link } from "react-router-dom"

const WebbLauncher = () => {
	return (
		<article className="w-full min-h-[40vh] webb py-20">
			<div className="align-element text-white p-2 flex flex-col">
				<p className="font-bold text-4xl capitalize max-w-[40%] place-self-end text-right">The most recent James Webb images</p>
				<button className="slider-btn mt-4 place-self-end">
					<Link to="/webb">Explore</Link>
				</button>
			</div>
		</article>
	)
}
export default WebbLauncher