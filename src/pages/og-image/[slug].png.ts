import type { APIContext, GetStaticPaths } from "astro";
import { getCollection, getEntryBySlug } from "astro:content";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

const AssetDir = resolve("src", "assets");
const RobotoMonoPath = join(AssetDir, "roboto-mono-regular.ttf");
const RobotoMonoBoldPath = join(AssetDir, "roboto-mono-700.ttf");

const RobotoMonoReg = readFileSync(RobotoMonoPath);
const RobotoMonoBold = readFileSync(RobotoMonoBoldPath);

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	fonts: [
		{
			name: "Roboto Mono",
			data: RobotoMonoReg,
			weight: 400,
			style: "normal",
		},
		{
			name: "Roboto Mono",
			data: RobotoMonoBold,
			weight: 700,
			style: "normal",
		},
	],
};

const markup = (title: string, pubDate: string, readingTime: string) => html`<div
	tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]"
>
	<div tw="flex flex-col flex-1 w-full p-10 justify-center">
		<p tw="text-2xl mb-6">${pubDate}</p>
		<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		<p class="text-lg">${readingTime}</p>
	</div>
	<div tw="flex items-center justify-between w-full p-10 border-t border-[#4973FF] text-xl">
		<div tw="flex items-center">
			<svg
				width="50px"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle fill="#2C3E50" cx="50" cy="50" r="50" />
				<path
					clip-rule="evenodd"
					d="M16.488 73.027L70.906 18.61c1.172-1.172 4.021-.222 6.364 2.121s3.293 5.193 2.121 6.364L24.973 81.513l-8.485-8.486z"
					fill="none"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					fill="#ECF0F1"
					d="M64.906 29.609L12.018 82.497a50.269 50.269 0 0 0 8.847 8.124l52.527-52.527c1.172-1.171.222-4.021-2.121-6.364-2.344-2.342-5.194-3.292-6.365-2.121z"
				/>
				<path
					fill="#F0C419"
					d="M88.5 23.002c.767-6.901 4.6-10.735 11.5-11.501-6.9-.767-10.734-4.6-11.5-11.5-.767 6.9-4.6 10.734-11.5 11.5 6.899.766 10.733 4.6 11.5 11.501zM31.5 0c-.5 4.5-3 7-7.501 7.501 4.5.5 7.001 3 7.501 7.5.5-4.5 3-7 7.501-7.5C34.5 7 32 4.5 31.5 0zm60 46.001c-.5 4.5-3 7-7.501 7.501 4.5.5 7.001 3 7.501 7.5.5-4.5 3-7 7.501-7.5C94.5 53.001 92 50.5 91.5 46.001z"
				/>
				<path
					fill="#ffffff"
					d="M71.5 53c-.367 3.299-2.2 5.133-5.5 5.5 3.3.366 5.134 2.2 5.5 5.499.367-3.299 2.2-5.133 5.5-5.499-3.3-.367-5.134-2.202-5.5-5.5zm-25-31.001c-.367 3.3-2.2 5.134-5.5 5.501 3.3.367 5.134 2.199 5.5 5.5.367-3.301 2.2-5.133 5.5-5.5-3.3-.367-5.134-2.201-5.5-5.501zM58.5 3c-.367 3.298-2.2 5.133-5.5 5.5 3.3.366 5.134 2.2 5.5 5.499.366-3.299 2.2-5.133 5.5-5.499-3.3-.367-5.134-2.202-5.5-5.5z"
				/>
			</svg>
			<p tw="ml-4 font-semibold">alirezasoh.dev</p>
		</div>
		<p>by Alireza Soheili</p>
	</div>
</div>`;

export async function get({ params: { slug } }: APIContext) {
	const post = await getEntryBySlug("post", slug!);
	if(!post) {
		return {
			msg: "there is not a post"
		}
	}
	const { remarkPluginFrontmatter } = await post?.render();
	const { readingTime } = remarkPluginFrontmatter;
	const title = post?.data.title ?? "alirezasoh.dev";
	const postDate = new Date(post?.data.publishDate) ?? Date.now();
    const formattedDate = postDate.toLocaleDateString("en-us", {
	weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
});
	const svg = await satori(markup(title, formattedDate, readingTime), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return {
		body: png,
		encoding: "binary",
	};
}

export const getStaticPaths = (async () => {
	const posts = await getCollection("post");
	return posts.map(({ slug }) => ({ params: { slug } }));
}) satisfies GetStaticPaths;
