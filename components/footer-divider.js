class FooterDivider extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="footer-divider">
                <span class="footer-divider-line"></span>
                <span class="footer-divider-icon">i</span>
                <span class="footer-divider-line"></span>
            </div>
        `;
    
    }
}

customElements.define("footer-divider", FooterDivider);