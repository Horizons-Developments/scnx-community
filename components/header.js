class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        const lang = this.getAttribute("lang") || "en";

        if (lang === "en") {
            this.innerHTML = `
                <header class="header">

                    <div class="branding-container">
                        <a href="/">
                            <img class="branding-logo" src="/assets/images/Logo.png" alt="SCNX Community Logo">
                            <span class="branding-sitetitle">SCNX Community</span>
                        </a>
                    </div>

                    <input type="checkbox" id="navigation-toggle" class="navigation-toggle">
                    <label for="navigation-toggle" class="navigation-toggle-label" aria-label="Menü öffnen/schließen">
                        <span></span>
                    </label>

                    <nav class="navigation-container">
                        <ul class="navigation-container-menu">
                            <li class="navigation-element"><a class="navigation-menu-active" href="/">Home</a></li>
                            <li class="navigation-element navigation-submenu"><a href="/products/">Products</a>
                                <ul class="navigation-container-submenu">
                                    <li class="navigation-element"><a href="/products/custom-commands/">Custom Commands</a></li>
                                    <li class="navigation-element"><a href="/products/message-templates/">Message Templates</a></li>
                                    <li class="navigation-element"><a href="/products/custom-solutions/">Custom Solutions</a></li>
                                </ul>
                            </li>  
                            <li class="navigation-element navigation-submenu"><a href="/about-us/">About Us</a>
                                <ul class="navigation-container-submenu">
                                    <li class="navigation-element"><a href="/about-us/about-scnx-community/">About SCNX Community</a></li>
                                    <li class="navigation-element"><a href="/about-us/partner/">Partner</a></li>
                                    <li class="navigation-element"><a href="/about-us/other-projects/">Other Projects</a></li>
                                    <li class="navigation-element"><a href="/about-us/our-team/">Our Team</a></li>
                                    <li class="navigation-element"><a href="/about-us/apply/">Apply</a></li>
                                    <li class="navigation-element"><a href="/about-us/news/">News</a></li>
                                    <li class="navigation-element"><a href="/about-us/feedback/">Feedback</a></li>
                                </ul>
                            </li>
                            <li class="navigation-element"><a href="/help/">Help</a>
                                <ul class="navigation-container-submenu">
                                    <li class="navigation-element"><a href="/help/faq">FAQ</a></li>
                                    <li class="navigation-element"><a href="https://dcserver.link/scnx-community">Discord</a></li>
                                </ul>
                            </li>
                            <li class="navigation-element"><a href="/contact/">Contact</a></li>
                            <li class="navigation-element"><a href="https://dashboard.scnx-community.com">Dashboard</a></li>
                            <li class="navigation-element"><a href="/de/">Deutsch</a></li>
                        </ul>
                    </nav>
                    
                </header>
            `;
        }

        if (lang === "de") {
            this.innerHTML = `
                <header class="header">

                    <div class="branding-container">
                        <a href="/de/">
                            <img class="branding-logo" src="/assets/images/Logo.png" alt="SCNX Community Logo">
                            <span class="branding-sitetitle">SCNX Community</span>
                        </a>
                    </div>

                    <input type="checkbox" id="navigation-toggle" class="navigation-toggle">
                    <label for="navigation-toggle" class="navigation-toggle-label" aria-label="Menü öffnen/schließen">
                        <span></span>
                    </label>

                    <nav class="navigation-container">
                        <ul class="navigation-container-menu">
                            <li class="navigation-element"><a class="navigation-menu-active" href="/de/">Startseite</a></li>
                            <li class="navigation-element navigation-submenu"><a href="/de/products/">Produkte</a>
                                <ul class="navigation-container-submenu">
                                    <li class="navigation-element"><a href="/de/products/custom-commands/">Eigene Befehle</a></li>
                                    <li class="navigation-element"><a href="/de/products/message-templates/">Nachrichten-Vorlagen</a></li>
                                    <li class="navigation-element"><a href="/de/products/custom-solutions/">Individuelle Lösungen</a></li>
                                </ul>
                            </li>  
                            <li class="navigation-element navigation-submenu"><a href="/de/about-us/">Über uns</a>
                                <ul class="navigation-container-submenu">
                                    <li class="navigation-element"><a href="/de/about-us/about-scnx-community/">Über SCNX Community</a></li>
                                    <li class="navigation-element"><a href="/de/about-us/partner/">Partner</a></li>
                                    <li class="navigation-element"><a href="/de/about-us/other-projects/">Andere Projekte</a></li>
                                    <li class="navigation-element"><a href="/de/about-us/our-team/">Unser Team</a></li>
                                    <li class="navigation-element"><a href="/de/about-us/apply/">Bewerben</a></li>
                                    <li class="navigation-element"><a href="/de/about-us/news/">Neuigkeiten</a></li>
                                    <li class="navigation-element"><a href="/de/about-us/feedback/">Feedback</a></li>
                                </ul>
                            </li>
                            <li class="navigation-element"><a href="/de/help/">Hilfe</a>
                                <ul class="navigation-container-submenu">
                                    <li class="navigation-element"><a href="/de/help/faq">FAQ</a></li>
                                    <li class="navigation-element"><a href="https://dcserver.link/scnx-community">Discord</a></li>
                                </ul>
                            </li>
                            <li class="navigation-element"><a href="/de/contact/">Kontakt</a></li>
                            <li class="navigation-element"><a href="https://dashboard.scnx-community.com">Dashboard</a></li>
                            <li class="navigation-element"><a href="/">English</a></li>
                        </ul>
                    </nav>
                    
                </header>
            `;
        }

        
    }
}

customElements.define("website-header", WebsiteHeader);