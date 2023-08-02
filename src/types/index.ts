export interface CustomThemeEvent extends CustomEvent {
	detail: {
		theme: string;
	};
}
