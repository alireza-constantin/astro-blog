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

type CountedTag = {
	tag: string,
	count: number
}

export function getUniqueTagsWithCount(posts: CollectionEntry<"post">[] = []) {
	// [css, html, koor] [cow, gow, wow]
	const tagsMap = new Map<string, number>()
	posts.map(post => {
		const tags: Array<string> = post.data.tags;
		tags.map(tag => {
			const tagMap = tagsMap.get(tag);
			if(tagMap){
				tagsMap.set(tag, tagMap + 1)
			} else {
				tagsMap.set(tag, 1)
			}
		})
	})
	return tagsMap;
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
