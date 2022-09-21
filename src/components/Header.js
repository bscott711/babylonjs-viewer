class LocalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<head>
    <script src="https://code.jquery.com/pep/0.4.2/pep.min.js"></script>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</head>`
    }
}

customElements.define('local-header', LocalHeader)