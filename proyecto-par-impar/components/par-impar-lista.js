class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `

      <style>

        ul {

          font-family: Arial;
          padding-left: 20px;

        }

        li {
          margin: 3px 0;
        }

      </style>

      <h3>Resultado:</h3>
      <ul id="lista"></ul>

    `;

    window.addEventListener('rango-seleccionado', (e) => {
      const { inicio, fin } = e.detail;
      this.mostrarLista(inicio, fin);
    });
  }

  

}

customElements.define('par-impar-lista', ParImparLista);