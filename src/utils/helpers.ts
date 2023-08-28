import type { CollectionEntry } from "astro:content";

export function sortPostsByDate(posts: CollectionEntry<"post">[] = []) {
	return posts.sort(
		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
	);
}

export const wait = (t: number) => {
	return new Promise((res) => {
		return setTimeout(() => {
			res(1);
		}, t * 1000);
	});
};

export function formatReadingTime(readingTime: string){
	const time = parseInt(readingTime);
	const cups = Math.ceil(time / 5)
	return "☕️".repeat(cups)
}
