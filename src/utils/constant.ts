export const LIGHT_THEME_COLOR = "#fafafa";
export const DARK_THEME_COLOR = "#1d1f21";
export const HOME_MAX_POST = 6;
export const SITE_DESCRIPTION = "Alireza soheili portfolio site with blogs about web development";
export const MENU_LINKS = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
export const SKILLS = [
	"typescript",
	"react",
	"nextjs",
	"Astro",
	"tailwind",
	"redux",
	"zustand",
	"react-query",
];

export const LESS_FAMILIAR = [
	"nodejs",
	"express",
	"nestjs",
	"postgresql",
	"prisma",
	"drizzle",
	"mongoose",
	"pwa",
	"jest",
	"vitest",
];

export const projects = [
	{
		title: "iSupport",
		desc: "Highly responsive ticket support application. The app incorporates robust and secure access through the implementation of the JWT protocol. This app enables users to create and manage support tickets while offering chatting with customer service team.",
		tools: "express, mongodb, jsonwebtoken, mongoose, react, tailwind, daisyUi, react-hook-form, react-redux",
		live: "https://isupport-frontend.vercel.app/",
		code: "https://github.com/alireza-constantin/isupport-frontend",
	},
	{
		title: "Votey",
		desc: "Votey leverages the full potential of Next.js as a full-stack framework, delivering simple user experience for creating and sharing polls. the polls feature an expiration time functionality, ensuring that voting ceases automatically after the predefined period has elapsed. with type safety of prisma and trpc.",
		tools: "Typescript, MySql, NextJs, Prisma, trpc, Tailwind, Framer-Motion",
		live: "http://votey-one.vercel.app/",
		code: "https://github.com/alireza-constantin/votey",
	},
	{
		title: "ChitChat",
		desc: "ChitChat is a chat application that offers real-time chat functionality. Powered by WebSockets, users can engage in dynamic conversations. Integrated user authentication with session management and Passport.js.",
		tools: "Typescript, Postgresql, Nestjs, Prisma, PassportJS, React, React-Router-Dom,Redux-Toolkit ,Tailwind, Framer-Motion",
		live: null,
		code: "https://github.com/alireza-constantin/chitchat-ui",
	},
	{
		title: "Hulu Front Page Colon",
		desc: "A near pixel perfect colon of Hulu front page website using html, vanilla css and javascript.",
		tools: "HTML, CSS, Javascript",
		live: "https://hulu-front-page.netlify.app/",
		code: "https://github.com/alireza-constantin/Hulu-front-page-colon",
	},
	{
		title: "Nexwt",
		desc: "Nestjs and  nextjs starter template for jwt authentication.Leveraging NestJS for the server-side and Next.js for the client-side, JWT tokens, including both access-token and refresh-token functionalities. The integration of Passport.js and Jotai as the state manager further enhances the app's security and state management capabilities.",
		tools: "Typescript, Nestjs, Postgres, Prisma, Next 13, Tailwind, Jotai",
		live: null,
		code: "https://github.com/alireza-constantin/nest-next-jwt-refresh",
	},
];
