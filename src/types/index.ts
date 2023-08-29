import { z } from "astro/zod";

export interface CustomThemeEvent extends CustomEvent {
	detail: {
		theme: string;
	};
}

export type Project = {
	title: string;
	desc: string;
	tools: string;
	live: string | null;
	code: string;
};

export type siteMeta = {
	title: string,
	description?: string,
	ogImage: string | null,
}

type TagTransformer = (arr: Array<string>) => string[];

export const postSchema = (tagT: TagTransformer) => z.object({
	title: z.string().max(60),
	description: z.string().min(50).max(200),
	publishDate: z.string().transform((str) => new Date(str)),
	tags: z.array(z.string()).default([]).transform(tagT)
});

export type Post = z.infer<ReturnType<typeof postSchema>>