import { buildPrevAndNextUrls, buildURL } from "@/utils/pagination"
import type { HubbleImagesResponseWithParams, NewsResponseWithParams } from "@/utils/type"
import { type ReactNode } from "react";
import { useLoaderData, useLocation } from "react-router-dom"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { objectsPerPage } from "@/utils/constants";

const PaginationContainer = () => {

	const { response } = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams;
	const { pathname, search } = useLocation();
	const searchParams = new URLSearchParams(search)

	const pageFromURL: string | null = searchParams.get("page")
	const firstPage = 1;
	let activePage: number;
	if (!pageFromURL) {
		activePage = 1
	} else {
		activePage = parseFloat(pageFromURL)
	}
	let objectsInTotal: number;
	if("total_count" in response) {
		objectsInTotal = response.total_count
	} else {
		objectsInTotal = response.count
	}

	let lastPage: number;
	if (objectsInTotal === 0) {
		lastPage = 0
	} else if (objectsInTotal % objectsPerPage === 0) {
		lastPage = objectsInTotal / objectsPerPage
	} else {
		lastPage = Math.floor(objectsInTotal / objectsPerPage) +1
	}

	const { prevUrl, nextUrl } = buildPrevAndNextUrls({page: activePage, pathname, search, lastPage})

	const buildBtn = ({page, isActive}: { page: number, isActive: boolean }): ReactNode => {
		const url = buildURL({page, pathname, search})
		return <PaginationItem key={page}>
			<PaginationLink to={url} isActive={isActive} size={"default"}>{page}</PaginationLink>
		</PaginationItem>
	}

	const buildDots = (key: string): ReactNode => {
		return <PaginationItem key={key}>
			<PaginationEllipsis />
		</PaginationItem>
	}

	const buidlContent = (): ReactNode[] => {
		const pages: ReactNode[] = []
		//First page
		pages.push(buildBtn({page: firstPage, isActive: activePage === firstPage}))
		//Ellips
		if(activePage > 2) {
			pages.push(buildDots('prev_dots'))
		}
		//Active page
		if(activePage !== firstPage && activePage !== lastPage) {
			pages.push(buildBtn({page: activePage, isActive: activePage === activePage}))
		}
		//Ellips
		if(activePage < lastPage - 1) {
			pages.push(buildDots('next_dots'))
		}
		//Last page
		pages.push(buildBtn({page: lastPage, isActive: activePage ===  lastPage}))
		return pages
	}

	if (lastPage < 2) {
		return null
	}

	return <Pagination>
		<PaginationContent>
			<PaginationItem>
				<PaginationPrevious to={prevUrl} size={"default"}/>
			</PaginationItem>
			{buidlContent()}
			<PaginationItem>
				<PaginationNext to={nextUrl} size={"default"}/>
			</PaginationItem>
		</PaginationContent>
	</Pagination>
}
export default PaginationContainer