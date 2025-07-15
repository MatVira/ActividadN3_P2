class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

}

customElements.define('par-impar-lista', ParImparLista);