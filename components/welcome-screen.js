class WelcomeScreen extends HTMLElement {
    async connectedCallback() {
        const lang = this.getAttribute("lang") || "en";
        const page = this.getAttribute("page");

        const response = await fetch("/data/welcome-screen.json");
        const data = await response.json();

        const content = data[lang][page];

        this.innerHTML = `
            <div class="welcome-screen-container">
                <div class="content-section">
                    <div class="content-block">
                        <h1 class="heading1">${content.title}</h1>
                    </div>
                    <div class="content-block">
                        <h6 class="heading6">${content.description}</h6>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("welcome-screen", WelcomeScreen);