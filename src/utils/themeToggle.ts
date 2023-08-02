interface CustomThemeEvent extends CustomEvent {
    detail: {
        theme: string
    }
}

class ThemeToggle extends HTMLElement {
	constructor() {
		super();
		const button = this.querySelector("button") as HTMLButtonElement;

		if (button) {
			// button clicked, fire event
			button.addEventListener("click", (e) => {
				if (e.currentTarget instanceof HTMLButtonElement) {
					// isPressed === dark mode current on
					let isPressed = e.currentTarget.getAttribute("aria-pressed") === "true";

					// invert isPressed
					let themeChangeEvent: CustomThemeEvent = new CustomEvent("theme-change", {
						detail: {
							theme: isPressed ? "light" : "dark",
						},
					});
					// dispatch event -> ThemeProvider.astro
					document.documentElement.dispatchEvent(themeChangeEvent);
					// toggle the aria-pressed attribute
					button.setAttribute("aria-pressed", String(!isPressed));
				}
			});
		}
	}
}

customElements.define("theme-toggle", ThemeToggle);
