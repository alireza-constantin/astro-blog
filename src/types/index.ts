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
