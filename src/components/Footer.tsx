import type { ReactNode } from "react"
import { Link } from "react-router-dom"

const Footer = (): ReactNode => {
	return (
		<footer className="bg-black text-white">
			<div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
				<p className="my-2">- 2026 -</p>
				<p className="mars-font text-2xl my-4 text-center">alphaSpace. by Wolfpack Edition</p>
				<p className="underline">resources:</p>
				<p className="text-center">
					<Link target="_blank"
						to={"https://www.nasa.gov/"}>
							NASA
					</Link>|
					<Link target="_blank"
						to={"https://api.nasa.gov/"}>
							NASA API
					</Link>|
					<Link target="_blank"
						to={"https://www.youtube.com/@NASA/videos"}>
							NASA Youtube channel
					</Link>
				</p>
				<p>
					<Link target="_blank" 
						to={"https://www.webbtelescopte.org/home"}>
							JWST
					</Link>|
					<Link target="_blank"
						to={"https://jwstapi.com"}>
							JWST API
					</Link>
				</p>
				<p>
					<Link target="_blank"
						to={"https://www.esa.int"}>
							ESA
					</Link>
				</p>
				<p>
					<Link target="_blank"
						to={"https://www.spacex.com"}>
							SpaceX
					</Link>|
					<Link target="_blank"
						to={"https://api.spacexdata.com"}>
							SpaceX API
					</Link>
				</p>
				<p>
					<Link target="_blank"
						to={"https://www.datastro.eu/pages/home/"}>
							Datastro API
					</Link>
				</p>
				<p className="mb-8">
					<Link target="_blank"
						to={"https://www.spaceflightnewsapi.net/"}>
							SNAPI API
					</Link>
				</p>

			</div>
		</footer>
	)
}
export default Footer