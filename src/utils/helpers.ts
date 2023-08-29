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

export function getUniqueTags(posts: CollectionEntry<'post'>[]): Array<string> {
	const uniqueTags = new Set<string>();
	posts.map((post) => {
		post.data.tags.map((tag: string) => uniqueTags.add(tag))
	})
	return Array.from(uniqueTags)
}


export function lowerCase(arr: Array<string>): Array<string> {
	return arr.map((a) => a.toLocaleLowerCase());
}

export function removeDuplicates(arr: Array<string>): Array<string> {
	return Array.from(new Set(arr));
}

export function formatReadingTime(readingTime: string) {
	const time = parseInt(readingTime);
	const cups = Math.ceil(time / 5);
	return "☕️".repeat(cups);
}
