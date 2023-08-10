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
}

export const postSchema = z.object({
	title: z.string().max(60),
	description: z.string().min(50).max(200),
	publishDate: z.string().transform((str) => new Date(str)),
});

export type Post = z.infer<typeof postSchema>