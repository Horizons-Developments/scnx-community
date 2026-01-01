class WelcomeScreen extends HTMLElement {
    async connectedCallback() {
        const lang = this.getAttribute("lang") || "en";
        const page = this.getAttribute("page");

        const response = await fetch("/data/welcome-screen.json");
        const data = await response.json();

        const content = data[lang][page];

        this.innerHTML = `
            <section class="welcome-screen-container">
                <div class="welcome-screen-text">
                    <h1 class="heading1">${content.title}</h1>
                    <h6 class="heading6">${content.description}</h5>
                </div>
            </section>
        `;
    }
}

customElements.define("welcome-screen", WelcomeScreen);