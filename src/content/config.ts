import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const post = defineCollection({
	type: "content",
    schema: (_) => 
        z.object({
            title: z.string().max(60),
            description: z.string().min(50).max(200),
            publishDate: z.string().transform((str) => new Date(str))
        })
    
});

export const collection = { post }