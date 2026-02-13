type BuildURLProps = {
	page: number;
	pathname: string;
	search: string
}

export const buildURL = ({page, pathname, search}: BuildURLProps): string => {
	const searchParams = new URLSearchParams(search)
	searchParams.set("page", page.toString())
	const url = `${pathname}?${searchParams.toString()}`
	return url
};

type BuildPrevAndNextUrlsProps = {
	page: number;
	pathname: string;
	search: string
	lastPage: number
}

export const buildPrevAndNextUrls = ({page, pathname, search, lastPage}: BuildPrevAndNextUrlsProps): {prevUrl: string, nextUrl: string} => {

	const prevPage = (page - 1) < 1 ? lastPage : page - 1
	const prevUrl = buildURL({page: prevPage, pathname, search})

	const nextPage = page + 1 >= lastPage ? 1 : page + 1
	const nextUrl = buildURL({page: nextPage, pathname, search})

	return { prevUrl, nextUrl };
}