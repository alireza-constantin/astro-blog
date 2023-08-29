import { lowerCase, removeDuplicates } from "@/utils/helpers";
import { defineCollection } from "astro:content";
import { postSchema } from "src/types";
// 2. Define your collection(s)
function tagTransformer(arr: Array<string>): Array<string>{
    if(arr.length == 0) return arr
    const loweredCase = lowerCase(arr);
    return removeDuplicates(loweredCase)
}


const post = defineCollection({
	type: "content",
    schema: (_) => 
        postSchema(tagTransformer)
});

export const collection = { post }