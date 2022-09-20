class LocalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
  Made with&nbsp;
  <img src="/netliheart.svg" alt="Netlify Logo"
    className=styles.logo
    width=20
    height=20
  />
  &nbsp;by<strong>&nbsp;MinesBioImaging</strong>
</footer>`
  }
}

customElements.define('local-footer', LocalFooter)