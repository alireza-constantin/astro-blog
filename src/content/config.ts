import { defineCollection, z } from "astro:content";
import { postSchema } from "src/types";
// 2. Define your collection(s)
const post = defineCollection({
	type: "content",
    schema: (_) => 
        postSchema
    
});

export const collection = { post }